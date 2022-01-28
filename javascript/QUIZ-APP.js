var dataOfQuiz = [{
        question: 'what.....you doing right now??',
        answer1: 'Am',
        answer2: 'Is',
        answer3: 'Are',
        answer4: 'Was',
        correct_anser: 4
    },
    {
        question: 'I ..... to the movies tonight.',
        answer1: ' am going',
        answer2: 'are going',
        answer3: 'is going',
        answer4: 'was going',
        correct_anser: 2
    },
    {
        question: 'She ..... to london tomorrow morning.',
        answer1: ' is going',
        answer2: 'will go',
        answer3: 'is going to',
        answer4: 'was going',
        correct_anser: 3
    },
    {
        question: 'I..... my brother tomorrow.',
        answer1: ' are meeting',
        answer2: 'am meeting',
        answer3: 'is meting',
        answer4: 'met',
        correct_anser: 4
    },
    {
        question: 'My sister..... Tv in the living room',
        answer1: ' are watching',
        answer2: 'am watching',
        answer3: 'is watching',
        answer4: 'watched',
        correct_anser: 1
    },
    {
        question: "I... not.... to school today. I'm sick",
        answer1: ' Are/going to',
        answer2: 'am/going',
        answer3: 'is/going',
        answer4: 'was/going',
        correct_anser: 1
    },
    {
        question: "I....waiting for the bus.",
        answer1: ' Are/going to',
        answer2: 'am',
        answer3: 'is/going',
        answer4: 'was/going',
        correct_anser: 1
    },
    {
        question: "form of present progressive",
        answer1: ' S + to be + v_ing + obj',
        answer2: 'S + v(ed) +obj ',
        answer3: 'is/going',
        answer4: 'was/going',
        correct_anser: 1
    },
    {
        question: "What is present progressive use for??",
        answer1: 'Describe about the moment of the speaking',
        answer2: 'Talk about the future',
        answer3: 'Describe about the temporary situation',
        answer4: 'Talk about the past',
        correct_anser: 1
    },
    {
        question: "I.....you'll give use some advice",
        answer1: 'Am hoping',
        answer2: 'Is hoping',
        answer3: 'Are hoping',
        answer4: 'hoped',
        correct_anser: 1
    }
]



// remove to display new page
document.querySelector('.container4').style.display = 'none';
document.querySelector('.container6').style.display = 'none';


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
    // startPlayQuiz();
    startQuiz()

}
// second page

function startOrCreateQuiz() {
    document.querySelector('.container4').style.display = 'none';
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
    // createQuizButton 
    // quizPage
    let createButton = document.querySelector(".btn-create");
    createButton.addEventListener("click", removeCreatePage);
    let createButton1 = document.querySelector(".btn-startQuiz");
    createButton1.addEventListener("click", removeQuizPage);

}

// add question
var tasks = [];

function addQuestion(event) {
    event.preventDefault();

    var task = {};
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
    if (getValueFromTitle.value == '' || getValueQuestion.value == '' || values1 == '' || values2 == '' || values3 == '' || values4 == '') {
        window.alert('You must fill all input')
        radioValidation()
        console.log('validation')
    } else {
        task['answer1'] = values1;
        task['answer2'] = values2;
        task['answer3'] = values3;
        task['answer4'] = values4;
        let correctAnswer = document.getElementsByName('input');
        for (let k of correctAnswer) {
            if (k.checked) {
                task['correct_Answer'] = k.id;
            }
        }
        tasks.push(task);
        display(tasks)
    }


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
        smallCon.appendChild(moreButton)

    }

}
// check validation on radio

function radioValidation() {
    if (document.getElementById('1').checked || document.getElementById('2').checked || document.getElementById('3').checked || document.getElementById('4').checked) {
        window.alert('Your answer is selected')
    } else {
        window.alert('Please choose your answer!')
    }


}
// clear form after submit

// function clearForm() {
//     getValueFromTitle.Value = '';
// }

