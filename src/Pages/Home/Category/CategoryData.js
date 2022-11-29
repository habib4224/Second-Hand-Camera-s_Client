import React from 'react';
import { Link } from 'react-router-dom';

const CategoryData = (single) => {

    const { Brand_name, img, Category_id, } = single.single;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl ">
            <div className='h-3/4'><figure><img src={img} alt="Shoes" /></figure>
            </div>

            <div className="card-body h-3/4">
                <h2 className="card-title">{Brand_name}</h2>
                <p></p>
                <div className="w-full card-actions justify-center">
                    <Link to={`/allProducts/${Category_id}`}><button className=" w-full btn btn-primary">See all {Brand_name} Camera</button></Link>

                </div>
            </div>
        </div>
    );
};


export default CategoryData;