import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WelcomePage from "./pages/WelcomePage"

function App() {

  return (
    <Router>

      <div className='h-screen w-screen text-zinc-100 bg-zinc-900'>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </div>

    </Router>
  )
}

export default App
