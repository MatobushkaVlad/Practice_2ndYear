document.getElementById("main-action").onclick = function(){
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

var buttons= document.getElementsByClassName("car_button");
for(var i = 0; i < buttons.length; i++)
{
    buttons[i].onclick = function (){
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("prace_action").onclick = function(){
    if(document.getElementById("name").value === ""){
        alert("Заполните поле имя!");
    }
    else if(document.getElementById("phone").value === "")
    {
        alert("Заполните поле телефон!");
    }
    else if(document.getElementById("car").value === "")
    {
        alert("Заполните поле автомобиль!");
    }
    else
    {
        alert("Спасибо за заявку!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price_image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.2) / 15) + 'px,' + ((event.clientY * 0.2) / 15) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
    })
});