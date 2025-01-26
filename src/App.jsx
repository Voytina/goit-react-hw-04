import getPhoto from './services/services';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';

import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    async function getAPI() {
      try {
        setIsError(false);
        setIsLoader(true);
        if (query === '') return;
        const { data } = await getPhoto(page, query);
        setPhotos(prev => [...prev, ...data.results]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    }
    getAPI();
  }, [page, query]);

  function handleLoadMore() {
    setPage(prev => prev + 1);
  }

  function searchInput(value) {
    if (value === query) return;
    setQuery(value);
    setPhotos([]);
    setPage(1);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <SearchBar searchInput={searchInput} />
      <ImageGallery
        photos={photos}
        openModal={openModal}
        setSelectedImage={setSelectedImage}
      />
      {photos.length > 0 && <LoadMoreBtn pagePlus={handleLoadMore} />}
      {isLoader && <Loader />}
      <ErrorMessage isError={isError} />
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
}