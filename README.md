# 🤖 Bot de Crossposting Discord

Ce bot publie automatiquement (crosspost) tous les messages envoyés dans un salon d’annonces Discord.  
Compatible avec les messages envoyés par des utilisateurs **et** par d’autres bots.

---

## 📦 Prérequis

- Ubuntu / Debian / Raspberry Pi OS
- Node.js (version LTS recommandée)
- Un bot Discord (token)
- Un salon d’annonces (channel de type "Announcement")

---

## 🛠️ Installation

### 1. Installer Node.js

```bash
sudo apt update
sudo apt install -y nodejs npm

```

Ou via **nvm** (recommandé) :

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts

```

### 2. Cloner le dépôt

```
git clone https://github.com/damientros/Crossposting.git
cd <VOTRE-REPO>

```

### 3. Installer les dépendances

```
npm install

```

## 🔐 Configuration

Créer un fichier `.env` (recommandé) :


```
nano .env

```

Et ajouter :

Code

```
DISCORD_TOKEN=TOKEN_ICI
ANNOUNCEMENT_CHANNEL_ID=ID_DU_SALON

```

Ajoute `.env` au `.gitignore` :

Code

```
echo ".env" >> .gitignore

```

## 🚀 Lancer le bot

### Mode normal (terminal)

```
node index.js

```

## 🟩 Lancer le bot 24/7 avec PM2

### 1. Installer PM2


```
sudo npm install -g pm2

```

### 2. Lancer le bot en arrière‑plan

```
pm2 start index.js --name bot-annonces

```

### 3. Voir l’état

```
pm2 status

```

### 4. Voir les logs

```
pm2 logs bot-annonces

```

## 🔁 Démarrage automatique au boot

### 1. Générer le service systemd

```
pm2 startup

```

PM2 affichera une commande `systemctl enable ...` → Copier‑coller‑la dans le terminal.

### 2. Sauvegarder la configuration

```
pm2 save

```

Le bot redémarrera automatiquement à chaque reboot.
