var dataOfQuiz = [{
        question: 'what.....you doing right now??',
        answer1: 'am',
        answer2: 'is',
        answer3: 'are',
        answer4: 'was',
        correct_answer: 3
    },
    {
        question: 'I ..... to the movies tonight.',
        answer1: ' am going',
        answer2: 'are going',
        answer3: 'is going',
        answer4: 'was going',
        correct_answer: 1
    },
    {
        question: 'She ..... to london tomorrow morning.',
        answer1: ' is going',
        answer2: 'will go',
        answer3: 'is going to',
        answer4: 'was going',
        correct_answer: 1
    },
    {
        question: 'I..... my brother tomorrow.',
        answer1: ' are meeting',
        answer2: 'am meeting',
        answer3: 'is meting',
        answer4: 'met',
        correct_answer: 2
    },
    {
        question: 'My sister..... Tv in the living room',
        answer1: ' are watching',
        answer2: 'am watching',
        answer3: 'is watching',
        answer4: 'watched',
        correct_answer: 3
    },
    {
        question: "I... not.... to school today. I'm sick",
        answer1: ' are/going to',
        answer2: 'am/going',
        answer3: 'is/going',
        answer4: 'was/going',
        correct_answer: 2
    },
    {
        question: "I....waiting for the bus.",
        answer1: ' are/going to',
        answer2: 'am',
        answer3: 'is/going',
        answer4: 'was/going',
        correct_answer: 2
    },
    {
        question: "form of present progressive",
        answer1: ' S + to be + v_ing + obj',
        answer2: 'S + v(ed) +obj ',
        answer3: 'is/going',
        answer4: 'was/going',
        correct_answer: 1
    },
    {
        question: "What is present progressive use for??",
        answer1: 'Describe about the moment of the speaking',
        answer2: 'Talk about the future',
        answer3: 'Describe about the temporary situation',
        answer4: 'Talk about the past',
        correct_answer: 1
    },
    {
        question: "I.....you'll give use some advice",
        answer1: 'hoped',
        answer2: 'is hoping',
        answer3: 'are hoping',
        answer4: 'was hoping',
        correct_answer: 4
    },
]

// remove to display new page
document.querySelector('.container4').style.display = 'none';
document.querySelector('.container6').style.display = 'none';
document.querySelector('.Total-score').style.display = 'none'


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
    document.querySelector('.Total-score').style.display = 'none';
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
        if (radioValidation()) {
            tasks.push(task);
            display(tasks)
                // ===================================== to blank the input =============================================
            getValueFromTitle.value = ""
            getValueQuestion.value = ""
            getAnswer1.value = ""
            getAnswer2.value = ""
            getAnswer3.value = ""
            getAnswer4.value = ""
                // =======================================================================
        };
    }
}
// check validation on radio

function radioValidation() {
    let radio = false
    if (document.getElementById('1').checked == true || document.getElementById('2').checked == true || document.getElementById('3').checked == true || document.getElementById('4').checked == true) {

        radio = true;
    } else {
        window.alert('Please choose your answer!')
    }

    return radio
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
        // display answer
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
        // ====================================================================(add)
        edit.id = i;
        edit.className = "checkTheAnswer";
        edit.addEventListener('click', editTheQuestion);
        // ========================================================
        edit.src = 'image/edit.png';
        let remove = document.createElement('img');
        // ================================================
        remove.id = i;
        // ============================
        remove.addEventListener('click', removeTheQuestion);
        remove.src = 'image/bin.png';
        moreButton.appendChild(edit)
        moreButton.appendChild(remove)
        smallCon.appendChild(moreButton)
    }

}

function createQuestion() {

    document.querySelector('.global-container').style.display = 'block';
    document.querySelector('.container4').style.display = 'none';
    document.querySelector('.container6').style.display = 'none';
    document.querySelector('.Total-score').style.display = 'none';


}
// show the total of the score
var corrects = ''

