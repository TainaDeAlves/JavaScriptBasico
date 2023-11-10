document.getElementById("validarbutton").
addEventListener("click",function(){
    // alert("deu certo")
    const cpf=document.getElementById("cpfinput").value;

    if(validacpf(cpf)){
        document.getElementById("resultado").textContent="CPF Valido"
    }
    else{
        document.getElementById("resultado").textContent="CPF invalido"
    }
})
function validacpf(vrcpf){
    return vrcpf.length ===11 & !isNaN(vrcpf);

}