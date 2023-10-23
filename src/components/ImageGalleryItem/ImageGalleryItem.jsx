import css from './ImageGalleryItem.module.css'

export default function ImagesGalleryItem({webformatURL, largeImageURL}) {
  return (
    <li className={css.galleryItem}>
      <img src={webformatURL} width="350" alt="" />
    </li>
  );
}
