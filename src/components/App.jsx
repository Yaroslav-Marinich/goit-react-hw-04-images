import React, { useState, useEffect } from 'react';
import * as API from '../servise/pixabay-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Buttons/Button';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';
import { SearchBar } from './SearchBar/SearchBar';
import '../styles.css';

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (search.trim() !== '' || page !== 1) {
      fetchGallery(search, page);
    }
  }, [search, page]);

  const fetchGallery = async (name, page) => {
    try {
      setIsLoading(true);

      const images = await API.fetchGallery(name, page);

      setGallery(prevState => [...prevState, ...images]);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const searchImages = ({ name }) => {
    if (name.trim()) {
      setGallery([]);
      setSearch(name);
      setPage(1);
      setIsLoading(false);
      setError(false);
    }
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className="App">
      <Header>
        <SearchBar onSubmit={searchImages} />
      </Header>
      {error && <p>'Oops, something went wrong! Please, try again'</p>}
      {isLoading ? <Loader /> : <ImageGallery items={gallery} />}

      {Math.ceil(gallery?.length / 12) >= page && !isLoading && (
        <Button onClick={loadMore} />
      )}
    </div>
  );
};

export default App;
