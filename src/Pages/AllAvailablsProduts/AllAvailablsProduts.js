import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ModalBookings from '../ModalBookings/ModalBookings';
import SingleFromAll from './SingleFromAll';

const AllAvailablsProduts = () => {


    const { data: datas = [] } = useQuery({
        queryKey: ['allProducts'],
        queryFn: () => fetch('https://reselling-your-camera-server.vercel.app/allProducts')
            .then(res => res.json())
    });
    const [modaldetails, setModalDetails] = useState(null);

    return (
        <div >
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    datas.map(each =>
                        <SingleFromAll
                            key={each._id}
                            each={each}
                            setModalDetails={setModalDetails}
                        ></SingleFromAll>)
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


export default AllAvailablsProduts;