import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ category }) => {
    const { category_name, category_id } = category;

    return (
        <div>
            <NavLink className={({ isActive }) => isActive ? "bg-black text-white p-2" : undefined} to={`/${category_id}`}>{category_name}</NavLink>
        </div >
    );
};

export default Categories;