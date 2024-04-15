import data from "../data.json";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderDiv>
      <Headericon>THE PLANETS</Headericon>
      <NavList>
        {data.map((planet, index) => {
          return (
            <Li key={index}>
              <Link to={`/${planet.name}`} style={{ color: "white" }}>
                {planet.name}
              </Link>
            </Li>
          );
        })}
      </NavList>
    </HeaderDiv>
  );
}
const HeaderDiv = styled.div`
  width: 100%;
  padding: 22px 32px 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 300px;
  border-bottom: 1px solid #444242;
`;
const Headericon = styled.h2`
  font-family: Antonio;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -1.05px;
  color: white;
`;
const NavList = styled.div`
  display: flex;
  justify-content: center;
  gap: 33px;
  align-items: center;
`;
const Li = styled.li`
  font-family: Spartan;
  font-size: 11px;
  font-weight: bold;
  line-height: 2.27;
  letter-spacing: 1px;
  opacity: 0.75;
  color: white;
  list-style: none;
  && :link {
    text-decoration: none;
  }
`;
