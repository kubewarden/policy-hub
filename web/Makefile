dataset:
	cat ./policies/*.json | jq -s '.' > ./src/data/policy-hub.json

deps:
	npm install

build: dataset
	npx yarn build
