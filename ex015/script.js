function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        //res.innerHTML = `Idade calculada e: ${idade}`
        if (fsex[0].checked) {
            genero = 'homen'
            if(idade >=0 && idade<= 10){
                //criança
                img.setAttribute('src','\img\criança.png')
            }else if(idade < 21){
                //joven
                img.setAttribute('src','Modulo D\aula12\aula12ex\ex015\img\jovenHomem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','Modulo D\aula12\aula12ex\ex015\img\adultoHomem.png')
            }else{
                //idoso
                img.setAttribute('src','Modulo D\aula12\aula12ex\ex015\img\idosoHomem.png')
            }
        }else if(fsex[1].checked){
            genero  = 'mulher'
            if(idade >=0 && idade<= 10){
                //criança
                img.setAttribute('src','Modulo D\aula12\aula12ex\ex015\img\criançaMulher.png')
            }else if(idade < 21){
                //joven
                img.setAttribute('src','Modulo D\aula12\aula12ex\ex015\img\jovemMulher.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','Modulo D\aula12\aula12ex\ex015\img\adultaMulher.png')
            }else{
                //idoso
                img.setAttribute('src','Modulo D\aula12\aula12ex\ex015\img\idosaMulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dedetectamos que seu genero e: ${genero} com a idade de ${idade} anos`
        res.appendChild(img)
    }
}