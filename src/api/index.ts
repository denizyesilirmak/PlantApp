export const getCategories = () => {
  return fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories')
    .then(response => response.json())
    .catch(error => {
      console.error('fetch/getCategories', error);
    });
};

export const getQuestions = () => {
    return fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions')
      .then(response => response.json())
      .catch(error => {
        console.error('fetch/getCategories', error);
      });
  };
  
