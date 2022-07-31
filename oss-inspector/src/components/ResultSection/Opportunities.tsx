import React from 'react';
import { useSelector } from 'react-redux';
import { getStates } from '../../selectors';
import RateIcon from './RateIcon';

const Opportunuties: React.FC = () => {
  const { rating, starred, user } = useSelector(getStates);

  const toggleExpand = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.children[1].classList.toggle('show');
    }
  };

  const opportunityList = () => {
    if (rating) {
      const ratings = rating.filter((r) => r.Score < 90 && !r.Partial);

      return ratings.map((r, index) => (
        <li key={index}>
          <div role="button" className="expand" tabIndex={index} onClick={toggleExpand}>
            <RateIcon rate={r.Score} /> {r.Name}
            <div
              className="data"
              dangerouslySetInnerHTML={{
                __html: r.Message + (r.Suggestions ? `\n\nMissing Resources:\n• ${r.Suggestions.join('\n• ')}` : ''),
              }}
            />
          </div>
        </li>
      ));
    }
    return [];
  };

  if (opportunityList().length > 0) {
    return (
      <div className="audits">
        <h4>Opportunities</h4>
        <div className="audit_result">
          <ul>{opportunityList()}</ul>
        </div>
      </div>
    );
  }
  return null;
};

export default Opportunuties;
