document.getElementById("validarbutton").
    addEventListener("click", function () {
        // alert("deu certo")
        const cpf = document.getElementById("cpfinput").value;

        if (validacpf(cpf)) {
            document.getElementById("resultado").textContent = "CPF Valido"
        }
        else {
            document.getElementById("resultado").textContent = "CPF invalido"
        }
    })
function validacpf(vrcpf) {
    let soma = 0;
    soma += parseInt(vrcpf.charAt(0)) * 10;
    soma += parseInt(vrcpf.charAt(1)) * 9;
    soma += parseInt(vrcpf.charAt(2)) * 8;
    soma += parseInt(vrcpf.charAt(3)) * 7;
    soma += parseInt(vrcpf.charAt(4)) * 6;
    soma += parseInt(vrcpf.charAt(5)) * 5;
    soma += parseInt(vrcpf.charAt(6)) * 4;
    soma += parseInt(vrcpf.charAt(7)) * 3;
    soma += parseInt(vrcpf.charAt(8)) * 2;

    let digitoX = soma % 11;
    digitoX = 11 - digitoX;

    if (digitoX > 10) {
        digitoX = 0;
    }

    let digitValido = true;

    if (digitoX !== parseInt(vrcpf.charAt(9))) {
        digitValido = false;
    }

    soma = 0;
    for (let posicao = 0, pesoY = 11; posicao < 10; posicao++, pesoY--) {
        soma += parseInt(vrcpf.charAt(posicao)) * pesoY;
    }
    let digitoY = 11-(soma%11);
    if (digitoY >= 10) {
        digitoY = 0;
    }
    if (digitoY !== parseInt(vrcpf.charAt(10))) {
        digitValido = false;
    }


    return digitValido;
    // return vrcpf.length === 11 & !isNaN(vrcpf);
}




