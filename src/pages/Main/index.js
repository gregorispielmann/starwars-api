import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  Title,
  FilterCharacter,
  SelectFilter,
  SelectLabel,
  SearchResult,
  Name
} from "./styles";

import Loading from "../../components/Loading";
import { MdArrowDropDown } from "react-icons/md";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [movies, setMovies] = useState([]);
  const [species, setSpecies] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function loadData() {
      let response = await axios.get("https://swapi.co/api/planets", {});
      let count = response.data.count;

      for (let i = 1; i <= count; i++) {
        try {
          let res = await axios.get(`https://swapi.co/api/planets/${i}`, {});

          let data = res.data;

          setPlanets(planets => [
            ...planets,
            {
              value: i,
              label: data.name
            }
          ]);
        } catch (e) {
          continue;
        }
      }

      response = await axios.get("https://swapi.co/api/films", {});
      count = response.data.count;

      for (let i = 1; i <= count; i++) {
        try {
          let res = await axios.get(`https://swapi.co/api/films/${i}`, {});

          let data = res.data;

          setMovies(movies => [
            ...movies,
            {
              value: i,
              label: data.title
            }
          ]);
        } catch (e) {
          continue;
        }
      }

      response = await axios.get("https://swapi.co/api/species", {});

      count = response.data.count;

      for (let i = 1; i <= count; i++) {
        try {
          let res = await axios.get(`https://swapi.co/api/species/${i}`, {});

          let data = res.data;

          setSpecies(species => [
            ...species,
            {
              value: i,
              label: data.name
            }
          ]);
        } catch (e) {
          continue;
        }
      }

      response = await axios.get("https://swapi.co/api/people", {});
      count = response.data.count;

      for (let i = 1; i <= count; i++) {
        try {
          let res = await axios.get(`https://swapi.co/api/people/${i}`, {});

          let data = res.data;

          setCharacters(characters => [
            ...characters,
            {
              id: i,
              name: data.name,
              eye_color: data.eye_color,
              hair_color: data.hair_color,
              homeworld: data.homeworld,
              films: data.films,
              species: data.species
            }
          ]);
        } catch (e) {
          continue;
        }
      }
      setLoading(false);
    }

    loadData();
  }, []);

  /** HANDLE SELECT */
  async function handleSelect(item, type) {
    switch (type) {
      case "planet":
        {
          setLoading(true);

          let res = await axios.get(
            `https://swapi.co/api/planets/${item.value}`
          );
          let result = res.data.residents;
          let count = res.data.residents.length;

          for (let i = 0; i <= count; i++) {
            try {
              let res = await axios.get(result[i], {});
              let data = res.data;

              setCharacters(characters => [
                ...characters,
                {
                  id: i,
                  name: data.name,
                  eye_color: data.eye_color,
                  hair_color: data.hair_color,
                  homeworld: data.homeworld,
                  films: data.films,
                  species: data.species
                }
              ]);
            } catch (e) {
              continue;
            }
            setLoading(false);
          }
        }
        break;
      case "movie":
        {
          setLoading(true);

          let res = await axios.get(`https://swapi.co/api/films/${item.value}`);
          let result = res.data.residents;
          let count = res.data.residents.length;

          for (let i = 0; i <= count; i++) {
            try {
              let res = await axios.get(result[i], {});
              let data = res.data;

              setCharacters(characters => [
                ...characters,
                {
                  id: i,
                  name: data.name,
                  eye_color: data.eye_color,
                  hair_color: data.hair_color,
                  homeworld: data.homeworld,
                  films: data.films,
                  species: data.species
                }
              ]);
            } catch (e) {
              continue;
            }
            setLoading(false);
          }
        }
        break;
      case "specie":
        {
          setLoading(true);
          let res = await axios.get(
            `https://swapi.co/api/species/${item.value}`
          );
          let result = res.data.people;
          let count = res.data.people.length;

          for (let i = 0; i <= count; i++) {
            try {
              let res = await axios.get(result[i], {});
              let data = res.data;

              setCharacters(characters => [
                ...characters,
                {
                  id: i,
                  name: data.name,
                  eye_color: data.eye_color,
                  hair_color: data.hair_color,
                  homeworld: data.homeworld,
                  films: data.films,
                  species: data.species
                }
              ]);
            } catch (e) {
              continue;
            }
            setLoading(false);
          }
        }
        break;
      default:
        return;
    }
  }

  /* COMPONENT RETURN */

  return (
    <>
      <Title>Star Wars API</Title>
      <Container>
        <FilterCharacter>
          Choose any options below to filter characters
          <MdArrowDropDown size={25}></MdArrowDropDown>
          <SelectLabel>Planet</SelectLabel>
          <SelectFilter
            onChange={select => {
              handleSelect(select, "planet");
            }}
            options={planets}
          ></SelectFilter>
          <SelectLabel>Movie</SelectLabel>
          <SelectFilter
            onChange={select => {
              handleSelect(select, "movie");
            }}
            options={movies}
          ></SelectFilter>
          <SelectLabel>Species</SelectLabel>
          <SelectFilter
            onChange={select => {
              handleSelect(select, "specie");
            }}
            options={species}
          ></SelectFilter>
        </FilterCharacter>
        <SearchResult>
          {characters &&
            characters.map(c => (
              <Name
                key={c.name}
                to={{
                  pathname: `character/${c.id}`,
                  state: { c }
                }}
              >
                {c.name}
              </Name>
            ))}
          {loading && <Loading></Loading>}
        </SearchResult>
      </Container>
    </>
  );
}
//
