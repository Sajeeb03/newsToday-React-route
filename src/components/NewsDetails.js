import React from 'react';
import { useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const news = useLoaderData();
    console.log(news.data[0]);
    const { author, image_url, title, details, total_view } = news.data[0];
    return (
        <div className='text-left m-5'>
            <img className='w-full my-5' src={image_url} alt="" />
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p>{author.name ? author.name : 'no-data'}</p> <p> {author.published_date ? author.published_date : "no-data"} <br /> views: {total_view ? total_view : 'no-data'}</p>
            <p className='mt-5'>{details}</p>
        </div>
    );
};

export default NewsDetails;