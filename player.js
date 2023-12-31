const imgs_links = ["img/play-button.png",'img/stop-button.png'];
const play_stop_btn = document.querySelector('#playStop_button');
const media_player_line = document.querySelector('#media_player_line');
const playStop_button_img =  document.querySelector('.playStop_button_img');
let btn_pressing = 0;
let f;
let isPaused = true;
f = setInterval(function(){
    if(isPaused == false){
        let player_line_point = parseInt(media_player_line.value) + 1;
        media_player_line.value = player_line_point ;
        if(media_player_line.value == 100){
            isPaused = true;
            btn_pressing--;
        playStop_button_img.src = imgs_links[btn_pressing];
        }
    }
    },1000)
play_stop_btn.addEventListener('click', function(){
    if(btn_pressing == 0){
        btn_pressing++;
        playStop_button_img.src = imgs_links[btn_pressing];
        isPaused = false;
    }else{
        btn_pressing--;
        playStop_button_img.src = imgs_links[btn_pressing];
        isPaused = true;
    }
})
media_player_line.addEventListener('mousedown', function(){
    isPaused = true;
})
media_player_line.addEventListener('mouseup', function(){
    if(btn_pressing == 1){
        isPaused = false;
    }
    
})