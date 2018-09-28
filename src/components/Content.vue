
<template>
    <div id="app" class="content" style="background:url('static/assets/images/bg.png');background-size:100% 100%;background-report:no-report;">
    	<Title/>
    	<Noun/>
		<!--<Keybord/>-->
    	<div class="submitObj" @click ="submit">
			<img class="submit" src="static/assets/images/submit.png" />
		</div>
    </div>
</template>
<script>
import Title from './Title'
import Noun from './noun'
/*import Keybord from './keybord'*/
import $store from '../store/index.js'
const {AnswerInfo, postAnswer, resubmitAnswer, answerResult} = require('../tophp');
    export default {
      name: 'app',
      data:function(){
		 return {
		    rightTimes:0,
		    wrongTimes:0
		}
  	  },
	  components: {
	    Title,
	    Noun,
	  },
	  methods:{
		submit:function(){

            if(this.$store.state.sum1==this.$store.state.sum2&&this.$store.state.sum2==this.$store.state.sum3&&this.$store.state.sum1==this.$store.state.sum3){
                console.log("提交");
                let answer=new AnswerInfo();
                answer.success(0);
                this.$store.dispatch('pushToPostArr', answer);
                this.$store.dispatch('postAnswer');
            }else{
                console.log("选择错误");
                let answer=new AnswerInfo();
                answer.fail(0);
                this.$store.dispatch('pushToPostArr', answer);
                this.$store.dispatch('postAnswer');
			}
		}
	  }
    }
</script>
<style scoped>
	.content{
		height:10.8rem;
	    width: 19.2rem;
	    overflow: hidden;
    }
    .startBtn{
    		width:4rem;
    		height:1.3rem;
			position:absolute;
			left:50%;
			bottom:5%;
			margin-left:-2rem;
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
	.submit{
		width: 2.5rem;
		height: 1rem;
	}
	.submit:hover{
		cursor:pointer;
	}
	.submitObj{
		position:absolute;
		right: 0.49rem;
		top: 9.4rem;
		z-index:2;
	}
	.submitObj:hover{
		 cursor: pointer;
	}
	.submitObj:active{
		transform:scale(1);
		-moz-transform:scale(1);
		-webkit-transform:scale(1);
	}
</style>
