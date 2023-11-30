import React, { useEffect, useState } from 'react';
import {
  useGetAllCryptosQuery,
  useGetCryptosMutation,
} from '../../services/cryptoApi';
import Items from '../../components/Items';
import { CoinType } from '../../app/common/types';
import { Link } from 'react-router-dom';

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<string>('10');
  const [name, setName] = useState<string>('');
  const [getCtyptos, { data: cryptos }] = useGetCryptosMutation();
  const { data } = useGetAllCryptosQuery();
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

  const searchCoins = data?.filter((coin) =>
    coin.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  return (
    <div>
      <div className='container text-center w-25'>
        <div className='input-group mb-3'>
          <input
            type='text'
            id='search_crypto'
            className='form-control text-center'
            placeholder='Search for your favourite crypto'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
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
      {!name
        ? cryptos?.map((coin: CoinType) => (
            <Link to={`/coin/${coin.id}`} key={coin.id}>
              <Items coin={coin} />
            </Link>
          ))
        : searchCoins?.map((coin: CoinType) => (
            <Link to={`/coin/${coin.id}`} key={coin.id}>
              <Items coin={coin} />
            </Link>
          ))}
      <div className='container' style={{ opacity: `${name ? 0 : 1}` }}>
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
      <div className='container text-center w-25'>
        <div className=''>
          <p>Per Page: </p>
          <select
            className='form-select text-center'
            value={perPage}
            onChange={handlePage}
          >
            {pages.map((page, index) => (
              <option className='' key={index}>
                {page}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p />
    </div>
  );
};

export default Home;
