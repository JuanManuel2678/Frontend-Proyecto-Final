import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { createUser, getMe, loginUser } from "../services/authService";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [modal ,setModal] = useState(false)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [user, setUser] = useState(null)
    const rutasIgnoradas = ["/", "/recuperar"]

    const login = useMutation({
        mutationKey: ['login'],
        mutationFn: loginUser,
        onError: data => alert(data.response?.data?.message),
        onSuccess: ({ data }) => {
            localStorage.setItem('token', data.token)
            setUser(data.user)
            navigate('/dashboard')
        }
    })

    const create = useMutation({
        mutationKey: ['crate'],
        mutationFn: createUser,
        onError: data => alert(data.response?.data?.message),
        onSuccess: ({ data }) => {
            alert(data.message)
            navigate('/dashboard')
        }
    })

    const { data, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: getMe,
        enabled: !rutasIgnoradas.includes(pathname),
    });

    useEffect(() => {
        if (data && !isLoading) {
            setUser(data);
        }
    }, [data, isLoading]);

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        setUser(null)
        navigate('/')
        setModal(false)
    }

    function options() {
        setModal(!modal)
    }

    
    return (
        <AuthContext.Provider value={{ user, login, isLoading, logout, options, isError, create}}>
            {children}
        </AuthContext.Provider>)
}

// options, modal, Login, user, logout, isLoading, isError 