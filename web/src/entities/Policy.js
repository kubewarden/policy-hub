import * as React from 'react';
import { Highlight } from './Highlight';
import LinkIcon from '@material-ui/icons/Link';
import CodeIcon from '@material-ui/icons/Code';
import GetAppIcon from '@material-ui/icons/GetApp';

type Download = {
  registry: String,
  url: String,
}

export type Policy = {
  name: String,
  abstract: String,
  source: String,
  download: Download,
  tags: Array<String>,
  resources: Array<String>,
  mutation: Boolean,
}

type Props = {
  Policy: Policy,
  abstractCriteria: String,
};


const PolicyItem = (props: Props) => {
  return (
    <div className="policy-item">
      <div className="title">{props.policy.name}</div>
      <dl>
        <dt>abstract :</dt>
        <dd>
          <Highlight
            text={props.policy.abstract}
            highlight={props.abstractCriteria}
          />
        </dd>
        <br/>
        <dt>source :</dt>
        <dd>
          <a className="link"
            href={props.policy.source}
            target="_blank"
            rel="noopener noreferrer">
              <CodeIcon /> source
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
        <dt>tags :</dt>
        <dd>
          {props.policy.tags.map(t => <p className="tag" key={props.policy.name + "-" + t}>{t}</p>)}
        </dd>
      </dl>
    </div>
  );
};

export default PolicyItem;
