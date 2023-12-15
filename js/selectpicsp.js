$(()=>{
    $('.khungsanpham p img').click(function(){
        let img = $(this).attr('src');
        let picid = '.khungsanpham .'+ $(this).attr('class')

        $('.khungsanpham .hinh1').attr('src',img);
        $('.khungsanpham p img').css('border',"none") ;

        $(picid).css('border',"solid #ff1095") ;

    });
});

const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const num = document.querySelector('.num')
let a = 1

plus.addEventListener("click",()=>{
    a++;
    a = (a < 10) ? "0" + a: a;
    num.innerText=a
})

minus.addEventListener("click",()=>{
    a--;
    a = (a <= 1) ? '01': a = (a < 10) ? "0" + a: a;
    num.innerText=a
})

