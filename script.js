$(document).ready(()=>{
   count1=0;
   count2=0;
   count3=0;

    // navtabs

    $(".nav-link").on("click",(e)=>{        
        let act=document.getElementsByClassName("active");
        act[0].className=act[0].className.replace("active","nav-link");
        e.target.className="active";
    })

    // nav menu

    $("#burger").on("click",()=>{
        $(".nav-bar")[0].classList.toggle("toggle")
    })
    $("#burger").on("click",()=>{
        $("#burger")[0].classList.toggle("toggle-line");
    })

// homepage animations


    $(window).on("scroll",()=>{
        $(".circle1")[0].style.transform=`translateZ(${pageYOffset/4}px)`
        $(".circle2")[0].style.transform=`translateZ(${pageYOffset/2}px)`
        $(".circle3")[0].style.transform=`translateZ(${2*pageYOffset}px)`
        $(".h-1")[0].style.transform=`translateZ(${pageYOffset}px)`
        $(".h-des")[0].style.transform=`translateX(${-pageYOffset}px)`

    })


   const options1={
       threshold:0.5
   }
   const observer_edu=new IntersectionObserver((entry)=>{
        if(!entry[0].isIntersecting){
             return;
        }
       else{
            
            $("#Education")[0].style.transition="1s";     
            $(".edu-left")[0].style.clipPath="polygon(100% 0%,100% 110%,0% 110%,0% 0%)";
            $(".edu-left")[0].style.transition="2s";

            for(i=0;i<$(".edu-data").length;i++){
                $(".edu-data")[i].classList.add("edu-data-ani");
            }
            
       }
   },options1);

   observer_edu.observe($(".edu-lr")[0]);




   let options2={
       threshold:0.5
   }

   const observer_rew=new IntersectionObserver((entry)=>{
       if(!entry[0].isIntersecting){
           return;
       }
       else{
            $(".rew")[0].classList.add("edu-rew-ani");
       }
        
   },options2)

   observer_rew.observe($(".rew")[0]);

   let options3={
       threshold:0.6
   }

   const skill1_observer=new IntersectionObserver((entry)=>{
        if(!entry[0].isIntersecting){
            return;
        }
        else{
            count1++;
            $(".scard")[0].classList.add("scard-ani");
        
            $(".sk-stroke")[0].style.strokeDashoffset="330";
            $(".sk-stroke")[0].style.transition="1.3s";
            if(count1<=1){

            let per=0;
            let id=setInterval(()=>{
                if(per<91){
                    per++;
                    $(".per")[0].innerHTML=`${per}%`;
                }
                
            },10);

            }
        }
            
       
    
   },options3);
   skill1_observer.observe($(".scard")[0]);

   let options4={
       threshold:0.5
   }
   const skill2_observer=new IntersectionObserver((entry)=>{
        if(!entry[0].isIntersecting){
            return;
        }
        else{
            $(".scard")[1].classList.add("scard-ani");
            $(".sk-stroke")[1].style.strokeDashoffset="330";
            $(".sk-stroke")[1].style.transition="1.3s";
            count2++;
            if(count2<=1){
                
               let per=0;
                let id=setInterval(()=>{
                    if(per<90){
                        per++;
                        $(".per")[1].innerHTML=`${per}%`;
                    }
                
                },10);
            }
        }
   },options4);
   skill2_observer.observe($(".scard")[1])

   let options5={
        threshold:0.5
    }

   const skill3_observer=new IntersectionObserver((entry)=>{
    if(!entry[0].isIntersecting){
        return;
    }
    else{
        $(".scard")[2].classList.add("scard-ani");
        $(".sk-stroke")[2].style.strokeDashoffset="410";
        $(".sk-stroke")[2].style.transition="1s";
        count3++;
        if(count3<=1){
            
            let per=0;
            let id=setInterval(()=>{
                if(per<70){
                    per++;
                    $(".per")[2].innerHTML=`${per}%`;
                }
            
            },10);
        }
    }
},options5);
skill3_observer.observe($(".scard")[2])

let options6={
    threshold:0.4
}
const f_l_observer=new IntersectionObserver((entry)=>{
    if(!entry[0].isIntersecting){
        return;
    }
    else{
        $(".f-l")[0].classList.add("f-l-ani");
    }
},options6);

f_l_observer.observe($(".f-l")[0]);

let options7={
    threshold:0.4
}
const f_r_observer=new IntersectionObserver((entry)=>{
    if(!entry[0].isIntersecting){
        return;
    }
    else{
        $(".f-r")[0].classList.add("f-r-ani");
    }
},options7);

f_r_observer.observe($(".f-r")[0]);

let options8={
    threshold:0.3
}

const f_bar_observer=new IntersectionObserver((entry)=>{
    if(!entry[0].isIntersecting){
        return;
    }
    else{
        entry.forEach((e)=>{
            e.target.classList.add("bar-val")
        })
    }
},options8);

let bar=document.querySelectorAll(".bar")
bar.forEach(e => {    
    f_bar_observer.observe(e);
});

let options9={
    threshold:0,
}

const work_img_observer=new IntersectionObserver((entry)=>{
    if(!entry[0].isIntersecting){
        return;
    }
    else{
        entry.forEach((e)=>{
            e.target.classList.add("wimg-ani")
        })
    }
},options9);

let wimg=document.querySelectorAll(".wimg")
wimg.forEach(e => {    
    work_img_observer.observe(e);
});

let options11={
    threshold:0.5
}
const softskills=new IntersectionObserver((entry)=>{
    if(!entry[0].isIntersecting){
        return;
    }
    else{
        $(".soft-l")[0].classList.add("soft-l-ani");
        $(".soft-r")[0].classList.add("soft-r-ani");
    }
    
},options11);

softskills.observe($(".soft-l")[0]);






let options10={
    threshold:0,
}
const Interest=new IntersectionObserver((entry)=>{
    if(!entry[0].isIntersecting){
        return;
    }
    else{
        $(".li-con")[0].classList.add("li-con-ani");
        let list_even=document.querySelectorAll(".li-con ol>span:nth-child(2n) li");
        let list_odd=document.querySelectorAll(".li-con ol>span:nth-child(2n+1) li");
        list_even.forEach((e)=>{
            
            e.classList.add("li2n");
        })
        list_odd.forEach((e)=>{
            
            e.classList.add("li2n1");
        })
    }
},options10);

Interest.observe($(".li-con")[0]);

let options12={
    threshold:0.6
}
const cont_l=new IntersectionObserver((entry)=>{
    if(!entry[0].isIntersecting){
        return;
    }
    else{
        console.log("ds")
        $(".img-con")[0].classList.add("img-con-ani");
        $(".personal")[0].classList.add("personal-ani")
    }
},options12);

cont_l.observe($(".cont-l")[0]);

let options13={
    threshold:0.6
}

const cont_r=new IntersectionObserver((entry)=>{
    if(!entry[0].isIntersecting){
        return ;
    }
    else{
        $(".cont-r")[0].classList.add("cont-r-ani")
    }
},options13)
cont_r.observe($(".cont-r")[0]);

})
