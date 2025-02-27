// Validation du formulaire
function validateForm(event) {
    event.preventDefault();
    
    // Récupération des champs
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    
    // Suppression des anciens messages d'erreur
    document.querySelectorAll('.error').forEach(error => error.remove());
    
    let isValid = true;
    
    // Validation simple
    if (nom.length < 2) {
        showError('nom', 'Le nom doit contenir au moins 2 caractères');
        isValid = false;
    }
    
    if (prenom.length < 2) {
        showError('prenom', 'Le prénom doit contenir au moins 2 caractères');
        isValid = false;
    }
    
    if (!email.includes('@')) {
        showError('email', 'Veuillez entrer une adresse email valide');
        isValid = false;
    }
    
    if (isValid) {
        alert('Formulaire envoyé avec succès !');
        document.getElementById('contactForm').reset();
    }
    
    return false;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}