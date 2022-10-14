import React, { useState, useEffect } from 'react'
import './About.scss';
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

// import { images } from '../../constants';
// const abouts = [
//   {
//     title: 'Web Development',
//     description: 'I am a good web developer',
//     imgUrl: images.about01
//   },
//   {
//     title: 'Frontend Development',
//     description: 'I am a good frontend developer',
//     imgUrl: images.about02
//   },
//   {
//     title: 'Backend Development',
//     description: 'I am a good Backend developer',
//     imgUrl: images.about03
//   },
//   {
//     title: 'Full Stack Development',
//     description: 'I am a good Full Stack Developer',
//     imgUrl: images.about04
//   }
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    const platformQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });

    client.fetch(platformQuery).then((data) => {
      setPlatforms(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Development</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="app__platforms">
        {platforms.map((platform, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__platforms-item"
            key={platform.title + index}
            onClick={() => window.open(`${platform.link}`, '_blank')}
          >
            <img src={urlFor(platform.imgUrl)} alt={platform.name} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{platform.name}</h2>
          </motion.div>
        ))}
      </div>

    </>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
