import React from 'react';

const EachCatagori = ({ subCategory, setModalDetails }) => {
    console.log(subCategory);
    const { Product_Name, img, name, Location, Original_Price, Resell_Price, Years_of_Use, email } = subCategory;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={img} alt="Shoes" /></figure>

            <div className="card-body">
                <h2 className="card-title text center font-bold text-info text-center"><h1>{Product_Name}</h1></h2>
                <p className='text-blue-600'>Seller Name: <span className='text-black'>{name}</span></p>
                <p className='text-blue-600'>Product Name:<span className='text-black'>{Product_Name}</span> </p>
                <p className='text-blue-600'>Location:<span className='text-black'>{Location}</span> </p>
                <p className='text-blue-600'>Original Price: <span className='text-black'>{Original_Price}</span> </p>
                <p className='text-blue-600'>Resell Price:<span className='text-black'>{Resell_Price}</span> </p>
                <p className='text-blue-600'>Years of Use:<span className='text-black'>{Years_of_Use}</span> </p>
                <p className='text-blue-600'>Seller Email:<span className='text-black'>{email}</span> </p>

                <div className="card-actions">
                    <label onClick={() => setModalDetails(subCategory)} htmlFor="Booking-modal" className="btn w-full btn-info">Buy Now</label>
                </div>
            </div>
        </div>
    );
};


export default EachCatagori;