import {Dispatch} from 'redux';
import {ICategory, IQuestion} from '../../../types';
import {CategoryService, QuestionsService} from '../../api';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const REQUEST_PLANTCATEGORIES = 'REQUEST_PLANTCATEGORIES';
export const RECEIVE_PLANTCATEGORIES = 'RECEIVE_PLANTCATEGORIES';

export const requestQuestions = () => ({
  type: REQUEST_QUESTIONS,
});

export const recievedQuestion = (questions: IQuestion[]) => ({
  type: RECEIVE_QUESTIONS,
  questions: questions,
});

export const requestPlantCategories = () => ({
  type: REQUEST_PLANTCATEGORIES,
});
export const recievedPlantCategories = (categories: ICategory[]) => ({
  type: RECEIVE_PLANTCATEGORIES,
  plantCategories: categories,
});

export const fetchPosts = () => {
  return function (dispatch: Dispatch) {
    dispatch(requestQuestions());
    QuestionsService().then(questions => {
      dispatch(recievedQuestion(questions));
    });
  };
};

export const fetchPlantCategories = () => {
  return function (dispatch: Dispatch) {
    dispatch(requestPlantCategories());
    CategoryService().then(categories => {
      dispatch(recievedPlantCategories(categories));
    });
  };
};
