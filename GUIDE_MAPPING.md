# 🔧 Guide du système de mapping des colonnes

## Vue d'ensemble

Le **Grist Project Manager Widget** intègre un système de mapping flexible qui vous permet d'utiliser vos propres tables et colonnes Grist existantes au lieu des tables par défaut (PM_Tasks, PM_Users, etc.).

Cette fonctionnalité est particulièrement utile si :
- ✅ Vous avez déjà des données dans Grist
- ✅ Vos colonnes ont des noms différents (français, anglais, ou personnalisés)
- ✅ Vous souhaitez intégrer le widget dans un document existant
- ✅ Vous voulez réutiliser vos structures de données actuelles

---

## 🚀 Démarrage rapide

### Pour les nouveaux utilisateurs

Si vous installez le widget pour la première fois, **aucune configuration n'est nécessaire** ! Le widget créera automatiquement :
- Les tables par défaut (PM_Tasks, PM_Users, PM_Projects, etc.)
- La table de configuration PM_Config
- Le mapping par défaut

### Pour les utilisateurs avec des données existantes

1. Allez dans l'onglet **Paramètres** du widget
2. Cliquez sur **⚙️ Configurer le mapping** dans la section "Configuration avancée"
3. Sélectionnez vos tables existantes
4. Mappez vos colonnes aux champs du widget
5. Cliquez sur **💾 Enregistrer la configuration**

---

## 📋 Tables et colonnes supportées

### Table des Tâches (Tasks)

| Champ Widget | Description | Requis | Type Grist recommandé |
|--------------|-------------|--------|----------------------|
| **Titre** | Nom de la tâche | ✅ Oui | Text |
| **Description** | Description détaillée | Non | Text |
| **Statut** | todo / progress / done | ✅ Oui | Choice |
| **Priorité** | high / medium / low | ✅ Oui | Choice |
| **Assigné à** | Nom ou email de l'assigné | Non | Text |
| **Groupe** | Nom du groupe | Non | Text |
| **Date début** | Date de début | Non | Date |
| **Échéance** | Date d'échéance | Non | Date |
| **Produit** | Produit de la tâche | Non | Text |
| **Tag** | Tag associé | Non | Text |

### Table des Utilisateurs (Users)

| Champ Widget | Description | Requis | Type Grist recommandé |
|--------------|-------------|--------|----------------------|
| **Nom** | Nom complet | ✅ Oui | Text |
| **Email** | Adresse email | ✅ Oui | Text |
| **Rôle** | admin / member / viewer | Non | Choice |
| **Groupe** | Nom du groupe | Non | Text |

### Table des Projets (Projects)

