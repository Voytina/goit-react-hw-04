import s from './ImageCard.module.css';

export default function ImageCard({ item, openModal, setSelectedImage }) {

  function handleClick() {
    setSelectedImage(item.urls.regular);
    openModal();
  }

  console.log(item);
  

  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        className={s.image}
        onClick={handleClick}
      />
    </div>
  );
}
