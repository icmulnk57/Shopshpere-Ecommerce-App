import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard - SHOPSPHERE"}>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card p-4 shadow">
              <h2 className="mb-4">Welcome, {auth?.user?.name}!</h2>
              <div className="row">
                <div className="col-md-6">
                  <h4>Email:</h4>
                  <p>{auth?.user?.email}</p>
                </div>
                <div className="col-md-6">
                  <h4>Address:</h4>
                  <p>{auth?.user?.address || "No address provided"}</p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => console.log("Implement address update")}
                  >
                    Update Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
