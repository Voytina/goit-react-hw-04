import Modal from 'react-modal';
import s from './ImageModal.module.css';

export default function ImageModal({ isOpen, onRequestClose, image }) {
    return (
      <Modal
        isOpen={isOpen} 
        onRequestClose={onRequestClose} 
        contentLabel="Image Modal"
        className={s.modal} 
        overlayClassName={s.overlay}
      >
        <div className={s.content}>
          <img src={image} alt="Large view" className={s.image} />
        </div>
      </Modal>
    );
  }