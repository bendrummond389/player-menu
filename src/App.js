import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Signup from './pages/Signup';
import PlayerMenu from './components/PlayerMenu'
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={
          <PrivateRoute>
            <PlayerMenu />
          </PrivateRoute>
          } />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
