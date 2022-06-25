import React, { useState, useContext, useEffect } from "react";

import { AuthContext } from "../../contexts/Auth";
import api from "../../services/api.service";

import "./styles.scss";

export default function LoginPage() {
  const { authenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userVerification, setUserVerification] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUsers() {
      const emailResponse = await api.get(`users?email=${email}`);
      const passwordResponse = await api.get(`users?senha=${password}`);

      if (emailResponse?.data?.length && passwordResponse?.data?.length) {
        setUserVerification(true);
        console.log(userVerification)
      } else {
        setUserVerification(false);
      }
    }

    getUsers();
  }, [email, password]);

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();

    if (userVerification) {
      login(email, password);
    } else {
      alert("Login ou senha incorretos.");
    }
  };

  return (
    <div id="login">
      <h1>Login Page</h1>
      <p>{String(authenticated)}</p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}
