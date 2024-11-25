let gamenum = Math.round(Math.random() * 10);
let chaneses = 3;
const eve = document.getElementById('butt_hold');
eve.addEventListener('click', () => {
    if(chaneses < 1){
        chaneses = 3;
        gamenum = Math.round(Math.random() * 10);
    }
    chosen(document.querySelector('span[name="game_button"]:hover'));
});
function mess(user_num){
    if(user_num == gamenum){
        document.getElementById('txt_panel').textContent = 'WIN';
    } else if(user_num > gamenum){
        document.getElementById('txt_panel').textContent = 'CHOSE SMALER NUMBER';
    } else if(user_num < gamenum){
        document.getElementById('txt_panel').textContent = 'CHOSE HIGHER NUMBER';
    }
}
function chosen(element){
    if(element.textContent == gamenum){
        mess(element.textContent);
        gamenum = Math.round(Math.random() * 10);
        chaneses = 3;
    } else {
        mess(element.textContent)
        chaneses--;
    }
    document.getElementById('chanses').textContent = chaneses;
}