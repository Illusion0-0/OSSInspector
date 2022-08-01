import React from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../slices/user';


import { RatingContext } from '../../contexts/RatingContext';
import { useContext } from 'react';

const Input: React.FC = () => {
  const { setRepoName, repoUrl, setRepoUrl } = useContext(RatingContext);
  const [gUrl, setUrl] = React.useState('');
  const dispatch = useDispatch();
  // const [username, setUsername] = React.useState('');
  // const [repoName, setRepoName] = React.useState('');
  //create function to extract username and repoName from input github url
  const extractUsername = (gUrl: string) => {
    //check if it includes https:// or http:// and remove it
    const urlWithoutHttp = gUrl.replace(/^https?:\/\//, '');
    //check if it includes github.com, if not return error
    if (!urlWithoutHttp.includes('github.com')) {
      return 'Please enter a valid github repo url';
    }
    const username = urlWithoutHttp.split('/')[1];
    return username;


  }
  const extractRepoName = (gUrl: string) => {
    //check if it includes https:// or http:// and remove it
    const urlWithoutHttp = gUrl.replace(/^https?:\/\//, '');
    //check if it includes /repos/, if not return error
    if (!(urlWithoutHttp.split('/')[2])) {
      return 'Please enter a valid github repo url';
    }
    setRepoUrl(gUrl);
    const repoName = urlWithoutHttp.split('/')[2];
    return repoName;
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = extractUsername(gUrl);
    const repoName = extractRepoName(gUrl);
    // console.log(username, repoName);
    setRepoName(repoName);
    dispatch(getUser([username, repoName]));
    // setUrl('');
    // dispatch(getUser(repoName));
  }
  // const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (username !== '') {
  //     dispatch(getUser(username));
  //     setUsername('');
  //   }
  // };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Let's find out...  (repo link goes here)"
        // value={username}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">ANALYZE</button>
    </form>
  );
};

export default Input;
