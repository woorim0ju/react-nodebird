import { all, fork } from 'redux-saga/effects';

//yield는 await 과 같은 역할
//call: 동기함수 호출, 결과를 블로킹하고 기다림 (axios.get().then()과 같음)
//fork: 비동기함수 호출, 결과를 논블로킹 바로 다음 코드 진행(then()이 없는 것과 같음))
//takeLatest: 실수로 두번 클릭 방지 
//throttle: 마지막 함수가 호출된 후 일정시간 동안 다시 호출 되지 않

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ])

}