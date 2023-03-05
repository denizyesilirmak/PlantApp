export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const REQUEST_PLANTCATEGORIES = 'REQUEST_PLANTCATEGORIES';
export const RECEIVE_PLANTCATEGORIES = 'RECEIVE_PLANTCATEGORIES';

export const requestQuestions = () => ({
  type: REQUEST_QUESTIONS,
});

export const recievedQuestion = questions => ({
  type: RECEIVE_QUESTIONS,
  questions: questions,
});

export const requestPlantCategories = () => ({
  type: REQUEST_PLANTCATEGORIES,
});
export const recievedPlantCategories = categories => ({
  type: RECEIVE_PLANTCATEGORIES,
  plantCategories: categories,
});

export const fetchPosts = () => {
  return function (dispatch) {
    dispatch(requestQuestions());
    return fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then(json => {
        dispatch(recievedQuestion(json));
      });
  };
};

export const fetchPlantCategories = () => {
  return function (dispatch) {
    dispatch(requestPlantCategories());
    return fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then(json => {
        dispatch(recievedPlantCategories(json.data));
      });
  };
};
