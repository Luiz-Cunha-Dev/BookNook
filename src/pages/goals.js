import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import calendar from "../imgs/calendario.png";
import { Option } from "../components/goals/option";
import { BsFillPatchCheckFill } from "react-icons/bs";

export function Goals() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <div className="board">
        <h2>Metas</h2>
        <div className="back">
          <div className="left">
            <Option>
              <span className="title">FILMES</span>
              <div className="goal">
                <span>META</span>
                <button>-</button>
                <p>00</p>
                <button>+</button>
              </div>
              <div className="qtd">
                <span>QUANTIDADE ATUAL</span>
                <button>-</button>
                <p>00</p>
                <button>+</button>
              </div>
              <button className="save">Salvar</button>
            </Option>
            <Option>
              <span className="title">SÈRIES</span>
              <div className="goal">
                <span>META</span>
                <button>-</button>
                <p>00</p>
                <button>+</button>
              </div>
              <div className="qtd">
                <span>QUANTIDADE ATUAL</span>
                <button>-</button>
                <p>00</p>
                <button>+</button>
              </div>
              <button className="save">Salvar</button>
            </Option>
            <Option>
              <span className="title">ANIMES</span>
              <div className="goal">
                <span>META</span>
                <button>-</button>
                <p>00</p>
                <button>+</button>
              </div>
              <div className="qtd">
                <span>QUANTIDADE ATUAL</span>
                <button>-</button>
                <p>00</p>
                <button>+</button>
              </div>
              <button className="save">Salvar</button>
            </Option>
            <Option>
              <span className="title">DESENHOS</span>
              <div className="goal">
                <span>META</span>
                <button>-</button>
                <p>00</p>
                <button>+</button>
              </div>
              <div className="qtd">
                <span>QUANTIDADE ATUAL</span>
                <button>-</button>
                <p>00</p>
                <button>+</button>
              </div>
              <button className="save">Salvar</button>
            </Option>
            <Option>
              <span className="title">LIVROS</span>
              <div className="goal">
                <span>META</span>
                <button>-</button>
                <p>00</p>
                <button>+</button>
              </div>
              <div className="qtd">
                <span>QUANTIDADE ATUAL</span>
                <button>-</button>
                <p>00</p>
                <button>+</button>
              </div>
              <button className="save">Salvar</button>
            </Option>
            <Option>
              <span className="title">JOGOS</span>
              <div className="goal">
                <span>META</span>
                <button>-</button>
                <p>00</p>
                <button>+</button>
              </div>
              <div className="qtd">
                <span>QUANTIDADE ATUAL</span>
                <button>-</button>
                <p>00</p>
                <button>+</button>
              </div>
              <button className="save">Salvar</button>
            </Option>
          </div>
          <div className="rigth">
            <select>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
            <div className="months">
              <Month>
                <img src={calendar} alt="calendar" />
                <span>Janeiro</span>
                <div className="check">
                  <BsFillPatchCheckFill className="icon" />
                </div>
              </Month>
              <Month>
                <img src={calendar} alt="calendar" />
                <span>Fevereiro</span>
                <div className="check">
                  <BsFillPatchCheckFill className="icon" />
                </div>
              </Month>
              <Month>
                <img src={calendar} alt="calendar" />
                <span>Março</span>
                <div className="check">
                  <BsFillPatchCheckFill className="icon" />
                </div>
              </Month>
              <Month>
                <img src={calendar} alt="calendar" />
                <span>Abril</span>
                <div className="check">
                  <BsFillPatchCheckFill className="icon" />
                </div>
              </Month>
              <Month>
                <img src={calendar} alt="calendar" />
                <span>Maio</span>
                <div className="check">
                  <BsFillPatchCheckFill className="icon" />
                </div>
              </Month>
              <Month>
                <img src={calendar} alt="calendar" />
                <span>Junho</span>
                <div className="check">
                  <BsFillPatchCheckFill className="icon" />
                </div>
              </Month>
              <Month>
                <img src={calendar} alt="calendar" />
                <span>Julho</span>
                <div className="check">
                  <BsFillPatchCheckFill className="icon" />
                </div>
              </Month>
              <Month>
                <img src={calendar} alt="calendar" />
                <span>Agosto</span>
                <div className="check">
                  <BsFillPatchCheckFill className="icon" />
                </div>
              </Month>
              <Month>
                <img src={calendar} alt="calendar" />
                <span>Setembro</span>
                <div className="check">
                  <BsFillPatchCheckFill className="icon" />
                </div>
              </Month>
              <Month>
                <img src={calendar} alt="calendar" />
                <span>Outubro</span>
                <div className="check">
                  <BsFillPatchCheckFill className="icon" />
                </div>
              </Month>
              <Month>
                <img src={calendar} alt="calendar" />
                <span>Novembro</span>
                <div className="check">
                  <BsFillPatchCheckFill className="icon" />
                </div>
              </Month>
              <Month>
                <img src={calendar} alt="calendar" />
                <span>Dezembro</span>
                <div className="check">
                  <BsFillPatchCheckFill className="icon" />
                </div>
              </Month>
            </div>
          </div>
        </div>
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
  height: 100%;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  .board {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: white;
    height: 75vh;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;
    margin-left: 5%;
    margin-right: 5%;
    position: relative;
    animation-duration: 1s;
    animation-name: fadeInDown;
    margin-bottom: 5%;
    @media (max-width: 614px) {
      width: 90%;
      height: fit-content;
      margin-right: 5%;
      margin-left: 5%;
      margin-top: 12%;
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
    h2 {
      color: darkblue;
      font-size: 30px;
      margin-bottom: 5vh;
      @media (max-width: 614px) {
       font-size: 6vw;
      }
    }
  }
  .back {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    @media (max-width: 614px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      }
    .left {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .rigth {
      box-sizing: border-box;
      width: 50%;
      height: 97%;
      border-left: solid 3px darkblue;
      select {
        overflow: visible;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        position: absolute;
        height: 30px;
        width: 100px;
        right: 23%;
        top: 6%;
        border: none;
        border-radius: 10px;
        padding-left: 10px;
        padding-right: 5px;
        background-color: white;
        font-size: 22px;
        color: darkblue;
      }
      .months {
        box-sizing: border-box;
        width: 98%;
        height: 98%;
        flex-wrap: wrap;
        display: flex;
        padding-left: 5%;
        overflow: auto;
        ::-webkit-scrollbar {
          border-radius: 50px;
          width: 10px;
          background: transparent;
          border-top-right-radius: 50px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: darkblue;
          border-radius: 50px;
        }
        ::-webkit-scrollbar-track-piece {
          height: 80%;
        }
      }
    }
  }
`;

const Month = styled.div`
  transition: linear 0.1s;
  position: relative;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  width: 9vw;
  height: 9vw;
  position: relative;
  border-radius: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  font-size: 0.8vw;
  overflow: hidden;
  cursor: pointer;
  :hover {
    background-color: #eeeeee;
    font-size: 1vw;
    img {
      width: 15vw;
    }
    span {
      top: 13%;
    }
    .check {
      width: 8vh;
      height: 8vh;
      .icon {
        font-size: 9vh;
      }
    }
  }
  span {
    text-align: center;
    width: 56%;
    position: absolute;
    left: 22%;
    top: 16%;
    color: white;
    font-weight: bold;
  }
  img {
    width: 14vw;
  }
  .check {
    position: absolute;
    width: 7vh;
    height: 7vh;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 17%;
    margin-right: 5%;
    background-color: white;
    .icon {
      display: initial;
      font-size: 8vh;
      color: #099900;
    }
  }
`;
