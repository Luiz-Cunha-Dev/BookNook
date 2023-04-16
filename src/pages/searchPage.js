import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import { FaSearch } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Box } from "../components/searchPage/box";
import { Window } from "../components/searchPage/window";
import { Add } from "../components/searchPage/add";
import { HiPlusCircle } from "react-icons/hi";
import {
  addExistingEntertainment,
  getAllCategories,
  getAllntertainment,
  getEntertainmentByType,
} from "../services";
import load from "../imgs/blocks.gif"

export function SearchPage() {
  const { categoryName } = useParams();
  const [close, setClose] = useState(true);
  const [add, setAdd] = useState(true);
  const [edit, setEdit] = useState(true);
  const [delet, setDelet] = useState(true);
  const [entertainmentList, setEntertainmentList] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  const [openEntertainment, setOpenEntertainment] = useState();
  const [search, setSearch] = useState();
  const [disabled, setDisabled] = useState(false);
  let userData = JSON.parse(localStorage.getItem("userData"));

  function categoryNameCorrection() {
    if (categoryName === "Seus Filmes") {
      return "Filme";
    }
    if (categoryName === "Suas Séries") {
      return "Série";
    }
    if (categoryName === "Seus Animes") {
      return "Anime";
    }
    if (categoryName === "Seus Desenhos") {
      return "Desenho";
    }
    if (categoryName === "Seus Livros") {
      return "Livro";
    }
    if (categoryName === "Seus Jogos") {
      return "Jogo";
    }
    if (categoryName === "Seus Entretenimentos") {
      return "Entretenimeto";
    }
    if (categoryName === "Tudo") {
      return "Tudo";
    }
  }

  function getStars(grade) {
    if (grade === 10) {
      return (
        <>
          <FaStar className="star1" />
          <FaStar className="star2" />
          <FaStar className="star3" />
          <FaStar className="star4" />
          <FaStar className="star5" />
        </>
      );
    }
    if (grade === 9) {
      return (
        <>
          <FaStar className="star1" />
          <FaStar className="star2" />
          <FaStar className="star3" />
          <FaStar className="star4" />
          <FaStarHalfAlt className="star5" />
        </>
      );
    }
    if (grade === 8) {
      return (
        <>
          <FaStar className="star1" />
          <FaStar className="star2" />
          <FaStar className="star3" />
          <FaStar className="star4" />
          <FaStar className="star5" />
        </>
      );
    }
    if (grade === 7) {
      return (
        <>
          <FaStar className="star1" />
          <FaStar className="star2" />
          <FaStar className="star3" />
          <FaStarHalfAlt className="star4" />
          <FaStar className="star5" />
        </>
      );
    }
    if (grade === 6) {
      return (
        <>
          <FaStar className="star1" />
          <FaStar className="star2" />
          <FaStar className="star3" />
          <FaStar className="star4" />
          <FaStar className="star5" />
        </>
      );
    }
    if (grade === 5) {
      return (
        <>
          <FaStar className="star1" />
          <FaStar className="star2" />
          <FaStarHalfAlt className="star3" />
          <FaStar className="star4" />
          <FaStar className="star5" />
        </>
      );
    }
    if (grade === 4) {
      return (
        <>
          <FaStar className="star1" />
          <FaStar className="star2" />
          <FaStar className="star3" />
          <FaStar className="star4" />
          <FaStar className="star5" />
        </>
      );
    }
    if (grade === 3) {
      return (
        <>
          <FaStar className="star1" />
          <FaStarHalfAlt className="star2" />
          <FaStar className="star3" />
          <FaStar className="star4" />
          <FaStar className="star5" />
        </>
      );
    }
    if (grade === 2) {
      return (
        <>
          <FaStar className="star1" />
          <FaStar className="star2" />
          <FaStar className="star3" />
          <FaStar className="star4" />
          <FaStar className="star5" />
        </>
      );
    }
    if (grade === 1) {
      return (
        <>
          <FaStarHalfAlt className="star1" />
          <FaStar className="star2" />
          <FaStar className="star3" />
          <FaStar className="star4" />
          <FaStar className="star5" />
        </>
      );
    }
  }

  /* eslint-disable */

  useEffect(() => {
    const load = async () => {
      if (categoryNameCorrection() === "Tudo") {
        await getAllntertainment(userData.token).then((res) => {
          setEntertainmentList(res.data);
        });
      } else if (categoryNameCorrection() === "Entretenimeto") {
        let list = [];
        await getEntertainmentByType(userData.token, "Filme").then((res) => {
          res.data.forEach((e) => {
            list.push(e);
          });
        });
  
        await getEntertainmentByType(userData.token, "Série").then((res) => {
          res.data.forEach((e) => {
            list.push(e);
          });
        });
  
        await getEntertainmentByType(userData.token, "Anime").then((res) => {
          res.data.forEach((e) => {
            list.push(e);
          });
        });
  
        await getEntertainmentByType(userData.token, "Desenho").then((res) => {
          res.data.forEach((e) => {
            list.push(e);
          });
        });
  
        await getEntertainmentByType(userData.token, "Livro").then((res) => {
          res.data.forEach((e) => {
            list.push(e);
          });
        });
  
        await getEntertainmentByType(userData.token, "Jogo").then((res) => {
          res.data.forEach((e) => {
            list.push(e);
          });
        });
  
        setEntertainmentList(list);
  
      } else {
        await getEntertainmentByType(userData.token, categoryNameCorrection()).then(
          (res) => {
            setEntertainmentList(res.data);
          }
        );
      }
    }
    load()
  }, [add, edit, delet, userData]);


  useEffect(() => {
    getAllCategories(userData.token).then((res) => {
      setcategoryList(res.data);
    });
  }, []);

  function searchForName(e) {
    e.preventDefault();
    if (categoryNameCorrection() === "Tudo") {
      let filter = entertainmentList.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      );
      setEntertainmentList(filter);
      return;
    }
    let filter = entertainmentList.filter((e) =>
      e.entertainments.name.toLowerCase().includes(search.toLowerCase())
    );
    setEntertainmentList(filter);
    return;
  }

  function addToYourList(id){
    setDisabled(true)
    addExistingEntertainment(userData.token, id).then((res)=>{
      alert("Adicionado à sua lista!")
      setDisabled(false)
    })
    .catch(()=>{
      setDisabled(false)
    })
  }

  return (
    <>
      <Container darkMode={userData.darkMode} option={categoryName}>
        <Header />
        <Add add={add} setAdd={setAdd} categoryName={categoryName} />
        <Window
          categoryList={categoryList}
          openEntertainment={openEntertainment}
          close={close}
          setClose={setClose}
          categoryName={categoryName}
          edit={edit}
          setEdit={setEdit}
          delet={delet}
          setDelet={setDelet}
        />
        <div className="board">
          <h2>{categoryName}</h2>
          <form onSubmit={searchForName} className="principalForm">
            <div className="inputBox">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required={"required"}
              />
              <span>Busque pelo nome que procura</span>
              <i></i>
            </div>
            <button type="Submit">
              <FaSearch />
            </button>
            <div onClick={() => setAdd(false)} className="add">
              <span>Adicionar</span>
              <div className="rigth">
                <MdOutlineAdd className="plus" />
              </div>
            </div>
          </form>
          <div className="list">
            {entertainmentList.length === 0 ? <div className="load"><img src={load} alt="load"/> </div>: ""}
            {categoryNameCorrection() === "Tudo"
              ? entertainmentList.map((e, i) => (
                  <Box darkMode={userData.darkMode} key={i}>
                    <div key={i} className="back">
                      <div className="img">
                        <img src={e.imageUrl} alt="filme" />
                      </div>
                      <div className="informations">
                        <h3>{e.name !== undefined ? e.name : ""}</h3>
                        <div className="categories">
                          {categoryList[e.category1Id - 1]?.name !==
                          undefined ? (
                            <div className="category">
                              {categoryList[e.category1Id - 1]?.name}
                            </div>
                          ) : (
                            ""
                          )}
                          {categoryList[e.category2Id - 1]?.name !==
                          undefined ? (
                            <div className="category">
                              {categoryList[e.category2Id - 1]?.name}
                            </div>
                          ) : (
                            ""
                          )}
                          {categoryList[e.category3Id - 1]?.name !==
                          undefined ? (
                            <div className="category">
                              {categoryList[e.category3Id - 1]?.name}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <Stars grade={e.grade}>{getStars(e.grade)}</Stars>
                        <HiPlusCircle disabled={disabled} onClick={()=> addToYourList(e.id)} className="add"/>
                      </div>
                    </div>
                  </Box>
                ))
              : entertainmentList.map((e, i) => (
                  <Box darkMode={userData.darkMode} key={i}>
                    <div
                      key={i}
                      onClick={() => {
                        setOpenEntertainment(e);
                        setClose(false);
                      }}
                      className="back"
                      style={{cursor: "pointer"}}
                    >
                      <div className="img">
                        <img src={e.entertainments?.imageUrl} alt="filme" />
                      </div>
                      <div className="informations">
                        <h3>
                          {e.entertainments?.name !== undefined
                            ? e.entertainments?.name
                            : ""}
                        </h3>
                        <div className="categories">
                          {categoryList[e.entertainments?.category1Id - 1]
                            ?.name !== undefined ? (
                            <div className="category">
                              {
                                categoryList[e.entertainments?.category1Id - 1]
                                  ?.name
                              }
                            </div>
                          ) : (
                            ""
                          )}
                          {categoryList[e.entertainments?.category2Id - 1]
                            ?.name !== undefined ? (
                            <div className="category">
                              {
                                categoryList[e.entertainments?.category2Id - 1]
                                  ?.name
                              }
                            </div>
                          ) : (
                            ""
                          )}
                          {categoryList[e.entertainments?.category3Id - 1]
                            ?.name !== undefined ? (
                            <div className="category">
                              {
                                categoryList[e.entertainments?.category3Id - 1]
                                  ?.name
                              }
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <Stars grade={e.grade}>{getStars(e.grade)}</Stars>
                      </div>
                    </div>
                  </Box>
                ))}
          </div>
        </div>
      </Container>
    </>
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
  .board {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-color: ${props=> props.darkMode === false ? "white" : "#505050"};
    height: 75%;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;
    margin-left: 5%;
    margin-right: 5%;
    animation-duration: 1s;
    animation-name: fadeInDown;
    @media (max-width: 614px) {
      width: 90%;
      height: 77%;
      margin-right: 5%;
      margin-left: 5%;
      margin-top: 5%;
      margin-bottom: 5%;
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
    .load{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -20px;
      @media (max-width: 614px) {
        img{
          width: 150px;
        }
    }
    }
    h2 {
      color: ${props=> props.darkMode === false ? "darkblue" : "white"};
      font-size: 30px;
      margin-bottom: 5vh;
      @media (max-width: 614px) {
        font-size: 6vw;
        margin-bottom: 3vh;
      }
    }
    .principalForm {
      width: 35%;
      display: flex;
      position: relative;
      margin-bottom: 2vw;
      @media (max-width: 614px) {
        width: 65%;
        margin-left: -20%;
      }
      .add {
        transition: linear 0.5s;
        position: absolute;
        right: -18vw;
        bottom: 0px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        height: 60px;
        display: ${(props) =>
          props.option === "Seus Entretenimentos" || props.option === "Tudo"
            ? "none"
            : "flex"};
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        font-size: 40px;
        background-color: white;
        margin-right: 20px;
        cursor: pointer;
        @media (max-width: 935px) {
          height: 8vw;
          width: 20vw;
          font-size: 4vw;
          right: -90%;
          bottom: 10%;
        }
        @media (max-width: 614px) {
          height: 10vw;
          width: 10vw;
          font-size: 6vw;
          right: -40%;
          bottom: 10%;
        }
        :hover {
          font-size: 50px;
          span {
            font-size: 20px;
            width: 110px;
            @media (max-width: 935px) {
          font-size: 1.8vw;
        }
          }
        }
        span {
          width: 90px;
          transition: linear 0.2s;
          font-size: 20px;
          padding-left: 10px;
          padding-right: 10px;
          font-weight: 600;
          color: ${props=> props.darkMode === false ? "darkblue" : "black"};
          @media (max-width: 935px) {
          font-size: 1.8vw;
        }
          @media (max-width: 614px) {
            display: none;
          }
        }
        .rigth {
          background-color: ${props=> props.darkMode === false ? "darkblue" : "white"};
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 50px;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          @media (max-width: 614px) {
            width: 10vw;
            height: 10vw;
            border-radius: 10px;
          }
          .plus {
            transition: linear 0.1;
            color: ${props=> props.darkMode === false ? "white" : "#505050"};
          }
        }
      }
      input {
        height: 6%;
        width: 40%;
        border: none;
        outline: none;
        padding: 20px 10px 10px 10px;
        font-size: 20px;
        background-color: ${props=> props.darkMode === false ? "white" : "#505050"};
        color: ${props=> props.darkMode === false ? "black" : "white"};
        @media (max-width: 614px) {
          font-size: 3.5vw;
        }
      }
      button {
        position: absolute;
        right: 0px;
        min-width: 40px;
        height: 40px;
        border-radius: 100%;
        border: none;
        background-color: ${props=> props.darkMode === false ? "darkblue" : "white"};
        color: ${props=> props.darkMode === false ? "white" : "#505050"};
        font-size: 19px;
        cursor: pointer;
        transition: linear 0.1s;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 614px) {
          width: 8vw;
          min-width: 8vw;
          height: 8vw;
          top: 20%;
        }
        :hover {
          font-weight: bold;
          font-size: 22px;
        }
      }
    }
    .back-image {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      height: 9vw;
      width: 9vw;
      border-radius: 120px;
      margin-bottom: 15%;
    }
    .inputBox {
      position: relative;
      width: 100%;
      span {
        font-size: 1em;
        letter-spacing: 0.05em;
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 20px 10px 20px;
        pointer-events: none;
        transition: 0.5s;
        color: ${props=> props.darkMode === false ? "black" : "white"};
        @media (max-width: 935px) {
          font-size: 1.5vw;
        }
        @media (max-width: 614px) {
          font-size: 2.8vw;
        }
      }
      i {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: ${props=> props.darkMode === false ? "darkblue" : "white"};
        border-radius: 4px;
      }
    }
    .inputBox input:valid ~ span,
    .inputBox input:focus ~ span {
      color: ${props=> props.darkMode === false ? "darkblue" : "white"};
      transform: translateY(-30px);
      font-size: 0.75em;
      @media (max-width: 614px) {
        font-size: 2vw;
      }
    }
  }
  .list {
    box-sizing: border-box;
    width: 98%;
    height: 100%;
    display: flex;
    padding-left: 2%;
    padding-right: 2%;
    flex-wrap: wrap;
    overflow: auto;
    overflow-x: hidden;
    margin-bottom: 30px;
    @media (max-width: 614px) {
      margin-top: 4%;
      flex-direction: column;
      flex-wrap: initial;
    }
    ::-webkit-scrollbar {
      border-radius: 50px;
      width: 10px;
      background: transparent;
      border-top-right-radius: 50px;
      @media (max-width: 614px) {
        width: 6px;
      }
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${props=> props.darkMode === false ? "darkblue" : "white"};
      border-radius: 50px;
    }
    ::-webkit-scrollbar-track-piece {
      height: 80%;
    }
  }
`;

const Stars = styled.div`
  font-size: 2vw;
  color: grey;
  display: flex;
  align-items: center;
  @media (max-width: 935px) {
    font-size: 3vw;
  }
  @media (max-width: 614px) {
    font-size: 6vw;
  }
  .star1 {
    color: ${(props) => (props.grade >= 1 ? "#faab00" : "gray")};
  }
  .star2 {
    color: ${(props) => (props.grade > 2 ? "#faab00" : "gray")};
  }
  .star3 {
    color: ${(props) => (props.grade > 4 ? "#faab00" : "gray")};
  }
  .star4 {
    color: ${(props) => (props.grade > 6 ? "#faab00" : "gray")};
  }
  .star5 {
    color: ${(props) => (props.grade > 8 ? "#faab00" : "gray")};
  }
`;
