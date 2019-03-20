# DATA - 1. Anaconda

### Anaconda란?

Anaconda(아나콘다)는 **데이터 사이언스**를 위한 패키지 배포판입니다. Windows, Linux, Mac OS 환경에서 사용가능하며, conda라는 package, environment 매니저를 사용합니다. conda를 이용해서 서로 다른 버전의 파이썬 (python2, python3)이나 서로 다른 패키지 등을 쓰는 독립적인 프로젝트 환경을 만들 수 있습니다. 그렇게 만들어진 환경 안에서 원하는 패키지를 설치, 삭제, 업데이트할 수 있습니다.


### Anaconda 설치

우선, [(Refercence1)](https://www.anaconda.com/download/) 본 링크에서 Anaconda를 다운받습니다.

![Download Anaconda](https://cdn.bkshin.com/devRecord/2019/03/20/DAND1_1.PNG)

python2 말고 python3 버전을 받되, 본인의 환경에 맞는 것을 다운 받습니다. 저는 windows 64-bit 버전을 받았습니다.

<br>

### 프로그램 설명 및 초기 설정

Anaconda를 설치하면 여러 프로그램이 깔릴 겁니다.

1. **Anaconda Navigator**: environment와 packages를 관리하는 GUI입니다. 
2. **Anaconda Prompt**: CLI를 사용할 수 있는 터미널입니다.
3. **Spyder**: IDE 입니다.



Anaconda Prompt를 실행해서 추후 발생할 수 있는 오류를 피하기 위해 아래와 같이 업그레이드를 해줍니다.

```bash
conda upgrade conda
conda upgrade --all
```

사실 ```--all```에는 ```conda```가 포함되어 있지만 일부 환경에서는 오류가 있을 수 있어 위와 같이 해주는 것입니다. 설치 및 업그레이드는 시간이 다소 소요됩니다.



zsh를 사용하고 있고 "conda command not found"가 뜬다면 .zsh_config에 아래 코드를 추가해주면 해결됩니다.

```bash
export PATH="/Users/username/anaconda/vin:$PATH"
```

<br>

### Conda를 활용한 패키지 관리

- 현재 설치되어 있는 패키지 보기

```bash
conda list
```

이 코드는 현재 environment에 설치된 모든 패키지를 나열해줍니다.  



- 패키지 설치

```bash
conda install package_name
```

예를 들어 numpy를 설치하려면 아래와 같이 입력해주면 됩니다.

```bash
conda install numpy
```

패키지를 차례로 나열하면 여러 패키지를 동시에 설치에 설치할 수 있습니다.

```bash
conda install numpy pandas scipy
```

scipy 패키지는 numpy 패키지를 필요로 합니다. 즉, scipy를 사용하기 위해서는 scipy뿐만 아니라 numpy도 설치를 해야한다는 뜻입니다. Conda는 dependency가 있는 패키지를 자동으로 설치해줍니다.

```bash
conda install scipy
```

와 같이 scipy를 설치하면 자동으로 numpy도 설치해줍니다. 즉, 위 코드와 아래 코드는 동일하게 작용합니다.

```bash
conda install scipy numpy
```

아래와 같이 패키지의 버전을 지정해줄 수도 있습니다. 버전 지정을 안하면 가장 최신 버전으로 설치합니다.

```bash
conda install numpy=1.10
```



- 패키지 삭제

```bash
conda remove package_name
```



- 패키지 업그레이드

```bash
conda upgrade package_name
```

현재 설치되어 있는 모든 패키지 업그레이드는 아래와 같이 합니다.

```bash
conda upgrade --all
```

<br>

### Conda를 활용한 가상환경 관리

- 가상환경 생성

```bash
conda create -n environment_name list_of_packages
```

-n 은 name을 뜻합니다. ```environment_name```에 원하는 가상환경 이름을 적어주고 list_of_packages에 해당 가상환경에 설치할 패키지를 적어줍니다.

예를 들면 아래와 같습니다. pandas 패키지가 설치된 my_env라는 이름을 가진 가상환경을 만들어줍니다.

```bash
conda create -n my_env pandas
```



- 가상환경 실행

```bash
conda activate my_env
```



- 가상환경 종료

```bash
# on Windonws
conda deactivate

# on MAC, Linux
source deactivate
```



- 가상환경 삭제

```bash
conda env remove -n env_name
```



- 현재 설치된 가상환경 보기

```bash
conda env list
```



- 가상환경 파일로 내보내기

```bash
conda env export > environment.yaml
```



- 외부의 yaml 파일을 통해 가상환경 만들기

```bash
conda env create -f environment.yaml
```





기본적인 conda 명령어에 대해 알아봤습니다. 그 이외의 명령어는 [conda cheat sheet](https://docs.conda.io/projects/conda/en/latest/user-guide/cheatsheet.html)를참고하시기 바랍니다.  



아래는 Conda에 관한 오해에 대한 아티클입니다. 원문은 굉장히 긴데 큼직한 몇개만 옮겨 적었습니다. 재미삼아 읽어보셔도 좋습니다. :) 


### Conda: Myths and Misconceptions

[(Reference2)](https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/)  

**Myth #1: Conda는 패키지 매니저가 아니라 배포판(distribution)이다?**  

Conda는 패키지 매니저이고, Anaconda는 배포판입니다. Conda가 Anaconda에 패키징되어있긴 합니다만, 둘은 서로 다른 목적을 가진 별개의 것입니다.  

  

**Myth #2: Conda는 Python 패키지 매니저다?  **

Conda는 범용적인 패키지 매니저입니다. Python 패키지들이 주로 사용되긴 하지만 모든 언어에서 사용가능한 패키지 매니저입니다.  

  

**Myth #3: Conda와 pip는 직접적인 경쟁자다?**  

pip (**P**ip **I**nstalls **P**ackages)는 Python의 공식 패키지 매니저입니다. Conda와 pip는 서로 다른 목적을 가졌습니다. 다만, <u>독립된 환경에 Python 패키지를 설치하는데에 있어서만</u> 경쟁자입니다. 말이 좀 이상하지만, 독립된 환경에서 Python 패키지를 설치하는데에는 Conda와 pip 둘 다 쓸 수 있다는 뜻입니다. 구분을 하자면, pip는 어떠한 환경에서나 Python 패키지를 설치할 수 있고 (only Python packages within *any* environment), conda는 conda 환경에서 어떠한 패키지나 설치할 수 있습니다. (*any* package within conda environment)  

   

**Myth #4: Conda는 가상환경에서 작동하지 않는다?  **

몇개의 Conda 패키지는 가상환경에서 설치할 수 있습니다. 다만 Conda 고유의 환경 매니저를 사용하는 것이 더 좋습니다.  

  

**Myth #5: Conda는 open source가 아니다?**   

Conda는 100% open source입니다. Anaconda도 거의 open source입니다.  

  

**Myth #6: Conda 패키지 자체는 closed source이다?**  

Conda 채널은 완전히 open되어 있지는 않습니다. Conda 패키지와 배포판을 완전 오픈하기 위한 커뮤니티를 구성하고자 노력하고 있습니다.  

## Reference
[Reference1 (https://www.udacity.com/)](https://www.udacity.com/)  
[Reference2 (https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/)](https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/)  
[conda cheat sheet (https://docs.conda.io/projects/conda/en/latest/user-guide/cheatsheet.html)](https://docs.conda.io/projects/conda/en/latest/user-guide/cheatsheet.html)
