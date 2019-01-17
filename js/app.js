//variables

const tweetList = document.getElementById('tweet-list');


//event listeners
eventListeners();
function eventListeners() {
    document.querySelector('#form').addEventListener('submit', newTweet);

    //remove the tweet from the list
    tweetList.addEventListener('click', removeTweet);
}


//Functions 

function newTweet(e) {
    e.preventDefault();
    console.log('Form Submitted');

    //read the text-area

    const tweet = document.getElementById('tweet').value;

    //create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //Create an element
    const li = document.createElement('li');
    li.textContent = tweet;

    //Add the remove btn to each tweet

    li.appendChild(removeBtn);

    //add to the list

    tweetList.appendChild(li);
}

//Remove the tweets from the dom

function removeTweet(e) {
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }
}


