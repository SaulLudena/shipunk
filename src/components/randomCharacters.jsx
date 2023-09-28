/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RandomCharacters() {
  const [randomCharacters, setRandomCharacters] = useState([]);

  useEffect(() => {
    async function fetchRandomCharacters() {
      try {
        const response = require("../../data/posts.json");

        const shuffled = response.sort(() => Math.random() - 0.5);
        const selectedRandomCharacters = shuffled.slice(0, 3);
        setRandomCharacters(selectedRandomCharacters);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRandomCharacters();
  }, []);

  return (
    <div className="z-10 grid h-screen grid-cols-1 max-md:grid-cols-3 max-md:h-40">
      {randomCharacters.map((character) => {
        return (
          <Link
            href={{
              pathname: `/${character.id}/`,
              query: { character: JSON.stringify(character) },
            }}
            className="w-full h-full bg-[#11111128] max-md:bg-[#111111f3] group relative hover:bg-[#0000008c] transition duration-200 "
            key={character.id}
          >
            <div className="absolute grid items-center justify-center w-full h-full text-center">
              <p className="text-xl text-white transition duration-200 group-hover:opacity-0">
                {character.nombre_personaje}
              </p>
            </div>
            <div className="grid items-center justify-center h-full ">
              <img
                src={character.url_imagen}
                alt={character.nombre_personaje}
                className="object-cover w-40 h-40 transition duration-200 rounded-lg shadow-xl opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
