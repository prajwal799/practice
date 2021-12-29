import { render } from "react-dom";
import reduce from "./reduce";
import {createStore} from "redux"

export const store = createStore(reduce)