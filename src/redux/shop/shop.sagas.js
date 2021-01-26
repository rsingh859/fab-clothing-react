import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsError, fetchCollectionsSuccess } from './shop.action.creators';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    yield console.log("Hey there, Its the saga running!");

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMaps = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionMaps))
    } catch (error) {
        yield put(fetchCollectionsError(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync 
        );
}