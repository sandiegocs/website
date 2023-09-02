.PHONY: build

build:
	rm -rf public/
	zola -r "$(PWD)" build -u https://staging-sdcs.maatt.fr
	#zola -r "$(PWD)" build
build-staging:
	rm -rf public/
	zola -r "$(PWD)" build -u https://staging.sandiegocs.org

deploy: build deploy-rsync
stage: build-staging deploy-rsync-staging
deploy-rsync: 
	cp Caddyfile public/Caddyfile
	rsync -avz public/ maatt.fr:/srv/sandiegocs.org/
deploy-rsync-staging:
	cp Caddyfile.staging public/Caddyfile
	rsync -avz public/ maatt.fr:/srv/staging.sandiegocs.org/