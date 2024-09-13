import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ShiftLogForm from './components/ShiftLogForm';
import ShiftLogList from './components/ShiftLogList';
import SummaryPage from './components/SummaryPage';
import About from './components/About';

function App() {



  return (


    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shiftLogForm" element={<ShiftLogForm />} />
        <Route path="/shiftLogList" element={<ShiftLogList />} />
        <Route path="/summary/:logId" element={<SummaryPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

  );
}

export default App;
