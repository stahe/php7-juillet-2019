
    document.addEventListener("DOMContentLoaded", function() {
        var header = document.querySelector(".md-header__inner");
        if (!header) return;

        // Création du bouton
        var btn = document.createElement("a");
        btn.className = "md-header__button md-icon";
        btn.title = "Mode Focus (Masquer/Afficher les menus)";
        btn.style.cursor = "pointer";

        // Icone SVG (Type 'Fullscreen Exit' ou 'Eye')
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="currentColor"/></svg>';

        // Action au clic
        btn.onclick = function(e) {
            e.preventDefault();
            document.body.classList.toggle("md-focus");
        };

        // Insérer le bouton avant les autres icônes (repo ou search)
        // On l'ajoute à la fin de la zone header
        header.appendChild(btn);
    });
    