import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doesUsernameExist, getUserByUsername } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import Header from "../components/Header";
import UserProfile from "../components/profile/index";

export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function checkUserExists() {
      const [user] = await getUserByUsername(username);
      if (user?.userId) {
        setUser(user);
      } else {
        navigate(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();
  }, [username, navigate]);

  return user?.username ? (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
}
