import * as React from 'react';
import { Highlight } from './Highlight';
import LinkIcon from '@material-ui/icons/Link';
import CodeIcon from '@material-ui/icons/Code';
import GetAppIcon from '@material-ui/icons/GetApp';

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
      <dl>
        <dt>description :</dt>
        <dd>
          <Highlight
            text={props.policy.description}
            highlight={props.descriptionCriteria}
          />
        </dd>
        <br/>
        <dt>author :</dt>
        <dd>
          <a className="link"
            href={props.policy.author.homepage}
            target="_blank"
            rel="noopener noreferrer">
              <LinkIcon/> {props.policy.author.name}
          </a>
        </dd>
        <br/>
        <dt>homepage :</dt>
        <dd>
          <a className="link"
            href={props.policy.homepage}
            target="_blank"
            rel="noopener noreferrer">
              <CodeIcon /> homepage
          </a>
        </dd>
        <br/>
        <dt>registry :</dt>
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
                  <GetAppIcon />download
              </a>
            : null
          }
        </dd>
        <br/>
        <dt>resources :</dt>
        <dd>
          {props.policy.resources.map(r => <span key={props.policy.name + "-" + r}>{r}</span>)}
        </dd>
        <br/>
        <dt>mutation :</dt>
        <dd>{props.policy.mutation ? "True" : "False"}</dd>
        <br/>
        <dt>keywords :</dt>
        <dd>
          {props.policy.keywords.map(k => <p className="keyword" key={props.policy.name + "-" + k}>{k}</p>)}
        </dd>
      </dl>
    </div>
  );
};

export default PolicyItem;
