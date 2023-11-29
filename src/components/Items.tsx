import React from 'react';
import { CoinType } from '../app/common/types';

export interface Props {
  coin?: CoinType;
}

const Items: React.FC<Props> = ({ coin }) => {
  return (
    <>
      <div className='container text-center'>
        <div className='row'>
          <div className='col'>
            <p>{coin?.market_cap_rank}</p>
          </div>
          <div className='col'>
            <img src={coin?.image} alt={coin?.name} width='40' height='40' />
          </div>
          <div className='col'>
            <p>{coin?.symbol.toUpperCase()}</p>
          </div>
          <div className='col'>
            <p>${coin?.current_price.toLocaleString()}</p>
          </div>
          <div className='col'>
            <p>${coin?.current_price.toLocaleString()}</p>
          </div>
          <div className='col'>
            <p>${coin?.current_price.toLocaleString()}</p>
          </div>
          <div className='col'>
            <p>${coin?.total_volume.toLocaleString()}</p>
          </div>
          <div className='col'>
            <p>${coin?.market_cap.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
