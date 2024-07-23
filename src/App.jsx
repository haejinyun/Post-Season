import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import IndexPage from './pages/IndexPage'
import Weather from './components/Weather'


function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/test3" element={<>test3</>} />
        <Route path="/weather" element={<Weather/>} />

      </Route>
    </Routes>
  )
}

export default App
