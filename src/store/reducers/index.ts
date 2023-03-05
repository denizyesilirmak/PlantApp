import {ICategories, ICategory, IQuestion} from '../../../types';
import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  REQUEST_PLANTCATEGORIES,
  RECEIVE_PLANTCATEGORIES,
} from '../actions/index';

export interface StateType {
  plantCategories: ICategories[];
  questions: IQuestion[];
  loading: boolean;
}

export enum ACTION_LIST {
  REQUEST_QUESTIONS = "REQUEST_QUESTIONS",
  RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS",
  REQUEST_PLANTCATEGORIES = "REQUEST_PLANTCATEGORIES",
  RECEIVE_PLANTCATEGORIES = "RECEIVE_PLANTCATEGORIES",
}

interface reducerAction {
  type: ACTION_LIST;
  questions?: IQuestion[];
  plantCategories?: ICategory[];
  loading?: boolean;
}

const initialState = {questions: [], plantCategories: [], loading: false};

const reducer = (
  state = initialState,
  action: reducerAction,
) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return {...state, loading: true};
    case RECEIVE_QUESTIONS:
      return {...state, questions: action.questions, loading: false};
    case REQUEST_PLANTCATEGORIES:
      return {...state, loading: true};
    case RECEIVE_PLANTCATEGORIES:
      return {
        ...state,
        plantCategories: action.plantCategories,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
