import styled from "styled-components";

export function RankingItem(props) {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

const Container = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 95%;
  min-height: 180px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  margin-bottom: 12px;
  position: relative;
  span{
    color: #4b5669;
    padding-left: 10px;
    padding-right: 10px;
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
  }
  :hover{
    background-color: #EEEEEE;
  }
  .informations{
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3{
      font-size: 1vw; 
    }
    p{
    border: solid 2px;
    border-radius: 10px;
    padding: 4px;
    right: 10px;
    bottom: 0px;
    font-size: 0.8vw;
    color: black;
    margin-left: 6%;
  }
    .categories{
      display: flex;
      .category{
        margin-right: 10px;
        padding: 3px;
        color: white;
        border-radius: 5px;
        font-size: 0.8vw;
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

