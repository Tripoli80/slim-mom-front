import axios from 'axios';
import {
  CardContainer,
  CardInfo,
  CardPhoto,
  CardTitles,
  Photo,
  Circle,
  CirclesWrapper,
} from './DeveloperCard.styled';
import { useEffect, useState } from 'react';
import { HiEnvelope, HiPhone } from 'react-icons/hi2';

import { BsGithub } from 'react-icons/bs';

const DeveloperCard = ({ name, email, phone, github, role, photo }) => {
  const [ava, setAva] = useState('');
  useEffect(() => {
    const getPhoto = async () => {
      try {
        const fetchPhoto = await axios.get(photo);
        console.log(fetchPhoto.data.avatar_url);
        setAva(fetchPhoto.data.avatar_url);
      } catch (e) {
        console.log(e);
      }
    };
    getPhoto();
  }, [photo]);

  return (
    <>
      <div>
        <CardContainer>
          <CardPhoto>
            <Photo photo={ava}></Photo>
          </CardPhoto>
          <CardTitles>{name}</CardTitles>
          <CardTitles>{role}</CardTitles>
          <CardInfo>
            <CirclesWrapper>
              <Circle href={`mailto:${email}`}>
                <HiEnvelope></HiEnvelope>
              </Circle>
              <Circle href={`tel:${phone}`}>
                <HiPhone></HiPhone>
              </Circle>
              <Circle href={github}>
                <BsGithub></BsGithub>
              </Circle>
            </CirclesWrapper>
          </CardInfo>
        </CardContainer>
      </div>
    </>
  );
};
export default DeveloperCard;
