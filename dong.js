var offTime = (new Date()).toLocaleDateString().replace(/\//g, '-') + ' ' + '17:30';
        var offDate = (new Date(offTime));
		var timer;

        function CountDown() {
            var now = new Date();
            var count = offDate - now;
            var dong = '';
            if (count > 0) {
                dong = count / 1000 / 60 / 2;
                dong = dong.toFixed(2) + '东'
            } else {
                dong = '已下班';
            }
            document.getElementById("dongP").innerHTML = dong;
        }
		timer = setInterval("CountDown()", 1000);
		
		function change() {
			clearInterval(timer);
            var offTimeyexiao = (new Date()).toLocaleDateString().replace(/\//g, '-') + ' ' + '20:30';
			offDate = (new Date(offTimeyexiao));
			timer = setInterval("CountDown()", 1000);
        }
		
		function changeBack() {
			clearInterval(timer);
            var offTimeyexiao = (new Date()).toLocaleDateString().replace(/\//g, '-') + ' ' + '17:30';
			offDate = (new Date(offTimeyexiao));
			timer = setInterval("CountDown()", 1000);
        }
		
        var Calendar = function (t) {
            this.divId = t.RenderID ? t.RenderID : '[data-render="calendar"]', this.DaysOfWeek = t.DaysOfWeek ? t.DaysOfWeek : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], this.Months = t.Months ? t.Months : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var e = new Date;
            this.CurrentMonth = e.getMonth(), this.CurrentYear = e.getFullYear();
            var r = t.Format;
            this.f = "string" == typeof r ? r.charAt(0).toUpperCase() : "M"
        };
        Calendar.prototype.nextMonth = function () {
            11 == this.CurrentMonth ? (this.CurrentMonth = 0, this.CurrentYear = this.CurrentYear + 1) : this.CurrentMonth = this.CurrentMonth + 1, this.divId = '[data-active="false"] .render', this.showCurrent()
        }, Calendar.prototype.prevMonth = function () {
            0 == this.CurrentMonth ? (this.CurrentMonth = 11, this.CurrentYear = this.CurrentYear - 1) : this.CurrentMonth = this.CurrentMonth - 1, this.divId = '[data-active="false"] .render', this.showCurrent()
        }, Calendar.prototype.previousYear = function () {
            this.CurrentYear = this.CurrentYear - 1, this.showCurrent()
        }, Calendar.prototype.nextYear = function () {
            this.CurrentYear = this.CurrentYear + 1, this.showCurrent()
        }, Calendar.prototype.showCurrent = function () {
            this.Calendar(this.CurrentYear, this.CurrentMonth)
        }, Calendar.prototype.checkActive = function () {
            1 == document.querySelector(".months").getAttribute("class").includes("active") ? document.querySelector(".months").setAttribute("class", "months") : document.querySelector(".months").setAttribute("class", "months active"), "true" == document.querySelector(".month-a").getAttribute("data-active") ? (document.querySelector(".month-a").setAttribute("data-active", !1), document.querySelector(".month-b").setAttribute("data-active", !0)) : (document.querySelector(".month-a").setAttribute("data-active", !0), document.querySelector(".month-b").setAttribute("data-active", !1)), setTimeout(function () {
                document.querySelector(".calendar .header").setAttribute("class", "header active")
            }, 200), document.querySelector("body").setAttribute("data-theme", this.Months[document.querySelector('[data-active="true"] .render').getAttribute("data-month")].toLowerCase())
        }, Calendar.prototype.Calendar = function (t, e) {
            "number" == typeof t && (this.CurrentYear = t), "number" == typeof t && (this.CurrentMonth = e);
            var r = (new Date).getDate(),
                n = (new Date).getMonth(),
                a = (new Date).getFullYear(),
                o = new Date(t, e, 1).getDay(),
                i = new Date(t, e + 1, 0).getDate(),
                u = 0 == e ? new Date(t - 1, 11, 0).getDate() : new Date(t, e, 0).getDate(),
                s = "<span>" + this.Months[e] + " &nbsp; " + t + "</span>",
                d = '<div class="table">';
            d += '<div class="row head">';
            for (var c = 0; c < 7; c++) d += '<div class="cell">' + this.DaysOfWeek[c] + "</div>";
            d += "</div>";
            for (var h, l = dm = "M" == this.f ? 1 : 0 == o ? -5 : 2, v = (c = 0, 0); v < 6; v++) {
                d += '<div class="row">';
                for (var m = 0; m < 7; m++) {
                    if ((h = c + dm - o) < 1) d += '<div class="cell disable">' + (u - o + l++) + "</div>";
                    else if (h > i) d += '<div class="cell disable">' + l++ + "</div>";
                    else {
                        d += '<div class="cell' + (r == h && this.CurrentMonth == n && this.CurrentYear == a ? " active" : "") + '"><span>' + h + "</span></div>", l = 1
                    }
                    c % 7 == 6 && h >= i && (v = 10), c++
                }
                d += "</div>"
            }
            d += "</div>", document.querySelector('[data-render="month-year"]').innerHTML = s, document.querySelector(this.divId).innerHTML = d, document.querySelector(this.divId).setAttribute("data-date", this.Months[e] + " - " + t), document.querySelector(this.divId).setAttribute("data-month", e)
        }, window.onload = function () {
            var t = new Calendar({
                RenderID: ".render-a",
                Format: "M"
            });
            t.showCurrent(), t.checkActive();
            var e = document.querySelectorAll(".header [data-action]");
            for (i = 0; i < e.length; i++) e[i].onclick = function () {
                if (document.querySelector(".calendar .header").setAttribute("class", "header"), "true" == document.querySelector(".months").getAttribute("data-loading")) return document.querySelector(".calendar .header").setAttribute("class", "header active"), !1;
                var e;
                document.querySelector(".months").setAttribute("data-loading", "true"), this.getAttribute("data-action").includes("prev") ? (t.prevMonth(), e = "left") : (t.nextMonth(), e = "right"), t.checkActive(), document.querySelector(".months").setAttribute("data-flow", e), document.querySelector('.month[data-active="true"]').addEventListener("webkitTransitionEnd", function () {
                    document.querySelector(".months").removeAttribute("data-loading")
                }), document.querySelector('.month[data-active="true"]').addEventListener("transitionend", function () {
                    document.querySelector(".months").removeAttribute("data-loading")
                })
            }
        };
		
		        var tag;
        function num(){
            var num1=Math.floor(Math.random()*9);
            var num2=Math.floor(Math.random()*9);
            var num3=Math.floor(Math.random()*9);
			var num4=Math.floor(Math.random()*9);
            document.getElementById("td1").innerHTML=num1;
            document.getElementById("td2").innerHTML=num2;
            document.getElementById("td3").innerHTML=num3;
			document.getElementById("td4").innerHTML=num4;
        }
 
        function stop(){

            clearInterval(tag);
            if(document.getElementById("td1").innerHTML==document.getElementById("td2").innerHTML && document.getElementById("td3").innerHTML==document.getElementById("td2").innerHTML){
                document.getElementById("td1").style.backgroundColor="yellow";
                document.getElementById("td2").style.backgroundColor="yellow";
                document.getElementById("td3").style.backgroundColor="yellow";
                document.getElementById("p1").style.backgroundColor="yellow";
                document.getElementById("p1").innerHTML="您中奖啦！！！";
            }
            else{
                document.getElementById("td1").style.backgroundColor="gray";
                document.getElementById("td2").style.backgroundColor="gray";
                document.getElementById("td3").style.backgroundColor="gray";
                document.getElementById("p1").style.backgroundColor="";
                document.getElementById("p1").innerHTML="很抱歉您未中奖！！！";
            }

        }
		
		var tagTow;
		var count = 0;
		function numTwo(){
            
			count = count + 0.001;
            document.getElementById("tdTwo1").innerHTML=count.toFixed(3);
        }
		
		
		function startTwo(){
            if(tagTow!=undefined){
                clearInterval(tagTow);
            }
            tagTow=setInterval(numTwo,1);
            document.getElementById("pTwo1").style.backgroundColor="";
            document.getElementById("pTwo1").innerHTML="";
            document.getElementById("tdTwo1").style.backgroundColor="white";
        }
		
		function stopTwo(){

            clearInterval(tagTow);
            if(document.getElementById("tdTwo1").innerHTML=='1.000' ){
                document.getElementById("tdTwo1").style.backgroundColor="yellow";
                document.getElementById("pTwo1").style.backgroundColor="yellow";
                document.getElementById("pTwo1").innerHTML="您中奖啦！！！";
            }
            else{
                document.getElementById("tdTwo1").style.backgroundColor="gray";
                document.getElementById("pTwo1").style.backgroundColor="";
                document.getElementById("pTwo1").innerHTML="很抱歉您未中奖！！！";
            }
			count = 0;
        }
		

        function start(){
            if(tag!=undefined){
                clearInterval(tag);
            }
            tag=setInterval(num,100);
            document.getElementById("p1").style.backgroundColor="";
            document.getElementById("p1").innerHTML="";
            document.getElementById("td1").style.backgroundColor="white";
            document.getElementById("td2").style.backgroundColor="white";
            document.getElementById("td3").style.backgroundColor="white";
        }
