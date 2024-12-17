import { Link, Outlet,} from "react-router-dom";
import './Layout.css'
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function Layout(){
    const {user, token, setUser, setToken} = useContext(AppContext)
    async function handleLogout(e){
        e.preventDefault()
        const res = await fetch('/api/logout',{
            method:'post',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        const data = await res.json()
        console.log(data)
        if(res.ok){
            setUser(null)
            setToken(null)
            localStorage.removeItem("token")
            localStorage.removeItem("userID")
            navigate('/')
        }
    }
    return(
        <>
        <header>
            <div>
            <nav className="navbar">
                <Link to = "/" className="nav-link">
                    HOME
                    </Link>
                    {user ? (
                        <div className="flex items-center space-x-4">
                            <p className="text-red-400 text-l">WELCOME BACK {user.data.name.toUpperCase()}</p>
                            
                            {user.role === "A" && (
                                <Link to="/manageuser" className="flex items-center space-x-2 nav-link font-bold text-base">
                                     
                                    Manage Users
                                </Link>
                            )}
                            {user.role === "A" && (
                                <Link to="/registerworker" className="flex items-center space-x-2 nav-link font-bold text-base">
                                    Register Worker
                                </Link>
                            )}
                                <form onSubmit={handleLogout}>
                                <button className="">
                                    Logout
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="space-x-4">
                            <Link to="/register" className="nav-link">
                      <span>Register</span>
                            </Link>
                            <Link to="/login" className="nav-link">
                      <span>Login</span>
                            </Link>
                        </div>
                    )}
                    <div className="nav-links">
                    
                    
                    </div>
                    
            </nav>
            </div>
        </header>
        <main>
            <Outlet/>
        </main>
        </>
    )
}