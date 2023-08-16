import { PUSH_NOTIFICATION } from "../constants/actions";
export const ADD_EDUCATION = "ADD_EDUCATION";
export const DELETE_EDUCATION = "DELETE_EDUCATION";
export const ADD_EXPERIENCE = "ADD_experience";
export const DELETE_EXPERIENCE = "DELETE_experience";
export const DELETE_SKILL="DELETE_SKILL";
export const ADD_SKILL="ADD_SKILL";

// Action Type
export const LOADER = "LOADER";
export const ACCESS_TOEKN = "ACCESS_TOEKN";

// Action
export const setLoader = (loading) => {
  return {
    type: LOADER,
    payload: loading,
  };
};

export const setAnonymousUser = (data) => {
  return {
    type: LOADER,
    payload: data,
  };
};

export const pushNotification = (data) => {
  return { type: PUSH_NOTIFICATION, payload: data };
};

export const setAccessToken = (token) => {
  return {
    type: ACCESS_TOEKN,
    payload: token,
  };
};

// my tokens
export const addEducation = (data) => {
  return {
    type: ADD_EDUCATION,
    payload: data,
  };
};
export const deleteEducation = (index) => {
  return {
    type: DELETE_EDUCATION,
    payload: index,
  };
};
export const addExperience = (data) => {
  return {
    type: ADD_EXPERIENCE,
    payload: data,
  };
};
export const deleteExperience = (index) => {
  return {
    type: DELETE_EXPERIENCE,
    payload: index,
  };
};
export const addSkill = (data) => {
  return {
    type: ADD_SKILL,
    payload: data,
  };
};
export const deleteSkill = (index) => {
  return {
    type: DELETE_SKILL,
    payload: index,
  };
};
