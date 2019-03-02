package main

import (
	"io/ioutil"
	"log"
	"strings"
)

const (
	PathVueConfigJS string = "../home/vue.config.js"
)

func insertPathToVueConfigJS(routes string, PathVueConfigJS string) {
	componentSourceBytes, err := ioutil.ReadFile(PathVueConfigJS)
	if err != nil {
		log.Fatal(err)
	}

	componentSource := string(componentSourceBytes)

	i := strings.Index(componentSource, "__INSERTION_POSITION__")

	from := strings.Index(componentSource[i:], "[")
	from += i

	k := strings.Index(componentSource, "__INSERTION_POSITION_END__")
	to := strings.LastIndex(componentSource[i:k+2], "]")
	to += i

	componentSource = componentSource[0:from] + routes + componentSource[to+1:]

	ioutil.WriteFile(PathVueConfigJS, []byte(componentSource), 0644)
}
