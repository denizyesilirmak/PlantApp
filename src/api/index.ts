export const CategoryService = () => {
  return fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories')
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
    .then(json => {
      return json.data;
    });
};

export const QuestionsService = () => {
  return fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions')
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
    .then(json => {
      return json;
    });
};
