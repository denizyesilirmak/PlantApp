import {StateType} from '../reducers';

export const getQuestions = (state: StateType) => state.questions;

export const getCategories = (state: StateType) => state.plantCategories;
