import React from 'react'
import { useParams } from 'react-router';
import { portfolio } from '../../Data';

const Painting = () => {
  const { paintingId } = useParams();
  const identifier = Number(paintingId);
  const painting = portfolio.find((item) => item.id === identifier);

  return (
    <div>
      <h2>{painting?.title}</h2>
      <p>{painting?.description}</p>
    </div>
  )
}

export default Painting