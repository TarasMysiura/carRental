// import {ModalAdvert} from '../ModalAdvert/ModalAdvert';

import { useState } from "react";
import { Button } from "./BtnLearnMore.styled";
import ModalAdvert from "components/ModalAdvert/ModalAdvert";

const BtnLearnMore = ({advert}) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModalOpen = () => {
    setIsModalActive(true);
  };
  const handleModalClose = () => {
    setIsModalActive(false);
  };

  return (
    <>
      <Button type="button" onClick={handleModalOpen}>
        Learn more
      </Button>
{/* <ModalAdvert /> */}
      {isModalActive && 
      
      <ModalAdvert advert={advert} onModalClose={handleModalClose} />}
    </>
  );
};
export default BtnLearnMore;
