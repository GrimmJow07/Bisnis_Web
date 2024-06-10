import React, { useState } from "react";
import Link from "next/link";
import styles from "./loginForm.module.css";
import { userAccount } from "@/app/constant/data";

const LoginForm = () => {
  const userAccount = [
    {
      username: "admin",
      password: "admin",
    },
  ];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!username || !password) {
      return;
    }

    // Find user in the userAccount array
    const user = userAccount.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Redirect to dashboard page
      window.location.href = "/pages/dashboard";
    } else {
      setUsername(""); // Clear username field
      setPassword(""); // Clear password field
    }
  };

  return (
    <div className={styles.bigforumLogin}>
      <div className={styles.divdFlex}>
        <div className={styles.divpositionRelative}>
          <div className={styles.divcol}>
            <b className={styles.BigForum}>BigForum</b>
            <img
              className={styles.asetIconLoginpng}
              alt=""
              src="/images/aseticonloginpng@2x.png"
            />
            <img
              className={styles.asetLoginKiripngIcon}
              alt=""
              src="/images/asetloginkiripng@2x.png"
            />
          </div>
          <div className={styles.divcol1}>
            <div className={styles.divdFlex1}>
              <div className={styles.divdFlex2}>
                <img
                  className={styles.bigGroupWhitepngIcon}
                  alt=""
                  src="/images/big-group-whitepng@2x.png"
                />
              </div>
              <div className={styles.ptextCenter}>
                <b className={styles.loginToBig}>Login to BIGForum</b>
              </div>

              <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    style={{
                      paddingLeft: "20px",
                      border: "none",
                      backgroundColor: "white",
                    }}
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.input}
                    required
                  />
                  <input
                    type="password"
                    style={{
                      paddingLeft: "20px",
                      border: "none",
                      backgroundColor: "white",
                    }}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input1}
                    required
                  />
                  <button
                    type="submit"
                    className={styles.button}
                    style={{ border: "none" }}
                  >
                    Login
                  </button>
                </form>
              </div>
              <div className={styles.ptextCenter1}>
                <div
                  className={styles.inputValidUsername}
                  style={{ width: "300px" }}
                >
                  {formSubmitted &&
                    !userAccount.find(
                      (user) =>
                        user.username === username && user.password === password
                    ) && (
                      <span
                        style={{
                          width: "300px",
                          marginTop: 30,
                          marginBottom: 20,
                          color: "black",
                          backgroundColor: "#D37676",
                          borderRadius: 10,
                        }}
                      >
                        Username atau Password tidak sesuai
                      </span>
                    )}
                </div>
              </div>
            </div>
            <img
              className={styles.asetLoginKananpngIcon}
              alt=""
              src="/images/asetloginkananpng@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
