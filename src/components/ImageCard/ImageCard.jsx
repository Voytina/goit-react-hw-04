import s from './ImageCard.module.css';

export default function ImageCard({ item, openModal, setSelectedImage }) {

  function handleClick() {
    setSelectedImage(item.urls.regular);
    openModal();
  }

  return (
    <div>
      <img
        src={item.urls.small}
        alt=""
        className={s.image}
        onClick={handleClick}
      />
    </div>
  );
}
