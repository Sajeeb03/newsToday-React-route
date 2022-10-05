import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNews from './SingleNews';

const News = () => {
    const news = useLoaderData();
    news.data.sort((a, b) => {
        return b.total_view - a.total_view
    })
    return (
        <div>
            <h1 className='bg-blue-300 mt-2 p-3 text-center'>There are {news.data.length} news in this category</h1>
            {
                news.data.map((singleNews, idx) => <SingleNews
                    key={idx}
                    singleNews={singleNews}
                ></SingleNews>)
            }
        </div>
    );
};

export default News;