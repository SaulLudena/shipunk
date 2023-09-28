import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import ListItem from "./listItem";

export default function LiveSearcher() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchCharacters() {
      try {
        const data = require("../../data/posts.json");

        setCharacters(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCharacters();
  }, [characters]);

  return (
    <div className="grid gap-5 p-5 pl-0 max-md:justify-center">
      <div className="flex items-center text-left ">
        <input
          type="text"
          className="py-2 pl-3 pr-2 rounded-l-lg shadow-lg outline-none w-96"
          placeholder="David, Lucy, Kiwi"
          onChange={(e) => {
            setQuery(e.target.value);
            e.target.value.length > 0 ? setOpen(true) : setOpen(false);
          }}
          value={query}
        />

        {query.length !== 0 ? (
          <div
            className="grid items-center justify-center w-10 h-10 text-black transition duration-200 bg-white rounded-r-lg cursor-pointer"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
          >
            <AiOutlineClose />
          </div>
        ) : (
          <div className="grid items-center justify-center w-10 h-10 text-black transition duration-200 bg-white rounded-r-lg ">
            <AiOutlineSearch />
          </div>
        )}
      </div>
      <div>
        <ul
          className={
            open
              ? "absolute bg-white w-[26.5rem] shadow-lg  py-1 rounded-lg h-40 overflow-auto "
              : "hidden"
          }
        >
          {characters
            .filter((character) =>
              character.nombre_personaje
                .toLowerCase()
                .includes(query.toLocaleLowerCase())
            )
            .map((character) => {
              return (
                <div
                  key={character.id}
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                  }}
                >
                  <ListItem character={character} />
                </div>
              );
            })}
          {characters.length > 0 &&
            query.length > 0 &&
            characters.filter((character) =>
              character.nombre_personaje
                .toLowerCase()
                .includes(query.toLowerCase())
            ).length === 0 && (
              <li>
                <p className="px-3 py-2 text-gray-500">
                  No se encontraron coincidencias.
                </p>
              </li>
            )}
        </ul>
      </div>
    </div>
  );
}
