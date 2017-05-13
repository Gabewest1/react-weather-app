import { createStore, combineReducers, applyMiddleware } from "redux"
import { routerReducer ,routerMiddleware } from "react-router-redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import rootSaga from "./sagas"
import reducers from "./reducers"

export default function createStoreWithHistory(history) {
    //create history
    //create middlewares
    const sagaMiddleware = createSagaMiddleware()
    const reduxRouterMiddleware = routerMiddleware(history)
    const middlewares = [sagaMiddleware, reduxRouterMiddleware]
    //create store
    let store = createStore(combineReducers(
        {...reducers, router: routerReducer}),
        composeWithDevTools(applyMiddleware(...middlewares))
    )

    sagaMiddleware.run(rootSaga)

    return store
}