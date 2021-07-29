function contar() {
    let inicioElemento = document.getElementById('inicio');
    let fimElemento = document.getElementById('fim');
    let passoElemento = document.getElementById('passo');
    let contagemElemento = document.getElementById('contagem');

    if (inicioElemento.value.length == 0 || fimElemento.value.length == 0 || passoElemento.value.length == 0) {
        contagemElemento.innerHTML = ('Impossivel contar!');
    } else {
        contagemElemento.innerHTML = 'Contando: ';
        let inicio = Number(inicioElemento.value); /*convertando a string pra numerico*/
        let fim = Number(fimElemento.value);
        let passo = Number(passoElemento.value);
        if(passo <= 0){
            alert('Passo invalido. Considerando PASSO 1');
            passo = 1;
        }

        if (inicio < fim) {
            for (let i = inicio; i < fim; i += passo) {
                contagemElemento.innerHTML += `${i} &#128073`;
            }
        } else {
            for (let i = inicio; i > fim; i -= passo) {
                contagemElemento.innerHTML += `${i} &#128073`;
            }
        }
        contagemElemento.innerHTML += `&#127937`;
    }
}