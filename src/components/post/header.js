import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getPicByUsername } from "../../services/firebase";

export default function Header({ username }) {
  const [profileSrc, setProfileSrc] = useState("");
  useEffect(() => {
    async function getPic() {
      const response = await getPicByUsername(username);
      setProfileSrc(response);
    }
    getPic();
  }, [username]);

  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <Link to={`/p/${username}`} className="flex items-center">
          <img
            className="rounded-full h-8 w-8 mr-3"
            src={profileSrc}
            alt={`${username} profile`}
          />
          <p className="font-bold">@{username}</p>
        </Link>
      </div>
    </div>
  );
}
