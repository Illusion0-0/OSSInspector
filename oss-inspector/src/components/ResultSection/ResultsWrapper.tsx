import React from 'react';
import { useSelector } from 'react-redux';
import { getResult, getRepoScore } from '../../selectors';

import ProgressBar from './ProgressBar';
import LabResults from './LabResults';
import Opportunuties from './Opportunities';
import Diagnostics from './Diagnostics';
import Vulnerabilities from './Vulnerabilities';


import { RatingContext } from '../../contexts/RatingContext';
import { useContext } from 'react';

const ResultsWrapper: React.FC = () => {
  const { isRepoSafe, setIsRepoSafe, overAllScore, setOverAllScore } = useContext(RatingContext);
  const result = useSelector(getResult);
  const repoScore = useSelector(getRepoScore);
  const convertToInt = (number: number) => parseInt(number.toFixed(0), 10);

  const getOverall = (): number => {
    if (result) {
      // console.log("FUCK");
      // console.log(result);
      // console.log(result);
      // Sum of all scores
      const SCORE_SUM = result
        .filter((r) => !r.Partial)
        .map((e) => e.Score)
        .reduce((a: number, b: number) => a + b);

      // Increase overall score by 1.08 to improve accuracy
      const CALC_SCORE = convertToInt((SCORE_SUM / 6) * 1.08);
      return CALC_SCORE && CALC_SCORE > 100 ? 100 : CALC_SCORE;
    }
    return 0;
  };
  setOverAllScore(getOverall());
  if (repoScore > 60 && overAllScore >= 50) {
    setIsRepoSafe(true);
  } else {
    setIsRepoSafe(false);

  }
  console.log(overAllScore, repoScore, isRepoSafe);

  return (
    <div className="lab-results">
      {
        isRepoSafe ? (
          <div className="safe">
            <h2>Report</h2>
            <p>
              Your repository is safe and you can continue to use it 👍
            </p>
            <hr />
          </div>
        ) : (
          <div className="unsafe">
            <h2>Report</h2>
            <p>
              Your repository is not safe and you should not use it 👎
            </p>
            <hr />
          </div>
        )
      }
      <ProgressBar percentage={getOverall()} title="Profile Score" />
      {
        (repoScore > 60) ? (
          <div className="safe">
            <h4>Repository Status</h4>
            <p>
              The repository is safe to use.
            </p>
            <hr />
          </div>
        ) : (
          <div className="unsafe">
            <h4>Repository Status</h4>
            <p>
              The repository is not safe to use.
            </p>
            <hr />
          </div>
        )


      }
      <div className="wrapper">
        <LabResults />
        <Opportunuties />
        <Diagnostics />
        <Vulnerabilities />
      </div>
    </div>
  );
};

export default ResultsWrapper;
