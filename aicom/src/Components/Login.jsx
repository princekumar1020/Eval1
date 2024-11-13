import React, { useState, useRef } from 'react';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [activeClass, setActiveClass] = useState(false); // State to manage "active" class on container
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs for form validation and other DOM manipulations
  const containerLoginRef = useRef(null);
  const signUpFormRef = useRef(null);
  const signInFormRef = useRef(null);
  const menuListRef = useRef(null);

  // Handle form toggling (Sign In/Sign Up)
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setActiveClass(!activeClass);
  };

  // Handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Sign Up form submission
  const handleSignUpSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    const name = signUpFormRef.current.querySelector('input[type="text"]').value.trim();
    const email = signUpFormRef.current.querySelector('input[type="email"]').value.trim();
    const password = signUpFormRef.current.querySelector('input[type="password"]').value.trim();

    // Validation checks
    if (name === "") {
      alert("Please enter your name.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    alert(`Registration Successful!\nName: ${name}\nEmail: ${email}`);
    signUpFormRef.current.reset(); // Reset the form fields
    setActiveClass(false); // Optionally switch to sign-in
  };

  // Sign In form submission
  const handleSignInSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    const email = signInFormRef.current.querySelector('input[type="email"]').value.trim();
    const password = signInFormRef.current.querySelector('input[type="password"]').value.trim();

    // Validation checks
    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (password === "") {
      alert("Please enter your password.");
      return;
    }

    alert(`Sign In Successful!\nEmail: ${email}`);
    signInFormRef.current.reset(); // Reset the form fields
  };

  return (
    <div className="body-container">
      <div className={`container-login ${activeClass ? "active" : ""}`} ref={containerLoginRef}>
        {/* Sign Up Form */}
        {isSignUp ? (
          <div className="form-container sign-up">
            <form ref={signUpFormRef} onSubmit={handleSignUpSubmit}>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button>Sign Up</button>
            </form>
          </div>
        ) : (
          // Sign In Form
          <div className="form-container sign-in">
            <form ref={signInFormRef} onSubmit={handleSignInSubmit}>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email password</span>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <a href="#">Forget Your Password?</a>
              <button>Sign In</button>
            </form>
          </div>
        )}

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login" onClick={toggleForm}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="hidden" id="register" onClick={toggleForm}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Toggle */}
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="menu-list" ref={menuListRef} style={{ maxHeight: menuOpen ? '300px' : '0px' }}>
        {/* Menu List Items */}
      </div>
    </div>
  );
};

export default Login;
