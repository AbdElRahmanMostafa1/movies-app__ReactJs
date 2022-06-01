import React from "react";
import { Link } from "react-router-dom";

const Alert = ({ msg }) => {
  return (
    <section>
      <div className="alert alert-danger text-center w-100" role="alert">
        {msg === "Network Error" ? (
          <p>{msg}! Please check your network</p>
        ) : (
          <p>
            Oops! Something went wrong <Link to="/">Go to Home Page</Link>
          </p>
        )}
      </div>
    </section>
  );
};

export default Alert;
