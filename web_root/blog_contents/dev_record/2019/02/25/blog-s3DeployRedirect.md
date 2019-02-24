# BLOG - 14. S3 배포 및 Redirect

지금까지 로컬의 작업물을 EC2로 올리는 방법을 배웠습니다. EC2보다는 S3가 더 저렴하므로 이를 S3로 옮겨보겠습니다.

### **S3 버킷 만들기**

우선, AWS S3 버킷을 만들어야 합니다. AWS S3에서 '버킷 만들기'를 누릅니다.   

- 이름 및 리전  

  버킷 이름: bkshin.com (도메인 이름)  

- 옵션 구성  

  Default 설정  

- 권한 설정  
  4개 체크 모두 해제  



S3 버킷을 만든 뒤 '속성'에 들어가 '정적 웹 호스팅'을 클릭합니다. '이 버킷을 사용하여 웹 사이트를 호스팅합니다.'를 누른 뒤 index.html을 적고 저장합니다.  

```Hello, world!```가 적힌 index.html을 S3에 업로드 합니다. 이때 '권한설정'의 '퍼블릭 권한 관리'에서 '이 객체에 퍼블릭 읽기 액세스 권한을 부여함'을 선택합니다.

### S3를 Cloudfront로 접속하기

S3로 직접 접근하는 것보다 Cloudfront를 통해 S3로 접근하는 것이 더 저렴하기 때문에 Cloudfront를 이용하겠습니다. 우선 AWS Cloudfront에 들어갑니다. 'Create Distribution'을 클릭한 뒤 Web의 Get Started를 누릅니다.  

Origin Domain Name: bkshin.com.s3.amazonaws.com  

Restrict Bucket Access: Yes  

Origin Access Identity: Create a New Identity  

Grant Read Permissions on Bucket: Yes, Update Bucket Policy  

Distribution Settings의 Alternate Domain Names에는 bkshin.com을 입력해줍니다. SSL Certificate에서는 'Request or Import a Certificate with ACM'를 누릅니다. 도메인 이름은 'bkshin.com'으로 하고 다음을 누릅니다. DNS 검증을 클릭한 뒤 '확인 및 요청'을 누르면 '검증 보류'라고 뜰 겁니다. 도메인 왼쪽의 화살표를 클릭한 뒤 'Router 53에서 레코드 생성'을 클릭합니다.   

다시 Cloudfront Distribution Settings로 돌아와서 SSL Certificate에서 Custom SSL Certificate를 클릭합니다. 아래의 URL은 bkshin.com을 선택합니다. Default Root Object에는 index.html을 입력해줍니다. 이제 Create Distribution을 해줍니다.   

이제 Route 53에서 Create Record Set을 해준 뒤 Name은 실제 도메인 (bkshin.com), Type은 A-IPv4 address, Alias: Yes를 누른 뒤 바로 아래에는 Cloudfront distribution에서 ID를 클릭했을 때 나오는 Domain name을 입력합니다. 그 다음 Create을 클릭합니다. (현재 EC2랑 도메인이 연결되어있으면 중복이기 때문에 안됨)   

이제 도메인에 bkshin.com을 치고 들어가면 "Hello, world!"가 보일 겁니다. 이는 아까 S3에 넣어준 index.html 파일이 뜬 것입니다. 지금은 index.html만 들어있지만 web_root 디렉토리 전체를 넣어주어 S3에 블로그를 띄울 것입니다.  





**<참고!>** EC2서버도 살려두기 위해서는 live.bkshin.com은 EC2, 서버, bkshin.com은 S3로 연결하면 됩니다. Route53에서 새로운 Record를 생성하고 (Create Record Set) NAme에 live.bkshin.com으로 설정하고 Alias는 Yes, Value에는 EC2 IP 주소를 넣어주고 저장하면 됩니다. 그럼 현재 상태에서는 live.bkshin.com으로 들어가면 블로그가 뜰 것이고, bkshin.com으로 들어가면 "Hello, world!"가 뜰 것입니다.  또한, www.bkshin.com도 bkshin.com과 같이 추가해주면 좋습니다. bkshin.com과 www.bkshin.com 모두 S3를 통해 웹페이지를 띄웁니다. 이를 위해서는 bkshin.com을 위한 S3 버킷과 www.bkshin.com을 위한 S3 버킷을 각각 만들어야 합니다.  



### AWS IAM 생성

IAM이란 Identity and Access Management의 약자로 AWS에 안전하게 접근하게 해줍니다. AWS 계정을 처음 만들면 메일주소와 비밀번호로 되어있는 루트 사용자가 만들어집니다. 모든 AWS 서비스를 이 루트 사용자로 이용하게 됩니다. AWS 가이드에서는 아주 간단한 작업에서 조차 루트 사용자를 사용하지 말라고 권장합니다. 따라서 IAM을 통해 AWS에 안전하게 접근하도록 할 것입니다. [(Referecne1)](https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/introduction.html)  

