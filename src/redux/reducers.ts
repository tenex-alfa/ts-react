import { combineReducers } from "redux";

export const sampleDispatch = (state: any = {}, action: any) => {
  return state;
};

export const allReducers = combineReducers([sampleDispatch]);
