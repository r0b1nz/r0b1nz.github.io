import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <a
          href="https://mobile.twitter.com/robin__x_x"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/r0b1nz"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://stackoverflow.com/users/11635582/robin-gautam"
          target="_blank"
          rel="noopener noreferrer"
        >
          stack overflow
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.linkedin.com/in/robin-gautam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>{' '}
        &bull;{' '}
        <a
          href="https://unsplash.com/@r0b1n"
          target="_blank"
          rel="noopener noreferrer"
        >
          unsplash
        </a>{' '}
        &bull;{' '}
        <a
          href="https://vsco.co/mindful-misc/gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          vsco
        </a>
      </footer>
    );
  }
}

export default Footer;
