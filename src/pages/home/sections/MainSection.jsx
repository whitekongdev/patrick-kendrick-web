import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import LeftImgSection from '../../../components/LeftImgSection/LeftImgSection';
import RightImgSection from '../../../components/RightImgSection/RightImgSection';
import './css/Sections.css';

const MainSection = ({ apiData, images }) => {
  const firstSection = {
    title: apiData.acf?.home?.firstsection?.title,
    description: apiData.acf?.home?.firstsection?.description,
    image: apiData.acf?.home?.firstsection?.image,
    button: apiData.acf?.home?.firstsection?.button,
  };

  const secondSection = {
    title: apiData.acf?.home?.secondsection?.title,
    description: apiData.acf?.home?.secondsection?.description,
    image: apiData.acf?.home?.secondsection?.image,
    bottom: Object.entries(apiData.acf?.home?.secondsection?.bottom || {}).map(([key, value]) => ({
      position: key,
      title: value.title,
      subtitle: value.subtitle,
    })),
  };

  const thirdSection = {
    title: apiData.acf?.home?.thirdsection?.title,
    description: apiData.acf?.home?.thirdsection?.description,
    image: apiData.acf?.home?.thirdsection?.image,
    button: apiData.acf?.home?.thirdsection?.button,
  }

  return (
    <div id="main" className="main-section">
      <Carousel images={images} />
      <div className="vertical-space"></div>
        <LeftImgSection
          title={firstSection.title}
          description={firstSection.description}
          img={firstSection.image}
          button={firstSection.button}
        />
      <div className="vertical-space"></div>
      <RightImgSection
        title={secondSection.title}
        description={secondSection.description}
        img={secondSection.image}
        bottom={secondSection.bottom}
      />
      <div className="vertical-space"></div>
      <LeftImgSection
        title={thirdSection.title}
        description={thirdSection.description}
        img={thirdSection.image}
        button={thirdSection.button}
      />
    </div>
  );
};

export default MainSection;
