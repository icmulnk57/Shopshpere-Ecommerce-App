import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";


const Pagenotfound = () => {
  return (
    <Layout title={"Go Back - Page Not Found"}>
      <div className="pnf-container">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops! Page Not Found</h2>
        <p className="pnf-text">
          The page you are looking  doesn't
          exist. Let's go back to a safer place!
        </p>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
