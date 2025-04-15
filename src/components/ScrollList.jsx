import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/ScrollList.css';

// Import obrazów z folderu assets
import Picture1 from '../assets/picture1.svg';
import Picture2 from '../assets/picture2.svg';
import Picture3 from '../assets/picture3.svg';

gsap.registerPlugin(ScrollTrigger);

const ScrollList = ({
  items = [
    "Welcome to Target-Zero project, where you can learn about climate goals by 2050 and check current air quality",
    "The Paris Agreement has a long-term temperature goal which is to keep the rise in global surface temperature to well below 2 °C (3.6 °F) above pre-industrial levels. The treaty also states that preferably the limit of the increase should only be 1.5 °C (2.7 °F). These limits are defined as averages of the global temperature as measured over many years",
    "All the credits must go to the US Embassies in China for initially providing and publishing their PM2.5 air quality measurement, to the China MEP for the huge effort in providing PM2.5 for so many cities, and all the worldwide Environment Protection Agencies for their excellent work on monitoring and providing Air Quality information."
  ],
  containerClassName = "",
  itemClassName = "",
}) => {
  const containerRef = useRef(null);

  const images = [Picture1, Picture2, Picture3]; // Tablica obrazów

  useEffect(() => {
    const el = containerRef.current;
    if (!el) {
      console.warn('Container element not found');
      return;
    }

    const itemElements = el.querySelectorAll('.scroll-item');
    if (!itemElements || itemElements.length === 0) {
      console.warn('No .scroll-item elements found for animation');
      return;
    }

    // Animacja dla każdego elementu
    itemElements.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: 50 }, // Startowa pozycja tekstu
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%', // Animacja zaczyna się, gdy element jest w 80% widoczny
            end: 'top 10%', // Animacja kończy się, gdy element jest w 20% widoczny
            scrub: true,
            onEnter: () => {
              document.querySelector('.background-element').style.backgroundImage = `url(${images[index]})`;
            },
            onEnterBack: () => {
              document.querySelector('.background-element').style.backgroundImage = `url(${images[index]})`;
            },
          },
        }
      );
    });

    // Ustawienie obrazu `Picture1` po powrocie na górę strony
    ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: 'top top',
      onEnterBack: () => {
        document.querySelector('.background-element').style.backgroundImage = `url(${Picture1})`;
      },
    });

    // Czyszczenie animacji po odmontowaniu komponentu
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [images]);

  return (
    <div className="scroll-list-wrapper">
      <div className="background-element"></div>
      <div ref={containerRef} className={`scroll-list-container ${containerClassName}`}>
        {items.map((item, index) => (
          <div key={index} className={`scroll-item ${itemClassName}`}>
            <div className="scroll-item-content">
              <div className="scroll-item-image">
                <img src={images[index]} alt={`Illustration ${index + 1}`} />
              </div>
              <div className="scroll-item-text">
                <h1>{item}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollList;