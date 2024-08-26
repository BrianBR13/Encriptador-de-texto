document.addEventListener('DOMContentLoaded', function() {
    const btnEncriptar = document.getElementById('btnEncriptar');
    const btnDesencriptar = document.getElementById('btnDesencriptar');
    const btnCopiar = document.getElementById('btnCopiar');
    const textoEntrada = document.getElementById('textoEntrada');
    const textoSalida = document.getElementById('textoSalida');
    const mensajeInicial = document.getElementById('mensaje-inicial');

    function mostrarResultado() {
        mensajeInicial.style.display = 'none';
        textoSalida.style.display = 'block';
        btnCopiar.style.display = 'block';
    }

    function encriptar(texto) {
        const reemplazos = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        return texto.replace(/[eiaou]/g, letra => reemplazos[letra]);
    }

    function desencriptar(texto) {
        const reemplazos = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        return texto.replace(/enter|imes|ai|ober|ufat/g, palabra => reemplazos[palabra]);
    }

    function validarEntrada(texto) {
        return /^[a-z\s]*$/.test(texto);
    }

    btnEncriptar.addEventListener('click', function() {
        const textoOriginal = textoEntrada.value.trim();
        if (textoOriginal !== '' && validarEntrada(textoOriginal)) {
            mostrarResultado();
            textoSalida.value = encriptar(textoOriginal);
        } else {
            alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        }
    });

    btnDesencriptar.addEventListener('click', function() {
        const textoEncriptado = textoEntrada.value.trim();
        if (textoEncriptado !== '') {
            mostrarResultado();
            textoSalida.value = desencriptar(textoEncriptado);
        } else {
            alert("Por favor, ingrese el texto encriptado para desencriptar.");
        }
    });

    btnCopiar.addEventListener('click', function() {
        textoSalida.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});