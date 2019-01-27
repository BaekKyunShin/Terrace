# BLOG - 5. 개발환경세팅 I

이제 개발환경세팅을 위한 각 종 패키지를 설치하겠습니다.



### **ZSH 설치**

Z Shell (zsh)는 기본 터미널보다 조금 더 예쁘고 사용하기 좋은 쉘이라고 보면 됩니다. home directory에서 아래 커맨드를 입력해주면 설치가 됩니다.

```bash
sudo yum -y install zsh
```

yum은 레드헷 (Red Hat/CentOs/Fedora) 계열에서 사용할 수 있는 자동설치 도구입니다. [(Reference1)](https://conory.com/blog/42596)



### Wget설치

Wget은 웹 서버로부터 콘텐츠를 가져오는 프로그램을 뜻합니다. 월드 와이드 웹(www)과 get의 합성어이며, HTTP, HTTPS, FTP 프로토콜을 통해 내려받기를 지원합니다. [(Reference2)](https://ko.wikipedia.org/wiki/Wget)

```bash
sudo yum -y install wget
```



### zsh-completions 설치

```bash
cd /etc/yum.repos.d/
```

위 경로에는 yum 저장소 파일이 있습니다. 저장소 파일에는 저장소에 접속할 저장소 URL 정보가 담겨있는데 이 파일에서 찾은 저장소 URL에 접속해 yum이 패키지를 다운로드하도록 되어있습니다. 저장소 파일은 **파일이름.repo** 형식으로 되어있는데 한 저장소 파일에 여러 저장소 정보가 있을 수 있다는 것이 특징입니다. [(Reference1)](https://conory.com/blog/42596)

아래 커맨드를 입력해서 zsh-completions 설치는 위한 repo를 추가해준 뒤 zsh-completions를 설치합니다. 모두 yum.repos.d에서 합니다.

```bash
sudo wget https://download.opensuse.org/repositories/shells:zsh-users:zsh-completions/CentOS_7/shells:zsh-users:zsh-completions.repo
```

```bash
sudo yum -y install zsh-completions
```



### git 설치

home directory로 경로를 변경한 뒤 git을 설치해줍니다.

```bash
cd
sudo yum -y install git
```



### oh my zsh 설치

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

![OH MY ZSH 실행화면](https://cdn.bkshin.com/devRecord/2019/01/24/5_1.PNG)

이렇게 보이면 정상적으로 설치된 겁니다.



### zsh-syntax-highlighting 설치

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

zsh-syntax-highlighting은 아래와 같이 syntax를 구분하기 쉽게 색깔을 넣어주는 툴입니다.

```bash
echo 'Hello, world!'
```

```bash
echo 'Hello, world!'
```



### zsh-autosuggestions 설치

```bash
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

autosuggestion은 터미널 창에서 내가 입력했던 명령어를 보여주는 툴입니다. 

.zshrc에 plugins를 아래와 같이 저장해줍니다.

```bash
vi ~/.zshrc
```

![.zshrc](https://cdn.bkshin.com/devRecord/2019/01/24/5_2.PNG)

```bash
source ~/.zshrc
```

### epel-release 설치

epel (Extra Packages for Enterprise Linux)이란 엔터프라이즈 리눅스를 위한 추가 패키지를 뜻합니다. [Reference3](https://zetawiki.com/wiki/YUM_epel_%EC%A0%80%EC%9E%A5%EC%86%8C_%EC%B6%94%EA%B0%80)

```bash
sudo yum -y install epel-release
```



### pure 설치

```bash
git clone https://github.com/sindresorhus/pure
```

pure는 터미널을 더 예쁘게 만들어주는 테마입니다. (특히, git branch를 사용할 때)

```bash
cd /usr/share/zsh/site-functions
sudo cp ~/pure/pure.zsh prompt_pure_setup
sudo cp ~/pure/async.zsh async
```

(cd 후 home directory에서)

```bash
vi ~/.zshrc
```

(.zshrc에 맨 하단에 아래 코드 입력 후 저장)

```bash
autoload -U promptinit; promptinit
prompt pure
```

```bash
source ~/.zshrc
```

<br>

### Reference

[Reference1 (https://conory.com/blog/42596)](https://conory.com/blog/42596)  
[Reference2 (https://ko.wikipedia.org/wiki/Wget)](https://ko.wikipedia.org/wiki/Wget)  
[Reference3 (https://zetawiki.com/wiki/YUM_epel_%EC%A0%80%EC%9E%A5%EC%86%8C_%EC%B6%94%EA%B0%80)](https://zetawiki.com/wiki/YUM_epel_%EC%A0%80%EC%9E%A5%EC%86%8C_%EC%B6%94%EA%B0%80)  
asciinema 참고: [https://asciinema.org/a/VxmATX3owRxhSOcafHpPr4X6S](https://asciinema.org/a/VxmATX3owRxhSOcafHpPr4X6S)
