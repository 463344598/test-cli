<template>
    <div class="start" v-if = question.startFlag  style="background:url(static/assets/images/startBg.jpg);background-size:100% 100%;background-report:no-report;">
    	<img class="startBtn" src="static/assets/images/startBtn.png" @click="start()"></img>
    </div>
</template>
<script>
    export default {
      data:function(){
		return {
			question:question
		}
  	  },
      methods: {
			start(){
				console.log("开始按钮触发");
				console.log(this.question);
				this.$router.push({path:'/content'})
			}
  	  },
  	  mounted:function(){
		console.log("开始页执行");
		console.log(this.question.startFlag);
		if(this.question.startFlag == false){
			console.log("跳转");
			this.$router.push({path:'/content'})
		}
  	  }
    }
</script>
<style scoped>
	.start{
		height:10.8rem;
	    width: 19.2rem;   
	    overflow: hidden;	      
    }
    .startBtn{
    		width:3.2rem;
    		height:1.6rem;
			position:absolute;
			left:8rem;
			top:8.2rem;

	}
	.startBtn:hover{
		transform:scale(1.1);
		-webkit-transform:scale(1.1);
		-moz-transform:scale(1.1);
		cursor:pointer;
}
	.startBtn:active{
		transform:scale(1);
		-webkit-transform:scale(1);
		-moz-transform:scale(1);
}
</style>
