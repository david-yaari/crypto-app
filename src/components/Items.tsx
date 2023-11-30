import React from 'react';
import { CoinType } from '../app/common/types';

export interface Props {
  coin?: CoinType;
}

const Items: React.FC<Props> = ({ coin }) => {
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='col-lg'>
          <p>{coin?.market_cap_rank}</p>
        </div>
        <div className='col-lg'>
          <img src={coin?.image} alt={coin?.name} width='30' height='30' />
        </div>
        <div className='col-lg'>
          <p>{coin?.name}</p>
        </div>
        <div className='col-lg'>
          <p>{coin?.symbol.toUpperCase()}</p>
        </div>
        <div className='col-lg'>
          <p className='text-lg-end text-center'>
            ${coin?.current_price.toLocaleString()}
          </p>
        </div>
        <div className='col-lg'>
          <p className='text-lg-end text-center'>
            ${coin?.price_change_percentage_24h.toLocaleString()}
          </p>
        </div>
        <div className='col-lg'>
          <p className='text-lg-end text-center'>
            ${coin?.total_volume.toLocaleString()}
          </p>
        </div>
        <div className='col-lg'>
          <p className='text-ld-end text-center'>
            ${coin?.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
      <hr></hr>
    </div>

    // <>
    //   <div className='container-sm'>100% wide until small breakpoint</div>
    //   <div className='container-md'>100% wide until medium breakpoint</div>
    //   <div className='container-lg'>100% wide until large breakpoint</div>
    //   <div className='container-xl'>100% wide until extra large breakpoint</div>
    //   <div className='container-xxl'>
    //     100% wide until extra extra large breakpoint
    //   </div>
    // </>
  );
};

export default Items;
