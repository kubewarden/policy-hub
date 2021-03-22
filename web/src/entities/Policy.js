import * as React from 'react';

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
};


const PolicyItem = (props: Props) => {
  return (
    <div className="policy-item">
      <h3>{props.policy.name}</h3>
      <br/>
      <label>abstract:</label><span>{props.policy.abstract}</span>
      <br/>
      <label>source:</label><span><a className="link" href={props.policy.source} target="_blank" rel="noopener noreferrer">{props.policy.source}</a></span>
      <br/>
      <label>registry:</label><span><a className="link" href={props.policy.download.url} target="_blank" rel="noopener noreferrer">{props.policy.download.registry}</a></span>
      <br/>
      <label>tags:</label>{props.policy.tags.reduce((t1, t2) => <span>{t1}, {t2}</span>)}
      <br/>
      <label>resources:</label>{props.policy.resources.reduce((r1, r2) => <span>{r1}, {r2}</span>)}
      <br/>
      <label>mutation:</label><span>{props.policy.mutation ? "True" : "False"}</span>
      <br/>
    </div>
  );
};

export default PolicyItem;
