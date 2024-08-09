# Kullanıcıya Özel Ekranlar Projesi

Bu proje, kullanıcıların farklı ekranlara erişimini sağlayan basit bir web uygulamasıdır. Kullanıcılar, giriş yaptıktan sonra özel bir dashboard ekranına yönlendirilirler.

## Proje İçeriği

Bu proje, iki ana bileşenden oluşur:

1. **Backend (Express.js)**: Kullanıcıların giriş yapmasını sağlar ve token tabanlı kimlik doğrulama kullanır.
2. **Frontend (React)**: Kullanıcı giriş ekranı ve dashboard ekranını içerir.

## Backend Kurulumu

Backend kısmı, Express.js ve JWT (JSON Web Token) kullanılarak oluşturulmuştur. Kullanıcıların giriş yapabilmesi ve dashboard bilgilerini alabilmesi için API uç noktaları sağlanmaktadır.

### Gereksinimler

- Node.js
- npm veya yarn

### Kurulum

1. Bu dizine gidin:
    ```bash
    git clone https://github.com/EmrD/kullaniciya-ozel-ekran-backend.git
    cd <Path>
    ```

2. Gerekli paketleri yükleyin:
    ```bash
    npm install
    ```

3. `.env` dosyası oluşturun ve `SECRET_KEY` değerini tanımlayın:
    ```
    SECRET_KEY=your_secret_key
    ```

4. Sunucuyu başlatın:
    ```bash
    npm run dev
    ```

### API Uç Noktaları

- **POST /signin**: Kullanıcı adı ile giriş yapar ve bir token döner.
    - `Body`: `{ "username": "kullanıcı_adı" }`
    - Yanıt: `{ "message": "giriş yapıldı", "token": "jwt_token", "dashboard": "dashboard_info" }`

- **GET /dashboard**: Token doğrulaması yaparak dashboard bilgilerini döner.
    - `Headers`: `{ "Authorization": "Bearer jwt_token" }`
    - Yanıt: `{ "username": "kullanıcı_adı", "dashboard": "dashboard_info" }`

## Frontend Kurulumu

Frontend kısmı, React kullanılarak oluşturulmuştur ve kullanıcıların giriş yapmasını ve dashboard ekranını görmesini sağlar.

### Gereksinimler

- Node.js
- npm

### Kurulum

1. Bu dizine gidin:
    ```bash
    git clone https://github.com/EmrD/kullaniciya-ozel-ekran-frontend.git
    cd <Path>
    ```

2. Gerekli paketleri yükleyin:
    ```bash
    npm install
    ```

3. Uygulamayı başlatın:
    ```bash
    npm run dev
    ```

### Sayfalar

- **HomePage**: Ana sayfa, kullanıcı girişine yönlendiren bir buton içerir.
- **Signin**: Kullanıcıların giriş yapabildiği formu içerir.
- **Dashboard**: Kullanıcıların token doğrulaması ile erişebildiği ve kişisel dashboard bilgilerini gösteren ekran.

## Nasıl Kullanılır

1. **Giriş Yapma**: Kullanıcı, `/sign` yolunu ziyaret ederek giriş yapabilir.
2. **Dashboard Erişimi**: Giriş yaptıktan sonra, `/dashboard` yoluna yönlendirilir ve kişisel dashboard bilgilerini görüntüler.
3. **Kullanıcı Adları**: Frontend kısmı çalıştırıldıktan sonra "emr" , "user2" veya "admin" kullanıcı adları ile uygulama test edilebilir.
4. **Kurulum Sıralaması**: Kurulum ve çalıştırma sıralaması ilk olarak backend kısmının çalıştırılması ile başlar. Backend kısmının çalıştığından emin olunduktan sonra Frontend kısmının kurulumuna geçilebilir.

