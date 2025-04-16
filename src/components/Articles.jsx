import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Articles.css';

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'The Importance of Climate Policy',
      content: 'Climate policy plays a crucial role in shaping a sustainable future. This is the extended content of the article, where you can dive deeper into the topic and learn more about its importance.',
      imgSrc: 'https://www.uvic.ca/research/centres/iesvic/assets/images/malcolm-fairbrother-ad-image.jpg',
    },
    {
      id: 2,
      title: 'Renewable Energy Sources',
      content: 'Discover the benefits of renewable energy and how it impacts the environment. This is the extended content of the article, providing more details about renewable energy sources.',
      imgSrc: 'https://bpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/8/14676/files/2012/09/renewable_energy_sources-1njs4dy.jpg',
    },
    {
      id: 3,
      title: 'EU ETS',
      content: 'The EU Emissions Trading System (ETS) is a cornerstone of the EU’s policy to combat climate change. This is the extended content of the article, where you can learn more about the EU ETS and its implications.',
      imgSrc: 'https://static.wixstatic.com/media/0d167d_049689f56a694ca1b2dd34c470d223fe~mv2.png/v1/fill/w_568,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0d167d_049689f56a694ca1b2dd34c470d223fe~mv2.png',
    },
    {
      id: 4,
      title: 'Canada 2030 Emissions Reduction Plan',
      content: 'Learn about Canada’s 2030 Emissions Reduction Plan and its goals. This is the extended content of the article, providing more insights into the plan and its significance.',
      imgSrc: 'https://i.ytimg.com/vi/tiHSklcUrjU/maxresdefault.jpg',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const handleLearnMore = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="articles-container">
      <h1>Articles</h1>
      <p>Explore our latest articles on climate policy and sustainability.</p>

      {/* Slider */}
      <Slider {...sliderSettings} className="articles-slider">
        {articles.map((article) => (
          <div key={article.id} className="slider-item">
            <img src={article.imgSrc} alt={article.title} className="slider-image" />
            <div className="slider-content">
              <h2>{article.title}</h2>
              <p>{article.content.substring(0, 100)}...</p> {/* short text   */}
              <button className="learn-more-btn" onClick={() => handleLearnMore(article)}>
                Learn More...
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal */}
      {selectedArticle && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{selectedArticle.title}</h2>
            <p>{selectedArticle.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Articles;