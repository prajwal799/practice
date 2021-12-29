import { render } from "react-dom";
import reduce from "./reduce";
import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
export const store = createStore(reduce,applyMiddleware(thunk))