import * as React from 'react';

import './Banner.css';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

class Banner extends React.Component {
  
  render() {
    return (
      <div className='container'>
        <Alert severity="info">
          <AlertTitle>We have moved!</AlertTitle>
          <span>
            All of our policies can now be found on the&nbsp;
            <a
              href="https://artifacthub.io/packages/search?kind=13&sort=relevance&page=1" 
              target="_blank"
              rel="noreferrer nofollow"
            >
              Artifact Hub
            </a>
            .
          </span>

          <br />

          <span>
            <strong>
              Read about our migration&nbsp;
              <a
                href="https://www.kubewarden.io/blog/2022/07/artifact-hub-supports-kubewarden/"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </strong>
          </span>
        </Alert>
      </div>
    )
  } 
}

export default Banner;
