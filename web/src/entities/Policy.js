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
      <div className="policy-item-field">
        <label>abstract:</label>
        <Highlight
          text={props.policy.abstract}
          highlight={props.abstractCriteria}
        />
      </div>
      <div className="policy-item-field">
        <a className="link"
          href={props.policy.source}
          target="_blank"
          rel="noopener noreferrer">
            <CodeIcon /> source
        </a>
      </div>
      <div className="policy-item-field">
        <label>registry:</label>
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
      </div>
      <div className="policy-item-field">
        <label>resources:</label>
        {props.policy.resources.map(r => <span key={props.policy.name + "-" + r}>{r}</span>)}
      </div>
      <div className="policy-item-field">
        <label>mutation:</label>
        <span>{props.policy.mutation ? "True" : "False"}</span>
      </div>
      <div className="policy-item-field">
        <label>tags:</label>
        {props.policy.tags.map(t => <p className="tag" key={props.policy.name + "-" + t}>{t}</p>)}
      </div>
    </div>
  );
};

export default PolicyItem;
