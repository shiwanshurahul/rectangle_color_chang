var rec = document.querySelector("#rect");

rec.addEventListener("mousemove", function(dets){  //1->step 1
   var rectanglelocation = rec.getBoundingClientRect();  //This method returns the location,x-coordinate,y-coordinate ,width,length, top,bottom,left,right of the element relative to the viewport.
   //-> dets.clientX ->mouse ki x-axis ki location ; rectanglelocation.left ->rectangle ki left edge ki location =const
   var insiderectval = dets.clientX - rectanglelocation.left; //-> kitan andar hai mouse rect ke from left
   if(insiderectval < rectanglelocation.width/2){  //center se dekh rhe left ho ya right 
            var redcolor = gsap.utils.mapRange(0,rectanglelocation.width/2, 255, 0, insiderectval);       //left side me hai
            gsap.to(rec, {  //change the color of rect
               backgroundColor: `rgb(${redcolor}, 0,0)`,      //addEventlistener me hi hai toh call hota rhega
               ease: Power4,
            });
   }
   else{
        var bluecolor = gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width, 0, 255, insiderectval);              //right side me hai             
        gsap.to(rec, {
           backgroundColor: `rgb(0, 0,${bluecolor})`,      
           ease: Power4,
        });
         }
  //hm left se aa rhe -> center ki taraf jate hue intensity of color ko decrese krna hai so, highest at rectanglelocation.left
  // insiderectval increasin -> red instensity decreases = mapRange 
  //0->255 
  //GSAP allows you to create smooth transitions between different states of an object over time. 
})

rec.addEventListener("mouseleave", function(){
gsap.to(rec, {  //mouse rec se hata toh white ho jayega rec
   backgroundColor:"white",
})
})

