export const Authentication = (req, res, next) => {
  const token = req.cookies.token;

  console.log("Token:", token);

  if (!token) {
    console.log("Token tidak ada, mengarahkan ke /login");
    return res.redirect("/login");
  }

  next();
};
