/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Navpage from "../Components/Navpage";
import { useEffect, useState } from "react";
import styles from "./Loginn.module.css";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("darsgajul2003@gmail.com");
  const [password, setPassword] = useState("darshil31");
  const [login, setLogin] = useState("");

  // const { login, isAuthenticated } = useAuth();
  const handleLogin = () => {
    setLogin = "/app";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (email && password) login(email, password);
  };

  // useEffect(
  //   function () {
  //     if (isAuthenticated) navigate("/app", { replace: true });
  //   },
  //   [isAuthenticated, navigate]
  // );
  return (
    <main className={styles.login_page}>
      <Navpage />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label className={styles.inputs}>
            Email Address
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>
        <div>
          <label className={styles.inputs}>
            Password
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <div>
            <Button>
              <Link to="/app" className="cta">
                Login
              </Link>
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
};
export default Login;
