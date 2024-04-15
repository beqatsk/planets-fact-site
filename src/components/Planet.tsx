import data from "../data.json";
import styled from "styled-components";
import { useParams } from "react-router";

export default function Planet() {
  const params = useParams();
  const planetName = params.planet;
  const planetObj = data.find((item) => item.name === planetName);
  return (
    <>
      <Container>
        <img src={planetObj?.images.planet} alt="" />

        <ConatinerSide>
          <PlanetName>{planetObj?.name}</PlanetName>
          <PlanetTitle>{planetObj?.overview.content}</PlanetTitle>
          <PlanetContent> 01 OVERVIEW</PlanetContent>
          <PlanetContent> 02 INTERNAL STRUCTURE</PlanetContent>
          <PlanetContent> 03 SURFACE GEOLOGY</PlanetContent>
        </ConatinerSide>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  margin-top: 20px;

  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
`;
// const PlanetImage = styled.div`
//   width: 290px;
//   height: 290px;
//   background-image: url(/images/Mercury.png);
//   background-position: center;
//   background-size: cover;
// `;
const ConatinerSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PlanetName = styled.h1`
  font-family: Antonio;
  font-size: 80px;
  font-weight: 500;
  color: white;
`;
const PlanetTitle = styled.p`
  max-width: 350px;
  font-family: Spartan;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.79;
  color: white;
  margin-top: 24px;
  margin-bottom: 24px;
`;
const PlanetContent = styled.div`
  width: 350px;
  height: 48px;
  margin: 0 0 16px;
  padding: 12px 20px;
  font-family: Spartan;
  font-size: 12px;
  font-weight: bold;
  line-height: 2.08;
  letter-spacing: 2.57px;
  text-align: left;
  color: white;
  border: solid 1px white;
  cursor: pointer;
`;
