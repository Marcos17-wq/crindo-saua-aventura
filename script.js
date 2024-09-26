const avança = document.querySelectorAll("bnt-proximo");
avança.forEach(button => {
    button.addEventListener('click', functin(){
    const atual = document.querySelector('.ativo');
    const proximopasso= 'passo-'+ this.getAttribute('data-proximo')
    atual.classlist.remove('ativo');
    document.getElementById(proximopasso).classlist.add('ativo');



})


})