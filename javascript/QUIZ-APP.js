// remove to display new page
// remove firstPage
// remove to display new page

function removePage(event) {
    event.preventDefault();
    let li = event.target.parentElement.parentElement;
    li.remove();
    startOrCreateQuiz()
}

function removeCreatePage(event) {
    event.preventDefault();
    let hello = event.target.parentElement.parentElement.parentElement.parentElement;
    hello.remove();
    createQuestion();
    formQuestion();
    let addQues = document.querySelector('.btn_createQuestion');
    addQues.addEventListener('click', addQuestion)
        // addQuestion(event)
        // startPlayQuiz()
}

function removeQuizPage(event) {
    event.preventDefault();
    let hello = event.target.parentElement.parentElement.parentElement.parentElement;
    hello.remove();
    // createQuestion()
    startPlayQuiz();

}
// second page

function startOrCreateQuiz() {

    let container2 = document.createElement("div");
    container2.className = "container2";
    document.body.appendChild(container2);

    let navBar = document.createElement("nav");
    container2.appendChild(navBar);


    let logo = document.createElement("h1");
    logo.className = "logo";
    logo.textContent = "QUIZ APP";
    navBar.appendChild(logo);

    let menuBar = document.createElement("div");
    menuBar.className = "allMenu";
    navBar.appendChild(menuBar);

    let menu1 = document.createElement("li");
    // menu1.src="../image/add-button.png";
    menu1.className = "menu1";

    menu1.textContent = "ADD";

    menuBar.appendChild(menu1)
    let menu2 = document.createElement("li");
    menu2.className = "menu2";
    menu2.textContent = "EDIT";

    // menu2.src="../image/edit.png";
    menuBar.appendChild(menu2);
    let menu3 = document.createElement("li");
    menu3.className = "menu3";
    menu3.textContent = "DELETE";
    // menu3.src="../image/remove-button.png";
    menuBar.appendChild(menu3)
    let mainCard = document.createElement("div");
    mainCard.className = "mainCard";
    container2.appendChild(mainCard);

    let firstCard = document.createElement("div");
    firstCard.className = "firstCard";
    mainCard.appendChild(firstCard);

    let headerCard = document.createElement("h1");
    headerCard.textContent = "CREATE QUESTION";
    firstCard.appendChild(headerCard);

    let imgCard = document.createElement("img");
    imgCard.src = "../image/question.png";
    firstCard.appendChild(imgCard);

    let btn = document.createElement("div");
    btn.className = "btn-createQuestion";
    firstCard.appendChild(btn);

    let btns = document.createElement("button");
    btns.className = 'btn-create';
    btns.textContent = "Create";
    btn.appendChild(btns);
    console.log(btn)
        // card 2
    let secondCard = document.createElement("div");
    secondCard.className = "secondCard";
    mainCard.appendChild(secondCard);
    let headerCard2 = document.createElement("h1");
    headerCard2.textContent = "START A QUIZ";
    secondCard.appendChild(headerCard2);

    let imgCard2 = document.createElement("img");
    imgCard2.src = "../image/play.png";
    secondCard.appendChild(imgCard2);

    let btn2 = document.createElement("div");
    btn2.className = "btn-start-quiz";
    secondCard.appendChild(btn2);

    let btns3 = document.createElement("button");
    btns3.className = 'btn-startQuiz'
    btns3.textContent = "Start";
    btn2.appendChild(btns3);
    console.log(btn2);
    // createQuizButton 
    // quizPage
    let createButton = document.querySelector(".btn-create");
    createButton.addEventListener("click", removeCreatePage);
    let createButton1 = document.querySelector(".btn-startQuiz");
    createButton1.addEventListener("click", removeQuizPage);

}


function createQuestion() {

    let container3 = document.createElement('div');
    container3.className = 'container3';
    document.body.appendChild(container3);

    let navBar = document.createElement('nav');
    container3.appendChild(navBar);
    // style of navBar
    navBar.style.backgroundColor = '#0e748b';
    navBar.style.display = 'flex';
    navBar.style.justifyContent = 'space-between';
    let logo = document.createElement("h1");
    logo.className = "logo";
    logo.textContent = "QUIZ APP";
    logo.style.color = 'orange'
    logo.style.marginLeft = '10px';
    navBar.appendChild(logo);

    let menuBar = document.createElement("div");
    menuBar.className = "allMenu";
    navBar.appendChild(menuBar);

    let menu1 = document.createElement("li");
    menu1.className = "menu1";

    menu1.textContent = "ADD";
    menu1.style.fontSize = '1.5rem';
    menuBar.appendChild(menu1);
    // create form input
    let form = document.createElement('form');
    let form_description = document.createElement('div');
    form_description.className = 'form-description';
    // blank_quiz
    let blank_quiz = document.createElement('div');
    blank_quiz.className = 'blank_quiz';
    let inputOfBlankQuiz = document.createElement('input');
    inputOfBlankQuiz.id = 'blank_quiz';
    inputOfBlankQuiz.type = 'text';
    inputOfBlankQuiz.placeholder = 'Blank Quiz ';
    let spanOfBlankQuiz = document.createElement('div')
    spanOfBlankQuiz.className = 'underline';
    form.appendChild(form_description)
    blank_quiz.appendChild(inputOfBlankQuiz);
    blank_quiz.appendChild(spanOfBlankQuiz)
    form_description.appendChild(blank_quiz)
        // form_description
    let formDescription = document.createElement('input');
    formDescription.id = 'formDescription';
    formDescription.type = 'text';
    formDescription.placeholder = 'Form description';
    form.appendChild(formDescription)
    form_description.appendChild(formDescription)
    console.log(form)
    document.body.appendChild(form)
        // let addQues = document.querySelector('.btn_createQuestion');
        // addQues.addEventListener('click', addQuestion)
        // to create question

}

