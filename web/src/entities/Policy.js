import * as React from 'react';
import { Highlight } from './Highlight';
import GetAppIcon from '@material-ui/icons/GetApp';
import HomeIcon from '@material-ui/icons/Home';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';

type Author = {
  name: String,
  homepage: String,
}

type Download = {
  registry: String,
  url: String,
}

export type Policy = {
  name: String,
  description: String,
  homepage: String,
  author: Author,
  download: Download,
  keywords: Array<String>,
  resources: Array<String>,
  mutation: Boolean,
}

type Props = {
  Policy: Policy,
  descriptionCriteria: String,
};


const PolicyItem = (props: Props) => {
  return (
    <div className="policy-item">
      <div className="title">{props.policy.name}</div>
      <a className="link homepage"
          href={props.policy.homepage}
          target="_blank"
          rel="noopener noreferrer">
            <HomeIcon />Homepage
      </a>
      <dl>
        <dt></dt>
        <dd>
          <Highlight
            text={props.policy.description}
            highlight={props.descriptionCriteria}
          />
        </dd>
        <br/>
        <br/>
        <dt>Author :</dt>
        <dd>
          <a className="link"
            href={props.policy.author.homepage}
            target="_blank"
            rel="noopener noreferrer">
              <PersonIcon />{props.policy.author.name}
          </a>
        </dd>
        <br/>
        <dt>Registry :</dt>
        <dd>
          {
            props.policy.download.registry ?
              <code>{props.policy.download.registry}</code>
              : null
          }
          {
            props.policy.download.url ?
              <a className="link download"
                href={props.policy.download.url}
                target="_blank" rel="noopener noreferrer">
                  <GetAppIcon />
              </a>
            : null
          }
        </dd>
        <br/>
        <br/>
        <dt>Resources :</dt>
        <dd>
          {props.policy.resources.map(r => <p className="resource" key={props.policy.name + "-" + r}>{r}</p>)}
        </dd>
        <br/>
        <dt>Keywords :</dt>
        <dd>
          {props.policy.keywords.map(k => <p className="keyword" key={props.policy.name + "-" + k}>{k}</p>)}
        </dd>
      </dl>
      <div className="mutation"><SpellcheckIcon />{props.policy.mutation ? <EditIcon /> : null}</div>
    </div>
  );
};

export default PolicyItem;
