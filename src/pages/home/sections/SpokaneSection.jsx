import React from 'react';
import RightImgSection from '../../../components/RightImgSection/RightImgSection';

const SpokaneSection = ({ spokaneData }) => {
  const { spokane_title, spokane_description, spokane_image, spokane_url } = spokaneData;

  return (
    <>
    <h1 className='sectionTitle'>Spokane</h1>
    <div className='headerSeparator'></div>
    <RightImgSection
      title={spokane_title}
      description={spokane_description}
      img={spokane_image}
      bottom={[]}
      button={{
        text: "See More",
        url: spokane_url,
      }}
    />
    </>
  );
};

export default SpokaneSection;