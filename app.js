let tg = window.Telegram.WebApp;

tg.expand();
tg.setHeaderColor("#000000");
tg.setBackgroundColor("#000000")

const bar = document.querySelector(".bar");
const coin = document.querySelector(".bubble");

var start = 0;
var energy = 100;
var refillstate = false;

function expandable() {
    if (tg.isExpanded == false) {
        tg.expand();
    }
}

function rotateOnClick(event) {
    viewWidth = (window.innerWidth - 246) / 2;
    viewHeight = (window.innerHeight - 227) / 2;
    xPercentHalf = ((event.clientX - viewWidth) / 246);
    yPercentHalf = ((event.clientY - viewHeight) / 227);
    xPercent = (xPercentHalf - 0.5) * 30;
    yPercent = (0.5 - yPercentHalf) * 30;
    console.log(Math.round(yPercent));
    coin.style.setProperty("--xRot", Math.round(xPercent) + "deg");
    coin.style.setProperty("--yRot", Math.round(yPercent) + "deg");
    setTimeout(function() {
        coin.style.setProperty("--xRot", Math.round(0) + "deg");
        coin.style.setProperty("--yRot", Math.round(0) + "deg");
    }, 100)
}

document.body.addEventListener("click", expandable)
document.getElementById('bubble').addEventListener("click", rotateOnClick)

$("#bubble").animate({
    'width': 0,
    'height': 0,
    opacity: "0"
}, 0, function() { 
    $("#bubble").delay(350).animate({
        'width': 246,
        'height': 227,
        opacity: "1"
    }, 550, )
})

$("#stamina-wrapper").animate({
    opacity: "0"
}, 0, function() { 
    $("#stamina-wrapper").delay(250).animate({
        opacity: "1"
    }, 550, )
})

$("#counter-wrapper").animate({
    opacity: "0"
}, 0, function() { 
    $("#counter-wrapper").animate({
        opacity: "1"
    }, 550, )
})

document.getElementById('bubble').setAttribute('draggable', false);
document.getElementById('bubble').onclick = counterAdd

function refillEnergy() {
    setTimeout(function() {
        energy = energy + 1;
        document.getElementById('energy-amount').innerText = energy;
        bar.style.setProperty("--progress", energy + "%");
        if (energy == 100) {
            refillstate = false;
        } else {
            refillEnergy();
        }
    }, 1000)
}

function counterAdd() {
    if (energy > -1) {
        if (energy != 100 && refillstate == false) {
            refillstate = true;
            refillEnergy();
        }
        document.getElementById('amount').innerText = start++;
        document.getElementById('energy-amount').innerText = energy--;
        tg.HapticFeedback.impactOccurred('light');
        $('body').append($("<div/>").attr("id", "flyingtext").addClass("flyingtext").html("<div>+1</div>").css({"top": Math.random() * (450 - 300) + 300, "margin-left": Math.random() * (250 - -250) + -250}).animate({
            opacity: "0",
            top: "-=50px",
          }, 500 , function() {
            $("#flyingtext").remove();
          }));
        bar.style.setProperty("--progress", energy + "%");
        $("#bubble").animate({
            'width': 235,
            'height': 216
        }, 50, function() { 
            $("#bubble").animate({
                'width': 246,
                'height': 227
            }, 50,)
        })
    } else {
        
    }
}