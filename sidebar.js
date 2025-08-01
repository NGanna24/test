﻿    fetch('sidebar.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    return response.text();
    })
    .then(html => {
        document.getElementById('sidebar-container').innerHTML = html;
    })
    .catch(error => {
        console.error('Erreur de chargement de la sidebar:', error);
    });
