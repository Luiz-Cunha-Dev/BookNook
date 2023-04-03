import styled from "styled-components";
import filme from "../../imgs/entretenimentos/filmes.jpg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { Edit } from "./edit";

export function Window({close, setClose, categoryName}) {

  const [edit, setEdit] = useState(true);

  return (
    <Container close={close}>
      <Edit edit={edit} setEdit={setEdit} categoryName={categoryName}/>
      <div className="window">
        <IoIosCloseCircle onClick={() => setClose(true)} className="close" />
        <div className="top">
          <div className="img">
            <img src={filme} alt="filme" />
          </div>
          <div className="informations">
            <h3>Vingadores: Ultimato</h3>
            <div className="categories">
              <div className="category">Ação</div>
              <div className="category">Heroi</div>
              <div className="category">Ficção Cientifica</div>
            </div>
            <Stars>
              <FaStar className="star1" />
              <FaStar className="star2" />
              <FaStar className="star3" />
              <FaStar className="star4" />
              <FaStar className="star5" />
            </Stars>
            <MdEditSquare onClick={() => setEdit(false)} className="edit" />
          </div>
        </div>
        <div className="down">
          <h3>Comentarios</h3>
          <p>
            ggfgggfg fewfyw gfywrgf wf bwfbwgfwrb wb bbrb r rw hih wh irh irt r
            h thwritgbwrigbr r wtwrgbr grghghsjhg wrrhgiergi rr rherh
            wfgwbgbrgbwbnwbvw fijwgifib bibfgdivbgisdbvibs s
            ijnibgvijfbgfgjnfgjnfn nfngfngnfsgnfsln gnflknglfngn ownrgonron
            gnnrfgnfslngjn gkgn ngofgsfngj
            eogneognegnfigofngfsnvobnfgfngfngjfngo gofngfjngfsng ongofngnfsgons
            fgnofngfsngfngofn fongofnghofno nfognfonfngnfgnf nn fngfdn
            hdnhlknfnhdfnhogndohnfdohnfdnh
            fhnfdknhdfnhdnhldghnevbdkbmdkbdkbnkldnbk kbn nbkdn knbkdnbnbk
            nbnbngen nghbne nbebndfkbmfkpbmfbmfbmfbmçfmmfb g ekmgepmgfmgb
            fevmfdbbkmgebm,okm mp mbgmfbkogbkon kbmknbkm kmgkbkdngk kdfn
            onbmdbmdbmdmbkdmbkdmkbmdmbm kmmdgbmdlbmfmbfkmbkdbkdmnbfdn nkfdnbkdgn
            nbdknbkodgn
          </p>
        </div>
      </div>
    </Container>
  );
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
      position: absolute;
      right: 15px;
      top: 15px;
      font-size: 50px;
      color: red;
      cursor: pointer;
    }
  }
  .top {
    box-sizing: border-box;
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .edit {
      margin-top: 13%;
      font-size: 2.2vw;
      color: darkblue;
      cursor: pointer;
      :hover {
        font-size: 2.4vw;
      }
    }
  }
  .down {
    width: 100%;
    margin-top: 5%;
    overflow: auto;
    overflow-x: hidden;
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
  img {
    width: 400px;
  }
  h3 {
    padding: 0px;
    width: 100%;
    font-size: 21px;
    margin-bottom: 0px;
    margin-top: 0px;
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
  }
  .informations {
    box-sizing: border-box;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 1.5vw;
      margin-bottom: 6%;
    }
    .categories {
      display: flex;
      margin-bottom: 6%;
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
  font-size: 2.7vw;
  color: grey;
  display: flex;
  align-items: center;
  .star1 {
    color: #faab00;
  }
  .star2 {
    color: #faab00;
  }
  .star3 {
    color: #faab00;
  }
  .star4 {
    color: #faab00;
  }
  .star5 {
    color: #faab00;
  }
`;
