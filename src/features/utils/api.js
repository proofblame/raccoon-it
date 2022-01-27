const BASE_URL = 'https://raccoon-it.dev';

function responce(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(
      new Error(`Ошибка ${res.status} - ${res.statusText}`)
    );
  }
}

export const sendRequest = (data) => {
  return fetch(`${BASE_URL}/api/mail/send`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/',
      'Access-Control-Request-Method': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  // .then((res) => {
  //   if (res.ok) {
  //     return res.json();
  //   } else {
  //     return Promise.reject(
  //       new Error(`Ошибка ${res.status} - ${res.statusText}`)
  //     );
  //   }
  // })
  // .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};
