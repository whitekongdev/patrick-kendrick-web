import React from 'react';
import RightImgSection from '../../../components/RightImgSection/RightImgSection';

const SellerSection = ({ sellerData }) => {
  const { seller_title, seller_description, seller_image, seller_url } = sellerData;

  return (
    <>
    <h1 className='sectionTitle'>Sellers</h1>
    <div className='headerSeparator'></div>
    <RightImgSection
      title={seller_title}
      description={seller_description}
      img={seller_image}
      bottom={[]}
      button={{
        text: "Learn More",
        url:seller_url,
      }}
    />
    </>
  );
};

export default SellerSection;