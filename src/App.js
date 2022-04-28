import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import PlayerMenu from './components/PlayerMenu'

function App() {

  return (
    <Router>

      <Routes>
        <Route path="" element={<LoginPage />} />
        <Route path="/menu" element={<PlayerMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
