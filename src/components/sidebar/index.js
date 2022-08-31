import React, { useEffect } from "react";
import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestions";

export default function Sidebar() {
  const {
    user: { docId, username, fullName, userId, following, profileSrc },
  } = useUser();

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} profileSrc={profileSrc} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
        profileSrc={profileSrc}
      />
    </div>
  );
}
