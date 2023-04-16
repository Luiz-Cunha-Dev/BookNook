import styled from "styled-components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { Edit } from "./edit";
import { Delete } from "../../components/searchPage/delete";

export function Window({
  close,
  setClose,
  categoryName,
  openEntertainment,
  categoryList,
  edit,
  setEdit,
  delet,
  setDelet
}) {

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

  if(openEntertainment !== undefined){
  return (
    <Container close={close} categoryName={categoryName}>
      <Edit setClose={setClose} openEntertainment={openEntertainment} edit={edit} setEdit={setEdit} categoryName={categoryName} />
      <Delete setClose={setClose} openEntertainment={openEntertainment} delet={delet} setDelet={setDelet} />
      <div className="window">
        <IoIosCloseCircle onClick={() => setClose(true)} className="close" />
        <div className="top">
          <div className="img">
            <img src={openEntertainment?.entertainments.imageUrl} alt="filme" />
          </div>
          <div className="informations">
            <h3>{openEntertainment?.entertainments.name}</h3>
            <div className="categories">
              {categoryList[openEntertainment?.entertainments.category1Id - 1]?.name !==
              undefined ? (
                <div className="category">
                  {categoryList[openEntertainment?.entertainments.category1Id - 1]?.name}
                </div>
              ) : (
                ""
              )}
              {categoryList[openEntertainment?.entertainments.category2Id - 1]?.name !==
              undefined ? (
                <div className="category">
                  {categoryList[openEntertainment?.entertainments.category2Id - 1]?.name}
                </div>
              ) : (
                ""
              )}
              {categoryList[openEntertainment?.entertainments.category3Id - 1]?.name !==
              undefined ? (
                <div className="category">
                  {categoryList[openEntertainment?.entertainments.category3Id - 1]?.name}
                </div>
              ) : (
                ""
              )}
            </div>
            <Stars grade={openEntertainment?.grade}>
            {getStars(openEntertainment?.grade)}
            </Stars>
            <div className="options">
              <MdEditSquare onClick={() => setEdit(false)} className="edit" />
              <FaTrashAlt onClick={() => setDelet(false)} className="trash" />
            </div>
          </div>
        </div>
        <div className="down">
          <h3>Comentarios</h3>
          <p>{openEntertainment?.comment}</p>
        </div>
      </div>
    </Container>
  );
}
}

const Container = styled.div`
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.close === true ? "none" : "flex")};
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  padding-top: 8%;
  background-color: rgba(10, 23, 55, 0.5);
  .window {
    padding: 2%;
    box-sizing: border-box;
    width: 50vw;
    height: 75vh;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    position: relative;
    animation-duration: 1s;
    animation-name: fadeInDown;
    @media (max-width: 614px) {
      margin-left: 5%;
      margin-right: 5%;
      height: 80%;
      width: 90%;
      margin-top: 12%;
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
    .close {
      z-index: 1;
      position: absolute;
      right: 15px;
      top: 15px;
      font-size: 50px;
      color: red;
      cursor: pointer;
      @media (max-width: 614px) {
        font-size: 10vw;
      }
    }
  }
  .top {
    box-sizing: border-box;
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    position: relative;
    @media (max-width: 614px) {
      justify-content: center;
    }
    .options {
      width: 35%;
      height: 30%;
      justify-content: space-between;
      align-items: center;
      display: ${(props) =>
        props.categoryName === "Seus Entretenimentos" ||
        props.categoryName === "Tudo"
          ? "none"
          : "flex"};
      margin-top: 13%;
      cursor: pointer;
      @media (max-width: 614px) {
        margin-top: 20%;
        width: 22vw;
        height: 15vw;
      }
    }
  }
  .edit {
    font-size: 2.2vw;
    color: darkblue;
    @media (max-width: 614px) {
      font-size: 8vw;
    }
    :hover {
      font-size: 2.4vw;
      @media (max-width: 614px) {
        font-size: 8vw;
      }
    }
  }
  .trash {
    color: red;
    font-size: 1.9vw;
    @media (max-width: 614px) {
      font-size: 7.2vw;
    }
    :hover {
      font-size: 2.4vw;
      @media (max-width: 614px) {
        font-size: 8vw;
      }
    }
  }
  .down {
    width: 100%;
    margin-top: 5%;
    overflow: auto;
    overflow-x: hidden;
    @media (max-width: 614px) {
      box-sizing: border-box;
      height: 50%;
      padding-left: 2%;
      padding-right: 2%;
      padding-bottom: 2%;
    }
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
    p {
      @media (max-width: 614px) {
        font-size: 3.5vw;
        line-height: 20px;
      }
    }
  }
  img {
    width: 400px;
    @media (max-width: 614px) {
      width: 300vw;
    }
  }
  h3 {
    padding: 0px;
    width: 100%;
    font-size: 21px;
    margin-bottom: 0px;
    margin-top: 0px;
    @media (max-width: 614px) {
      font-size: 4vw;
    }
  }

  .img {
    box-sizing: border-box;
    overflow: hidden;
    width: 15vw;
    height: 17vw;
    display: flex;
    justify-content: center;
    margin-right: 40px;
    overflow: hidden;
    border-radius: 10px;
    @media (max-width: 614px) {
      width: 50%;
      height: 60vw;
      margin-left: 2%;
      margin-right: 2%;
    }
  }
  .informations {
    box-sizing: border-box;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    @media (max-width: 614px) {
      margin-top: 6%;
      width: 50%;
      height: 75%;
      padding-right: 2%;
      justify-content: center;
    }
    h3 {
      font-size: 1.5vw;
      margin-bottom: 6%;
      @media (max-width: 614px) {
        margin-bottom: 6%;
        font-size: 3vw;
      }
    }
    .categories {
      display: flex;
      margin-bottom: 6%;
      @media (max-width: 614px) {
        margin-bottom: 6%;
      }
      .category {
        margin-right: 4%;
        padding: 3px;
        color: white;
        border-radius: 5px;
        font-size: 1.2vw;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 614px) {
          font-size: 2.2vw;
          margin-right: 2%;
        }
      }
      .category:nth-child(1) {
        border: solid 2px darkred;
        background-color: #eb3d34;
      }
      .category:nth-child(2) {
        border: solid 2px darkgreen;
        background-color: #28b019;
      }
      .category:nth-child(3) {
        border: solid 2px darkblue;
        background-color: #345eeb;
      }
    }
  }
`;

const Stars = styled.div`
  font-size: 2vw;
  color: grey;
  display: flex;
  align-items: center;
  @media (max-width: 614px) {
    font-size: 6vw;
  }
  .star1 {
    color: ${props => props.grade >= 1 ? "#faab00" : "gray"};
  }
  .star2 {
    color: ${props => props.grade > 2 ? "#faab00" : "gray"};
  }
  .star3 {
    color: ${props => props.grade > 4 ? "#faab00" : "gray"};
  }
  .star4 {
    color: ${props => props.grade > 6 ? "#faab00" : "gray"};
  }
  .star5 {
    color: ${props => props.grade > 8 ? "#faab00" : "gray"};
  }
`;
