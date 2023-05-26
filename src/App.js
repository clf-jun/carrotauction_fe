import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Writing from './components/Writing';
import List from './components/List';
import Qna from './components/Qna';
import Login from './components/Login';
import Chat from './components/Chat';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className='main'>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/writing" element={<Writing />} />
            <Route exact path="/list" element={<List />} />
            <Route exact path="/qna" element={<Qna />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
