run:
	./bin/terrace

build:
	go build -x -o ./bin/terrace ./src
	sudo setcap CAP_NET_BIND_SERVICE=+eip ./bin/terrace

update:
	go build -x -o ./bin/terrace ./src
	sudo setcap CAP_NET_BIND_SERVICE=+eip ./bin/terrace

deploy:
	git push git@13.209.22.243:~/terrace_hook master

