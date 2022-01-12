
// for(let i=0;i<$('.tab-button').length;i++){
//     $('.tab-button').eq(i).on('click',function(){
//         tab(i);
//     });
    
// }

$("#box").on('click',function(e){ 


    if(e.target == e.currentTarget){
        $("#box").hide();
    }
});

function tab(i){
    //기존에 활성화 되어 있던 active, show 제거 
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');

    //제거 후에 새로 활성화
    $('.tab-button').eq(i).addClass('active');
    $('.tab-content').eq(i).addClass('show');
}

$('.list').on('click', function(e){ 

    //tab(document.querySelectorAll('.tab-button')[0].dataset.id);
    //아래 if는 위와 같이 한 줄로도 입력이 가능하다.
    
    tab(e.target.dataset.id);
    //이렇게 더 짧게도 쓸 수 있다

    //$('.tab-button').eq(0).data('tab0', '0'); 
    // tab($('.tab-button').data('tab0'));
    //제이쿼리로는 이렇게 데이터 숨기기 가능 
    
    //if(e.target == document.querySelectorAll('.tab-button')[2]){
    //    tab(2);
    //}

});


