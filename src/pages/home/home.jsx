import React, { useEffect, useState } from 'react';
import Navbar from '../..//components/Navbar/Navbar';
import LeftImgSection from '../../components/LeftImgSection/LeftImgSection';
import RightImgSection from '../../components/RightImgSection/RightImgSection';
import Footer from '../../components/Footer/Footer';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Carousel from '../../components/Carousel/Carousel';
import './home.css';


const HomePage = () => {

  const transformData = (data) => {
    debugger
      const keys = Object.keys(data[0].acf).filter((key) => key.startsWith("Carousel"));
      const carouselValues = keys.map((key) => data[0].acf[key]);
      setImages(carouselValues); // Aquí tienes solo los valores en un array
      setApiData(data[0]);
    setApiData(data[0])
  }

  const [apiData, setApiData] = useState(null);
  const [images, setImages] = useState([]);
  useEffect(() => {
    // Llamada a la API
    fetch('https://patrick-kendrick.whitekongsoftware.com/wp-json/wp/v2/pages')
      .then((response) => response.json())
      .then((data) => transformData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!apiData) {
    return <div>Loading...</div>;
  }


return (
  <>
    <div className="page-container">
      <Navbar />
      {/* <VideoPlayer src={apiData.acf.video} /> */}
      <Carousel images={images} />
      <LeftImgSection
        title={apiData.acf.title1}
        description={apiData.acf.text1}
        img={apiData.acf.img1}
        button={"Explore Our Listing"}
      />
      <RightImgSection
        title={apiData.acf.title2}
        description={apiData.acf.text2}
        img={apiData.acf.img2}
      />
      <LeftImgSection
        title={apiData.acf.title3}
        description={apiData.acf.text3}
        img={apiData.acf.img3}
        button={"Request a Consultation"}
      />
      <Footer />
    </div>
  </>
);
};

export default HomePage;