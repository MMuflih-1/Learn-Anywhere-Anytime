
//    *****************MENU BUTTON**************
const toggle = document.querySelector('.toggle')
const nav = document.querySelector('.nav')

toggle.addEventListener('click', () => {
	toggle.classList.toggle('active');
	nav.classList.toggle('active');
})



//  ******************QUIZ***************
const quiz = [
    {
        question: "Which is greater? f(n)= log(n), g(n)= nlog(n)",
        ans1text: "f(n) = O(g(n))",
        ans2text: "f(n) = Omega(g(n))",
        ans3text: "They're equal",
        ans4text: "none",
        answer: "f(n) = O(g(n))",
    },
    {
        question: "If f(n) = O(g(n)) then f(n) + g(n) is:",
        ans1text: "O(g(n))",
        ans2text: "O(f(n))",
        ans3text: "O(f(n)) * O(g(n))",
        ans4text: "Cannot be determined",
        answer: "O(g(n))",
    },{
        question: "If f(n) = log(n) + 1, then:",
        ans1text: "f(n) = Omega(1)",
        ans2text: "f(n) = Omega(log(n) + 1)",
        ans3text: "f(n) = Omega(log(n))",
        ans4text: "all above",
        answer: "f(n) = Omega(log(n))",
    },
    {
        question: "What's the closest time complexity of the function f(n) = nlog(4) + log(n)",
        ans1text: "O(n)",
        ans2text: "O(nlog(n))",
        ans3text: "O(n^2)",
        ans4text: "none of the above",
        answer: "O(n)",

    }
];

const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent);
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);


const next_Button = document.getElementById("nextButton");

let currenQuestion = 0;
let score = 0;

console.log(quiz[currenQuestion].question);
console.log(quiz[currenQuestion].ans1text);
console.log(quiz[currenQuestion].ans2text);
console.log(quiz[currenQuestion].ans3text);
console.log(quiz[currenQuestion].ans4text);

question.textContent = quiz[currenQuestion].question;
option_a.textContent = quiz[currenQuestion].ans1text;
option_b.textContent = quiz[currenQuestion].ans2text;
option_c.textContent = quiz[currenQuestion].ans3text;
option_d.textContent = quiz[currenQuestion].ans4text;



next_Button.addEventListener("click", () =>{
	const checkedAns = document.querySelector('input[type = "radio"]:checked')
	console.log(checkedAns);

	if(checkedAns == null){
		alert("Please Choose an Answer");
	}
	else{
		if(checkedAns.nextElementSibling.textContent === quiz[currenQuestion].answer){
			score++;
		}

		currenQuestion++;

		if(currenQuestion < quiz.length){
			question.textContent = quiz[currenQuestion].question;
			option_a.textContent = quiz[currenQuestion].ans1text;
			option_b.textContent = quiz[currenQuestion].ans2text;
			option_c.textContent = quiz[currenQuestion].ans3text;
			option_d.textContent = quiz[currenQuestion].ans4text;
			checkedAns.checked = false;
		}
		else{
			alert("Your Score is "+ score + " out of "+ quiz.length);
			location.reload();
		}
	}
});