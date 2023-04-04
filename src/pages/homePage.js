import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import background from "../imgs/principal-wallpaper.jpg";
import icone from "../imgs/icone.png";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="header">
        <div className="icone">
          <img src={icone} />
          <h1>BookNook</h1>
        </div>
        <div className="buttons">
          <button onClick={() => navigate("/auth/signin")}>Entrar</button>
          <button onClick={() => navigate("/auth/signup")}>Cadastrar-se</button>
        </div>
      </div>
      <div className="principal">
        <div className="text">
          <h2>Bem-vindo ao melhor site de gerenciamento de entretenimento! </h2>
          <p>
            Registre todos os filmes, livros e jogos que você já assistiu ou
            jogou
          </p>
          <p>
            Avalie cada um deles em uma escala de estrelas e escreva um breve
            comentário
          </p>
          <p>
            Veja quais são os entretenimentos mais populares entre os usuários
            do site
          </p>
          <p>
            Defina metas pessoais para ler mais livros, assistir mais filmes ou
            jogar mais jogos
          </p>
          <p>Compartilhe suas opiniões com amigos e familiares</p>
          <p>
            Com o nosso site, você pode manter um controle completo sobre suas
            atividades de entretenimento e descobrir novas recomendações com
            base nas avaliações de outros usuários. Junte-se a nós hoje e comece
            a registrar suas aventuras de entretenimento!
          </p>
        </div>
        <img src="https://files.tecnoblog.net/wp-content/uploads/2018/12/apps-android-facebook-google-plus-700x394.jpg" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation-duration: 1s;
    animation-name: fadeInLeft;
    @keyframes fadeInLeft {
      0% {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
    h1 {
      font-family: "Chewy";
      color: darkblue;
      font-size: 55px;
    }
    .buttons{
      width: 17vw;
    }
    button {
      height: 40px;
      background-color: transparent;
      border: solid 2px darkblue;
      color: darkblue;
      font-family: "Courier New", Courier, monospace;
      font-size: 17px;
      font-weight: 600;
      border-radius: 20px;
      padding-left: 15px;
      padding-right: 15px;
      margin-right: 20px;
      transition: 500ms;
      cursor: pointer;
      :hover {
        background-color: white;
        font-weight: 900;
        font-size: 20px;
      }
    }
    button:last-child {
      height: 45px;
      background-color: darkblue;
      color: white;
    }
    .icone {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 50px;
        margin-right: 20px;
      }
    }
  }
  .principal {
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation-duration: 2s;
    animation-name: fadeInRigth;
    @keyframes fadeInRigth {
      0% {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
    img {
      width: 600px;
      height: 100%;
      border-radius: 10px;
      animation: up-down 3s infinite alternate;
    }
    @keyframes up-down {
      from {
        transform: translateY(50px);
      }
      to {
        transform: translateY(-50px);
      }
    }
  }
  .text {
    padding: 0px 0px 20px 20px;
    width: 40vw;
    background-color: white;
    border-radius: 20px;
    h2 {
      width: 100%;
      text-align: center;
      color: darkblue;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      font-size: 30px;
      font-weight: bold;
    }
    p {
      color: #4c4c66;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      font-size: 20px;
    }
  }
`;
