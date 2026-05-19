# 🎯 Fléchettes — Guide d'installation

## 1. Héberger sur GitHub Pages (obligatoire pour installer sur mobile)

### Créer un compte GitHub
→ https://github.com/signup (gratuit)

### Créer un dépôt
1. "New repository" → nommez-le `flechettes` → Public → "Create repository"
2. "uploading an existing file" → glissez TOUS les fichiers du dossier
3. "Commit changes"

### Activer GitHub Pages
Settings → Pages → Branch: main → / (root) → Save

→ URL : https://VOTRE_PSEUDO.github.io/flechettes/

### Installer sur Android
Chrome → menu ⋮ → "Ajouter à l'écran d'accueil"

### Installer sur iPhone
Safari → bouton Partager ↑ → "Sur l'écran d'accueil"

---

## 2. Activer la synchronisation entre appareils (optionnel)

### Créer un projet Firebase (gratuit)
1. Allez sur https://console.firebase.google.com
2. "Créer un projet" → nommez-le `flechettes` → Continuer
3. Désactivez Google Analytics → Créer le projet

### Obtenir la config Firebase
1. Dans le projet : icône ⚙️ → "Paramètres du projet"
2. Section "Vos applications" → cliquez </> (Web)
3. Nommez l'app → "Enregistrer"
4. Copiez le bloc `firebaseConfig` affiché

### Configurer Firestore
1. Dans le menu gauche : "Firestore Database"
2. "Créer une base de données" → "Démarrer en mode test" → Suivant → Activer

### Modifier index.html
Remplacez le bloc FIREBASE_CFG au début du script :

```javascript
const FIREBASE_CFG = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_PROJECT.firebaseapp.com",
  projectId: "VOTRE_PROJECT_ID"
};
```

### Utiliser la sync dans l'app
1. Ouvrez l'app sur vos deux appareils
2. Appuyez sur "Non synchronisé" en haut du menu
3. Entrez le même code à 4 chiffres sur les deux appareils (ex: 1234)
4. Le badge devient vert "Groupe 1234" → les stats sont partagées !

---

## Fonctionnalités
- 501 / 301 / 201 · Individuel (1-8 joueurs) · Équipes (×2 ou ×3)
- Fin simple / double / master
- Conseils de sortie dynamiques
- Statistiques persistantes par joueur
- Synchronisation cloud entre appareils
- Fonctionne hors connexion
