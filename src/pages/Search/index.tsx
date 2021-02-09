import React, { useState } from 'react';
import Button from '../../core/components/Button';
import { UserResponse } from '../../core/types/User';
import { makeRequest } from '../../core/utils/request';
import ImageLoader from './Loaders/ImageLoader';
import InfoLoader from './Loaders/InfoLoader';
import './styles.scss';
import UserDetails from './UserDetails';

const Search = () => {
    const resetUserResponse = () => ({
        login: '',
        avatar_url: '',
        followers: 0,
        following: 0,
        public_repos: 0,
        company: '',
        blog: '',
        location: '',
        created_at: '',
        html_url: ''
    });


    const [user, setUser] = useState('');
    const [userResponse, setUserReponse] = useState<UserResponse>(resetUserResponse);
    const [searching, setSearching] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const handleSearch = () => {
        setSearching(true);
        setHasContent(true);

        makeRequest({
            url: user
        })
            .then(response => {
                setUserReponse(response.data);
                setSearching(false);
            })
            .catch(error => {
                setUserReponse(resetUserResponse);
                setSearching(false);
                setHasContent(false);
                console.log(userResponse);
            });

    }

    return (
        <div className="search-container">
            <div className="search-filter">
                <div className="search-filter-fields">
                    <h1 className="search-filter-title">Encontre um perfil Github</h1>
                    <input type="text" className="search-filter-input" onChange={handleOnChange} />
                </div>
                <div className="search-filter-actions">
                    <Button text="Encontrar" handleOnClick={handleSearch} />
                </div>
            </div>
            <div className={`search-content ${hasContent ? 'active' : ''}`}>
                {searching  ? 
                        <>
                            <div className="search-content-image">
                                <ImageLoader />
                            </div>
                            <div className="search-content-infos">
                                <InfoLoader />
                            </div>
                        </> 
                            :

                            (hasContent && <UserDetails user={userResponse} />)
                        }
            </div>

        </div>
    );
}

export default Search;