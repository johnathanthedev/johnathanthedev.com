.PHONY: deploy ## Deploys app
deploy:
	npm run build && firebase deploy

.PHONY: start ## Start app
start:
	npm run dev

.PHONY: files ## Generates array of portfolio files
files:
	node scripts/files.js