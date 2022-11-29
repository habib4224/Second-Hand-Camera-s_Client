import { success } from 'daisyui/src/colors';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import ModalConfirmation from '../../Shared/ModalConfirmation/ModalConfirmation';

const MyAllProducts = () => {


    const data = useLoaderData();
    console.log(data)

    const [deleteProduct, setDeleteProduct] = useState(null);
    const closeModal = () => {
        setDeleteProduct(null);
    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/allProducts/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Your Product Deleted!');

            })
    }
    console.log(data);
    return (
        <div>
            <h3 className="text-3xl mb-5">My All Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((myorder, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{myorder.name}</td>
                                <td>{myorder.Product_Name}</td>
                                <td>{myorder.email}</td>

                                <td>{myorder.Resell_Price}</td>
                                <td><label onClick={() => setDeleteProduct(myorder._id)} htmlFor="confirmation-modal" className="btn btn-xs btn-primary">Delete</label></td>
                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <ModalConfirmation
                    title={`Are you sure you want to delete?`}
                    message={`If you delete This Product. It cannot be undone.`}
                    successAction={handleDelete}
                    modalData={deleteProduct}
                    closeModal={closeModal}
                ></ModalConfirmation>
            }
        </div>
    );
};


export default MyAllProducts;