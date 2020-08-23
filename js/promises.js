"use strict";
/*
We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:


fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.
Reference the github api documentation to achieve this.
 */
//fetch(url, {headers: {'Authorization': 'token 4d77da7e82962bf87ac0605651009c00275018ee'}})

let username = document.getElementById('username');

function makeRequest(username){
    let url = 'https://api.github.com/users/${username}/events/public';
    return fetch(url, {headers: {'Authorization': 'token 4d77da7e82962bf87ac0605651009c00275018ee'}})
        .then (response => responses.json()
            .then (data => {
                for (let event of data){
                    if (event.type ==='PushEvent'){
                        return event.created_at;
                    }
                }
            }));
    return event.created_at;
}

// logging makeRequest(dimitriantoniou) is throwing an uncaught reference error: dimitriantoniou is not defined at anonymous 1:13

/*
Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.
 */

function wait(ms){
    parseInt(ms);
    return new Promise ( (resolve, reject) => {
        setTimeout ( () => {
            if (typeof ms ==='number'){
                resolve ('You will see this after ${n} seconds!');
            }else{
                reject (ms);
            }
    })},ms)
}