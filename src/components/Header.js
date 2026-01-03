import React ,{useState} from 'react'
import { LOGO_URL } from '../utils/constants.js';

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
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
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