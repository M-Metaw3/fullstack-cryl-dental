class AppError extends Error {
    constructor(statuscode, message) {
      super();
      this.statuscode = statuscode;
      this.message = message;
  
      if (!AppError.instance) {
        console.log('Creating a new instance of ErrorHandler');
        AppError.instance = this;
      } else {
        console.log('Returning the existing instance of ErrorHandler');
      }
  
      console.log('Old Object:');
      console.log('New Object:');
  
      return AppError.instance;
    }
  }
  
  module.exports = AppError;

  