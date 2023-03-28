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

  return (
    <Container menu={menu === true ? "0px" : "-400px"}>
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
          <BsFillPersonFill className="icon"/>
          Sobre Mim</p>

        <p onClick={() => navigate("/initial")} >
          <FaHome className="icon"/>
          Inicio</p>

        <p onClick={() => navigate("/popular")}>
          <AiFillFire className="icon"/>
          Mais populares</p>

        <p onClick={() => navigate("/config")}>
          <BsGearFill className="icon"/>
          Configurações</p>

        <p onClick={() => navigate("/")}>
          <ImExit className="icon"/>
          Sair</p>

      </div>
      </div>
      <div onClick={() => setMenu(!menu)} className="rigth-window"></div>
    </Container>
  );
}

const Container = styled.div`
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
    font-family: "Courier New", Courier, monospace;
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
      margin-bottom: 25px;
    }
    span{
        margin-bottom: 50px;
      }
    .options {
      width: 65%;
      display: flex;
      flex-direction: column;

      font-size: 25px;
    font-weight: 400;
    p{
      cursor: pointer;
      display: flex;
      align-items: center;
      .icon{
        font-size: 30px;
        margin-right: 15px;
      }
    }
    }
    .space{
      height: 2px;
      width: 80%;
      background-color: white;
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
    display: ${(props) => (props.menu === "0px" ? "initial" : "none")};
    cursor: pointer;
  }
`;
