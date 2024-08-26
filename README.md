# Book Exchange Platform

## Overview
The **Book Exchange Platform** is a web application that allows users to create an account, list books they want to exchange, and find matches with other users who have books they are interested in. This platform enables users to browse books listed by others, initiate book exchanges, and manage their book listings.

## Features
- **User Authentication**: Users can register, log in, and log out securely.
- **Book Listing**: Users can list books they own and want to exchange, including details like title, author, and genre.
- **Book Discovery**: Users can browse books listed by others and filter them by genre, author, etc.
- **Book Matching**: A basic algorithm suggests potential matches for users based on their book preferences.
- **Exchange Requests**: Users can send and receive book exchange requests.

## Tech Stack
- **Frontend**: ReactJS, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Vercel (Frontend), Render (Backend)
- **Books Image Storage**: Cloudinary

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas or a local MongoDB instance
- A Cloudinary account for image storage

### Steps to Setup Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sakhi29/book-exchange.git
   cd book-exchange
2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
3. **Install Frontend Dependencies:**
   ```bash
   cd ..
   cd frontend
   npm install
4. **Environment Variables:**
   **For backend:**
     ```bash
       MONGO_URI=
       PORT=
       JWT_SECRET=
       CLOUDINARY_CLOUD_NAME=
       CLOUDINARY_API_KEY=
       CLOUDINARY_API_SECRET=
  **For frontend:**
      ```VITE_API_URL=```
      
5. **Run the Backend & Frontend:**
  ```bash
     cd backend
     npm start

     cd frontend
     npm run dev



   
  
     
