import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { get, isEqual, omit } from "lodash";
import InfiniteScroll from "react-infinite-scroller";
import { useSelector, useDispatch } from "react-redux";

import BasicTemplate from "Template/BasicTemplate";
import NewsList from "Container/NewsList";
import Loading from "Components/Loading";
import {
  updateNewsHeadlines,
  increaseNewsPage,
} from "Redux/TopHeadlines/headlines.action";
import { sourceNews } from "./sourceNews";

const HomePage = () => {
  const dispatch = useDispatch();

  const {
    isFetching = false,
    data = [],
    limit = 20,
    page = 1,
    totalResults = 0,
    keyword = "",
  } = useSelector((state = {}) => get(state, "topHeadlines", {}), isEqual());

  const apiKey = process.env.REACT_APP_API_KEY || "";

  useEffect(() => {
    const source = axios.CancelToken.source();

    (async () => {
      const params = {
        sources: sourceNews,
        apiKey,
        q: keyword,
        pageSize: limit,
        page: page,
      };

      await dispatch(
        updateNewsHeadlines({
          endpoint: keyword ? "/everything" : "/top-headlines",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          options: {
            params: keyword ? params : omit(params, ["q"]),
            cancelToken: source.token,
          },
        })
      );
    })();

    return () => {
      source.cancel();
    };
  }, [page, limit, keyword, apiKey, dispatch]);

  // load more item
  const hasMoreItems = data.length < totalResults;
  const getMoreItems = useCallback(async () => {
    if (data.length === page * limit) {
      await dispatch(increaseNewsPage());
    }
  }, [data.length, limit, page, dispatch]);

  return (
    <BasicTemplate>
      <div className="home-page">
        <InfiniteScroll
          pageStart={0}
          loadMore={getMoreItems}
          hasMore={hasMoreItems}
          threshold={500}
        >
          <NewsList items={data || []} />
        </InfiniteScroll>
        {isFetching ? (
          <div style={{ height: "250px" }}>
            <Loading />
          </div>
        ) : (
          data?.length === 0 && (
            <div>
              <h3 className="mt-3">
                No news headlines {keyword && ` with keyword: '${keyword}'`}
              </h3>
            </div>
          )
        )}
      </div>
    </BasicTemplate>
  );
};

export default HomePage;
