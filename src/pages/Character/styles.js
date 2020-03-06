import styled from "styled-components";

import Select from "react-select";

export const Title = styled.h1`
  font-size: 48px;
  color: white;
`;

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 0px 20px;

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

export const CharacterList = styled.div`
  margin-top: 50px;
  width: 100%;
  min-width: 500px;
`;

export const CharacterInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  align-items: flex-start;
  justify-items: flex-start;
`;

export const Item = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ItemName = styled.h2`
  font-size: 14px;
  font-weight: normal;
  color: #999;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const List = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
