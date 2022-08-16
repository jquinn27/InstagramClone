import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { getUserPhotosByUserId } from "../../services/firebase";
import Header from "./header";
import Photos from "./photos";

export default function Profile({ user }) {
  return <div>{user.fullName}</div>;
}
