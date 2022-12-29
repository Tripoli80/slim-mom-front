import { Modal } from 'components/Modal/Modal';
import { Div, Team } from './Footer.styled';
import dev from './contacts.json';
import { useState } from 'react';
import DeveloperCard from './DeveloperCard';
import { nanoid } from 'nanoid';
import Carousel from 'react-elastic-carousel';
// import { Carousel } from 'react-responsive-carousel';
import { CardWrapper } from './DeveloperCard.styled';
const Footer = () => {
  const [modalStan, setModalStan] = useState(false);

  const toggleModal = () => {
    setModalStan(stan => !stan);
  };

  return (
    <>
      <Div>
        <Team onClick={toggleModal}>Our team</Team>
        {modalStan && (
          <Modal
            onClose={() => {
              toggleModal();
            }}
          >
            <CardWrapper>
              <Carousel>
                {dev.developers.map(developer => {
                  return (
                    <>
                      <DeveloperCard
                        key={nanoid()}
                        {...developer}
                      ></DeveloperCard>
                    </>
                  );
                })}
              </Carousel>
            </CardWrapper>
          </Modal>
        )}
      </Div>
    </>
  );
};
export default Footer;
