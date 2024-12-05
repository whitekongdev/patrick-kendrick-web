import React from 'react';
import RightImgSection from '../../../components/RightImgSection/RightImgSection';

const SellerSection = ({ sellerData }) => {
  const { title, description, image } = sellerData;

  return (
    <>
    <h1 className='sectionTitle'>Sellers</h1>
    <div className='headerSeparator'></div>
    <RightImgSection
      title={title}
      description={description}
      img={image}
      bottom={[]}
    />
    </>
  );
};

export default SellerSection;