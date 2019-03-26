# DATA - 3. Data Analysis Process

데이터 분석 프로세스는 아래와 같이 총 5단계로 진행됩니다.  

Ask Questions - Wrangle Data (gather, access, clean) - Perform EDA (Exploratory Data Analysis) - Draw conclusions (or even make predictions) - Communicate your results  

  

1. **Ask Questions**  
   주어진 데이터를 통해 어떤 분석을 할 수 있을지 질문해보는 단계입니다.  


2. **Wrangle Data (gather, access, clean)**  
   데이터를 수집하고, 데이터에 접근하고, 데이터 전처리를 하는 단계입니다. 데이터를 수집할 수 있는 방법은 여러가지가 있습니다. 웹 상에서 파일로 다운을 받거나, API를 통해 받아오거나, Web Scraping을 통해 가져오거나, 자체 DB에 저장된 파일을 SQL 등을 통해 받아올 수 있습니다. 데이터를 수집했으면 접근을 해야합니다. CSV 파일 등으로 열어볼 수 있겠죠. 데이터에 접근해보면 이상한 값들이 많이 있을 겁니다. Null 인 값, Type이 맞지 않는 값, 중복된 값 등... 이런 이상한 값들을 클리닝하는 작업이 필요합니다. Null 값은 평균 값으로 대체를 한다던지, 필요 없이 중복된 값은 제거한다던지, Type을 서로 맞춘다던지 해서요.  
   물론 실제 현업에서는 이 클리닝 작업, 전처리 작업이 가장 복잡하다고 합니다. DAND 과정에서는 기본적으로 CSV 형태의 데이터를 클리닝하지만, 실제 현업에서는 CSV 형태로 담길 수 없을 정도로 더러운(?) 값들이 많이 있을 겁니다. 그 데이터를 CSV값에 잘 담아내고도 또 여러차례 손을 봐야겠죠. 어쨋든 본 과정은 기본 과정이므로 아주 아주 아주 간단한 형태의 클리닝 작업만 하는 것 같습니다. 


3. **Perform EDA (Exploratory Data Anaysis, 탐색적 데이터 분석)**  
   탐색적 데이터 분석이란 데이터를 통해 중요한 의미와 정보를 찾아내는 방법론입니다. 주로 시각화 그래프를 통해 이뤄집니다. 시각화 그래프를 통해 중요한 의미와 정보, 인사이트를 발견해내는 작업을 보통 의미합니다만, 데이터 분석을 위한 철학, 마인드라고도 볼 수 있습니다. 어떤 데이터를 분석할지, 데이터를 어떻게 바라볼지, 어떻게 해석할지 등의 마인드 셋 등이 이에 해당합니다. [(Reference1)](https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm)


4. **Draw conclusions (or even make predictions)**  
   분석을 통하여 결과를 도출하는 단계입니다. 이 단계에서는 통계도 필요할 것입니다. 본 과정에서는 통계를 간단히만 다룰 것 같습니다. 나중에 기회가 된다면 데이터 분석을 위한 통계도 따로 정리하여 올리겠습니다. 


5. **Communicate your results**  
   결과를 리포팅 하는 단계입니다. 데이터분석가에게 데이터분석도 중요하지만 도출된 결과를 타인에게 잘 전달하는 것, 리포트로 잘 정리하는 것도 중요할 것입니다.  



### Pandas 기초 문법

판다스는 데이터 분석을 위한 파이썬 라이브러리입니다.  

Pandas 공식 Document: [(Reference2)](http://pandas.pydata.org/pandas-docs/stable/)  

10 Minutes to pandas: [(Reference3)](http://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html)  

기초 문법을 먼저 익히려면 10 Minutes을 보시면 됩니다. 아래는 제가 기억하려고 메모용 적어둔 것이니 무시하셔도 됩니다.   



```python
df.info() # value 갯수, nullable, type 요약
df.unique() # unique 값 갯수
df.describe() # 통계 값
df.loc[:, 'id':'name'] # index 명, columns 명으로 값 조회
df.iloc[:3, 4:5] # index로 값 조회

# null 값을 평균으로 채우기
mean = df['column'].mean()
df['column'] = df['column'].fillna(mean)

df.to_csv('data_means.csv', index=False) # index제외하고 csv 파일로 저장

sum(df.duplicated()) # 중복된 행의 갯수

df.drop_duplicates(inplace=True) # 중복된 행 제거, 현재 df에 적용

df['timestamp'] = pd.to_datetime(df['timestamp']) # 데이터 타입 변경, dataFrame에서 object는 string 타입임

# 새로운 column labels 지정
new_labels [ 'id', 'name', 'birthday']
df.columns = new_labels

% matplotlib inline

# dataFrame histogram
df.hist(figsize=(8,8));

# series histogram, 아래 두개는 같은 기능
df['age'].hist();
df['age'].plot(kind='hist');

# age columns안에서 unique value의 갯수 총합
df['age'].value_counts()

# 위 데이터로 bar 차트 그리기
df['age'].value_counts().plot(kind='bar', figzise=(8,8));

pd.plotting.scatter_matrix(df, figsize=(15,15));

# x, y column을 지정하고 scatter 그래프 그리기
df.plot(x='age', y='height', kind='scatter');

# diagnosis == M 인 행으로 구성된 df_m 생성
df_m = df[df['diagnosis'] == 'M']
# cf. df[df['week'] >= '2017-12-01']
```


## Reference

[Reference1 (https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm)](https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm)  
[Reference2 (http://pandas.pydata.org/pandas-docs/stable/)](http://pandas.pydata.org/pandas-docs/stable/)  
[Reference3 (http://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html)](http://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html)  


