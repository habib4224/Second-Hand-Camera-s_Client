import React from 'react';
import { Link } from 'react-router-dom';

const CategoryData = (single) => {

    const { Brand_name, img, Category_id, } = single.single;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl ">
            {/* <div ><figure className=''><img src={img} alt="Shoes" /></figure>
            </div> */}
            <figure className='h-2/3'><img src={img} alt="Shoes" /></figure>

            <div className="card-body ">
                <h2 className="card-title">{Brand_name}</h2>
                <p></p>
                <div className="card-actions justify-center">
                    <Link to={`/allProducts/${Category_id}`}><button className=" w-full btn btn-primary">See all {Brand_name} Camera</button></Link>
                </div>
            </div>
        </div>
    );
};


export default CategoryData;