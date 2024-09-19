import React from 'react';
import {useAuth} from "../context/AuthContext";

const ProfileLayout = () => {
    const {currentUser} = useAuth();
    console.log(currentUser)
    return (
        <div>
            <p>
            </p>
        </div>
    );
};

export default ProfileLayout;