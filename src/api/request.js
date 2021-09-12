import axios from "axios";

export const request = ({ method, url, data, params }) => {
  const variables = {
    method,
    url,
    data,
    params,
  };

  const token = localStorage.getItem("token");

  if (token) {
    variables.headers = {
      Authorization: "Bearer " + token,
    };
  }

  return axios(variables);
};