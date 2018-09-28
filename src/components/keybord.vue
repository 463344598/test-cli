
<template>
	<div  class="calculator" style="background:url('static/keyImgs/keyBg.png');background-size:100% 100%;background-report:no-repeat;" >
		<ul class="calBox">
			<li class="keyBtn" v-for="item in items" :style="{backgroundImage: 'url(static/keyImgs/' + item.img + '.png)',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}" @click = "press(item.value)">
			</li>
		</ul>
		<img class="spread" @click="down" src="static/keyImgs/spread.png" />
	</div>
</template>
<script>

import $store from '../store/index.js'
const {AnswerInfo, postAnswer, resubmitAnswer, answerResult} = require('../tophp');
export default {
	name: 'Calculator',
	data:function(){
		return  {
			items:[
				   {'img':0,value:0},
				   {'img':1,value:1},
				   {'img':2,value:2},
				   {'img':3,value:3},
				   {'img':4,value:4},
				   {'img':"jia",value:"+"},
				   {'img':"jian",value:"-"},
				   {'img':"equal",value:"="},
				   {'img':"point",value:"."},
				   {'img':"c",value:"back"},
				   {'img':"5",value:"5"},
				   {'img':"6",value:"6"},
				   {'img':"7",value:"7"},
				   {'img':"8",value:"8"},
				   {'img':"9",value:"9"},
				   {'img':"chen",value:"×"},
				   {'img':"chu",value:"÷"},
				   {'img':"left",value:"("},
				   {'img':"right",value:")"},
				   {'img':"Del",value:"ref"}
				  ],
		    pressFlag:true
		}
	},
	methods:{
		press:function(event){
			console.log("点击" + event);
			var _current =document.getElementById("current");
			console.log(_current.innerText);
			if(event == "ref"){
				console.log("重置");
				_current.innerText = '';
			}else if(event == "back"){
				console.log("返回");
				if(_current.innerText == "0" || _current.innerText == ""){
        			_current.innerText = "";
			    }else{
			       _current.innerText=_current.innerText.slice(0,-1);
			    }
			}else{
				_current.innerText +=event;
			}
		},
		down:function(){
			let calculator = document.getElementsByClassName('calculator');
			calculator[0].className +=' spreadAn'
		}
	}
}	
</script>
<style scoped>
	.calculator{
		width:9.94rem;
		height:2.24rem;
	    position:absolute;
	    left:50%;
	    margin-left:-4.65rem;
	    bottom:-30%;
	    -webkit-tap-highlight-color:rgba(0,0,0,0);
        -moz-user-select: none;
	    -webkit-user-select: none;
	    -ms-user-select: none;
	    -khtml-user-select: none;
	    user-select: none;
}
	.calBox{
		width:100%;
		height:100%;
		position:absolute;
		left:0.1rem;
		top:0.2rem;
		margin:0;
		padding:0;
		z-index:2;
}
	.keyBtn{
		list-style:none;
		width:.86rem;
		height:.87rem;
		float:left;
		cursor:pointer;
		margin-left:.1rem;
		margin-top:.1rem;
		}
	.keyBtn:active{
		transform:scale(.9);
		-moz-transform:scale(.9);
		-webkit-transform:scale(.9);
}
	.keyBtn:hover{
		cursor:pointer;
}
	.submit{
		width:.72rem;
		height:1.56rem;
	    border:none;
	    position:absolute;
	    right:.4rem;
	    top:1.32rem;
	    
}
	.spread{
		width:.65rem;
		height:.74rem;
		position:absolute;
		right:-.6rem;
		top:.35rem;
	}
	.spread:hover{
		cursor:pointer;
	}
	.calculatorAn{
		animation:uping .8s  forwards;
		-webkit-animation:uping .8s  forwards;
		-moz-animation:uping .8s  forwards;
	}
	@keyframes uping{
		from{
			bottom:-30%;
		}
		to{
			bottom:0%;
		}
	}
	@-webkit-keyframes uping{
		from{
			bottom:-30%;
		}
		to{
			bottom:0%;
		}
	}
	@-moz-keyframes uping{
		from{
			bottom:-30%;
		}
		to{
			bottom:0%;
		}
	}
	.spreadAn{
		animation:downing 1s  forwards;
		-webkit-animation:downing 1s  forwards;
		-moz-animation:downing 1s  forwards;
	}
	@keyframes downing{
		from{
			bottom:0%;
		}
		to{
			bottom:-30%;
		}
	}
	@-webkit-keyframes downing{
		from{
			bottom:0%;
		}
		to{
			bottom:-30%;
		}
	}
	@-moz-keyframes downing{
		from{
			bottom:0%;
		}
		to{
			bottom:-30%;
		}
	}
</style>