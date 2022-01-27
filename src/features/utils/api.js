const BASE_URL = 'https://raccoon-it.dev';

// function getResponseData(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     return res.json().then((res) => Promise.reject(new Error(res.message || res.error)));
//   }
// }

const sendRequest = async (data) => {
  const res = await fetch(`${BASE_URL}/api/mail/send`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/',
      'Access-Control-Request-Method': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  // return getResponseData(res);
};
const api = {
  sendRequest
}
export default api