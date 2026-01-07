import {useState, useEffect} from 'react'
import { LOGO_URL } from '../utils/constants.js';
import { Link } from 'react-router-dom';

const Header = () => {
    let [btnName, setBtnName] = useState("Login");
    return (
        <>
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL} />
                </div>
                <div className="nav-items">
                    <ul>
                        <li><Link to='/ '>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li>Cart</li>
                        <button className="login"
                        onClick={() =>{
                            setBtnName(btnName==="login"?"Logout":"login")
                        }}>{btnName}</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header