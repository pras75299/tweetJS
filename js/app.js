//variables

const tweetList = document.getElementById('tweet-list');


//event listeners
eventListeners();
function eventListeners() {
    document.querySelector('#form').addEventListener('submit', newTweet)
}


//Functions 

function newTweet(e) {
    e.preventDefault();
    console.log('Form Submitted');

    //read the text-area

    const tweet = document.getElementById('tweet').value;

    //create the remove button

    //Create an element
    const li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);
}