우선, AWS IAM 사용자를 추가해줍니다. (사용자 이름 입력, 액세스 유형: 프로그래밍 방식 엑세스 선택, 기존 정책 직접 연결에서 CloudfrontFullAccess와 AmazonS3FullAccess 선택) 사용자를 만들어주면 액세스 키 ID와 비밀 액세스 키가 생성됩니다.  



### Shell Script를 활용한 S3 Deploy

이제, Shell Script를 활용하여 로컬의 작업물을 S3로 자동 Deploy할 것입니다. 우선, Terrace 디렉토리에서 ```deploy_to_S3.sh```를 만든 뒤 아래와 같이 붙여넣습니다.

```bash
# Deploy to S3
s3deploy -bucket bkshin.com -key ******** -secret *********** -region ap-northeast-2 -source web_root -v
# aws s3 cp web_root s3://bkshin.com/ --recursive

# Invalidate Cloudfront
aws cloudfront create-invalidation --distribution-id ******* \
--paths /\*
```

위 코드에서 ```-key```와 ```- secret``` 옆의 \*\*\*\*\* 부분에는 아까 IAM 사용자 추가할 때 만들어준 액세스키 ID와 비밀 액세스 키를 넣습니다. ```--distribution-id``` 에는 AWS Cloudfront에 있는 Distribution ID를 넣어주시면 됩니다.  

**여기서 주의할 점은 deploy_to_S3.sh를 .gitignore에 추가해 github로 push가 되지 않도록 하는 것입니다.** github으로 푸쉬가 되면 액세스 ID와 비밀 키가 commit 이력에 남아서 S3를 삭제하고 다시 만들어줘야할 수도 있습니다.  실수로 deploy_to_S3.sh를 github에 push했는데, AWS에서 친절하게 경고 메일이 왔습니다. 해당 key를 가진 S3를 삭제하고, AWS 비번을 바꾸라고요.. 그렇게 해주니 안내한대로 잘 해줘서 고맙다는 메일까지 왔습니다. **역시 갓아마존..**





이제, temp 디렉토리에 AWS CLI를 설치합니다.

```bash
pip install awscli
```

그 다음, terrace 디렉토리에 s3deploy를 설치해줍니다.

```bash
go get -u -v github.com/bep/s3deploy
```

s3deploy를 사용하기 위해서는 go/src 디렉토리에서 go build를 한 뒤 s3deploy 실행파일을 /usr/local/bin으로 옮겨야 합니다. 이는 s3deploy라는 실행파일을 어디서든 사용하기 위해서 입니다.

```bash
cd
cd go/src/github.com/bep/s3deploy
go build
sudo mv s3deploy /usr/local/bin
```

이제 terrace 디렉토리로 돌아와 ```./deploy_to_S3.sh```를 해주면 S3로 배포가 됩니다. 아까 live.bkshin.com도 설정해주었다면 이는 EC2로 연결된 것이고 bkshin.com은 S3로 연결된 것입니다. www.bkshin.com까지 추가해줬다면 shell script에 www.bkshin.com을 위한 코드도 동일하게 추가해줍니다.


### HTTPS로 Redirect하기

[(Reference2)](https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:621073008195:applications~standard-redirects-for-cloudfront) 본 링크로 들어가서 Deploy를 클릭합니다. 그 다음 맨 아래의 배포를 누릅니다. AWS IAM의 역할에 들어가 serverlessrepo를 누릅니다. 신뢰관계에서 신뢰관계 편집을 누른 뒤 Reference2에 있는 아래 코드를 그대로 붙여넣은 후 저장합니다.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": [
          "lambda.amazonaws.com",
          "edgelambda.amazonaws.com"
        ]
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

Cloudformation에서 serverlessrepo를 클릭한 후 출력에서 값을 그대로 복사합니다. Cloudfront Distribution 선택 후 Behaviors에서 Edit을 누른 뒤 Viewer Protocol Policy에서 Redirect HTTP to HTTPS를 선택합니다. 맨 아래 Lambda Function Associations에서 Viewer Request를 선택한 후 Lambda Function ARN에 방금 복사한 값을 그대로 붙여넣습니다. Yes, Edit을 클릭합니다.  

이제 인터넷 주소창에 bkshin.com을 치면 자동으로 https로 리다이렉션이 됩니다 !!


<br>

## Reference

[Reference1 (https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/introduction.html)](https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/introduction.html)  
[Reference2 (https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:621073008195:applications~standard-redirects-for-cloudfront)](https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:621073008195:applications~standard-redirects-for-cloudfront)
