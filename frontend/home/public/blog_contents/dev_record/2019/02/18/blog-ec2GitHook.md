# BLOG - 12. EC2 git Hook 설정

### **AWS EC2 인스턴스 생성**

블로그 서비스를 구현하기 위해서는 서버가 필요합니다. 여기서는 AWS EC2를 활용할 것입니다. AWS EC2가 무엇인지는 본 링크를 참고하시기 바랍니다. [(Reference1)](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/concepts.html) 쉽게 말하자면 EC2는 가상의 컴퓨팅 파워를 제공합니다. 어떤 프로그램을 돌리기 위해서는 컴퓨터가 필요합니다. (*당연한 말이지만..*)  언제 어디서든 블로그에 접속하기 위해서는 24시간 돌아가는 컴퓨터 (서버)가 필요하며, 이 컴퓨터(서버)에 블로그 서비스가 구축되어 있어야 합니다. 이를 위해  물리적인 서버 컴퓨터를 활용할 수도 있지만 비쌉니다. 저렴한 가격에 물리적인 제약없이도 컴퓨팅 파워를 제공받을 수 있는 곳이 바로 AWS입니다. AWS에는 다양한 서비스가 있지만 그 중 EC2를 활용할 것입니다. (추후에는 S3도 사용할 예정입니다.)   

우선, aws.amazon.com에 접속해 AWS 계정을 생성한 뒤 EC2 인스턴스를 생성합니다. 이때 리전은 서울로 설정해야합니다. 인스턴스 생성시 아래 사항 순으로 선택합니다.  

1. AMI선택: Amazon Linux Amazon Linux 2 AMI (HVM), SSD Volume Type  
2. 인스턴스 유형 선택: t2 micro (프리 티어 사용 가능)  
3. (인스턴스 구성 ~ 태그 추가까지는 그냥 넘어가고)  
4. 보안 그룹 구성: 규칙 추가를 눌러 HTTP, HTTPS, SSH를 추가해줍니다. (HTTP 포트는 80, 소스는 default 값인 0.0.0.0/0, ::/0, HTTPS 포트는 443, 소스는 default 값인 0.0.0.0/0, ::/0, SSH 포트는 22, 소스는 default 값인 0.0.0.0/0, ::/0)  
5. 새 키 페어 생성 및 키 페어 다운로드 후 인스턴스 시작을 합니다. (키 페이 이름은 알아서 정하면 되고, 저는 temp.pem으로 생성했습니다.)



### PuTTY로 EC2 인스턴스에 접속

.ssh 디렉토리에 키페어를 저장해두고 그 키페어를 이용해서 EC2 인스턴스에 접속할 것입니다. 홈 디렉토리에서

```bash
chmod 700 .ssh
cd .ssh
v temp.pem # 각자의 키페어 이름으로
```

temp.pem에 아까 다운받았던 키페어를 그대로 복사 붙여넣기 합니다. 내 PC에 있는 temp.pem을 그냥 열면 열리지 않기 때문에 Visual Studio Code나 메모장 등으로 열어서 전체를 복사 붙여넣기 하면 됩니다. 키페어는 ```-----BEGIN RSA PRIVATE KEY-----``` 로 시작하는 부분부터 끝까지 전체를 그대로 복사해야합니다. 한글자라도 틀리거나 스페이스라도 틀리면 인식을 못합니다.  

키페어의 권한도 변경합니다.

```bash
chmod 400 temp.pem
```

다시 홈 디렉토리로 가서 ec2로 접속을 합니다.

```bash
ssh ec2-user@13.125.232.34 -i ~/.ssh/temp.pem
```

@뒤의 IP 주소는 EC2인스턴스 창 하단에 IPv4 퍼블릭 IP에서 볼 수 있습니다. '내가 만든 AWS EC2 인스턴스 IP에 ssh로 접속하는데 키페어는 temp.pem을 사용하겠다'라는 뜻입니다.

