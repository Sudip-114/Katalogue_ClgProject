Katalogue - Digital Magazine Social Media Platform
Katalogue is a MERN stack web application designed to connect university students with various departmental societies. It features user roles for society heads, students, and admins with functionalities including posts (text, image, polls, events), Google Maps & Calendar integrations, and admin approvals.

Features
Society Heads: Register, create and manage posts (image, video, text, poll, event).

Students: Browse approved societies, view posts, participate in polls, check event maps and calendars.

Admins: Approve or reject societies before they appear publicly.

Authentication: JWT-based login for society heads and admins; students access without login.

Google Maps Integration: Display event locations.

Google Calendar Integration: View event calendars.

Responsive UI: Simple white-green theme tailored for ease of use.

Technologies Used
Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

Frontend: React, Vite, Axios, @react-google-maps/api

Deployment: Instructions included for common platforms.

Project Structure
text
Katalogue/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── server.js
│ ├── package.json
│ └── ...
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── contexts/
│ │ ├── styles/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── ...
│ ├── package.json
│ └── ...
└── README.md
Setup Instructions
Prerequisites
Node.js (v18+ recommended)

MongoDB Atlas or local MongoDB instance

Google Maps and Google Calendar API keys

Backend Setup
Navigate to backend folder:

bash
cd backend
Install dependencies:

bash
npm install
Create .env file following .env.example with these variables:

text
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
Start backend server (development):

bash
npm run dev
Frontend Setup
Navigate to frontend folder:

bash
cd frontend
Install dependencies:

bash
npm install
Create .env file in frontend root with:

text
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
Start frontend dev server:

bash
npm run dev
Access app at http://localhost:3000 (or as shown by Vite).

Usage
Society heads: Register and login to create posts.

Students: Select "Student" role on login to enter without credentials.

Admins: Login with admin role credentials for approval panel (set up manually).

Use post types to create engaging content including polls and events with map and calendar integration.

Deployment
Build frontend for production:

bash
npm run build
Deploy frontend static files (from dist/) to services like Netlify or Vercel.

Deploy backend to Heroku, Render, or similar.

Configure environment variables on deployment platform.

Update API URLs in frontend src/api/api.js accordingly.

Contributing
Contributions are welcome! Please fork the repo and submit pull requests with improvements or features.

License
MIT License

Contact
For questions or support, contact Sudip Hazra at 114hazrasudip@gmail.com.
