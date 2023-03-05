const initialState = {
  questions: [],
  categories: [],
  loading: false
};

export enum ACTION_LIST {
  GET_CATEGORIES = 'GET_CATEGORIES',
  GET_QUESTIONS = 'GET_QUESTIONS',
}

interface PostReducerAction {
  type: ACTION_LIST;
}

const reducer = (state = initialState, action: PostReducerAction) => {
  switch (action.type) {
    case ACTION_LIST.GET_CATEGORIES:
      return {...state, loading: true};
    case ACTION_LIST.GET_QUESTIONS:
      return {...state, loading: true};
    default:
      return state;
  }
};

export default reducer;
