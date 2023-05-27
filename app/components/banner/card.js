import Image from "next/image";
import Link from 'next/link'

export default function Card ({ title , imagen , path }){
  return (
    <div className="p-5 transition ease-in-out delay-150  hover:-translate-y-1">
      <div className='flex p-10'>
        <Link href={path} className=" m-auto ">
          <Image 
            alt="La zona basketball" 
            src={imagen}
            className="w-56 h-56 p-2 m-auto rounded-full bg-white"
          />
        </Link>
      </div>
      <div className='text-center'>
        <span className='font-bold text-white text-3xl'>
          {title}
        </span>
      </div>
    </div>
  )
}