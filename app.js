

var start = 0;
var energy = 250;

document.getElementById('bubble').onclick = counterAdd

function counterAdd() {
    if (energy > -1) {
    document.getElementById('amount').innerText = start++;
    document.getElementById('energy-amount').innerText = energy--;
    } else {
        document.getElementById('amount').innerText = 'Wait!';
        setTimeout(function() {
            energy = energy + 25;
            document.getElementById('energy-amount').innerText = energy;
            document.getElementById('amount').innerText = start;
        }, 5000)
    }
}