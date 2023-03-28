import styled from "styled-components";

export function SignUp({ status, setStatus }) {

  return (
    <Container status={status}>
      <div className="forms">
        <h2>CRIE UMA CONTA</h2>
        <form>
        <div className="inputBox">
            <input type="text" required="required" />
            <span>Nome</span>
            <i></i>
          </div>
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
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Confirmar Senha</span>
            <i></i>
          </div>
          <div className="buttons">
            <button>Cadastre-se</button>
            <span onClick={() => setStatus("signin")} >Já Tenho Uma Conta</span>
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
  right: ${props => props.status === "signin" ? "-500px" : "36%"};
  transition: linear 1s ${props => props.status === "signup" ? "1s" : "0s"};
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
    margin-bottom: 30px;
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
      width: 160px;
      height: 42px;
      border-radius: 20px;
      border: thin;
      background-color: darkblue;
      color: white;
      font-size: 18px;
      cursor: pointer;
      transition: linear 0.1s;
      :hover{
        width: 170px;
        height: 45px;
        font-weight: bold;
        font-size: 20px;
      }
    }
    span {
      cursor: pointer;
    }
  }
`;
