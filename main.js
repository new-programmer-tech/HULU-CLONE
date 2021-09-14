'use strict';

const open = document.querySelector('.modal');
const close =document.querySelector('.close');
const login =document.querySelector('.login-btn');


login.addEventListener('click',openLogin);
close.addEventListener('click',closeLogin);


function openLogin()
{
    open.style.display = "block";
}


function closeLogin()
{
    open.style.display = "none";
}



