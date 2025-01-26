import getPhoto from './services/services';
import { useState } from 'react';
import { useEffect } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getAPI() {
      if (!query) return;
      try {
        setIsError(false);
        setIsLoader(true);
        const { data } = await getPhoto(page, query);
        setPhotos(prev => [...prev,...data.results]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    }

    getAPI();
  }, [page,query]);

  

  function getQueverySearch(val) {
    if (val === query) return;
    setQuery(val);
    setPhotos([]);
  }

  function handleLoadMore() {
    setPage(prev => prev + 1);
  }

  return (
    <div>
      <ErrorMessage isError={isError} />
      <SearchBar getQueverySearch={getQueverySearch} />
      <ImageGallery photos={photos} />
      {isLoader && <Loader />}
      {!isLoader && photos.length > 0 && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
    </div>
  );
}
