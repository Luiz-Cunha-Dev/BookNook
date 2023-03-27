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
            Aqui você pode manter um registro completo de todos os filmes que
            assistiu, livros que leu e jogos que jogou. Com nosso sistema de
            classificação, você pode avaliar cada um deles em uma escala de
            estrelas e escrever um breve comentário para lembrar como se sentiu
            sobre a experiência.
          </p>
          <p>
            Além disso, você pode ver quais são os entretenimentos mais
            populares entre os usuários do site e até mesmo definir metas
            pessoais para ler mais livros, assistir mais filmes ou jogar mais
            jogos em um determinado período de tempo.
          </p>
          <p>
            Nosso site é perfeito para quem quer ter um controle completo sobre
            suas atividades de entretenimento e compartilhar suas opiniões com
            amigos e familiares. Então, junte-se a nós hoje e comece a registrar
            suas aventuras!
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
    h1 {
      font-family: "Chewy";
      color: darkblue;
      font-size: 55px;
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
    padding-left: 10%;
    padding-right: 10%;
    margin-top: 15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    width: 600px;
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
