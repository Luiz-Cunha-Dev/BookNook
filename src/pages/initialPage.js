import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import { Option } from "../components/homePage/option";
import filme from "../imgs/entretenimentos/filmes.jpg";
import serie from "../imgs/entretenimentos/series.jpg";
import anime from "../imgs/entretenimentos/animes.jpg";
import desenho from "../imgs/entretenimentos/desenhos.webp";
import livro from "../imgs/entretenimentos/livros.jpg";
import jogo from "../imgs/entretenimentos/jogos.jpg";
import entretenimento from "../imgs/entretenimentos/entretenimentos.jpg";
import tudo from "../imgs/entretenimentos/tudo.png";
import { useEffect } from "react";
import { getEntertainmentQuantity } from "../services";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";

export function InitialPage() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    getEntertainmentQuantity(userData.token)
      .then((res) => {
        console.log(res.data);
        setQuantity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container darkMode={userData.darkMode}>
      <Header />
      <div className="board">
        <Option darkMode={userData.darkMode}>
          <div onClick={() => navigate("/search-page/Seus Filmes")}>
            <div className="img">
              <img src={filme} alt="filme" />
            </div>
            Seus Filmes
            <span>
            {quantity.movies !== undefined ? quantity.movies
              :
              <ColorRing
              visible={true}
              height="20"
              width="20"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={[
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
              ]}
            />
              }
            </span>
          </div>
        </Option>
        <Option darkMode={userData.darkMode}>
          <div onClick={() => navigate("/search-page/Suas Séries")}>
            <div className="img">
              <img src={serie} alt="serie" />
            </div>
            Suas Séries
            <span>
            {quantity.series !== undefined ? quantity.series
              :
              <ColorRing
              visible={true}
              height="20"
              width="20"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={[
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
              ]}
            />
              }
            </span>
          </div>
        </Option>
        <Option darkMode={userData.darkMode}>
          <div onClick={() => navigate("/search-page/Seus Animes")}>
            <div className="img">
              <img src={anime} alt="anime" />
            </div>
            Seus Animes
            <span>
            {quantity.animes !== undefined ? quantity.animes
              :
              <ColorRing
              visible={true}
              height="20"
              width="20"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={[
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
              ]}
            />
              }
            </span>
          </div>
        </Option>
        <Option darkMode={userData.darkMode}>
          <div onClick={() => navigate("/search-page/Seus Desenhos")}>
            <div className="img">
              <img src={desenho} alt="desenho" />
            </div>
            Seus Desenhos
            <span>
            {quantity.cartoons !== undefined ? quantity.cartoons
              :
              <ColorRing
              visible={true}
              height="20"
              width="20"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={[
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
              ]}
            />
              }
            </span>
          </div>
        </Option>
        <Option darkMode={userData.darkMode}>
          <div onClick={() => navigate("/search-page/Seus Livros")}>
            <div className="img">
              <img src={livro} alt="livro" />
            </div>
            Seus Livros
            <span>
              {quantity.books !== undefined ? quantity.books
              :
              <ColorRing
              visible={true}
              height="20"
              width="20"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={[
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
              ]}
            />
              }
            </span>
          </div>
        </Option>
        <Option darkMode={userData.darkMode}>
          <div onClick={() => navigate("/search-page/Seus Jogos")}>
            <div className="img">
              <img src={jogo} alt="jogo" />
            </div>
            Seus Jogos
            <span>
            {quantity.games !== undefined ? quantity.games
              :
              <ColorRing
              visible={true}
              height="20"
              width="20"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={[
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
              ]}
            />
              }
            </span>
          </div>
        </Option>
        <Option darkMode={userData.darkMode}>
          <div onClick={() => navigate("/search-page/Seus Entretenimentos")}>
            <div className="img">
              <img src={entretenimento} alt="entretenimento" />
            </div>
            Seus
            <br />
            Entretenimentos
            <span>
            {quantity.userEntertainments !== undefined ? quantity.userEntertainments
              :
              <ColorRing
              visible={true}
              height="20"
              width="20"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={[
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
              ]}
            />
              }
            </span>
          </div>
        </Option>
        <Option darkMode={userData.darkMode}>
          <div onClick={() => navigate("/search-page/Tudo")}>
            <div className="img">
              <img src={tudo} alt="tudo" />
            </div>
            Tudo
            <span>
            {quantity.allEntertainments !== undefined ? quantity.allEntertainments
              :
              <ColorRing
              visible={true}
              height="20"
              width="20"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={[
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
              ]}
            />
              }
            </span>
          </div>
        </Option>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-image: url(${background});
  background-image: ${props=> props.darkMode === false ? "" : "none"};
  background-color: ${props=> props.darkMode === false ? "" : "#191919"};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100%;
  @media (max-width: 614px) {
    overflow: auto;
  }
  .board {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    padding-left: 10%;
    margin-top: 2%;
    animation-duration: 1s;
    animation-name: fadeInDown;
    @media (max-width: 614px) {
      width: 96%;
      padding-left: 3%;
      margin-top: 5%;
      margin-bottom: 10%;
    }
    @keyframes fadeInDown {
      0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
  }
`;
