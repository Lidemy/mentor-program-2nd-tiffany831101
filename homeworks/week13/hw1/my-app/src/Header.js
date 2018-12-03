import React from "react";
import { Link, withRouter } from "react-router-dom";
class Header extends React.Component {
    render() {
        const { location } = this.props;
        console.log(location);
        const { pathname } = location;
        return (
            <nav className="navbar navbar-expand-lg navbar-light py-0">

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={"nav-item " + (pathname === '/' && 'active')}>
                            <Link className="nav-link" name="home" to="/">HOME</Link>
                        </li>
                        <li className={"nav-item " + (pathname === '/about' && 'active')}>
                            <Link className="nav-link" name="about" to="/about">ABOUT</Link>
                        </li>
                        <li className={"nav-item " + (pathname === '/posts' && 'active')}>
                            <Link className="nav-link" name="posts" to="/posts">POST</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Header);