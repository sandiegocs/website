.PHONY: build

build:
	rm -rf public/
	zola -r "$(PWD)" build -u https://sandiegocs.org
	@#zola -r "$(PWD)" build
build-staging:
	rm -rf public/
	zola -r "$(PWD)" build -u https://staging-sdcs.maatt.fr

deploy: build deploy-rsync
stage: build-staging deploy-rsync-staging
deploy-rsync: 
	cp Caddyfile public/Caddyfile
	rsync -avz public/ git@maatt.fr:/srv/sandiegocs.org/
deploy-rsync-staging:
	cp Caddyfile.staging public/Caddyfile
	rsync -avz public/ maatt.fr:/srv/sandiegocs.org/
