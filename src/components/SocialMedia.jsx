import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin 
      style={{ cursor: 'pointer'}}
      onClick={() => window.open('https://www.linkedin.com/in/mazumdar-sourav/', '_blank')} />
    </div>
    <div>
      <BsGithub 
      style={{ cursor: 'pointer'}}
      onClick={() => window.open('https://github.com/SouravM9', '_blank')} />
    </div>
  </div>
);

export default SocialMedia;