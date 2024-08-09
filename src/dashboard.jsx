import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error("Yetkisiz giriş tespit edildi.")
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

  if (!dashboardData) {
    return <div className='h-screen flex items-center justify-center'>
        Size özel hazırlanmış ekranlarınız yükleniyor. Lütfen bekleyin...
    </div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        Şu anda şu ekrana erişiminiz var: 
      {dashboardData.username=="admin" && <h1 className="text-2xl font-bold">Yönetici</h1>}
      {dashboardData.username=="user2" && <h1 className="text-2xl font-bold">Kullanıcı</h1>}
      {dashboardData.username=="emr" && <h1 className="text-2xl font-bold">Proje Sahibi</h1>}
    </div>
  );
}

export default Dashboard;
