// IMPLEMENTING 404 ERROR
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`); //req.originalUrl=> is the url the user entered
  res.status(404);
  next(error);
};

// IMPLEMENTING ERROR HANDLING MIDDLEWARE 9custom error message=> json instead of html)
const errorHandler = (err, req, res, next) => {
  //sometimes even errors could have a statuscode of 200 so we need to change them to the 500 server error relm
  //if it's not 200 it will have it's original status code.
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, //the stack of the error object is it's explanation (we will show it only in dev)
  });
};

export { notFound, errorHandler };

// explanation of error handling in node
// https://www.youtube.com/watch?v=UVAMha41dwo
