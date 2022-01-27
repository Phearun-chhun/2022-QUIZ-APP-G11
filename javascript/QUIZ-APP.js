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
}

function removeQuizPage(event) {
    event.preventDefault();
    let hello = event.target.parentElement.parentElement.parentElement.parentElement;
    hello.remove();
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

// add question
let tasks = [];

function addQuestion(event) {
    event.preventDefault();
    let task = {};
    var getValueFromTitle = document.getElementById('title');
    task['Title'] = getValueFromTitle.value;
    var getValueQuestion = document.getElementById('inputQuestion');
    task['Question'] = getValueQuestion.value;
    let getAnswer1 = document.querySelector('.input1');
    let getAnswer2 = document.querySelector('.input2');
    let getAnswer3 = document.querySelector('.input3');
    let getAnswer4 = document.querySelector('.input4');

    values1 = getAnswer1.value;
    values2 = getAnswer2.value;
    values3 = getAnswer3.value;
    values4 = getAnswer4.value;
    task['answer1'] = values1;
    task['answer2'] = values2;
    task['answer3'] = values3;
    task['answer4'] = values4;
    // }

    tasks.push(task);
    console.log(tasks);
    display(tasks)
}
// function() 
function display(array) {
    // to delete old node 

    let containerOld = document.getElementsByClassName("newContainer");
    if (containerOld.length > 0) {
        containerOld[0].remove()
    }
    let newContainer = document.createElement('div');
    newContainer.className = 'newContainer';
    document.querySelector(".container5").appendChild(newContainer);


    for (let i in array) {

        let smallCon = document.createElement("div");
        smallCon.setAttribute("class", "smallCon")
        newContainer.appendChild(smallCon);
        let ques = document.createElement('div');
        ques.className = 'ques';
        ques.textContent = 'Question: ' + array[i].Question;
        console.log(ques);
        // title
        let titleQuiz = document.createElement('div');
        titleQuiz.className = 'titleQuiz';
        titleQuiz.textContent = 'Lesson: ' + array[i].Title;
        // diplay answer
        let allAnswer = document.createElement('div');
        allAnswer.className = 'allAnswer';
        let ans1 = document.createElement('div');
        let ans2 = document.createElement('div');
        let ans3 = document.createElement('div');
        let ans4 = document.createElement('div');
        ans1.className = 'ans1';
        ans2.className = 'ans2';
        ans3.className = 'ans3';
        ans4.className = 'ans4';
        // let typeRadio = document.createElement('input')
        // typeRadio.className = 'typeRadio';
        // typeRadio.type = 'radio';
        ans1.textContent = array[i].answer1;
        ans2.textContent = array[i].answer2;
        ans3.textContent = array[i].answer3;
        ans4.textContent = array[i].answer4;

        // underline
        let finishUnderline = document.createElement('div');
        finishUnderline.className = 'underline';

        smallCon.appendChild(titleQuiz);
        smallCon.appendChild(ques)
        smallCon.appendChild(allAnswer)
        smallCon.appendChild(finishUnderline)
        allAnswer.appendChild(ans1);
        allAnswer.appendChild(ans2);
        allAnswer.appendChild(ans3);
        allAnswer.appendChild(ans4);
        // button remove
        let moreButton = document.createElement('div');
        moreButton.className = 'moreButton';
        let edit = document.createElement('img');
        edit.src = 'image/edit.png';
        let remove = document.createElement('img');
        remove.src = 'image/bin.png';
        moreButton.appendChild(edit)
        moreButton.appendChild(remove)
            // console.log(newContainer)
        smallCon.appendChild(moreButton)
    }

}


function createQuestion() {
    document.querySelector('.global-container').style.display = 'block';
}
// play quiz
function playQuiz() {
    document.querySelector('.global-container').style.display = 'none';
    startPlayQuiz()
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



// button remove first page
let btnAdd = document.getElementById('add');
btnAdd.addEventListener("click", addQuestion);
let addButton = document.querySelector(".btn-start");
addButton.addEventListener("click", removePage);
document.querySelector('.global-container').style.display = 'none';
// play-quiz
let button_play_quiz = document.querySelector('.button-play-quiz');
button_play_quiz.addEventListener('click', playQuiz)