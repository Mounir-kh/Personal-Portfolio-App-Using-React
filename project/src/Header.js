import React from 'react';
import './Header.css';

function Header(){
    return(
        <div className='Header'>
            <div className="Header__left">
                <img src="https://th.bing.com/th/id/R.ab3807ffd127bd42b8fd98231272bb0f?rik=vj3kTATgD8UcDQ&riu=http%3a%2f%2fwww.digimoz.com%2fimages%2ftechnologies-imgs%2freact-logo.jpg&ehk=p058plcbh3mxGcJNCnJlOqdTWGUeSwTD%2fsSW8eKZTN0%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <h2>React Developer</h2>
            </div>
            <div className="Header__center">
                <ul>
                    <li> <a href="#yepa">Potfolio</a></li>
                    <li><a href="https://www.linkedin.com/in/mounir-khaouadi-753918102/" target='_blank'>LinkedIn Account</a></li>
                    <li><a href="https://github.com/Mounir-kh?tab=repositories" target='_blank'>Github Account</a></li>
                </ul>
            </div>
            <div className="Header__right">
                <button>Sign Up</button>
                <button>Sign In</button>
            </div>

        </div>
    )
}
export default Header;
