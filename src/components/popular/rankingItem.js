import styled from "styled-components";

export function RankingItem({children, darkMode}) {
  return (
    <Container darkMode={darkMode}>
      {children}
    </Container>
  );
}

const Container = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 95%;
  min-height: 180px;
  background-color: ${props=> props.darkMode === false ? "white" : "#202020"};
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  margin-bottom: 12px;
  position: relative;
  span{
    color: ${props=> props.darkMode === false ? "#4b5669" : "white"};
    padding-left: 10px;
    padding-right: 10px;
    @media (max-width: 614px) {
       padding-left: 2%;
       padding-right: 2%;
       font-size: 4vw;
      }
  }
  img {
    width: 200px;
  }
  h3{
    padding: 0px;
    width: 100%;
    font-size: 21px;
    margin-bottom: 0px;
    margin-top: 0px;
    color: ${props=> props.darkMode === false ? "black" : "white"};
  }

  .img{
    overflow: hidden;
    min-width: 110px;
    width: 100px;
    height: 150px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin-right: 20px;
    @media (max-width: 614px) {
      width: 20vw;
      height: 42vw;
       margin-right: 3%;
      }
  }
  :hover{
    background-color: ${props=> props.darkMode === false ? "#eeeeee" : "#303030"};
  }
  .informations{
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 614px) {
      height: 42vw;
       margin-right: 2%;
      }
    h3{
      color: ${props=> props.darkMode === false ? "black" : "white"};
      font-size: 1vw; 
      margin-bottom: 3%;
      @media (max-width: 614px) {
        margin-bottom: 6%;
       font-size: 3vw;
      }
    }
    p{
    border: solid 2px;
    border-radius: 10px;
    padding: 4px;
    right: 5px;
    bottom: 0px;
    font-size: 1.2vw;
    color: ${props=> props.darkMode === false ? "black" : "white"};
    @media (max-width: 614px) {
       font-size: 4vw;
      }
  }
    .categories{
      display: flex;
      @media (max-width: 614px) {
        margin-bottom: 6%;
      }
      .category{
        margin-right: 10px;
        padding: 3px;
        color: white;
        border-radius: 5px;
        font-size: 0.8vw;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: 3%;
        @media (max-width: 614px) {
       font-size: 2.2vw;
       margin-right: 2%;
      }
      }
      .category:nth-child(1){
        border: solid 2px darkred;
        background-color: #eb3d34;
      }
      .category:nth-child(2){
        border: solid 2px darkgreen;
        background-color: #28b019;
      }
      .category:nth-child(3){
        border: solid 2px darkblue;
        background-color: #345eeb;
      }
    }
  }
`;


