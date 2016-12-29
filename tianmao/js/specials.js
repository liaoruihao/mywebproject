$(function(){
	var colortable=["#e54077","#427def","#6347ed","#e54077","#6347ed","#427def","#fa5c5c","#f7a831","#f7a831","#427def","#dd2727","#427def","#f7a831","#3bc7b0","#dd2727","#3bc7b0"];
	var lf_color=["#F7A945","#19C8A9","#F15453","#64C333","#0aa6e8","#EA5F8D","#000","#000"];
	var scrid=["#baby","#outdoor","#home","#health","#electronic","#beauty","#flshop","#caixihuan"];
	var lfid=['#qinz','#huw','#daz','#juj','#chaod','#meil','#pinp','#cain'];
	var lunbobg=["#e8e8e8","#e8e8e8","#f3b8b2","#e8e8e8","#fea700","#30befe"];
	var inde=0;
	var uflag=0;
	var rfcli=0;
	var leng=$(".adv_lunbo li").length;
	var li_index=0;
	var pic_timer=null;
	$(".adv_lunbo li").eq(0).show().siblings().hide();
	$(".adv_lunbo").hover(function(){
		clearInterval(pic_timer);
	},function(){
		autoplay();
	});
	$(".adv_lbclick li").hover(function(){
		li_index=$(this).index();
		picshow(li_index);
		clearInterval(pic_timer);
	},function(){
		autoplay();
	});
	function autoplay() {
		pic_timer = setInterval(function(){
			li_index++;
			if(li_index > leng-1) 
			{
				li_index = 0;
			}
			picshow(li_index);	
		},4000);		
	};
	function picshow(index){
		$(".adv_lbclick li").css("background-image","url('images/adv_buttom.png')").eq(index).css("background-image","url('images/adv_buttomclick.png')");
		$(".adv_lunbo li").stop(true).fadeOut(600).eq(index).stop(true).fadeIn(600);
		$(".adv_wrag").css("background-color",lunbobg[index]);		
	};
	function addcolor(){
		$(".menu").each(function(){
			$(this).find(".inpColor").css("color",colortable[inde]);
			inde++;
		});
	};
	addcolor();
	function manimate(num){
		$(num).mouseover(function(){
			$(this).stop().animate({right:"6px"},200);
		});
		$(num).mouseout(function(){
			$(this).stop().animate({right:"0"},200);
		});
	};
	manimate(".kind_right img");
	manimate(".kind_middle img");
	function mkindhot(){
		$(".tui_img_box").mouseover(function(){
			$(this).find("img").stop().animate({width:"100%"},200);
		});
		$(".tui_img_box").mouseout(function(){
			$(this).find("img").stop().animate({width:"95%"},200);
		});
		$(".s_input").focus(function(){
			$(".s-label").css({"color":"#ccc",})
		});
		$(".s_input").blur(function(){
			$(".s-label").css({"color":"#666",})
		});
		$(".l_f").click(function(){
			$("body").animate({scrollTop:$(scrid[$(this).index()]).offset().top},"fast");
		});
		$("#rst_top").click(function(){
			$("body").animate({scrollTop:0},"fast");
		});
		$(".rf_top").click(function(){
			$("body").animate({scrollTop:0},"fast");
		});
		$(".l_f").hover(function(){
			$(this).css("background-color",lf_color[$(this).index()]);
		},function(){
			if(uflag!=$(this).index()){
				$(this).css("background-color","rgba(0,0,0,.6)");
			};
		});
		$(window).scroll(function(){
			if ($(window).height() <= $(window).scrollTop()) {
				$(".top_fix").stop().animate({top:"0"},200);
				$(".top_fix").css({display:"block"});
				$(".left_fix").css({display:"block"});
				$(".rf_top").css({display:"block"});
				$(".left_fix").removeClass("lf_suox");
				$(".left_fix").addClass("lf_fda");
			};
			if ($(window).height() > $(window).scrollTop()) {
				$(".top_fix").stop().animate({top:"-50px"},200);
				$(".left_fix").removeClass("lf_fda");
				$(".left_fix").addClass("lf_suox");
				$(".rf_top").css({display:"none"});							
			};
			for (var i = 0; i < scrid.length; i++) {
				if ($(scrid[i]).offset().top <= $(window).scrollTop()) {
					if(i<scrid.length-1){
						if($(scrid[i+1]).offset().top > $(window).scrollTop()){
							$(lfid[i]).css("background-color",lf_color[i]);
							$(lfid[i]).siblings().css("background-color","rgba(0,0,0,.6)");
							uflag=i;
						}
					}
					else if ($(scrid[i]).offset().top <= $(window).scrollTop()){
						$(lfid[i]).css("background-color",lf_color[i]);
						$(lfid[i]).siblings().css("background-color","rgba(0,0,0,.6)");
						uflag=i;
					}					
				}				
			}
		});
		$(".adv_navi li").hover(function(){
			var meval=parseInt($(this).index());
			$(this).find(".navi_head").css({"color":colortable[meval]});
			$(this).find(".navi_head a").css("color",colortable[meval]);
			$(this).find(".menu_li01 a").hover(function(){
				$(this).css("color",colortable[meval]);
			},function(){
				if(!$(this).hasClass("inpColor")){
					$(this).css("color","");}
			});
		},function(){
			$(this).find(".navi_head").css({"color":"",});
			$(this).find(".navi_head a").css("color","");
		});
		$(".right_fix div").click(function(){
			$(this).find(".rf_click").css("display","block");
			$(this).find(".rf_anih").css("display","none");
			rfcli=1;
		});
		$(".right_fix div").hover(function(){
			if(rfcli!=1){
				$(this).find(".rf_anih").css("display","block").stop().animate({right:"28px",opacity:"1"},400);
			}
		},function(){
			$(this).find(".rf_anih").css("display","none").stop().animate({right:"45px",opacity:"0"},400);
			rfcli=0;
			$(this).find(".rf_click").css("display","none");
		});				
	};
	mkindhot();
});
