const a = document.querySelector('a');
const h2El = document.querySelector('h2');
const bgEl = document.querySelector('section');
const h3El = document.querySelector('h3');
const button = document.querySelector('button');
const h4El = document.querySelector('h4');



a.addEventListener('click',() => {
    var color = '#';
    color += Math.random().toString(16).slice(2,8);
    bgEl.style.backgroundColor = color;
    h2El.innerText = '[Password]- -'+ Math.random().toString(32).substring(2,10);
    h3El.innerText = 'Bckground Color Code- -' + color;


    console.log(color);

})
//button.addEventListener('click', ()=> {
//    let num = "";
//    num += Math.floor(Math.random() * 6) + 1;
//   button.innerText = num;
//    console.log(num);
//})
function click()
{
    var str = document.getElementById("Text").Value;
    alert("Value given is: " + str);
}