import styled from "styled-components";
import Select from "react-select";

import { Link } from "react-router-dom";

export const Title = styled.h1`
  font-size: 48px;
  color: white;
`;

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;

  background: #fff;
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FilterCharacter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px 0;
`;

export const SelectLabel = styled.h5`
  margin: 30px 0 10px 0;
`;

export const SelectFilter = styled(Select)`
  width: 100%;
  min-width: 200px;
`;

export const SearchResult = styled.div`
  margin: 30px;
  width: 100%;
  min-width: 500px;
  display: grid;
  justify-content: center;
  align-items: center;
  justify-content: center;
  grid-gap: 5px;
`;

export const Name = styled(Link)`
  margin: 10px 0;
  font-size: 16px;
  font-weight: normal;
  color: #000;
`;
