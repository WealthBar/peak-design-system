class DefaultError extends Error {
  constructor(errorCode, message, rootError) {
    super(message);
    this.code = errorCode;
    this.rootError = rootError;
  }
}

class AuthError extends DefaultError {
  constructor(message, rootError) {
    super('FAILED_LOGIN', message, rootError);
  }

  static ofType(error) {
    return error.code === 'FAILED_LOGIN';
  }
}

export {
  DefaultError,
  AuthError,
};
