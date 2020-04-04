import * as actionTypes from "./actionTypes";

const updateProfile = (data = {}) => ({
  type: actionTypes.PROFILE_UPDATE,
  data,
});

const clearProfile = () => ({
  type: actionTypes.PROFILE_CLEAR,
});

export { updateProfile, clearProfile };
