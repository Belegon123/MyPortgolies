const TOKEN = '8698756172:AAEuBqw4fLXaS1wTjypSxtLOeGm6aUMYFRQ';
const CHAT_ID = '7048073193';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let tema = document.querySelector('.tema');
let condition = false;
let header = document.querySelector('header');
let form = document.querySelector('.forma');
form.addEventListener('submit',submites)
tema.addEventListener('change',temat);
burger.addEventListener('click',main);


function main () {
    burger.classList.toggle('active');
    menu.classList.toggle('show');
}

function temat(){
    if(condition == false){
        header.style.backgroundColor = 'white';
        condition = true
        }   
    else{
        header.style.backgroundColor = 'black'
        condition = false
    }
}

function submites(e){
    e.preventDefault();
    let message = "Заявка сайта!\n"+"ФИО\n"+this.name.value+"\n"+"Телефое\n"+this.number.value+"\n"+"Email\n"+this.email.value+"\n"+"Отзыв!\n";
    fetch(URL_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message,
        })
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error('Ошибка HTTP: ' + res.status);
        }
        return res.json();
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Скрипт выполнен');
    });
}





