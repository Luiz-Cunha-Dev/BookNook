import { useState } from "react";
import styled from "styled-components";
import { signUp } from "../../services";

export function SignUp({ status, setStatus }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function sendForm(e) {
    e.preventDefault(); 
    if (
      password === confirmPassword &&
      password !== "" &&
      email !== "" &&
      username !== ""
    ) {
      signUp({ username, email, password })
      .then((res) => {
        setStatus("signin")
      })
    }
  }

  return (
    <Container status={status}>
      <div className="forms">
        <h2>CRIE UMA CONTA</h2>
        <form onSubmit={sendForm}>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Nome</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>E-mail</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              required="required"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Senha</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              required="required"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span>Confirmar Senha</span>
            <i></i>
          </div>
          <div className="buttons">
            <button type="submit">Cadastre-se</button>
            <span onClick={() => setStatus("signin")}>Já Tenho Uma Conta</span>
          </div>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 500px;
  height: 620px;
  background-color: transparent;
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  overflow: hidden;
  position: fixed;
  right: ${(props) => (props.status === "signin" ? "-40%" : "36%")};
  transition: linear 1s ${(props) => (props.status === "signup" ? "1s" : "0s")};
  @media (max-width: 614px) {
    width: 90%;
    height: 68%;
    right: ${(props) => (props.status === "signin" ? "-90%" : "5%")};
    margin-top: -15%;
    @media (max-height: 700px) {
      margin-top: 0%;
      height: 80%;
  }
  }
  ::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(0deg, transparent, #45f3ff);
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
  }
  ::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 500px;
    height: 620px;
    background: linear-gradient(0deg, transparent, #45f3ff);
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .forms {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    position: absolute;
    inset: 5px;
    border-radius: 20px;
    background: white;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: darkblue;
      font-weight: bold;
      margin-bottom: 30px;
      margin-top: 30px;
      @media (max-width: 614px) {
        font-weight: 1px;
      }
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      height: 50px;
      width: 420px;
      border: none;
      outline: none;
      padding: 20px 10px 0px;
      font-size: 20px;
      @media (max-width: 614px) {
        height: 50px;
        width: 60%;
      }
    }
  }
  .inputBox {
    position: relative;
    margin-bottom: 30px;
    @media (max-width: 614px) {
      margin-bottom: 1vh;
    }
    span {
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 20px 10px 20px;
      pointer-events: none;
      transition: 0.5s;
      @media (max-width: 614px) {
        font-weight: 10px;
      }
    }
    i {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: darkblue;
      border-radius: 4px;
    }
  }
  .inputBox input:valid ~ span,
  .inputBox input:focus ~ span {
    color: darkblue;
    transform: translateY(-34px);
    font-size: 0.75em;
  }
  .buttons {
    margin-top: 20px;
    @media (max-width: 614px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    button {
      margin-right: 20px;
      width: 160px;
      height: 42px;
      border-radius: 20px;
      border: thin;
      background-color: darkblue;
      color: white;
      font-size: 19px;
      cursor: pointer;
      transition: linear 0.1s;
      @media (max-width: 614px) {
        margin-right: 0;
        margin-bottom: 10%;
      }
      :hover {
        font-weight: bold;
      }
    }
    span {
      cursor: pointer;
    }
  }
`;
