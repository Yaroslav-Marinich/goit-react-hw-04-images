import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ item: { webformatURL, tags, largeImageURL } }) => {
   const [showModal, setShowModal] = useState(false);
 


  return (
    <div className="ImageGalleryItem">
      <div onClick={() => setShowModal(true)}>
        <img
          className="ImageGalleryItem-image"
          loading="lazy"
          src={webformatURL}
          alt={tags}
          width="320"
        />
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
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
