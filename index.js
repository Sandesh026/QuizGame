const question=[
    {
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b':'CSS',
    'c':'JS',
    'd':'PHP',
    'correct':'a'
    },
    {
        'que': 'Which of the following is a style language?',
        'a': 'HTML',
        'b':'CSS',
        'c':'JS',
        'd':'PHP',
        'correct':'b'
        },
        {
            'que': 'Which of the following is a java language?',
            'a': 'HTML',
            'b':'CSS',
            'c':'JS',
            'd':'PHP',
            'correct':'c'
            }
]
let index=0;
let total1 = question.length;
let right=0;
    wrong=0;
const quesbox= document.getElementById("quesbox")
const optionInputs=document.querySelectorAll('.options')
const loadQuestion=()=>{
    const data = question[index]
    quesbox.innerText= `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;

    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}
const submitQuiz=()=>{
    const data = question[index];
    const ans = getAnswer()
    if (ans=== data.correct) {
        right++;
    }else{
        wrong++;  
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=()=>{
  optionInputs.forEach(
    (input)=>{
        if (input.checked) {
            return input.value;
        }
    }
  )
}

    

loadQuestion()