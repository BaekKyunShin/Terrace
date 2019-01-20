#[블로그] 1. 가상환경 설치 및 실행

###가상머신 CentOS 설치

우선, Oracle VM Virtual Machine을 설치한 뒤 실행합니다.

[Reference1](http://ccm3.net/archives/23382) 본 블로그를 참고하여 CentOS를 설치한다. 여러 세팅이 있는데 모두 다 할 필요 없이 아래 사항만 세팅해주면 됩니다.

메모리 크기: 3072MB 정도  
하드 디스크: '지금 새 가상 하드 디스크 만들기'  
하드 디스크 파일 종류: 'VDI'  
물리적 하드 드라이브에 저장: '동적 할당'  
새 가상 하드 디스크 크기: 32.00GB 정도 
를 선택합니다. 

CentOS 설치시  
DATE & TIME: Asia/Seoul timezone  
KEYBOARD: English (US), Korean  
SOFTWARE SELECTION: Minimal Install  
INSTALLATION DESTINATION: Automatic patitioning selected  
로 설정해준 뒤 Installation을 클릭합니다.

CONFIGURATION의 USER SETTINGS에서  
Root 비밀번호 설정 후, CREATE USER에 name과 password를 설정합니다. 여기서 Make this user administrator를 꼭 클릭해줍니다.
<br>

###CentOS 실행

CentOS가 설치되는데 시간이 다소 소요됩니다. 모두 완료되면 Reboot를 클릭합니다.

![CentOS 실행화면](https://s3.ap-northeast-2.amazonaws.com/cdn.bkshin.com/devRecord/1_1.PNG)

로그인이 되면 정상적으로 작동하는 것입니다.
<br>

###Reference

[http://ccm3.net/archives/23382](http://ccm3.net/archives/23382)
