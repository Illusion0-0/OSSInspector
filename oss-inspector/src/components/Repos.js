import React, { Component } from 'react';
import axios from 'axios';
import Repo from './Repo';

function Repos ({ user }) {
    const [repos, setRepos] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [isEmpty, setIsEmpty] = React.useState(false);
    const [isError, setIsError] = React.useState(false);


    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                console.log(user.reloadUserInfo.screenName);
                const res = await axios.get(`https://api.github.com/users/${user.reloadUserInfo.screenName}/repos`);
                setRepos(res.data);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        }
        fetchData();
    }, [user.login]);

    React.useEffect(() => {
        if (repos.length === 0) {
            setIsEmpty(true);
        }
    }
        , [repos.length]);

    React.useEffect(() => {
        if (error) {
            setIsError(true);
        }
    }
    , [error]);



    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isEmpty && <p>No repos found</p>}
            {isError && <p>Error</p>}
            {!isLoading && !isEmpty && !isError &&
                <div>
                    {repos.map(repo => (
                        <Repo key={repo.id} repo={repo} />
                    ))}
                </div>
            }
        </div>
    );
}


export default Repos;