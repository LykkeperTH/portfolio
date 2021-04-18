import { Image, Row } from "react-bootstrap";
import styled from "styled-components";

export const StyleRow = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyleImage = styled(Image)`
  width: 250px;
  height: 250px;
`;

export const StyleRowContent = styled(Row)`
  text-align: center;
  display: contents;
`;
