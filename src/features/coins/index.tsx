import React, { useEffect } from 'react';
import { useGetCryptosMutation } from '../../services/cryptoApi';
import Items from '../../components/Items';
import Coin from '../coin';
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
  }, []);

  return (
    <div>
      <h2>Crypto Coin</h2>
      {cryptos?.map((coin: CoinType) => (
        <Link to={`/coin/${coin.id}`} key={coin.id}>
          <Items coin={coin} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
