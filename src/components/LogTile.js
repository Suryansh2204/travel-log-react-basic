import styled from "styled-components";
export default function LogTile(props) {
  return (
    <Wrapper>
      <Image src={`imgs/${props.img}`} alt="" />
      <Text>
        <Loc>
        <i className="fa-solid fa-location-dot"></i>
          <p>{(props.country).toUpperCase()}</p>
          <a href={props.mapLink}>View on Google Maps</a>
        </Loc>
        <h1>{props.place}</h1>
        <Date>{props.from} - {props.to}</Date>
        <Description>{props.description}</Description>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 3rem 8rem;
  h1 {
    margin: 0;
    margin-top: -15px;
    font-size: 40px;
  }
`;
const Image = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 5px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:30px;
`;

const Loc = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    padding: 0 5px;
    letter-spacing: 2.5px;
    font-size: 19px;
  }
  a {
    color: #918e9b;
    margin: 0 10px;
  }
  i{
    margin: 0 5px 0px 0px;
  }
`;

const Date = styled.div`
  font-weight: bold;
`;

const Description = styled.div`
  text-align: justify;
  font-size: 18px;
`;
