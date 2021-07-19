import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    //const middlewares = [sagaMiddleware, loggerMiddleware];
    const middlewares = [sagaMiddleware];
    //redux 기능 확장 - enhancer
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares)) //배포용
        : composeWithDevTools(applyMiddleware(...middlewares)) //개발용-devtools 연결

    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;