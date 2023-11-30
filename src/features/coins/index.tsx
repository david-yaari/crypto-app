import React, { ChangeEvent, useEffect, useState } from 'react';
import { useGetCryptosMutation } from '../../services/cryptoApi';
import Items from '../../components/Items';
import { CoinType } from '../../app/common/types';
import { Link } from 'react-router-dom';

const Home = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState<string>('10');
  const [getCtyptos, { data: cryptos }] = useGetCryptosMutation();
  const pages = ['5', '10', '15', '20', '25', '30'];

  //console.log('data', data);

  useEffect(() => {
    const fetchCoinData = async () => {
      await getCtyptos({ page, perPage });
    };

    fetchCoinData();
  }, [getCtyptos, page, perPage]);

  const handlePage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(e.target.value);
  };

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
      <div className='container'>
        <div className='row text-center'>
          <div className='col-lg text-lg-end'>
            <button
              onClick={() => setPage((page) => page - 1)}
              disabled={page === 1 ? true : false}
              type='button'
              className='btn btn-primary'
            >
              Prev
            </button>
          </div>
          <div className='col-lg'>
            <p>{page}</p>
          </div>
          <div className='col-lg text-lg-start'>
            <button
              onClick={() => setPage((page) => page + 1)}
              type='button'
              className='btn btn-primary'
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className='container text-center'>
        <div className='dropdown inline-block relative ml-8'>
          <span>Per Page: </span>
          <select value={perPage} onChange={handlePage}>
            {pages.map((page, index) => (
              <option key={index}>{page}</option>
            ))}
          </select>
        </div>
      </div>
      <p />
    </div>
  );
};

export default Home;
