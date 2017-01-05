function validateForm(){

	var spans=document.getElementsByClassName("error");
	while (spans.length>0) {
		spans[0].parentElement.removeChild(spans[0]);
	}
	
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var mail = document.getElementById("input-email").value;
	var clave = document.getElementById("input-password").value;
	
	if (!(/^[A-Z][a-zA-Z]*$/.test(nombre))){
		var validacion =document.createElement("span");
		validacion.setAttribute("class", "error");
		validacion.appendChild(document.createTextNode("Debe ingresar su nombre comenzando por mayuscula"));
		document.getElementById("name").parentElement.appendChild(validacion);
	}
	if (!(/^[A-Z][a-zA-Z]*$/.test(apellido))){
		var validacion =document.createElement("span");
		validacion.setAttribute("class", "error");
		validacion.appendChild(document.createTextNode("Debe ingresar su Apellido comenzando por mayuscula"));
		document.getElementById("lastname").parentElement.appendChild(validacion);
	}
	if (mail =="" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail))){
		var validacion =document.createElement("span");
		validacion.setAttribute("class", "error");
		validacion.appendChild(document.createTextNode("Verifique su e-mail"));
		document.getElementById("input-email").parentElement.appendChild(validacion);
	}

	campoPassword =document.getElementById("input-password").value;
	if (campoPassword <6 || campoPassword=="password" || campoPassword=="12345" ||campoPassword=="098765") {
		var validacion =document.createElement("span");
		validacion.setAttribute("class", "error");
		validacion.appendChild(document.createTextNode("La contraseña debe tener al menos 6 caracteres"));
		document.getElementById("input-password").parentElement.appendChild(validacion);
}

	camposSeleccion = document.getElementById("seleccion").selectedIndex;
	if (camposSeleccion ==  null || camposSeleccion==0){
		var validacion =document.createElement("span");
		validacion.setAttribute("class", "error");
		validacion.appendChild(document.createTextNode("Debes seleccionar al menos un tipo de bici"));
		document.getElementById("seleccion").parentElement.appendChild(validacion);

	} 
}












	


/* var name =document.getElementById("name");
 if (name.value=null) {
 	var span=document.createElement
 	span.innerHtml ="error";
 	name.parentNodeAppendChild("span")
 }
	*/