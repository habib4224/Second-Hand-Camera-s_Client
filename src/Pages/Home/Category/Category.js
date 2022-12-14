import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import CategoryData from './CategoryData';

const Category = () => {


    const { data: datas = [] } = useQuery({
        queryKey: ['allCategory'],
        queryFn: () => fetch('https://reselling-your-camera-server.vercel.app/allCategory')
            .then(res => res.json())
    });

    const { data: dataAll = [] } = useQuery({
        queryKey: ['allProducts'],
        queryFn: () => fetch('https://reselling-your-camera-server.vercel.app/allProducts')
            .then(res => res.json())
    });

    return (
        <div>
            <div className='m-6 font-bold text-center'>
                <h1 className='text-6xl'> ALl Available Camera Categories: {datas.length}</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    datas.map(single =>
                        <CategoryData
                            key={single.Category_id}
                            single={single}
                        ></CategoryData>)
                }

            </div>
            <div className='my-8'> <Link to='/allavailableproducts'><button className='w-full btn btn-primary'>See All Camera</button></Link></div>
        </div>
    );
};
export default Category;