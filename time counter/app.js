let days;
let hrs;
let min;
let sec;
let originaldays;
let originalhrs;
let originalmin;
let originalsec;
let starttimer;
let start=document.querySelector(".start")
let stop=document.querySelector(".stop")
let reset=document.querySelector(".reset")


// --------------------- form --------------------- 
let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    days=document.querySelector("#days").value
    hrs=document.querySelector("#hrs").value
    min=document.querySelector("#min").value
    sec=document.querySelector("#sec").value
    if(days=="" || hrs=="" || min=="" || sec=="" ){
        alert("do not submit the form with empty values")
    }
    else if(hrs>23 || min>59 || sec==59 ){
        alert("fill up the form with correct data format")
    }
    else{
        days=parseInt(days)
        hrs=parseInt(hrs)
        min=parseInt(min)
        sec=parseInt(sec)
        originaldays=days
        originalhrs=hrs
        originalmin=min
        originalsec=sec
        starttimercount()        
    }
})

// start stop reset function
start.addEventListener("click",()=>{
    starttimercount()    
})

stop.addEventListener("click",()=>{
    clearInterval(starttimer)
    abort()
})

reset.addEventListener("click",()=>{
    days=originaldays
    hrs=originalhrs
    min=originalmin
    sec=originalsec
    displaytime()
    clearInterval(starttimer)
    abort()

        

})

// display function
function displaytime(){
    let display=document.querySelector(".display")
   display.innerHTML=`${days>9?"":"0"}${days}:${hrs>9?"":"0"}${hrs}:${min>9?"":"0"}${min}:${sec>9?"":"0"}${sec}`
}

function reduce(){
    
    if(sec==0){
        if(min==0){
            if(hrs==0){
                if(days==0){
                    sec=0
                }
                else{
                    days-=1
                    hrs=23
                    min=59
                    sec=60
                }
 
            }
            else{
                hrs-=1
                min=59
                sec=60
            }
        }
        else{
            min-=1
            sec=60
        }
   }

 
   sec-=1
}


function starttimercount(){
    starttimer=setInterval(run,1400)    
}

// stop timer
function abort(){
    clearInterval(starttimer)
}



//  timer running function
function run(){


   document.querySelector(".display").style.display=""
   document.querySelector(".btngroup").style.display=""
   document.querySelector(".completedmsg").style.display="none"
   

   if((days==0 && hrs==0 && min==0 && sec==0) ||(days<0 && hrs<0 && min<0 && sec<0)){
    document.querySelector(".display").style.display="none"
    document.querySelector(".btngroup").style.display="none"
    document.querySelector(".completedmsg").style.display="block"
    abort()
    }
   else{

       displaytime()
      
      
        reduce()
   }
   
}


  














