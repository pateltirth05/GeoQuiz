   function handleit()
{
      let p=document.getElementById("start")
      let btn=document.getElementById("btn").style.display='none'
     // p.innerHTML="Quiz will start in few minutes"
      let count=2
      let timer=setInterval(() => {
        
        p.innerHTML=`${count}`
        count--;
         if(count===-1)
         {
            clearInterval(timer)
            p.innerHTML="Go !"
            setTimeout(()=>{
              handleit()
            },1000)
         }
         
      }, 1000);
     function handleit(){
       p.innerHTML="Quiz started !"
      startQuiz()
     }
     async function startQuiz()
      {
       
        let countryData=await fetch("https://api.restcountries.com/countries/v5",{headers:{'Authorization':'Bearer rc_live_a200429ed56e4b7f8f16cdf5d21c2e50'}})
        let response=await countryData.json()
//        console.log(response.data);
// console.log(response.data.objects);
// console.log(response.data.objects.length);
         let randomindex=Math.floor(Math.random()*response.data.objects.length)
         let countryindex=[randomindex]
         console.log(countryindex)
      }
     

}   