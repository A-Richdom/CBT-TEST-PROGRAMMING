let index = 0;
let time = 20
let timer = document.getElementById('timer')
let score;
let display= document.getElementById('display')
let questions = [
	{
		question: "Who is the bedrock of any meaningful development ?",
		options: ["Surveyor", "Builder", "Programmer"],
        answer: "Surveyor",
        chosen: "",
    },
    {
        question: "The act of taking measurement of the land and space refers to _?",
        options: ["Building", "Surveying", "Barbering"],
        answer: "Surveying",
        chosen: "",
    },
    {
        question: "The name of the president of Nigeria is _ ?",
        options: ["ABAT", "Buhari", "Obasanjo",],
        answer: "Buhari",
        chosen: ""
    },

];


function displayquestions() {
    document.querySelector('#display').innerHTML = ''
    document.querySelector('#display').innerHTML += `<p class="fs-4 text-warning">${index + 1}. ${questions[index].question}</p>`

    questions[index].options.forEach((element) => {
        // let check = ''
        // if (questions[index].chosen == element) {
        //     check=='checked'
            
        // }
			document.querySelector("#display").innerHTML += `<p>
        <input ${questions[index].chosen == element ? "checked" : ""}
			 type="radio" name="answer" oninput="check('${element}')"> ${element} </p>`;
    });
    countdown()
    
    // let btns = document.querySelectorAll('.controls')
    // btns.forEach((element) => element.addEventListener {'click',myclick });
    // console.log(myclick);
}

let timmrr;
function countdown() {
	if (time>=0) {
		timer.innerHTML = time;
    }
    else {
		clearTimeout(timmrr);
		submit();
	}
	time--;
	timmrr = setTimeout(countdown, 2000);
}

function start() {
    displayquestions() 
    countdown()
}

function answer(ans) {
    questions[index].chosen=ans
    
}
// function myclick(event) {
//     if (event.target.innerHTML == "Next") {
//         if (questions[index + 1]) {
//             index++
//             display()
            
//         }
//     }    
// }
function Next() {
    if (questions[index + 1]) {
        index++
        displayquestions()
    } else {
        // display()
    }  
}
function Previous() {
    if (questions[index - 1]) {
        index--
        displayquestions()
        
    } else {
        displayquestions()
        
    }   
}
function check(element) {
    questions[index].chosen=element
    
}
// function submit(element) {
//     score = questions.filter(function (element) {
// 			return element.chosen == element.answer;
//     });
// show.innerHTML = `<h2> You have ${
// 	(score.length / questions.length) * 100
// }% <h2><button onclick='transcript()'>Show Transcript</button>`;
  
// }



function submit() {
    score = questions.filter(function (element, index) {
        return element.chosen==element.answer
    })
    document.querySelector("#display").innerHTML = `<p>Total:${score.length}/${questions.length}
    <h4>${(score.length / questions.length) * 100}%</h4>
    <button class="btn btn-primary" onclick="preview()">Preview</button></p>`
    
    clearTimeout(timmrr)
}

function preview(element) {

    questions.forEach(function (element) {
        clearTimeout(timmrr)
        display.innerHTML += `<p>
        <p>Question:${element.question}</p>
        <p>Answer:${element.answer}</p>
        <p>Chosen:${element.chosen}</p>
        </p>`
        // console.log(questions);
    })
    
}
