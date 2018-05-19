export const createBotRequest = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8080/createSimpleGame', false);
  xhr.send();
}

export const addStep = (question, correctAnswer) => {
  const xhr = new XMLHttpRequest();
  const url = `http://localhost:8080/addStep?question=${question}&correctAnswer=${correctAnswer}`;
  xhr.open('GET', url, false);
  xhr.send();
}
