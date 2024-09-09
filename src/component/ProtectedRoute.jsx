import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router"


export const ProtectedRoute = () => {
    const token = localStorage.getItem('token')
    const {isLoading, isError} = useContext(AuthContext)

    if (!token) {
        window.location.href = '/'
        return null
    }
    if (isLoading) {
        return <div>CARGANDO...</div>
    }
    if (isError) {
        return <Navigate to="/" />
    }

  return (<Outlet/> )
}
export default ProtectedRoute
