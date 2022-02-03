import { reduces } from "./reduces";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
export const store = createStore(reduces,applyMiddleware(thunk));