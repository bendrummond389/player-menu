import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PlayerMenu from './components/PlayerMenu'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/menu" element={<PlayerMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
