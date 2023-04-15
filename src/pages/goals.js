import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import calendar from "../imgs/calendario.png";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Window } from "../components/goals/window";
import { useState } from "react";
import { useEffect } from "react";
import { getAllGoals } from "../services";

export function Goals() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const [close, setClose] = useState(true);
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [goals, setGoals] = useState([])

  useEffect(()=> {
    getAllGoals(userData.token).then(res => {
      setGoals(res.data)
    })
  }, [close, year])

  return (
    <Container>
      <Header />
      <Window goals={goals} close={close} setClose={setClose} month={month} year={year}/>
      <div className="board">
        <h2>Metas</h2>
        <div className="back">
          <div className="rigth">
            <select onChange={(e) => setYear(e.target.value)}>
              <option value="">Selecione o Ano</option>
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
                <img onClick={() => {if(year === "")return; setMonth("Janeiro"); setClose(false)}} src={calendar} alt="calendar" />
                <span>Janeiro</span>
              </Month>
              <Month>
                <img onClick={() => {if(year === "")return; setMonth("Fevereiro"); setClose(false)}} src={calendar} alt="calendar" />
                <span>Fevereiro</span>
              </Month>
              <Month>
                <img onClick={() => {if(year === "")return; setMonth("Março"); setClose(false)}} src={calendar} alt="calendar" />
                <span>Março</span>
              </Month>
              <Month>
                <img onClick={() => {if(year === "")return; setMonth("Abril"); setClose(false)}} src={calendar} alt="calendar" />
                <span>Abril</span>
              </Month>
              <Month>
                <img onClick={() => {if(year === "")return; setMonth("Maio"); setClose(false)}} src={calendar} alt="calendar" />
                <span>Maio</span>
              </Month>
              <Month>
                <img onClick={() => {if(year === "")return; setMonth("Junho"); setClose(false)}} src={calendar} alt="calendar" />
                <span>Junho</span>
              </Month>
              <Month>
                <img onClick={() => {if(year === "")return; setMonth("Julho"); setClose(false)}} src={calendar} alt="calendar" />
                <span>Julho</span>
              </Month>
              <Month>
                <img onClick={() => {if(year === "")return; setMonth("Agosto"); setClose(false)}} src={calendar} alt="calendar" />
                <span>Agosto</span>
              </Month>
              <Month>
                <img onClick={() => {if(year === "")return; setMonth("Setembro"); setClose(false)}} src={calendar} alt="calendar" />
                <span>Setembro</span>
              </Month>
              <Month>
                <img onClick={() => {if(year === "")return; setMonth("Outubro"); setClose(false)}} src={calendar} alt="calendar" />
                <span>Outubro</span>
              </Month>
              <Month>
                <img onClick={() => {if(year === "")return; setMonth("Novembro"); setClose(false)}} src={calendar} alt="calendar" />
                <span>Novembro</span>
              </Month>
              <Month>
                <img onClick={() => {if(year === "")return; setMonth("Dezembro"); setClose(false)}} src={calendar} alt="calendar" />
                <span>Dezembro</span>
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
    height: 80%;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;
    margin-left: 23%;
    margin-right: 23%;
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
      padding-bottom: 5%;
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
      margin-top: 10%;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
 
    .rigth {
      box-sizing: border-box;
      width: 100%;
      height: 97%;
      @media (max-width: 614px) {
        width: 100%;
        height: 50%;
        border-left: none;
      }
      select {
        overflow: visible;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        position: absolute;
        height: 40px;
        width: fit-content;
        right: 16%;
        top: 4%;
        border: none;
        border-radius: 10px;
        padding-left: 10px;
        padding-right: 5px;
        background-color: white;
        font-size: 22px;
        color: darkblue;
        @media (max-width: 614px) {
          font-size: 3.4vw;
          height: 30px;
          width: 40%;
          right: 30%;
          top: 12%;
        }
      }
      .months {
        box-sizing: border-box;
        width: 98%;
        height: 98%;
        display: flex;
        align-items: center;
        justify-content: center;
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
  width: 10vw;
  height: 9vw;
  position: relative;
  border-radius: 15px;
  margin-right: 18px;
  margin-bottom: 8px;
  font-size: 0.8vw;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 614px) {
    width: 22vw;
    height: 22vw;
  }
  :hover {
    background-color: #eeeeee;
    font-size: 1vw;
    img {
      width: 15vw;
      @media (max-width: 614px) {
        width: 34vw;
      }
    }
    span {
      top: 13%;
      @media (max-width: 614px) {
        font-size: 2vw;
        top: 16%;
      }
    }
    .check {
      width: 8vh;
      height: 8vh;
      @media (max-width: 614px) {
        width: 10vw;
        height: 10vw;
      }
      .icon {
        font-size: 9vh;
        @media (max-width: 614px) {
        width: 10vw;
      }
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
    @media (max-width: 614px) {
        font-size: 2vw;
        top: 16.5%;
      }
  }
  img {
    width: 14vw;
    @media (max-width: 614px) {
        width: 33vw;
      }
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
    @media (max-width: 614px) {
        width: 9vw;
        height: 9vw;
      }
    .icon {
      display: initial;
      font-size: 8vh;
      color: #099900;
      @media (max-width: 614px) {
        width: 9vw;
      }
    }
  }
`;
