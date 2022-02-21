
import logo from '../../assets/images/brand-transparent.svg';
import { Link } from 'react-router-dom'
import { Dropdown, Menu } from 'antd';

const Header = ({ active }) => {

    //toogle dislpay nav on mobile
    const displaynav = () => document.querySelector(".navbar").classList.toggle("navdisplay")

    //dropdown menu for login nav
    const menu = (
        <Menu>
            <Menu.Item key="user">
                <Link to={"/userlogin"} className="links">User</Link>
            </Menu.Item>
            <Menu.Item key="admin">
                <Link to={"/adminlogin"} className="links"> Admin </Link>
            </Menu.Item>
        </Menu>
    )

    return (
        <header>
            <picture>
                < img src={logo} alt="BootOrganizer" />
            </picture>
            <nav className='navbar'>
                <Link to={"/"} className={`links ${active === 'home' ? 'active' : ''}`} >Home</Link>
                <Link to={"/about"} className={`links ${active === 'about' ? 'active' : ''}`}>
                    About
                </Link>
                <Link to={"/support"} className={`links ${active === 'support' ? 'active' : ''}`}>
                    Support
                </Link>
                <Dropdown overlay={menu} placement="bottomCenter" className={`links ${active === 'login' ? 'active' : ''}`}>
                    <p className='links'> Login </p>
                </Dropdown>
                <Link to={"/signin"} className={`links ${active === 'sigin' ? 'active' : ''}`}> Sigin </Link>
            </nav>
            <div className='burgerbox' onClick={displaynav}>
                <div />
                <div />
                <div />
                <div />
            </div>
        </header>
    )
}


export default Header