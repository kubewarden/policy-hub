import './Hub.css';
import * as React from 'react';
import PolicyItem from './entities/Policy';

const _FAKE_DATASET: Array<Policy> = [
  {
    "name": "psp-apparmor",
    "abstract": "A Pod Security Policy that controls usage of AppArmor profiles",
    "source": "https://github.com/chimera-kube/psp-apparmor",
    "download": {
      "registry": "ghcr.io/chimera-kube/policies/psp-apparmor:v0.1.1",
      "url": "https://github.com/chimera-kube/psp-apparmor/releases/download/v0.1.1/policy.wasm"
    },
    "tags": [
      "PSP",
      "AppArmor"
    ],
    "resources": [
      "Pod"
    ],
    "mutation": false
  },
  {
    "name": "psp-capabilities",
    "abstract": "A Pod Security Policy that controls Container Capabilities",
    "source": "https://github.com/chimera-kube/psp-capabilities",
    "download": {
      "registry": "ghcr.io/chimera-kube/policies/psp-capabilities:v0.1.0",
      "url": "https://github.com/chimera-kube/psp-capabilities/releases/download/v0.1.0/policy.wasm"
    },
    "tags": [
      "PSP",
      "Container",
      "Capabilities"
    ],
    "resources": [
      "Pod"
    ],
    "mutation": true
  },
  {
    "name": "trusted-repo-source",
    "abstract": "Restrict what registries, tags and images can be used",
    "source": "https://github.com/chimera-kube/trusted-repos-policy",
    "download": {
      "registry": "ghcr.io/chimera-kube/policies/trusted-repos:latest"
    },
    "tags": [
      "Image",
      "Registry",
      "Tag"
    ],
    "resources": [
      "Pod"
    ],
    "mutation": false
  },
  {
    "name": "psp-allow-privilege-escalation",
    "abstract": "A Pod Security Policy that controls usage of `allowPrivilegeEscalation`",
    "source": "https://github.com/chimera-kube/psp-allow-privilege-escalation",
    "download": {
      "registry": "ghcr.io/chimera-kube/policies/psp-allow-privilege-escalation:v0.1.1",
      "url": "https://github.com/chimera-kube/psp-allow-privilege-escalation/releases/download/v0.1.1/policy.wasm"
    },
    "tags": [
      "PSP",
      "Container",
      "Privilege Escalation"
    ],
    "resources": [
      "Pod"
    ],
    "mutation": false
  },
  {
    "name": "pod-privileged-policy",
    "abstract": "Limit the ability to create privileged containers",
    "source": "https://github.com/chimera-kube/pod-privileged-policy",
    "download": {
      "registry": "ghcr.io/chimera-kube/policies/pod-privileged-policy:v0.1.2",
      "url": "https://github.com/chimera-kube/pod-privileged-policy/releases/download/v0.1.2/policy.wasm"
    },
    "tags": [
      "PSP",
      "Container",
      "Privileged"
    ],
    "resources": [
      "Pod"
    ],
    "mutation": false
  }
];


export default function Hub() {
  const filter = () => {
    return _FAKE_DATASET;
  }

  return (
    <div className="Hub">
      <header className="Hub-header">
        <a className="link" href="/policy-hub" target="_blank" rel="noopener noreferrer">
          Policy Hub
        </a>
      </header>
      <section>
        {filter().map(e => <PolicyItem policy={e} /> )}
      </section>
    </div>
  );
}
