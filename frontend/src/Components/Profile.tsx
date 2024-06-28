import { useContext } from 'react';
import { UserContext } from './UserContext';
import './Profile.css';

function Profile() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('Profile must be used within a UserProvider');
    }

    const { user } = context;

    if (!user) {
        return <div>Please log in to view your profile.</div>;
    }

    return (
        <div className="profile">
            <h1>Hello</h1>
            <h1>Welcome, {user.firstName} {user.lastName}!</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Your token: {user.token}</p>
        </div>
    );
}

export default Profile;
