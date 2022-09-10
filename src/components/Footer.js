import React from 'react';
import '../styles/components/Footer.scss';

import innocv from '../images/innocv.PNG';
import { TiSocialLinkedin } from 'react-icons/ti';
import { BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.innocv.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        <img className="footer__logo" src={innocv} alt="Innocv logo" />
      </a>

      <div className="footer__iconList">
        <a
          href="https://www.linkedin.com/in/veronica-isla-garcia-de-leaniz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialLinkedin className="footer__social" />
        </a>
        <a
          href="https://github.com/veroisla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="footer__social" />
        </a>
        <a
          href="mailto:veroislagleaniz@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GrMail className="footer__social" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
