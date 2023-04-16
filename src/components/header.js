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
import { RiBookletLine } from "react-icons/ri";
import { logout } from "../services";
import { ThreeDots } from 'react-loader-spinner'

export function Header() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [exit, setExit] = useState(false);
  const [button, setButton] = useState("Sair");
  const [disabled, setDisabled] = useState(false);

  function signout(){
    setDisabled(true);

    if(userData.darkMode === true){
      setButton(<ThreeDots
        height="80"
        width="80"
        radius="9"
        color="black"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
    />)
    }else{
      setButton(<ThreeDots
        height="80"
        width="80"
        radius="9"
        color="white"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
    />)
    }

    logout(userData.token).then(() => { 
      localStorage.removeItem("userData");
       setDisabled(false);
        setButton("Sair");
         navigate("/") 
        })
      .catch(()=>{
        localStorage.removeItem("userData")
        setDisabled(false);
        setButton("Sair");
        navigate("/") 
      })
  }

  return (
    <Container darkMode={userData.darkMode} menu={menu === true ? "0px" : "-20vw"} exit={exit}>
      <div className="header">
        <HiOutlineMenu onClick={() => setMenu(!menu)} className="menu" />
        <div onClick={() => navigate("/initial")} className="icone">
          <img src={icone} alt="icon"/>
          <h1>BookNook</h1>
        </div>
      </div>
      <div className="left-window">
        <div className="back-image">
          <img src={userData.pictureUrl || userPicture} alt="userPicture" />
        </div>
        <span>{userData.username || "user name"}</span>

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

          <p onClick={() => navigate("/goals")}>
            <RiBookletLine className="icon" />
            Metas
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
        <button disabled={disabled} onClick={signout}>{button}</button>
        <p onClick={() => setExit(false)}>Cancelar</p>
      </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
    font-family: "Courier New", Courier, monospace;
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
  .exit-window{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    background-color: ${props=> props.darkMode === false ? "white" : "#202020"};
    cursor: default;
    animation-duration: 1s;
    animation-name: fadeInDown;
    h2{
      color: ${props=> props.darkMode === false ? "black" : "white"};
    }
    @media (max-width: 614px) {
        width: 80%;
        height: 50%;
        h2{
          font-size: 5vw;
        }
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
    button {
      width: 160px;
      height: 42px;
      border-radius: 20px;
      border: thin;
      background-color: ${props=> props.darkMode === false ? "darkblue" : "white"};
      color: ${props=> props.darkMode === false ? "white" : "black"};
      font-size: 18px;
      margin-top: 30px;
      margin-bottom: 10px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: linear 0.1s;
      :hover{
        width: 170px;
        height: 45px;
        font-weight: bold;
        font-size: 20px;
      }
    }
    p{
      color: ${props=> props.darkMode === false ? "black" : "white"};
      cursor: pointer;
    }
  }
  .header {
    display: flex;
    align-items: center;
    margin-top: 2vh;
    h1 {
      font-family: "Chewy";
      color: ${props=> props.darkMode === false ? "darkblue" : "white"};
      font-size: 55px;
      @media (max-width: 614px) {
        font-size: 5vh;
      }
    }
    .menu {
      font-size: 45px;
      color: darkblue;
      cursor: pointer;
      margin-left: 50px;
      color: ${props=> props.darkMode === false ? "darkblue" : "white"};
      border-radius: 10px;
      @media (max-width: 614px) {
        font-size: 6vh;
        margin-left: 3%;
      }
    }
    .icone {
      height: 10vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 12%;
      cursor: pointer;
      border-radius: 30px;
      padding-left: 10px;
      padding-right: 10px;
      @media (max-width: 614px) {
      }
      img {
        height: 50px;
        margin-right: 20px;
        @media (max-width: 614px) {
        height: 6vh;
        margin-right: 4%;
      }
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
    width: 20vw;
    height: 100vh;
    background-color: ${props=> props.darkMode === false ? "darkblue" : "#202020"};
    z-index: 2;
    color: white;
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 935px) {
      width: 35%;
      left: ${(props) => props.menu === "-20vw" || props.exit === true ? "-85%" : "0%"};
      }
    @media (max-width: 614px) {
      width: 85%;
      left: ${(props) => props.menu === "-20vw" || props.exit === true ? "-85%" : "0%"};
      }
    img {
      height: 15vw;
      @media (max-width: 935px) {
        height: 20vw;
      }
      @media (max-width: 614px) {
        height: 60vw;
      }
    }
    .back-image {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      height: 180px;
      width: 180px;
      border-radius: 120px;
      margin-bottom: 2vw;
      overflow: hidden;
      @media (max-width: 614px) {
      width: 40vw;
      height: 40vw;
      margin-bottom: 4vw;
      margin-top: 8%;
      }
    }
    span {
      margin-bottom: 3vw;
      @media (max-width: 614px) {
      margin-bottom: 6vw;
      font-size: 6vw;
      }
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
        margin-bottom: 1.5vw;
        color: white;
        font-size: 2.5vh;
        @media (max-width: 614px) {
      margin-bottom: 4vw;
      }
        .icon {
          font-size: 30px;
          margin-right: 15px;
          color: white;
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
