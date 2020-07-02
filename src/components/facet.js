import React, { useState, useEffect } from 'react';

function Facet({ actions = {} }) {
  return (
    <div className="container facet-container">
      <h3>Facet</h3>
      <Filter />
      <Sort handleSort={actions.sortCountriesByPop} />
    </div>
  );
}

function Filter() {
  return <div>Filter</div>;
}

function Sort({ handleSort }) {
  const [state, setState] = useState('0');

  //   useEffect(() => {
  //     handleSort(state);
  //   }, [state]);
  const handleSortChange = e => {
    setState(e.target.value);
    handleSort(e.target.value);
  };

  return (
    <select value={state} onChange={e => handleSortChange(e)}>
      <option value="0" disabled>
        ---
      </option>
      <option value="1">ASC</option>
      <option value="2">DESC</option>
    </select>
  );
}

export default Facet;
