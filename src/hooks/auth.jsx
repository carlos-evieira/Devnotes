import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({children}){
  const [data, setData] = useState({})

  async function signIn({ email, password }){

    try {
      const res = await api.post("/sessions", { email, password })
      const { user, token } = res.data

      localStorage.setItem("@devnotes:user", JSON.stringify(user))
      localStorage.setItem("@devnotes:token", token)

      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token })
   
    } catch (error) {
      if(error.res){
        alert(error.res.data.message)
      }else{
        alert("Não foi possível entrar.")
      }
    }
   
  }

  // remove do localStorage o usuario e token o que faz com que o usuario seja redirecionado para a tela de login
  function signOut(){
    localStorage.removeItem("@devnotes:token")
    localStorage.removeItem("@devnotes:user")

    setData({})
  }

  //Para quando a página for recarregada ou o navegador seja fechado, as informações de autenticação e carregamento da página não sejam perdidas
  useEffect(() => {
    const token = localStorage.getItem("@devnotes:token")
    const user = localStorage.getItem("@devnotes:user")

    if(token && user){
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }

  }, [])

  return(

    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      user: data.user 
      }} 
      >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }