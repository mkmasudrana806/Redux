// counter store
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";
import {composeWithDevtools} from "redux-devtools-extensions"

const store = createStore(rootReducer, composeWithDevtools(applyMiddleware(logger, myLogger)));

export default store;
