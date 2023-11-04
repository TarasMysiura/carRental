import Modal from '../Modal/Modal';
import AdvertDetails from '../AdvertDetails/AdvertDetails';
// import { useState } from 'react';
// import TaskForm from '../TaskForm/TaskForm';

const ModalAdvert = ({advert, onModalClose }) => {

  return (
      <Modal isModalActive onClose={onModalClose}>
        <AdvertDetails advert={advert} closeModal={onModalClose}></AdvertDetails>
      </Modal>
  );
};
export default ModalAdvert;