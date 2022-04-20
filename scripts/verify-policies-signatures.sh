#!/bin/bash
POLICIES=`ls web/policies/`
UNTRUSTED_POLICIES=()
for policy in $POLICIES
do
	REGISTRY=$(jq -r ".download.registry" web/policies/${policy})
	kwctl verify --verification-config-path .github/signature_verification_config.yaml ${REGISTRY} 2> /dev/null
	if [[ $? -ne 0 ]]; then
		UNTRUSTED_POLICIES+=$REGISTRY
	fi
done
if [[ ${#UNTRUSTED_POLICIES[@]} -gt 0 ]]; then
	echo "There are untrusted policies in the policy hub. Which are:"
	for policy in ${UNTRUSTED_POLICIES[@]}
	do
		echo -e "\t$policy"
	done
	exit 1
fi
echo "All policies are signed and trusted."
exit 0
