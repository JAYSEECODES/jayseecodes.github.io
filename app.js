

var start = 0;
var energy = 250;

document.getElementById('bubble').setAttribute('draggable', false);
document.getElementById('bubble').onclick = counterAdd

function counterAdd() {
    if (energy > -1) {
    document.getElementById('amount').innerText = start++;
    document.getElementById('energy-amount').innerText = energy--;
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
        document.getElementById('amount').innerText = 'Wait!';
        setTimeout(function() {
            energy = energy + 25;
            document.getElementById('energy-amount').innerText = energy;
            document.getElementById('amount').innerText = start;
        }, 5000)
    }
}