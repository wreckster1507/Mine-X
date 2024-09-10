import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ShiftLogForm from './components/ShiftLogForm';
import ShiftLogList from './components/ShiftLogList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shiftLogForm" element={<ShiftLogForm />} />
        <Route path="/shiftLogList" element={<ShiftLogList />} />
      </Routes>
    </Router>
  );
}

export default App;
