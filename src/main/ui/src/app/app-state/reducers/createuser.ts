import * as createPersonActions from '../actions/createPerson';
import { Action, createReducer, on } from '@ngrx/store';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    people: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    people: []
};

export const createPersonReducer = createReducer(
  initialState,
  on(createPersonActions.createPerson, state => ({...state, isLoading: true, isLoadingSuccess: false, login: undefined})),
  on(createPersonActions.createPersonSuccess, (state, person) => ({...state, isLoading: false, isLoadingSuccess: true, person})),
  on(createPersonActions.createPersonFailure, (state, person) => ({...state, isLoading: false, isLoadingSuccess: true, person}))
);

export function reducer(state: State | undefined, action: Action) {
  return createPersonReducer(state, action);
}

export const getPeople = (state: State) => {
    return {
      isLoading: state.isLoading,
      isLoadingSuccess: state.isLoadingSuccess,
      login: state.people };
};
