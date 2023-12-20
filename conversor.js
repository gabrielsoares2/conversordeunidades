var uni1 = document.getElementById('unidades1')
		var uni2 = document.getElementById('unidades2')
		var va1 = document.getElementById('valor1')
		var resultado = document.getElementById('res')

		function Converter() {

			if (uni1.value === uni2.value) {
				alert('Por favor, coloque unidades diferentes!')
			}

			var valor1 = parseFloat(va1.value)

			if (uni1.value === 'Km' && uni2.value === 'Metros') {
				var resultadoTotal = valor1 * 1000
				resultado.innerHTML = valor1 + " quilometros são " + resultadoTotal + " metros"
			} else if (uni1.value === 'Metros' && uni2.value === 'Km') {
				var resultadoTotal = valor1 / 1000
				resultado.innerHTML = valor1 + " metros são " + resultadoTotal + " quilometros"
			}

		}