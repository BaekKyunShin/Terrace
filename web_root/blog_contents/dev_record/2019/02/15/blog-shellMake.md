# BLOG - 10.  Shell Script, Makefile

### **Shell Script를 활용한 npm 빌드**

홈 디렉토리에서

```bash
cd terrace/frontend
vi update.sh
```

update.sh에 아래 코드를 추가하고 저장해줍니다.

```bash
cd home
npm run build
rm –rf ../../web_root
cp –r dist ../../web_root
```

위 코드는 home 디렉토리로 들어가 빌드를 해준 뒤 기존의 web_root 디렉토리를 삭제해주고 빌드의 결과물이 담기는 dist 디렉토리를 다시 web_root로 카피하는 명령어입니다. 여기서 sh 파일은 shell script 파일입니다. shell script란 line by line의 코드를 자동으로 실행해주는 프로그램입니다. 즉, ```./update.sh```를 해줘서 shell script를 실행해주면 위 4줄의 코드를 순차적으로 자동 실행됩니다. 여러 줄의 코드를 일일이 입력하는 게 번거로울 때 유용합니다. 이제 frontend 디렉토리에 있는 update.sh를 실행해보겠습니다.

```bash
./update.sh
```

permission denied가 뜰 겁니다. 권한 설정을 안 해줘서 그렇습니다. 아래와 같이 권한 설정을 변경합니다.

```bash
chmod 755 update.sh
```

이제 ```./update.sh```를 하면 자동으로 빌드가 되고 빌드 결과물이 web_root에 담길 겁니다.


### Makefile를 활용한 루트 핸들러 빌드

Makefile은 shell script랑 비슷한 개념으로 보면 됩니다. 다만, Makefile은 변경된 사항만 반영해서 빠르게 실행을 해줍니다. 굉장히 많은 소스코드가 있다고 할 때 그 모든 코드를 하나 하나 컴파일 하려면 시간이 꽤 많이 들 것입니다. 변경된 소스코드만 알아서 컴파일 해준다면 훨씬 빠를 겁니다. 이럴 때 Makefile을 사용하는 것입니다. 아래는 Makefile 강좌에서 퍼온 make 유틸의 목적을 설명하는 글입니다. (20년도 더 된 강좌인데 수학의 정석, 성문 영어 같은 느낌이네요..)  

**The purpose of the *make* utility is to determine automatically which pieces of a large program need to be recompiled, and issue the commands to recompile them.** [(Reference1)](https://wiki.kldp.org/KoreanDoc/html/GNU-Make/GNU-Make-1.html)  

 ```npm run serve```에도 Makefile 개념이 있다고 보면 되는데, 처음 ```npm run serve```를 할 땐 시간이 오래 걸리지만 한번 실행된 뒤에 변경 사항을 반영하는 것은 빠르게 처리됩니다.   
<br>
이제, terrace 디렉토리에서 Makefile을 만들어줍니다.

```bash
vi Makefile
```

```makefile
run:
    ./bin/terrace

build:
    go build -x -o ./bin/terrace ./src
    sudo setcap CAP_NET_BIND_SERVICE=+eip ./bin/terrace
```

위 Makefile의 의미는 ```make run``` 을 하면 ```./bin/terrace```가 실행되고, ```make build```를 하면 아래 두 줄이 실행된다는 것입니다. 인자를 아무것도 안주고 ```make```만 하면 맨 위에 있는 ```make run```을 실행합니다. 위 코드를 그대로 복사 붙여넣기 하면 Makefile이 실행 안 될 수도 있습니다. Makefile에서 실행되는 코드는 반드시 TAB을 해줘야하는데 그대로 복사 붙여넣기 하면 TAB이 아니라 띄어쓰기로 인식할 수 있기 때문입니다. 반드시 ./bin/terrace 왼쪽 부분과 build: 아랫줄은 TAB을 해줘야 합니다.   
<br>

```makefile
go build -x -o ./bin/terrace ./src
```

이 부분에서 -x는 build하는 과정에 대한 설명을 자세히 보여달라는 것입니다. -o는 output의 약자입니다. build 결과물인 실행 파일을 ./bin/terrace로 저장해달라는 것이고, ./src는 src 디렉토리에 있는 go 소스코드 (루트 핸들러가 들어 있는 main.go)를 읽어오는 부분입니다. 

즉, src 디렉토리의 main.go를 빌드해서 ./bin/terrace 로 저장하라는 뜻입니다. 여기서는 ```make run```하기 전에 ```make build```부터 해줘야 합니다. 이전 글에서 설명한 것처럼 sudo 권한 없이 ./bin/terrace를 실행하기 위해서는 ```sudo setcap CAP_NET_BIND_SERVICE=+eip ./bin/terrace```을 해줘야 하기 때문입니다.


### 최종 디렉토리 구성

최종적인 Project Directory는 아래와 같습니다.

**\- terrace**

**&nbsp;&nbsp;&nbsp;&nbsp;- bin**

**&nbsp;&nbsp;&nbsp;&nbsp;- src**

**&nbsp;&nbsp;&nbsp;&nbsp;\- frontend**

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\- home**

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\- dist**

**&nbsp;&nbsp;&nbsp;&nbsp;\- web_root**

terrace는 project root이며 Makefile도 있습니다.  
bin에는 루트 핸들러 실행 파일인 terrace가 있습니다.  
src에는 루트 핸들러인 main.go 파일이 있습니다.  
frontend 하위에 home이 있으며, npm 자동 빌드를 위한 update.sh도 있습니다.  
home 하위에는 빌드 결과물이 담기는 dist 디렉토리가 있으며, 앞으로 작업할 프론트 파일들이 담길 것입니다.  

이제 로컬에서 해야할 기본적인 세팅은 끝났습니다. 
<br>

## Reference

[Reference1 (https://wiki.kldp.org/KoreanDoc/html/GNU-Make/GNU-Make.html#toc3)](https://wiki.kldp.org/KoreanDoc/html/GNU-Make/GNU-Make.html#toc3)
