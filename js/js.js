	function a(){
		var kuangkuang = document.getElementById("bt1");
		var kuangkuang2 = document.getElementById("bt2");
		//kaishi
			var Name=kuangkuang.className;
			kuangkuang.onfocus = function(){
				if(kuangkuang.value == "邮箱/手机号/用户"){
					kuangkuang.value = "";	//当框框得到焦点的时候，让框框的value清空
					kuangkuang.className=Name+" cur"
				}
			}
			kuangkuang.onblur = function(){
				if(kuangkuang.value == ""){
					kuangkuang.value = "邮箱/手机号/用户";
					kuangkuang.className=Name;
				}
			}//jiiesu
			var Name2=kuangkuang2.className
			kuangkuang2.onfocus = function(){
				if(kuangkuang2.value == "请输入密码"){
					kuangkuang2.value = "";	//当框框得到焦点的时候，让框框的value清空
					kuangkuang2.className=Name+"mgt cur"
				}
			}
			kuangkuang2.onblur = function(){
				if(kuangkuang2.value == ""){
					kuangkuang2.value = "请输入密码";
					kuangkuang2.className="mgt";
				}
			}//jiiesu
		var ck = document.getElementById("ck");	
		var ck1 = document.getElementById("ck1");	
		var name1=ck.className;
		var xinhaoliang=0;
		ck.onclick= function(){
		xuan();
			}
		ck1.onclick= function(){
		xuan();
			}
				function xuan(){
					
				if(xinhaoliang == 0){
				ck.className=name1+" checked2";
				xinhaoliang=1;
				}else{
					xinhaoliang=0;
				ck.className=name1+" checked3";	
				}
			ck.onblur = function(){
				ck.className=name1+" checked1";
				}
			}
			//shangmianjies
			var kuangl=document.getElementById("kuangl");
			var kuang2=document.getElementById("kuang2");
			var kuang3=document.getElementById("kuang3");
			var kuang4=document.getElementById("kuang4");
			kuangl.onmouseover = function(){
				kuangl.className="lianjie active";
			}
			kuangl.onmouseout = function(){
				kuangl.className="lianjie unactive";

			}
			kuang2.onmouseover = function(){
				kuang2.className="lianjie active";
			}
			kuang2.onmouseout = function(){
				kuang2.className="lianjie unactive";

			}
			kuang3.onmouseover = function(){
				kuang3.className="lianjie active";
			}
			kuang3.onmouseout = function(){
				kuang3.className="lianjie unactive";

			}
			kuang4.onmouseover = function(){
				kuang4.className="lianjie active";
			}
			kuang4.onmouseout = function(){
				kuang4.className="lianjie unactive";

			}
			
		//		
	}
