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
              // TODO: update href once policies are in place
              href="https://staging.artifacthub.io/packages/search?kind=13&sort=relevance&page=1" 
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
                // TODO: update href to blog post
                href="https://www.kubewarden.io/blog/"
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