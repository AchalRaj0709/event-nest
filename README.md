# EventNest 🎫

Welcome to **EventNest** — a modern, dynamic platform designed to make discovering, managing, and booking local events seamless. Whether you're hunting for a late-night music festival, a weekend tech conference, or just looking to manage your own local gatherings, EventNest provides a streamlined and beautiful experience.

## ✨ Features

*   **Discover & Search:** A fast, responsive search interface to find premium events happening around you.
*   **Real-time Availability:** Visually track ticket availability and secure your spot before seats run out.
*   **Role-Based Access:** 
    *   *Admins* get a dedicated dashboard to create and manage events.
    *   *Users* get a clean dashboard to track their bookings and ticket history.
*   **Secure Authentication:** Powered by robust JWT authentication and securely hashed passwords.
*   **Modern Aesthetics:** Built using the *Kinetic Event System* design principles. A clean, high-contrast, and dynamic UI powered by Tailwind CSS.

## 🛠️ Tech Stack

This project is built using the **MERN** stack, separated into a client and server architecture.

**Frontend (Client):**
*   [React](https://reactjs.org/) (bootstrapped with [Vite](https://vitejs.dev/) for lightning-fast builds)
*   [Tailwind CSS](https://tailwindcss.com/) (v4) for styling and responsive layouts
*   Axios for API requests
*   React Router for navigation

**Backend (Server):**
*   [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
*   [MongoDB](https://www.mongodb.com/) & Mongoose for data modeling
*   JSON Web Tokens (JWT) for secure, stateless authentication
*   Bcrypt.js for password hashing

---

## 🚀 Getting Started Locally

Want to run EventNest on your own machine? Follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/AchalRaj0709/event-nest.git
cd event-nest
```

### 2. Setup the Backend
Open a terminal and navigate to the `server` directory:
```bash
cd server
npm install
```

Create a `.env` file in the `server` folder with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
```

*(Optional)* Seed the database with some initial dummy data:
```bash
node seed.js
```

Start the backend server:
```bash
npm run dev
```

### 3. Setup the Frontend
Open a new terminal window and navigate to the `client` directory:
```bash
cd client
npm install
```

Start the Vite development server:
```bash
npm run dev
```
The frontend should now be running on `http://localhost:5173`. 

---

## 🌍 Deployment

EventNest is deployment-ready.
*   **Backend:** Can be easily deployed to services like Render or Railway. Make sure to add your environment variables!
*   **Frontend:** The `VITE_API_URL` environment variable is used to connect the React app to your live backend. You can drop the `client` folder directly into Vercel or Netlify.

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! Feel free to check the issues page if you want to contribute.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
