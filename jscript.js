
			var a = getRandomArbitrary(6,10);
			
			var bmin = 11-a; // Попадание в границы суммы 11...14
			var bmax = 15-a; // 15 вместо 14 - из-за округления вниз
			
			b = getRandomArbitrary(bmin,bmax);
                var c = a+b;
				
                var d = 37; //откуда начинаем рисовать
                var e = 39*a; //39 - цена деления. а - начало первого отрезка
                var f = d+e; //конец первой линии
                var g = 39*b;
       
			draw(0,0);
			
			function check1(){
				if (a==parseInt(document.getElementById('id1').value)) {
					document.getElementById('id1').style.color = "#000000";
					document.getElementById('id1').style.display = "none"
					document.getElementById('id2').style.display = "block"
					draw(3,0);
				}
				else{
					document.getElementById('id1').style.color = "#ff0000";
					draw(0,1);
				}
			}
			function check2(){ 
				if (b==parseInt(document.getElementById('id2').value)) {
					document.getElementById('id2').style.color = "#000000";
					document.getElementById('id2').style.display = "none"
					document.getElementById('id3').style.display = "block"
					draw(1,0);
				}
				else{
					document.getElementById('id2').style.color = "#ff0000";
					draw(3,2);
				}
			}
		   
			function check3(){
				if (c==parseInt(document.getElementById('id3').value)) {
					document.getElementById('id3').style.color = "#000000";
					document.getElementById('id3').style.display = "none"
					draw(1,0);
				}
				else{
					document.getElementById('id3').style.color = "#ff0000";
				}
			}              

			function getRandomArbitrary(min, max) {
					return Math.floor(Math.random() * (max - min) + min);
			}
               
               
                function draw(s,n){

					var example = document.getElementById("example"),
						ctx     = example.getContext('2d');
						img = new Image();

						example.height = 480;
						example.width  = 875;
 
                        img.src = "sprite.png";
 
							//5 - это 190.
							// 1 - 38
           
                        img.onload = function(s) {    // Событие onLoad, ждём момента пока загрузится изображение
							ctx.drawImage(img, 0, 100);  // Рисуем изображение от точки с координатами 0, 0
  
							ctx.beginPath();
							ctx.strokeStyle = "#D485AE";
							ctx.lineWidth = 1;
							ctx.moveTo(d+0, 100);
							ctx.quadraticCurveTo(d+(e/2),100-(a*10.3),d+e,100);
							//стрелка
							ctx.moveTo(d+e, 100);
							ctx.lineTo(d+e-5,95);
							ctx.moveTo(d+e, 100);
							ctx.lineTo(d+e-7,100);
							ctx.stroke();
							// line color
                        }
 
							if (n==1){
								ctx.fillStyle = "#FF8000";
								ctx.fillRect(250-3,5,14,20);
							}
							if (n==2){
								ctx.fillStyle = "#FF8000";
								ctx.fillRect(250-3+20,5,14,20);
							}                        

							ctx.fillStyle = "000000"
							ctx.font = "12pt Arial";
							ctx.strokeText(a, d+(e/2), 100-(a*6));
							if (s==1){ctx.strokeText(b, f+(g/2), 100-(b*6));}
							//ctx.strokeText(b, f+(g/2), 100-(b*6));
							if (s==0||s==3){
								ctx.strokeText(a+"+"+b+"="+"?", 250, 20);
							} else{
								ctx.strokeText(a+"+"+b+"="+c, 250, 20);
							}

							if (s==3||s==1){
								ctx.beginPath();
								ctx.strokeStyle = "#D485AE";
								ctx.lineWidth = 1;
								ctx.moveTo(f, 100);
								ctx.quadraticCurveTo(f+(g/2),100-(b*10.3),f+g,100);
								 
								ctx.moveTo(f+g, 100);
								ctx.lineTo(f+g-5,95);
								ctx.moveTo(f+g, 100);
								ctx.lineTo(f+g-7,100);
								 
								ctx.lineWidth = 1
								ctx.stroke();
								// line color
							}
 
                       
							document.getElementById('id1').style.left = parseInt(d+(e/2))+'px';//d+(e/2) ;
							document.getElementById('id1').style.top=parseInt(90-(a*6))+'px' ;
					   
							document.getElementById('id2').style.left = parseInt(f+(g/2))+'px';//d+(e/2) ;
							document.getElementById('id2').style.top=parseInt(90-(b*6))+'px' ;
						   
							document.getElementById('id3').style.left = parseInt(295)+'px';//d+(e/2) ;
							document.getElementById('id3').style.top=parseInt(12)+'px' ;
				}
