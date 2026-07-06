 
 let countries=[]
 let correctAnswer=""
 let score=0
 let currentQuestion=1;
 let totalQuestions=10
   let img = document.getElementById("flag");
   img.style.display='none'
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
              startCountdownFinished()
            },1000)
         }
         
      }, 1000);
     
   function startCountdownFinished(){
       p.innerHTML="Quiz started !"
      startQuiz()
     }
   

}  

  async function startQuiz()
      {
        img.style.display='block'
        document.getElementById("question").innerHTML =
`Question ${currentQuestion} / ${totalQuestions}`;
document.getElementById("score").innerHTML=`Score : ${score}`
       if(countries.length===0){
   let countryData=await fetch("https://api.restcountries.com/countries/v5",{headers:{'Authorization':'Bearer you api here'}})
        let response=await countryData.json()

        countries=response.data.objects
       }
     
//        console.log(response.data);
// console.log(response.data.objects);
// console.log(response.data.objects.length);
         let randomindex=Math.floor(Math.random()*countries.length)
        let randomCountry = countries[randomindex];
        countries.splice(randomindex,1)
        console.log(randomCountry);
       
        img.src=randomCountry.flag.url_svg;
         correctAnswer = randomCountry.names.common;
        let options = [correctAnswer];
        while(options.length<4){
             let randomIndex = Math.floor(Math.random() * countries.length);
              let randomName = countries[randomIndex].names.common;
                 if (!options.includes(randomName)) {
        options.push(randomName);
    }
  
        }
          options.sort(() => Math.random() - 0.5);
let optionContainer = document.getElementById("options");

optionContainer.innerHTML = "";

options.forEach((option) => {
    optionContainer.innerHTML += `
        <button onclick="checkAnswer('${option}')">${option}</button>
    `;
});
      } 
  function checkAnswer(selectedAnswer){
      if(selectedAnswer===correctAnswer){
        score++;
        console.log(score)
      }
      else{
        console.log("wrong")
      }
      currentQuestion++;
      if(currentQuestion>totalQuestions){
        // alert(`Quiz Finished\n Score:${score}/${totalQuestions}`);
        document.getElementById("quiz").style.display="none"
        document.getElementById("result").style.display="block"
        document.getElementById("finalScore").innerHTML =
`Score : ${score} / ${totalQuestions}`;
    let accuracy=(score/totalQuestions)*100
    document.getElementById("accuracy").innerHTML =
`Accuracy : ${accuracy}%`;
      
        return
      }
      startQuiz()
     }
    
     function restartQuiz(){
   location.reload()
     }