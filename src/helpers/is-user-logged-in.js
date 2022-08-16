import React from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function IsUserLoggedIn({ user }) {
  return !user ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: ROUTES.DASHBOARD,
      }}
    />
  );
}

IsUserLoggedIn.propTypes = {
  user: PropTypes.object,
};
