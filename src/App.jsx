import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WelcomePage from "./pages/WelcomePage"
import KanbanBoard from "./pages/KanbanBoard"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {

  return (
    <Router>

      <div className='min-h-screen w-screen text-zinc-100 bg-zinc-900'>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/kanban-board" element={
            <DndProvider backend={HTML5Backend}>
              <KanbanBoard />
            </DndProvider>
          } />
        </Routes>
      </div>

    </Router>
  )
}

export default App
