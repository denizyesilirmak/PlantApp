import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  REQUEST_PLANTCATEGORIES,
  RECEIVE_PLANTCATEGORIES,
} from '../actions/index';

const initialState = {questions: [], plantCategories: [], loading: false};

const reducer = (state = initialState, action) => {
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
