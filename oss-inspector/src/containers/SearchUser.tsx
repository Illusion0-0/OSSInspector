import React from 'react';
import { useSelector } from 'react-redux';
import { getStates } from '../selectors';

import Input from '../components/Layout/Input';

const SearchUser = () => {
  const { user } = useSelector(getStates);

  return (
    <div className="search-user">
      {!user?.login && <h2>Is the repository you are going to use safe?</h2>}
      <Input />
    </div>
  );
};

export default SearchUser;
