import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ModalBookings from '../ModalBookings/ModalBookings';
import EachCatagori from './EachCatagori';

const EachCatagories = () => {
    const data = useLoaderData();
    const [modaldetails, setModalDetails] = useState(null);
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map(subCategory =>
                        <EachCatagori
                            key={subCategory.Category_id}
                            subCategory={subCategory}
                            setModalDetails={setModalDetails}
                        ></EachCatagori>)
                }
            </div>
            {modaldetails &&
                <ModalBookings
                    modaldetails={modaldetails}
                    setModalDetails={setModalDetails}
                ></ModalBookings>}
        </div>
    );
};

export default EachCatagories;