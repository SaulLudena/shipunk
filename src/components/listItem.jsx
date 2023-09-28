import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function ListItem({ character }) {
  return (
    <li>
      <Link
        href={{
          pathname: `/${character.id}/`,
          query: { character: JSON.stringify(character) },
        }}
        className="flex items-center justify-between px-3 py-2 text-gray-500 hover:bg-gray-200 hover:text-gray-950"
      >
        <p> {character.nombre_personaje}</p>
        <AiOutlineArrowRight />
      </Link>
    </li>
  );
}
