import { useDispatch, useSelector } from "react-redux";
import { unsetUser } from "../reducers/users/userSlice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(unsetUser());
    navigate("/");
  };

  return (
    <>
      <h1>Home</h1>
      <p>
        Welcome {user.fullName} / {user.email}
      </p>
      <button className="btn btn-primary" onClick={handleLogout}>
        Log out
      </button>
    </>
  );
};
