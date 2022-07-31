/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, put, takeEvery } from 'redux-saga/effects';
import { UserRating } from '../algorithms';
import { GetUserData } from '../api';
import { getUser, getUserSuccess, setError, setRating, setRepoScore } from '../slices/user';
import { APIData } from '../types';


// import { RatingContext } from '../contexts/RatingContext';
// import { useContext } from 'react';

export interface SyncAction {
  type: string;
  payload: string;
}

function* setUser({ payload }: SyncAction) {
  try {
  // const { isRepoSafe, setIsRepoSafe, overAllScore, setOverAllScore,setRepoScore } = useContext(RatingContext);
    const data: APIData = yield GetUserData(payload[0]);

    if (data.user) {
      const userRating = new UserRating(data.user, data.repos, data.isStarred, payload[1]);
      const result = userRating.getResult();
      // setRepoScore(userRating.rateRepo());
      // console.log("Score:",userRating.rateRepo());
      // console.log(result);
      yield put(setRating(result));
      yield put(setRepoScore(userRating.rateRepo()));
      yield put(getUserSuccess(data));
    }
  } catch (err: any) {
    yield put(setError(err.response?.data.message || err.message || 'User Not Found'));
  }
}

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
  yield all([takeEvery(getUser.type, setUser)]);
}

export default rootSaga;
