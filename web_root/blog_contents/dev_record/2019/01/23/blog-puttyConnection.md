#BLOG - 4. PuTTY로 가상환경 접속

### 포트포워딩 세팅

앞 글에서 알아본 포트포워딩을 적용하도록 하겠습니다.   
VirtualBox를 켜고 CentOS를 선택한 뒤 설정 - 네트워크 - 고급 - 포트 포워딩 순으로 클릭합니다.  포트포워딩 규칙은 아래와 같이 세팅해줍니다. 게스트 IP는 CentOS를 실행한 뒤 ip a 혹은 ifconfig를 치면 볼 수 있습니다.  

![포트포워딩 규칙](https://cdn.bkshin.com/devRecord/2019/01/23/4_1.PNG)

원래는 호스트 포트를 BLOG 8000, HTTP 8888, SSH 22로 설정했으나, 기존 가상환경은 그대로 둔 채 새로운 가상환경을 구축함에 따라 위와 같이 설정했습니다. 

CentOS를 헤드리스 시작해둡니다.  

### PuTTY 가상환경 원격접속

우선, PuTTY를 설치합니다. PuTTY를 실행한 뒤 Host Name에 127.0.0.1, Port에 22, Saved Sessions는 아무 이름이나 써서 넣습니다. 저는 여러 세팅이 되어있어 bkshin, blog, ec2가 있지만 처음 접속하면 아무 것도 없을 겁니다. Save를 먼저 꼭 누른 뒤 Open을 합니다.  

![PuTTY Configuration](https://cdn.bkshin.com/devRecord/2019/01/23/4_2.PNG)

처음 접속하면 Warning이 뜰텐데 '예'를 클릭하면 됩니다. 

로그인까지 하면 아래와 같이 CentOS로 원격접속이 된 것을 볼 수 있습니다.

![PuTTY 원격접속](https://cdn.bkshin.com/devRecord/2019/01/23/4_3.PNG)


PuTTY의 기본세팅 역시 쉘이 투박하기 때문에 PuTTY 터미널 색상 및 글꼴을 각자 설정해주면 됩니다. 다양한 세팅이 있다보니 구글링을 통해 각자의 환경에 맞게 해주면 됩니다.