function showTotal() {
    document.querySelector('.global-container').style.display = 'none';
    document.querySelector('.container4').style.display = 'none';
    document.querySelector('.Total-score').style.display = 'block'

    let correct = document.querySelector('.correct')
    let incorrect = document.querySelector('.incorrect')
    for (var value1 of correctAnswer) {
        var store1 = document.createElement('div')
        store1.className = 'correct_answer'
        store1.textContent = value1
        correct.appendChild(store1)
    }

    for (var value2 of incorrectAnswer) {
        var store2 = document.createElement('div')
        store2.className = 'incorrect_answers'
        store2.textContent = value2
        incorrect.appendChild(store2)
    }
}

function closePageQuiz() {
    alert('Are you sure to exit?')
    window.close()
}
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// user can play quiz-------------

var totalScores1 = 0;
var pages = 1;
var conToAlerts = false;
var indexOfNewTask = 0;
var correctanswer1 = []
var incorrectanswer1 = []
    // ===============.>>>>>>>>> Add new here tooo=================

var theAnswer = document.getElementsByName("answer");
let pages1 = document.querySelector('.page1')
let score1 = document.querySelector('.score1')
var theAnswers = document.getElementsByName("answers");
let total_scores = document.querySelector('.total')

function displayTheNewQuestions() {
    var correct1 = []
    var incorrect1 = []
    for (var items of theAnswers) {
        if (items.checked) {
            items.checked = false;
            if (items.value == tasks[indexOfNewTask].correct_Answer) {
                totalScores1 += 10;
                correct1.push(tasks[indexOfNewTask].Question)
                score1.textContent = 'Score:' + totalScores1
                correctanswer1.push(correct1)
            } else {
                incorrect1.push(tasks[indexOfNewTask].Question)
                incorrectanswer1.push(incorrect1)
            }
            conToAlerts = true;
            indexOfNewTask += 1
            console.log(indexOfNewTask);
            pages = indexOfNewTask + 1
        }
    }

    total_scores.textContent = 'Total Score:' + totalScores1
    console.log(indexOfNewTask);
    if (indexOfNewTask >= tasks.length) {
        showTotalofquestion();
    } else if (conToAlerts === false) {
        alert('Please choose the answer!');
    }
    // console.log(totalScores);
    console.log("page" + pages);
    pages1.textContent = "Pages:" + pages
    playQuiz()
}
// show total of the user create question by themself

var corrects1 = ''
var incorrects1 = ''

