.PHONY: build

build:
	rm -rf public/
	zola -r "$(PWD)" build -u https://sandiegocs.net
build-staging:
	rm -rf public/
	zola -r "$(PWD)" build -u https://staging.sandiegocs.net

deploy: build deploy-rsync
stage: build-staging deploy-rsync-staging
deploy-rsync:
	cp Caddyfile public/Caddyfile
	rsync -avrz public/ eur.doamatto.xyz:/home/web/sandiegocs.net
deploy-rsync-staging:
	cp Caddyfile.staging public/Caddyfile
	rsync -avrz public/ eur.doamatto.xyz:/home/web/staging.sandiegocs.net
