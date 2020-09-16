
const pffff = () => {
    alert('pffff, zo ik kan weer verder, nog bedankt Akif');
}
pffff();




alertMe.addEventListener('click', function (e) {
    const alertMe = document.querySelector('#alertMe');
    alert('Ik ben weer Happy de Peppie :-) oja niet vergeten: Button Clicked!');
});


const toggleColorBtn = document.querySelector('#change-background-btn');

    toggleColorBtn.addEventListener('click', function (e) {
        console.log(document.body); // om te testen.
        document.body.classList.toggle('red-background');  // <====== gaat het hier fout ? 
    });




