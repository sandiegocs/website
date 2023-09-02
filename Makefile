.PHONY: build

build:
	rm -rf public/
	zola -r "$(PWD)" build -u https://staging-sdcs.maatt.fr
deploy: build deploy-rsync
deploy-rsync: 
	cp Caddyfile public/Caddyfile
	rsync -avz public/ maatt.fr:/srv/sandiegocs.org/ 