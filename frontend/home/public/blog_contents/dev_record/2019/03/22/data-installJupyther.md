# DATA - 2. Jupyter Notebooks

파이썬으로 데이터분석하는 사람들에게 주피터는 너무나 유명해서 자세한 설명은 생략하겠습니다. Jupyter는 **Ju**lia, **Pyt**hon, **R**의 약자입니다. 주피터 노트북은 text document, code, 수식, 그래프, 코드 결과를 하나의 파일 (.ipynb)에 담을 수 있는 장점이 있습니다. 기존 방식대로라면 text document는 word 파일에, code는 code editor에 담아야 했고, 그래프 등의 시각화자료는 별도의 창에서 볼 수 있었습니다. [(Reference1)](https://github.com/mcleonard/blog_posts/blob/master/body_fat_percentage.ipynb)을 보시면 이해가 쉽게 갈 겁니다.  

주피터 노트북의 동작원리는 아래와 같습니다. 브라우저에 코드를 입력해주면 주피터 서버에서 처리를 해주고 결과 값을 브라우저에 렌더링해줍니다.

![Jupyter 동작원리](https://cdn.bkshin.com/devRecord/2019/03/22/DAND2_1.PNG)



### Jupyter Notebook 설치 및 실행

```bash
conda install jupyter notebook
```

위 코드로 주피터 노트북을 설치할 수 있습니다. 아래 코드는 방금 설치한 주피터 노트북을 실행합니다.

```bash
jupyter notebook
```

기본적으로 주소를 보면 localhost:8888로 되어 있을 겁니다. 저는 localhost:8888을 사용하고 있어 localhost:8889라고 뜹니다. Files에는 컴퓨터 환경에 따라 여러 파일 및 폴더가 보일 수 있습니다.

![Jupyter notebook 실행화면](https://cdn.bkshin.com/devRecord/2019/03/22/DAND2_2.PNG) 


주피터 노트북에서 Conda를 사용하기 위해 prompt에 notebook conda를 설치합니다.

```bash
conda install nb_conda
```

nb_conda 설치 후 다시 주피터 노트북을 실행해보면 Files, Running, Clusters 이외에 Conda 툴바가 나타납니다. 주피터를 통해 Conda 환경을 관리할 수 있는 메뉴입니다. 주피터의 Conda 메뉴에서 가상환경을 만들고 패키지를 설치하고 업그레이드하고 가상환경을 내보내기 등을 할 수 있습니다. 



### Jupyter notebook 사용법

주피터 노트북의 툴바를 이것 저것 써보면 어떤 기능을 하는지 쉽게 알 수 있습니다. 오른쪽 위에 조그만 동그라미가 있습니다. 코드가 실행 중일 때는 까만 동그라미로 바뀝니다. 대부분의 코드는 금방 실행이 되기 때문에 까만 동그라미를 오래 보기 힘듭니다. 시간이 오래걸리는 코드에서는 까만 동그라미를 볼 수 있기 때문에 동그라미를 통해 코드가 실행중인지 아닌지를 알 수 있습니다. Command palette (오른쪽 조그마한 키보드 모양)에서는 다양한 command를 검색하고 실행할 수 있습니다. 보다 자세한 사용법은 [(Reference2)](https://jupyter-notebook.readthedocs.io/en/latest/examples/Notebook/Notebook%20Basics.html#The-Notebook-dashboard)를 참고하시기 바랍니다.



### Markdown

주피터 노트북의 cell에는 Markdown 기능이 있습니다. Markdown 문법을 정말 몇개 없어서 쉽게 익힐 수 있습니다. [(Reference3)](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)



### LaTeX

데이터 분석을 하다보면 수식을 사용해야할 때가 많습니다. 주피터 노트북에서는 LaTeX를 이용해 쉽게 수식을 표현할 수 있습니다. [(Reference4)](https://www.latex-tutorial.com/)

```
\begin{align}
f(x) &= x^2\\
f'(x) &= 2x\\
F(x) &= \int f(x)dx\\
F(x) &= \frac{1}{3}x^3
\end{align}
```

![LaTeX Examples](https://cdn.bkshin.com/devRecord/2019/03/22/DAND2_6.PNG) 


### Magic keywords

매직키워드는 주피터 노트북 cell에서 사용할 수 있는 특별한 커맨드입니다. %혹은 %%로 시작합니다. (%는 해당 line에서만 적용되는 line magics, %%는 cell 전체에서 적용되는 cell magics입니다.)

```%timeit``` 은 해당 라인의 코드가 실행되는데 걸리는 시간을 계산해줍니다. (아래 예시 참고)

![%timeit Examples](https://cdn.bkshin.com/devRecord/2019/03/22/DAND2_3.png) 
```%%timeit```은 cell 전체의 코드가 실행되는데 걸리는 시간을 계산해줍니다.

![%%timeit Examples](https://cdn.bkshin.com/devRecord/2019/03/22/DAND2_4.png) 



아래의 Magic Keyword를 쓰면 matplotlib으로 그래프를 그릴 때 고화질로 그려줍니다.

![retina Example](https://cdn.bkshin.com/devRecord/2019/03/22/DAND2_5.png) 

이 Magic Keyword를 통해 디버거를 사용할 수 있습니다. [(Reference5)](https://docs.python.org/3/library/pdb.html)

```python
%pdb
```



### 다른 파일로 Converting하기

주피터 노트북은 JSON파일입니다. JSON파일을 다른 파일로 변환할 수 있듯이 ```nbconvert```를 활용하여 노트북을 다른 파일로 쉽게 변경할 수 있습니다. 아래 코드는 주피터 노트북 파일을 HTML로 변환하는 코드입니다. [(Reference6)](https://nbconvert.readthedocs.io/en/latest/usage.html)

```bash
jupyter nbconvert --to html notebook.ipynb
```

아래 코드는 notebook 파일을 slide로 변환해줍니다. 이는 주피터 노트북에서 View - Cell Toolbar - Slideshow를 누르는 것과 같은 기능입니다.

```bash
jupyter nbconvert notebook.ipynb --to slides
```



## Reference

[Reference1 (https://github.com/mcleonard/blog_posts/blob/master/body_fat_percentage.ipynb)](https://www.udacity.com/)  
[Reference2 (https://jupyter-notebook.readthedocs.io/en/latest/examples/Notebook/Notebook%20Basics.html#The-Notebook-dashboard)](https://jupyter-notebook.readthedocs.io/en/latest/examples/Notebook/Notebook%20Basics.html#The-Notebook-dashboard)  
[Reference3 (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)  
[Reference4 (https://www.latex-tutorial.com/)](https://www.latex-tutorial.com/)  
[Reference5 (https://docs.python.org/3/library/pdb.html)](https://docs.python.org/3/library/pdb.html)  
[Reference6 (https://nbconvert.readthedocs.io/en/latest/usage.html)](https://nbconvert.readthedocs.io/en/latest/usage.html)  
