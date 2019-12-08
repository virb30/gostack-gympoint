import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `students/${id}`);

    yield put(signInSuccess(response.data.id));
  } catch (err) {
    Alert.alert('Falha no login', 'Aluno não localizado');

    yield put(signInFailure());
  }
}

export default all([takeLatest('@student/SIGN_IN_REQUEST', signIn)]);
