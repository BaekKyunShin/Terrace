#BLOG - 1. 가상환경 설치 및 실행

바닥부터 시작해서 개인 블로그를 띄우는 전 과정을 차근차근 정리하려고 합니다. 이 블로깅 프로젝트의 모든 건 명재 선생님의 지도가 있었기에 가능했습니다. 저는 웹에 대한 지식이 전무했습니다. 그렇기에 알아가는 과정을 하나 하나 기록했고, 저 같이 바닥부터 시작해서 블로그를 만들고자하는 분들에게 조금이나마 도움이 되었으면 합니다. 잘못된 점이 있다면 가감없이 피드백해주시기 바랍니다.  
<br>

###가상머신 CentOS 설치

우선, Oracle VM Virtual Machine을 설치한 뒤 실행합니다.

[(Reference1)](http://ccm3.net/archives/23382) 본 블로그를 참고하여 CentOS를 설치한다. 여러 세팅이 있는데 모두 다 할 필요 없이 아래 사항만 세팅해주면 됩니다.

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

CentOS를 설치하는데만 시간이 다소 걸립니다. 중간에 잘못하면 삭제 후 다시 설치해야하는 **불상사**가 발생할 수 있으니 차근차근 하시기를 권장합니다.
<br>

###CentOS 실행

CentOS가 설치가 모두 완료되면 Reboot를 클릭합니다.   

![CentOS 실행 화면](https://cdn.bkshin.com/devRecord/2019/01/20/1_1.PNG)

로그인이 되면 위 그림과 같이 정상적으로 작동하는 것을 볼 수 있습니다.
<br>

###Reference
[Reference1 (http://ccm3.net/archives/23382)](http://ccm3.net/archives/23382)
