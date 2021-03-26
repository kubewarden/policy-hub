import React, { useState } from 'react';
import { Highlight } from './Highlight';
import GetAppIcon from '@material-ui/icons/GetApp';
import HomeIcon from '@material-ui/icons/Home';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MaterialTooltip from "@material-ui/core/Tooltip";

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
  const [copied, setCopied] = useState(false);
  const copyDone = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const policy = props.policy;

  return (
    <article>
      <div className="name">{policy.name}</div>
      <div className="content">
        <div className="text-bigger text-description">
          <Highlight
            text={policy.description}
            highlight={props.descriptionCriteria}
          />
        </div>
        {
          policy.download.registry ?
            <div>
              <span className="text-light text-tiny text-label">REGISTRY&nbsp;</span>
              <code className="text-smaller">{policy.download.registry}</code>
              <CopyToClipboard text={policy.download.registry} onCopy={() => copyDone()}>
                <MaterialTooltip title={!copied ? "Copy registry" : "Copied!"} arrow>
                  <button id="copy-registry" className="text-small button-link">
                    <FileCopyIcon />
                  </button>
                </MaterialTooltip>
              </CopyToClipboard>
            </div>
            : null
        }
        <div>
          <span className="text-light text-tiny text-label">RESOURCES&nbsp;</span>
          {policy.resources.map(r =>
            <MaterialTooltip title="Filter by this resource" arrow key={policy.name + "-" + r}>
              <button className="badge resource text-smaller"
                  onClick={() => props.additionalResourceFilter(r)}>
                {r}
              </button>
            </MaterialTooltip>
            )
          }
        </div>
        <div>
          <span className="text-light text-tiny text-label">KEYWORDS&nbsp;</span>
          {policy.keywords.map(k =>
            <MaterialTooltip title="Filter by this keyword" arrow key={policy.name + "-" + k}>
              <button className="badge keyword text-smaller"
                  onClick={() => props.additionalKeywordFilter(k)}>
                {k}
              </button>
            </MaterialTooltip>
            )
          }
        </div>
        <aside>
          <div>
            <a className="text-smaller link"
                href={policy.homepage}
                target="_blank"
                rel="noopener noreferrer">
                  <HomeIcon />Homepage
            </a>
          </div>
          <MaterialTooltip title="Author" arrow>
            {
              policy.author.homepage ?
                <div>
                  <a className="text-smaller link"
                      href={policy.author.homepage}
                      target="_blank"
                      rel="noopener noreferrer">
                        <PersonIcon />{policy.author.name}
                  </a>
                </div>
                : <div>
                    <span className="text-smaller not-a-real-link">
                      <PersonIcon />
                      {policy.author.name}
                    </span>
                  </div>
            }
          </MaterialTooltip>
          {
            policy.download.url ?
              <div>
                <a className="text-smaller link download"
                  href={policy.download.url}
                  rel="noopener noreferrer">
                    <GetAppIcon />Download Policy
                </a>
              </div>
            : null
          }
          <div className="not-a-real-link mutation">
            <MaterialTooltip arrow
                title={policy.mutation ? "Validation + Mutation Policy" : "Validation Policy"}>
              <div>
                <SpellcheckIcon color="primary" />
                {
                  policy.mutation ?
                    <EditIcon  color="secondary" />
                    : null
                }
              </div>
            </MaterialTooltip>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default PolicyItem;
