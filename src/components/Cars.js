import React from 'react';

const Car = ({name, color, year}) => {
  const colorInfo = color ? (<p>Couleur: {color}</p>) : <p>Couleur: Neant</p>;

  if(name) {
    return (
      <div style= { {backgroundColor: 'pink',
                   width:    '400px',
                   padding:  '10px',
                   margin:   '5px auto' }}>
                  <p>Marque: { name } </p>
                  <p>Age: {year} </p>
                  { colorInfo }
      </div>
    )
  } else {
    return null;
      }

}

export default Car;
