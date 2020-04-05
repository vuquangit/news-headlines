import React, {
  Children,
  useState,
  forwardRef,
  cloneElement,
  useEffect,
} from "react";
import { Input as InputAntd } from "antd";
import classNames from "classnames";

import "./input.scss";

const WrappedInput = ({ forwardedRef, props, children }) => {
  const {
    value = "",
    onChange,
    placeholder = "",
    prefix = null,
    className = "",
    ...restProps
  } = props;
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    value ? setIsChanged(true) : setIsChanged(false);
  }, [value]);

  const handleInputOnchange = (e) => {
    if (onChange) onChange(e);
  };

  const classInput = classNames(
    "input-advance__content--input",
    {
      "input-advance__content--input-change": isChanged,
    },
    className
  );
  const classLabel = classNames(
    "input-advance__content--label",
    {
      "input-advance__content--label-prefix": !!prefix,
    },
    {
      "input-advance__content--label-change": isChanged,
    }
  );

  // pass props to chidren component
  const _children = Children.map(children, (child) =>
    cloneElement(child, {
      ...restProps,
      prefix,
      className: classInput,
      value,
      onChange: handleInputOnchange,
      ref: forwardedRef,
    })
  );

  return (
    <div className="input-advance">
      <label className="input-advance__content">
        <div className={classLabel}>
          <span>{placeholder}</span>
        </div>
        {_children}
      </label>
    </div>
  );
};

const Input = forwardRef((props, ref) => (
  <WrappedInput props={props} forwardedRef={ref}>
    <InputAntd />
  </WrappedInput>
));
Input.displayName = "Input";

const Password = forwardRef((props, ref) => (
  <WrappedInput props={props} forwardedRef={ref}>
    <InputAntd.Password />
  </WrappedInput>
));
Password.displayName = "Password";

export { Input, Password };
