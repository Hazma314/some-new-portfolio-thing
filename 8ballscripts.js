var ball = 1
var output;

shake.onclick = function shaken() {
    ball = Math.floor((Math.random()*20)+1)
    console.log(ball)
    switch (ball) {
        case 1:
        output = "It is certain."
        break
        case 2:
        output = "It is decidedly so."
        break
        case 3:
        output = "Without a doubt."
        break
        case 4:
        output = "Yes - definitely."
        break
        case 5:
        output = "You may rely on it."
        break
        case 6:
        output = "As I see it, yes."
        break
        case 7:
        output = "Most likely."
        break
        case 8:
        output = "Outlook good."
        break
        case 9:
        output = "Yes."
        break
        case 10:
        output = "Signs point to yes."
        break
        case 11:
        output = "Reply hazy, try again"
        break
        case 12:
        output = "Ask again later."
        break
        case 13:
        output = "Better not tell you now."
        break
        case 14:
        output = "Cannot predict now."
        break
        case 15:
        output = "Concentrate and ask again."
        break
        case 16:
        output = "Don't count on it."
        break
        case 17:
        output = "My reply is no."
        break
        case 18:
        output = "My sources say no"
        break
        case 19:
        output = "Outlook not so good."
        break
        case 20:
        output = "Very doubtful."
    }

    document.getElementById("response").innerHTML=output
}