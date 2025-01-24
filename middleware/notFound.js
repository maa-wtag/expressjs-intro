const notFound = (req, res) => {
  const error = new Error("Not Found");
  error.status = 404;
  throw error;
};
export default notFound;
