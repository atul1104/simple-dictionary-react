import React from 'react';

const Synonym = ({ mean }) => {
  return (
    <>
      <div className="columns-2 md:columns-3">
        {mean.map((val) =>
          val.meanings.map((means) =>
            means.synonyms?.map((syn) => <li key={syn}>{syn}</li>)
          )
        )}
      </div>
    </>
  );
};

export default Synonym;
