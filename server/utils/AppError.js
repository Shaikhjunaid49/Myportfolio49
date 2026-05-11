class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.success = false;

    // status type
    this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";

    // capture stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;