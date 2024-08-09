import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSignin = () => {
    console.log("kullanıcı adı: " + username);

    fetch('https://kullaniciya-ozel-ekran-backend.vercel.app/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
    .then(response => {
      if (!response.ok) { 
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (data.token) {
        // Token'ı localStorage'a kaydet
        localStorage.setItem('authToken', data.token);

        // Kullanıcıyı dashboard'a yönlendir
        navigate(`/dashboard`);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold">Giriş Sayfası</h1>
      <div className="space-y-2">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Kullanıcı Adı
        </label>
        <input
          type="text"
          id="username"
          placeholder="Kullanıcı Adınızı Girin"
          className="px-4 py-2 border border-gray-300 rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded space-x-2" onClick={handleSignin}>Gönder</button>
    </div>
  );
}

export default Signin;
