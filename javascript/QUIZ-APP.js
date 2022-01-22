// remove to display new page

function removepage(event){
    let li = event.target.parentElement.parentElement;
    li.remove();
    startOrCreateQuiz()
}

// second page

function startOrCreateQuiz(){

    let contener2=document.createElement("div");
    contener2.className="contener2";
    document.body.appendChild(contener2);

    let navBar=document.createElement("nav");
    contener2.appendChild(navBar);


    let logo=document.createElement("h1");
    logo.className="logo";
    logo.textContent="QUIZ APP";
    navBar.appendChild(logo);

    let menuBar=document.createElement("div");
    menuBar.className="allMenu";
    navBar.appendChild(menuBar);

    let menu1=document.createElement("li");
    // menu1.src="../image/add-button.png";
    menu1.className="menu1";

    menu1.textContent="ADD";

    menuBar.appendChild(menu1)
    let menu2=document.createElement("li");
    menu2.className="menu2";
    menu2.textContent="EDIT";

    // menu2.src="../image/edit.png";
    menuBar.appendChild(menu2);
    let menu3=document.createElement("li");
    menu3.className="menu3";
    menu3.textContent="DELETE";
    // menu3.src="../image/remove-button.png";
    menuBar.appendChild(menu3)


    





    let mainCard=document.createElement("div");
    mainCard.className="mainCard";
    contener2.appendChild(mainCard);

    let firstCard=document.createElement("div");
    firstCard.className="firshCard";
    mainCard.appendChild(firstCard);

    let headerCard=document.createElement("h1");
    headerCard.textContent="CREATE QUESTION";
    firstCard.appendChild(headerCard);

    let imgCard=document.createElement("img");
    imgCard.src="../image/question.png";
    firstCard.appendChild(imgCard);

    let btn=document.createElement("div");
    btn.className="btn";
    firstCard.appendChild(btn);

    let btns=document.createElement("button");
    btns.textContent="Create";
    btn.appendChild(btns);

// card 2


    
    let secondCard=document.createElement("div");
    secondCard.className="secondCard";
    mainCard.appendChild(secondCard);

 



    

    let headerCard2=document.createElement("h1");
    headerCard2.textContent="CREATE QUESTION";
    secondCard.appendChild(headerCard2);

    let imgCard2=document.createElement("img");
    imgCard2.src="../image/play.png";
    secondCard.appendChild(imgCard2);

    let btn2=document.createElement("div");
    btn2.className="btn";
    secondCard.appendChild(btn2);

    let btns2=document.createElement("button");
    btns2.textContent="Start";
    btn2.appendChild(btns2);


}








let addButton = document.querySelector(".btn-start");
addButton.addEventListener("click", removepage);


