.PHONY: build

build:
	rm -rf public/
	zola -r "$(PWD)" build -u https://sandiegocs.net
	@#zola -r "$(PWD)" build
build-staging:
	rm -rf public/
	zola -r "$(PWD)" build -u https://staging.sandiegocs.net

deploy: build deploy-rsync
stage: build-staging deploy-rsync-staging
deploy-rsync:
	cp Caddyfile public/Caddyfile
	rsync -avrz -e 'ssh -p 49002' public/ web@web.chocobun.net:sandiegocs.net
deploy-rsync-staging:
	cp Caddyfile.staging public/Caddyfile
	rsync -avrz -e 'ssh -p 49002' public/ web@web.chocobun.net:staging.sandiegocs.net
