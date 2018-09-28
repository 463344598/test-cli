<template>
	<div class="questionBox" :style="question.sound?'':'left:-0.2rem'">
		<div class="soundBox">
			<img v-if ="question.sound" id = "questionImg" class="sound" @click = "playSound()" src="static/images/sound.png"/>
			<audio id="questionSound" :src='question.sound'></audio>
		</div>
    		<div class="subTitle" v-if ="question.title">
    			{{question.title}}
    		</div>
    	</div>
</template>
<script type="text/javascript">

export default{
    name:'Title',
    data:function(){
        return {
            'question':question
        }
    },
    mounted(){
        console.log("标题是");
        console.log(question.title);
    },
    methods:{
        'playSound':function(){
            let _questionSound = document.getElementById("questionSound"),
                _questionImg = document.getElementById("questionImg");
            _questionSound.play();
            _questionImg.src = "static/images/sound.gif";
            _questionSound.onended =function(){
                console.log("音频播放完毕");
                 _questionImg.src = "static/images/sound.png";
            }
        }
    }
}    
</script>
<style scoped>
    .questionBox{
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        text-align: center;
        max-width: 16rem;
		margin:1.02rem auto; position: relative;
    }
    .soundBox{
        width:.7rem;
        height:.7rem;

    }
    .sound{
        width:.7rem;
        height:.7rem;
         vertical-align:top;
    }
    .sound:hover{
        cursor:pointer;
    }
    .subTitle{
        max-width: 15.5rem;
        padding: 0 .1rem;
        font-size: .44rem;
        text-align: left;
        font-family: Microsoft YaHei;
		color:#105e00;
		font-weight: 100;
    }
</style>
