import { Card, Container, ProgressBar } from "react-bootstrap";
import styled from "styled-components";

export const StyleCard = styled(Card)`
  width: 250px;
  margin-top: 20px;
  text-align: center;
  border: 0px;
`;

export const StyleContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

export const StyleProgressBar = styled(ProgressBar)`
  border-radius: 30px;
`;
