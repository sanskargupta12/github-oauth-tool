# GitHub OAuth Tool

## Overview
GitHub OAuth Tool is a web application that allows users to authenticate via GitHub OAuth, view their repositories, and interact with them. The application consists of a **React.js frontend** and a **Node.js backend** using **Express.js and Passport.js** for authentication.

---

## Setup and Usage Instructions

### 1. Clone the Repository  
```bash
git clone https://github.com/yourusername/github-oauth-tool.git
cd github-oauth-tool
```
### Backend Setup  
### 2. Navigate to the backend folder  
```bash
cd backend
npm install
```
# Environment Setup

## 3. Create a .env File

```plaintext
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
FRONTEND_URL=http://localhost:3000
SESSION_SECRET=your_secret_key
```
### 4. Starting the Backend Server

```bash
node index.js
```
### 5. Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

# Usage
1. Open [http://localhost:3000](http://localhost:3000) in your browser.
2. Click **Login with GitHub**.
3. Authenticate via GitHub.
4. View repositories in the sidebar.
5. Select a repository to view its details.
6. Logout using the logout button.

# Tech Choices & Architecture Decisions

## Frontend
- **React.js** for UI
- State Management using `useState` and `useEffect`
- Fetch API for API requests

## Backend
- **Node.js** & **Express.js** for REST API
- **Passport.js** for GitHub OAuth
- Session-based authentication for persistent login
- CORS enabled to allow frontend-backend communication

# Challenges Faced & Solutions

## OAuth Authentication Handling
- **Issue:** Authentication state was lost after page refresh.
- **Solution:** Used session-based authentication and `credentials: 'include'` in fetch requests.

## Logout Not Working Properly
- **Issue:** `req.logout()` required a callback.
- **Solution:** Implemented the correct logout method in `githubRoutes.js`.

## Repository Fetching & Sidebar Update
- **Issue:** Sidebar was not updating after login.
- **Solution:** Used `useEffect` to fetch repositories once the user is authenticated.

# Future Enhancements
- Add Pagination for repositories
- Improve UI/UX with better design
- Enhance Authentication Security
- Integrate Pull Requests and Issues
