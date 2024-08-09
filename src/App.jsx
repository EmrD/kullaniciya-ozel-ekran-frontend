import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Signin from './sign';
import Dashboard from './dashboard'; 
import { Toaster } from 'react-hot-toast';

function HomePage() {
  const navigate = useNavigate();

  const handleSign = () => {
    navigate('/sign');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Kullanıcıya Özel Ekranlar</h1>
        <div className="space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSign}
          >
            Kullanıcı Girişi / Kaydı
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard rotasını ekle */}
      </Routes>
    </Router>
  );
}

export default App;
