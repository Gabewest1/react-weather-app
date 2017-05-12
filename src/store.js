import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { routerReducer ,routerMiddleware } from "react-router-redux"
import createHistory from "history/createBrowserHistory"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import rootSaga from "./sagas"
import reducers from "./reducers"

//create middlewares
const sagaMiddleware = createSagaMiddleware()
const reduxRouterMiddleware = routerMiddleware(createHistory())
const middlewares = [sagaMiddleware, reduxRouterMiddleware]
//create store
let store = createStore(combineReducers(
    {...reducers, router: routerReducer}),
    composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store