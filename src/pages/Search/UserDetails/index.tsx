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
        <>
            <div className={`search-content-user ${user.login !== '' ? 'active' : ''}`}>

                <img src={user.avatar_url} alt="" className="search-content-image"/>
                <div className="search-content-actions">
                    <Button text="Ver Perfil" handleOnClick={handleOnClick}/>
                </div>
            </div>
            <div className="search-content-infos">
                <div className="search-content-infos-bar">
                    <div className="info repo-public br-5 ">
                        Repositorios públicos: {user.public_repos}
                    </div>
                    <div className="info followers br-5 ">
                        Seguidores: {user.followers}
                    </div>
                    <div className="info following br-5 ">
                        Seguindo: {user.following}
                    </div>
                </div>
                <div className="search-content-infos-fields br-5">
                    <h3 className="title-infos">Informações</h3>
                    <div className="info principal br-4">
                        <strong>Empresa: </strong> {user.company} 
                    </div>
                    <div className="info principal br-4">
                        <strong>Website/Blog: </strong> {user.blog} 
                    </div>
                    <div className="info principal br-4">
                        <strong>Localidade: </strong> {user.location} 
                    </div>
                    <div className="info principal br-4">
                        <strong>Membro desde: </strong> {user.created_at} 
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default UserDetails;