
	var valor1 = document.querySelector("#valor1");
	var valor2 = document.querySelector("#valor2");
	var valorR = document.querySelector("#valorR");
	var valorCE = document.querySelector("#valorCE");

	valorCE.addEventListener("click", ()=>{

		var cx1 = valor1.value;
		var cx2 = valor2.value;
		var cxR = valorR.value;

			if(Number(cx1) + Number(cx2) == Number(cxR)){

				alert("A soma está certa.");

			}else{

				alert("A soma está errada.");
			    }		
	});



















