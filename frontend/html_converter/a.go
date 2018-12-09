package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"os/exec"
	"regexp"
	"strings"
)

type ArticleMetadata struct {
	Title string `json:"title"`
	Uri   string `json:"uri"`
	Date  string `json:"date"`
}

const (
	EXT_HTML  string = ".html"
	EXT_MD    string = ".md"
	DirPrefix string = "../home/public/blog_contents"
	BookPath  string = "blog_contents/book_think"
	DevPath   string = "blog_contents/dev_record"
)

var bookArticles []string
var devArticles []string

func execRmOldHtml(path string) {
	if (len(path) > len(EXT_HTML)) &&
		path[len(path)-len(EXT_HTML):] == EXT_HTML {

		cmd := exec.Command("rm", path)
		// cmd := exec.Command("pwd")
		var out bytes.Buffer
		cmd.Stdout = &out
		err := cmd.Run()
		if err != nil {
			log.Fatal(err)
		}
		//log.Printf("pandoc output: %q\n", out.String())
		log.Printf("deleted html document: %q\n", path)
	}
}

func execPandocMdToHtml(path string) {
	// Length of a file have to be logner than extension
	if (len(path) > len(EXT_MD)) &&
		path[len(path)-len(EXT_MD):] == EXT_MD {

		result := path[0:len(path)-len(EXT_MD)] + EXT_HTML

		cmd := exec.Command(
			"pandoc",
			path,
			"-o",
			result,
			"--to",
			"html5",
			"--no-highlight",
		)
		// cmd := exec.Command("pwd")
		var out bytes.Buffer
		cmd.Stdout = &out
		err := cmd.Run()
		if err != nil {
			log.Fatal(err)
		}
		//log.Printf("pandoc output: %q\n", out.String())

		if strings.Contains(path, BookPath) {
			bookArticles = append(bookArticles, path[0:len(path)-len(EXT_MD)]+EXT_HTML)
			log.Printf("generated document: %q\n", result)
		} else if strings.Contains(path, DevPath) {
			devArticles = append(devArticles, path[0:len(path)-len(EXT_MD)]+EXT_HTML)
			log.Printf("generated document: %q\n", result)
		}
	}
}

func iterate(path string, dirInfo []os.FileInfo) {
	for _, info := range dirInfo {
		absolutePathName := path + "/" + info.Name()

		if info.IsDir() {
			subDirInfo, err := ioutil.ReadDir(absolutePathName)
			if err != nil {
				log.Println("(iterate) ", err)
				log.Fatal(err)
			}
			iterate(absolutePathName, subDirInfo)
		} else {
			execRmOldHtml(absolutePathName)
			execPandocMdToHtml(absolutePathName)
		}
		fmt.Println(info.Name())
	}
}

func GetArticleMetadata(htmlPaths []string) []ArticleMetadata {
	r := regexp.MustCompile("(19|20)[0-9][0-9][- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])")

	var metadata []ArticleMetadata
	var uri string

	for _, htmlPath := range htmlPaths {
		// Get title
		htmlSource, err := ioutil.ReadFile(htmlPath)
		if err != nil {
			log.Fatal(err.Error())
		}

		from := bytes.Index(htmlSource, []byte(">"))
		from += len(">")
		to := bytes.Index(htmlSource, []byte("</h1>"))

		// Get Uri
		if strings.Contains(htmlPath, BookPath) {
			uri = strings.Replace(htmlPath, "../home/public/blog_contents/book_think/", "/bookThinkBlog/", 1)
			uri = strings.Replace(uri, ".html", "/", 1)
		} else if strings.Contains(htmlPath, DevPath) {
			uri = strings.Replace(htmlPath, "../home/public/blog_contents/dev_record/", "/devRecordBlog/", 1)
			uri = strings.Replace(uri, ".html", "/", 1)
		}

		// Get date
		date := r.FindString(htmlPath)

		metadata = append(metadata, ArticleMetadata{
			Title: string(htmlSource[from:to]),
			Uri:   uri,
			Date:  date,
		})
	}

	return metadata
}

func main() {
	dirInfo, err := ioutil.ReadDir(DirPrefix)
	if err != nil {
		log.Println("(main) ", err)
		log.Fatal(err)
	}
	iterate(DirPrefix, dirInfo)

	fmt.Println("\n\n bookArticles \n\n")
	for _, bookArticle := range bookArticles {
		fmt.Println(bookArticle)
	}

	fmt.Println("\n\n devArticles \n\n")
	for _, devArticle := range devArticles {
		fmt.Println(devArticle)
	}

	// Reverse articles' order
	i := 0
	k := len(bookArticles) - 1
	for {
		bookArticles[i], bookArticles[k] = bookArticles[k], bookArticles[i]
		i++
		k--
		if i >= k {
			break
		}
	}

	i = 0
	k = len(devArticles) - 1
	for {
		devArticles[i], devArticles[k] = devArticles[k], devArticles[i]
		i++
		k--
		if i >= k {
			break
		}
	}

	bookMetadata := GetArticleMetadata(bookArticles)
	devMetadata := GetArticleMetadata(devArticles)

	bb, err := json.Marshal(bookMetadata)
	if err != nil {
		log.Fatal(err)
	}

	db, err := json.Marshal(devMetadata)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("\n\n book json \n\n")
	fmt.Println(string(bb))

	fmt.Println("\n\n dev json \n\n")
	fmt.Println(string(db))
}
