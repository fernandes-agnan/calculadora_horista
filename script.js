function calcularSalario() {
    const horasTrabalhadas = parseFloat(document.getElementById("horas").value);
    const diasUteis = parseFloat(document.getElementById("diasUteis").value);
    const feriados = parseFloat(document.getElementById("feriados").value);
    const valorHora = parseFloat(document.getElementById("valorHora").value);

    const salario = horasTrabalhadas * valorHora;
    const dsr = (feriados / diasUteis) * salario;
    console.log("dsr", dsr)

    const salarioParcial= salario + dsr 
    console.log("salario parcial", salarioParcial)

    const contribuicao = calcularInss(salarioParcial)
    console.log('contribuicao', contribuicao)

    const salarioTotal = salarioParcial - contribuicao

    document.getElementById("resultado").textContent = `Salário: R$ ${salarioTotal.toFixed(2)}`;
}

function calcularInss(salarioParcial) {
    let faixa1 = 99.00;

    if (salarioParcial<= 1320){
        return faixa1.toFixed(2);
    }
    else if (salarioParcial >= 1320.01 && salarioParcial <= 2571.29) {
        const faixa2 = (salarioParcial - 1320.01) * 0.09;
        const faixa2Result = (faixa1 + faixa2).toFixed(2);
        // console.log(faixa2Result)
        return faixa2Result;
    }
    else if (salarioParcial >= 2571.30 && salarioParcial <= 3856.94) {
        const faixa3 = (salarioParcial - 2571.30) * 0.12;
        const faixa3Result = (faixa1 + 112.62 + faixa3).toFixed(2);
        console.log(faixa3Result)
        return faixa3Result;
    }
    else if (salarioParcial >= 3856.95 && salarioParcial <= 7507.49) {
        const faixa4 = (salarioParcial - 3856.95) * 0.14;
        const faixa4Result = (faixa1 + 112.62 + 154.28 + faixa4).toFixed(2);
        return faixa4Result;
    }   

}