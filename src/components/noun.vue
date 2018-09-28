
<template>
	<div class="questionObj" >
		<div class="selectObj">
			<ul class="selectBox">
				<li dragable =false class="selectList"  v-for="(item,index) in select" :data-id="index+1" :data-ib="item.num" :style="item"  >
					<img dragable =false  :src=item.defaultImg />
				</li>
			</ul>
		</div>
	</div>
</template>
import $store from '../store/index.js'

<script type="text/javascript">
    export default{
        data:function(){
            return {
                'questionText':question.questionText,
                'answerText':question.answerText,
                'select':question.selectImg,
                'btns':question.btnObj,
                'imgIds':-1,
				'arr1Num':question.arr1Num||0,
                'arr2Num':question.arr2Num||0,
                'arr3Num':question.arr3Num||0,
            }
        },mounted(){
            console.log("题目区");
            var selectBox1 = document.getElementsByTagName('ul')[0];
            var box = document.getElementsByClassName('box')[0];
            var q2=document.getElementById('qq');
            var num1=this.arr1Num;
            var num2=this.arr2Num;
            var num3=this.arr3Num;
            var store=this.$store;
            var _this=this;
            var onf=true;
            function click (){
                var t1=0;
                 var isTouch = 'ontouchstart' in window
                    var mouseEvents = (isTouch) ?
                    {
                        down: 'touchstart',
                        move: 'touchmove',
                        up: 'touchend',
                        over: 'touchstart',
                        out: 'touchend'
                    }
                            :
                    {
                        down: 'mousedown',
                        move: 'mousemove',
                        up: 'mouseup',
                        over: 'mouseover',
                        out: 'mouseout'
                    }
                    var eventHandlers={
                        touchStart:function(){
                        }
                    }
                    var down=null
                function re() {
                    return t1=document.getElementById('app').offsetWidth/19.2075;
                };
                window.onresize=re();
                var lis=document.getElementsByClassName('selectList');
                var liPo = [];
                var ui1=[];
                var arrs=[];
                for (var i = 0; i < lis.length; i++) {
                    liPo[i] = {
                        top:((lis[i].offsetTop)/re()).toFixed(2),
                        left:((lis[i].offsetLeft)/re()).toFixed(2),
                    }
                }
                for (var i = 0; i < lis.length; i++) {
                    lis[i].style.top=liPo[i].top+"rem";
                    lis[i].style.left=liPo[i].left+"rem";
                }
                for (var i = 0; i < lis.length; i++) {
                    ui1[i] = lis[i].getAttribute('data-id');
                }
                /*ui1=ele.getAttribute('data-id');*/
                for (var i = 0; i < lis.length; i++) {
                    lis[i].index = i;
                    as(lis[i]);
                }

                for (var i = 0; i < lis.length; i++) {
                    arrs.push(lis[i]);
                }

                var zIndex = 1;


                function as(ele){

                    var eleIndex = null;
                    ele.addEventListener(mouseEvents.down,fnDown, false);
                    function fnDown(e){

                        zIndex++;
                        e=e.changedTouches? e.changedTouches[0]:e;
                        var disX = e.pageX - ele.offsetLeft;
                        var disY = e.pageY - ele.offsetTop;
                        ele.className = "selectList cur";
                        document.addEventListener(mouseEvents.move,fnMove, false);
                        document.addEventListener(mouseEvents.up,fnUp);
                        function fnMove(e){
                            var max = Infinity;
                            var arr = [];
                            var elenow = null;
                            e=e.targetTouches?e.targetTouches[0]:e;
                            ele.style.left = (e.pageX - disX)/re() + "rem";
                            ele.style.top = (e.pageY - disY)/re() + "rem";
                            ele.style.zIndex = zIndex;
                            for (var i = 0; i < lis.length; i++) {
                                if(duang(ele,lis[i])){
                                    if(ele != lis[i]){
                                        arr.push(lis[i]);
                                    }
                                }
                            }

                            arr.forEach((item,i)=>{
                                var a = item.offsetLeft - ele.offsetLeft;
                                var b = item.offsetTop - ele.offsetTop;
                            var c= item.offsetWidth - ele.offsetWidth;
                                var min = Math.sqrt(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2));
                                if(max > min){
                                    max = min;
                                    elenow = item;
                                }
                            })
                            if(eleIndex){
                                eleIndex.className = 'selectList';
                            }
                            if(elenow){
                                elenow.className = 'selectList active';
                            }
                            eleIndex = elenow;
                            onf=true;
                        }

                       function fnUp(){
                            if(eleIndex&&onf){
                               ele.style.left=liPo[eleIndex.index].left+ "rem";
                               ele.style.top=liPo[eleIndex.index].top+ "rem";
                               eleIndex.style.left=liPo[ele.index].left+ "rem";
                               eleIndex.style.top=liPo[ele.index].top+ "rem";
                               eleIndex.setAttribute('data-id',ui1[ele.index]);
                               ele.setAttribute('data-id',ui1[eleIndex.index]);
                               // console.log(liPo[eleIndex.index]);
                                for(var i=0; i<arrs.length;i++){
                                    arrs.sort(function(a,b){
                                        var value1 =a.getAttribute('data-id');
                                        var value2 =b.getAttribute('data-id');
                                        return value1 - value2;
                                    })
                                }
                                let Lists = document.getElementsByClassName('selectList');
								var arr1=[];
								var arr2=[];
                                var arr3=[];
                                for(var i=0;i<num1;i++){
                                    arr1.push(arrs[i].getAttribute('data-ib'));
								}
                                for(var i=num1;i<num2;i++){
                                    arr2.push(arrs[i].getAttribute('data-ib'));
                                }
                                for(var i=num2;i<num3;i++){
                                    arr3.push(arrs[i].getAttribute('data-ib'));
                                }

								var sum1=0;
                                var sum2=0;
                                var sum3=0;
                                arr1.forEach(function(item,index){
                                   sum1+=Number(item);
                                   return sum1
								})
                                arr2.forEach(function(item,index){
                                    sum2+=Number(item);
                                    return sum2
                                })
                                arr3.forEach(function(item,index){
                                    sum3+=Number(item);
                                    return sum3
                                })
                             //  console.log(sum1);
                              // console.log(sum2);
                             //  console.log(sum3);

                                _this.$store.state.sum1=sum1;
                                _this.$store.state.sum2=sum2;
                                _this.$store.state.sum3=sum3;
								if(sum1==sum2&&sum2==sum3&&sum1==sum3){
								    console.log("三组总和相等");
                                    store.state.answerkey[0] = '对';
								}
								var newIndex = eleIndex.index;
                                eleIndex.index = ele.index;
                                ele.index = newIndex;
                                ele.className = "selectList";
                                eleIndex.className = "selectList";
                                onf=true;
                            }else{
                                ele.style.left=liPo[ele.index].left+ "rem";
                                ele.style.top=liPo[ele.index].top+ "rem";
                                ele.className = "selectList";
                                onf=true;
                            }
                            document.removeEventListener(mouseEvents.move,fnMove);
                            document.removeEventListener(mouseEvents.up,fnUp);
                            onf=false;
                        }
                       if(!isTouch){ e.preventDefault();}
                        function duang(obj1,obj2){
                            var l1 = obj1.offsetLeft;
                            var t1 = obj1.offsetTop;
                            var b1 = t1 + obj1.offsetHeight;
                            var r1 = l1 + obj1.offsetWidth;

                            var l2 = obj2.offsetLeft;
                            var t2 = obj2.offsetTop;
                            var b2 = t2 + obj2.offsetHeight;
                            var r2 = l2 + obj2.offsetWidth;

                            if(r1 < l2 || b1 < t2 || l1 > r2 || t1 > b2){
                                return false;
                            }else{
                                return true;
                            }
                        }
                    }
                    ele.dragable =false;
                }
            };click();

            var len = selectBox1.childNodes.length;
			var arr = [];
            for(var i=0;i<len;i++){
                arr[i] = selectBox1.childNodes[0];
                selectBox1.removeChild(selectBox1.childNodes[0]);
            }
            for(var i=0;i<arr.length;i++){
                selectBox1.appendChild(arr[i]);
            }
        },
        methods:{

        }
    }
