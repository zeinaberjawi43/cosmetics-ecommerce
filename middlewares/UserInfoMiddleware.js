// userinfo.js

// Middleware function to validate user input
const validateUserInput = (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    next(); // Move to the next middleware function
  };
  
  // Middleware function to check user authentication
  const authenticateUser = (req, res, next) => {
    // Check if user is authenticated (e.g., check session or token)
    if (!req.isAuthenticated()) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    next(); // Move to the next middleware function
  };
  
  // Middleware function to log user requests
  const logUserRequest = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Move to the next middleware function
  };
  
  module.exports = { validateUserInput, authenticateUser, logUserRequest };
  