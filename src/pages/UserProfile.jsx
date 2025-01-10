import { useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const UserProfile = () => {
    const {user} = useAuth();
    const location = useLocation();
    return (
        <div className='mt-32'>
            <h1 className='text-center font-black text-5xl'>{user.displayName}</h1>
        </div>
    );
};

export default UserProfile;
