install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
    npm publish --dry-run
lint:
    npx eslint .

brain-prime:
	node bin/brain-prime.js