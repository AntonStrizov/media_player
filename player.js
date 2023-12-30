const imgs_links = ["img/play-button.png",'img/stop-button.png'];
const play_stop_btn = document.querySelector('#playStop_button');
const media_player_line = document.querySelector('#media_player_line');
const playStop_button_img =  document.querySelector('.playStop_button_img');
let btn_pressing = 0;
let f;
play_stop_btn.addEventListener('click', function(){
if(btn_pressing == 0){
    btn_pressing++;
    playStop_button_img.src = imgs_links[btn_pressing];
    // media_player_on('on');
    f = setInterval(function(){
        let player_line_point = parseInt(media_player_line.value) + 1;
        media_player_line.value = player_line_point
        console.log(media_player_line.value);
     },1000)
     media_player_line.addEventListener('mousedown', function(){
        clearInterval(f)
        //media_player_line.removeEventListener('mouseup');
     })
     media_player_line.addEventListener('mouseup', function(){
        f = setInterval(function(){
            let player_line_point = parseInt(media_player_line.value) + 1;
            media_player_line.value = player_line_point
            console.log(media_player_line.value);
         },1000)
         //media_player_line.removeEventListener('mousedown', addEventListener, true);
     })
}else{
    btn_pressing--;
    playStop_button_img.src = imgs_links[btn_pressing];
    // media_player_on('off')
    clearInterval(f)
}
})

// function media_player_on(ststus){
//     if(ststus == 'on'){ 
//     let f = setInterval(function(){
//         console.log(media_player_line.value);
//     },1000)
//     }else{
//         clearInterval
//     }
// }