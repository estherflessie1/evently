import Navbar from "../components/Navbar"
import LoginForm from "../components/LoginForm"
import LoginHero  from "../components/Loginhero"

function Login() {
  return (
  <>
  
  <Navbar/>
  <main className="grid min-h-[calc(100vh-80px)] grid-cols-1 lg:grid-cols-2">
        <LoginHero />
        <LoginForm />
    </main>
  
  
  </>
)}

export default Login