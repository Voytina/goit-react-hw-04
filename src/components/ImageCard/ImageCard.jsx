import s from './ImageCard.module.css';

export default function ImageCard({ item }) {
  return (
    <div className={s.container}>
      <img src={item.urls.small} alt="" className={s.image} />
    </div>
  );
}
