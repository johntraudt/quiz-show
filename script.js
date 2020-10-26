let count = 0;

function question(answer, msg)
{

    // Get the message paragraph
    let message = document.getElementById("message")

    // Check the result of the random versus the guess
        if(answer) // Heads
        {
            count++;
            message.innerHTML = "You guessed right, " + name + "! Your score is " + count + ".";
        }
        else {
            message.innerHTML = "I'm dissapointed in you, " + name + ". Your score is " + count + ".";
        }
        return count;
}

function get_name(prompt) 
{
    let name;
        name = window.prompt(prompt);

    //Changes the instructions.
    let instruct = document.getElementById("instructions");
    instruct.innerHTML = "Welcome to Quiz Show, " + name + ".";

    return name;
}