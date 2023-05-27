import Image from "next/image";
import logo from '/public/img/logo.png'
export default function Navbar (){
  return (
    <>
      <div className="bg-black p-3 flex fixed w-full">
        <Image 
          alt="La zona basketball" 
          src={logo}
          className="w-12 h-12"
        />
        <h1 className="text-4xl font-bold text-center text-white ps-5 ">
          La Zona Basketball
        </h1>
        <input
          type="text"
          placeholder="Buscar"
          className="bg-gray-800 text-white rounded-full px-4 py-2 w-full md:w-1/3 lg:w-1/3 xl:w-1/4 ml-auto"
        />
      </div>
      <div className="pt-16">
      </div>
    </>
  )
}