let tg = window.Telegram.WebApp;

tg.expand();
tg.setHeaderColor("#0E0415");
tg.setBackgroundColor("#0E0415")

const cards = document.getElementsByClassName("card");

const tags = document.getElementsByClassName("tag-item");


function SlideUp(cards_object) {
    step = 0;
    for (let i = 0; i < cards_object.length; i++) {
        setTimeout(function() {
            $(cards_object[i]).delay(step).addClass('slidein');
        }, step);
        step += 50;
      }
}


$(".tag-item").click(function(){
    tg.HapticFeedback.impactOccurred('medium');
    if ($(this).hasClass('selected') == false) {
        for (let i = 0; i < tags.length; i++) {
            if ($(tags[i]).hasClass('selected') == true) {
                $(tags[i]).removeClass('selected');
            }
        }
        $(this).addClass('selected');
    }
});


function expandable() {
    if (tg.isExpanded == false) {
        tg.expand();
        coin_height = document.getElementById('bubble').getBoundingClientRect().height
        coin_width = document.getElementById('bubble').getBoundingClientRect().width
    }
}


document.body.addEventListener("click", expandable)
SlideUp(cards)
