   function handleit()
{
      let p=document.getElementById("start")
      let btn=document.getElementById("btn").style.display='none'
     // p.innerHTML="Quiz will start in few minutes"
      let count=3
      let timer=setInterval(() => {
        
        p.innerHTML=`${count}`
        count--;
         if(count===-1)
         {
            clearInterval(timer)
            p.innerHTML="Go !"
            setTimeout(()=>{
              startQuiz()
            },1000)
         }
         
      }, 1000);
     
      function startQuiz()
      {
        p.innerHTML="Quiz started !"
      }
     

}   