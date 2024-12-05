import React from 'react';
import RightImgSection from '../../../components/RightImgSection/RightImgSection';

const SellerSection = ({ vendorData }) => {
  const { title, description, image } = vendorData;

  return (
    <>
    <h1 className='sectionTitle'>Vendor</h1>
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