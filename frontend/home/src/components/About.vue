<template>
  <div id="about">
    <img id="profilePicture" alt="Profile picture" src="../assets/profilePicture.jpg">
    <div id="personalInfo">  
      <div id="personalName">
        <p> Baek Kyun Shin </p>
      </div>
      <div id="personalIntro">
        <p> 문학을 좋아하는 아마추어 개발자 </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#profilePicture {
  border-radius: 15px;
  width: 150px;
  height: 200px;
}
#personalInfo {
  font-family: Courier New;
}

#personalName {
  font-size: 18px;
  color: #a4a4a4;
  padding-top: 10px;
  padding-bottom: 5px;
}
  #personalIntro {
  font-size: 17px;
  color: #778899;
}
</style>
