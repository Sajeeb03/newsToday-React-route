import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from './Categories';

const Home = () => {
    const categories = useLoaderData();
    const newsCategories = categories.data.news_category;
    // console.log(newsCategories);
    return (
        <div className='bg-green-300 mt-5 flex justify-evenly p-4'>
            {
                newsCategories.map(category => <Categories
                    key={category.category_id}
                    category={category}
                ></Categories>)
            }
        </div>
    );
};

export default Home; <h1>Hello from home</h1>