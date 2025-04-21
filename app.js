// Función principal para generar la contraseña
function generatePassword() {
    // Obtener y convertir a número la longitud deseada
    const length = parseInt(document.getElementById('length').value);

    // Obtener el estado (true/false) de cada checkbox de configuración
    const useUpper = document.getElementById('uppercase').checked;
    const useLower = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;
    const noAmbiguous = document.getElementById('no-ambiguous').checked;

    // Definir los posibles caracteres por categoría
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";           // Letras mayúsculas
    const lower = "abcdefghijklmnopqrstuvwxyz";           // Letras minúsculas
    const numbers = "0123456789";                         // Dígitos
    const symbols = "!@#$%^&*()_-+[]{}<>?";                // Caracteres especiales

    const ambiguous = "O0Il1";                            // Caracteres ambiguos a evitar

    // Concatenar el conjunto de caracteres según la selección del usuario
    let chars = "";
    if (useUpper) chars += upper;
    if (useLower) chars += lower;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    // Si se seleccionó evitar caracteres ambiguos, los eliminamos del conjunto
    if (noAmbiguous) {
        chars = chars.split('').filter(c => !ambiguous.includes(c)).join('');
    }

    // Validar que se haya seleccionado al menos un tipo de carácter
    if (chars.length === 0) {
        alert("Selecciona al menos un tipo de carácter.");
        return; // Detener ejecución si no hay caracteres válidos
    }

    // Generar la contraseña aleatoriamente
    let password = "";
    for (let i = 0; i < length; i++) {
        // Elegir un carácter aleatorio del conjunto final
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Mostrar la contraseña generada en la interfaz
    document.getElementById('result').innerText = password;
}

// Función para copiar la contraseña generada al portapapeles
function copyToClipboard() {
    const password = document.getElementById('result').innerText;

    // Usar la API del navegador para copiar texto
    navigator.clipboard.writeText(password).then(() => {
        alert("¡Contraseña copiada al portapapeles!");
    });
}
