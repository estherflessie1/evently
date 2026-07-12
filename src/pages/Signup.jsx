import Navbar from "../components/Navbar"
import SignupForm from "../components/SignupForm"
import Signuphero from "../components/Signuphero"

function Signup() {
    return (
        <>
            <Navbar />

            <main className="grid min-h-[calc(100vh-80px)] grid-cols-1 lg:grid-cols-2">
                <Signuphero />
                <SignupForm />
            </main>

        </>
    )
}

export default Signup