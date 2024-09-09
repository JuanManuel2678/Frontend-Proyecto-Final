import { Navbar } from "./Navbar"
import { User } from "./User"


export const Header = () => {

  return (
    <header className="w-full h-[80px] p-1 bg-white flex gap-10 justify-between"> 

      <figure className="w-[110px] h-full">
        <img src="/img-1.jpg" alt="" className="size-full rounded-lg"/>
      </figure>

      <Navbar />
      <User />

    </header>
  )
}

