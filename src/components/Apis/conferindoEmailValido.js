import axios from "axios";

function verificandoEmail() {
  const options = {
    method: "GET",
    url: "https://emailchecker-email-verification-v1.p.rapidapi.com/api/a/v1",
    params: { "{key}": "yourapikey", "test@example.com": "test@example.com" },
    headers: {
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
      "X-RapidAPI-Host": "emailchecker-email-verification-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

export default verificandoEmail;
