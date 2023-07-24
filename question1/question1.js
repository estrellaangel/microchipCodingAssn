//state array that will store elements
var stateArray = [];

//added used to ensure that elements are not added twice
var added = false;

//this function creates a div with given id, class, text set and appends to given parent node
function createDiv(id, cls, text, parentid){
    const newDiv = document.createElement("div");
    newDiv.setAttribute('id', id);
    newDiv.classList.add(cls);

    const textNode = document.createTextNode(text);
    newDiv.appendChild(textNode)

    const parentElem = document.getElementById(parentid);
    parentElem.appendChild(newDiv);
}


//this function checks if array is empty and returns an error message
function checkEmpty(){

    if(stateArray.length == 0){
        console.log("runs if");

        //gets Error div
        var errorMes = document.createElement("div");
        errorMes.setAttribute('id', 'errorMsgBox');

        //add the error message container to the solution answer area
        const solutionAnswerArea = document.getElementById("solutionAnswer");
        solutionAnswerArea.appendChild(errorMes);

        //sets error message text to be input by making text node then setting that text val
        createDiv("errorTxtTitle", "errorTxtTitle", "Error: Array is Empty", "errorMsgBox");
        createDiv("errorTxtSolutionTitle", "errorTxt", "Solutions:", "errorMsgBox");
        createDiv("errorTxtSol1", "errorTxt", "Click on '1' in top right search bar", "errorMsgBox");
        createDiv("errorTxtSol2", "errorTxt", "Click on 'Add the following states as string types to an Array, List, or other collection in this order.' in Project Description", "errorMsgBox");

    }

    console.log("runs checkEmpty()");

}

//this function highlights the number and text that it is completing
function updateHighlight(idNum){

    //gets currently highlighted elements and deletes the highlighted class from them
    var currentHighlightedElems = document.getElementsByClassName("highlighted");

    //checks if there are any currently highlighted items
    while (currentHighlightedElems.length > 0) {

        //loop through the collection and remove the highlighted class from each element
        for (var i = 0; i < currentHighlightedElems.length; i++) {
            currentHighlightedElems[i].classList.remove("highlighted");
        }
    }
    
    //gets elements with idNum and adds the highlighted class to them
    var newHighlights = document.getElementsByClassName(idNum);

    //if there are elements with the given class name, add the highlighted class to each of them
    if (newHighlights.length > 0) {
        //loop through the collection and add highlighted class for each element
        for (var j = 0; j < newHighlights.length; j++) {
            newHighlights[j].classList.add("highlighted");
        }
    }
}

//this function clears the solution area, used when page is loaded and before every function
function clearSolution(){

    //clears all the content from inside the solution area
    var solutionArea = document.getElementById("solutionAnswer");
    solutionArea.innerHTML = "";

}

function displayState(state){

    //create a new div that will go in the solution answer area
    const displayState = document.createElement("div");

    //adding id name so that it can be styled using css
    displayState.classList.add("displayState");


    //creating and adding in state name as text attribute
    const stateName = document.createTextNode(state);
    displayState.appendChild(stateName);

    //adding the new created state div to the solution answer area
    const solutionAnswerArea = document.getElementById("solutionAnswer");
    solutionAnswerArea.appendChild(displayState);

}

function displayAllStates(){

    //adds elements to array if already added it does nothing
    addToArray();

    //clears previous answers
    clearSolution();

    //update new highlights (this is option 1)
    updateHighlight(1);

    //checks if array is empty
    checkEmpty();

    //displays each state
    stateArray.forEach(displayState);
}

//this function adds the elements to the array
function addToArray() {

    //checks if elements have already been added if they havent then it adds them if they have then it doesnt add them
    if(added == false){
        stateArray.push(
            "Arizona",
            "Alaska",
            "Hawaii",
            "Georgia",
            "West Virginia",
            "Alabama",
            "Ohio",
            "North Carolina",
            "Rhode Island",
            "Florida",
            "California"
        );
        added = true;
    }

}

function findTwoWords(){

    //adds elements to array if already added it does nothing
    addToArray();

    //updatePrompt(id);
    clearSolution();

    //update new highlights (this is option 2)
    updateHighlight(2);

    //checks if array is empty
    checkEmpty();

    //goes through each element in array and splits it up by a space. This splits it up into an array of words, if the array length is 2 (2 words) then display it, else do nothing.
    for(i in stateArray){

        //splits up each state by spaces which therefore splits it up by words
        var state = stateArray[i].split(" ");

        //if there are 2 words then display them 
        if(state.length == 2){
            displayState(stateArray[i]);
        }
    }


}

function nameLength(){

    //adds elements to array if already added it does nothing
    addToArray();
    
    //updatePrompt(id);
    clearSolution()

    //update new highlights (this is option 3)
    updateHighlight(3);

    //checks if array is empty
    checkEmpty();

    for(i in stateArray){

        //create new element for state 
        var newState = document.createElement("div");

        //create a div that stores the text
        const stateName = document.createElement("div");
        const stateText = document.createTextNode(stateArray[i]);
        stateName.appendChild(stateText);

        //appened text element to new div 
        newState.appendChild(stateName);

        //solves for word count
        var count = stateArray[i].split("").length;

        //create a div that stores the text
        const stateCount = document.createElement("div");
        const countText = document.createTextNode(count);
        stateCount.appendChild(countText);

        //append text element to new div
        newState.appendChild(stateCount);
        
        //set its id to display state
        newState.classList.add("displayState");

        //add to solution area
        var solutionArea = document.getElementById("solutionAnswer");
        solutionArea.appendChild(newState);
    }


}

function alphabetizeStates(){

    //adds elements to array if already added it does nothing
    addToArray();
    
    //updatePrompt();
    clearSolution();

    //update new highlights (this is option 5)
    updateHighlight(4);

    //checks if array is empty
    checkEmpty();

    //sorts the array alphabetically
    stateArray.sort();

        //side note: this is the easiest way to sort because js already has a sorting
        //function but if I needed to create one I would go through the array and find
        //the element's Unicode codepoint for the first letter then sort it using a sorting
        //algorithm like insertion sort (I code in a more effiecient algorithm like merge 
        //sort if there was more data) if 2 elements have the same first letter the code
        //would go through and check each letter until one is decided to be greater than
        //and it would sort it accordingly.

    //displays each element in array
    stateArray.forEach(displayState);

}
    


// printStateNames">Print each state name to screen.</div>
//                     <div class="findTwoWords highlightText" id="findTwoWords">Using programming logic, print each state name that is two words.</div>
//                     <div class="nameLength highlightText" id="nameLength">Using programming logic, print the length of each string to the screen (e.g. Alaska is 6 and Ohio is 4).</div>
//                     <div class="alphabetizeStates highlightText" id="alphabetizeStates



