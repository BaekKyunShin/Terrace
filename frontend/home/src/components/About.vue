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
  font-size: 17px;
  background: -webkit-linear-gradient(#eee, #111111);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 10px;
}

#personalIntro {
  font-size: 17px;
  color: #778899;
}
</style>
