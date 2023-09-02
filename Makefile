.PHONY: build

build:
	rm -r public/
	zola -r $PWD/sandiegocs.org build
deploy:
	# TODO: add Rsync for server
	