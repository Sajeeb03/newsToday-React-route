import React from 'react';

const SingleNews = ({ singleNews }) => {
    console.log(singleNews);
    const { author, details, image_url, thumbnail_url, total_view, title } = singleNews;
    return (
        <div className='flex border-2 border-red-200 gap-3 m-3 shadow-lg rounded-lg p-3'>
            <img src={thumbnail_url} alt="" />
            <div>
                <h1 className='text-4xl font-bold'>{title}</h1>
            </div>
        </div>
    );
};

export default SingleNews;