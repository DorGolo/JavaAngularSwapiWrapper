import { createAction, props } from '@ngrx/store';
import { Person } from '../models';

export const CREATE_USER = '[CREATE USER] Create Person API ';
export const CREATE_USER_SUCCESS = '[CREATE USER] Create Person API Success';
export const CREATE_USER_FAILURE = '[CREATE USER] Create Person API Failure';

export const createPerson = createAction(
  CREATE_USER,
  props<Person>()
);

export const createPersonSuccess = createAction(
  CREATE_USER,
  props<Person>()
);

export const createPersonFailure = createAction(
  CREATE_USER,
  props<Person>()
);
