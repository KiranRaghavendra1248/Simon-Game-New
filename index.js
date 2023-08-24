// Methods
function generateRandom(){
    var num = Math.floor(Math.random()*4)+1
    switch (num) {
        case 1:
            var audio = new Audio("sounds/green.mp3")
            audio.play()
            $(".green").addClass("pressed")
            setTimeout(function(){
                $(".green").removeClass("pressed")
            },100)
            break;

        case 2:
            var audio = new Audio("sounds/red.mp3")
            audio.play()
            $(".red").addClass("pressed")
            setTimeout(function(){
                $(".red").removeClass("pressed")
            },100)
            break;

        case 3:
            var audio = new Audio("sounds/yellow.mp3")
            audio.play()
            $(".yellow").addClass("pressed")
            setTimeout(function(){
                $(".yellow").removeClass("pressed")
            },100)
            break;

        case 4:
            var audio = new Audio("sounds/blue.mp3")
            audio.play()
            $(".blue").addClass("pressed")
            setTimeout(function(){
                $(".blue").removeClass("pressed")
            },100)
            break;

        default:
            console.log(num)
            break;
    }
    return num
}



// Main
var running = false
var count = 0;
var pattern = []
var gameOver = false
var level = 1

$("body").keypress(function(e){
    if(running===false && gameOver==false && e.key==="a"){
        running = true
        $("#level-title").text("Level "+level)
        pattern.push(generateRandom())
    }
    if(running===false && gameOver==true){
        running = true
        $("#level-title").text("Level "+level)
        pattern.push(generateRandom())
    }
    console.log(pattern.length)
})

$(".green").on("click",function(){
    console.log(pattern)
    if(pattern.length>0){
        // Verify - success/fail
        if(pattern[count]===1){
            // Make sound and press animation
            var audio = new Audio("sounds/green.mp3")
            audio.play()
            $(".green").addClass("pressed")
            setTimeout(function(){
                $(".green").removeClass("pressed")
            },100)

            // Generate again
            count+=1
            if(count===pattern.length){
                setTimeout(function(){
                    level+=1
                    $("#level-title").text("Level "+level)
                    pattern.push(generateRandom())
                    count = 0
                },300)
            }
        }
        else{
            // Reset
            running = false
            count = 0;
            pattern = []
            gameOver = true
            level = 1

            // Make sound and gameover animation and change text
            $("#level-title").text("Game over, Press any key to start")
            var audio = new Audio("sounds/wrong.mp3")
            audio.play()
            $("body").addClass("game-over")
            setTimeout(function(){
                $("body").removeClass("game-over")
            },300)
        }
    }
})

$(".red").on("click",function(){
    console.log(pattern)
    if(pattern.length>0){
        // Verify - success/fail
        if(pattern[count]===2){
            // Make sound and press animation
            var audio = new Audio("sounds/red.mp3")
            audio.play()
            $(".red").addClass("pressed")
            setTimeout(function(){
                $(".red").removeClass("pressed")
            },100)

            // Generate again
            count+=1
            if(count===pattern.length){
                setTimeout(function(){
                    level+=1
                    $("#level-title").text("Level "+level)
                    pattern.push(generateRandom())
                    count = 0
                },300)
            }
        }
        else{
            // Reset
            running = false
            count = 0;
            pattern = []
            gameOver = true
            level = 1

            // Make sound and gameover animation and change text
            $("#level-title").text("Game over, Press any key to start")
            var audio = new Audio("sounds/wrong.mp3")
            audio.play()
            $("body").addClass("game-over")
            setTimeout(function(){
                $("body").removeClass("game-over")
            },300)
        }
    }
})

$(".yellow").on("click",function(){
    console.log(pattern)
    if(pattern.length>0){
        // Verify - success/fail
        if(pattern[count]===3){
            // Make sound and press animation
            var audio = new Audio("sounds/yellow.mp3")
            audio.play()
            $(".yellow").addClass("pressed")
            setTimeout(function(){
                $(".yellow").removeClass("pressed")
            },100)

            // Generate again
            count+=1
            if(count===pattern.length){
                setTimeout(function(){
                    level+=1
                    $("#level-title").text("Level "+level)
                    pattern.push(generateRandom())
                    count = 0
                },300)
            }
        }
        else{
            // Reset
            running = false
            count = 0;
            pattern = []
            gameOver = true
            level = 1

            // Make sound and gameover animation and change text
            $("#level-title").text("Game over, Press any key to start")
            var audio = new Audio("sounds/wrong.mp3")
            audio.play()
            $("body").addClass("game-over")
            setTimeout(function(){
                $("body").removeClass("game-over")
            },300)
        }
    }
})

$(".blue").on("click",function(){
    console.log(pattern)
    if(pattern.length>0){
        // Verify - success/fail
        if(pattern[count]===4){
            // Make sound and press animation
            var audio = new Audio("sounds/blue.mp3")
            audio.play()
            $(".blue").addClass("pressed")
            setTimeout(function(){
                $(".blue").removeClass("pressed")
            },100)

            // Generate again
            count+=1
            if(count===pattern.length){
                setTimeout(function(){
                    level+=1
                    $("#level-title").text("Level "+level)
                    pattern.push(generateRandom())
                    count = 0
                },300)
            }
        }
        else{
            // Reset
            running = false
            count = 0;
            pattern = []
            gameOver = true
            level = 1

            // Make sound and gameover animation and change text
            $("#level-title").text("Game over, Press any key to start")
            var audio = new Audio("sounds/wrong.mp3")
            audio.play()
            $("body").addClass("game-over")
            setTimeout(function(){
                $("body").removeClass("game-over")
            },300)
        }
    }
})





