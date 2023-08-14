import { PUSH_NOTIFICATION } from "../constants/actions";
import COMMON from "../constants/common";
import { ACCESS_TOEKN, addEducation, LOADER } from "./actions";
import {
  ADD_EDUCATION,
  DELETE_EDUCATION,
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
} from "./actions";

// Reducer

export interface NotificationProps {
  isOpen: boolean;
  type?: "error" | "info" | "success" | "warning";
  message?: string;
  handleClose?: () => void;
}
interface State {
  educationList: any[];
  experenceList: any[];
  isLoading: boolean;
  notification: {};
  isAnonymous: boolean;
  access_token: string;
}
type Action = {
  type:
    | typeof ADD_EDUCATION
    | typeof DELETE_EDUCATION
    | typeof ADD_EXPERIENCE
    | typeof LOADER
    | typeof PUSH_NOTIFICATION;
  payload: any;
};
const initialState: State = {
  educationList: [],
  experenceList: [],
  isLoading: false,
  notification: {},
  isAnonymous: true,
  access_token: "",
};

export const loadingActionReducer = (state = initialState, action) => {
  switch (action.type) {
    // my-acttions
    case ADD_EDUCATION:
      return {
        ...state,
        educationList: [...state.educationList, action.payload],
      };
    case DELETE_EDUCATION:
      return {
        ...state,
        educationList: state.educationList.filter(
          (edu, index) => index !== action.payload
        ),
      };
    case ADD_EXPERIENCE:
      return {
        ...state,
        experienceList: [...state.experenceList, action.payload],
      };
    case DELETE_EXPERIENCE:
      return {
        ...state,
        experienceList: state.experenceList.filter(
          (exp, index) => index !== action.payload
        ),
      };

    case LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case PUSH_NOTIFICATION:
      return { ...state, notification: action.payload };

    case COMMON.ANONYMOUS:
      return {
        ...state,
        isAnonymous: action.payload,
      };

    case ACCESS_TOEKN:
      return {
        ...state,
        access_token: action.payload,
      };

    default:
      return state;
  }
};
