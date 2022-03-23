import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1><Link to="/"
            className="logo text-gradient">Aicareer</Link></h1>
            <Link to="/searchjobs" className="header-search text-gradient">Job Search</Link>
        </header>
    )
}

export default Header;