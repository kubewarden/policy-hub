#!/bin/bash
POLICIES=`ls web/policies/`
for policy in $POLICIES
do
	REGISTRY=$(jq -r ".download.registry" web/policies/${policy})
	kwctl verify --verification-config-path .github/signature_verification_config.yaml ${REGISTRY}
	if [[ $? -ne 0 ]]; then
		echo "$REGISTRY is untrusted"
		jq ".signed |= false" web/policies/${policy} > /tmp/policy.json
	else
		echo "$REGISTRY is trusted"
		jq ".signed |= true" web/policies/${policy}  > /tmp/policy.json
	fi
	mv /tmp/policy.json web/policies/${policy}
done
