import data from "../data.json";
import styled from "styled-components";
import { useParams } from "react-router";

export default function Planet() {
  //   const results = [
  //     "ROTATION TIME",
  //     "REVOLUTION TIME",
  //     "RADIUS",
  //     "AVERAFE TEMP.",
  //   ];
  const params = useParams();
  const planetName = params.planet;
  const planetObj = data.find((item) => item.name === planetName);
  return (
    <>
      <Container>
        <img
          src={planetObj?.images.planet}
          alt="planets"
          style={{ width: "300px", height: "300px" }}
        />

        <ConatinerSide>
          <PlanetName>{planetObj?.name}</PlanetName>
          <PlanetTitle>{planetObj?.overview.content}</PlanetTitle>
          <PlanetContent> 01 OVERVIEW</PlanetContent>
          <PlanetContent> 02 INTERNAL STRUCTURE</PlanetContent>
          <PlanetContent> 03 SURFACE GEOLOGY</PlanetContent>
        </ConatinerSide>
      </Container>
      <InfoCardWrapper>
        <InfoCard>
          <RotationTime>ROTATION TIME</RotationTime>
          <RotationResult>{planetObj?.rotation}</RotationResult>
        </InfoCard>
        <InfoCard>
          <RotationTime>REVOLUTION TIME</RotationTime>
          <RotationResult>{planetObj?.revolution}</RotationResult>
        </InfoCard>
        <InfoCard>
          <RotationTime>RADIUS</RotationTime>
          <RotationResult>{planetObj?.radius}</RotationResult>
        </InfoCard>
        <InfoCard>
          <RotationTime>AVERAFE TEMP.</RotationTime>
          <RotationResult>{planetObj?.temperature}</RotationResult>
        </InfoCard>
      </InfoCardWrapper>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 200px;
`;
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
const InfoCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
const InfoCard = styled.div`
  width: 255px;
  height: 128px;
  margin: 20px 0 20px 24px;
  padding: 20px 10px 17px 23px;
  border: solid 1px white;
`;
const RotationTime = styled.h3`
  font-family: Spartan;
  font-size: 11px;
  opacity: 0.5;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.27;
  letter-spacing: 1px;
  text-align: left;
  color: #ffffff;
`;
const RotationResult = styled.h1`
  font-family: Antonio;
  font-size: 40px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.5px;
  text-align: left;
  color: white;
`;
