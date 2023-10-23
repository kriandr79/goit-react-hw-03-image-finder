import { Component } from 'react';
import axios from 'axios';
import css from './ImageGallery.module.css';
import ImagesGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';

const API_KEY = '38931219-81f95ff04be64d9b8b5d6502d';

export default class ImageGallery extends Component {
  state = {
    images: '',
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const lastSearchWord = prevProps.searchWord;
    const nextSearchWord = this.props.searchWord;
    const lastPage = prevState.page;
    const nextPage = this.state.page;

    if (lastSearchWord !== nextSearchWord || lastPage !== nextPage) {
      axios
        .get(
          `https://pixabay.com/api/?q=${nextSearchWord}&page=${nextPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(({ data: { hits } }) => {
          this.setState(({ images }) => ({
            images: [...images, ...hits],
          }));
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  }

  handleLoadBoreBtn = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { images } = this.state;
    return (
      <>
        {images && (
          <div>
            <ul className={css.ImageGallery}>
              {images.map(({ id, webformatURL, largeImageURL }) => (
                <ImagesGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                ></ImagesGalleryItem>
              ))}
            </ul>
            <Button onClick={this.handleLoadBoreBtn}></Button>
          </div>
        )}
      </>
    );
  }
}
