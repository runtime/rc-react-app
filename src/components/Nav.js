import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Estimates">Estimates</Link>
                    </li>
                    <li>
                        <Link to="/Appointments">Appointments</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}


export default Layout;