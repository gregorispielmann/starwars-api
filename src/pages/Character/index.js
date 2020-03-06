import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Container,
  ContainerInfo,
  CharacterList,
  CharacterInfo,
  Item,
  ItemName,
  Description,
  List
} from "./styles";

export default function Character(props) {
  const [films, setFilms] = useState([]);
  const [specie, setSpecie] = useState("");
  const [homeworld, setHomeworld] = useState("");
  // console.log(match.params.id);
  console.log();
  let data = props.location.state.c;

  useEffect(() => {
    async function loadFilms() {
      data.films.map(async f => {
        let res = await axios.get(f, {});
        setFilms(films => [...films, res.data.title]);
      });
    }

    loadFilms();

    async function loadSpecie() {
      let res = await axios.get(data.species, {});
      setSpecie(res.data.name);
    }

    loadSpecie();

    async function loadHomeworld() {
      let res = await axios.get(data.homeworld, {});
      setHomeworld(res.data.name);
    }

    loadHomeworld();
  }, [data.films, data.homeworld, data.species]);

  return (
    <Container>
      <ContainerInfo>
        <CharacterList>
          <Link to="/">Go Back</Link>
          <CharacterInfo>
            <Item>
              <ItemName>Name</ItemName>
              <Description>{data.name}</Description>
            </Item>
            <Item>
              <ItemName>Eye Color</ItemName>
              <Description>{data.eye_color}</Description>
            </Item>
            <Item>
              <ItemName>Specie</ItemName>
              <Description>{specie}</Description>
            </Item>
            <Item>
              <ItemName>Homeworld</ItemName>
              <Description>{homeworld}</Description>
            </Item>
            <List>
              <ItemName>Films</ItemName>
              {films.map(f => (
                <Description key={f}>{f}</Description>
              ))}
            </List>
          </CharacterInfo>
        </CharacterList>
      </ContainerInfo>
    </Container>
  );
}