// start play a quiz

function startPlayQuiz() {
    let container4 = document.createElement('div');
    container4.className = 'container4';
    document.body.appendChild(container4);

    let navBar = document.createElement('nav');
    container4.appendChild(navBar);
    // style of navBar
    navBar.style.backgroundColor = '#0e748b';
    navBar.style.display = 'flex';
    navBar.style.justifyContent = 'space-between';
    let logo = document.createElement("h1");
    logo.className = "logo";
    logo.textContent = "QUIZ APP";
    logo.style.color = 'orange'
    logo.style.marginLeft = '10px';
    navBar.appendChild(logo);

    console.log('Hello')
}
// to add the question-------------------------------------------------
function formQuestion() {
    let formQuestion = document.createElement('div');
    formQuestion.className = 'formQuestion';
    let form = document.createElement('form');
    form.name = 'add_question';
    let form_description = document.createElement('div');
    form_description.className = 'form-description-create-qu';
    // blank_quiz
    let blank_quiz = document.createElement('div');
    blank_quiz.className = 'blank_quiz-create-qu';
    let inputOfBlankQuiz = document.createElement('input');
    inputOfBlankQuiz.id = 'blank_quiz-create-qu';
    inputOfBlankQuiz.type = 'text';
    inputOfBlankQuiz.placeholder = 'Question';
    blank_quiz.appendChild(inputOfBlankQuiz);
    form_description.appendChild(blank_quiz)
    form.appendChild(form_description)
    formQuestion.appendChild(form)
    console.log(form)
    document.body.appendChild(formQuestion)
    for (let i = 0; i < 4; i++) {
        let answer = document.createElement('div');
        answer.className = 'answer';
        let input1 = document.createElement('input');
        input1.id = 'answer';
        input1.type = 'text';
        let input2 = document.createElement('input');
        input2.id = 'checkAnswer';
        input1.placeholder = 'Answer';
        input2.type = 'radio';
        input2.name = 'radio';
        answer.appendChild(input2)
        answer.appendChild(input1);
        blank_quiz.append(answer)
    }
    let underline1 = document.createElement('div');
    underline1.className = 'underline1';
    blank_quiz.appendChild(underline1);
    let creatQuestion = document.createElement('div');
    creatQuestion.className = 'btn';
    let buttonCreateQuestion = document.createElement('input');
    buttonCreateQuestion.type = 'button';
    buttonCreateQuestion.value = 'ADD';
    buttonCreateQuestion.className = 'btn_createQuestion';
    creatQuestion.append(buttonCreateQuestion);
    blank_quiz.appendChild(creatQuestion)
}

function addQuestion(event) {
    event.preventDefault();
    let task = []
    let getValueFromInput = document.querySelector('#blank_quiz-create-qu');
    inputValue = getValueFromInput.value;

    let answerValue = document.querySelectorAll('#answer');
    for (let k of answerValue) {
        valueAnswer = k.value;

    }
    let kk = task.push(valueAnswer);
    showValue(kk);
}
// show value after click add

function showValue() {
    let formQuestion = document.createElement('div');
    formQuestion.className = 'formQuestion';
    let form = document.createElement('form');
    form.name = 'add_question';
    let form_description = document.createElement('div');
    form_description.className = 'form-description-qu-add';
    // blank_quiz
    let blank_quiz = document.createElement('div');
    blank_quiz.className = 'blank_quiz_qu_add';
    let inputOfBlankQuiz = document.createElement('div');
    inputOfBlankQuiz.id = 'blank_quiz';
    inputOfBlankQuiz.textContent = inputValue;
    blank_quiz.appendChild(inputOfBlankQuiz);
    form_description.appendChild(blank_quiz)
    form.appendChild(form_description)
    formQuestion.appendChild(form)
    console.log(form)
    document.body.appendChild(formQuestion)
    for (let i = 0; i < 4; i++) {
        let answer = document.createElement('div');
        answer.className = 'answer';
        let input1 = document.createElement('div');
        input1.id = 'answer';
        input1.textContent = valueAnswer;
        let input2 = document.createElement('input');
        input2.id = 'checkAnswer';
        input1.placeholder = 'Answer';
        input2.type = 'radio';
        input2.name = 'radio';
        answer.appendChild(input2)
        answer.appendChild(input1);
        blank_quiz.append(answer)
    }
    let underline1 = document.createElement('div');
    underline1.className = 'underline1';
    blank_quiz.appendChild(underline1);
}
let addButton = document.querySelector(".btn-start");
addButton.addEventListener("click", removePage);