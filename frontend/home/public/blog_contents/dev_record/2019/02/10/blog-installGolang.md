# BLOG - 7. Go 언어 설치

다른 언어를 사용해도 되지만 본 프로젝트에서는 Go 언어를 사용할 것입니다. Go 언어 설치를 위해서는 home directory에서

```bash
mkdir temp
cd temp
sudo yum -y install wget
wget https://dl.google.com/go/go1.11.4.linux-amd64.tar.gz
```

wget으로 받아오는 go 버전은 계속 업그레이드가 될 수 있으므로 최신버전으로 설치합니다. golang 홈페이지에 들어가면 아래와 같이 Linux 최신버전을 볼 수 있습니다.



![golang 메인 홈페이지](https://cdn.bkshin.com/devRecord/2019/02/10/7_1.PNG)



go를 다운받을 때 확장자가 tar.gz입니다. 이는 압축 확장자이며, 압축을 풀어 사용할 수 있습니다. 다운받은 go 아카이브의 압축을 아래와 같이 풉니다.  [(Reference1)](http://sarghis.com/blog/468/) temp directory에서

```bash
tar -xzvf go1.11.4.linux-amd64.tar.gz
```

```bash
sudo mv go /usr/local/
```

```bash
vi ~/.zshrc
```

아래처럼, 환경변수 $PATH를 추가시킵니다. 환경변수를 추가시킴으로써 go를 어떤 디렉토리에서도 실행할 수 있게 합니다.

```bash
export PATH=/usr/local/go/bin:$PATH
```

```bash
source ~/.zshrc
```

\$PATH는 환경 변수를 뜻합니다. 터미널에서 프로그램 명령어를 입력하면 \$PATH 환경 변수에 저장된 디렉토리 목록에서 명령을 찾습니다. \$PATH에 현재 나열된 목록을 확인하려면 아래와 같이 입력하면 됩니다.

```bash
echo $PATH
```

그러면 아래와 같이 콜론으로 구분된 디렉토리 목록이 반환됩니다.

```bash
/usr/local/go/bin:/usr/local/bin:/usr/bin:/home/bkshin/bin:/usr/local/sbin:/usr/sbin
```

위에서 go 디렉토리도 추가했기 때문에 /usr/local/go/bin도 잘 추가된 것을 볼 수 있습니다.  [(Reference2)](https://askubuntu.com/questions/551990/what-does-path-mean) 이제 아무 디렉토리에서나 ```go```를 입력해주면 go가 잘 작동하는 할 것입니다.  

## Reference

[Reference1 (http://sarghis.com/blog/468/)](http://sarghis.com/blog/468/)  
[Reference2 (https://askubuntu.com/questions/551990/what-does-path-mean)](https://askubuntu.com/questions/551990/what-does-path-mean)  
asciinema 참고: [https://asciinema.org/a/vQtDdhwM4Yp2lEaaEMETVcS1K](https://asciinema.org/a/vQtDdhwM4Yp2lEaaEMETVcS1K)


