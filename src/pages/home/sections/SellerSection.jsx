import React from 'react';
import RightImgSection from '../../../components/RightImgSection/RightImgSection';

const SellerSection = ({ sellerData }) => {
  const { title, description, image, url } = sellerData;

  return (
    <>
    <h1 className='sectionTitle'>Sellers</h1>
    <div className='headerSeparator'></div>
    <RightImgSection
      title={title}
      description={description}
      img={image}
      bottom={[]}
      button={{
        text: "Learn More",
        url:url,
      }}
    />
    </>
  );
};

export default SellerSection;