| Champ Widget | Description | Requis | Type Grist recommandé |
|--------------|-------------|--------|----------------------|
| **Nom** | Nom du projet | ✅ Oui | Text |
| **Description** | Description du projet | Non | Text |
| **Couleur** | Couleur hex (#rrggbb) | Non | Text |
| **Statut** | active / completed / archived | Non | Choice |

### Table des Produits (Products)

| Champ Widget | Description | Requis | Type Grist recommandé |
|--------------|-------------|--------|----------------------|
| **Nom** | Nom du produit | ✅ Oui | Text |
| **Couleur** | Couleur hex (#rrggbb) | Non | Text |
| **Ordre** | Ordre d'affichage | Non | Int |

### Table des Tags

| Champ Widget | Description | Requis | Type Grist recommandé |
|--------------|-------------|--------|----------------------|
| **Nom** | Nom du tag | ✅ Oui | Text |
| **Couleur** | Couleur hex (#rrggbb) | Non | Text |

---

## 🎯 Cas d'usage

### Cas 1 : Colonnes en français

Vous avez une table `Taches` avec des colonnes en français :

```
Table: Taches
- Titre_Tache (Text)
- Description_Tache (Text)
- Etat (Choice: à faire, en cours, terminé)
- Priorite (Choice: haute, moyenne, basse)
- Responsable (Text)
```

**Configuration :**
1. Ouvrez le modal de configuration
2. Sélectionnez la table `Taches`
3. Mappez :
   - Titre → `Titre_Tache`
   - Description → `Description_Tache`
   - Statut → `Etat`
   - Priorité → `Priorite`
   - Assigné à → `Responsable`
4. Sauvegardez

⚠️ **Important :** Les valeurs de statut doivent être converties :
- "à faire" → "todo"
- "en cours" → "progress"
- "terminé" → "done"

### Cas 2 : Structure existante différente

Vous avez une table `WorkItems` avec une structure personnalisée :

```
Table: WorkItems
- Name (Text)
- Details (Text)
- CurrentStatus (Choice: New, InProgress, Completed)
- Level (Choice: Critical, Normal, Low)
- Owner (Text)
```

**Configuration :**
1. Mappez la table `WorkItems`
2. Mappez les colonnes :
   - Titre → `Name`
   - Description → `Details`
   - Statut → `CurrentStatus`
   - Priorité → `Level`
   - Assigné à → `Owner`

⚠️ **Attention :** Vous devrez ajuster les valeurs de Choice pour correspondre au format attendu.

### Cas 3 : Plusieurs tables de tâches

Vous avez plusieurs tables de tâches pour différents départements :

```
- Taches_Dev
- Taches_Marketing
- Taches_RH
```

**Solution :**
Le widget ne peut mapper qu'une seule table à la fois. Options :
1. **Recommandé :** Fusionnez vos tables et ajoutez une colonne `Departement`
2. **Alternative :** Créez plusieurs instances du widget, une par département

---

## 🔧 Configuration avancée

### Édition manuelle de PM_Config

Pour les utilisateurs avancés, vous pouvez éditer directement la table `PM_Config` :

| Colonne | Description | Exemple |
|---------|-------------|---------|
| Config_Key | Identifiant unique | `task_title` |
| Table_Name | Nom de la table Grist | `Mes_Taches` |
| Column_Name | Nom de la colonne | `Titre_Tache` |
| Display_Label | Label affiché dans l'UI | `Titre` |
| Required | Champ obligatoire | `TRUE` |
| Default_Value | Valeur par défaut | `Title` |

**Exemple de modification :**
```
Config_Key: task_title
Table_Name: Mes_Taches
Column_Name: Titre_Tache
Display_Label: Titre
Required: TRUE
Default_Value: Title
```

### Réinitialisation du mapping

Pour revenir au mapping par défaut :
1. Supprimez toutes les lignes de la table `PM_Config`
2. Rechargez le widget
3. Le widget recréera automatiquement la configuration par défaut

---

## ⚠️ Limitations et bonnes pratiques

### Limitations

1. **Une table par entité** : Vous ne pouvez mapper qu'une seule table pour les tâches, une pour les utilisateurs, etc.
2. **Types de colonnes** : Les types Grist doivent être compatibles (Text pour Text, Date pour Date, etc.)
3. **Valeurs de Choice** : Les valeurs doivent correspondre exactement aux valeurs attendues
4. **Colonnes obligatoires** : Les champs marqués comme requis doivent être mappés

### Bonnes pratiques

✅ **À faire :**
- Testez le mapping avec quelques enregistrements avant de migrer toutes vos données
- Gardez une sauvegarde de vos données avant de configurer le mapping
- Utilisez des noms de colonnes cohérents
- Documentez votre mapping personnalisé

❌ **À éviter :**
- Ne mappez pas plusieurs champs sur la même colonne
- N'utilisez pas de colonnes calculées pour les champs obligatoires
- Ne modifiez pas les noms de tables après avoir configuré le mapping
- N'oubliez pas de mapper les champs obligatoires

---

## 🐛 Dépannage

### Problème : "KeyError: Column_Name"

**Cause :** La colonne mappée n'existe pas dans la table.

**Solution :**
1. Vérifiez que le nom de la colonne est exact (sensible à la casse)
2. Ouvrez le modal de configuration et vérifiez le mapping
3. Assurez-vous que la table sélectionnée contient bien la colonne

### Problème : Les données ne s'affichent pas

**Cause :** Le mapping n'est pas correct ou les valeurs ne correspondent pas.

**Solution :**
1. Vérifiez les valeurs de statut (todo, progress, done)
2. Vérifiez les valeurs de priorité (high, medium, low)
3. Consultez la console JavaScript pour les erreurs

### Problème : Impossible de sauvegarder une tâche

**Cause :** Un champ obligatoire n'est pas mappé ou la colonne n'existe pas.

**Solution :**
1. Vérifiez que tous les champs obligatoires sont mappés
2. Vérifiez que les colonnes existent dans la table
3. Vérifiez les permissions d'écriture sur la table

---

## 📚 Exemples de configuration

### Configuration 1 : Tables en français

```javascript
// PM_Config
task_title → Mes_Taches.Titre
task_description → Mes_Taches.Description
task_status → Mes_Taches.Statut
task_priority → Mes_Taches.Priorite
task_assignee → Mes_Taches.Responsable
task_due_date → Mes_Taches.Echeance

user_name → Utilisateurs.Nom_Complet
user_email → Utilisateurs.Email
user_role → Utilisateurs.Role

project_name → Projets.Nom_Projet
project_description → Projets.Description
project_status → Projets.Statut
```

### Configuration 2 : Structure anglaise personnalisée

```javascript
// PM_Config
task_title → WorkItems.ItemName
task_description → WorkItems.Details
task_status → WorkItems.CurrentState
task_priority → WorkItems.ImportanceLevel
task_assignee → WorkItems.AssignedTo
task_due_date → WorkItems.DueDate

user_name → TeamMembers.FullName
user_email → TeamMembers.EmailAddress
user_role → TeamMembers.AccessLevel

project_name → Initiatives.ProjectName
project_description → Initiatives.Overview
project_status → Initiatives.Phase
```

---

## 🎓 Tutoriel pas à pas

### Scénario : Migrer vos tâches existantes

**Étape 1 : Préparation**
1. Identifiez votre table de tâches existante
2. Listez les colonnes disponibles
3. Notez les noms exacts (sensibles à la casse)

**Étape 2 : Configuration du mapping**
1. Ouvrez le widget
2. Allez dans **Paramètres**
3. Cliquez sur **⚙️ Configurer le mapping**
4. Dans "Table des Tâches", sélectionnez votre table
5. Le widget détecte automatiquement les colonnes disponibles
6. Mappez chaque champ :
   - Titre → [votre colonne de titre]
   - Statut → [votre colonne de statut]
   - Priorité → [votre colonne de priorité]
   - etc.

**Étape 3 : Vérification**
1. Cliquez sur **💾 Enregistrer la configuration**
2. Le widget recharge automatiquement les données
3. Vérifiez que vos tâches s'affichent correctement
4. Testez la création d'une nouvelle tâche

**Étape 4 : Ajustements**
Si nécessaire :
1. Rouvrez le modal de configuration
2. Ajustez les mappings incorrects
3. Sauvegardez à nouveau

---

## 💡 Conseils d'expert

### Performance

- **Tables volumineuses** : Le widget charge toutes les données en mémoire. Pour de très grandes tables (>1000 tâches), envisagez de filtrer ou d'archiver les anciennes tâches.

### Sécurité

- **Permissions** : Le mapping respecte les permissions Grist. Si un utilisateur n'a pas accès à une table, le widget ne pourra pas y accéder.

### Évolutivité

- **Nouvelles colonnes** : Vous pouvez ajouter de nouvelles colonnes à vos tables sans reconfigurer le mapping. Seules les colonnes mappées sont utilisées.

### Maintenance

- **Documentation** : Gardez une trace de votre configuration de mapping, surtout si vous avez une structure complexe.

---

## 🆘 Support

Si vous rencontrez des problèmes :

1. **Consultez la console JavaScript** (F12) pour les erreurs détaillées
2. **Vérifiez la table PM_Config** pour voir le mapping actuel
3. **Testez avec les tables par défaut** pour isoler le problème
4. **Contactez le support** : [https://gristup.fr](https://gristup.fr)

---

## 📝 Changelog du système de mapping

### Version 1.0 (Mars 2026)
- ✅ Système de mapping initial
- ✅ Interface graphique de configuration
- ✅ Support des tables Tasks, Users, Projects, Products, Tags
- ✅ Détection automatique des colonnes
- ✅ Sauvegarde dans PM_Config
- ✅ Compatibilité avec tables existantes

---

**Développé par Said Hamadou (isaytoo)**  
**Licence : Apache 2.0**  
**Site web : [https://gristup.fr](https://gristup.fr)**
