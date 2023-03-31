import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import icone from "../imgs/icone.png";
import userPicture from "../imgs/userPicture.png";
import { BsFillPersonFill, BsGearFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { ImExit } from "react-icons/im";

export function Header() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [exit, setExit] = useState(false);

  return (
    <Container menu={menu === true ? "0px" : "-400px"} exit={exit}>
      <div className="header">
        <HiOutlineMenu onClick={() => setMenu(!menu)} className="menu" />
        <div onClick={() => navigate("/")} className="icone">
          <img src={icone} />
          <h1>BookNook</h1>
        </div>
      </div>
      <div className="left-window">
        <div className="back-image">
          <img src={userPicture} alt="userPicture" />
        </div>
        <span>User Name</span>

        <div className="options">
          <p onClick={() => navigate("/about-me")}>
            <BsFillPersonFill className="icon" />
            Sobre Mim
          </p>

          <p onClick={() => navigate("/initial")}>
            <FaHome className="icon" />
            Inicio
          </p>

          <p onClick={() => navigate("/popular")}>
            <AiFillFire className="icon" />
            Mais populares
          </p>

          <p onClick={() => navigate("/config")}>
            <BsGearFill className="icon" />
            Configurações
          </p>

          <p onClick={() => setExit(true)}>
            <ImExit className="icon" />
            Sair
          </p>
        </div>
      </div>
      <div onClick={() => {exit === true ? setMenu(menu) : setMenu(!menu)}} className="rigth-window">
      <div className="exit-window">
        <h2>Tem certeza de que quer sair da sua conta?</h2>
        <button  onClick={() => navigate("/")}>Sair</button>
        <p onClick={() => setExit(false)}>Cancelar</p>
      </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
    font-family: "Courier New", Courier, monospace;
  .exit-window{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 11;
    position: fixed;
    width: 400px;
    height: 350px;
    background-color: white;
    border-radius: 30px;
    display: ${props => props.exit === true ? "flex" : "none"};
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: default;
    button {
      width: 160px;
      height: 42px;
      border-radius: 20px;
      border: thin;
      background-color: darkblue;
      color: white;
      font-size: 18px;
      margin-top: 30px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: linear 0.1s;
      :hover{
        width: 170px;
        height: 45px;
        font-weight: bold;
        font-size: 20px;
      }
    }
    p{
      cursor: pointer;
    }
  }
  .header {
    display: flex;
    align-items: center;
    h1 {
      font-family: "Chewy";
      color: darkblue;
      font-size: 55px;
    }
    .menu {
      font-size: 45px;
      color: darkblue;
      cursor: pointer;
      margin-left: 50px;
    }
    .icone {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 12%;
      cursor: pointer;
      img {
        height: 50px;
        margin-right: 20px;
      }
    }
  }
  .left-window {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: linear 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: ${(props) => props.menu};
    top: 0px;
    width: 400px;
    height: 100vh;
    background-color: darkblue;
    z-index: 2;
    color: white;
    font-size: 30px;
    font-weight: bold;
    img {
      height: 200px;
    }
    .back-image {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      height: 180px;
      width: 180px;
      border-radius: 120px;
      margin-bottom: 2vw;
    }
    span {
      margin-bottom: 3vw;
    }
    .options {
      width: 65%;
      display: flex;
      flex-direction: column;
      font-size: 25px;
      font-weight: 400;
      p {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-bottom: 2vw;
        .icon {
          font-size: 30px;
          margin-right: 15px;
        }
      }
    }

  }
  .rigth-window {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(10, 23, 55, 0.5);
    z-index: 1;
    display: ${(props) => (props.menu === "0px" ? "flex" : "none")};
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }
`;
