exports.loginUser = (req, res) => {
    const { email, password } = req.body;
  

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }
  

    const user = getUserByEmail(email); 
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  

    const isPasswordValid = checkPassword(password, user.password); 
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  
  
    res.status(200).json({ success: true, message: 'User logged in successfully' });
  };
  