function showTotalofquestion() {
    document.querySelector('.container6').style.display = 'none';
    document.querySelector('.global-container').style.display = 'none';
    document.querySelector('.container4').style.display = 'none';
    document.querySelector('.Total-score').style.display = 'block'

    let correct1 = document.querySelector('.correct')
    let incorrect1 = document.querySelector('.incorrect')
    for (var value2 of correctanswer1) {
        var store1 = document.createElement('div')
        store1.className = 'correct_answers'
        store1.textContent = value2
        correct1.appendChild(store1)
    }

    for (var value3 of incorrectanswer1) {
        var store3 = document.createElement('div')
        store3.className = 'incorrect_answers1'
        store3.textContent = value3
        incorrect1.appendChild(store3)
    }
}
// play quiz
function playQuiz() {
    document.querySelector('.global-container').style.display = 'none';
    document.querySelector('.container4').style.display = 'none';
    document.querySelector('.container6').style.display = 'block';
    document.querySelector('.Total-score').style.display = 'none';
    // startPlayQuiz();
    // display()
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    if (indexOfNewTask < tasks.length) {
        let dates = tasks[indexOfNewTask];
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
// user can play quiz-------------
var totalScore = 0;
var page = 1;
var conToAlet = false;
let number = 0;
var correctAnswer = []
var incorrectAnswer = []
var theAnswer = document.getElementsByName("answer");
let pages2 = document.querySelector('.page')
let scores = document.querySelector('.score')
let total_score = document.querySelector('.total')
var theAnswer = document.getElementsByName("answer");
// to display the question
function displayTheNewQuestion() {
    document.querySelector('.container4').style.display = 'none';
    var correct = []
    var incorrect = []
    for (let item of theAnswer) {
        if (item.checked) {
            item.checked = false;
            if (item.value == dataOfQuiz[number].correct_answer) {
                totalScore += 10;
                correct.push(dataOfQuiz[number].question)
                scores.textContent = 'Score:' + totalScore
                correctAnswer.push(correct)
            } else {
                incorrect.push(dataOfQuiz[number].question)
                incorrectAnswer.push(incorrect)
            }
            conToAlet = true;
            number += 1
            page = number + 1
        }

    }
    total_score.textContent = "Total Score:" + totalScore
    if (number >= dataOfQuiz.length) {
        document.querySelector('.Total-score').style.display = 'block'
        showTotal();
    }

    if (conToAlet == false) {
        alert('Please choose the answer!');

    }
    pages2.textContent = "Pages:" + page
    startQuiz()
}

function startQuiz() {
    if (number < dataOfQuiz.length) {
        let date = dataOfQuiz[number];
        let container4add = document.querySelector(".container4")
        let theQuestionShow = document.querySelector('.headerQuestion');
        let first = document.querySelector('#a');
        let second = document.querySelector('#b');
        let third = document.querySelector('#c');
        let fourth = document.querySelector('#d');
        theQuestionShow.textContent = date.question;
        first.textContent = date.answer1;
        second.textContent = date.answer2;
        third.textContent = date.answer3;
        fourth.textContent = date.answer4;
        container4add.style.display = "block"
    }
    conToAlet = false;
}
// -----------------------
// edit question===========================================
function editTheQuestion(event) {
    let indexOfElement = event.target;
    let i = indexOfElement.id;
    let titleStore = document.getElementById("title");
    let storeTheQuestion = document.getElementById("inputQuestion");
    let storeTheAn1 = document.getElementsByClassName("input1")[0];
    let storeTheAn2 = document.getElementsByClassName("input2")[0];
    let storeTheAn3 = document.getElementsByClassName("input3")[0];
    let storeTheAn4 = document.getElementsByClassName("input4")[0];


    let listOfTheElement = tasks[i];
    // console.log(listOfTheElement);
    titleStore.value = listOfTheElement.Title;
    storeTheQuestion.value = listOfTheElement.Question;
    storeTheAn1.value = listOfTheElement.answer1;
    storeTheAn2.value = listOfTheElement.answer2;
    storeTheAn3.value = listOfTheElement.answer3;
    storeTheAn4.value = listOfTheElement.answer4;
    // console.log(tasks[theIndex]);

    let con = document.getElementsByClassName("smallCon");
    if (con.length > 0) {
        con[i].remove();
    }
    tasks.splice(i, 1)





}
// remove question
function removeTheQuestion(event) {
    let indexOfElement = event.target;
    let i = indexOfElement.id;
    let con = document.getElementsByClassName("smallCon");
    if (con.length > 0) {
        con[i].remove();
    }
    tasks.splice(i, 1)
}


// -----------------------------------------------------------------------------------------
// back from create question
function backFromCreateQuestion(event) {
    event.preventDefault();
    document.querySelector('.global-container').style.display = 'none';
    startOrCreateQuiz()

}
// back from create
let backFromAddQuestion = document.querySelector('#btn-back');
backFromAddQuestion.addEventListener('click', backFromCreateQuestion)
    // back from play quiz
function backPlayQuiz(event) {
    event.preventDefault();
    document.querySelector('.container4').style.display = 'none';
    startOrCreateQuiz()
    console.log('hello')
}


// -----------------------------------------------------------------------------------------
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
    //back from play quiz
let backFromPlayQuiz = document.querySelector('.back');
backFromPlayQuiz.addEventListener('click', backPlayQuiz)
    // let backFromPlayQuiz = document.querySelector('.back');
    // backFromPlayQuiz.addEventListener('click', backPlayQuiz)
let buttonExit = document.querySelector('.exit')
buttonExit.addEventListener('click', closePageQuiz)