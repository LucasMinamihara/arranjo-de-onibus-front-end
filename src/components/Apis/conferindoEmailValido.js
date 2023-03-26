const axios = require("axios");

export function conferindoEmail(email) {
  return {
    method: "GET",
    url: "https://email-checker.p.rapidapi.com/verify/v1",
    params: { email },
    headers: {
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
      "X-RapidAPI-Host": "email-checker.p.rapidapi.com",
    },
  };
}

axios
  .request(conferindoEmail())
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
