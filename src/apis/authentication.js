export const apiLogin = (fetchAPI, { email, password }) =>
  fetchAPI("/api/v1/login", {
    method: "POST",
    body: { email, password },
  });

export const apiSignUp = (fetchAPI, { email, password, rePassword }) =>
  fetchAPI("/api/v1/register", {
    method: "POST",
    body: { email, password, password_confirmation: rePassword },
  });