![AWS EC2 접속](https://cdn.bkshin.com/devRecord/2019/02/18/12_1.PNG)

이런 화면이 뜨면 정상적으로 접속이 된 겁니다.


### EC2 git 계정 생성

AWS EC2 git 계정을 생성해보겠습니다. ``useradd``를 통해 새로운 계정을 생성해줄 수 있습니다. [(Reference2)]( https://rootblog.tistory.com/2)

```bash
sudo useradd -m -s /usr/bin/git-shell git
sudo vi /etc/sudoers
```

sudoers에 NOPASSWD를 추가해줍니다. 이는 패스워드 없이 sudo를 쓸 수 있도록 합니다.

```bash
git ALL=(ALL) NOPASSWD: ALL
```

```bash
sudo -u git bash
```

위 명령어는 bash로 git 계정에 들어가겠다는 뜻입니다. NOPASSWD 설정을 해줬기 때문에 패스워드 없이도 sudo가 작동합니다.  

그 다음, EC2 루트 계정에 있는 authorized_keys를 git 계정으로 옮깁니다. 

```bash
cd
mkdir .ssh
chmod 700 .ssh
cd .ssh
sudo cp /home/ec2-user/.ssh/authorized_keys .
```



### Git Hook 설정

이제 Git hook을 설정해줄 것입니다.  Git hook은 Git 으로 어떤 이벤트가 push되면 특정 스크립트가 실행되도록 합니다. [(Reference3)](https://git-scm.com/book/ko/v1/Git%EB%A7%9E%EC%B6%A4-Git-%ED%9B%85)

```bash
ls
cd ..
mkdir terrace_hook
cd terrace_hook/
# git 설치
sudo yum -y install git
# 워킹 디렉토리가 없는 빈 저장소
git init --bare
ls -al
cd hooks
```

```git init --bare```은 워킹 디렉토리가 없는 빈 저장소를 만듭니다. [(Reference4)](https://git-scm.com/book/ko/v1/Git-%EC%84%9C%EB%B2%84-%EC%84%9C%EB%B2%84%EC%97%90-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0) hooks 디렉토리를 보면 hook과 관련된 각종 샘플을 볼 수 있습니다. 

```bash
touch post-receive
# post-receive에 실행 권한 추가
chomod +x post-receive
ls -al
vi post-receive
```

post-receive란 git push 후에 자동으로 실행되는 스크립트를 의미합니다. 아래 코드를 그대로 복사 붙여넣기 합니다.

```bash
# Application Name:
export DEPLOY_APP_NAME=`whoami`

# This is the root deploy dir.
export DEPLOY_ROOT="${HOME}/terrace_deploy"

# When receiving a new git push, the received branch gets compared to this one.
# If you do not need this, just add a comment
export DEPLOY_ALLOWED_BRANCH="master"

# You could use this to do a backup before updating to be able to do a quick rollback.
# If you need this just delete the comment and modify to your needs
#PRE_UPDATE_CMD='cd ${DEPLOY_ROOT} && backup.sh'

# Use this to do update tasks and maybe service restarts
# If you need this just delete the comment and modify to your needs
POST_UPDATE_CMD='cd ${DEPLOY_ROOT} && make update'

PROJECT_NAME='terrace'
RESTART_CMD='sudo systemctl restart "${PROJECT_NAME}.service" && sudo systemctl status "${PROJECT_NAME}.service"'

###########################################################################################

export GIT_DIR="$(cd $(dirname $(dirname $0));pwd)"
export GIT_WORK_TREE="${DEPLOY_ROOT}"
IP="$(ip addr show eth0 | grep 'inet ' | cut -f2 | awk '{ print $2}')"

echo "githook: $(date): Welcome to '$(hostname -f)' (${IP})"
echo

# Make sure directory exists. Maybe its deployed for the first time.
mkdir -p "${DEPLOY_ROOT}"

# Loop, because it is possible to push more than one branch at a time. (git push --all)
while read oldrev newrev refname
do

    export DEPLOY_BRANCH=$(git rev-parse --symbolic --abbrev-ref $refname)
    export DEPLOY_OLDREV="$oldrev"
    export DEPLOY_NEWREV="$newrev"
    export DEPLOY_REFNAME="$refname"

    if [ "$DEPLOY_NEWREV" = "0000000000000000000000000000000000000000" ]; then
        echo "githook: This ref has been deleted"
        exit 1
    fi

    if [ ! -z "${DEPLOY_ALLOWED_BRANCH}" ]; then
        if [ "${DEPLOY_ALLOWED_BRANCH}" != "$DEPLOY_BRANCH" ]; then
            echo "githook: Branch '$DEPLOY_BRANCH' of '${DEPLOY_APP_NAME}' application will not be deployed. Exiting."
            exit 1
        fi
    fi

    if [ ! -z "${PRE_UPDATE_CMD}" ]; then
       echo
       echo "githook: PRE UPDATE (CMD: '${PRE_UPDATE_CMD}'):"
       eval $PRE_UPDATE_CMD || exit 1
    fi

    # Make sure GIT_DIR and GIT_WORK_TREE is correctly set and 'export'ed. Otherwhise
    # these two environment variables could also be passed as parameters to the git cli
    echo "githook: I will deploy '${DEPLOY_BRANCH}' branch of the '${DEPLOY_APP_NAME}' project to '${DEPLOY_ROOT}'"
    git checkout -f "${DEPLOY_BRANCH}" || exit 1
    git reset --hard "$DEPLOY_NEWREV" || exit 1

    if [ ! -z "${POST_UPDATE_CMD}" ]; then
       echo
       echo "githook: POST UPDATE (CMD: '${POST_UPDATE_CMD}'):"
       eval $POST_UPDATE_CMD || exit 1
    fi

    if [ ! -z "${RESTART_CMD}" ]; then
       echo
       echo "githook: RESTART UPDATE (CMD: '${RESTART_CMD}'):"
       eval $RESTART_CMD || exit 1
    fi

done

echo
echo "githook: $(date): See you soon at '$(hostname -f)' (${IP})"
exit 0
```

위 코드를 저장한 후에 bash 창에서 아래와 같이 로그아웃해 로컬 계정으로 갑니다.

```bash
exit
logout
# 로컬 계정에서
cd .ssh
v config
```

config 파일에 아래 코드를 넣어줍니다.

```bash
Host 13.125.232.34
	HostName 13.125.232.34
		IdentityFile ~/.ssh/temp.pem
```

IP 주소 및 키페어는 개별 EC2 IP 및 키페어를 넣어주면 됩니다. 그 다음 권한을변경해줍니다.

```bash
chmod 600 config
```

이제는 ```ssh ec2-user@13.125.232.34```만 해도 EC2로 접속이 됩니다. 설정해주기 전에는 ```ssh ec2-user@13.125.232.34 -i ~/.ssh/temp.pem```을 통해 접속을 했는데 훨씬 간단해졌습니다.  


<br>

## Reference

[Reference1 (https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/concepts.html)](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/concepts.html)  
[Reference2 (https://rootblog.tistory.com/2)](https://rootblog.tistory.com/2)  
[Reference3 (https://git-scm.com/book/ko/v1/Git%EB%A7%9E%EC%B6%A4-Git-%ED%9B%85)](https://git-scm.com/book/ko/v1/Git%EB%A7%9E%EC%B6%A4-Git-%ED%9B%85)  
[Reference4 (https://git-scm.com/book/ko/v1/Git-%EC%84%9C%EB%B2%84-%EC%84%9C%EB%B2%84%EC%97%90-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)](https://git-scm.com/book/ko/v1/Git-%EC%84%9C%EB%B2%84-%EC%84%9C%EB%B2%84%EC%97%90-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
