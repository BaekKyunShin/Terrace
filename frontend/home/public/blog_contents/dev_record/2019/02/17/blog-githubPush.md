# BLOG - 11.  Github 연결

지금까지 블로그 기본 뼈때를 만들고 빌드까지 했습니다. 추후에는 AWS를 통해서 블로그를 띄울 겁니다. 그에 앞서 본 챕터에서는 github에 연결하는 방법에 대해 배워볼 것입니다. github 연결법을 이미 알고 계신 분은 다음 챕터로 넘어가셔도 됩니다.  

### **Github**

우선 git은 github을 이용할 것입니다. github에 repository를 하나 생성합니다. terrace 디렉토리에서는 ```.gitignore```에 ```bin```을 추가해줍니다. ```.gitignore```에 있는 디렉토리 혹은 파일은 git의 영향을 받지 않습니다. 이제 git을 만들어줍니다.

```bash
git init
git config --global user.name "bkshin"
git config --global user.email "werooring@gmail.com"
git add -A
git commit
```

 커밋 메시지는 ```firtst commit```이라고 찍습니다.  다만 그 이후 commit은 [(Reference1)](https://www.huskyhoochu.com/issue-based-version-control-101)을 참고해서 작성하면 됩니다. 이론편뿐만 아니라 실전편까지 봐야합니다.

```bash
git remote add origin git@github.com:BaekKyunShin/Terrace_example.git
git push -u origin master
```

이렇게 하면 publickey가 없다고 permission denied가 뜰 겁니다. git@github.com~ 부분이 SSH 주소입니다. Git SSH 공개키를 만들어야 push를 할 수 있습니다.  

```bash
ssh-keygen
```
을 해주고 passphrase 만 두번 입력해줍니다. 맨 처음 나오는 'Enter file in which to save the key'는 무시하고 엔터만 쳐도 됩니다. ```~/.ssh``` 디렉토리에서 id_rsa.pub가 생성된 걸 볼 수 있습니다. 이것이 publickey입니다. [(Reference2)](https://git-scm.com/book/ko/v1/Git-%EC%84%9C%EB%B2%84-SSH-%EA%B3%B5%EA%B0%9C%ED%82%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0)

```bash
cat ~/.ssh/id_rsa.pub
```

를 치면 ssh-rsa로 시작하는 publickey가 나올 것입니다. 이것을 그대로 복사합니다. github 맨 오른쪽 위 메뉴를 클릭하고 settings을 누릅니다. 왼쪽 personal settings에서 SSH and GPG Keys를 누릅니다. New SSH Key를 클릭한 뒤 title을 자유롭게 설정하고 아래 Key에 방금 복사한 publickey 내용을 그대로 붙여넣기 한 뒤 저장합니다.  
publickey를 등록했으니 이제 github으로 push 해봅시다.

```bash
git push -u origin master
```

passphrase를 치면 정상적으로 push가 되는 것을 볼 수 있습니다. 여기서 bin 디렉토리가 push되었다면 잘못된 것입니다. bin은 .gitinore에 추가가 되어있어야 하며 정상적으로 추가되었다면 bin은 push가 안 됩니다.

![github Repository](https://cdn.bkshin.com/devRecord/2019/02/17/11_1.PNG)


## Reference

[Reference1 (https://www.huskyhoochu.com/issue-based-version-control-101)](https://www.huskyhoochu.com/issue-based-version-control-101)  
[Reference2 (https://git-scm.com/book/ko/v1/Git-%EC%84%9C%EB%B2%84-SSH-%EA%B3%B5%EA%B0%9C%ED%82%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0)](https://git-scm.com/book/ko/v1/Git-%EC%84%9C%EB%B2%84-SSH-%EA%B3%B5%EA%B0%9C%ED%82%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0)
