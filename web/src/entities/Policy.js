import * as React from 'react';
import { Highlight } from './Highlight';
import GetAppIcon from '@material-ui/icons/GetApp';
import HomeIcon from '@material-ui/icons/Home';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';

type Author = {
  name: String,
  homepage?: String,
}

type Download = {
  registry?: String,
  url?: String,
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
  const policy = props.policy;

  return (
    <article>
      <div className="name">{policy.name}</div>
      <div className="content">
        <aside>
          <a className="text-light link"
              href={policy.homepage}
              target="_blank"
              rel="noopener noreferrer">
                <HomeIcon />Homepage
          </a>
          <br/>
          <br/>
          {
            policy.author.homepage ?
              <a className="text-light link"
                  href={policy.author.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Author">
                    <PersonIcon />{policy.author.name}
              </a>
              : <span className="text-smaller text-light not-a-real-link"><PersonIcon />{policy.author.name}</span>
          }
          <br/>
          <br/>
          <div className="text-light not-a-real-link mutation"
              title={policy.mutation ? "Validation + Mutation Policy" : "Validation Policy"}>
            <SpellcheckIcon />{policy.mutation ? <EditIcon /> : null}
          </div>
        </aside>

        <div className="text-light text-bigger">
          <Highlight
            text={policy.description}
            highlight={props.descriptionCriteria}
          />
        </div>
        <div className="download">
          <div className="text-light text-smaller">Registry</div>
          {
            policy.download.registry ?
              <input type="text"
                  className="text-smaller text-light"
                  value={policy.download.registry}
                  readonly />
              : null
          }
          {
            policy.download.url ?
              <a className="link download"
                href={policy.download.url}
                target="_blank" rel="noopener noreferrer"
                title="Download Policy">
                  <GetAppIcon />
              </a>
            : null
          }
        </div>
        <div>
          <div className="text-light text-smaller">Resources</div>
          {policy.resources.map(r => <span className="badge resource text-smaller" key={policy.name + "-" + r}>{r}</span>)}
        </div>
        <div>
          <div className="text-light text-smaller">Keywords</div>
          {policy.keywords.map(k => <span className="badge keyword text-smaller" key={policy.name + "-" + k}>{k}</span>)}
        </div>

      </div>
    </article>
  );
};

export default PolicyItem;
