import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./slices/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [setRole] = useState(null);  // Gérer l'état du rôle
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [submitted, setSubmitted] = useState(false);

  const handleLoginForm = () => {
    setIsLoginActive(true);
    setIsSignUpActive(false);
  };

  const handleSignUpForm = () => {
    setIsSignUpActive(true);
    setIsLoginActive(false);
  };

  const closeForm = () => {
    setIsLoginActive(false);
    setIsSignUpActive(false);
  };

  // const handleRoleSelection = (selectedRole) => {
  //   setRole(selectedRole);  // Mettre à jour l'état du rôle
  //   console.log("Role selected:", selectedRole);  // Optionnel : vérifier dans la console
  // };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "admin123") {
      dispatch(login({ role: "admin", token: "admin-token" })); // Save role in Redux
      navigate("/");
    } else if (email === "user@example.com" && password === "user123") {
      dispatch(login({ role: "user", token: "user-token" })); // Save role in Redux
      navigate("/");
    } else {
      alert("Invalid credentials or role selection!");
    }
  };

  return (
    <div className="body">
      <div className="big-cont">
        {/* Sign Up Form */}
        <div
          className={`cont-sign-up ${isSignUpActive ? "active" : ""}`}
          id="signUpForm"
        >
          <div className="left-cont">
            <h1>One of us?</h1>
            <p>If you already have your own account then just log in.</p>
            <button onClick={handleLoginForm}>Enter</button>
          </div>
          <div className="form-container">
            <form>
              <h1>
                <b className="Cr">Create an account</b>
              </h1>
              <h2 className="h2o">Register via social networks</h2>
              <div className="social-media">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  href="https://accounts.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-google"></i>
                </a>
                <a
                  href="https://github.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <i className="or">OR</i>
              <div style={{ display: "flex", width: "100%" }}>
                <input
                  type="text"
                  placeholder="Name"
                  style={{ width: "48%" }}
                />
                <input
                  type="text"
                  placeholder="Surname"
                  style={{ width: "48%" }}
                />
              </div>
              <br />
              <div style={{ display: "flex", width: "100%" }}>
                <input
                  type="text"
                  placeholder="Email"
                  style={{ width: "48%" }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  style={{ width: "48%" }}
                />
              </div>
              <br />
              <div className="conditions">
                {/* <input type="checkbox" name="terms" id="terms" /> */}
                <p>
                  {/* I agree to{" "}
                  <i className="terms-conditions">the Terms and Conditions</i> */}
                </p>
              </div>
              <button>Registration</button>
            </form>
          </div>
        </div>

        {/* Login Form */}
        <div
          className={`cont-login ${isLoginActive ? "active" : ""}`}
          id="loginForm"
        >
          <form className="form-container" onSubmit={handleLogin}>
            <h1>
              <b className="Cr">Log in to your account</b>
            </h1>
            <h2 className="h2o">Log in using social media</h2>
            <div className="social-media">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://accounts.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-google"></i>
              </a>
              <a
                href="https://github.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
            <i className="or">OR</i>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Enter</button>

          </form>
          <div className="right-cont">
            <h1>
              <b>New here?</b>
            </h1>
            <p>If you don`t have an account, just register.</p>
            <button onClick={handleSignUpForm}>Registration</button>
          </div>
        </div>

        {/* Close Button */}
        <button className="top-right-close-btn" onClick={closeForm}>
          x
        </button>
      </div>

      <style>{`
        :root {
          --first-color-set1: rgb(27, 53, 8);
          --second-color-set1: #ffffff;
          --third-color-set1: rgb(196, 173, 59);
          --fourth-color-set1: rgb(159, 249, 99);
          --first-color-set2: #feffdf;
          --second-color-set2: #dde0ab;
          --third-color-set2: rgb(80, 94, 56);
          --fourth-color-set2: rgb(212, 211, 122);
        }

        .body {
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .cont-login,
        .cont-sign-up {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s, visibility 0.5s;
        }

        .cont-login.active,
        .cont-sign-up.active {
          opacity: 1;
          visibility: visible;
        }

        .or {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px 0;
          font-size: 20px;
          font-weight: 500;
          color: var(--first-color-set1);
        }

        .or::before,
        .or::after {
          content: "";
          flex: 1;
          height: 1px;
          background: var(--first-color-set1);
        }

        .or::before {
          margin-right: 10px;
        }

        .or::after {
          margin-left: 10px;
        }

        .top-right-close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          border: none;
          font-size: 24px;
          cursor: pointer;
          background: transparent;
          color: var(--first-color-set1);
        }

        .big-cont {
          display: flex;
          width: 100%;
          height: 100vh;
          justify-content: center;
          align-items: center;
        }

        .left-cont,
        .right-cont {
          width: 25%;
          height: 100%;
          text-align: center;
          display: flex;
          padding: 15px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(
            45deg,
            var(--third-color-set2),
            var(--fourth-color-set2)
          );
          color: #fff;
          border-radius: 15px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .left-cont h1,
        .right-cont h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .left-cont p,
        .right-cont p {
          font-size: 1.2rem;
          font-weight: lighter;
          margin-bottom: 20px;
        }

        .left-cont button,
        .right-cont button {
          padding: 20px 55px;
          border: none;
          background: white;
          font-size: 1.2rem;
          font-weight: bold;
          border-radius: 50px;
          cursor: pointer;
          transition: background 0.3s, box-shadow 0.3s;
        }

        .left-cont button:hover,
        .right-cont button:hover {
          background: var(--third-color-set2);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          color: #fff;
        }

        .social-media a {
          text-decoration: none;
          font-size: 24px;
          margin: 0 10px;
          color: rgb(63, 65, 29);
          transition: color 0.3s;
        }

        .social-media a:hover {
          color: var(--third-color-set2);
        }

        .form-container {
          width: 75%;
          display: flex;
          text-align: center;
          align-items: center;
          background: var(--second-color-set1);
          border-radius: 10px;
          padding: 40px;
          flex-direction: column;
        }

        .h2o {
          animation: none !important;
          color: rgb(63, 65, 29);
        }
        .Cr {
          color: rgb(37, 74, 10);
        }

        .form-container h1 {
          margin-top: 70px;
        }

        .form-container input {
          width: 48%;
          padding: 12px;
          margin: 8px 1%;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
          transition: border 0.3s;
        }

        .form-container input:focus {
          border: 1px solid var(--third-color-set2);
          box-shadow: 0 0 5px var(--third-color-set2);
        }

        .form-container button {
          padding: 12px 30px;
          border: none;
          background: var(--third-color-set2);
          color: #fff;
          font-size: 1.2rem;
          font-weight: bold;
          border-radius: 50px;
          cursor: pointer;
          transition: background 0.3s, box-shadow 0.3s;
        }

        .form-container button:hover {
          background: var(--fourth-color-set2);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .terms-conditions {
          color: var(--third-color-set2);
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Login;
