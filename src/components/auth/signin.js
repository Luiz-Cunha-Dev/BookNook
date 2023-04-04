import styled from "styled-components";
import userPicture from "../../imgs/userPicture.png";
import { useNavigate } from "react-router-dom";

export function SignIn({status, setStatus}) {

  const navigate = useNavigate();

  return (
    <Back status={status}>
    <Container>
      <div className="forms">
        <h2>BEM VINDO</h2>
        <form>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>E-mail</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Senha</span>
            <i></i>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/initial")}>Entrar</button>
            <span onClick={() => setStatus("signup")} >Ainda Não Tenho Uma Conta</span>
          </div>
        </form>
      </div>
    </Container>
    <div className="userPicture">
      <img src={userPicture} alt="userPicture" />
    </div>
    </Back>
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
  position: relative;
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
      margin-bottom: 60px;
      margin-top: 130px;
      transition: linear 0.5s;
      @media (max-width: 1675px) {
      margin-top: 160px;
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
    }
  }
  .inputBox {
    position: relative;
    margin-bottom: 40px;
    span {
      font-size: 1em;
      letter-spacing: 0.05em;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 20px 10px 20px;
      pointer-events: none;
      transition: 0.5s;
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
    button {
      margin-right: 20px;
      width: 125px;
      height: 45px;
      border-radius: 20px;
      border: thin;
      background-color: darkblue;
      color: white;
      font-size: 19px;
      cursor: pointer;
      transition: linear 0.1s;
      :hover{
        font-weight: bold;
      }
    }
    span{
        cursor: pointer;
    }
  }
`;

const Back = styled.div`
transition: linear 1s ${props => props.status === "signin" ? "1s" : "0s"};
position: fixed;
right: ${props => props.status === "signup" ? "-500px" : "36%"};
  .userPicture{
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: white;
    position: absolute;
    left: 150px;
    top: -100px;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: linear 0.5s;
    @media (max-width: 1675px) {
      width: 110px;
      height: 110px;
      left: 195px;
      top: 20px;
      margin-bottom: 30px;
    }
  }
  img{
    width: 320px;
    transition: linear 0.5s;
    @media (max-width: 1675px) {
      width: 200px;
    }
  }
`