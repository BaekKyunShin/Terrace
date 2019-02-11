# BLOG - 9. 웹서버 만든 후 빌드


### **빌드하기**

vue로 만든 소스코드를 아래와 같이 빌드합니다.

```bash
cd terrace/frontend/home
npm run build
```

빌드란 해당 프로그램을 테스트하고 검사하여 배포하기 위해 수행하는 행위의 집합이라고 생각하시면 됩니다. [(Reference1)](https://github.com/jinyowo/JS-Calendar/wiki/**-Build%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C) 빌드의 결과물은 dist 디렉토리에 저장됩니다. 이를 배포를 위한 web_root 디렉토리로 카피하겠습니다.

```bash
cp -r dist ../../web_root
```



### Root Handler 만들기

```bash
cd ../../
mkdir src
cd src
v main.go
```

src 디렉토리에 Root Handler 기능을 하는 main.go라는 파일을 만듭니다. main.go에 아래 코드를 그대로 붙여넣기 하시면 됩니다.

```go
package main

import (
    "fmt"
    "io/ioutil"
    "log"
    "net/http"
)

const (
  WebRoot = "./web_root/"
)

func rootHandler(w http.ResponseWriter, r *http.Request) {
    // when request is root, send index.html
    // otherwise, send the file

    log.Println(r.URL.Path)

    path := r.URL.Path[len("/"):]

    source, err := ioutil.ReadFile(WebRoot + path)
    if err != nil {
        source, err = ioutil.ReadFile(WebRoot + path + "/index.html")
        if err != nil {
            // Redirect to 404 page
            w.WriteHeader(http.StatusNotFound)
            fmt.Fprint(w, err)
            log.Println("(rootHandler) ", err)
            return
        }
    }

    // Set content type as css if required file's extension is css
    if len(path) >= 4 && path[len(path)-4:] == ".css" {
        w.Header().Set("Content-Type", "text/css")
    }

    fmt.Fprint(w, string(source))
    log.Println("(rootHandler) The requested file has been sent: ", WebRoot+path)
}

func main() {
    http.HandleFunc("/", rootHandler)
    log.Fatal(http.ListenAndServe(":80", nil))
}
```

main.go를 간단히 설명드리겠습니다. 예를 들어, ```r.URL.Path``` = "/bookThinkBlog/2018/12/28/book-sapiens/" 입니다. r은 클라이언트의 request (클라이언트에서 서버로 보내온 정보들)를 뜻하는 것입니다.  

```path := r.URL.Path[len("/"):]``` 이 코드를 지나면 ```path```= "bookThinkBlog/2018/12/28/book-sapiens/" 이렇게 맨 앞 "/" 가 없어집니다.  

```source```= "./web_root/bookThinkBlog/2018/12/28/book-sapiens/" 가 될 것입니다. err가 없다면 바로 아래의 조건문은 건너뛸 것이고, err가 있다면 ```source```="./web_root/bookThinkBlog/2018/12/28/book-sapiens/index.html"이 될 것입니다. 이것마저 err가 있다면 404(Not Found)를 띄워주는 겁니다.  

아무 err가 없다면 ```fmt.Fprint(w, string(source))``` 가 정상적으로 실행됩니다. Fprint는 파일에 쓰기 위한 용도이며, ```string(source)```를 ```w```에 써준다라는 의미입니다. [(Reference2)](http://brownbears.tistory.com/175) ```http.HandleFunc```는 지정된 Path에 대해서 어떤 Request 핸들러를 사용할지를 지정해줍니다. 위 코드에서는 "/" Path에 대해 rootHandler 함수를 실행해준다는 뜻입니다. ```http.ListenAndServe```는 80번 포트를 열고 클라언트의 request를 받아들여 새로운 Go 루틴에 작업을 할당해줍니다. 두번째 파라미터인 nil은 Default인 HTTP Request router를 사용한다는 뜻입니다. [(Reference3)](http://golang.site/go/article/111-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%9B%B9-%EC%84%9C%EB%B2%84-HTTP-%EC%84%9C%EB%B2%84)  

사실 main.go에 있는 function 하나 하나가 굉장히 추상화가 되어있습니다. 그렇기에 그냥 블랙박스라 생각하시고 어떤 기능을 하는지만 이해하셔도 무방할 것 같습니다. 브리핑을 해보자면, 유저가 URL 주소를 치면 웹 서버에 request를 보냅니다. 그 request를 받아 rootHandler를 돌려 source path를 responsewriter에 써주고 그 response를 사용자 브라우저에 띄워주는 것입니다.



### main.go 빌드하기

main.go가 있는 src 디렉토리에서 go build를 해줍니다.

```bash
go build main.go
```

그러면 결과물로 ```main```이라는 실행 파일이 하나 생길 겁니다. 아래와 같이 몇 가지 조정을 하겠습니다.

```bash
cd ..
mv src/main .
mkdir bin
mv main bin
cd bin
mv main terrace
cd ..
```

이제 terrace/bin 디렉토리에 terrace라는 go 파일이 담겨 있을 겁니다. 

```bash
sudo ./bin/terrace 
```

이렇게 하면 npm run serve 한 것과 같이 웹 서버를 띄울 수 있습니다. 다만 npm run serve는 8080포트지만, 위에 있는 main.go를 보면 80포트에서 listen을 하고 있기 때문에 localhost:8001을 해야 접속이 됩니다. (각자 포트포워딩 했던 포트로 들어가시면 됩니다.) terrace를 실행할 때 sudo를 붙이는 이유는 80이 low number port이기 때문입니다. (참고로 http는 80번 포트, https는 443번 포트, ssh는 22번 포트를 씁니다.) 

하지만, 매번 실행할 때마다 sudo를 붙인다면 해킹당할 시 모든 걸 잃을 수 있습니다. sudo로 실행한 것을 뺏기면 root 계정을 뺏긴 것이니까요. 그래서 아래와 같이 설정해주면 sudo를 붙이지 않아도 ```./bin/terrace```가 실행 됩니다.

```bash
sudo setcap CAP_NET_BIND_SERVICE=+eip ./bin/terrace
```

하지만 사용자 계정을 뺏겨도 sudo를 통해 루트 권한을 얻을 수 있기 때문에 이 또한 안전하지는 않습니다. 추후에는 sudo 권한을 얻을 수 없는 web 계정을 통해 올려야할 것입니다. (지금은 개인 블로그이고, 중요한 정보가 담겼다거나 해킹의 위험도 없기 때문에 사용자 계정으로 하는 것입니다.)
<br>

## Reference

[Reference1 (https://github.com/jinyowo/JS-Calendar/wiki/**-Build%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C)](https://github.com/jinyowo/JS-Calendar/wiki/**-Build%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C)  
[Reference2 (http://brownbears.tistory.com/175)](http://brownbears.tistory.com/175)  
[Reference3 (http://golang.site/go/article/111-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%9B%B9-%EC%84%9C%EB%B2%84-HTTP-%EC%84%9C%EB%B2%84)](http://golang.site/go/article/111-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%9B%B9-%EC%84%9C%EB%B2%84-HTTP-%EC%84%9C%EB%B2%84)
