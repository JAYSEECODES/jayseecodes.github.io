let tg = window.Telegram.WebApp;

tg.expand();
tg.setHeaderColor("#000000");
tg.setBackgroundColor("#000000")

const bar = document.querySelector(".bar");
const coin = document.querySelector(".bubble");


var coin_height = document.getElementById('bubble').getBoundingClientRect().height
var coin_width = document.getElementById('bubble').getBoundingClientRect().width
var start = 0;
var energy = 100;
var refillstate = false;

if (document.body.getBoundingClientRect().height < 665) {
    $('.nav-bar').remove();
}

function copyClipboard(event) {
    navigator.clipboard.writeText(document.getElementById('league').textContent);

    $('body').append($("<div/>").attr("id", "flyingtext").addClass("flyingtextcopy").css({"top": event.clientY}).html("<div>COPIED</div>").animate({
        opacity: "0",
        top: "-=50px"
      }, 500 , function() {
        $("#flyingtext").remove();
      }));
}

document.getElementById('copyLeagy').onclick = copyClipboard;

function expandable() {
    if (tg.isExpanded == false) {
        tg.expand();
        coin_height = document.getElementById('bubble').getBoundingClientRect().height
        coin_width = document.getElementById('bubble').getBoundingClientRect().width
    }
}

function rotateOnClick(event) {
    viewWidth = (window.innerWidth - coin_width) / 2;
    viewHeight = (window.innerHeight - coin_height) / 2;
    xPercentHalf = ((event.clientX - viewWidth) / coin_width);
    yPercentHalf = ((event.clientY - viewHeight) / coin_height);
    xPercent = (xPercentHalf - 0.5) * 30;
    yPercent = (0.5 - yPercentHalf) * 30;
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
        'width': coin_width,
        'height': coin_height,
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

function counterAdd(event) {
    if (energy > -1) {
        if (energy != 100 && refillstate == false) {
            refillstate = true;
            refillEnergy();
        }
        document.getElementById('amount').innerText = start++;
        bar.style.setProperty("--progress", energy + "%");
        document.getElementById('energy-amount').innerText = energy--;
        tg.HapticFeedback.impactOccurred('light');
        $('body').append($("<div/>").attr("id", "flyingtext").addClass("flyingtext").html("<div>+1</div>").css({"top": event.clientY - 40, "left": event.clientX + Math.random() * (15 - -15) - 15}).animate({
            opacity: "0",
            top: "-=120px",
          }, 900 , function() {
            $("#flyingtext").remove();
          }));
        $("#bubble").animate({
            
            'width': coin_width - 10,
            'height': coin_height - 10
        }, 50, function() { 
            $("#bubble").animate({
                'width': coin_width,
                'height': coin_height
            }, 50,)
        })
    } else {
        
    }
}