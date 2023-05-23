import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ item }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleImageClick = () => {
    setSelectedImg(item.largeImageURL);
    toggleModal();
  };

  const { largeImageURL, tags } = item;

  return (
    <div className="ImageGalleryItem">
      <div onClick={handleImageClick}>
        <img
          className="ImageGalleryItem-image"
          loading="lazy"
          src={item.webformatURL}
          alt={item.tags}
          width="320"
        />
      </div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img loading="lazy" src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </div>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
