import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

function loginAPI(data) {
    //return axios.post('/api/login', data)
}

//const l = logIn({ type: 'LOG_IN_REQUEST', data: { id: goddino@abc.com}});


function* logIn(action) {
    try {
        yield delay(1000);
        //const result = yield call(loginAPI, action.data)
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: action.data
        })
    }
    catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data
        })
    }
}

function logOutAPI() {
    return axios.post('/api/loginout')
}


function* logOut() {
    try {
        yield delay(1000);
        //const result = yield call(logOutAPI)
        yield put({
            type: 'LOG_OUT_SUCCESS',
            //data: result.data
        })
    }
    catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data
        })
    }
}

function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn)
}


function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut)
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
    ])
}