function valida(){
	/*var d = document.getElementsById('exampleCheck1')

     if (d.seg.checked == false) {
			alert ("Formulário não pode ser enviado em branco");
			return false;
		} else {
            alert ("Nenhum problema foi detectado. Seu formulário pode ser enviado");
		}*/
var check = document.getElementsByClass("form-check-label");
    for (var i=0;i<check.length;i++){ 
        if (check[i].checked == true){ 
            // CheckBox Marcado... Faça alguma coisa...
            alert ("Nenhum problema foi detectado. Seu formulário pode ser enviado");

        }  else {
           // CheckBox Não Marcado... Faça alguma outra coisa...
           alert ("Formulário não pode ser enviado em branco");
        }
    }
}