import React from 'react';

import TripList from '../components/TripList.jsx';

import './trips-page.styles.scss';

const TripsPage = () => {
  return (
    <div className="homepage">
      <h1>Take Your Pup Out</h1>
      <TripList className="trip-list" />
    </div>
  );
};

export default TripsPage;