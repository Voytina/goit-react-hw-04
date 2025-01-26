import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

export default function ImageGallery({ photos }) {
  

  return (
    <ul className={s.gallery}>
      {photos.map(value => {
        return (
          <li key={value.id} className={s.galleryItem}>
            <ImageCard item={value} />
          </li>
        );
      })}
    </ul>
  );
}
