import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import './LoginStyle.css'

const LoginRegistration = () => {
    return (
        <div className="wrapper">
            {/* BG Divider login*/}
            <span className="bg-animate"></span>
            {/* BG Divider Registration */}
            <span className="bg-animate2"></span>

            {/* Login page */}
            <div className="form-box login">
                <h2>Login</h2>
                <form action="#">
                    <div className="input-box">
                        <input type="text" required />
                        <label>Username</label>
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" required />
                        <label>Password</label>
                        <FaLock className="icon" />
                    </div>
                    <button type="submit" className="btn1">Login</button>

                    <div className="logreg-link">
                        <p>Do not have an account? <a href="#" className="register-link">Sign Up</a></p>
                    </div>
                </form>
            </div>
            {/* Right side Login Text */}
            <div className="info-text login">
                <h2>Welcome Back !</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ullam!</p>
            </div>


            {/* Registration page */}
            <div className="form-box register">
                <h2>Sign Up</h2>
                <form action="#">
                    <div className="input-box">
                        <input type="text" required />
                        <label>Username</label>
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="Email" required />
                        <label>Email</label>
                        <MdEmail className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" required />
                        <label>Password</label>
                        <FaLock className="icon" />
                    </div>
                    <button type="submit" className="btn1">Sign Up</button>

                    <div className="logreg-link">
                        <p>Already have an account? <a href="#" className="login-link">Login</a></p>
                    </div>
                </form>
            </div>
            {/* Left side Register Text */}
            <div className="info-text register">
                <h2>Welcome Back !</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ullam!</p>
            </div>

        </div>
    );
};

export default LoginRegistration;