</script>
<style scoped>
	.questionObj{
		display: flex;
		display: -webkit-box-flex;
		display: -moz-box-flex;
		-ms-flex-direction: column;
		flex-direction: column;
		-ms-flex-align: center;
		align-items: center;
		box-sizing: border-box;
		position:relative;
		margin-top:-1.2rem;
	}
	.questionBox{
		width:9rem;
		height:auto;
		padding:.3rem;
	}
	.answerlist{
		width:auto;
		height:auto;
		height:.6rem;
		line-height:.6rem;
		font-size:.6rem;
	}
	.answerListBg{
	//background:url('../../static/images/default.png');
	//background-repeat:no-repeat;
	//background-size:100% 100%;
		background:#798ACE;
		border:.03rem solid #4969B0;
		border-radius:.3rem;
		cursor:pointer;
	}
	.answerListSelectBg{
	//background:url('../../static/images/select.png');
	//background-repeat:no-repeat;
	//background-size:100% 100%;
		background:#FFF3C2;
		border:.03rem solid #FFAD07;
		color:#000;
	}
	.answerListSelectBg:hover{
		cursor:pointer;
	}
	.answerBox{
		padding:0;
		margin:0;
		margin-top:-.6rem;
	}
	.answer{
		list-style:none;
		width:100%;
		font-size:.6rem;
		color:#fff;
		margin-top:.2rem;
	}
	.questionText{
		font-size:.60rem;
		color:#fff;
		text-indent:.6rem;
		margin-top:0rem;
		height:.5rem;
		height:.8rem;
		line-height:.8rem;
	}
	.selectObj{
		margin-top: 1.4rem;
		margin-left: -2rem;
	}
	.selectList{
		position: absolute;
		list-style:none;
		float:left;
		width: 1.5rem;
		height: 1.5rem;
		/*margin-right:0.15rem; position: relative;*/
		transition:opacity 0.6s;
		-moz-transition:opacity 0.6s; /* Firefox 4 */
		-webkit-transition:opacity 0.6s; /* Safari and Chrome */
		-o-transition:opacity 0.6s; /* Opera */
		opacity: 1;
		transform:scale(1);
		-webkit-transform:scale(1);
		-moz-transform:scale(1);
		-o-transform:scale(1);
	}
	.selectList.cur{transition:opacity 0.6s;
		-moz-transition:opacity 0.6s; /* Firefox 4 */
		-webkit-transition:opacity 0.6s; /* Safari and Chrome */
		-o-transition:opacity 0.6s; /* Opera */
		opacity: 0.85;
		transform:scale(0.9);
		-webkit-transform:scale(0.9);
		-moz-transform:scale(0.9);
		-o-transform:scale(0.9);

	}
	.selectList:hover{
		cursor: pointer ;
	}
	.selectList img{
		width:100%;
		height:100%;
	}
	.resetting:hover{
		 cursor: pointer;
	}
	.resetting{cursor: pointer;opacity: 1;
		position: absolute;
		right: 0.45rem;
		top: 2.45rem;
		z-index: 2;}
	.resetting img{  width: 2rem;
		height: 0.8rem;
		}
	.btnObj{ margin-top: 2.6rem;}
	.btnObj ul li{ width: 2.2rem;height: 2.2rem;float: left; list-style: none;overflow: hidden;
		position: absolute;}
	.btnObj ul li img{ width: 100%;height: 100%;}

	/*.btnObj ul li.answerlist{background:url('../../static/images/default.png') no-repeat;
	background-size:100% 100%; }*/
</style>

