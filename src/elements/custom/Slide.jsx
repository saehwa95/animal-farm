import React from 'react';
import styled from 'styled-components';

import Img1 from '../../images/image1.JPG'
import Img2 from '../../images/image2.JPG'
import Nata from '../../images/nata.jpeg'

const Slide = ({img}) => {
  return (
    <Image src={img} />
  );
};

const Image = styled.img`
  width: 100%;
  height: 100%;

`;

export default Slide;