import React from 'react';


const Header = () => {
    return(
        <div>
            <nav>
                <div className="logo">
                    <a href="#"><i className="fa fa-headphones"></i></a>
                </div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Info</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;