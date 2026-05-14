# 🏡 RoamStay

RoamStay is a full-stack property rental and booking web application inspired by platforms like Airbnb. Users can explore accommodations, view detailed property information, leave reviews, and book stays, while hosts can create and manage their own listings.

The project was built to gain hands-on experience in full-stack web development, authentication systems, RESTful APIs, database integration, cloud deployment, and production-level debugging.

---

## 🌐 Live Demo

🚀 Live Website: https://roamstay-uttn.onrender.com/listings

💻 GitHub Repository: https://github.com/ShreyaVispute021/RoamStay

---

## ✨ Features

### 👤 User Features
- Browse all available property listings
- View detailed property information
- User authentication & authorization
- Register/Login/Logout functionality
- Add reviews and ratings to listings
- Book accommodations
- Flash success/error messages
- Responsive and clean UI

### 🏠 Host Features
- Create new property listings
- Upload property images using Cloudinary
- Edit existing listings
- Delete property listings
- Manage hosted properties

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap
- EJS Templates

### Backend
- Node.js
- Express.js

### Database & Cloud
- MongoDB
- Mongoose
- MongoDB Atlas
- Cloudinary

### Authentication & Session Management
- Passport.js
- express-session
- connect-flash

### Deployment
- Render
- Git & GitHub

---

## 📂 Project Structure

```bash
RoamStay/
│
├── models/              # Mongoose schemas
├── routes/              # Express routes
├── controllers/         # Route controllers
├── middleware.js        # Custom middleware
├── utils/               # Utility functions
├── views/               # EJS templates
├── public/              # Static assets
├── uploads/             # Uploaded files
├── app.js               # Main server file
├── package.json
└── .env
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have installed:

- Node.js
- MongoDB
- Git

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/ShreyaVispute021/RoamStay.git
cd RoamStay
```

### Install Dependencies

```bash
npm install
```

### Create `.env` File

Create a `.env` file in the root directory and add:

```env
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

SECRET=your_session_secret

ATLASDB_URL=your_mongodb_connection_url
```

---

## ▶️ Run Application

### Development Mode

```bash
nodemon app.js
```

### Production Mode

```bash
node app.js
```

The application will run at:

```bash
http://localhost:8080
```

---

## 📸 Core Functionalities

- Full CRUD operations for property listings
- Authentication & authorization
- Session handling
- Image upload & cloud storage
- Review and rating system
- Booking functionality
- RESTful routing
- MVC architecture

---

## 📚 Learning Outcomes

Through this project, I gained practical experience in:

1. Building RESTful APIs using Express.js
2. Implementing CRUD operations with MongoDB & Mongoose
3. Authentication using Passport.js
4. Managing sessions and flash messages
5. Cloud image storage using Cloudinary
6. Deploying full-stack applications on Render
7. Working with MongoDB Atlas
8. Debugging production deployment issues
9. Structuring scalable MVC applications

---

## 🔮 Future Improvements

- 🗺️ Interactive Maps Integration (Mapbox)
- 🔍 Advanced Search & Filters
- ❤️ Wishlist/Favorites System
- 💳 Payment Gateway Integration
- 📱 Improved Mobile Responsiveness
- 📍 Location-based Recommendations
- 📊 Admin Dashboard

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

Feel free to fork the repository and create a pull request.

---

## 📄 License

This project is developed for educational and learning purposes.

---

## 👩‍💻 Developer

**Shreya Vispute**

- GitHub: https://github.com/ShreyaVispute021
- LinkedIn: www.linkedin.com/in/shreya-vispute-6a9414321
