import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import AdminHook from '../../Context/Hooks/AdminHook';
import BuyerHook from '../../Context/Hooks/BuyerHook';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = AdminHook(user?.email);
    const [isBuyer] = BuyerHook(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isAdmin ? <li><Link to='/dashboard/allusers'>All Users </Link></li> :
                                <>
                                    {isBuyer ? <li><Link to='/dashboard/myorders'>Your Orders</Link></li>
                                        : <>
                                            <li><Link to={`/dashboard/allProducts/${user?.email}`}>My Products</Link></li>
                                            <li><Link to='/dashboard/addproducts'>Add Product</Link></li>
                                        </>}
                                </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;