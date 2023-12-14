function calculate(operator) {
    // Hämta värden från input-fälten
    const tal1 = parseInt(document.getElementById("tal1").value);
    const tal2 = parseInt(document.getElementById("tal2").value);

    let resultat;

    // Utför beräkningen baserat på den valda operatorn
    switch (operator) {
        case '+':
            resultat = tal1 + tal2;
            break;
        case '-':
            resultat = tal1 - tal2;
            break;
        case '*':
            resultat = tal1 * tal2;
            break;
        case '/':
            resultat = tal1 / tal2;
            break;
        default:
            console.error("Okänd operator");
            return;
    }

    // Skriv ut resultatet i svarsfältet
    document.getElementById("svar").value = isNaN(resultat) ? "Ogiltig operation" : resultat;
}
