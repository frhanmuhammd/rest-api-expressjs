import jwt from "jsonwebtoken";

export const getToken = (payload) => {
  const token = jwt.sign(payload, "secret", {
    expiresIn: "1d",
  });

  return token;
};

export const getPayload = (token) => {
  const payload = jwt.verify(token, "secret");

  return payload;
};
