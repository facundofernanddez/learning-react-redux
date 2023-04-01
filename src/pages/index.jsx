import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/users/userSlice";

export const Index = () => {
  const emailField = useRef(null);
  const passwordField = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get("http://localhost:3000/users").then((response) => {
      const users = response.data;
      const userToLog = users.find(
        (user) => user.email === emailField.current.value
      );

      if (userToLog) {
        if (userToLog.password === passwordField.current.value) {
          console.log("Credenciales validas");
          dispatch(
            setUser({
              email: userToLog.email,
              fullName: `${userToLog.first_name} ${userToLog.last_name}`,
              token: Date.now(),
            })
          );
        }
      }
    });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Email</label>
        <input type="email" className="form-control" ref={emailField} />
        <label className="form-label">Password</label>
        <input type="password" className="form-control" ref={passwordField} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
