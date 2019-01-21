#BLOG -  2. 네트워크 연결 및 커널 

### Network 연결 세팅

Network Manager를 열기 위해 터미널 커맨드로 "nmtui"를 친다음, "Edit a connection"을 선택합니다. "<Edit...>"을 선택한 뒤 IPv4 CONFIGURATION은 "Automatic", Automatically connect는 체크를 한 뒤 OK를 누릅니다. ESC를 누른 뒤 ```service network restart``` 를 쳐서 네트워크 재시작을 하면 IP가 할당됩니다. 

이는 매번 접속시 Network를 수동으로 연결해줘야하는 불편함을 없앨 수 있습니다. Reference1 참고하면 그림과 함께 볼 수 있음. [(Reference1)](https://lintut.com/how-to-setup-network-after-rhelcentos-7-minimal-installation/)


### IPv4 vs IPv6

위에서 IPv4가 나와서 IPv4와 IPv6에 대해 잠깐 짚고 넘어가겠습니다. IP(Internet Protocol)이란 네트워크를 통해 컴퓨터와 컴퓨터가 통신할 수 있도록 만들어 놓은 고유의 주소라고 보시면 됩니다. IP에는 두 가지 Version이 있습니다. IPv4(Internet Protocol version 4)와 IPv6(Internet Protocol version 6)입니다. IPv4는 32비트로 구성되어 있습니다. 윈도우 사용자라면 cmd창을 켜서 ```ipconfig``` 라고 쳐봅시다. IPv4주소가 나올 겁니다. xxx.xxx.xxx.xxx 과 같이 구성되어 있습니다. 

xxx는 0~255까지의 숫자입니다. 즉, 2^8개의 숫자가 올 수 있습니다. 2^8이 총 4개이므로 총 2^32개(약 40억개)가 존재할 수 있습니다. 전 세계 인구가 이보다 많고 한 사람이 하나 이상의 IP를 사용할 수 있기 때문에 진작에 고갈이 되었습니다. 이를 해결하기 위해 128비트로 구성되어 있는 IPv6가 나온 것입니다. [(Reference2)](https://www.webopedia.com/DidYouKnow/Internet/ipv6_ipv4_difference.html)


### 커널(Kernel) 설치

VirtualBox의 CentOS를 실행한 뒤 커맨드 창에 아래 명령어를 입력합니다.

```bash
sudo yum -y install gcc make perl kernel-devel
sudo yum -y install kernel-devel-3.10.0-862.el7.x86_64
```

```3.10.0-862.el7.x86_64``` 이 부분은 커널 버전 및 각자의 OS에 따라 넣어주면 됩니다.



### 커널이란?

커널은 하드웨어(CPU, 메모리, I/O)를 제어해주는 역할을 합니다. 사용자가 쉘(Shell)이라는 Command line Interface(CLI)를 통해 명령어를 입력하면 이를 커널이 받아서 하드웨어를 제어해주는 것입니다. [(Reference3)](https://futurecreator.github.io/2018/11/09/it-infrastructure-basics/?fbclid=IwAR1DO7rSphiqUohnfrdVEY7yyqBISkTHfH-Lfu4maR3ubLHxONNZ0GCmfuE)
<br>

### Reference

[Reference1 (https://lintut.com/how-to-setup-network-after-rhelcentos-7-minimal-installation/)](https://lintut.com/how-to-setup-network-after-rhelcentos-7-minimal-installation/)  
[Reference2 (https://www.webopedia.com/DidYouKnow/Internet/ipv6_ipv4_difference.html)](https://www.webopedia.com/DidYouKnow/Internet/ipv6_ipv4_difference.html)  
[Reference3 (https://futurecreator.github.io/2018/11/09/it-infrastructure-basics/?fbclid=IwAR1DO7rSphiqUohnfrdVEY7yyqBISkTHfH-Lfu4maR3ubLHxONNZ0GCmfuE)](https://futurecreator.github.io/2018/11/09/it-infrastructure-basics/?fbclid=IwAR1DO7rSphiqUohnfrdVEY7yyqBISkTHfH-Lfu4maR3ubLHxONNZ0GCmfuE)
