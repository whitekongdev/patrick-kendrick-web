import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import LeftImgSection from '../../../components/LeftImgSection/LeftImgSection';
import RightImgSection from '../../../components/RightImgSection/RightImgSection';
import './css/Sections.css';

const MainSection = ({ apiData, images }) => {
  const firstSection = {
    title: apiData.acf?.home?.firstsection?.fs_title,
    description: apiData.acf?.home?.firstsection?.fs_description,
    image: apiData.acf?.home?.firstsection?.fs_image,
    button: apiData.acf?.home?.firstsection?.fs_button,
    buttonLink: apiData.acf?.home?.firstsection?.fs_buttonlink,
  };

  const secondSection = {
    title: apiData.acf?.home?.secondsection?.ss_title,
    description: apiData.acf?.home?.secondsection?.ss_description,
    image: apiData.acf?.home?.secondsection?.ss_image,
    bottom: Object.entries(apiData.acf?.home?.secondsection?.ss_bottom || {}).map(([key, value]) => ({
      position: key,
      title: value.title,
      subtitle: value.subtitle,
    })),
  };

  const thirdSection = {
    title: apiData.acf?.home?.thirdsection?.ts_title,
    description: apiData.acf?.home?.thirdsection?.ts_description,
    image: apiData.acf?.home?.thirdsection?.ts_image,
    button: apiData.acf?.home?.thirdsection?.ts_button,
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
          buttonLink={firstSection.buttonLink}
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
        autoNavigation={true}
      />
    </div>
  );
};

export default MainSection;
