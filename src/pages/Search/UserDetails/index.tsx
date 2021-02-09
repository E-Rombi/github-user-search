import React from 'react';
import Button from '../../../core/components/Button';
import { UserResponse } from '../../../core/types/User';
import './styles.scss';

type Props = {
    user: UserResponse;
}

const UserDetails = ({user}: Props) => {
    const handleOnClick = () => {
        window.open(user.html_url);
    }

    return (
        <div>
            <div className={`search-content-user ${user.login !== '' ? 'active' : ''}`}>
                <img src={user.avatar_url} alt="" className="search-content-image"/>
            </div>
            <div className="search-content-actions">
                <Button text="Ver Perfil" handleOnClick={handleOnClick}/>
            </div>
        </div>
    );
}

export default UserDetails;