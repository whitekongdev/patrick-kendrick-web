import React from 'react';
import RightImgSection from '../../../components/RightImgSection/RightImgSection';

const SpokaneSection = ({ spokaneData }) => {
  const { title, description, image, url } = spokaneData;

  return (
    <>
    <h1 className='sectionTitle'>Spokane</h1>
    <div className='headerSeparator'></div>
    <RightImgSection
      title={title}
      description={description}
      img={image}
      bottom={[]}
      button={{
        text: "See More",
        url: url,
      }}
    />
    </>
  );
};

export default SpokaneSection;