function createQuestion() {

    document.querySelector('.global-container').style.display = 'block';
    document.querySelector('.container4').style.display = 'none';
    document.querySelector('.container6').style.display = 'none';


}

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// user can play quiz-------------


var totalScores = 0;
var pages = 0;
var conToAlerts = false;
let indexOfNewTask = 0;

var theAnswers = document.getElementsByName("answers");

function displayTheNewQuestions() {
    for (var items of theAnswers) {
        if (items.checked) {
            items.checked = false;
            if (items.id == tasks[indexOfNewTask].correct_Answer) {
                totalScores += 10;
            }
            conToAlerts = true;
            indexOfNewTask += 1
            pages = indexOfNewTask + 1
        }

    }
    if (conToAlerts === false) {
        alert('Please choose the answer!');
    }
    console.log(totalScores);
    console.log("page" + pages);
    playQuiz()

}




// play quiz
function playQuiz() {
    document.querySelector('.global-container').style.display = 'none';
    document.querySelector('.container4').style.display = 'none';
    document.querySelector('.container6').style.display = 'block';

    // startPlayQuiz();
    // display()
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    if (indexOfNewTask < tasks.length) {
        let dates = tasks[indexOfNewTask];
        console.log(tasks)
        let container6add = document.querySelector(".container6")
            // document.body.appendChild(container4add)
        let theQuestionShow = document.querySelector('.headerQuestions');
        let first = document.querySelector('#e');
        let second = document.querySelector('#f');
        let third = document.querySelector('#g');
        let fourth = document.querySelector('#h');
        theQuestionShow.textContent = dates.Question;
        // text.textContent=tasks[i].question;
        first.textContent = dates['answer1'];
        second.textContent = dates['answer2'];
        third.textContent = dates['answer3'];
        fourth.textContent = dates['answer4'];
        container6add.style.display = "block"
    }
    conToAlerts = false;





}
// start play a quiz

// function startPlayQuiz() {
//     startQuiz()
// }

// user can play quiz-------------


var totalScore = 0;
var page = 0;
var conToAlet = false;
let number = 0;

var theAnswer = document.getElementsByName("answer");

function displayTheNewQuestion() {
    for (let item of theAnswer) {
        if (item.checked) {
            item.checked = false;
            if (item.id == dataOfQuiz[number].correct_anser) {
                totalScore += 10;
            }
            conToAlet = true;
            number += 1
            page = number + 1
        }

    }
    if (conToAlet == false) {
        alert('Please choose the answer!');

    }
    console.log(totalScore);
    console.log("page" + page);
    console.log("hello");
    startQuiz()

}

function startQuiz() {
    if (number < dataOfQuiz.length) {
        let date = dataOfQuiz[number];
        console.log(date)
        let container4add = document.querySelector(".container4")
        console.log(container4add);
        // document.body.appendChild(container4add)
        let theQuestionShow = document.querySelector('.headerQuestion');
        let first = document.querySelector('#a');
        let second = document.querySelector('#b');
        let third = document.querySelector('#c');
        let fourth = document.querySelector('#d');
        theQuestionShow.textContent = date.question;
        // text.textContent=dataOfQuiz[i].question;
        first.textContent = date.answer1;
        second.textContent = date.answer2;
        third.textContent = date.answer3;
        fourth.textContent = date.answer4;
        container4add.style.display = "block"
    }
    conToAlet = false;

}
// startQuiz()





// button remove first page
let btnAdd = document.getElementById('add');
btnAdd.addEventListener("click", addQuestion);
let addButton = document.querySelector(".btn-start");
addButton.addEventListener("click", removePage);
document.querySelector('.global-container').style.display = 'none';
// play-quiz
let button_play_quiz = document.querySelector('.button-play-quiz');
button_play_quiz.addEventListener('click', playQuiz)

let buttonSubmit = document.querySelector('.submit')
buttonSubmit.addEventListener('click', displayTheNewQuestion)
let buttonSubmits = document.querySelector('.submits')
buttonSubmits.addEventListener('click', displayTheNewQuestions)