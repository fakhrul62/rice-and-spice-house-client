import React, { useContext } from 'react';
import { AuthContext } from '../AuthFiles/AuthProvider';
import { useLocation } from 'react-router-dom';

const UserProfile = () => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    return (
        <div className='mt-32'>
            <h1 className='text-center font-black text-5xl'>{user.displayName}</h1>
        </div>
    );
};

export default UserProfile;
