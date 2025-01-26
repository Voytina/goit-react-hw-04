import { RevolvingDot } from 'react-loader-spinner';

import s from './Loader.module.css'

export default function Loader() {
  return (
    <div className={s.loaderContainer}>
      <RevolvingDot />
    </div>
  );
}
