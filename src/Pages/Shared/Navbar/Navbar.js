import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import AdminHook from '../../../Context/Hooks/AdminHook';
import BuyerHook from '../../../Context/Hooks/BuyerHook';
import SellerHook from '../../../Context/Hooks/SellerHook';
import im1 from '../../../Sources/favicon.svg'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = AdminHook(user?.email);
    const [isSeller] = SellerHook(user?.email);
    const [isBuyer] = BuyerHook(user?.email);

    console.log("admin", isAdmin);
    console.log("seller", isSeller);
    console.log("Buyer", isBuyer);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navberItem = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        {user?.uid ?
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={handleLogOut} >Log Out</button></li>
            </>
            : <li><Link to='/login'>Login</Link></li>}

    </React.Fragment>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navberItem}
                    </ul>
                </div>

                <Link to='/' className="btn hidden lg:flex btn-ghost normal-case text-xl"> <span><img src={im1} alt="" className=' mask mask-squircle w-5 h-5' /></span> Second-Hand Camera's</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navberItem}
                </ul>
            </div>
            <label htmlFor='dashboard-drawer' tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;