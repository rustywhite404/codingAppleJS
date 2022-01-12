var picNum = 1;
// 이미지 슬라이드
$('.slide-1').on('click',function(){
    picNum = 1;
    $('.slide-container').css('transform','translateX(0vw)');
});

$('.slide-2').on('click',function(){
    picNum = 2;
    $('.slide-container').css('transform','translateX(-100vw)');
});

$('.slide-3').on('click',function(){
    picNum = 3;
    $('.slide-container').css('transform','translateX(-200vw)');
});

$('.slide-4').on('click',function(){
    picNum = 4;
    $('.slide-container').css('transform','translateX(-300vw)');
});


// 이미지 슬라이드 (좌우 버튼)
$('.slide-next').on('click', function(){  
    if(picNum<=3){                 
        picNum += 1; 
        $('.slide-container').css('transform','translateX(-'+(picNum-1)+'00vw)');
    }else{
        picNum = 1;
        $('.slide-container').css('transform','translateX(0vw)');
    }

    
    // if(picNum == 1){
    //     $('.slide-container').css('transform','translateX(-100vw)');
    // }else if(picNum == 2){
    //     $('.slide-container').css('transform','translateX(-200vw)');
    // }else if(picNum == 3){
    //     $('.slide-container').css('transform','translateX(-300vw)');
    // }else if(picNum == 4){
    //     $('.slide-container').css('transform','translateX(0vw)');
    // }
});

$('.slide-prev').on('click', function(){      
    if(picNum>1){                
        picNum -= 1;
        $('.slide-container').css('transform','translateX(-'+(picNum-1)+'00vw)');
    }else{
        picNum = 4;
        $('.slide-container').css('transform','translateX(-300vw)');
    }           
        
    // if(picNum == 0){
    //     $('.slide-container').css('transform','translateX(0vw)');
    // }else if(picNum == 1){
    //     $('.slide-container').css('transform','translateX(-100vw)');
    // }else if(picNum == 2){
    //     $('.slide-container').css('transform','translateX(-200vw)');
    // }else if(picNum == 3){
    //     $('.slide-container').css('transform','translateX(-300vw)');
    // }
});
// SHOW MENU 버튼 누르면 메뉴 슬라이드 되도록
var menuCheck = 0;
document.getElementById('show-menu').addEventListener('click',function(){
    console.log(menuCheck);
    if(menuCheck==0){
        $('.left-menu').animate({
            marginLeft:'0px'
        },500,function(){
            menuCheck = 1;
        })
    }else{
        $('.left-menu').animate({
            marginLeft:'-150px'
        },500,function(){
            menuCheck = 0;
        })
    }
});