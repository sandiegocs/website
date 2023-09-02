.PHONY: build

build:
	rm -rf public/
	zola -r "$(PWD)" build
deploy: build deploy-rsync
deploy-rsync: 
	cp Caddyfile public/Caddyfile
	rsync -avz public/ maatt.fr:/srv/sandiegocs.org/ 