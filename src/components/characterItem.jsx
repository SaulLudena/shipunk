/* eslint-disable @next/next/no-img-element */
import RandomCharacters from "./randomCharacters";
import LiveSearcher from "./liveSearcher";
import Link from "next/link";
export default function CharacterItem({ characterItem }) {
  const {
    nombre_personaje,
    descripcion_personaje,
    estado_personaje,
    url_imagen,
  } = characterItem;

  return (
    <>
      <div className="fixed flex items-center w-full gap-10 px-10 h-36">
        <Link href="/" className="max-md:hidden">
          <img
            src="https://res.cloudinary.com/dbtzbuew2/image/upload/v1695099776/Vector_165_yodaaf.png"
            alt="logo"
            className="w-14 h-14"
          />
        </Link>
        <div className="justify-center w-full max-lg:justify-center">
          <LiveSearcher />
        </div>
      </div>
      <div className="grid w-full grid-cols-12">
        <div className="grid items-center justify-center col-span-1 max-lg:hidden">
          <p
            className={`font-bold tracking-widest -rotate-90 text-9xl ${
              estado_personaje ? "text-[#6bfaff]" : "text-rose-600"
            }`}
          >
            {estado_personaje ? "ALIVE" : "K.I.A"}
          </p>
        </div>
        <div className="grid items-center h-screen col-span-9 max-lg:col-span-10 max-md:col-span-12">
          <div className="w-[80%] max-w-[2600px] m-auto max-lg:w-[90%]">
            <div className="grid grid-cols-12 gap-2 text-left max-lg:flex-col max-lg:flex max-lg:text-center">
              <div className="grid col-span-7 gap-5 ">
                <h1 className="font-bold text-white text-7xl max-lg:text-5xl">
                  {nombre_personaje}
                </h1>

                <p className="text-gray-200 max-lg:text-sm">
                  {" "}
                  {descripcion_personaje}
                </p>
                <div className="flex max-lg:justify-center max-lg:text-center">
                  <div className="flex items-center justify-center gap-4 bg-black rounded-lg w-28 ">
                    <p
                      className={`${estado_personaje}  text-white   h-10 grid items-center max-lg:text-sm`}
                    >
                      {estado_personaje ? "Alive" : "K.I.A"}
                    </p>
                    <div
                      className={`w-4 h-4  ${
                        estado_personaje ? "bg-[#6bfaff]" : "bg-rose-600"
                      } rounded-full`}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center col-span-4">
                <img
                  src={url_imagen}
                  alt=""
                  className="object-cover rounded-full w-72 h-72 max-lg:w-40 max-lg:h-40"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-0 col-span-2 max-md:w-full max-md:col-span-12 max-md:fixed">
          <RandomCharacters />
        </div>
      </div>
    </>
  );
}
