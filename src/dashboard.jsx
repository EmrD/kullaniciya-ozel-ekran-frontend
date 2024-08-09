import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error("Yetkisiz giriş tespit edildi.");
      navigate('/sign');
      return;
    }

    fetch('https://kullaniciya-ozel-ekran-backend.vercel.app/dashboard', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Token doğrulanamadı');
      }
      return response.json();
    })
    .then(data => {
      setDashboardData(data); // Dashboard verilerini ayarla
    })
    .catch(error => {
      console.error('Error:', error);
      navigate('/sign'); // Hata varsa giriş sayfasına yönlendir
    });
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Fade-out animasyonunu başlat
    }, 3000); // 3 saniye bekle

    const fadeTimer = setTimeout(() => {
      setLoading(false); // Yükleme ekranını kapat
    }, 3500); // Fade-out animasyonu bittikten sonra ekranı değiştir

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, []);

  if (loading) {
    return (
      <div className={`h-screen flex flex-col items-center justify-center bg-gray-100 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative flex items-center justify-center">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500"></div>
          <div className="absolute h-16 w-16 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
        <p className="mt-8 text-xl font-semibold text-gray-700">Size özel hazırlanmış ekranlarınız yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen transition-opacity duration-500 opacity-100">
      Şu anda şu ekrana erişiminiz var: 
      {dashboardData.username === "admin" && <h1 className="text-2xl font-bold">Yönetici</h1>}
      {dashboardData.username === "user2" && <h1 className="text-2xl font-bold">Kullanıcı</h1>}
      {dashboardData.username === "emr" && <h1 className="text-2xl font-bold">Proje Sahibi</h1>}
    </div>
  );
}

export default Dashboard;
