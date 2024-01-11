function userPrompt(user){
    while(!user){
        user;
    }
    document.write("<p>Hello, " + user + "!<p>");
}

function favoriteCountry(){
    let favCountry;
    while(!favCountry){
        favCountry = prompt("What is your favorite country?");
    }
    document.write("<p>" + user + "'s favorite country: " + favCountry + ".<p>");
}

function y_or_n(){
    let y_or_n;
    while(!y_or_n || y_or_n != 'y' && y_or_n != 'n') {
        y_or_n = prompt("Looking for great prices? y/n");
    }
    if(y_or_n === 'y') {
        document.write("<p>Check out <a href='https://expedia.com' target='_blank'>Expedia</a> for great travel deals!</p>");
    } else {
        document.write('<p>OK, maybe next time. :)</p>');
    }
}

function review(){
    let rating;
    let count = 0;
    while(!rating || rating > 5){
        rating = parseInt(prompt("Rate us! 1 - 5"));
    }

    do{
        document.write('<img src="800px-Empty_Star.png">');
        count++;
    }while(count < rating)
    
    document.write("<p>Our rating is " + rating + "/5 stars!</p>");
}


let user;
while(!user){
    user = prompt("What is your name?");
}

userPrompt(user);
favoriteCountry();

y_or_n();
review();
