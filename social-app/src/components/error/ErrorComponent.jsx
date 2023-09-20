import './ErrorComponent.css'; 

const ErrorComponent = ({ errorMsg }) => {
  return (
    <div className="error-container">
      <h2>{errorMsg}</h2>
      <p>
        It seems like you took a wrong turn. No worries, we're here to help you get back on track.
       To access this awesome feature, please log in or sign up. We promise it's worth it!
      </p>
      <button>Login</button>
    </div>
  );
};

export default ErrorComponent;
