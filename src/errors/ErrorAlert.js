const ErrorAlert = ({ errors }) => {
  if (Array.isArray(errors) && errors.length > 0) {
    return (
      <div class="alert alert-danger" role="alert">
        Error: {errors.join(", ")}
      </div>
    );
  }
  return null;
};

export default ErrorAlert;
