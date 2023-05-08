import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    selectedImg: null,
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setSelectedImg = () => {
    this.setState({ selectedImg: this.props.item.largeImageURL });
  };

  render() {
    const { largeImageURL, tags } = this.props.item;
    const { item } = this.props;
    const { showModal } = this.state;

    return (
      <div className="ImageGalleryItem">
        <div onClick={() => this.toggleModal(largeImageURL)}>
          <img
            className="ImageGalleryItem-image"
            loading="lazy"
            src={item.webformatURL}
            alt={item.tags}
            width="320"
          />
        </div>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img loading="lazy" src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </div>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
