import getStors from "./forMain/getStors.js";
import addStors from "./forMain/addStors.js";
const btn = document.querySelector('.btn')


getStors(); //читаем и выводим список магазинов
btn.addEventListener('click', addStors); //Записываем при клике






