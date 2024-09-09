import { useContext } from "react"
import { Header } from "../component/Header"
import { AuthContext } from "../context/AuthContext"


export const Dashboard = () => {
  const { user, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <div>CARGANDO.....</div>
  }

  return (
    <main className="w-screen h-screen  bg-[#E0E0E0] font-Roboto">
      <Header />
      <div>
        <h1>Bienvenido , {user?.nombres} {user?.apellidos}</h1>
      </div>
    </main>
  )
}


