<template>
  <div>
    <transition name="fade">
      <div v-show='fadeIn'>
        <img src='static/images/result.jpg' class="bg"/>
        <img src="static/images/result-animate.png" class="goldImg"/>
        <img src="static/images/close.png" class="close" @click="click()"/>
        <p class="txt">{{$store.state.goldnum}}</p>
        <div class="timeout">{{time}}s</div>
        <ul class="analysisBox">
           <li class="userAnswer" >
            <span class="userList">(1)</span>
            <span class="userList" v-for="(item,index) in $store.state.answerkey">
              <span class="noun">&nbsp;{{item}}<img v-show = "$store.state.ansyflag[index] == index" id="rightImg" src="../../static/images/right.png"/><img id="wrongImg" v-show = "$store.state.ansyflag[index] != index" src="../../static/images/wrong.png"/></span>
              <span class="space">;</span>
            </span>
           </li>
            <li class="analysisCon">
                <span class="rightTxt">正确答案:</span>
                <span class="rightAnswer" v-for = "item in question.rightkey">
                   {{item}}<span class="space">;</span>
                </span>
            </li>
        </ul>
      </div>
    </transition>
    <audio autoplay="autoplay" src="static/audios/result.mp3"></audio>
  </div>
</template>
<script>
export default require('./EndCode');
import $store from '../store/index.js';
</script>
<style scoped>
  body{
    padding:0;
    margin:0;
    font-family: Microsoft YaHei;
}
  li{
    list-style:none;
    font-size:.7rem;
}
  .bg {
    width: 100%;
    height: 100%;
  }
  .goldImg{
    width:11.12rem;
    height:3.89rem;
    position:absolute;
    left:50%;
    margin-left:-5.56rem;
    top:-1%;
}
  .analysisBox{
     width:11rem;
     height:5rem;
     padding:0;
     margin:0;
     position:absolute;
     left:50%;
     margin-left:-5.5rem;
     top:5.5rem;
}
  .noun{
    font-size:.48rem;
    
}
  .userList{
    font-size:.48rem;
    margin:0;
    padding:0 0.05rem;
    display:inline-block;
    margin-left:-.2rem;
}
  .userAnswer{
    display:block;
}
  .analysisCon{
    list-style:none;
    margin-left:.5rem;
    padding:0;
    margin-top:-.2rem;
}
.rightAnswer{
   padding:0;
   margin:0;
   font-size:.45rem;
   line-height:.5rem;
}
.space{
  font-size:.45rem;
  line-height:.5rem;
}
.rightAnswer:last-child .space{
    display:none;
}
.userList:last-child .space{
    display:none;
}
  .rightTxt{
    font-size:.45rem;
    color: #72bf16;
}
  .score {
    position: absolute;
    left: 4.04rem;
    top: 0px;
    width: 11.12rem;
  }

  .txt {
    position: absolute;
    left: 9rem;
    top: 3.5rem;
    font-size: 0.65rem;
    color:#e97c2e;
    width: 1.6rem;
    color: red;
    text-align: center;
    font-family:Microsoft Yahei;
  }

  .close {
    top: .3rem;
    right: .4rem;
    width: 1rem;
    height: 1rem;
    position: absolute;
    cursor: pointer;

  }
  .close:hover{
    cursor:pointer;
}
  .timeout {
    position: absolute;
    top: 1.3rem;
    right: .6rem;
    color: #ee5766;
    font-weight: 400;
    font-family: YouYuan;
    font-size: .6rem;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
    opacity: 0
  }
</style>
