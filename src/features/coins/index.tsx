import React, { useEffect } from 'react';
import { useGetCryptosMutation } from '../../services/cryptoApi';
import Items from '../../components/Items';
//import Coin from '../coin';
import { CoinType } from '../../app/common/types';
import { Link } from 'react-router-dom';

const Home = () => {
  const [getCtyptos, { data: cryptos }] = useGetCryptosMutation();

  //console.log('data', data);

  useEffect(() => {
    const fetchCoinData = async () => {
      await getCtyptos(1);
    };

    fetchCoinData();
  }, [getCtyptos]);

  return (
    <div>
      <div className='container'>
        <div className='row text-center'>
          <hr></hr>
          <div className='col-lg'>
            <p>#</p>
          </div>
          <div className='col-lg'>
            <p>Name</p>
          </div>
          <div className='col-lg'>
            <p></p>
          </div>
          <div className='col-lg'>
            <p></p>
          </div>
          <div className='col-lg'>
            <p className='text-lg-end text-center'>Price</p>
          </div>
          <div className='col-lg'>
            <p>Price % 24h</p>
          </div>
          <div className='col-lg'>
            <p>Total Volume</p>
          </div>
          <div className='col-lg'>
            <p>Market Cap</p>
          </div>
          <hr></hr>
        </div>
      </div>
      {cryptos?.map((coin: CoinType) => (
        <Link to={`/coin/${coin.id}`} key={coin.id}>
          <Items coin={coin} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
