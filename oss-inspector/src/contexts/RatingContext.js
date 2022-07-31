import { createContext, useEffect, useState } from 'react';
// import React, { Component } from 'react';

export const RatingContext = createContext();

export const RatingContextProvider = ({ children }) => {
    // const isRepoSafe = false;
    // const overAllScore = 0;
    const [overAllScore, setOverAllScore] = useState(0);
    const [isRepoSafe, setIsRepoSafe] = useState(false);
    const [repoScore, setRepoScore] = useState(0);
    const [repoName, setRepoName] = useState('');
    return <RatingContext.Provider value={{ isRepoSafe, setIsRepoSafe, overAllScore, setOverAllScore, repoScore, repoName, setRepoName }}>{children}</RatingContext.Provider>;
};

// export default RatingContext;