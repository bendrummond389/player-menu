import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import PlayerMenu from './components/PlayerMenu'
import { AuthProvider } from './contexts/AuthContext';
function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="" element={<Signup />} />
          <Route path="/menu" element={<PlayerMenu />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
