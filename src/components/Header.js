import React from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div>
            <div className='bg-green-300 p-5'>
                <h1 className='text-3xl font-bold ml-12' onClick={handleNavigate}><span className='bg-cyan-400 p-3 rounded-lg'>NEWS</span> <span>Today</span></h1>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Header;