const question = document.querySelectorAll(".question")
const answer = document.querySelectorAll(".answer")
console.log(question)
console.log(question[0])


question.forEach(function(element, index){
    addOrRemoveActive(element, index);

})


function addOrRemoveActive(element, index){
    element.addEventListener('click', () => {
        if(question[index].classList.contains("active")){
              question[index].classList.remove("active")
              answer[index].classList.remove("active")
          }else{
            question.forEach(function(element, index){
                question[index].classList.remove("active")
                answer[index].classList.remove("active")
            } )
            question[index].classList.add("active")
            answer[index].classList.add("active")
            }
        })
 }



/// outro metodo:

//  const itensPerguntasERespostas = document.querySelectorAll('.question');

//  itensPerguntasERespostas.forEach(function(item){
//     const question.addEventListener = document.querySelector(".active");
      

//    if(questionAtivaAtual){
//         questionAtivaAtual.classList.remove("active");
//       }

//     question.classList.add("active");
//  })



 // if i wanna one to come already active -- colocar uma class active em um dos itens no hHML and:


//  const itensPerguntasERespostas = document.querySelectorAll('.question');

//  itensPerguntasERespostas.forEach(function(item){
//     const question.addEventListener = document.querySelector(".activo");
//     questionAtivaAtual.classList.remove("active");

//     item.classList.add("ativo");
//  })


