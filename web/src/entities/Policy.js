import * as React from 'react';
import { Highlight } from './Highlight';

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
        <Highlight text={props.policy.abstract} highlight={props.abstractCriteria} />
      </div>
      <div className="policy-item-field">
        <label>source:</label><span>
        <a className="link" href={props.policy.source} target="_blank" rel="noopener noreferrer">{props.policy.source}</a></span>
      </div>
      <div className="policy-item-field">
        <label>registry:</label>
        {
          props.policy.download.url ?
            <span><a className="link" href={props.policy.download.url} target="_blank" rel="noopener noreferrer">{props.policy.download.registry}</a></span>
          : <span>registry not available</span>
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
