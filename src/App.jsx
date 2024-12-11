import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"

function App() {

  return (
    <>

      <Navbar />
      <div className='h-screen w-screen bg-[#1c4587]'>
        <Home />
      </div>

    </>
  )
}

export default App
