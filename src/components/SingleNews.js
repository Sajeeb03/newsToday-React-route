import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleNews = ({ singleNews }) => {
    // console.log(singleNews);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/news/${singleNews._id}`)
    }
    const { author, details, image_url, thumbnail_url, total_view, title } = singleNews;
    return (
        <div className='flex border-2 border-red-200 gap-3 m-3 shadow-lg rounded-lg p-3 relative'>
            <img src={thumbnail_url} alt="" />
            <div>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p><span>{author.name ? author.name : 'no name'}</span> <span>Views: {total_view ? total_view : 'no-data-found'}</span></p>
                <p>{details.length > 300 ? details.slice(0, 300) + "..." : details}</p>
                <button onClick={handleNavigate} className='bg-blue-300 p-3 rounded absolute bottom-1 right-1'>Read More</button>
            </div>
        </div>
    );
};

export default SingleNews;