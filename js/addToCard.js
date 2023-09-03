let btns = document.querySelectorAll('.add-to-card');
console.log(btns);
btns.forEach(btn => console.log(btn));

function addtocard(e) {
    e.target.parentElement.preventDefault();
    console.log('asdasdasd');
}