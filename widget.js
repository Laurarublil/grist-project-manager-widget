// =============================================================================
// GRIST PROJECT MANAGER WIDGET
// =============================================================================

var currentLang = 'fr';

var i18n = {
  fr: {
    appTitle: 'Gestion de Projet',
    appSubtitle: 'Organisez et suivez vos tâches avec le tableau Kanban ou la vue tableau',
    notInGrist: 'Ce widget doit être utilisé dans Grist.',
    tabCalendar: 'Calendrier',
    tabKanban: 'Kanban',
    tabTable: 'Tableau',
    tabGantt: 'Gantt',
    tabTemplates: 'Templates',
    newTask: 'Nouvelle tâche',
    newProject: 'Nouveau projet',
    statTotal: 'Total',
    statTodo: 'À faire',
    statProgress: 'En cours',
    statDone: 'Terminées',
    colTodo: 'À faire',
    colProgress: 'En cours',
    colDone: 'Terminé',
    noTasks: 'Aucune tâche',
    addTask: '+ Ajouter une tâche',
    tableTitle: 'Tableau de Gestion',
    tableSubtitle: 'Gérez vos tâches avec édition inline avancée',
    searchPlaceholder: 'Rechercher une tâche...',
    allStatuses: 'Tous les statuts',
    allPriorities: 'Toutes priorités',
    colTaskName: 'Tâche',
    colStatus: 'Statut',
    colPriority: 'Priorité',
    colAssignee: 'Assigné à',
    colStartDate: 'Date de début',
    colDueDate: 'Échéance',
    colActions: 'Actions',
    ganttTitle: 'Diagramme de Gantt',
    ganttYear: 'Année :',
    ganttToday: "Aujourd'hui",
    ganttDays: 'Jours',
    ganttWeeks: 'Semaines',
    ganttMonths: 'Mois',
    ganttYear2: 'Année',
    ganttTwoYears: '2 Ans',
    ganttSortLabel: 'Trier :',
    ganttSortDefault: 'Défaut',
    ganttSortPriority: 'Priorité',
    ganttSortAlpha: 'A → Z',
    ganttSortDue: 'Échéance',
    ganttCustom: 'Personnalisé',
    ganttRangeFrom: 'Du :',
    ganttRangeTo: 'au :',
    extensionDate: 'Date de prolongation',
    extensionTooltip: 'Prolongation : dépassement de l\'échéance',
    autoExtend: 'Prolongation auto',
    autoExtendHint: 'Prolonge automatiquement jusqu\'à la date du jour tant que la tâche n\'est pas terminée',
    ganttFullYear: 'Année complète',
    ganttNavInfo: 'Navigation infinie vers autres années',
    ganttViewRange: 'Vue :',
    templatesTitle: 'Tâches Préformatées',
    templatesSubtitle: 'Gérez les modèles de tâches disponibles pour tous les utilisateurs',
    newTemplate: 'Nouveau modèle',
    modalNewTask: 'Nouvelle tâche',
    modalEditTask: 'Modifier la tâche',
    modalNewTemplate: 'Nouveau modèle de tâche',
    fieldTitle: 'Titre *',
    fieldDescription: 'Description',
    fieldStatus: 'Statut',
    fieldPriority: 'Priorité',
    fieldAssignee: 'Assigné à',
    fieldGroup: 'Groupe',
    fieldStartDate: 'Date de début',
    fieldDueDate: 'Échéance',
    fieldCategory: 'Produit',
    fieldEstimatedTime: 'Temps estimé (h)',
    priorityHigh: 'Haute',
    priorityMedium: 'Moyenne',
    priorityLow: 'Basse',
    statusTodo: 'À faire',
    statusProgress: 'En cours',
    statusDone: 'Terminé',
    save: 'Enregistrer',
    cancel: 'Annuler',
    delete: 'Supprimer',
    confirmDelete: 'Supprimer cette tâche ?',
    confirmDeleteTemplate: 'Supprimer ce modèle ?',
    taskCreated: 'Tâche créée !',
    taskUpdated: 'Tâche mise à jour !',
    taskDeleted: 'Tâche supprimée.',
    taskMoved: 'Tâche déplacée.',
    templateCreated: 'Modèle créé !',
    templateDeleted: 'Modèle supprimé.',
    overdue: 'En retard',
    noDate: 'Aucune date',
    notDefined: 'Non définie',
    tablesCreated: 'Tables créées automatiquement.',
    notifications: 'Alertes',
    overdueTasksAlert: 'tâche(s) en retard',
    upcomingTasksAlert: 'tâche(s) à venir (3j)',
    noAlerts: 'Aucune alerte',
    markAllRead: 'Tout lu',
    markAsRead: 'Marquer comme lu',
    notifUnread: 'non lu(s)',
    automationTitle: 'Automatisations',
    automationSubtitle: 'Actions automatiques quand les tâches changent',
    addRule: 'Ajouter une règle',
    ruleEnabled: 'Activée',
    ruleDisabled: 'Désactivée',
    triggerLabel: 'Déclencheur',
    triggerStatusChange: 'Changement de statut',
    triggerPriorityChange: 'Changement de priorité',
    triggerAssignmentChange: 'Changement d\'assignation',
    triggerOverdue: 'Tâche en retard',
    triggerApproachingDeadline: 'Échéance proche (3j)',
    conditionFrom: 'De',
    conditionTo: 'Vers',
    conditionAny: 'N\'importe quel',
    actionLabel: 'Action',
    actionNotifyAssignee: 'Notifier l\'assigné',
    actionNotifyProjectLead: 'Notifier le responsable',
    actionNotifySpecific: 'Notifier une personne',
    actionNotifyAll: 'Notifier tout le monde',
    noRules: 'Aucune règle configurée',
    ruleCreated: 'Règle créée',
    ruleDeleted: 'Règle supprimée',
    ruleSaved: 'Règle sauvegardée',
    messageTemplate: 'Message',
    defaultRules: 'Ajouter les règles par défaut',
    exportCsv: 'Export CSV',
    exportPdf: 'Export PDF',
    searchPlaceholder: 'Rechercher...',
    tags: 'Tags',
    addTag: 'Ajouter tag',
    statistics: 'Statistiques',
    darkMode: 'Mode sombre',
    lightMode: 'Mode clair',
    tabStats: 'Stats',
    statsTitle: 'Statistiques',
    statsSubtitle: 'Analysez la productivité de votre équipe',
    chartStatus: 'Répartition par statut',
    chartPriority: 'Répartition par priorité',
    chartAssignee: 'Tâches par assigné',
    chartWeek: 'Tâches cette semaine',
    chartWorkload: 'Charge de travail (risque de surcharge)',
    completionRate: 'Taux de complétion',
    overdueLabel: 'En retard',
    avgTimePerTask: 'Temps moyen/tâche',
    totalTime: 'Temps total',
    allProjects: 'Tous les projets',
    manageProjects: 'Gérer les projets',
    project: 'Projet',
    projectName: 'Nom du projet',
    projectLead: 'Responsable',
    projectDescription: 'Description',
    projectColor: 'Couleur',
    projectStatus: 'Statut',
    addProject: 'Ajouter un projet',
    editProject: 'Modifier le projet',
    deleteProject: 'Supprimer le projet',
    noProject: 'Sans projet',
    projectSearchPlaceholder: 'Rechercher un projet...',
    tabSettings: 'Paramètres',
    settingsSubtitle: 'Configurez vos projets, produits et autres options',
    projectsSubtitle: 'Gérez vos projets',
    categoriesSubtitle: 'Gérez les produits de tâches',
    tagsSubtitle: 'Gérez les tags pour vos tâches',
    addCategory: 'Ajouter',
    tagName: 'Nom du tag',
    tagColor: 'Couleur',
    useTemplate: 'Utiliser',
    totalTemplates: 'Total modèles',
    totalUsages: 'Utilisations totales',
    mostUsed: 'Plus utilisé',
    categories: 'Produits',
    tabTeam: 'Équipe',
    teamUsersTitle: 'Utilisateurs',
    teamUsersSubtitle: 'Gérez les membres de votre équipe',
    manageRoles: 'Rôles',
    manageRolesTitle: 'Gérer les rôles',
    manageRolesSubtitle: 'Ajoutez ou supprimez des rôles utilisés dans votre équipe',
    addRole: 'Ajouter un rôle',
    newRolePlaceholder: 'Nom du nouveau rôle',
    rolesUpdated: 'Rôles mis à jour !',
    confirmDeleteRole: 'Supprimer ce rôle ?',
    cannotDeleteUsedRole: 'Ce rôle est utilisé par des utilisateurs',
    teamGroupsTitle: 'Groupes',
    teamGroupsSubtitle: 'Organisez vos utilisateurs en groupes',
    addUser: 'Ajouter',
    addGroup: 'Ajouter',
    modalNewUser: 'Nouvel utilisateur',
    modalNewGroup: 'Nouveau groupe',
    fieldName: 'Nom *',
    fieldEmail: 'Email',
    fieldRole: 'Rôle',
    roleAdmin: 'Administrateur',
    roleMember: 'Membre',
    roleViewer: 'Lecteur',
    userCreated: 'Utilisateur ajouté !',
    userDeleted: 'Utilisateur supprimé.',
    groupCreated: 'Groupe créé !',
    groupDeleted: 'Groupe supprimé.',
    confirmDeleteUser: 'Supprimer cet utilisateur ?',
    confirmDeleteGroup: 'Supprimer ce groupe ?',
    noUsers: 'Aucun utilisateur',
    noGroups: 'Aucun groupe',
    members: 'membres',
    progression: 'Progression',
    advancement: 'Avancement',
    startLabel: 'Début :',
    dueLabel: 'Échéance :',
    quickActions: 'Actions rapides',
    reopenTask: 'Rouvrir la tâche',
    startTask: 'Démarrer la tâche',
    completeTask: 'Terminer la tâche',
    changePriority: 'Changer la priorité',
    taskSummary: 'Résumé de la tâche',
    addAssignee: 'Ajouter',
    searchAssignee: 'Rechercher des noms...',
    subtasks: 'Sous-tâches',
    addSubtask: 'Ajouter une sous-tâche',
    subtaskPlaceholder: 'Nouvelle sous-tâche...',
    noSubtasks: 'Aucune sous-tâche',
    subtaskCompleted: 'Sous-tâche terminée',
    subtaskDeleted: 'Sous-tâche supprimée',
    subtaskSaved: 'Sous-tâche modifiée',
    editSubtask: 'Modifier la sous-tâche',
    subtaskAssignee: 'Responsable',
    definitionOfDone: 'Definition of Done',
    addCriterion: 'Ajouter un critère',
    newCriterion: 'Nouveau critère',
    dodCriterionAdded: 'Critère DoD ajouté',
    dodCriterionDeleted: 'Critère DoD supprimé',
    dodCriterionUpdated: 'Critère DoD mis à jour',
    dodIncomplete: 'DoD incomplet : cochez tous les critères pour terminer la sous-tâche',
    subtaskDueDate: 'Échéance',
    noAssignee: 'Non assigné',
    dependencies: 'Dépendances',
    blockedBy: 'Bloqué par',
    blocks: 'Bloque',
    addDependency: 'Ajouter une dépendance',
    noDependencies: 'Aucune dépendance',
    dependencyAdded: 'Dépendance ajoutée',
    dependencyRemoved: 'Dépendance supprimée',
    selectTask: 'Sélectionner une tâche...',
    blockedWarning: 'Tâche bloquée',
    comments: 'Commentaires',
    addComment: 'Ajouter un commentaire',
    commentPlaceholder: 'Écrire un commentaire...',
    noComments: 'Aucun commentaire',
    commentAdded: 'Commentaire ajouté',
    commentDeleted: 'Commentaire supprimé',
    justNow: "À l'instant",
    minutesAgo: 'il y a {n} min',
    hoursAgo: 'il y a {n}h',
    daysAgo: 'il y a {n}j',
    timeTracking: 'Suivi du temps',
    startTimer: 'Démarrer',
    stopTimer: 'Arrêter',
    timerRunning: 'En cours...',
    totalTime: 'Temps total',
    estimatedTime: 'Temps estimé',
    timeEntries: 'Entrées de temps',
    noTimeEntries: 'Aucune entrée',
    timeEntryAdded: 'Temps enregistré',
    timeEntryDeleted: 'Entrée supprimée',
    hours: 'h',
    minutes: 'min',
    recurrence: 'Récurrence',
    recurrenceNone: 'Aucune',
    recurrenceDaily: 'Quotidienne',
    recurrenceWeekly: 'Hebdomadaire',
    recurrenceBiweekly: 'Toutes les 2 semaines',
    recurrenceMonthly: 'Mensuelle',
    recurrenceQuarterly: 'Trimestrielle',
    recurrenceYearly: 'Annuelle',
    nextOccurrence: 'Prochaine occurrence créée',
    recurrenceExplain: 'Quand cette tâche est marquée "Terminée", une nouvelle occurrence est automatiquement créée avec les dates décalées.',
    generateMonth: 'Générer pour le mois',
    generateYear: 'Générer pour l\'année',
    occurrencesGenerated: 'occurrences générées',
    customFields: 'Champs personnalisés',
    manageCustomFields: 'Gérer les champs',
    addCustomField: 'Ajouter un champ',
    fieldName: 'Nom',
    customFieldName: 'Nom du champ',
    fieldType: 'Type',
    fieldOptions: 'Options (séparées par virgule)',
    typeText: 'Texte',
    typeNumber: 'Nombre',
    typeDate: 'Date',
    typeCheckbox: 'Case à cocher',
    typeSelect: 'Liste déroulante',
    customFieldCreated: 'Champ créé',
    customFieldDeleted: 'Champ supprimé',
    noCustomFields: 'Aucun champ personnalisé',
    categories: 'Produits',
    manageCategories: 'Gérer les produits',
    addCategory: 'Ajouter',
    categoryCreated: 'Produit créé',
    categoryDeleted: 'Produit supprimé',
    noCategories: 'Aucun produit',
    chartTimeline: 'Charge dans le temps par agent',
    chartBurndown: 'Burndown / Burnup',
    burnRemaining: 'Restantes',
    burnCompleted: 'Terminées',
    burnIdeal: 'Idéal',
    activityLog: 'Journal d\'activité',
    activityLogSubtitle: 'Historique des actions récentes',
    actTaskCreated: 'a créé la tâche',
    actTaskUpdated: 'a modifié la tâche',
    actTaskDeleted: 'a supprimé la tâche',
    actStatusChanged: 'a changé le statut de',
    actTaskArchived: 'a archivé la tâche',
    actTaskRestored: 'a restauré la tâche',
    actCommentAdded: 'a commenté sur',
    actNoActivity: 'Aucune activité récente',
    actLoadMore: 'Voir plus',
    edit: 'Modifier',
    required: 'requis',
    tag: 'Tag',
    globalSearchPlaceholder: 'Rechercher...',
    taskSearchPlaceholder: 'Rechercher une tâche...',
    templateSearchPlaceholder: 'Rechercher un modèle...',
    calToday: "Aujourd'hui",
    calMonth: 'Mois',
    calWeek: 'Semaine',
    calDay: 'Jour',
    manageRolesTitle: 'Gérer les rôles',
    byWeek8: 'Par semaine (8 sem.)',
    byMonth6: 'Par mois (6 mois)',
    allAgents: 'Tous les agents',
    advancedConfig: 'Configuration avancée',
    mappingSubtitle: 'Mappez vos propres tables et colonnes Grist',
    configureMapping: 'Configurer le mapping',
    mappingDescription: 'Par défaut, le widget utilise les tables PM_Tasks, PM_Users, etc. Vous pouvez mapper vos propres tables existantes pour réutiliser vos données.',
    mappingGuide: 'Consulter le guide complet du système de mapping',
    securityTitle: 'Sécurité du document',
    securitySubtitle: 'Protégez les tables PM_* avec des règles d\'accès Grist (ACL)',
    raciMode: 'Mode RACI',
    raciSubtitle: 'Activez la matrice RACI pour définir les rôles sur chaque tâche',
    raciResponsible: 'Responsable (R)',
    raciAccountable: 'Approbateur (A)',
    raciConsulted: 'Consulté (C)',
    raciInformed: 'Informé (I)',
    raciEnabled: 'Mode RACI activé',
    raciDisabled: 'Mode RACI désactivé',
    projectActive: 'Actif',
    projectCompleted: 'Terminé',
    projectArchived: 'Archivé',
    editTemplate: 'Modifier le modèle',
    modalEditTemplate: 'Modifier le modèle de tâche',
    templateUpdated: 'Modèle mis à jour !'
  },
  en: {
    appTitle: 'Project Management',
    appSubtitle: 'Organize and track your tasks with the Kanban board or table view',
    notInGrist: 'This widget must be used inside Grist.',
    tabCalendar: 'Calendar',
    tabKanban: 'Kanban',
    tabTable: 'Table',
    tabGantt: 'Gantt',
    tabTemplates: 'Templates',
    newTask: 'New task',
    newProject: 'New project',
    statTotal: 'Total',
    statTodo: 'To do',
    statProgress: 'In progress',
    statDone: 'Completed',
    colTodo: 'To do',
    colProgress: 'In progress',
    colDone: 'Done',
    noTasks: 'No tasks',
    addTask: '+ Add a task',
    tableTitle: 'Management Table',
    tableSubtitle: 'Manage your tasks with advanced inline editing',
    searchPlaceholder: 'Search a task...',
    allStatuses: 'All statuses',
    allPriorities: 'All priorities',
    colTaskName: 'Task',
    colStatus: 'Status',
    colPriority: 'Priority',
    colAssignee: 'Assigned to',
    colStartDate: 'Start date',
    colDueDate: 'Due date',
    colActions: 'Actions',
    ganttTitle: 'Gantt Chart',
    ganttYear: 'Year:',
    ganttToday: 'Today',
    ganttDays: 'Days',
    ganttWeeks: 'Weeks',
    ganttMonths: 'Months',
    ganttYear2: 'Year',
    ganttTwoYears: '2 Years',
    ganttSortLabel: 'Sort:',
    ganttSortDefault: 'Default',
    ganttSortPriority: 'Priority',
    ganttSortAlpha: 'A → Z',
    ganttSortDue: 'Due date',
    ganttCustom: 'Custom',
    ganttRangeFrom: 'From:',
    ganttRangeTo: 'to:',
    extensionDate: 'Extension date',
    extensionTooltip: 'Extension: overdue beyond deadline',
    autoExtend: 'Auto extend',
    autoExtendHint: 'Automatically extends to today until the task is completed',
    ganttFullYear: 'Full year',
    ganttNavInfo: 'Infinite navigation to other years',
    ganttViewRange: 'View:',
    templatesTitle: 'Task Templates',
    templatesSubtitle: 'Manage task templates available to all users',
    newTemplate: 'New template',
    modalNewTask: 'New task',
    modalEditTask: 'Edit task',
    modalNewTemplate: 'New task template',
    fieldTitle: 'Title *',
    fieldDescription: 'Description',
    fieldStatus: 'Status',
    fieldPriority: 'Priority',
    fieldAssignee: 'Assigned to',
    fieldGroup: 'Group',
    fieldStartDate: 'Start date',
    fieldDueDate: 'Due date',
    fieldCategory: 'Product',
    fieldEstimatedTime: 'Estimated time (h)',
    priorityHigh: 'High',
    priorityMedium: 'Medium',
    priorityLow: 'Low',
    statusTodo: 'To do',
    statusProgress: 'In progress',
    statusDone: 'Done',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    confirmDelete: 'Delete this task?',
    confirmDeleteTemplate: 'Delete this template?',
    taskCreated: 'Task created!',
    taskUpdated: 'Task updated!',
    taskDeleted: 'Task deleted.',
    taskMoved: 'Task moved.',
    templateCreated: 'Template created!',
    templateDeleted: 'Template deleted.',
    notifications: 'Alerts',
    overdueTasksAlert: 'overdue task(s)',
    upcomingTasksAlert: 'upcoming task(s) (3d)',
    noAlerts: 'No alerts',
    markAllRead: 'All read',
    markAsRead: 'Mark as read',
    notifUnread: 'unread',
    automationTitle: 'Automations',
    automationSubtitle: 'Automatic actions when tasks change',
    addRule: 'Add a rule',
    ruleEnabled: 'Enabled',
    ruleDisabled: 'Disabled',
    triggerLabel: 'Trigger',
    triggerStatusChange: 'Status change',
    triggerPriorityChange: 'Priority change',
    triggerAssignmentChange: 'Assignment change',
    triggerOverdue: 'Task overdue',
    triggerApproachingDeadline: 'Approaching deadline (3d)',
    conditionFrom: 'From',
    conditionTo: 'To',
    conditionAny: 'Any',
    actionLabel: 'Action',
    actionNotifyAssignee: 'Notify assignee',
    actionNotifyProjectLead: 'Notify project lead',
    actionNotifySpecific: 'Notify specific person',
    actionNotifyAll: 'Notify everyone',
    noRules: 'No rules configured',
    ruleCreated: 'Rule created',
    ruleDeleted: 'Rule deleted',
    ruleSaved: 'Rule saved',
    messageTemplate: 'Message',
    defaultRules: 'Add default rules',
    exportCsv: 'Export CSV',
    exportPdf: 'Export PDF',
    searchPlaceholder: 'Search...',
    tags: 'Tags',
    addTag: 'Add tag',
    statistics: 'Statistics',
    darkMode: 'Dark mode',
    lightMode: 'Light mode',
    tabStats: 'Stats',
    statsTitle: 'Statistics',
    statsSubtitle: 'Analyze your team productivity',
    chartStatus: 'Distribution by status',
    chartPriority: 'Distribution by priority',
    chartAssignee: 'Tasks by assignee',
    chartWeek: 'Tasks this week',
    chartWorkload: 'Workload (overload risk)',
    completionRate: 'Completion rate',
    overdueLabel: 'Overdue',
    avgTimePerTask: 'Avg time/task',
    totalTime: 'Total time',
    allProjects: 'All projects',
    manageProjects: 'Manage projects',
    project: 'Project',
    projectName: 'Project name',
    projectLead: 'Lead',
    projectDescription: 'Description',
    projectColor: 'Color',
    projectStatus: 'Status',
    addProject: 'Add project',
    editProject: 'Edit project',
    deleteProject: 'Delete project',
    noProject: 'No project',
    projectSearchPlaceholder: 'Search a project...',
    tabSettings: 'Settings',
    settingsSubtitle: 'Configure your projects, products and other options',
    projectsSubtitle: 'Manage your projects',
    categoriesSubtitle: 'Manage task products',
    tagsSubtitle: 'Manage tags for your tasks',
    addCategory: 'Add',
    tagName: 'Tag name',
    tagColor: 'Color',
    overdue: 'Overdue',
    noDate: 'No date',
    notDefined: 'Not defined',
    tablesCreated: 'Tables created automatically.',
    useTemplate: 'Use',
    totalTemplates: 'Total templates',
    totalUsages: 'Total usages',
    mostUsed: 'Most used',
    categories: 'Products',
    tabTeam: 'Team',
    teamUsersTitle: 'Users',
    teamUsersSubtitle: 'Manage your team members',
    manageRoles: 'Roles',
    manageRolesTitle: 'Manage roles',
    manageRolesSubtitle: 'Add or remove roles used by your team',
    addRole: 'Add role',
    newRolePlaceholder: 'New role name',
    rolesUpdated: 'Roles updated!',
    confirmDeleteRole: 'Delete this role?',
    cannotDeleteUsedRole: 'This role is used by users',
    teamGroupsTitle: 'Groups',
    teamGroupsSubtitle: 'Organize your users into groups',
    addUser: 'Add',
    addGroup: 'Add',
    modalNewUser: 'New user',
    modalNewGroup: 'New group',
    fieldName: 'Name *',
    fieldEmail: 'Email',
    fieldRole: 'Role',
    roleAdmin: 'Administrator',
    roleMember: 'Member',
    roleViewer: 'Viewer',
    userCreated: 'User added!',
    userDeleted: 'User deleted.',
    groupCreated: 'Group created!',
    groupDeleted: 'Group deleted.',
    confirmDeleteUser: 'Delete this user?',
    confirmDeleteGroup: 'Delete this group?',
    noUsers: 'No users',
    noGroups: 'No groups',
    members: 'members',
    progression: 'Progression',
    advancement: 'Progress',
    startLabel: 'Start:',
    dueLabel: 'Due:',
    quickActions: 'Quick Actions',
    reopenTask: 'Reopen task',
    startTask: 'Start task',
    completeTask: 'Complete task',
    changePriority: 'Change priority',
    taskSummary: 'Task Summary',
    addAssignee: 'Add',
    searchAssignee: 'Search names...',
    subtasks: 'Subtasks',
    addSubtask: 'Add subtask',
    subtaskPlaceholder: 'New subtask...',
    noSubtasks: 'No subtasks',
    subtaskCompleted: 'Subtask completed',
    subtaskDeleted: 'Subtask deleted',
    subtaskSaved: 'Subtask updated',
    editSubtask: 'Edit subtask',
    subtaskAssignee: 'Assignee',
    definitionOfDone: 'Definition of Done',
    addCriterion: 'Add criterion',
    newCriterion: 'New criterion',
    dodCriterionAdded: 'DoD criterion added',
    dodCriterionDeleted: 'DoD criterion deleted',
    dodCriterionUpdated: 'DoD criterion updated',
    dodIncomplete: 'Incomplete DoD: check all criteria to complete the subtask',
    subtaskDueDate: 'Due date',
    noAssignee: 'Unassigned',
    dependencies: 'Dependencies',
    blockedBy: 'Blocked by',
    blocks: 'Blocks',
    addDependency: 'Add dependency',
    noDependencies: 'No dependencies',
    dependencyAdded: 'Dependency added',
    dependencyRemoved: 'Dependency removed',
    selectTask: 'Select a task...',
    blockedWarning: 'Blocked task',
    comments: 'Comments',
    addComment: 'Add comment',
    commentPlaceholder: 'Write a comment...',
    noComments: 'No comments',
    commentAdded: 'Comment added',
    commentDeleted: 'Comment deleted',
    justNow: 'Just now',
    minutesAgo: '{n} min ago',
    hoursAgo: '{n}h ago',
    daysAgo: '{n}d ago',
    timeTracking: 'Time Tracking',
    startTimer: 'Start',
    stopTimer: 'Stop',
    timerRunning: 'Running...',
    totalTime: 'Total time',
    estimatedTime: 'Estimated time',
    timeEntries: 'Time entries',
    noTimeEntries: 'No entries',
    timeEntryAdded: 'Time recorded',
    timeEntryDeleted: 'Entry deleted',
    hours: 'h',
    minutes: 'min',
    recurrence: 'Recurrence',
    recurrenceNone: 'None',
    recurrenceDaily: 'Daily',
    recurrenceWeekly: 'Weekly',
    recurrenceBiweekly: 'Every 2 weeks',
    recurrenceMonthly: 'Monthly',
    recurrenceQuarterly: 'Quarterly',
    recurrenceYearly: 'Yearly',
    nextOccurrence: 'Next occurrence created',
    recurrenceExplain: 'When this task is marked "Done", a new occurrence is automatically created with shifted dates.',
    generateMonth: 'Generate for the month',
    generateYear: 'Generate for the year',
    occurrencesGenerated: 'occurrences generated',
    customFields: 'Custom Fields',
    manageCustomFields: 'Manage fields',
    addCustomField: 'Add field',
    fieldName: 'Name',
    customFieldName: 'Field name',
    fieldType: 'Type',
    fieldOptions: 'Options (comma separated)',
    typeText: 'Text',
    typeNumber: 'Number',
    typeDate: 'Date',
    typeCheckbox: 'Checkbox',
    typeSelect: 'Dropdown',
    customFieldCreated: 'Field created',
    customFieldDeleted: 'Field deleted',
    noCustomFields: 'No custom fields',
    categories: 'Products',
    manageCategories: 'Manage products',
    addCategory: 'Add',
    categoryCreated: 'Product created',
    categoryDeleted: 'Product deleted',
    noCategories: 'No products',
    chartTimeline: 'Workload over time per assignee',
    chartBurndown: 'Burndown / Burnup',
    burnRemaining: 'Remaining',
    burnCompleted: 'Completed',
    burnIdeal: 'Ideal',
    activityLog: 'Activity Log',
    activityLogSubtitle: 'Recent actions history',
    actTaskCreated: 'created task',
    actTaskUpdated: 'updated task',
    actTaskDeleted: 'deleted task',
    actStatusChanged: 'changed status of',
    actTaskArchived: 'archived task',
    actTaskRestored: 'restored task',
    actCommentAdded: 'commented on',
    actNoActivity: 'No recent activity',
    actLoadMore: 'Load more',
    edit: 'Edit',
    required: 'required',
    tag: 'Tag',
    globalSearchPlaceholder: 'Search...',
    taskSearchPlaceholder: 'Search a task...',
    templateSearchPlaceholder: 'Search a template...',
    calToday: 'Today',
    calMonth: 'Month',
    calWeek: 'Week',
    calDay: 'Day',
    manageRolesTitle: 'Manage roles',
    byWeek8: 'By week (8 wks)',
    byMonth6: 'By month (6 mos)',
    allAgents: 'All agents',
    advancedConfig: 'Advanced configuration',
    mappingSubtitle: 'Map your own Grist tables and columns',
    configureMapping: 'Configure mapping',
    mappingDescription: 'By default the widget uses PM_Tasks, PM_Users, etc. You can map your own existing tables to reuse your data.',
    mappingGuide: 'Read the complete mapping guide',
    securityTitle: 'Document security',
    securitySubtitle: 'Protect PM_* tables with Grist access rules (ACL)',
    raciMode: 'RACI Mode',
    raciSubtitle: 'Enable the RACI matrix to define roles on each task',
    raciResponsible: 'Responsible (R)',
    raciAccountable: 'Accountable (A)',
    raciConsulted: 'Consulted (C)',
    raciInformed: 'Informed (I)',
    raciEnabled: 'RACI mode enabled',
    raciDisabled: 'RACI mode disabled',
    projectActive: 'Active',
    projectCompleted: 'Completed',
    projectArchived: 'Archived',
    editTemplate: 'Edit template',
    modalEditTemplate: 'Edit task template',
    templateUpdated: 'Template updated!'
  }
};

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || (i18n.fr[key]) || key;
}

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.textContent.trim() === lang.toUpperCase());
  });
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (i18n[currentLang] && i18n[currentLang][key]) {
      el.textContent = i18n[currentLang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (i18n[currentLang] && i18n[currentLang][key]) {
      el.setAttribute('placeholder', i18n[currentLang][key]);
    }
  });
  document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-title');
    if (i18n[currentLang] && i18n[currentLang][key]) {
      el.setAttribute('title', i18n[currentLang][key]);
    }
  });
  refreshAllViews();
}

// =============================================================================
// STATE
// =============================================================================

var tasks = [];
var users = [];
var groups = [];
var templates = [];
var subtasks = [];
var dependencies = [];
var comments = [];
var timeEntries = [];
var customFields = [];
var customFieldValues = [];
var categories = [];
var tags = [];
var projects = [];
var currentProjectId = null; // null = all projects
var currentFilterRole = null;
var currentFilterAssignee = null; // user Name
var currentFilterCategory = null;
var currentFilterTag = null;
var mineOnly = false; // "Mes projets" : projets créés par moi OU où je suis assigné
var activeTimers = {}; // taskId -> startTime (for running timers)
var kanbanGroupBy = 'status'; // 'status' | 'priority' | 'project'
var kanbanSort = 'manual'; // 'manual' | 'alpha' | 'alpha-desc' | 'due'
var expandedKanbanCards = {}; // taskId -> true quand la tuile est dépliée (A2)
var collapsedKanbanCols = {}; // col.key -> true when collapsed

var defaultKanbanStatuses = [
  { key: 'todo',     label_fr: 'À faire',   label_en: 'To do',        color: '#f59e0b', cssClass: 'col-todo' },
  { key: 'progress', label_fr: 'En cours',  label_en: 'In progress',  color: '#3b82f6', cssClass: 'col-progress' },
  { key: 'done',     label_fr: 'Terminé',   label_en: 'Done',         color: '#22c55e', cssClass: 'col-done' }
];
var customKanbanStatuses = null;
function getKanbanStatuses() {
  return customKanbanStatuses || defaultKanbanStatuses;
}
async function saveKanbanStatuses() {
  await saveSetting('kanban_statuses', JSON.stringify(customKanbanStatuses));
  syncSubtaskStatusChoices();
}

// Synchronise les choix (+ couleurs) de la colonne Status de PM_Subtasks avec les
// statuts Kanban personnalisés → la grille Grist native affiche les bonnes pastilles.
async function syncSubtaskStatusChoices() {
  try {
    var statuses = getKanbanStatuses();
    var choices = statuses.map(function(s) { return s.key; });
    if (choices.indexOf('archived') === -1) choices.push('archived');
    var choiceOptions = {};
    statuses.forEach(function(s) {
      if (s.color) choiceOptions[s.key] = { fillColor: s.color, textColor: '#ffffff' };
    });
    var widgetOptions = JSON.stringify({ widget: 'TextBox', choices: choices, choiceOptions: choiceOptions });
    // Évite les réécritures inutiles (signature en cache navigateur)
    if (typeof localStorage !== 'undefined' && localStorage.getItem('pm_subtask_status_sig') === widgetOptions) return;
    await grist.docApi.applyUserActions([
      ['ModifyColumn', SUBTASKS_TABLE, 'Status', { widgetOptions: widgetOptions }]
    ]);
    if (typeof localStorage !== 'undefined') localStorage.setItem('pm_subtask_status_sig', widgetOptions);
  } catch (e) {
    console.log('syncSubtaskStatusChoices:', e.message);
  }
}
function getStatusLabel(key) {
  var statuses = getKanbanStatuses();
  var found = statuses.find(function(s) { return s.key === key; });
  if (found) return currentLang === 'fr' ? found.label_fr : found.label_en;
  return key;
}

var defaultCardDisplay = { description: true, priority: true, date: true, assignee: true, tags: true, category: true, time: true, subtasks: true, comments: true };
var cardDisplaySettings = Object.assign({}, defaultCardDisplay);
async function saveCardDisplaySettings() {
  await saveSetting('card_display', JSON.stringify(cardDisplaySettings));
}

var raciEnabled = false;
var automationRules = [];
var notifyConcernedEnabled = true; // notifier les utilisateurs concernés à la création/modification
var pmNotifications = [];

// PM_Settings helpers
var _settingsCache = {};

async function loadSettings() {
  try {
    var data = await grist.docApi.fetchTable(SETTINGS_TABLE);
    _settingsCache = {};
    if (data && data.id) {
      for (var i = 0; i < data.id.length; i++) {
        _settingsCache[data.Key[i]] = { id: data.id[i], value: data.Value[i] };
      }
    }
    // Apply loaded settings
    if (_settingsCache.kanban_statuses) {
      try { customKanbanStatuses = JSON.parse(_settingsCache.kanban_statuses.value); } catch (e) {}
    }
    if (_settingsCache.card_display) {
      try { cardDisplaySettings = Object.assign({}, defaultCardDisplay, JSON.parse(_settingsCache.card_display.value)); } catch (e) {}
    }
    if (_settingsCache.raci_enabled) {
      raciEnabled = _settingsCache.raci_enabled.value === 'true';
    }
    if (_settingsCache.kanban_sort) {
      kanbanSort = _settingsCache.kanban_sort.value || 'manual';
    }
    if (_settingsCache.automation_rules) {
      try { automationRules = JSON.parse(_settingsCache.automation_rules.value); } catch (e2) { automationRules = []; }
    }
    if (_settingsCache.notify_concerned) {
      notifyConcernedEnabled = _settingsCache.notify_concerned.value !== 'false';
    }
  } catch (e) {
    console.log('[GristPM] PM_Settings not available yet');
  }
}

async function saveSetting(key, value) {
  try {
    if (_settingsCache[key]) {
      await grist.docApi.applyUserActions([['UpdateRecord', SETTINGS_TABLE, _settingsCache[key].id, { Value: value }]]);
      _settingsCache[key].value = value;
    } else {
      var result = await grist.docApi.applyUserActions([['AddRecord', SETTINGS_TABLE, null, { Key: key, Value: value }]]);
      var newId = (result && result.retValues && result.retValues[0]) || result;
      _settingsCache[key] = { id: newId, value: value };
    }
  } catch (e) {
    console.error('[GristPM] Error saving setting:', e);
  }
}
var ganttMode = 'days';
var ganttSort = 'default'; // 'default' | 'priority' | 'alpha' | 'due'
var ganttCustomStart = ''; // mode 'custom' : date de début (YYYY-MM-DD)
var ganttCustomEnd = '';   // mode 'custom' : date de fin (YYYY-MM-DD)
var ganttYear = new Date().getFullYear();
var ganttMonth = new Date().getMonth();
var expandedGanttTasks = {}; // taskId -> true quand les sous-tâches sont visibles dans le Gantt
var calendarYear = new Date().getFullYear();
var calendarMonth = new Date().getMonth();
var calendarMode = 'month'; // 'month', 'week' or 'day'
var calendarWeekOffset = 0; // Offset in weeks from current week
var calendarDayOffset = 0; // Offset in days from today (day view)

var TASKS_TABLE = 'PM_Tasks';
var USERS_TABLE = 'PM_Users';
var GROUPS_TABLE = 'PM_Groups';
var TEMPLATES_TABLE = 'PM_Templates';
var SUBTASKS_TABLE = 'PM_Subtasks';
var DEPENDENCIES_TABLE = 'PM_Dependencies';
var COMMENTS_TABLE = 'PM_Comments';
var TIME_ENTRIES_TABLE = 'PM_TimeEntries';
var CUSTOM_FIELDS_TABLE = 'PM_CustomFields';
var CUSTOM_FIELD_VALUES_TABLE = 'PM_CustomFieldValues';
var CATEGORIES_TABLE = 'PM_Categories';
var TAGS_TABLE = 'PM_Tags';
var PROJECTS_TABLE = 'PM_Projects';
var CONFIG_TABLE = 'PM_Config';
var SETTINGS_TABLE = 'PM_Settings';
var NOTIFICATIONS_TABLE = 'PM_Notifications';
var ACTIVITY_LOG_TABLE = 'PM_ActivityLog';
var ATTACHMENTS_TABLE = 'PM_Attachments';
var attachments = [];
var activityLog = [];

// Default table names — used to detect remapping: if a table var differs from
// its default it means the user mapped it to an existing table, so we must NOT
// auto-create the default PM_* table.
var DEFAULT_TASKS_TABLE    = 'PM_Tasks';
var DEFAULT_USERS_TABLE    = 'PM_Users';
var DEFAULT_PROJECTS_TABLE = 'PM_Projects';
var DEFAULT_CATEGORIES_TABLE = 'PM_Categories';
var DEFAULT_TAGS_TABLE     = 'PM_Tags';

// Configuration mapping object
var columnMapping = {
  tasks: {
    title: 'Title',
    description: 'Description',
    status: 'Status',
    priority: 'Priority',
    assignee: 'Assignee',
    group: 'Group_Name',
    startDate: 'Start_Date',
    dueDate: 'Due_Date',
    category: 'Category',
    tag: 'Tag',
    recurrence: 'Recurrence',
    estimatedHours: 'Estimated_Hours',
    createdAt: 'Created_At',
    projectId: 'Project_Id'
  },
  users: {
    name: 'Name',
    email: 'Email',
    role: 'Role',
    group: 'Group_Name'
  },
  projects: {
    name: 'Name',
    description: 'Description',
    color: 'Color',
    status: 'Status',
    lead: 'Lead'
  },
  categories: {
    name: 'Name',
    color: 'Color',
    order: 'Order'
  },
  tags: {
    name: 'Name',
    color: 'Color'
  }
};

var isOwner = false;
var isEditor = false;
var currentUserEmail = '';

// =============================================================================
// UTILS
// =============================================================================

function isInsideGrist() {
  try { return window.frameElement !== null || window !== window.parent; }
  catch (e) { return true; }
}

function showToast(msg, type) {
  var container = document.getElementById('toast-container');
  var toast = document.createElement('div');
  toast.className = 'toast toast-' + (type || 'info');
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(function() { toast.remove(); }, 3000);
}

function sanitize(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// =============================================================================
// COLUMN MAPPING UTILITIES
// =============================================================================

// Load column mapping from PM_Config table
async function loadColumnMapping() {
  try {
    var configData = await grist.docApi.fetchTable(CONFIG_TABLE);
    if (!configData || !configData.Config_Key) return;
    
    // Update columnMapping object from config table
    for (var i = 0; i < configData.Config_Key.length; i++) {
      var key = configData.Config_Key[i];
      var tableName = configData.Table_Name[i];
      var columnName = configData.Column_Name[i];
      
      // Convertit un suffixe snake_case vers camelCase (ex. start_date -> startDate)
      var toCamel = function(s) { return s.replace(/_([a-z])/g, function(_, c) { return c.toUpperCase(); }); };

      // Parse key to determine which mapping to update
      if (key.startsWith('task_')) {
        var field = toCamel(key.slice(5));
        if (columnMapping.tasks[field] !== undefined) {
          columnMapping.tasks[field] = columnName;
        }
      } else if (key.startsWith('user_')) {
        var field = toCamel(key.slice(5));
        if (columnMapping.users[field] !== undefined) {
          columnMapping.users[field] = columnName;
        }
      } else if (key.startsWith('project_')) {
        var field = toCamel(key.slice(8));
        if (columnMapping.projects[field] !== undefined) {
          columnMapping.projects[field] = columnName;
        }
      } else if (key.startsWith('category_')) {
        var field = toCamel(key.slice(9));
        if (columnMapping.categories[field] !== undefined) {
          columnMapping.categories[field] = columnName;
        }
      } else if (key.startsWith('tag_')) {
        var field = toCamel(key.slice(4));
        if (columnMapping.tags[field] !== undefined) {
          columnMapping.tags[field] = columnName;
        }
      }
      
      // Also update table names if they differ
      if (key === 'task_title') TASKS_TABLE = tableName;
      else if (key === 'user_name') USERS_TABLE = tableName;
      else if (key === 'project_name') PROJECTS_TABLE = tableName;
      else if (key === 'category_name') CATEGORIES_TABLE = tableName;
      else if (key === 'tag_name') TAGS_TABLE = tableName;
    }
  } catch (e) {
    console.log('Column mapping not loaded, using defaults:', e);
  }
}

// Get field value from a record using mapping
function getField(record, entity, field) {
  if (!record || !columnMapping[entity]) return null;
  var columnName = columnMapping[entity][field];
  return columnName ? record[columnName] : null;
}

// Set field value in a record object using mapping
function setField(record, entity, field, value) {
  if (!record || !columnMapping[entity]) return;
  var columnName = columnMapping[entity][field];
  if (columnName) {
    record[columnName] = value;
  }
}

// Get column name for a field using mapping
function getColumnName(entity, field) {
  if (!columnMapping[entity]) return field;
  return columnMapping[entity][field] || field;
}

// ChoiceList-safe role helpers
// Grist ChoiceList is serialized as:
//   - array: ["L", "role1", "role2"]  (first element is always "L" marker)
//   - string: "L,role1,role2"          (same but joined)
//   - plain string: "role1"            (Choice column, single value)
function getUserRoles(u) {
  if (!u || !u.Role) return [];
  var raw = u.Role;
  if (Array.isArray(raw)) {
    // Drop the Grist "L" marker if present
    var arr = (raw.length > 0 && raw[0] === 'L') ? raw.slice(1) : raw;
    return arr.filter(function(r) { return r && r !== 'L'; });
  }
  var s = String(raw).trim();
  if (!s) return [];
  // String serialized ChoiceList: starts with "L,"
  if (s.length > 1 && s[0] === 'L' && s[1] === ',') {
    return s.slice(2).split(',').map(function(r) { return r.trim(); }).filter(Boolean);
  }
  // Single choice value
  return [s];
}
function userMatchesRole(u, role) {
  return getUserRoles(u).indexOf(role) !== -1;
}
function userRoleDisplay(u) {
  var roles = getUserRoles(u);
  return roles.length ? roles.join(', ') : '';
}

function formatDate(d) {
  if (!d) return '';
  var date = new Date(d * 1000); // Grist stores dates as epoch seconds
  if (isNaN(date.getTime())) {
    date = new Date(d);
    if (isNaN(date.getTime())) return '';
  }
  return date.toLocaleDateString(currentLang === 'fr' ? 'fr-FR' : 'en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function toEpoch(dateStr) {
  if (!dateStr) return null;
  var d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  return Math.floor(d.getTime() / 1000);
}

function fromEpoch(ts) {
  if (!ts) return '';
  var d = new Date(ts * 1000);
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}

function isOverdue(task) {
  if (!task.Due_Date || task.Status === 'done') return false;
  var now = Math.floor(Date.now() / 1000);
  return task.Due_Date < now;
}

function getTaskSubtasks(taskId) {
  // D1 : tri par échéance croissante (sans date en dernier), Order en départage
  return subtasks.filter(function(st) { return st.Parent_Task_Id === taskId; })
    .sort(function(a, b) {
      var da = a.Due_Date || null;
      var db = b.Due_Date || null;
      if (da && db) {
        if (da !== db) return da - db;
      } else if (da) {
        return -1;
      } else if (db) {
        return 1;
      }
      return (a.Order || 0) - (b.Order || 0);
    });
}

// Sous-tâches rattachées à une tâche dans les vues : uniquement celles
// assignées à la personne filtrée quand le filtre Personne est actif
// (la tâche parente reste visible, avec zéro sous-tâche le cas échéant).
function getVisibleTaskSubtasks(taskId) {
  var list = getTaskSubtasks(taskId);
  if (currentFilterAssignee) {
    var identSet = personIdentSet(currentFilterAssignee);
    list = list.filter(function(st) { return assigneeListHas(st.Assignee, identSet); });
  }
  if (currentFilterTag) {
    var tagKey = String(currentFilterTag).trim();
    list = list.filter(function(st) { return String(st.Tag || '').trim() === tagKey; });
  }
  return list;
}

function getTaskProgress(task) {
  var taskSubtasks = getTaskSubtasks(task.id);
  if (taskSubtasks.length === 0) {
    // No subtasks: use status-based progress
    return task.Status === 'done' ? 100 : (task.Status === 'progress' ? 50 : 10);
  }
  var completed = taskSubtasks.filter(function(st) { return st.Completed; }).length;
  return Math.round((completed / taskSubtasks.length) * 100);
}

function getTaskDependencies(taskId) {
  // Returns tasks that this task depends on (blockers)
  return dependencies.filter(function(d) { return d.Task_Id === taskId; })
    .map(function(d) {
      return tasks.find(function(t) { return t.id === d.Depends_On_Task_Id; });
    }).filter(Boolean);
}

function getTasksDependingOn(taskId) {
  // Returns tasks that depend on this task (blocked by this)
  return dependencies.filter(function(d) { return d.Depends_On_Task_Id === taskId; })
    .map(function(d) {
      return tasks.find(function(t) { return t.id === d.Task_Id; });
    }).filter(Boolean);
}

function isTaskBlocked(taskId) {
  var blockers = getTaskDependencies(taskId);
  return blockers.some(function(blocker) {
    return blocker && blocker.Status !== 'done';
  });
}

// =============================================================================
// CONFIRM MODAL
// =============================================================================

var confirmResolve = null;

function showConfirmModal(message, title, okLabel) {
  return new Promise(function(resolve) {
    confirmResolve = resolve;
    document.getElementById('confirm-modal-title').textContent = title || (currentLang === 'fr' ? 'Confirmation' : 'Confirmation');
    document.getElementById('confirm-modal-message').textContent = message;
    var okBtn = document.getElementById('confirm-modal-ok');
    if (okBtn) okBtn.textContent = okLabel || (currentLang === 'fr' ? 'Supprimer' : 'Delete');
    document.getElementById('confirm-modal').style.display = 'flex';
  });
}

function closeConfirmModal(result) {
  document.getElementById('confirm-modal').style.display = 'none';
  if (confirmResolve) {
    confirmResolve(result);
    confirmResolve = null;
  }
}

var promptResolve = null;

function showPromptModal(title, fields, defaults) {
  return new Promise(function(resolve) {
    promptResolve = resolve;
    document.getElementById('prompt-modal-title').textContent = title;
    var body = '';
    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      var val = defaults && defaults[i] !== undefined ? defaults[i] : '';
      body += '<label>' + f.label + '</label>';
      if (f.type === 'color') {
        body += '<input type="color" id="prompt-field-' + i + '" value="' + (val || '#3b82f6') + '">';
      } else if (f.type === 'emoji') {
        body += '<div class="emoji-field-wrap">';
        body += '<input type="text" id="prompt-field-' + i + '" value="' + sanitize(val) + '" placeholder="' + (f.placeholder || '') + '" class="emoji-field-input">';
        body += '<button type="button" class="emoji-picker-btn" onclick="toggleEmojiPicker(' + i + ')">😀</button>';
        body += '</div>';
        body += '<div class="emoji-picker-grid" id="emoji-picker-' + i + '" style="display:none;"></div>';
      } else {
        body += '<input type="text" id="prompt-field-' + i + '" value="' + sanitize(val) + '" placeholder="' + (f.placeholder || '') + '">';
      }
    }
    document.getElementById('prompt-modal-body').innerHTML = body;
    document.getElementById('prompt-modal').style.display = 'flex';
    var firstInput = document.getElementById('prompt-field-0');
    if (firstInput) setTimeout(function() { firstInput.focus(); firstInput.select(); }, 50);
    document.getElementById('prompt-modal')._fieldCount = fields.length;
    document.getElementById('prompt-modal').onkeydown = function(e) {
      if (e.key === 'Enter') submitPromptModal();
      if (e.key === 'Escape') closePromptModal();
    };
  });
}

function submitPromptModal() {
  var count = document.getElementById('prompt-modal')._fieldCount || 1;
  var values = [];
  for (var i = 0; i < count; i++) {
    var el = document.getElementById('prompt-field-' + i);
    values.push(el ? el.value : '');
  }
  document.getElementById('prompt-modal').style.display = 'none';
  if (promptResolve) {
    promptResolve(values);
    promptResolve = null;
  }
}

var EMOJI_CATEGORIES = [
  { icon: '😀', label: 'Smileys', emojis: [
    '😀','😃','😄','😁','😆','😅','🤣','😂','🙂','😊',
    '😇','🥰','😍','🤩','😘','😗','😋','😛','😜','🤪',
    '😎','🤓','🧐','😏','😒','😞','😔','😟','😕','🙁',
    '😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡',
    '🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻',
    '👽','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾'
  ]},
  { icon: '👋', label: 'Gestes', emojis: [
    '👋','🤚','🖐️','✋','🖖','👌','🤌','🤏','✌️','🤞',
    '🤟','🤘','🤙','👈','👉','👆','🖕','👇','☝️','👍',
    '👎','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝',
    '🙏','✍️','💅','🤳','💪','🦾','👀','👁️','👤','👥'
  ]},
  { icon: '🐾', label: 'Animaux', emojis: [
    '🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯',
    '🦁','🐮','🐷','🐸','🐵','🙈','🙉','🙊','🐒','🐔',
    '🐧','🐦','🐤','🦆','🦅','🦉','🦇','🐺','🐗','🐴',
    '🦄','🐝','🐛','🦋','🐌','🐞','🐜','🪲','🐢','🐍',
    '🦎','🐙','🦀','🐠','🐟','🐬','🐳','🐋','🦈','🐊'
  ]},
  { icon: '🌿', label: 'Nature', emojis: [
    '🌸','💐','🌷','🌹','🥀','🌺','🌻','🌼','🌱','🌲',
    '🌳','🌴','🌵','🍀','☘️','🍁','🍂','🍃','🪴','🌍',
    '🌎','🌏','🌑','🌒','🌓','🌔','🌕','🌙','⭐','🌟',
    '✨','⚡','☀️','🌤️','⛅','🌧️','🌈','❄️','🔥','💧'
  ]},
  { icon: '🍕', label: 'Nourriture', emojis: [
    '🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍒',
    '🍑','🥭','🍍','🥥','🥝','🍅','🥑','🍆','🥔','🥕',
    '🌽','🌶️','🫑','🥒','🥬','🥦','🧄','🧅','🍄','🥜',
    '🍞','🥐','🥖','🧀','🍖','🍗','🥩','🌭','🍔','🍟',
    '🍕','🌮','🍣','🍩','🍪','🎂','🍰','☕','🍵','🧃'
  ]},
  { icon: '⚽', label: 'Activités', emojis: [
    '⚽','🏀','🏈','⚾','🥎','🎾','🏐','🏉','🥏','🎱',
    '🏓','🏸','🏒','🥅','⛳','🏹','🎣','🤿','🥊','🥋',
    '🏋️','🤸','⛷️','🏂','🏄','🚴','🏇','🧗','🎪','🎭',
    '🎨','🎬','🎤','🎧','🎼','🎹','🥁','🎷','🎺','🎸',
    '🎮','🎲','♟️','🧩','🎯','🎳','🎰','🏆','🥇','🎉'
  ]},
  { icon: '🚗', label: 'Voyages', emojis: [
    '🚗','🚕','🚙','🚌','🚎','🏎️','🚓','🚑','🚒','🚐',
    '🛻','🚚','🚛','🚜','🛵','🏍️','🚲','🛴','🚂','🚆',
    '🚇','🚊','🚁','🛩️','✈️','🚀','🛸','🚢','⛵','🛥️',
    '🏠','🏡','🏢','🏣','🏥','🏦','🏗️','🏛️','⛪','🕌',
    '🗼','🗽','⛲','🎡','🎢','🏕️','🌋','🏔️','🗻','🏖️'
  ]},
  { icon: '💡', label: 'Objets', emojis: [
    '⌚','📱','💻','⌨️','🖥️','🖨️','🖱️','💾','💿','📷',
    '📹','🎥','📺','📻','⏰','🔔','📢','📣','🔊','🔇',
    '💡','🔦','🕯️','📖','📚','📝','✏️','🖊️','🖋️','📌',
    '📎','🔗','📐','📏','✂️','🗃️','🗂️','📁','📂','📅',
    '📊','📈','📉','📋','📑','🔒','🔓','🔑','🔧','🔨',
    '🛠️','⚙️','🧲','💊','🩺','🧪','🔬','🔭','📡','💉',
    '🏷️','📦','📮','📧','📩','✉️','💌','💰','💳','💎'
  ]},
  { icon: '❤️', label: 'Symboles', emojis: [
    '❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔',
    '❣️','💕','💞','💓','💗','💖','💘','💝','💟','☮️',
    '✝️','☪️','🕉️','☸️','✡️','🔯','🕎','☯️','☦️','🛐',
    '♈','♉','♊','♋','♌','♍','♎','♏','♐','♑',
    '♒','♓','⛎','🔀','▶️','⏸️','⏹️','⏺️','⏭️','⏮️',
    '✅','❌','❓','❗','‼️','⚠️','🚫','⭕','🔴','🟠',
    '🟡','🟢','🔵','🟣','🟤','⚫','⚪','🔶','🔷','♠️',
    '♥️','♦️','♣️','🏁','🚩','🎌','🏴','🏳️','🏳️‍🌈','🇫🇷'
  ]}
];

var _emojiPickerFieldIndex = null;

function toggleEmojiPicker(fieldIndex) {
  var picker = document.getElementById('emoji-picker-' + fieldIndex);
  if (!picker) return;
  if (picker.style.display !== 'none') {
    picker.style.display = 'none';
    return;
  }
  _emojiPickerFieldIndex = fieldIndex;
  renderEmojiPicker(fieldIndex, 0, '');
  picker.style.display = 'block';
}

function renderEmojiPicker(fieldIndex, catIndex, search) {
  var picker = document.getElementById('emoji-picker-' + fieldIndex);
  if (!picker) return;
  var html = '<div class="emoji-picker-search">';
  html += '<input type="text" class="emoji-search-input" placeholder="' + (currentLang === 'fr' ? 'Rechercher...' : 'Search...') + '" value="' + sanitize(search) + '" oninput="renderEmojiPicker(' + fieldIndex + ',' + catIndex + ',this.value)">';
  html += '</div>';
  html += '<div class="emoji-picker-tabs">';
  for (var c = 0; c < EMOJI_CATEGORIES.length; c++) {
    html += '<button type="button" class="emoji-tab' + (c === catIndex && !search ? ' emoji-tab-active' : '') + '" onclick="renderEmojiPicker(' + fieldIndex + ',' + c + ',\'\')" title="' + EMOJI_CATEGORIES[c].label + '">' + EMOJI_CATEGORIES[c].icon + '</button>';
  }
  html += '</div>';
  html += '<div class="emoji-picker-items">';
  if (search) {
    var q = search.toLowerCase();
    for (var ci = 0; ci < EMOJI_CATEGORIES.length; ci++) {
      var cat = EMOJI_CATEGORIES[ci];
      var matched = cat.emojis.filter(function(e) { return cat.label.toLowerCase().indexOf(q) !== -1 || e.indexOf(q) !== -1; });
      if (matched.length > 0) {
        html += '<div class="emoji-cat-label">' + cat.label + '</div>';
        html += '<div class="emoji-cat-grid">';
        for (var m = 0; m < matched.length; m++) {
          html += '<button type="button" class="emoji-pick-item" onclick="selectEmoji(' + fieldIndex + ',this.textContent)">' + matched[m] + '</button>';
        }
        html += '</div>';
      }
    }
  } else {
    var cat = EMOJI_CATEGORIES[catIndex];
    html += '<div class="emoji-cat-grid">';
    for (var ei = 0; ei < cat.emojis.length; ei++) {
      html += '<button type="button" class="emoji-pick-item" onclick="selectEmoji(' + fieldIndex + ',this.textContent)">' + cat.emojis[ei] + '</button>';
    }
    html += '</div>';
  }
  html += '</div>';
  picker.innerHTML = html;
  if (search) {
    var inp = picker.querySelector('.emoji-search-input');
    if (inp) { inp.focus(); var l = inp.value.length; inp.setSelectionRange(l, l); }
  }
}

function selectEmoji(fieldIndex, emoji) {
  var input = document.getElementById('prompt-field-' + fieldIndex);
  if (input) input.value = emoji;
  var picker = document.getElementById('emoji-picker-' + fieldIndex);
  if (picker) picker.style.display = 'none';
}

function closePromptModal() {
  document.getElementById('prompt-modal').style.display = 'none';
  if (promptResolve) {
    promptResolve(null);
    promptResolve = null;
  }
}

function getTaskComments(taskId) {
  return comments.filter(function(c) { return c.Task_Id === taskId; })
    .sort(function(a, b) { return (b.Created_At || 0) - (a.Created_At || 0); });
}

function formatTimeAgo(timestamp) {
  if (!timestamp) return '';
  var now = Math.floor(Date.now() / 1000);
  var diff = now - timestamp;
  if (diff < 60) return t('justNow');
  if (diff < 3600) return t('minutesAgo').replace('{n}', Math.floor(diff / 60));
  if (diff < 86400) return t('hoursAgo').replace('{n}', Math.floor(diff / 3600));
  return t('daysAgo').replace('{n}', Math.floor(diff / 86400));
}

function getTaskTimeEntries(taskId) {
  return timeEntries.filter(function(te) { return te.Task_Id === taskId; })
    .sort(function(a, b) { return (b.Start_Time || 0) - (a.Start_Time || 0); });
}

// === D2 : PIÈCES JOINTES (stockage base64 dans une colonne texte) ===
// Note : un widget externe (github.io) ne peut pas uploader d'attachements natifs
// Grist (CORS sur POST /attachments). On stocke donc le fichier en base64 via le
// pont RPC (applyUserActions), ce qui fonctionne sans requête cross-origin.
var ATTACH_MAX_BYTES = 5 * 1024 * 1024; // limite pratique par fichier (~5 Mo)

function getTaskAttachments(taskId) {
  return attachments.filter(function(a) { return a.Task_Id === taskId && !a.Subtask_Id; })
    .sort(function(a, b) { return (a.Created_At || 0) - (b.Created_At || 0); });
}

function formatFileSize(bytes) {
  if (!bytes) return '';
  if (bytes < 1024) return bytes + ' o';
  if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + ' Ko';
  return (bytes / 1024 / 1024).toFixed(1) + ' Mo';
}

function attachmentIsImage(type, name) {
  return /^image\//.test(type || '') || /\.(png|jpe?g|gif|webp|svg|bmp)$/i.test(name || '');
}
function attachmentIsPdf(type, name) {
  return (type || '') === 'application/pdf' || /\.pdf$/i.test(name || '');
}

function readFileAsDataURL(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onerror = reject;
    reader.onload = function() { resolve(reader.result); };
    reader.readAsDataURL(file);
  });
}

// Compression/redimension des images (canvas) pour limiter le poids base64
function compressImageFile(file, maxW, quality) {
  maxW = maxW || 1600; quality = quality || 0.8;
  return new Promise(function(resolve) {
    readFileAsDataURL(file).then(function(src) {
      if (file.type === 'image/gif' || file.type === 'image/svg+xml') { resolve(src); return; }
      var img = new Image();
      img.onerror = function() { resolve(src); };
      img.onload = function() {
        var scale = Math.min(1, maxW / img.width);
        var w = Math.round(img.width * scale), h = Math.round(img.height * scale);
        var canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        var ctx = canvas.getContext('2d');
        if (!ctx) { resolve(src); return; }
        if (file.type === 'image/png') { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); }
        ctx.drawImage(img, 0, 0, w, h);
        var out = canvas.toDataURL('image/jpeg', quality);
        resolve(out.length < src.length ? out : src);
      };
      img.src = src;
    }).catch(function() { resolve(null); });
  });
}

// Upload d'un ou plusieurs fichiers (encodés base64) pour une tâche
async function uploadTaskAttachments(taskId, fileList) {
  if (!fileList || !fileList.length) return;
  var statusEl = document.getElementById('attach-status-' + taskId);
  try {
    var addedCount = 0, skipped = [];
    for (var i = 0; i < fileList.length; i++) {
      var file = fileList[i];
      if (statusEl) statusEl.textContent = (currentLang === 'fr' ? 'Traitement de ' : 'Processing ') + file.name + '...';
      var dataUrl = attachmentIsImage(file.type, file.name)
        ? await compressImageFile(file)
        : await readFileAsDataURL(file);
      if (!dataUrl) { skipped.push(file.name); continue; }
      // Taille approximative du base64 (3/4 de la longueur de la chaîne)
      var approxBytes = Math.round(dataUrl.length * 0.75);
      if (approxBytes > ATTACH_MAX_BYTES) { skipped.push(file.name + ' (' + formatFileSize(approxBytes) + ')'); continue; }
      await grist.docApi.applyUserActions([
        ['AddRecord', ATTACHMENTS_TABLE, null, {
          Task_Id: taskId,
          File_Name: file.name,
          File_Type: file.type || '',
          File_Size: file.size || 0,
          File_Data: dataUrl,
          Created_At: Math.floor(Date.now() / 1000)
        }]
      ]);
      addedCount++;
    }
    if (statusEl) statusEl.textContent = '';
    await loadAllData();
    renderAttachmentsSection(taskId);
    if (typeof refreshAllViews === 'function') refreshAllViews();
    if (addedCount > 0) showToast((currentLang === 'fr' ? 'Pièce(s) jointe(s) ajoutée(s) : ' : 'Attachment(s) added: ') + addedCount, 'success');
    if (skipped.length) showToast((currentLang === 'fr' ? 'Trop volumineux (max 5 Mo), ignoré : ' : 'Too large (max 5MB), skipped: ') + skipped.join(', '), 'error');
  } catch (e) {
    console.error('[GristPM] uploadTaskAttachments error:', e);
    if (statusEl) statusEl.textContent = '';
    showToast((currentLang === 'fr' ? 'Échec : ' : 'Failed: ') + e.message, 'error');
  }
}

function _findAtt(recordId) {
  return attachments.find(function(a) { return a.id === recordId; });
}

function downloadAttachment(recordId) {
  var att = _findAtt(recordId);
  if (!att || !att.Data) return;
  var a = document.createElement('a');
  a.href = att.Data;
  a.download = att.File_Name || 'fichier';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

async function deleteAttachment(recordId, taskId, subtaskId) {
  if (!confirm(currentLang === 'fr' ? 'Supprimer cette pièce jointe ?' : 'Delete this attachment?')) return;
  try {
    await grist.docApi.applyUserActions([['RemoveRecord', ATTACHMENTS_TABLE, recordId]]);
    await loadAllData();
    if (subtaskId) renderSubtaskAttachmentsSection(subtaskId);
    renderAttachmentsSection(taskId);
    if (typeof refreshAllViews === 'function') refreshAllViews();
  } catch (e) {
    showToast((currentLang === 'fr' ? 'Erreur : ' : 'Error: ') + e.message, 'error');
  }
}

// Visionneur : ouvre une image/PDF en grand (base64), sinon télécharge
function viewAttachment(recordId) {
  var att = _findAtt(recordId);
  if (!att || !att.Data) return;
  var isImg = attachmentIsImage(att.File_Type, att.File_Name);
  var isPdf = attachmentIsPdf(att.File_Type, att.File_Name);
  if (isImg || isPdf) {
    var overlay = document.getElementById('attachment-viewer');
    var body = document.getElementById('attachment-viewer-body');
    var title = document.getElementById('attachment-viewer-title');
    if (title) title.textContent = att.File_Name || '';
    if (body) {
      body.innerHTML = isImg
        ? '<img src="' + att.Data + '" style="max-width:100%;max-height:78vh;display:block;margin:0 auto;border-radius:8px;">'
        : '<iframe src="' + att.Data + '" style="width:80vw;height:78vh;border:none;border-radius:8px;"></iframe>';
    }
    if (overlay) overlay.style.display = 'flex';
  } else {
    downloadAttachment(recordId);
  }
}

function closeAttachmentViewer() {
  var overlay = document.getElementById('attachment-viewer');
  var body = document.getElementById('attachment-viewer-body');
  if (body) body.innerHTML = '';
  if (overlay) overlay.style.display = 'none';
}

// (Re)construit la section pièces jointes du formulaire de tâche
function renderAttachmentsSection(taskId) {
  var container = document.getElementById('attachments-list-' + taskId);
  if (!container) return;
  var list = getTaskAttachments(taskId);
  var html = '';
  if (list.length === 0) {
    html = '<div class="attach-empty">' + (currentLang === 'fr' ? 'Aucune pièce jointe' : 'No attachments') + '</div>';
  } else {
    list.forEach(function(att) {
      var icon = attachmentIcon(att.File_Type, att.File_Name);
      html += '<div class="attach-item">';
      html += '<span class="attach-icon">' + icon + '</span>';
      html += '<span class="attach-name" onclick="viewAttachment(' + att.id + ')" title="' + (currentLang === 'fr' ? 'Voir' : 'View') + '">' + sanitize(att.File_Name) + '</span>';
      html += '<span class="attach-size">' + formatFileSize(att.File_Size) + '</span>';
      html += '<button class="attach-btn" onclick="downloadAttachment(' + att.id + ')" title="' + (currentLang === 'fr' ? 'Télécharger' : 'Download') + '">⬇️</button>';
      if (isOwner) html += '<button class="attach-btn" onclick="deleteAttachment(' + att.id + ', ' + taskId + ')" title="' + t('delete') + '">🗑️</button>';
      html += '</div>';
    });
  }
  container.innerHTML = html;
}

// Icône d'une pièce jointe selon son type (image, PDF, Word, PPT, XLS...)
function attachmentIcon(type, name) {
  if (attachmentIsImage(type, name)) return '🖼️';
  if (attachmentIsPdf(type, name)) return '📄';
  if (/\.(docx?|rtf|odt)$/i.test(name || '')) return '📝';
  if (/\.(pptx?|odp)$/i.test(name || '')) return '📊';
  if (/\.(xlsx?|csv|ods)$/i.test(name || '')) return '📈';
  return '📎';
}

// Pièces jointes d'une sous-tâche : même table PM_Attachments, colonne Subtask_Id
function getSubtaskAttachments(subtaskId) {
  return attachments.filter(function(a) { return a.Subtask_Id === subtaskId; })
    .sort(function(a, b) { return (a.Created_At || 0) - (b.Created_At || 0); });
}

// Upload de fichiers (base64) pour une sous-tâche
async function uploadSubtaskAttachments(subtaskId, parentTaskId, fileList) {
  if (!fileList || !fileList.length) return;
  var statusEl = document.getElementById('st-attach-status-' + subtaskId);
  try {
    var addedCount = 0, skipped = [];
    for (var i = 0; i < fileList.length; i++) {
      var file = fileList[i];
      if (statusEl) statusEl.textContent = (currentLang === 'fr' ? 'Traitement de ' : 'Processing ') + file.name + '...';
      var dataUrl = attachmentIsImage(file.type, file.name)
        ? await compressImageFile(file)
        : await readFileAsDataURL(file);
      if (!dataUrl) { skipped.push(file.name); continue; }
      var approxBytes = Math.round(dataUrl.length * 0.75);
      if (approxBytes > ATTACH_MAX_BYTES) { skipped.push(file.name + ' (' + formatFileSize(approxBytes) + ')'); continue; }
      await grist.docApi.applyUserActions([
        ['AddRecord', ATTACHMENTS_TABLE, null, {
          Task_Id: parentTaskId,
          Subtask_Id: subtaskId,
          File_Name: file.name,
          File_Type: file.type || '',
          File_Size: file.size || 0,
          File_Data: dataUrl,
          Created_At: Math.floor(Date.now() / 1000)
        }]
      ]);
      addedCount++;
    }
    if (statusEl) statusEl.textContent = '';
    await loadAllData();
    renderSubtaskAttachmentsSection(subtaskId);
    if (typeof refreshAllViews === 'function') refreshAllViews();
    if (addedCount > 0) showToast((currentLang === 'fr' ? 'Pièce(s) jointe(s) ajoutée(s) : ' : 'Attachment(s) added: ') + addedCount, 'success');
    if (skipped.length) showToast((currentLang === 'fr' ? 'Trop volumineux (max 5 Mo), ignoré : ' : 'Too large (max 5MB), skipped: ') + skipped.join(', '), 'error');
  } catch (e) {
    console.error('[GristPM] uploadSubtaskAttachments error:', e);
    if (statusEl) statusEl.textContent = '';
    showToast((currentLang === 'fr' ? 'Échec : ' : 'Failed: ') + e.message, 'error');
  }
}

// (Re)construit la liste des pièces jointes d'une sous-tâche dans son formulaire d'édition
function renderSubtaskAttachmentsSection(subtaskId) {
  var container = document.getElementById('st-attachments-list-' + subtaskId);
  if (!container) return;
  var list = getSubtaskAttachments(subtaskId);
  var html = '';
  if (list.length === 0) {
    html = '<div class="attach-empty">' + (currentLang === 'fr' ? 'Aucune pièce jointe' : 'No attachments') + '</div>';
  } else {
    list.forEach(function(att) {
      html += '<div class="attach-item">';
      html += '<span class="attach-icon">' + attachmentIcon(att.File_Type, att.File_Name) + '</span>';
      html += '<span class="attach-name" onclick="viewAttachment(' + att.id + ')" title="' + (currentLang === 'fr' ? 'Voir' : 'View') + '">' + sanitize(att.File_Name) + '</span>';
      html += '<span class="attach-size">' + formatFileSize(att.File_Size) + '</span>';
      html += '<button class="attach-btn" onclick="downloadAttachment(' + att.id + ')" title="' + (currentLang === 'fr' ? 'Télécharger' : 'Download') + '">⬇️</button>';
      if (isOwner) html += '<button class="attach-btn" onclick="deleteAttachment(' + att.id + ', 0, ' + subtaskId + ')" title="' + t('delete') + '">🗑️</button>';
      html += '</div>';
    });
  }
  container.innerHTML = html;
}


function getTaskTotalTime(taskId) {
  var entries = getTaskTimeEntries(taskId);
  var total = 0;
  for (var i = 0; i < entries.length; i++) {
    total += entries[i].Duration || 0;
  }
  // Add running timer if active
  if (activeTimers[taskId]) {
    total += Math.floor(Date.now() / 1000) - activeTimers[taskId];
  }
  return total;
}

function formatDuration(seconds) {
  if (!seconds || seconds < 0) return '0' + t('minutes');
  var hours = Math.floor(seconds / 3600);
  var mins = Math.floor((seconds % 3600) / 60);
  if (hours > 0) {
    return hours + t('hours') + ' ' + mins + t('minutes');
  }
  return mins + t('minutes');
}

function formatDurationShort(seconds) {
  if (!seconds || seconds < 0) return '0m';
  var hours = Math.floor(seconds / 3600);
  var mins = Math.floor((seconds % 3600) / 60);
  if (hours > 0) {
    return hours + 'h' + (mins > 0 ? mins + 'm' : '');
  }
  return mins + 'm';
}

function getTaskCustomFieldValue(taskId, fieldId) {
  var cfv = customFieldValues.find(function(v) {
    return v.Task_Id === taskId && v.Field_Id === fieldId;
  });
  return cfv ? cfv.Value : '';
}

// B3 : concatène toutes les valeurs de champs personnalisés d'une tâche (pour la recherche)
function getTaskCustomFieldsText(taskId) {
  return customFieldValues
    .filter(function(v) { return v.Task_Id === taskId && v.Value; })
    .map(function(v) { return String(v.Value); })
    .join(' ');
}

function isSubtaskBlocked(subtask) {
  if (!subtask.Blocked_By_Subtask_Id) return false;
  var blocker = subtasks.find(function(st) { return st.id === subtask.Blocked_By_Subtask_Id; });
  return blocker && !blocker.Completed;
}

function getSubtaskBlocker(subtask) {
  if (!subtask.Blocked_By_Subtask_Id) return null;
  return subtasks.find(function(st) { return st.id === subtask.Blocked_By_Subtask_Id; });
}

function getCustomFieldTypeLabel(type) {
  switch (type) {
    case 'text': return t('typeText');
    case 'number': return t('typeNumber');
    case 'date': return t('typeDate');
    case 'checkbox': return t('typeCheckbox');
    case 'select': return t('typeSelect');
    default: return type;
  }
}

function getUserDisplayName(emailOrName) {
  if (!emailOrName) return '';
  // Try to find user by email
  var user = users.find(function(u) { 
    return u.Email === emailOrName || u.Name === emailOrName; 
  });
  if (user && user.Name) return user.Name;
  // If no user found or no name, extract name from email
  if (emailOrName.indexOf('@') !== -1) {
    return emailOrName.split('@')[0];
  }
  return emailOrName;
}

// --- Résolution d'identité -------------------------------------------------
// task.Assignee peut contenir le NOM ou l'EMAIL selon l'éditeur / l'ancienneté
// de la donnée : toute comparaison de personne doit accepter les deux.

// Retrouve l'utilisateur correspondant à un identifiant (email OU nom)
function findUserByIdent(v) {
  var k = String(v == null ? '' : v).toLowerCase().trim();
  if (!k) return null;
  return users.find(function(u) {
    return (u.Email || '').toLowerCase().trim() === k || (u.Name || '').toLowerCase().trim() === k;
  }) || null;
}

// Ensemble (minuscule/trim) des identifiants désignant la même personne
function personIdentSet(v) {
  var set = {};
  var k = String(v == null ? '' : v).toLowerCase().trim();
  if (k) set[k] = true;
  var u = findUserByIdent(v);
  if (u) {
    if (u.Email) set[String(u.Email).toLowerCase().trim()] = true;
    if (u.Name) set[String(u.Name).toLowerCase().trim()] = true;
  }
  return set;
}

// La liste CSV d'assignés contient-elle l'un des identifiants ?
function assigneeListHas(assigneeStr, identSet) {
  return String(assigneeStr || '').split(',').some(function(s) {
    var k = s.toLowerCase().trim();
    return k && identSet[k];
  });
}

// Email de la personne pour un identifiant (nom -> email via PM_Users)
function resolveUserEmail(v) {
  var s = String(v == null ? '' : v).trim();
  if (!s) return '';
  var u = findUserByIdent(s);
  if (u && u.Email) return String(u.Email).trim();
  return s.indexOf('@') !== -1 ? s : '';
}

function priorityLabel(p) {
  if (p === 'high') return t('priorityHigh');
  if (p === 'medium') return t('priorityMedium');
  if (p === 'low') return t('priorityLow');
  return p || '';
}

function statusLabel(s) {
  return getStatusLabel(s) || s || '';
}

// =============================================================================
// TABS
// =============================================================================

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });
  document.querySelectorAll('.tab-content').forEach(function(tc) {
    tc.classList.toggle('active', tc.id === 'tab-' + tabId);
  });
  // Save active tab to localStorage
  localStorage.setItem('pm-active-tab', tabId);
  
  if (tabId === 'calendar') renderCalendarView();
  if (tabId === 'kanban') renderKanbanView();
  if (tabId === 'table') renderTableView();
  if (tabId === 'gantt') renderGanttView();
  if (tabId === 'templates') renderTemplatesView();
  if (tabId === 'stats') renderStatsView();
  if (tabId === 'team') renderTeamView();
  if (tabId === 'settings') renderSettingsView();
}

function restoreActiveTab() {
  var savedTab = localStorage.getItem('pm-active-tab');
  if (savedTab) {
    switchTab(savedTab);
  }
}

// =============================================================================
// INIT — CREATE TABLES IF NEEDED
// =============================================================================

async function ensureTables() {
  try {
    var existingTables = await grist.docApi.listTables();

    // If PM_Config already exists load the mapping NOW so table vars reflect any
    // remapping the user has configured.  This prevents re-creating PM_Users etc.
    // when they have been remapped to existing user-owned tables.
    if (existingTables.indexOf(CONFIG_TABLE) !== -1) {
      await loadColumnMapping();
    }

    // Only auto-create a table when it (a) still has its default PM_* name
    // (meaning it has not been remapped) AND (b) does not yet exist.
    if (TASKS_TABLE === DEFAULT_TASKS_TABLE && existingTables.indexOf(TASKS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', TASKS_TABLE, [
          { id: 'Title', type: 'Text' },
          { id: 'Description', type: 'Text' },
          { id: 'Status', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['todo', 'progress', 'done', 'archived'] }) },
          { id: 'Priority', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['high', 'medium', 'low'] }) },
          { id: 'Assignee', type: 'Text' },
          { id: 'Group_Name', type: 'Text' },
          { id: 'Start_Date', type: 'Date' },
          { id: 'Due_Date', type: 'Date' },
          { id: 'Category', type: 'Text' },
          { id: 'Tag', type: 'Text' },
          { id: 'Recurrence', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['none', 'daily', 'weekly', 'monthly'] }) },
          { id: 'Estimated_Hours', type: 'Numeric' },
          { id: 'Created_At', type: 'Date' }
        ]]
      ]);
    }

    if (USERS_TABLE === DEFAULT_USERS_TABLE && existingTables.indexOf(USERS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', USERS_TABLE, [
          { id: 'Name', type: 'Text' },
          { id: 'Email', type: 'Text' },
          { id: 'Role', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['admin', 'member', 'viewer'] }) },
          { id: 'Group_Name', type: 'Text' }
        ]]
      ]);
    }

    if (existingTables.indexOf(GROUPS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', GROUPS_TABLE, [
          { id: 'Name', type: 'Text' },
          { id: 'Description', type: 'Text' }
        ]]
      ]);
    }

    if (existingTables.indexOf(TEMPLATES_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', TEMPLATES_TABLE, [
          { id: 'Title', type: 'Text' },
          { id: 'Description', type: 'Text' },
          { id: 'Priority', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['high', 'medium', 'low'] }) },
          { id: 'Category', type: 'Text' },
          { id: 'Estimated_Hours', type: 'Numeric' },
          { id: 'Group_Name', type: 'Text' },
          { id: 'Tag', type: 'Text' },
          { id: 'Recurrence', type: 'Text' },
          { id: 'Usage_Count', type: 'Int' },
          { id: 'Updated_At', type: 'Date' }
        ]]
      ]);
    }

    if (existingTables.indexOf(SUBTASKS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', SUBTASKS_TABLE, [
          { id: 'Parent_Task_Id', type: 'Int' },
          { id: 'Title', type: 'Text' },
          { id: 'Description', type: 'Text' },
          { id: 'Status', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['todo', 'progress', 'done', 'archived'] }) },
          { id: 'Priority', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['high', 'medium', 'low'] }) },
          { id: 'Assignee', type: 'Text' },
          { id: 'Tag', type: 'Text' },
          { id: 'Due_Date', type: 'Date' },
          { id: 'Estimated_Hours', type: 'Numeric' },
          { id: 'Completed', type: 'Bool' },
          { id: 'Order', type: 'Int' },
          { id: 'Created_At', type: 'Date' }
        ]]
      ]);
    }

    if (existingTables.indexOf(DEPENDENCIES_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', DEPENDENCIES_TABLE, [
          { id: 'Task_Id', type: 'Int' },
          { id: 'Depends_On_Task_Id', type: 'Int' },
          { id: 'Created_At', type: 'Date' }
        ]]
      ]);
    }

    if (existingTables.indexOf(COMMENTS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', COMMENTS_TABLE, [
          { id: 'Task_Id', type: 'Int' },
          { id: 'Author', type: 'Text' },
          { id: 'Content', type: 'Text' },
          { id: 'Created_At', type: 'Date' }
        ]]
      ]);
    }

    if (existingTables.indexOf(TIME_ENTRIES_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', TIME_ENTRIES_TABLE, [
          { id: 'Task_Id', type: 'Int' },
          { id: 'User', type: 'Text' },
          { id: 'Start_Time', type: 'Date' },
          { id: 'End_Time', type: 'Date' },
          { id: 'Duration', type: 'Int' },
          { id: 'Description', type: 'Text' }
        ]]
      ]);
    }

    if (existingTables.indexOf(CUSTOM_FIELDS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', CUSTOM_FIELDS_TABLE, [
          { id: 'Name', type: 'Text' },
          { id: 'Type', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['text', 'number', 'date', 'checkbox', 'select'] }) },
          { id: 'Options', type: 'Text' },
          { id: 'Order', type: 'Int' },
          { id: 'Created_At', type: 'Date' }
        ]]
      ]);
    }

    if (existingTables.indexOf(CUSTOM_FIELD_VALUES_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', CUSTOM_FIELD_VALUES_TABLE, [
          { id: 'Task_Id', type: 'Int' },
          { id: 'Field_Id', type: 'Int' },
          { id: 'Value', type: 'Text' }
        ]]
      ]);
    }

    if (CATEGORIES_TABLE === DEFAULT_CATEGORIES_TABLE && existingTables.indexOf(CATEGORIES_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', CATEGORIES_TABLE, [
          { id: 'Name', type: 'Text' },
          { id: 'Color', type: 'Text' },
          { id: 'Order', type: 'Int' }
        ]]
      ]);
    }

    if (TAGS_TABLE === DEFAULT_TAGS_TABLE && existingTables.indexOf(TAGS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', TAGS_TABLE, [
          { id: 'Name', type: 'Text' },
          { id: 'Color', type: 'Text' }
        ]]
      ]);
    }

    // D2 : table des pièces jointes (base64 dans une colonne texte File_Data)
    if (existingTables.indexOf(ATTACHMENTS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', ATTACHMENTS_TABLE, [
          { id: 'Task_Id', type: 'Int' },
          { id: 'File_Name', type: 'Text' },
          { id: 'File_Type', type: 'Text' },
          { id: 'File_Size', type: 'Int' },
          { id: 'Subtask_Id', type: 'Int' },
          { id: 'File_Data', type: 'Text' },
          { id: 'Created_At', type: 'DateTime' }
        ]]
      ]);
    } else {
      // Migration : ajouter File_Data et Subtask_Id si la table existe déjà
      try {
        var attCols = Object.keys(await grist.docApi.fetchTable(ATTACHMENTS_TABLE));
        var attMig = [];
        if (attCols.indexOf('File_Data') === -1) attMig.push(['AddColumn', ATTACHMENTS_TABLE, 'File_Data', { type: 'Text' }]);
        if (attCols.indexOf('Subtask_Id') === -1) attMig.push(['AddColumn', ATTACHMENTS_TABLE, 'Subtask_Id', { type: 'Int' }]);
        if (attMig.length) await grist.docApi.applyUserActions(attMig);
      } catch (mig) {
        console.log('[GristPM] Migration pièces jointes ignorée :', mig.message);
      }
    }

    if (PROJECTS_TABLE === DEFAULT_PROJECTS_TABLE && existingTables.indexOf(PROJECTS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', PROJECTS_TABLE, [
          { id: 'Name', type: 'Text' },
          { id: 'Description', type: 'Text' },
          { id: 'Color', type: 'Text' },
          { id: 'Status', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['active', 'archived', 'completed'] }) },
          { id: 'Start_Date', type: 'Date' },
          { id: 'End_Date', type: 'Date' },
          { id: 'Lead', type: 'Text' },
          { id: 'CreatedBy', type: 'Text' },
          { id: 'CreatedAt', type: 'Text' }
        ]]
      ]);
    }

    // Migration Project_Id : s'exécute APRÈS PM_Projects (install fraîche ou upgrade)
    // Séparé du bloc "existingTables" pour couvrir aussi les installations fraîches.
    try {
      var taskColsCheck = Object.keys(await grist.docApi.fetchTable(TASKS_TABLE));
      if (taskColsCheck.indexOf('Project_Id') === -1) {
        await grist.docApi.applyUserActions([
          ['AddColumn', TASKS_TABLE, 'Project_Id', { type: 'Ref:PM_Projects' }]
        ]);
        console.log('[GristPM] Project_Id ajouté à PM_Tasks');
      }
    } catch (e) {
      console.log('[GristPM] Migration Project_Id ignorée :', e.message);
    }

    // Migration Group_Name / Tag / Recurrence sur PM_Templates
    try {
      var tplCols = Object.keys(await grist.docApi.fetchTable(TEMPLATES_TABLE));
      var tplMig = [];
      if (tplCols.indexOf('Group_Name') === -1) tplMig.push(['AddColumn', TEMPLATES_TABLE, 'Group_Name', { type: 'Text' }]);
      if (tplCols.indexOf('Tag') === -1) tplMig.push(['AddColumn', TEMPLATES_TABLE, 'Tag', { type: 'Text' }]);
      if (tplCols.indexOf('Recurrence') === -1) tplMig.push(['AddColumn', TEMPLATES_TABLE, 'Recurrence', { type: 'Text' }]);
      if (tplMig.length) { await grist.docApi.applyUserActions(tplMig); console.log('[GristPM] Colonnes templates enrichies'); }
    } catch (e) {
      console.log('[GristPM] Migration templates ignorée :', e.message);
    }

    // Migration CreatedBy / CreatedAt sur PM_Projects (créateur du projet)
    try {
      var projCols = Object.keys(await grist.docApi.fetchTable(PROJECTS_TABLE));
      var projMig = [];
      if (projCols.indexOf('CreatedBy') === -1) projMig.push(['AddColumn', PROJECTS_TABLE, 'CreatedBy', { type: 'Text' }]);
      if (projCols.indexOf('CreatedAt') === -1) projMig.push(['AddColumn', PROJECTS_TABLE, 'CreatedAt', { type: 'Text' }]);
      if (projCols.indexOf('Lead') === -1) projMig.push(['AddColumn', PROJECTS_TABLE, 'Lead', { type: 'Text' }]);
      if (projMig.length) { await grist.docApi.applyUserActions(projMig); console.log('[GristPM] CreatedBy/CreatedAt ajoutés à PM_Projects'); }
    } catch (e) {
      console.log('[GristPM] Migration CreatedBy ignorée :', e.message);
    }

    // Create PM_Config table for column mapping configuration
    if (existingTables.indexOf(CONFIG_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', CONFIG_TABLE, [
          { id: 'Config_Key', type: 'Text' },
          { id: 'Table_Name', type: 'Text' },
          { id: 'Column_Name', type: 'Text' },
          { id: 'Display_Label', type: 'Text' },
          { id: 'Required', type: 'Bool' },
          { id: 'Default_Value', type: 'Text' }
        ]]
      ]);
      
      // Initialize with default mapping
      var defaultConfig = [
        // Tasks mapping
        ['task_title', TASKS_TABLE, 'Title', 'Titre', true, 'Title'],
        ['task_description', TASKS_TABLE, 'Description', 'Description', false, 'Description'],
        ['task_status', TASKS_TABLE, 'Status', 'Statut', true, 'Status'],
        ['task_priority', TASKS_TABLE, 'Priority', 'Priorité', true, 'Priority'],
        ['task_assignee', TASKS_TABLE, 'Assignee', 'Assigné à', false, 'Assignee'],
        ['task_group', TASKS_TABLE, 'Group_Name', 'Groupe', false, 'Group_Name'],
        ['task_start_date', TASKS_TABLE, 'Start_Date', 'Date début', false, 'Start_Date'],
        ['task_due_date', TASKS_TABLE, 'Due_Date', 'Échéance', false, 'Due_Date'],
        ['task_category', TASKS_TABLE, 'Category', 'Produit', false, 'Category'],
        ['task_tag', TASKS_TABLE, 'Tag', 'Tag', false, 'Tag'],
        ['task_recurrence', TASKS_TABLE, 'Recurrence', 'Récurrence', false, 'Recurrence'],
        ['task_estimated_hours', TASKS_TABLE, 'Estimated_Hours', 'Heures estimées', false, 'Estimated_Hours'],
        ['task_created_at', TASKS_TABLE, 'Created_At', 'Créé le', false, 'Created_At'],
        ['task_project_id', TASKS_TABLE, 'Project_Id', 'Projet', false, 'Project_Id'],
        // Users mapping
        ['user_name', USERS_TABLE, 'Name', 'Nom', true, 'Name'],
        ['user_email', USERS_TABLE, 'Email', 'Email', true, 'Email'],
        ['user_role', USERS_TABLE, 'Role', 'Rôle', false, 'Role'],
        ['user_group', USERS_TABLE, 'Group_Name', 'Groupe', false, 'Group_Name'],
        // Projects mapping
        ['project_name', PROJECTS_TABLE, 'Name', 'Nom', true, 'Name'],
        ['project_description', PROJECTS_TABLE, 'Description', 'Description', false, 'Description'],
        ['project_color', PROJECTS_TABLE, 'Color', 'Couleur', false, 'Color'],
        ['project_status', PROJECTS_TABLE, 'Status', 'Statut', false, 'Status'],
        // Categories mapping
        ['category_name', CATEGORIES_TABLE, 'Name', 'Nom', true, 'Name'],
        ['category_color', CATEGORIES_TABLE, 'Color', 'Couleur', false, 'Color'],
        ['category_order', CATEGORIES_TABLE, 'Order', 'Ordre', false, 'Order'],
        // Tags mapping
        ['tag_name', TAGS_TABLE, 'Name', 'Nom', true, 'Name'],
        ['tag_color', TAGS_TABLE, 'Color', 'Couleur', false, 'Color']
      ];
      
      var configRecords = [];
      for (var i = 0; i < defaultConfig.length; i++) {
        configRecords.push({
          Config_Key: defaultConfig[i][0],
          Table_Name: defaultConfig[i][1],
          Column_Name: defaultConfig[i][2],
          Display_Label: defaultConfig[i][3],
          Required: defaultConfig[i][4],
          Default_Value: defaultConfig[i][5]
        });
      }
      
      await grist.docApi.applyUserActions([
        ['BulkAddRecord', CONFIG_TABLE, configRecords.map(function() { return null; }), configRecords]
      ]);
    }

    // Create PM_Settings table for widget preferences (shared across users)
    if (existingTables.indexOf(SETTINGS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', SETTINGS_TABLE, [
          { id: 'Key', type: 'Text' },
          { id: 'Value', type: 'Text' }
        ]]
      ]);
    }

    if (existingTables.indexOf(NOTIFICATIONS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', NOTIFICATIONS_TABLE, [
          { id: 'Task_Id', type: 'Int' },
          { id: 'User_Email', type: 'Text' },
          { id: 'Type', type: 'Text' },
          { id: 'Message', type: 'Text' },
          { id: 'Is_Read', type: 'Bool' },
          { id: 'Created_At', type: 'Date' },
          { id: 'Rule_Id', type: 'Text' }
        ]]
      ]);
    }

    if (existingTables.indexOf(ACTIVITY_LOG_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', ACTIVITY_LOG_TABLE, [
          { id: 'Timestamp', type: 'Date' },
          { id: 'User_Email', type: 'Text' },
          { id: 'Action', type: 'Text' },
          { id: 'Task_Id', type: 'Int' },
          { id: 'Task_Title', type: 'Text' },
          { id: 'Details', type: 'Text' }
        ]]
      ]);
    }

    // Migration: Add missing columns to existing PM_Tasks table
    if (existingTables.indexOf(TASKS_TABLE) !== -1) {
      try {
        var tableInfo = await grist.docApi.fetchTable(TASKS_TABLE);
        var existingCols = Object.keys(tableInfo);
        
        if (existingCols.indexOf('Recurrence') === -1) {
          await grist.docApi.applyUserActions([
            ['AddColumn', TASKS_TABLE, 'Recurrence', { type: 'Choice', widgetOptions: JSON.stringify({ choices: ['none', 'daily', 'weekly', 'monthly'] }) }]
          ]);
        }
        if (existingCols.indexOf('Estimated_Hours') === -1) {
          await grist.docApi.applyUserActions([
            ['AddColumn', TASKS_TABLE, 'Estimated_Hours', { type: 'Numeric' }]
          ]);
        }
        if (existingCols.indexOf('Tag') === -1) {
          await grist.docApi.applyUserActions([
            ['AddColumn', TASKS_TABLE, 'Tag', { type: 'Text' }]
          ]);
        }
        // RACI columns
        var raciCols = ['Accountable', 'Consulted', 'Informed'];
        var raciActions = [];
        for (var rc = 0; rc < raciCols.length; rc++) {
          if (existingCols.indexOf(raciCols[rc]) === -1) {
            raciActions.push(['AddColumn', TASKS_TABLE, raciCols[rc], { type: 'Text' }]);
          }
        }
        if (raciActions.length > 0) {
          await grist.docApi.applyUserActions(raciActions);
        }
        // Extension columns
        if (existingCols.indexOf('Extension_Date') === -1) {
          await grist.docApi.applyUserActions([['AddColumn', TASKS_TABLE, 'Extension_Date', { type: 'Date' }]]);
        }
        if (existingCols.indexOf('Auto_Extend') === -1) {
          await grist.docApi.applyUserActions([['AddColumn', TASKS_TABLE, 'Auto_Extend', { type: 'Bool' }]]);
        }
      } catch (migrationErr) {
        console.log('Migration check completed or columns already exist');
      }
    }

    // Migration: Add Blocked_By_Subtask_Id, Assignee, Due_Date to PM_Subtasks
    if (existingTables.indexOf(SUBTASKS_TABLE) !== -1) {
      try {
        var stInfo = await grist.docApi.fetchTable(SUBTASKS_TABLE);
        var stCols = Object.keys(stInfo);
        var stActions = [];
        if (stCols.indexOf('Blocked_By_Subtask_Id') === -1) {
          stActions.push(['AddColumn', SUBTASKS_TABLE, 'Blocked_By_Subtask_Id', { type: 'Int' }]);
        }
        if (stCols.indexOf('Assignee') === -1) {
          stActions.push(['AddColumn', SUBTASKS_TABLE, 'Assignee', { type: 'Text' }]);
        }
        if (stCols.indexOf('Tag') === -1) {
          stActions.push(['AddColumn', SUBTASKS_TABLE, 'Tag', { type: 'Text' }]);
        }
        if (stCols.indexOf('Due_Date') === -1) {
          stActions.push(['AddColumn', SUBTASKS_TABLE, 'Due_Date', { type: 'Date' }]);
        }
        if (stCols.indexOf('Description') === -1) {
          stActions.push(['AddColumn', SUBTASKS_TABLE, 'Description', { type: 'Text' }]);
        }
        if (stCols.indexOf('Status') === -1) {
          stActions.push(['AddColumn', SUBTASKS_TABLE, 'Status', { type: 'Choice', widgetOptions: JSON.stringify({ choices: ['todo', 'progress', 'done', 'archived'] }) }]);
        }
        if (stCols.indexOf('Priority') === -1) {
          stActions.push(['AddColumn', SUBTASKS_TABLE, 'Priority', { type: 'Choice', widgetOptions: JSON.stringify({ choices: ['high', 'medium', 'low'] }) }]);
        }
        if (stCols.indexOf('Estimated_Hours') === -1) {
          stActions.push(['AddColumn', SUBTASKS_TABLE, 'Estimated_Hours', { type: 'Numeric' }]);
        }
        if (stCols.indexOf('Recurrence') === -1) {
          stActions.push(['AddColumn', SUBTASKS_TABLE, 'Recurrence', { type: 'Choice', widgetOptions: JSON.stringify({ choices: ['none', 'daily', 'weekly', 'monthly'] }) }]);
        }
        if (stCols.indexOf('Start_Date') === -1) {
          stActions.push(['AddColumn', SUBTASKS_TABLE, 'Start_Date', { type: 'Date' }]);
        }
        // B2 : type de sous-tâche (sous-tâche classique ou jalon)
        if (stCols.indexOf('Type') === -1) {
          stActions.push(['AddColumn', SUBTASKS_TABLE, 'Type', { type: 'Choice', widgetOptions: JSON.stringify({ choices: ['subtask', 'milestone'] }) }]);
        }
        // Definition of Done : critères de complétion (JSON [{ text, done }])
        if (stCols.indexOf('DefinitionOfDone') === -1) {
          stActions.push(['AddColumn', SUBTASKS_TABLE, 'DefinitionOfDone', { type: 'Text' }]);
        }
        if (stActions.length > 0) {
          await grist.docApi.applyUserActions(stActions);
        }
      } catch (e) {
        console.log('Subtask migration completed');
      }
    }

    showToast(t('tablesCreated'), 'success');
  } catch (e) {
    console.error('Error ensuring tables:', e);
  }
}

// =============================================================================
// LOAD DATA
// =============================================================================

/**
 * Supprime les brouillons fantômes : tâches créées par l'approche « brouillon »
 * mais jamais renseignées (aucun titre, description, responsable, ni sous-tâche),
 * laissées derrière quand la modale s'est fermée par un chemin inhabituel.
 * Prudent : Owner uniquement, cibles totalement vides, hors brouillon en cours.
 */
async function cleanupEmptyDraftTasks() {
  if (!isOwner) return;
  var ghosts = tasks.filter(function (tk) {
    if (tk.id === draftTaskId) return false;
    if ((tk.Title || '').trim()) return false;
    if ((tk.Description || '').trim()) return false;
    if ((tk.Assignee || '').trim()) return false;
    return getTaskSubtasks(tk.id).length === 0;
  });
  if (!ghosts.length) return;
  try {
    await grist.docApi.applyUserActions(ghosts.map(function (tk) { return ['RemoveRecord', TASKS_TABLE, tk.id]; }));
    tasks = tasks.filter(function (tk) { return ghosts.indexOf(tk) === -1; });
  } catch (e) { console.error('cleanupEmptyDraftTasks:', e); }
}

async function loadAllData() {
  // Load column mapping first
  await loadColumnMapping();
  
  try {
    var taskData = await grist.docApi.fetchTable(TASKS_TABLE);
    tasks = [];
    if (taskData && taskData.id) {
      for (var i = 0; i < taskData.id.length; i++) {
        var task = { id: taskData.id[i] };
        
        // Use column mapping to load data
        var titleCol = getColumnName('tasks', 'title');
        var descCol = getColumnName('tasks', 'description');
        var statusCol = getColumnName('tasks', 'status');
        var priorityCol = getColumnName('tasks', 'priority');
        var assigneeCol = getColumnName('tasks', 'assignee');
        var groupCol = getColumnName('tasks', 'group');
        var startDateCol = getColumnName('tasks', 'startDate');
        var dueDateCol = getColumnName('tasks', 'dueDate');
        var categoryCol = getColumnName('tasks', 'category');
        var tagCol = getColumnName('tasks', 'tag');
        var recurrenceCol = getColumnName('tasks', 'recurrence');
        var estimatedHoursCol = getColumnName('tasks', 'estimatedHours');
        var createdAtCol = getColumnName('tasks', 'createdAt');
        var projectIdCol = getColumnName('tasks', 'projectId');
        
        task.Title = taskData[titleCol] ? taskData[titleCol][i] : '';
        task.Description = taskData[descCol] ? taskData[descCol][i] : '';
        task.Status = taskData[statusCol] ? taskData[statusCol][i] : 'todo';
        task.Priority = taskData[priorityCol] ? taskData[priorityCol][i] : 'medium';
        task.Assignee = taskData[assigneeCol] ? taskData[assigneeCol][i] : '';
        task.Group_Name = taskData[groupCol] ? taskData[groupCol][i] : '';
        task.Start_Date = taskData[startDateCol] ? taskData[startDateCol][i] : null;
        task.Due_Date = taskData[dueDateCol] ? taskData[dueDateCol][i] : null;
        task.Category = taskData[categoryCol] ? taskData[categoryCol][i] : '';
        task.Tag = taskData[tagCol] ? taskData[tagCol][i] : '';
        task.Recurrence = taskData[recurrenceCol] ? taskData[recurrenceCol][i] : 'none';
        task.Estimated_Hours = taskData[estimatedHoursCol] ? taskData[estimatedHoursCol][i] : 0;
        task.Created_At = taskData[createdAtCol] ? taskData[createdAtCol][i] : null;
        task.Project_Id = taskData[projectIdCol] ? taskData[projectIdCol][i] : null;

        task.Accountable = taskData.Accountable ? taskData.Accountable[i] || '' : '';
        task.Consulted = taskData.Consulted ? taskData.Consulted[i] || '' : '';
        task.Informed = taskData.Informed ? taskData.Informed[i] || '' : '';
        task.Extension_Date = taskData.Extension_Date ? taskData.Extension_Date[i] : null;
        task.Auto_Extend = taskData.Auto_Extend ? !!taskData.Auto_Extend[i] : false;

        tasks.push(task);
      }
    }
  } catch (e) {
    console.warn('Could not load tasks:', e);
    tasks = [];
  }

  try {
    var userData = await grist.docApi.fetchTable(USERS_TABLE);
    users = [];
    if (userData && userData.id) {
      var nameCol = getColumnName('users', 'name');
      var emailCol = getColumnName('users', 'email');
      var roleCol = getColumnName('users', 'role');
      var groupCol = getColumnName('users', 'group');
      
      for (var i = 0; i < userData.id.length; i++) {
        users.push({
          id: userData.id[i],
          Name: userData[nameCol] ? userData[nameCol][i] : '',
          Email: userData[emailCol] ? userData[emailCol][i] : '',
          Role: userData[roleCol] ? userData[roleCol][i] : 'member',
          Group_Name: userData[groupCol] ? userData[groupCol][i] : ''
        });
      }
    }
  } catch (e) {
    users = [];
  }

  try {
    var groupData = await grist.docApi.fetchTable(GROUPS_TABLE);
    groups = [];
    if (groupData && groupData.id) {
      for (var i = 0; i < groupData.id.length; i++) {
        groups.push({
          id: groupData.id[i],
          Name: groupData.Name ? groupData.Name[i] : '',
          Description: groupData.Description ? groupData.Description[i] : ''
        });
      }
    }
  } catch (e) {
    groups = [];
  }

  try {
    var tplData = await grist.docApi.fetchTable(TEMPLATES_TABLE);
    templates = [];
    if (tplData && tplData.id) {
      for (var i = 0; i < tplData.id.length; i++) {
        templates.push({
          id: tplData.id[i],
          Title: tplData.Title ? tplData.Title[i] : '',
          Description: tplData.Description ? tplData.Description[i] : '',
          Priority: tplData.Priority ? tplData.Priority[i] : 'medium',
          Category: tplData.Category ? tplData.Category[i] : '',
          Estimated_Hours: tplData.Estimated_Hours ? tplData.Estimated_Hours[i] : 0,
          Group_Name: tplData.Group_Name ? tplData.Group_Name[i] : '',
          Tag: tplData.Tag ? tplData.Tag[i] : '',
          Recurrence: tplData.Recurrence ? tplData.Recurrence[i] : 'none',
          Usage_Count: tplData.Usage_Count ? tplData.Usage_Count[i] : 0,
          Updated_At: tplData.Updated_At ? tplData.Updated_At[i] : null
        });
      }
    }
  } catch (e) {
    templates = [];
  }

  try {
    var subtaskData = await grist.docApi.fetchTable(SUBTASKS_TABLE);
    subtasks = [];
    if (subtaskData && subtaskData.id) {
      for (var i = 0; i < subtaskData.id.length; i++) {
        // Definition of Done : JSON [{ text, done }], parsing tolérant
        var dodRaw = subtaskData.DefinitionOfDone ? subtaskData.DefinitionOfDone[i] : null;
        var dodList = [];
        if (dodRaw) {
          try {
            var dodParsed = typeof dodRaw === 'string' ? JSON.parse(dodRaw) : dodRaw;
            if (Array.isArray(dodParsed)) dodList = dodParsed;
          } catch (e) {
            console.warn('Invalid DefinitionOfDone for subtask ' + subtaskData.id[i], e);
          }
        }
        subtasks.push({
          id: subtaskData.id[i],
          Parent_Task_Id: subtaskData.Parent_Task_Id ? subtaskData.Parent_Task_Id[i] : null,
          Title: subtaskData.Title ? subtaskData.Title[i] : '',
          Description: subtaskData.Description ? subtaskData.Description[i] : '',
          Status: subtaskData.Status ? subtaskData.Status[i] : 'todo',
          Priority: subtaskData.Priority ? subtaskData.Priority[i] : 'medium',
          Completed: subtaskData.Completed ? subtaskData.Completed[i] : false,
          Order: subtaskData.Order ? subtaskData.Order[i] : 0,
          Blocked_By_Subtask_Id: subtaskData.Blocked_By_Subtask_Id ? subtaskData.Blocked_By_Subtask_Id[i] : null,
          Assignee: subtaskData.Assignee ? subtaskData.Assignee[i] : '',
          Tag: subtaskData.Tag ? subtaskData.Tag[i] : '',
          Due_Date: subtaskData.Due_Date ? subtaskData.Due_Date[i] : null,
          Start_Date: subtaskData.Start_Date ? subtaskData.Start_Date[i] : null,
          Estimated_Hours: subtaskData.Estimated_Hours ? subtaskData.Estimated_Hours[i] : null,
          Recurrence: subtaskData.Recurrence ? subtaskData.Recurrence[i] : 'none',
          Type: subtaskData.Type ? subtaskData.Type[i] : 'subtask',
          Created_At: subtaskData.Created_At ? subtaskData.Created_At[i] : null,
          DefinitionOfDone: dodList
        });
      }
    }
  } catch (e) {
    subtasks = [];
  }

  try {
    var depData = await grist.docApi.fetchTable(DEPENDENCIES_TABLE);
    dependencies = [];
    if (depData && depData.id) {
      for (var i = 0; i < depData.id.length; i++) {
        dependencies.push({
          id: depData.id[i],
          Task_Id: depData.Task_Id ? depData.Task_Id[i] : null,
          Depends_On_Task_Id: depData.Depends_On_Task_Id ? depData.Depends_On_Task_Id[i] : null,
          Created_At: depData.Created_At ? depData.Created_At[i] : null
        });
      }
    }
  } catch (e) {
    dependencies = [];
  }

  try {
    var commentData = await grist.docApi.fetchTable(COMMENTS_TABLE);
    comments = [];
    if (commentData && commentData.id) {
      for (var i = 0; i < commentData.id.length; i++) {
        comments.push({
          id: commentData.id[i],
          Task_Id: commentData.Task_Id ? commentData.Task_Id[i] : null,
          Author: commentData.Author ? commentData.Author[i] : '',
          Content: commentData.Content ? commentData.Content[i] : '',
          Created_At: commentData.Created_At ? commentData.Created_At[i] : null
        });
      }
    }
  } catch (e) {
    comments = [];
  }

  try {
    var attData = await grist.docApi.fetchTable(ATTACHMENTS_TABLE);
    attachments = [];
    if (attData && attData.id) {
      for (var i = 0; i < attData.id.length; i++) {
        attachments.push({
          id: attData.id[i],
          Task_Id: attData.Task_Id ? attData.Task_Id[i] : null,
          Subtask_Id: attData.Subtask_Id ? attData.Subtask_Id[i] : null,
          File_Name: attData.File_Name ? attData.File_Name[i] : '',
          File_Type: attData.File_Type ? attData.File_Type[i] : '',
          File_Size: attData.File_Size ? attData.File_Size[i] : 0,
          Data: attData.File_Data ? attData.File_Data[i] : '',
          Created_At: attData.Created_At ? attData.Created_At[i] : null
        });
      }
    }
  } catch (e) {
    attachments = [];
  }

  try {
    var timeData = await grist.docApi.fetchTable(TIME_ENTRIES_TABLE);
    timeEntries = [];
    if (timeData && timeData.id) {
      for (var i = 0; i < timeData.id.length; i++) {
        timeEntries.push({
          id: timeData.id[i],
          Task_Id: timeData.Task_Id ? timeData.Task_Id[i] : null,
          User: timeData.User ? timeData.User[i] : '',
          Start_Time: timeData.Start_Time ? timeData.Start_Time[i] : null,
          End_Time: timeData.End_Time ? timeData.End_Time[i] : null,
          Duration: timeData.Duration ? timeData.Duration[i] : 0,
          Description: timeData.Description ? timeData.Description[i] : ''
        });
      }
    }
  } catch (e) {
    timeEntries = [];
  }

  try {
    var cfData = await grist.docApi.fetchTable(CUSTOM_FIELDS_TABLE);
    customFields = [];
    if (cfData && cfData.id) {
      for (var i = 0; i < cfData.id.length; i++) {
        customFields.push({
          id: cfData.id[i],
          Name: cfData.Name ? cfData.Name[i] : '',
          Type: cfData.Type ? cfData.Type[i] : 'text',
          Options: cfData.Options ? cfData.Options[i] : '',
          Order: cfData.Order ? cfData.Order[i] : 0,
          Created_At: cfData.Created_At ? cfData.Created_At[i] : null
        });
      }
    }
    customFields.sort(function(a, b) { return (a.Order || 0) - (b.Order || 0); });
  } catch (e) {
    customFields = [];
  }

  try {
    var cfvData = await grist.docApi.fetchTable(CUSTOM_FIELD_VALUES_TABLE);
    customFieldValues = [];
    if (cfvData && cfvData.id) {
      for (var i = 0; i < cfvData.id.length; i++) {
        customFieldValues.push({
          id: cfvData.id[i],
          Task_Id: cfvData.Task_Id ? cfvData.Task_Id[i] : null,
          Field_Id: cfvData.Field_Id ? cfvData.Field_Id[i] : null,
          Value: cfvData.Value ? cfvData.Value[i] : ''
        });
      }
    }
  } catch (e) {
    customFieldValues = [];
  }

  try {
    var catData = await grist.docApi.fetchTable(CATEGORIES_TABLE);
    categories = [];
    if (catData && catData.id) {
      var nameCol = getColumnName('categories', 'name');
      var colorCol = getColumnName('categories', 'color');
      var orderCol = getColumnName('categories', 'order');
      
      for (var i = 0; i < catData.id.length; i++) {
        categories.push({
          id: catData.id[i],
          Name: catData[nameCol] ? catData[nameCol][i] : '',
          Color: catData[colorCol] ? catData[colorCol][i] : '#6366f1',
          Order: catData[orderCol] ? catData[orderCol][i] : 0
        });
      }
    }
    categories.sort(function(a, b) { return (a.Order || 0) - (b.Order || 0); });
  } catch (e) {
    categories = [];
  }

  try {
    var tagData = await grist.docApi.fetchTable(TAGS_TABLE);
    tags = [];
    if (tagData && tagData.id) {
      var nameCol = getColumnName('tags', 'name');
      var colorCol = getColumnName('tags', 'color');
      
      for (var i = 0; i < tagData.id.length; i++) {
        tags.push({
          id: tagData.id[i],
          Name: tagData[nameCol] ? tagData[nameCol][i] : '',
          Color: tagData[colorCol] ? tagData[colorCol][i] : '#6366f1'
        });
      }
    }
  } catch (e) {
    tags = [];
  }

  try {
    var projData = await grist.docApi.fetchTable(PROJECTS_TABLE);
    projects = [];
    if (projData && projData.id) {
      var nameCol = getColumnName('projects', 'name');
      var descCol = getColumnName('projects', 'description');
      var colorCol = getColumnName('projects', 'color');
      var statusCol = getColumnName('projects', 'status');
      
      for (var i = 0; i < projData.id.length; i++) {
        projects.push({
          id: projData.id[i],
          Name: projData[nameCol] ? projData[nameCol][i] : '',
          Description: projData[descCol] ? projData[descCol][i] : '',
          Color: projData[colorCol] ? projData[colorCol][i] : '#6366f1',
          Status: projData[statusCol] ? projData[statusCol][i] : 'active',
          Start_Date: projData.Start_Date ? projData.Start_Date[i] : null,
          End_Date: projData.End_Date ? projData.End_Date[i] : null,
          Lead: projData.Lead ? projData.Lead[i] : '',
          CreatedBy: projData.CreatedBy ? projData.CreatedBy[i] : '',
          CreatedAt: projData.CreatedAt ? projData.CreatedAt[i] : ''
        });
      }
    }
  } catch (e) {
    projects = [];
  }

  try {
    var notifData = await grist.docApi.fetchTable(NOTIFICATIONS_TABLE);
    pmNotifications = [];
    if (notifData && notifData.id) {
      for (var ni = 0; ni < notifData.id.length; ni++) {
        pmNotifications.push({
          id: notifData.id[ni],
          Task_Id: notifData.Task_Id ? notifData.Task_Id[ni] : null,
          User_Email: notifData.User_Email ? notifData.User_Email[ni] : '',
          Type: notifData.Type ? notifData.Type[ni] : '',
          Message: notifData.Message ? notifData.Message[ni] : '',
          Is_Read: notifData.Is_Read ? notifData.Is_Read[ni] : false,
          Created_At: notifData.Created_At ? notifData.Created_At[ni] : null,
          Rule_Id: notifData.Rule_Id ? notifData.Rule_Id[ni] : ''
        });
      }
    }
  } catch (e) {
    pmNotifications = [];
  }

  try {
    var logData = await grist.docApi.fetchTable(ACTIVITY_LOG_TABLE);
    activityLog = [];
    if (logData && logData.id) {
      for (var ai = 0; ai < logData.id.length; ai++) {
        activityLog.push({
          id: logData.id[ai],
          Timestamp: logData.Timestamp ? logData.Timestamp[ai] : null,
          User_Email: logData.User_Email ? logData.User_Email[ai] : '',
          Action: logData.Action ? logData.Action[ai] : '',
          Task_Id: logData.Task_Id ? logData.Task_Id[ai] : null,
          Task_Title: logData.Task_Title ? logData.Task_Title[ai] : '',
          Details: logData.Details ? logData.Details[ai] : ''
        });
      }
    }
  } catch (e) {
    activityLog = [];
  }

  await cleanupEmptyDraftTasks();
  renderProjectSelector();
  refreshAllViews();
}

function roleLabel(role) {
  if (role === 'admin') return t('roleAdmin');
  if (role === 'viewer') return t('roleViewer');
  if (role === 'member') return t('roleMember');
  return role; // rôle personnalisé : affiché tel quel
}

function renderProjectSelector() {
  var container = document.getElementById('project-selector');
  if (!container) return;

  // Rôles disponibles (distincts, triés) — supports ChoiceList arrays
  var roleSet = {};
  users.forEach(function(u) { getUserRoles(u).forEach(function(r) { if (r) roleSet[r] = true; }); });
  var roles = Object.keys(roleSet).sort();

  // Personnes visibles selon le rôle sélectionné
  var visibleUsers = currentFilterRole
    ? users.filter(function(u) { return userMatchesRole(u, currentFilterRole); })
    : users;

  // Projets visibles
  var visibleProjects = projects;
  if (mineOnly) {
    var myIds = myProjectIdSet();
    visibleProjects = projects.filter(function (p) { return myIds[p.id]; });
  }
  if (currentFilterAssignee) {
    var projIdSet = {};
    var selIdentSet = personIdentSet(currentFilterAssignee);
    tasks.forEach(function(t) {
      if (!t.Project_Id) return;
      if (assigneeListHas(t.Assignee, selIdentSet)) projIdSet[t.Project_Id] = true;
    });
    // Si aucune tâche associée, on laisse les projets courants (sinon UX bloquée)
    var filtered = visibleProjects.filter(function(p) { return projIdSet[p.id]; });
    if (filtered.length > 0) visibleProjects = filtered;
  }

  var html = '';

  // Filtre Rôle
  var roleOptions = roles.map(function(r) { return { value: r, label: roleLabel(r) }; });
  html += buildFilterCombo('role', currentLang === 'fr' ? '— Rôle —' : '— Role —', roleOptions, currentFilterRole, filterByRole);

  // Filtre Personne
  var personOptions = [];
  visibleUsers.forEach(function(u) {
    var val = u.Email || u.Name;
    var label = u.Name || u.Email;
    if (val) personOptions.push({ value: val, label: label });
  });
  html += buildFilterCombo('person', currentLang === 'fr' ? '— Personne —' : '— Person —', personOptions, currentFilterAssignee, filterByAssignee);

  // Filtre Produit
  var allCategories = [];
  tasks.forEach(function(t) { if (t.Category && allCategories.indexOf(t.Category) === -1) allCategories.push(t.Category); });
  allCategories.sort();
  var catOptions = allCategories.map(function(c) { return { value: c, label: c }; });
  html += buildFilterCombo('category', currentLang === 'fr' ? '— Produit —' : '— Product —', catOptions, currentFilterCategory, filterByCategory);

  // Filtre Tag
  var tagOptions = tags.map(function(tag) { return { value: tag.Name, label: tag.Name }; });
  html += buildFilterCombo('tag', '— Tag —', tagOptions, currentFilterTag, filterByTag);

  // Filtre Projet — combobox moderne avec recherche intégrée
  var selProj = currentProjectId ? projects.find(function(p) { return p.id === currentProjectId; }) : null;
  var btnLabel = selProj ? sanitize(selProj.Name) : (currentLang === 'fr' ? 'Tous les projets' : 'All projects');
  var btnDotColor = selProj ? (selProj.Color || '#6366f1') : 'transparent';
  var btnClass = 'proj-combobox-btn' + (currentProjectId ? ' active' : '');
  html += '<div class="proj-combobox" id="proj-combobox">';
  html += '<button type="button" class="' + btnClass + '" onclick="toggleProjectDropdown()" id="proj-combobox-btn">';
  html += '<span class="proj-combobox-dot" style="background:' + btnDotColor + ';' + (selProj ? '' : 'opacity:0;') + '"></span>';
  html += '<span class="proj-combobox-label">' + btnLabel + '</span>';
  html += '<span class="proj-combobox-chevron">▾</span>';
  html += '</button>';
  html += '<div class="proj-dropdown" id="project-dropdown">';
  html += '<div class="proj-dropdown-search"><input type="text" id="proj-search-input" placeholder="' + (currentLang === 'fr' ? 'Rechercher...' : 'Search...') + '" oninput="filterProjectDropdown(this.value)" autocomplete="off"></div>';
  var PROJ_INITIAL_LIMIT = 5;
  html += '<div class="proj-dropdown-list" id="proj-dropdown-list">';
  // "All projects" option (always shown)
  html += '<div class="proj-option' + (!currentProjectId ? ' selected' : '') + '" data-id="" data-name="" data-always="1" onclick="selectProjectOption(\'\')">';
  html += '<span class="proj-dot" style="background:#94a3b8;opacity:.4;"></span>';
  html += '<span>' + (currentLang === 'fr' ? 'Tous les projets' : 'All projects') + '</span>';
  html += '</div>';
  // Project options — first 5 visible, rest hidden until search
  var allTasksForCount = tasks;
  var extraCount = Math.max(0, visibleProjects.length - PROJ_INITIAL_LIMIT);
  visibleProjects.forEach(function(proj, idx) {
    var taskCount = allTasksForCount.filter(function(tt) { return tt.Project_Id === proj.id; }).length;
    var isSelected = currentProjectId === proj.id;
    var safeName = sanitize(proj.Name || '');
    var isExtra = idx >= PROJ_INITIAL_LIMIT && !isSelected;
    html += '<div class="proj-option' + (isSelected ? ' selected' : '') + '"';
    html += ' data-id="' + proj.id + '" data-name="' + safeName + '"';
    if (isExtra) html += ' data-extra="1" style="display:none;"';
    html += ' onclick="selectProjectOption(' + proj.id + ')">';
    html += '<span class="proj-dot" style="background:' + (proj.Color || '#6366f1') + ';"></span>';
    html += '<span style="flex:1;overflow:hidden;text-overflow:ellipsis;">' + safeName + '</span>';
    if (taskCount > 0) html += '<span class="proj-count">' + taskCount + '</span>';
    html += '</div>';
  });
  // "More" hint shown when no search active
  if (extraCount > 0) {
    html += '<div id="proj-more-hint" style="padding:6px 12px;font-size:11px;color:#94a3b8;text-align:center;border-top:1px solid #f1f5f9;">';
    html += '+ ' + extraCount + ' ' + (currentLang === 'fr' ? 'autres — tapez pour chercher' : 'more — type to search');
    html += '</div>';
  }
  html += '</div></div></div>';

  // Bouton "Mes projets" (créés par moi OU assigné à moi)
  if (currentUserEmail) {
    html += '<button class="btn-icon" onclick="toggleMyProjects()" title="' + (currentLang === 'fr' ? 'Mes projets : créés par moi ou qui me sont assignés' : 'My projects: created by or assigned to me') + '" style="width:auto;padding:0 12px;font-size:12px;font-weight:600;' + (mineOnly ? 'background:#6366f1;color:#fff;border-color:#6366f1;' : '') + '">👤 ' + (currentLang === 'fr' ? 'Mes projets' : 'My projects') + '</button>';
  }

  if (currentFilterRole || currentFilterAssignee || currentFilterCategory || currentFilterTag || currentProjectId || mineOnly) {
    html += '<button class="btn-icon" onclick="resetFilters()" title="' + (currentLang === 'fr' ? 'Réinitialiser les filtres' : 'Reset filters') + '" style="color:#ef4444;">✕</button>';
  }

  html += '<button class="btn-icon" onclick="openProjectModal()" title="' + t('manageProjects') + '">⚙️</button>';
  container.innerHTML = html;

  // Bandeau de filtre actif en haut de page (affiche tous les filtres en cascade)
  var banner = document.getElementById('project-filter-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'project-filter-banner';
    var appEl = document.querySelector('.app-container') || document.body;
    appEl.insertBefore(banner, appEl.firstChild);
  }
  if (currentFilterRole || currentFilterAssignee || currentFilterCategory || currentFilterTag || currentProjectId || mineOnly) {
    var proj2 = currentProjectId ? projects.find(function(p) { return p.id === currentProjectId; }) : null;
    var c2 = (proj2 && proj2.Color) ? proj2.Color : '#6366f1';
    var bits = [];
    if (mineOnly) bits.push('👤 ' + (currentLang === 'fr' ? 'Mes projets' : 'My projects'));
    if (currentFilterRole) bits.push('👔 ' + sanitize(roleLabel(currentFilterRole)));
    if (currentFilterAssignee) {
      var u = findUserByIdent(currentFilterAssignee);
      var displayName = u ? (u.Name || u.Email) : currentFilterAssignee;
      bits.push('👤 ' + sanitize(displayName));
    }
    if (currentFilterCategory) bits.push('📁 ' + sanitize(currentFilterCategory));
    if (currentFilterTag) bits.push('🏷️ ' + sanitize(currentFilterTag));
    if (proj2) bits.push('🎯 ' + sanitize(proj2.Name));
    banner.innerHTML = (currentLang === 'fr' ? 'Filtres actifs : ' : 'Active filters: ') + '<strong>' + bits.join(' › ') + '</strong> — <a href="#" onclick="resetFilters();return false;" style="color:inherit;text-decoration:underline;">' + (currentLang === 'fr' ? 'Tout effacer' : 'Clear all') + '</a>';
    banner.style.cssText = 'display:flex;align-items:center;gap:8px;padding:8px 16px;background:' + c2 + '15;border-bottom:2px solid' + c2 + ';color:' + c2 + ';font-size:12px;font-weight:600;';
  } else {
    banner.style.display = 'none';
  }
}

function buildFilterCombo(id, placeholder, options, selectedValue, onSelect) {
  var selOpt = options.find(function(o) { return o.value === selectedValue; });
  var label = selOpt ? selOpt.label : placeholder;
  var isActive = !!selectedValue;
  var h = '<div class="filter-combo" id="fc-' + id + '">';
  h += '<button type="button" class="filter-combo-btn' + (isActive ? ' active' : '') + '" onclick="toggleFilterCombo(\'' + id + '\')" id="fc-btn-' + id + '">';
  h += '<span class="filter-combo-label">' + sanitize(label) + '</span>';
  h += '<span class="filter-combo-chevron">▾</span></button>';
  h += '<div class="filter-combo-dd" id="fc-dd-' + id + '">';
  h += '<div class="filter-combo-search"><input type="text" id="fc-search-' + id + '" placeholder="' + (currentLang === 'fr' ? 'Rechercher...' : 'Search...') + '" oninput="filterComboSearch(\'' + id + '\', this.value)" autocomplete="off"></div>';
  h += '<div class="filter-combo-list" id="fc-list-' + id + '">';
  h += '<div class="filter-combo-opt' + (!selectedValue ? ' selected' : '') + '" data-value="" data-label="' + sanitize(placeholder) + '" onclick="selectFilterCombo(\'' + id + '\', \'\')">' + sanitize(placeholder) + '</div>';
  options.forEach(function(o) {
    // La valeur est lue depuis data-value via getAttribute (dé-échappée par le
    // navigateur) : un produit/tag avec & < > " arrive intact au callback.
    h += '<div class="filter-combo-opt' + (o.value === selectedValue ? ' selected' : '') + '" data-value="' + sanitize(o.value) + '" data-label="' + sanitize(o.label) + '" onclick="selectFilterComboEl(\'' + id + '\', this)">' + sanitize(o.label) + '</div>';
  });
  h += '</div></div></div>';
  window['_fcCallback_' + id] = onSelect;
  return h;
}

// B2 : multi-filtres statut/priorité du tableau (tableau vide = tous)
var tableFilterStatuses = [];
var tableFilterPriorities = [];

function renderMultiFilter(kind) {
  var containerId = kind === 'status' ? 'ms-status' : 'ms-priority';
  var c = document.getElementById(containerId);
  if (!c) return;
  var opts, selected, placeholder;
  if (kind === 'status') {
    opts = getKanbanStatuses().map(function(s) { return { value: s.key, label: currentLang === 'fr' ? s.label_fr : s.label_en }; });
    selected = tableFilterStatuses;
    placeholder = currentLang === 'fr' ? 'Tous les statuts' : 'All statuses';
  } else {
    opts = [
      { value: 'high', label: t('priorityHigh') },
      { value: 'medium', label: t('priorityMedium') },
      { value: 'low', label: t('priorityLow') }
    ];
    selected = tableFilterPriorities;
    placeholder = currentLang === 'fr' ? 'Toutes priorités' : 'All priorities';
  }
  var labelText = selected.length === 0 ? placeholder
    : opts.filter(function(o) { return selected.indexOf(o.value) !== -1; }).map(function(o) { return o.label; }).join(', ');
  var h = '<button type="button" class="filter-combo-btn' + (selected.length ? ' active' : '') + '" onclick="toggleMsFilter(\'' + containerId + '\')" id="' + containerId + '-btn">';
  h += '<span class="filter-combo-label">' + sanitize(labelText) + '</span><span class="filter-combo-chevron">▾</span></button>';
  h += '<div class="filter-combo-dd" id="' + containerId + '-dd"><div class="filter-combo-list">';
  if (selected.length) {
    h += '<div class="filter-combo-opt" onclick="clearMsFilter(\'' + kind + '\')" style="color:#ef4444;font-weight:600;">✕ ' + (currentLang === 'fr' ? 'Effacer' : 'Clear') + '</div>';
  }
  opts.forEach(function(o) {
    var on = selected.indexOf(o.value) !== -1;
    h += '<div class="filter-combo-opt' + (on ? ' selected' : '') + '" onclick="toggleMsOption(\'' + kind + '\',\'' + sanitize(o.value).replace(/'/g, "\\'") + '\')">';
    h += '<span style="display:inline-block;width:16px;">' + (on ? '✓' : '') + '</span>' + sanitize(o.label) + '</div>';
  });
  h += '</div></div>';
  // Préserver l'état ouvert si le menu l'était avant reconstruction
  var prevDd = document.getElementById(containerId + '-dd');
  var wasOpen = prevDd && prevDd.classList.contains('show');
  c.innerHTML = h;
  if (wasOpen) {
    var newDd = document.getElementById(containerId + '-dd');
    var newBtn = document.getElementById(containerId + '-btn');
    if (newDd) newDd.classList.add('show');
    if (newBtn) newBtn.classList.add('open');
  }
}

function toggleMsFilter(containerId) {
  var dd = document.getElementById(containerId + '-dd');
  var btn = document.getElementById(containerId + '-btn');
  if (!dd) return;
  var isOpen = dd.classList.contains('show');
  document.querySelectorAll('.filter-combo-dd.show').forEach(function(d) { d.classList.remove('show'); });
  document.querySelectorAll('.filter-combo-btn.open').forEach(function(b) { b.classList.remove('open'); });
  if (!isOpen) {
    dd.classList.add('show');
    if (btn) btn.classList.add('open');
    setTimeout(function() {
      document.addEventListener('mousedown', function hideMs(e) {
        var box = document.getElementById(containerId);
        // Re-query : les éléments sont recréés à chaque renderMultiFilter
        if (box && !box.contains(e.target)) {
          var dd2 = document.getElementById(containerId + '-dd');
          var btn2 = document.getElementById(containerId + '-btn');
          if (dd2) dd2.classList.remove('show');
          if (btn2) btn2.classList.remove('open');
          document.removeEventListener('mousedown', hideMs);
        }
      });
    }, 0);
  }
}

function toggleMsOption(kind, value) {
  var arr = kind === 'status' ? tableFilterStatuses : tableFilterPriorities;
  var i = arr.indexOf(value);
  if (i === -1) arr.push(value); else arr.splice(i, 1);
  renderTableView(); // reconstruit le filtre (état ouvert préservé) + le tableau
}

function clearMsFilter(kind) {
  if (kind === 'status') tableFilterStatuses = []; else tableFilterPriorities = [];
  renderMultiFilter(kind);
  renderTableView();
}

function toggleFilterCombo(id) {
  var dd = document.getElementById('fc-dd-' + id);
  var btn = document.getElementById('fc-btn-' + id);
  if (!dd) return;
  var isOpen = dd.classList.contains('show');
  document.querySelectorAll('.filter-combo-dd.show').forEach(function(d) { d.classList.remove('show'); });
  document.querySelectorAll('.filter-combo-btn.open').forEach(function(b) { b.classList.remove('open'); });
  if (!isOpen) {
    dd.classList.add('show');
    if (btn) btn.classList.add('open');
    var inp = document.getElementById('fc-search-' + id);
    if (inp) { inp.value = ''; inp.focus(); filterComboSearch(id, ''); }
    setTimeout(function() {
      document.addEventListener('mousedown', function hideFC(e) {
        var box = document.getElementById('fc-' + id);
        if (box && !box.contains(e.target)) {
          var dd2 = document.getElementById('fc-dd-' + id);
          var btn2 = document.getElementById('fc-btn-' + id);
          if (dd2) dd2.classList.remove('show');
          if (btn2) btn2.classList.remove('open');
          document.removeEventListener('mousedown', hideFC);
        }
      });
    }, 0);
  }
}

function filterComboSearch(id, query) {
  var list = document.getElementById('fc-list-' + id);
  if (!list) return;
  var q = (query || '').trim().toLowerCase();
  list.querySelectorAll('.filter-combo-opt').forEach(function(opt) {
    var label = (opt.dataset.label || '').toLowerCase();
    opt.style.display = (!q || label.indexOf(q) !== -1) ? '' : 'none';
  });
}

function selectFilterCombo(id, value) {
  var dd = document.getElementById('fc-dd-' + id);
  var btn = document.getElementById('fc-btn-' + id);
  if (dd) dd.classList.remove('show');
  if (btn) btn.classList.remove('open');
  var cb = window['_fcCallback_' + id];
  if (cb) cb(value);
}

// Variante DOM : lit la valeur brute depuis data-value (dé-échappée par getAttribute)
function selectFilterComboEl(id, el) {
  selectFilterCombo(id, el ? (el.getAttribute('data-value') || '') : '');
}

function toggleProjectDropdown() {
  var dd = document.getElementById('project-dropdown');
  var btn = document.getElementById('proj-combobox-btn');
  if (!dd) return;
  var isOpen = dd.classList.contains('show');
  if (isOpen) {
    dd.classList.remove('show');
    if (btn) btn.classList.remove('open');
  } else {
    dd.classList.add('show');
    if (btn) btn.classList.add('open');
    var inp = document.getElementById('proj-search-input');
    if (inp) { inp.value = ''; inp.focus(); filterProjectDropdown(''); }
    setTimeout(function() {
      document.addEventListener('mousedown', function hideDD(e) {
        var dd2 = document.getElementById('project-dropdown');
        var box = document.getElementById('proj-combobox');
        if (dd2 && box && !box.contains(e.target)) {
          dd2.classList.remove('show');
          var btn2 = document.getElementById('proj-combobox-btn');
          if (btn2) btn2.classList.remove('open');
          document.removeEventListener('mousedown', hideDD);
        }
      });
    }, 0);
  }
}

// Keep showProjectDropdown as alias (called from old code paths if any)
function showProjectDropdown() { toggleProjectDropdown(); }

function filterProjectDropdown(query) {
  var list = document.getElementById('proj-dropdown-list');
  if (!list) return;
  var q = (query || '').trim().toLowerCase();
  var hint = document.getElementById('proj-more-hint');
  var opts = list.querySelectorAll('.proj-option');

  if (!q) {
    // No query: show first 5 only (restore data-extra hidden state)
    opts.forEach(function(opt) {
      if (opt.dataset.always === '1' || !opt.dataset.extra) {
        opt.style.display = '';
      } else {
        opt.style.display = 'none';
      }
    });
    if (hint) hint.style.display = '';
  } else {
    // Query: show all matching, hide non-matching
    opts.forEach(function(opt) {
      var name = (opt.dataset.name || '').toLowerCase();
      opt.style.display = (opt.dataset.always === '1' || name.indexOf(q) !== -1) ? '' : 'none';
    });
    if (hint) hint.style.display = 'none';
  }
}

function selectProjectOption(projectId) {
  var dd = document.getElementById('project-dropdown');
  var btn = document.getElementById('proj-combobox-btn');
  if (dd) dd.classList.remove('show');
  if (btn) btn.classList.remove('open');
  filterByProject(projectId);
}

function filterByProject(projectId) {
  currentProjectId = projectId ? parseInt(projectId) : null;
  localStorage.setItem(projectStorageKey(), currentProjectId || '');
  renderProjectSelector();
  refreshAllViews();
}

// Valeur d'assigné correspondant à l'utilisateur courant (Email en priorité, sinon Nom)
function myAssigneeValue() {
  if (!currentUserEmail) return null;
  var em = currentUserEmail.toLowerCase().trim();
  var u = users.find(function (x) { return (x.Email || '').toLowerCase().trim() === em; });
  if (u) return u.Email || u.Name;
  return currentUserEmail; // repli : on tente l'email brut
}
// Ensemble des projets "à moi" : créés par moi OU contenant une tâche qui m'est assignée
function myProjectIdSet() {
  var em = (currentUserEmail || '').toLowerCase().trim();
  var mine = myAssigneeValue();
  var set = {};
  projects.forEach(function (p) {
    if (em && (p.CreatedBy || '').toLowerCase().trim() === em) set[p.id] = true;
    if (mine && (p.Lead || '') === mine) set[p.id] = true; // responsable du projet
  });
  if (mine) tasks.forEach(function (tk) {
    if (!tk.Project_Id) return;
    var list = (tk.Assignee || '').split(',').map(function (s) { return s.trim(); });
    if (list.indexOf(mine) !== -1) set[tk.Project_Id] = true;
  });
  return set;
}
// Bascule "Afficher seulement mes projets"
function toggleMyProjects() {
  mineOnly = !mineOnly;
  persistFilters();
  renderProjectSelector();
  refreshAllViews();
}

// B1 : les filtres etaient stockes sous une cle globale, partagee par tous les
// documents servis depuis la meme origine — d'ou des filtres qui « suivaient »
// d'un document a l'autre. On prefixe desormais chaque cle par l'id du document.
var pmDocKey = ':doc';   // valeur de repli avant resolution de l'id du document

async function resolveDocKey() {
  var name = '';
  try {
    if (grist.docApi && typeof grist.docApi.getDocName === 'function') {
      name = await grist.docApi.getDocName();
    }
  } catch (e) { /* ignore */ }
  pmDocKey = ':' + (name ? String(name) : 'doc');
  // Purge unique des anciennes cles globales, qui fuyaient d'un document a l'autre
  try {
    if (!localStorage.getItem('pm-filters-scoped')) {
      localStorage.removeItem('pm-filters');
      localStorage.removeItem('pm-current-project');
      localStorage.setItem('pm-filters-scoped', '1');
    }
  } catch (e) {}
}

function filtersStorageKey() { return 'pm-filters' + pmDocKey; }
function projectStorageKey() { return 'pm-current-project' + pmDocKey; }

// Persistance des filtres (conservés en changeant de page / au rechargement)
function persistFilters() {
  try {
    localStorage.setItem(filtersStorageKey(), JSON.stringify({
      role: currentFilterRole, assignee: currentFilterAssignee,
      category: currentFilterCategory, tag: currentFilterTag, mineOnly: mineOnly
    }));
  } catch (e) {}
}

// B1 : une valeur restauree qui n'existe plus dans CE document n'apparait dans
// aucune liste — le combo affichait alors « — Personne — » alors que le filtre
// etait bien actif, et des taches disparaissaient sans filtre visible.
// On ecarte donc toute valeur introuvable dans les donnees chargees.
function sanitizeRestoredFilters() {
  if (currentFilterRole) {
    var known = false;
    users.forEach(function(u) { getUserRoles(u).forEach(function(r) { if (r === currentFilterRole) known = true; }); });
    if (!known) currentFilterRole = null;
  }
  if (currentFilterAssignee && !findUserByIdent(currentFilterAssignee)) currentFilterAssignee = null;
  if (currentFilterCategory) {
    var catKey = String(currentFilterCategory).trim();
    var catFound = tasks.some(function(t) { return String(t.Category || '').trim() === catKey; });
    if (!catFound) currentFilterCategory = null;
  }
  if (currentFilterTag) {
    var tagKey = String(currentFilterTag).trim();
    var tagFound = tags.some(function(tg) { return String(tg.Name || '').trim() === tagKey; });
    if (!tagFound) currentFilterTag = null;
  }
  if (currentProjectId && !projects.some(function(pr) { return pr.id === currentProjectId; })) {
    currentProjectId = null;
  }
}

function restoreFilters() {
  try {
    var s = JSON.parse(localStorage.getItem(filtersStorageKey()) || '{}');
    currentFilterRole = s.role || null;
    currentFilterAssignee = s.assignee || null;
    currentFilterCategory = s.category || null;
    currentFilterTag = s.tag || null;
    mineOnly = !!s.mineOnly;
  } catch (e) {}
  try { var sp = localStorage.getItem(projectStorageKey()); currentProjectId = sp ? (parseInt(sp) || null) : null; } catch (e) {}
  sanitizeRestoredFilters();
  persistFilters();
  try { localStorage.setItem(projectStorageKey(), currentProjectId || ''); } catch (e) {}
}

function filterByRole(role) {
  currentFilterRole = role || null;
  // Si la personne sélectionnée n'a plus le rôle, la déselectionner
  if (currentFilterRole && currentFilterAssignee) {
    var selUser = findUserByIdent(currentFilterAssignee);
    var stillValid = !!(selUser && userMatchesRole(selUser, currentFilterRole));
    if (!stillValid) {
      currentFilterAssignee = null;
      currentProjectId = null;
    }
  }
  persistFilters();
  renderProjectSelector();
  refreshAllViews();
}

function filterByAssignee(name) {
  currentFilterAssignee = name || null;
  // Si le projet sélectionné n'a plus de tâches pour cette personne, le déselectionner
  if (currentFilterAssignee && currentProjectId) {
    var idSet = personIdentSet(currentFilterAssignee);
    var match = tasks.some(function(t) {
      if (Number(t.Project_Id) !== Number(currentProjectId)) return false;
      return assigneeListHas(t.Assignee, idSet);
    });
    if (!match) currentProjectId = null;
  }
  persistFilters();
  renderProjectSelector();
  refreshAllViews();
}

function filterByCategory(val) {
  currentFilterCategory = val || null;
  persistFilters();
  renderProjectSelector();
  refreshAllViews();
}

function filterByTag(val) {
  currentFilterTag = val || null;
  persistFilters();
  renderProjectSelector();
  refreshAllViews();
}

function resetFilters() {
  currentFilterRole = null;
  currentFilterAssignee = null;
  currentFilterCategory = null;
  currentFilterTag = null;
  mineOnly = false;
  currentProjectId = null;
  localStorage.setItem(projectStorageKey(), '');
  persistFilters();
  renderProjectSelector();
  refreshAllViews();
}

var showArchivedTasks = false;

function getFilteredTasks() {
  var result = tasks.filter(function(t) {
    if (showArchivedTasks) return t.Status === 'archived';
    return t.Status !== 'archived';
  });
  if (currentFilterRole) {
    // task.Assignee peut contenir le Nom OU l'Email : on accepte les deux
    var roleIdSet = {};
    users.filter(function(u) { return userMatchesRole(u, currentFilterRole); })
      .forEach(function(u) {
        if (u.Email) roleIdSet[String(u.Email).toLowerCase().trim()] = true;
        if (u.Name) roleIdSet[String(u.Name).toLowerCase().trim()] = true;
      });
    result = result.filter(function(t) { return assigneeListHas(t.Assignee, roleIdSet); });
  }
  if (currentFilterAssignee) {
    var identSet = personIdentSet(currentFilterAssignee);
    result = result.filter(function(t) {
      if (assigneeListHas(t.Assignee, identSet)) return true;
      // La tâche parente reste visible si une de ses sous-tâches est assignée à la personne
      return getTaskSubtasks(t.id).some(function(st) { return assigneeListHas(st.Assignee, identSet); });
    });
  }
  if (currentFilterCategory) {
    var catKey = String(currentFilterCategory).trim();
    result = result.filter(function(t) { return String(t.Category || '').trim() === catKey; });
  }
  if (currentFilterTag) {
    var tagKey = String(currentFilterTag).trim();
    result = result.filter(function(t) {
      if (String(t.Tag || '').trim() === tagKey) return true;
      // La tâche parente reste visible si une de ses sous-tâches porte ce tag
      return getTaskSubtasks(t.id).some(function(st) { return String(st.Tag || '').trim() === tagKey; });
    });
  }
  if (mineOnly && !currentProjectId) {
    var myIds = myProjectIdSet();
    result = result.filter(function(t) { return t.Project_Id && myIds[t.Project_Id]; });
  }
  if (currentProjectId) {
    var cpid = Number(currentProjectId);
    result = result.filter(function(t) { return Number(t.Project_Id) === cpid; });
  }
  return result;
}

function getProjectName(projectId) {
  if (!projectId) return '';
  var proj = projects.find(function(p) { return p.id === projectId; });
  return proj ? proj.Name : '';
}

function getProjectColor(projectId) {
  if (!projectId) return '#94a3b8';
  var proj = projects.find(function(p) { return p.id === projectId; });
  return proj ? (proj.Color || '#6366f1') : '#94a3b8';
}

function refreshAllViews() {
  if (typeof renderProjectSelector === 'function') renderProjectSelector();
  updateArchiveButton();
  var activeTab = document.querySelector('.tab-btn.active');
  if (activeTab) {
    var tab = activeTab.getAttribute('data-tab');
    if (tab === 'calendar') renderCalendarView();
    if (tab === 'kanban') renderKanbanView();
    if (tab === 'table') renderTableView();
    if (tab === 'gantt') renderGanttView();
    if (tab === 'templates') renderTemplatesView();
    if (tab === 'stats') renderStatsView();
    if (tab === 'team') renderTeamView();
  }
}

// =============================================================================
// CALENDAR VIEW
// =============================================================================

function renderCalendarView() {
  // Update mode buttons
  document.querySelectorAll('.calendar-mode-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-mode') === calendarMode);
  });

  // Responsive: classes JS basées sur la largeur réelle du container (fiable dans iframes)
  applyCalendarResponsiveClasses();
  attachCalendarResizeObserver();

  if (window.innerWidth < 480 && calendarMode !== 'day') { renderCalendarMobileView(); return; }
  if (calendarMode === 'week') { renderCalendarWeekView(); return; }
  if (calendarMode === 'day') { renderCalendarDayView(); return; }

  var monthNames = currentLang === 'fr'
    ? ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayNames = currentLang === 'fr'
    ? ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
    : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Update title
  document.getElementById('calendar-month-title').textContent = monthNames[calendarMonth] + ' ' + calendarYear;

  // Render weekdays
  var weekdaysHtml = '';
  for (var d = 0; d < 7; d++) {
    var isWeekend = d >= 5;
    weekdaysHtml += '<div class="calendar-weekday' + (isWeekend ? ' weekend' : '') + '">' + dayNames[d] + '</div>';
  }
  document.getElementById('calendar-weekdays').innerHTML = weekdaysHtml;

  // Calculate days
  var firstDay = new Date(calendarYear, calendarMonth, 1);
  var lastDay = new Date(calendarYear, calendarMonth + 1, 0);
  var startDayOfWeek = (firstDay.getDay() + 6) % 7; // Monday = 0
  var daysInMonth = lastDay.getDate();

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  // Render days
  var daysHtml = '';
  var dayIndex = 0;

  // Previous month days
  var prevMonth = new Date(calendarYear, calendarMonth, 0);
  var prevMonthDays = prevMonth.getDate();
  for (var i = startDayOfWeek - 1; i >= 0; i--) {
    var dayNum = prevMonthDays - i;
    var prevDate = new Date(calendarYear, calendarMonth - 1, dayNum);
    var prevTasks = getTasksForDate(prevDate);
    daysHtml += renderCalendarDay(dayNum, prevDate, prevTasks, true, false, false);
    dayIndex++;
  }

  // Current month days
  for (var d = 1; d <= daysInMonth; d++) {
    var currentDate = new Date(calendarYear, calendarMonth, d);
    var isToday = currentDate.getTime() === today.getTime();
    var dayTasks = getTasksForDate(currentDate);
    daysHtml += renderCalendarDay(d, currentDate, dayTasks, false, isToday, false);
    dayIndex++;
  }

  // Next month days
  var remainingDays = 42 - dayIndex; // 6 rows * 7 days
  for (var i = 1; i <= remainingDays; i++) {
    var nextDate = new Date(calendarYear, calendarMonth + 1, i);
    var nextTasks = getTasksForDate(nextDate);
    daysHtml += renderCalendarDay(i, nextDate, nextTasks, true, false);
  }

  var daysContainer = document.getElementById('calendar-days');
  daysContainer.innerHTML = daysHtml;
  daysContainer.className = 'calendar-days';
}

function renderCalendarDay(dayNum, date, dayTasks, isOtherMonth, isToday, isWeekView) {
  // Validate date
  if (!date || isNaN(date.getTime())) {
    console.error('Invalid date in renderCalendarDay:', date);
    return '';
  }
  var dayOfWeek = (date.getDay() + 6) % 7;
  var isWeekend = dayOfWeek >= 5;
  var dateStr = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');

  var classes = 'calendar-day';
  if (isOtherMonth) classes += ' other-month';
  if (isToday) classes += ' today';
  if (isWeekend) classes += ' weekend';

  var html = '<div class="' + classes + '" onclick="onCalendarDayClick(\'' + dateStr + '\')" ondragover="onCalendarDragOver(event)" ondrop="onCalendarDrop(event, \'' + dateStr + '\')">';
  if (!isWeekView) {
    html += '<div class="day-number">' + dayNum + '</div>';
  }
  html += '<div class="day-tasks">';

  var maxTasks = isWeekView ? 20 : 3;
  for (var i = 0; i < Math.min(dayTasks.length, maxTasks); i++) {
    var task = dayTasks[i];
    var statusClass = 'status-' + task.Status;
    var priorityClass = task.Priority === 'high' ? ' priority-high' : '';
    html += '<div class="day-task ' + statusClass + priorityClass + '" draggable="true" ondragstart="onCalendarTaskDragStart(event, ' + task.id + ')" onclick="event.stopPropagation(); openEditTaskModal(' + task.id + ')" title="' + sanitize(task.Title) + '">';
    html += sanitize(task.Title);
    html += '</div>';
  }

  if (dayTasks.length > maxTasks) {
    html += '<div class="day-more">+' + (dayTasks.length - maxTasks) + ' ' + (currentLang === 'fr' ? 'autres' : 'more') + '</div>';
  }

  // Jalons du jour (vues mois et semaine) : puces violettes cliquables
  var dayMilestones = getMilestonesForDate(date);
  var maxMilestones = isWeekView ? 10 : 2;
  for (var msi = 0; msi < Math.min(dayMilestones.length, maxMilestones); msi++) {
    var ms = dayMilestones[msi];
    html += '<div class="day-task day-milestone' + (ms.st.Completed ? ' milestone-done' : '') + '" onclick="event.stopPropagation(); openEditTaskModal(' + ms.taskId + ')" title="' + sanitize(ms.st.Title) + '">◆ ' + sanitize(ms.st.Title) + '</div>';
  }
  if (dayMilestones.length > maxMilestones) {
    html += '<div class="day-more">◆ +' + (dayMilestones.length - maxMilestones) + '</div>';
  }

  html += '</div></div>';
  return html;
}

function onCalendarDayClick(dateStr) {
  openNewTaskModalWithDate(dateStr);
}

var calendarDraggedTaskId = null;

function onCalendarTaskDragStart(event, taskId) {
  calendarDraggedTaskId = taskId;
  event.dataTransfer.effectAllowed = 'move';
  event.target.style.opacity = '0.5';
}

function onCalendarDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  event.currentTarget.classList.add('drag-over');
}

async function onCalendarDrop(event, dateStr) {
  event.preventDefault();
  event.currentTarget.classList.remove('drag-over');
  
  if (!calendarDraggedTaskId) return;
  
  var task = tasks.find(function(t) { return t.id === calendarDraggedTaskId; });
  if (!task) return;
  
  // Parse the new date
  var parts = dateStr.split('-');
  var newDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  var newTimestamp = Math.floor(newDate.getTime() / 1000);
  
  // Calculate duration if task has both start and due dates
  var duration = 0;
  if (task.Start_Date && task.Due_Date) {
    duration = task.Due_Date - task.Start_Date;
  }
  
  // Update the task dates
  var updates = { Due_Date: newTimestamp };
  if (task.Start_Date) {
    updates.Start_Date = newTimestamp - duration;
  }
  
  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', TASKS_TABLE, calendarDraggedTaskId, updates]
    ]);
    showToast(t('taskMoved'), 'success');
    await loadAllData();
  } catch (e) {
    console.error('Error moving task:', e);
  }
  
  calendarDraggedTaskId = null;
}

function openNewTaskModalWithDate(dateStr) {
  return startNewTask(null, dateStr); // brouillon avec date pré-remplie -> éditeur complet
}

function calendarNav(dir) {
  calendarMonth += dir;
  if (calendarMonth > 11) {
    calendarMonth = 0;
    calendarYear++;
  }
  if (calendarMonth < 0) {
    calendarMonth = 11;
    calendarYear--;
  }
  renderCalendarView();
}

function calendarToday() {
  calendarYear = new Date().getFullYear();
  calendarMonth = new Date().getMonth();
  calendarWeekOffset = 0;
  calendarDayOffset = 0;
  renderCalendarView();
}

function setCalendarMode(mode) {
  calendarMode = mode;
  if (mode === 'week') calendarWeekOffset = 0;
  if (mode === 'day') calendarDayOffset = 0;
  renderCalendarView();
}

function getWeekStart(offset) {
  var today = new Date();
  var day = today.getDay();
  var diff = day === 0 ? -6 : 1 - day; // Get to Monday
  var monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + diff + (offset * 7));
  return monday;
}

function getTasksForDate(date) {
  var dateStart = new Date(date);
  dateStart.setHours(0, 0, 0, 0);
  var dateEnd = new Date(date);
  dateEnd.setHours(23, 59, 59, 999);
  var dateTs = dateStart.getTime() / 1000;
  var dateEndTs = dateEnd.getTime() / 1000;

  return getFilteredTasks().filter(function(task) {
    var taskStart = task.Start_Date;
    var taskEnd = task.Due_Date;
    if (!taskStart && !taskEnd) return false;
    if (taskStart && taskEnd) {
      return taskStart <= dateEndTs && taskEnd >= dateTs;
    }
    if (taskStart) return taskStart >= dateTs && taskStart <= dateEndTs;
    if (taskEnd) return taskEnd >= dateTs && taskEnd <= dateEndTs;
    return false;
  });
}

// Jalons du calendrier : sous-tâches de type jalon dont l'échéance tombe ce jour-là
// (les jalons d'une tâche parente filtrée n'apparaissent pas)
function getMilestonesForDate(date) {
  var dateStart = new Date(date);
  dateStart.setHours(0, 0, 0, 0);
  var dateEnd = new Date(date);
  dateEnd.setHours(23, 59, 59, 999);
  var dateTs = dateStart.getTime() / 1000;
  var dateEndTs = dateEnd.getTime() / 1000;
  var result = [];
  getFilteredTasks().forEach(function(task) {
    getVisibleTaskSubtasks(task.id).forEach(function(st) {
      if (isMilestone(st) && st.Due_Date && st.Due_Date >= dateTs && st.Due_Date <= dateEndTs) {
        result.push({ st: st, taskId: task.id });
      }
    });
  });
  return result;
}

function renderCalendarWeekView() {
  // Calculate week start (Monday) based on offset
  var now = new Date();
  var dayOfWeek = now.getDay();
  var mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  var weekStartDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + mondayOffset + (calendarWeekOffset * 7));

  var monthNames = currentLang === 'fr'
    ? ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayNamesFull = currentLang === 'fr'
    ? ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  var weekEndDate = new Date(weekStartDate.getFullYear(), weekStartDate.getMonth(), weekStartDate.getDate() + 6);

  // Update title
  var startMonth = monthNames[weekStartDate.getMonth()];
  var endMonth = monthNames[weekEndDate.getMonth()];
  var title = weekStartDate.getDate() + ' ' + startMonth;
  if (startMonth !== endMonth) {
    title += ' - ' + weekEndDate.getDate() + ' ' + endMonth;
  } else {
    title += ' - ' + weekEndDate.getDate() + ' ' + endMonth;
  }
  title += ' ' + weekStartDate.getFullYear();
  document.getElementById('calendar-month-title').textContent = title;

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  // Render weekdays with dates
  var weekdaysHtml = '';
  for (var d = 0; d < 7; d++) {
    var dayDate = new Date(weekStartDate.getFullYear(), weekStartDate.getMonth(), weekStartDate.getDate() + d);
    var isWeekend = d >= 5;
    var isToday = dayDate.getTime() === today.getTime();
    weekdaysHtml += '<div class="calendar-weekday' + (isWeekend ? ' weekend' : '') + (isToday ? ' today' : '') + '">';
    weekdaysHtml += dayNamesFull[d] + ' <strong>' + dayDate.getDate() + '</strong>';
    weekdaysHtml += '</div>';
  }
  document.getElementById('calendar-weekdays').innerHTML = weekdaysHtml;

  // Render days
  var daysHtml = '';
  for (var d = 0; d < 7; d++) {
    var dayDate = new Date(weekStartDate.getFullYear(), weekStartDate.getMonth(), weekStartDate.getDate() + d);
    var isToday = dayDate.getTime() === today.getTime();
    var dayTasks = getTasksForDate(dayDate);
    daysHtml += renderCalendarDay(dayDate.getDate(), dayDate, dayTasks, false, isToday, true);
  }

  var daysContainer = document.getElementById('calendar-days');
  daysContainer.innerHTML = daysHtml;
  daysContainer.className = 'calendar-days week-view';
}

function calendarNav(dir) {
  if (window.innerWidth < 480 && calendarMode !== 'day') {
    calendarWeekOffset += dir;
    renderCalendarView();
    return;
  }
  if (calendarMode === 'week') {
    calendarWeekOffset += dir;
  } else if (calendarMode === 'day') {
    calendarDayOffset += dir;
  } else {
    calendarMonth += dir;
    if (calendarMonth > 11) { calendarMonth = 0; calendarYear++; }
    if (calendarMonth < 0) { calendarMonth = 11; calendarYear--; }
  }
  renderCalendarView();
}

function renderCalendarMobileView() {
  var now = new Date();
  var dayOfWeek = now.getDay();
  var mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  var weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() + mondayOffset + (calendarWeekOffset * 7));
  var weekEnd = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 6);

  var monthNames = currentLang === 'fr'
    ? ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc']
    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var dayNames = currentLang === 'fr'
    ? ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
    : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  var titleStart = weekStart.getDate() + ' ' + monthNames[weekStart.getMonth()];
  var titleEnd = weekEnd.getDate() + ' ' + monthNames[weekEnd.getMonth()] + ' ' + weekEnd.getFullYear();
  document.getElementById('calendar-month-title').textContent = titleStart + ' \u2013 ' + titleEnd;
  document.getElementById('calendar-weekdays').innerHTML = '';

  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var html = '';

  for (var d = 0; d < 7; d++) {
    var dayDate = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + d);
    var isToday = dayDate.getTime() === today.getTime();
    var isWeekend = d >= 5;
    var dayTasks = getTasksForDate(dayDate);
    var dateStr = dayDate.getFullYear() + '-' + String(dayDate.getMonth() + 1).padStart(2, '0') + '-' + String(dayDate.getDate()).padStart(2, '0');

    var cls = 'calendar-day' + (isToday ? ' today' : '') + (isWeekend ? ' weekend' : '');
    html += '<div class="' + cls + '" onclick="onCalendarDayClick(\'' + dateStr + '\')">';
    html += '<div class="mobile-day-label">';
    html += '<span class="mobile-day-name">' + dayNames[dayDate.getDay()] + '</span>';
    html += '<div class="day-number">' + dayDate.getDate() + '</div>';
    html += '</div>';
    html += '<div class="day-tasks">';
    for (var i = 0; i < dayTasks.length; i++) {
      var task = dayTasks[i];
      html += '<div class="day-task status-' + task.Status + '" onclick="event.stopPropagation(); openEditTaskModal(' + task.id + ')" title="' + sanitize(task.Title) + '">' + sanitize(task.Title) + '</div>';
    }
    var dayMilestones = getMilestonesForDate(dayDate);
    for (var msi = 0; msi < dayMilestones.length; msi++) {
      var ms = dayMilestones[msi];
      html += '<div class="day-task day-milestone' + (ms.st.Completed ? ' milestone-done' : '') + '" onclick="event.stopPropagation(); openEditTaskModal(' + ms.taskId + ')" title="' + sanitize(ms.st.Title) + '">◆ ' + sanitize(ms.st.Title) + '</div>';
    }
    if (dayTasks.length === 0 && dayMilestones.length === 0) {
      html += '<span class="mobile-no-task">\u2014</span>';
    }
    html += '</div></div>';
  }

  var daysContainer = document.getElementById('calendar-days');
  daysContainer.innerHTML = html;
  daysContainer.className = 'calendar-days calendar-mobile-list';
}

// Responsive calendar: ResizeObserver (fiable dans les iframes Grist) + window resize en fallback
var _calResizeTimer;
var _calResizeObserver = null;

function applyCalendarResponsiveClasses() {
  var calContainer = document.querySelector('.calendar-container');
  if (!calContainer) return;
  var w = calContainer.getBoundingClientRect().width || window.innerWidth;
  calContainer.classList.toggle('cal-compact', w < 768 && w >= 480);
  calContainer.classList.toggle('cal-mobile', w < 480);
}

function attachCalendarResizeObserver() {
  var calContainer = document.querySelector('.calendar-container');
  if (!calContainer || _calResizeObserver) return;
  if (window.ResizeObserver) {
    _calResizeObserver = new ResizeObserver(function() {
      clearTimeout(_calResizeTimer);
      _calResizeTimer = setTimeout(function() {
        applyCalendarResponsiveClasses();
        var calTab = document.getElementById('tab-calendar');
        if (calTab && calTab.classList.contains('active')) renderCalendarView();
      }, 150);
    });
    _calResizeObserver.observe(calContainer);
  }
}

window.addEventListener('resize', function() {
  clearTimeout(_calResizeTimer);
  _calResizeTimer = setTimeout(function() {
    applyCalendarResponsiveClasses();
    var calTab = document.getElementById('tab-calendar');
    if (calTab && calTab.classList.contains('active')) renderCalendarView();
  }, 200);
});

function renderCalendarDayView() {
  var today = new Date();
  var viewDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + calendarDayOffset);
  var isToday = calendarDayOffset === 0;

  var monthNames = currentLang === 'fr'
    ? ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayNamesFull = currentLang === 'fr'
    ? ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  document.getElementById('calendar-month-title').textContent =
    dayNamesFull[viewDate.getDay()] + ' ' + viewDate.getDate() + ' ' + monthNames[viewDate.getMonth()] + ' ' + viewDate.getFullYear();

  var dayStart = new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate(), 0, 0, 0);
  var dayEnd = new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate(), 23, 59, 59);
  var dayStartTs = Math.floor(dayStart.getTime() / 1000);
  var dayEndTs = Math.floor(dayEnd.getTime() / 1000);

  var filteredTasks = getFilteredTasks();
  var dayTasks = filteredTasks.filter(function(t) {
    // Tâches dues ce jour précis
    var dueThisDay = t.Due_Date && t.Due_Date >= dayStartTs && t.Due_Date <= dayEndTs;
    // Tâches en cours ce jour : commencées avant la fin du jour et finissant après le début du jour
    var inProgressThisDay = t.Status === 'progress' && t.Start_Date && t.Due_Date &&
      t.Start_Date <= dayEndTs && t.Due_Date >= dayStartTs;
    // Tâches en cours sans date de fin définie mais démarrées
    var inProgressNoEnd = t.Status === 'progress' && t.Start_Date && !t.Due_Date &&
      t.Start_Date <= dayEndTs;
    return dueThisDay || inProgressThisDay || inProgressNoEnd;
  });

  var statusColors = { todo: '#94a3b8', progress: '#3b82f6', done: '#22c55e' };
  var priorityColors = { high: '#ef4444', medium: '#f59e0b', low: '#22c55e' };

  var html = '<div class="calendar-day-view">';
  html += '<div class="calendar-day-header' + (isToday ? ' today' : '') + '">';
  html += isToday ? '📅 ' + (currentLang === 'fr' ? "Aujourd'hui" : 'Today') : '';
  html += '<span class="day-task-count">' + dayTasks.length + ' ' + (currentLang === 'fr' ? 'tâche(s)' : 'task(s)') + '</span>';
  html += '</div>';

  if (dayTasks.length === 0) {
    html += '<div class="day-empty">' + (currentLang === 'fr' ? 'Aucune tâche ce jour' : 'No tasks today') + '</div>';
  } else {
    dayTasks.forEach(function(task) {
      // Calendrier (vue jour) : seuls les jalons apparaissent dans la liste des sous-tâches
      var taskSubtasks = getVisibleTaskSubtasks(task.id).filter(function(st) { return isMilestone(st); });
      var completedSt = taskSubtasks.filter(function(st) { return st.Completed; }).length;
      var stColor = statusColors[task.Status] || '#94a3b8';
      var dueThisDay = task.Due_Date && task.Due_Date >= dayStartTs && task.Due_Date <= dayEndTs;
      var isOverdue = task.Due_Date && task.Due_Date < dayStartTs && task.Status !== 'done';
      var dueBadge = dueThisDay
        ? '<span class="day-due-badge">📌 ' + (currentLang === 'fr' ? 'Échéance' : 'Due today') + '</span>'
        : (isOverdue ? '<span class="day-due-badge overdue">⚠️ ' + (currentLang === 'fr' ? 'En retard' : 'Overdue') + '</span>' : '<span class="day-due-badge ongoing">🔄 ' + (currentLang === 'fr' ? 'En cours' : 'In progress') + '</span>');
      html += '<div class="day-task-row" onclick="openEditTaskModal(' + task.id + ')">';
      html += '<div class="day-task-indicator" style="background:' + stColor + '"></div>';
      html += '<div class="day-task-body">';
      html += '<div class="day-task-title">' + sanitize(task.Title) + ' ' + dueBadge + '</div>';
      html += '<div class="day-task-meta">';
      if (task.Assignee) html += '<span>👤 ' + sanitize(task.Assignee.split(',')[0].trim()) + '</span>';
      html += '<span style="color:' + priorityColors[task.Priority] + ';">▲ ' + task.Priority + '</span>';
      if (taskSubtasks.length > 0) {
        html += '<span>☑️ ' + completedSt + '/' + taskSubtasks.length + '</span>';
      }
      html += '</div>';
      if (taskSubtasks.length > 0) {
        html += '<div class="day-subtasks">';
        taskSubtasks.forEach(function(st) {
          html += '<div class="day-subtask-item">';
          html += '<input type="checkbox" ' + (st.Completed ? 'checked' : '') + ' onclick="event.stopPropagation();toggleSubtask(' + st.id + ', ' + !st.Completed + ', this)" />';
          html += '<span class="' + (st.Completed ? 'st-done' : '') + '">' + sanitize(st.Title) + '</span>';
          if (st.Assignee) html += '<span class="day-st-assignee">👤 ' + sanitize(st.Assignee) + '</span>';
          html += '</div>';
        });
        html += '</div>';
      }
      html += '</div>';
      html += '</div>';
    });
  }

  // Quick add task for this day
  var dateStr = viewDate.getFullYear() + '-' + String(viewDate.getMonth() + 1).padStart(2, '0') + '-' + String(viewDate.getDate()).padStart(2, '0');
  html += '<div class="day-add-task" onclick="openNewTaskForDay(\'' + dateStr + '\')">';
  html += '+ ' + (currentLang === 'fr' ? 'Ajouter une tâche ce jour' : 'Add a task for this day');
  html += '</div>';
  html += '</div>';

  var weekdays = document.getElementById('calendar-weekdays');
  var days = document.getElementById('calendar-days');
  if (weekdays) weekdays.innerHTML = '';
  if (days) { days.innerHTML = html; days.className = 'calendar-days day-view'; }
}

function openNewTaskForDay(dateStr) {
  openNewTaskModalWithDate(dateStr);
}

// =============================================================================
// KANBAN VIEW
// =============================================================================

function setKanbanGroupBy(value) {
  kanbanGroupBy = value;
  renderKanbanView();
}

function setKanbanSort(value) {
  kanbanSort = value;
  saveSetting('kanban_sort', value);
  renderKanbanView();
}

// A1 : tri des fiches d'une colonne Kanban
function sortKanbanTasks(list) {
  var arr = list.slice();
  if (kanbanSort === 'alpha') {
    arr.sort(function(a, b) { return (a.Title || '').localeCompare(b.Title || ''); });
  } else if (kanbanSort === 'alpha-desc') {
    arr.sort(function(a, b) { return (b.Title || '').localeCompare(a.Title || ''); });
  } else if (kanbanSort === 'due') {
    arr.sort(function(a, b) {
      var da = a.Due_Date || null, db = b.Due_Date || null;
      if (da && db) return da - db;
      if (da) return -1;
      if (db) return 1;
      return 0;
    });
  } else if (kanbanSort === 'priority') {
    var po = { high: 0, medium: 1, low: 2 };
    arr.sort(function(a, b) {
      var pa = po[a.Priority] !== undefined ? po[a.Priority] : 3;
      var pb = po[b.Priority] !== undefined ? po[b.Priority] : 3;
      return pa - pb;
    });
  }
  return arr; // 'manual' : ordre d'origine inchangé
}

function toggleKanbanCol(key) {
  collapsedKanbanCols[key] = !collapsedKanbanCols[key];
  renderKanbanView();
}

// A2 : déplier/replier le détail d'une tuile Kanban (clic simple sur le bouton)
function toggleCardExpand(taskId, ev) {
  if (ev) { ev.stopPropagation(); ev.preventDefault(); }
  if (expandedKanbanCards[taskId]) delete expandedKanbanCards[taskId];
  else expandedKanbanCards[taskId] = true;
  renderKanbanView();
}

// Cocher/décocher une sous-tâche depuis le panneau déplié d'une tuile
async function toggleSubtaskFromCard(subtaskId, completed, el) {
  var subtask = subtasks.find(function(st) { return st.id === subtaskId; });
  // Definition of Done : complétion manuelle bloquée tant que des critères restent décochés
  if (subtask && getDoD(subtask).length > 0 && completed && !isDoDFulfilled(subtask)) {
    showToast(t('dodIncomplete'), 'warning');
    if (el) el.checked = false;
    return;
  }
  try {
    var fields = { Completed: completed };
    var clearedDoD = null;
    if (subtask && !completed && getDoD(subtask).length > 0) {
      clearedDoD = copyDoD(subtask).map(function(d) { d.done = false; return d; });
      fields.DefinitionOfDone = JSON.stringify(clearedDoD);
    }
    await grist.docApi.applyUserActions([
      ['UpdateRecord', SUBTASKS_TABLE, subtaskId, fields]
    ]);
    for (var i = 0; i < subtasks.length; i++) {
      if (subtasks[i].id === subtaskId) { subtasks[i].Completed = completed; if (clearedDoD) subtasks[i].DefinitionOfDone = clearedDoD; break; }
    }
    renderKanbanView();
  } catch (e) {
    console.error('toggleSubtaskFromCard:', e);
  }
}

function renderKanbanView() {
  var board = document.getElementById('kanban-board');
  var sel = document.getElementById('kanban-groupby');
  if (sel && sel.value !== kanbanGroupBy) sel.value = kanbanGroupBy;
  var sortSel = document.getElementById('kanban-sort');
  if (sortSel && sortSel.value !== kanbanSort) sortSel.value = kanbanSort;

  var columns = [];
  var filteredTasks = getFilteredTasks();

  if (kanbanGroupBy === 'priority') {
    columns = [
      { key: 'high',   label: '🔴 ' + t('priorityHigh'),   cssClass: 'col-todo',     field: 'Priority' },
      { key: 'medium', label: '🟡 ' + t('priorityMedium'), cssClass: 'col-progress', field: 'Priority' },
      { key: 'low',    label: '🟢 ' + t('priorityLow'),    cssClass: 'col-done',     field: 'Priority' }
    ];
  } else if (kanbanGroupBy === 'project') {
    var projMap = {};
    filteredTasks.forEach(function(task) {
      var pid = task.Project_Id || 0;
      if (!projMap[pid]) {
        projMap[pid] = { key: String(pid), label: pid ? (getProjectName(pid) || 'Projet ' + pid) : (currentLang === 'fr' ? 'Sans projet' : 'No project'), cssClass: 'col-todo', field: 'Project_Id', tasks: [], color: getProjectColor(pid || null) };
      }
      projMap[pid].tasks.push(task);
    });
    columns = Object.values(projMap).sort(function(a, b) { return a.label.localeCompare(b.label); });
  } else if (showArchivedTasks) {
    columns = [
      { key: 'archived', label: currentLang === 'fr' ? '📦 Archives' : '📦 Archives', cssClass: 'col-custom', field: 'Status', color: '#94a3b8' }
    ];
  } else {
    var statuses = getKanbanStatuses();
    columns = statuses.map(function(s) {
      return {
        key: s.key,
        label: (s.emoji ? s.emoji + ' ' : '') + (currentLang === 'fr' ? s.label_fr : s.label_en),
        cssClass: s.cssClass || 'col-custom',
        field: 'Status',
        color: s.color
      };
    });
  }

  var html = '';
  for (var s = 0; s < columns.length; s++) {
    var col = columns[s];
    var colTasks = col.tasks || filteredTasks.filter(function(task) {
      if (col.field === 'Status') return task.Status === col.key;
      if (col.field === 'Priority') return task.Priority === col.key;
      return false;
    });
    colTasks = sortKanbanTasks(colTasks);
    var dotStyle = col.color ? 'display:inline-block;width:10px;height:10px;border-radius:50%;background:' + col.color + ';margin-right:6px;' : 'display:none;';
    var isCollapsed = !!collapsedKanbanCols[col.key];

    if (isCollapsed) {
      var collapsedStyle = col.color ? 'background:' + col.color + '15;border-left:3px solid ' + col.color + ';color:' + col.color + ';' : '';
      html += '<div class="kanban-column kanban-column-collapsed ' + col.cssClass + '" onclick="toggleKanbanCol(\'' + sanitize(col.key) + '\')" title="' + col.label + '" style="' + collapsedStyle + '">';
      html += '<div class="kanban-col-header-collapsed">';
      html += '<span class="col-collapse-icon">⇄</span>';
      html += '<span class="col-collapsed-label">' + col.label + ' (' + colTasks.length + ')</span>';
      html += '</div></div>';
      continue;
    }

    html += '<div class="kanban-column ' + col.cssClass + '">';
    var headerStyle = col.color ? 'border-bottom-color:' + col.color + ';color:' + col.color + ';' : '';
    html += '<div class="kanban-col-header" style="' + headerStyle + '">';
    html += '<div style="display:flex;align-items:center;gap:4px;"><span style="' + dotStyle + '"></span>' + col.label + ' <span class="col-count">' + colTasks.length + '</span></div>';
    html += '<div style="display:flex;align-items:center;gap:4px;">';
    if (kanbanGroupBy === 'status') html += '<button class="col-add" onclick="openNewTaskModal(\'' + col.key + '\')" title="' + (currentLang === 'fr' ? 'Nouvelle tâche' : 'New task') + '">+</button>';
    var collapseColor = col.color ? 'color:' + col.color + ';background:white;' : '';
    html += '<button class="col-add" onclick="toggleKanbanCol(\'' + sanitize(col.key) + '\')" title="' + (currentLang === 'fr' ? 'Réduire' : 'Collapse') + '" style="' + collapseColor + '">⇄</button>';
    html += '</div>';
    html += '</div>';
    html += '<div class="kanban-cards" data-groupby="' + kanbanGroupBy + '" data-value="' + sanitize(col.key) + '" data-field="' + col.field + '" ondragover="onDragOver(event)" ondrop="onDrop(event)" ondragleave="onDragLeave(event)">';

    if (colTasks.length === 0) {
      html += '<div class="kanban-empty"><div class="kanban-empty-icon">📝</div>' + t('noTasks') + '</div>';
    } else {
      for (var i = 0; i < colTasks.length; i++) {
        html += renderTaskCard(colTasks[i]);
      }
    }

    html += '</div>';
    if (kanbanGroupBy === 'status') html += '<button class="kanban-add-btn" onclick="openNewTaskModal(\'' + col.key + '\')">' + t('addTask') + '</button>';
    html += '</div>';
  }

  board.innerHTML = html;
}

function renderTaskCard(task) {
  var cd = cardDisplaySettings;
  var overdueHtml = isOverdue(task) ? ' <span class="overdue-badge">' + t('overdue') + '</span>' : '';
  var taskSubtasks = getVisibleTaskSubtasks(task.id);
  var progressPct = getTaskProgress(task);
  var completedCount = taskSubtasks.filter(function(st) { return st.Completed; }).length;
  var blocked = isTaskBlocked(task.id);
  var taskComments = getTaskComments(task.id);

  var priorityClass = 'priority-' + (task.Priority || 'medium');
  var projColor = getProjectColor(task.Project_Id);
  var projName = getProjectName(task.Project_Id);
  var html = '<div class="task-card ' + priorityClass + (blocked ? ' task-blocked' : '') + '" draggable="true" ondragstart="onDragStart(event, ' + task.id + ')" data-id="' + task.id + '" ondblclick="openEditTaskModal(' + task.id + ')" style="border-left:none;display:flex;flex-direction:row;padding:0;overflow:visible;">';
  html += '<div class="task-card-project-bar" style="background:' + projColor + ';min-width:22px;max-width:22px;display:flex;align-items:center;justify-content:center;writing-mode:vertical-rl;text-orientation:mixed;flex-shrink:0;border-radius:14px 0 0 14px;padding:8px 0;">';
  if (projName) html += '<span style="color:white;font-size:9px;font-weight:700;letter-spacing:0.5px;white-space:nowrap;">' + sanitize(projName) + '</span>';
  html += '</div>';
  html += '<div style="flex:1;padding:10px 12px;min-width:0;">';

  if (blocked) {
    var blockers = getTaskDependencies(task.id).filter(function(b) { return b && b.Status !== 'done'; });
    html += '<div class="blocked-badge">🔒 ' + t('blockedBy') + ' ' + blockers.map(function(b) { return sanitize(b.Title); }).join(', ') + '</div>';
  }

  html += '<div class="task-card-header">';
  html += '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">';
  html += '<div class="task-card-title" style="cursor:pointer;" onclick="openEditTaskModal(' + task.id + ')">' + sanitize(task.Title) + '</div>';
  if (cd.priority) html += '<span class="priority-badge priority-' + (task.Priority || 'medium') + '" style="font-size:11px;">' + priorityLabel(task.Priority) + '</span>';
  html += '</div>';
  html += '<div class="task-card-actions">';
  var _statusDef = getKanbanStatuses().find(function(st) { return st.key === task.Status; });
  var _statusColor = _statusDef ? _statusDef.color : '#94a3b8';
  html += '<span class="task-card-status-badge" style="background:' + _statusColor + '20;color:' + _statusColor + ';">' + statusLabel(task.Status) + '</span>';
  var _isExpanded = !!expandedKanbanCards[task.id];
  html += '<button class="btn-icon task-card-expand-btn" onclick="event.stopPropagation();toggleCardExpand(' + task.id + ', event)" title="' + (currentLang === 'fr' ? 'Détails' : 'Details') + '">' + (_isExpanded ? '🔼' : '🔽') + '</button>';
  if (isOwner) html += '<button class="btn-icon" onclick="deleteTask(' + task.id + ')" title="' + t('delete') + '">🗑️</button>';
  html += '</div></div>';

  if (cd.description && task.Description) {
    html += '<div class="task-card-desc">' + sanitize(task.Description) + '</div>';
  }

  if (cd.subtasks && taskSubtasks.length > 0) {
    var barClass = progressPct === 100 ? 'bar-done' : (progressPct >= 50 ? 'bar-progress' : 'bar-todo');
    html += '<div class="task-card-subtasks">';
    html += '<div class="subtask-progress-row">';
    html += '<span class="subtask-icon">☑️</span>';
    html += '<span class="subtask-count">' + completedCount + '/' + taskSubtasks.length + '</span>';
    html += '<div class="subtask-progress-bar"><div class="subtask-progress-fill ' + barClass + '" style="width:' + progressPct + '%"></div></div>';
    html += '</div></div>';
  }

  html += '<div class="task-card-row">';
  if (cd.date && task.Due_Date) {
    html += '<span class="task-card-date">📅 ' + formatDate(task.Due_Date) + overdueHtml + '</span>';
  }
  if (cd.comments && taskComments.length > 0) {
    html += '<span class="task-card-comments">💬 ' + taskComments.length + '</span>';
  }
  var totalTime = getTaskTotalTime(task.id);
  var isTimerRunning = !!activeTimers[task.id];
  if (cd.time && (totalTime > 0 || isTimerRunning)) {
    html += '<span class="task-card-time' + (isTimerRunning ? ' timer-running' : '') + '">⏱️ ' + formatDurationShort(totalTime) + (isTimerRunning ? ' ●' : '') + '</span>';
  }
  if (task.Recurrence && task.Recurrence !== 'none') {
    var recLabel = recurrenceSymbol(task.Recurrence);
    html += '<span class="task-card-recurrence">' + recLabel + '</span>';
  }
  html += '</div>';

  if (cd.assignee && task.Assignee) {
    html += '<div class="task-card-row">';
    var assigneeList = task.Assignee.split(',').map(function(a) { return a.trim(); }).filter(Boolean);
    if (raciEnabled) {
      for (var ai = 0; ai < assigneeList.length; ai++) {
        html += '<span class="task-card-assignee raci-badge raci-r">R ' + sanitize(getUserDisplayName(assigneeList[ai])) + '</span>';
      }
      var raciRoles = [
        { arr: task.Accountable, cls: 'raci-a', letter: 'A' },
        { arr: task.Consulted,   cls: 'raci-c', letter: 'C' },
        { arr: task.Informed,    cls: 'raci-i', letter: 'I' }
      ];
      for (var ri = 0; ri < raciRoles.length; ri++) {
        if (raciRoles[ri].arr) {
          var rList = raciRoles[ri].arr.split(',').map(function(a) { return a.trim(); }).filter(Boolean);
          for (var rj = 0; rj < rList.length; rj++) {
            html += '<span class="task-card-assignee raci-badge ' + raciRoles[ri].cls + '">' + raciRoles[ri].letter + ' ' + sanitize(getUserDisplayName(rList[rj])) + '</span>';
          }
        }
      }
    } else {
      for (var ai2 = 0; ai2 < assigneeList.length; ai2++) {
        html += '<span class="task-card-assignee">👤 ' + sanitize(getUserDisplayName(assigneeList[ai2])) + '</span>';
      }
    }
    html += '</div>';
  }

  if ((cd.category && task.Category) || (cd.tags && task.Tag)) {
    html += '<div class="task-card-row" style="gap:6px;flex-wrap:wrap;">';
    if (cd.category && task.Category) {
      var catObj = categories.find(function(c) { return c.Name === task.Category; });
      var catColor = catObj ? catObj.Color : '#6366f1';
      html += '<span style="font-size:10px;color:' + catColor + ';font-weight:700;">| ' + sanitize(task.Category) + '</span>';
    }
    if (cd.tags && task.Tag) {
      var tagList = task.Tag.split(',').map(function(tg) { return tg.trim(); }).filter(Boolean);
      for (var ti = 0; ti < tagList.length; ti++) {
        var tagObj = tags.find(function(tg) { return tg.Name === tagList[ti]; });
        var tagColor = tagObj ? tagObj.Color : '#94a3b8';
        html += '<span style="font-size:10px;padding:1px 6px;border:1px solid ' + tagColor + '40;border-radius:4px;color:' + tagColor + ';font-weight:600;">' + sanitize(tagList[ti]) + '</span>';
      }
    }
    html += '</div>';
  }

  if (task.Status === 'done') {
    html += '<div class="task-card-row" style="justify-content:flex-end;"><button class="btn btn-sm" style="font-size:10px;padding:2px 8px;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:6px;cursor:pointer;" onclick="event.stopPropagation();archiveTask(' + task.id + ')" title="' + (currentLang === 'fr' ? 'Archiver' : 'Archive') + '">📦 ' + (currentLang === 'fr' ? 'Archiver' : 'Archive') + '</button></div>';
  }
  if (task.Status === 'archived') {
    html += '<div class="task-card-row" style="justify-content:flex-end;"><button class="btn btn-sm" style="font-size:10px;padding:2px 8px;background:#dbeafe;border:1px solid #93c5fd;border-radius:6px;cursor:pointer;" onclick="event.stopPropagation();restoreTask(' + task.id + ')" title="' + (currentLang === 'fr' ? 'Restaurer' : 'Restore') + '">♻️ ' + (currentLang === 'fr' ? 'Restaurer' : 'Restore') + '</button></div>';
  }

  // A2 : panneau de détail déplié (description complète, sous-tâches, commentaires)
  if (_isExpanded) {
    var _fr = currentLang === 'fr';
    html += '<div class="task-card-detail" onclick="event.stopPropagation();">';
    if (task.Description) {
      html += '<div class="tcd-section"><div class="tcd-label">' + (_fr ? 'Description' : 'Description') + '</div>';
      html += '<div class="tcd-desc">' + sanitize(task.Description) + '</div></div>';
    }
    if (taskSubtasks.length > 0) {
      html += '<div class="tcd-section"><div class="tcd-label">' + (_fr ? 'Sous-tâches' : 'Subtasks') + ' (' + completedCount + '/' + taskSubtasks.length + ')</div>';
      taskSubtasks.forEach(function(st) {
        html += '<label class="tcd-subtask"><input type="checkbox" ' + (st.Completed ? 'checked' : '') + ' onclick="event.stopPropagation();toggleSubtaskFromCard(' + st.id + ', this.checked, this)">';
        html += '<span' + (st.Completed ? ' style="text-decoration:line-through;color:#94a3b8;"' : '') + '>' + sanitize(st.Title) + '</span>';
        if (st.Due_Date) html += '<span class="tcd-st-date">📅 ' + formatDate(st.Due_Date) + '</span>';
        html += '</label>';
      });
      html += '</div>';
    }
    if (taskComments.length > 0) {
      html += '<div class="tcd-section"><div class="tcd-label">' + (_fr ? 'Commentaires' : 'Comments') + ' (' + taskComments.length + ')</div>';
      taskComments.slice(-5).forEach(function(cmt) {
        html += '<div class="tcd-comment"><span class="tcd-c-author">👤 ' + sanitize(cmt.Author || '?') + '</span> ';
        html += '<span class="tcd-c-time">' + formatTimeAgo(cmt.Created_At) + '</span>';
        html += '<div class="tcd-c-content">' + sanitize(cmt.Content) + '</div></div>';
      });
      html += '</div>';
    }
    if (!task.Description && taskSubtasks.length === 0 && taskComments.length === 0) {
      html += '<div style="color:#94a3b8;font-size:12px;padding:4px 0;">' + (_fr ? 'Aucun détail pour le moment' : 'No details yet') + '</div>';
    }
    html += '<button class="btn btn-sm" style="margin-top:8px;font-size:11px;padding:3px 10px;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:6px;cursor:pointer;" onclick="event.stopPropagation();openEditTaskModal(' + task.id + ')">✏️ ' + (_fr ? 'Éditer la tâche' : 'Edit task') + '</button>';
    html += '</div>';
  }

  html += '</div></div>';
  return html;
}

async function archiveTask(taskId) {
  try {
    var statusCol = getColumnName('tasks', 'status');
    var task = tasks.find(function(t) { return t.id === taskId; });
    var oldStatus = task ? task.Status : '';
    await grist.docApi.applyUserActions([['UpdateRecord', TASKS_TABLE, taskId, { [statusCol]: 'archived' }]]);
    if (task) task.Status = 'archived';
    showToast(currentLang === 'fr' ? 'Tâche archivée' : 'Task archived', 'success');
    logActivity('task_archived', taskId, task ? task.Title : '', '');
    if (task && oldStatus !== 'archived') {
      await evaluateAutomationRules(Object.assign({}, task, { Status: 'archived' }), { status: { from: oldStatus, to: 'archived' } });
    }
    refreshAllViews();
  } catch (e) {
    showToast('Error: ' + e.message, 'error');
  }
}

async function restoreTask(taskId) {
  try {
    var statusCol = getColumnName('tasks', 'status');
    var task = tasks.find(function(t) { return t.id === taskId; });
    var oldStatus = task ? task.Status : '';
    await grist.docApi.applyUserActions([['UpdateRecord', TASKS_TABLE, taskId, { [statusCol]: 'todo' }]]);
    if (task) task.Status = 'todo';
    showToast(currentLang === 'fr' ? 'Tâche restaurée' : 'Task restored', 'success');
    logActivity('task_restored', taskId, task ? task.Title : '', '');
    if (task && oldStatus !== 'todo') {
      await evaluateAutomationRules(Object.assign({}, task, { Status: 'todo' }), { status: { from: oldStatus, to: 'todo' } });
    }
    refreshAllViews();
  } catch (e) {
    showToast('Error: ' + e.message, 'error');
  }
}

function toggleArchiveView() {
  showArchivedTasks = !showArchivedTasks;
  updateArchiveButton();
  refreshAllViews();
}

function updateArchiveButton() {
  var btn = document.getElementById('archive-toggle-btn');
  if (!btn) return;
  var archivedCount = tasks.filter(function(t) { return t.Status === 'archived'; }).length;
  btn.classList.toggle('active', showArchivedTasks);
  if (showArchivedTasks) {
    btn.innerHTML = (currentLang === 'fr' ? '← Retour aux tâches' : '← Back to tasks');
    btn.style.background = '#3b82f6';
    btn.style.color = 'white';
    btn.style.borderColor = '#3b82f6';
  } else {
    btn.innerHTML = '📦 Archives' + (archivedCount > 0 ? ' <span style="background:#ef4444;color:white;border-radius:50%;padding:1px 6px;font-size:10px;margin-left:4px;">' + archivedCount + '</span>' : '');
    btn.style.background = '#f8fafc';
    btn.style.color = '';
    btn.style.borderColor = '#e2e8f0';
  }
}

// =============================================================================
// DRAG & DROP
// =============================================================================

var draggedTaskId = null;

var _kanbanScrollInterval = null;
function onDragStart(e, taskId) {
  draggedTaskId = taskId;
  e.target.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  var board = document.getElementById('kanban-board');
  if (board) {
    document.addEventListener('dragover', function _autoScroll(ev) {
      var rect = board.getBoundingClientRect();
      var edge = 60;
      var speed = 8;
      if (ev.clientX > rect.right - edge) board.scrollLeft += speed;
      else if (ev.clientX < rect.left + edge) board.scrollLeft -= speed;
      if (!draggedTaskId) document.removeEventListener('dragover', _autoScroll);
    });
  }
}

function onDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function onDragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}

async function onDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  var field = e.currentTarget.getAttribute('data-field') || 'Status';
  var newValue = e.currentTarget.getAttribute('data-value');
  if (draggedTaskId && newValue) {
    if (field === 'Status' && newValue === 'done' && isTaskBlocked(draggedTaskId)) {
      var blockers = getTaskDependencies(draggedTaskId).filter(function(b) { return b && b.Status !== 'done'; });
      var blockerNames = blockers.map(function(b) { return b.Title; }).join(', ');
      showToast((currentLang === 'fr' ? 'Impossible : tâche bloquée par ' : 'Cannot move: blocked by ') + blockerNames, 'error');
      draggedTaskId = null;
      return;
    }
    try {
      var draggedTask = tasks.find(function(t) { return t.id === draggedTaskId; });
      var oldVal = draggedTask ? draggedTask[field] : '';
      var record = {};
      if (field === 'Project_Id') {
        record[field] = newValue ? parseInt(newValue) : null;
      } else {
        record[field] = newValue;
      }
      await grist.docApi.applyUserActions([['UpdateRecord', TASKS_TABLE, draggedTaskId, record]]);
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === draggedTaskId) {
          tasks[i][field] = record[field];
          break;
        }
      }
      showToast(t('taskMoved'), 'success');
      if (draggedTask && oldVal !== newValue) {
        var dropChanges = {};
        if (field === 'Status') dropChanges.status = { from: oldVal, to: newValue };
        if (field === 'Priority') dropChanges.priority = { from: oldVal, to: newValue };
        if (Object.keys(dropChanges).length > 0) {
          await evaluateAutomationRules(Object.assign({}, draggedTask, record), dropChanges);
        }
        logActivity('status_changed', draggedTaskId, draggedTask.Title, oldVal + ' → ' + newValue);
      }
      refreshAllViews();
    } catch (err) {
      console.error('Error moving task:', err);
    }
  }
  draggedTaskId = null;
}

// =============================================================================
// TABLE VIEW
// =============================================================================

var tableSortField = null;
var tableSortAsc = true;
function sortTable(field) {
  if (tableSortField === field) { tableSortAsc = !tableSortAsc; }
  else { tableSortField = field; tableSortAsc = true; }
  renderTableView();
}
function renderTableView() {
  // B3 : mémoriser l'état avant reconstruction (sous-tâches dépliées + scroll)
  var _prevView = document.getElementById('table-view');
  var _expandedParents = [];
  if (_prevView) {
    _prevView.querySelectorAll('.toggle-btn.expanded').forEach(function(b) {
      _expandedParents.push(b.id.replace('toggle-', ''));
    });
  }
  var _scrollEl = document.scrollingElement || document.documentElement;
  var _scrollTop = _scrollEl ? _scrollEl.scrollTop : (window.scrollY || 0);

  // B2 : (re)construire les multi-filtres statut/priorité
  renderMultiFilter('status');
  renderMultiFilter('priority');

  var search = (document.getElementById('table-search').value || '').toLowerCase();

  var filtered = getFilteredTasks().filter(function(task) {
    if (tableFilterStatuses.length && tableFilterStatuses.indexOf(task.Status) === -1) return false;
    if (tableFilterPriorities.length && tableFilterPriorities.indexOf(task.Priority) === -1) return false;
    if (search) {
      var text = (task.Title + ' ' + task.Description + ' ' + task.Assignee + ' ' + getTaskCustomFieldsText(task.id)).toLowerCase();
      if (text.indexOf(search) === -1) return false;
    }
    return true;
  });

  if (tableSortField) {
    var dir = tableSortAsc ? 1 : -1;
    filtered.sort(function(a, b) {
      var va, vb;
      switch (tableSortField) {
        case 'Title': va = (a.Title || '').toLowerCase(); vb = (b.Title || '').toLowerCase(); break;
        case 'Project': va = getProjectName(a.Project_Id).toLowerCase(); vb = getProjectName(b.Project_Id).toLowerCase(); break;
        case 'Status': va = a.Status || ''; vb = b.Status || ''; break;
        case 'Priority': var po = {high:0,medium:1,low:2}; va = po[a.Priority] !== undefined ? po[a.Priority] : 3; vb = po[b.Priority] !== undefined ? po[b.Priority] : 3; break;
        case 'Assignee': va = (a.Assignee || '').toLowerCase(); vb = (b.Assignee || '').toLowerCase(); break;
        case 'Start_Date': va = a.Start_Date || 0; vb = b.Start_Date || 0; break;
        case 'Due_Date': va = a.Due_Date || 0; vb = b.Due_Date || 0; break;
        default: va = ''; vb = '';
      }
      if (va < vb) return -1 * dir;
      if (va > vb) return 1 * dir;
      return 0;
    });
  }

  function sortIcon(field) { return tableSortField === field ? (tableSortAsc ? ' ▲' : ' ▼') : ' ⇅'; }
  var thStyle = 'cursor:pointer;user-select:none;';
  var html = '<table class="data-table">';
  html += '<thead><tr>';
  html += '<th style="' + thStyle + '" onclick="sortTable(\'Title\')">' + t('colTaskName') + sortIcon('Title') + '</th>';
  html += '<th style="' + thStyle + '" onclick="sortTable(\'Project\')">' + (currentLang === 'fr' ? 'Projet' : 'Project') + sortIcon('Project') + '</th>';
  html += '<th style="' + thStyle + '" onclick="sortTable(\'Status\')">' + t('colStatus') + sortIcon('Status') + '</th>';
  html += '<th style="' + thStyle + '" onclick="sortTable(\'Priority\')">' + t('colPriority') + sortIcon('Priority') + '</th>';
  html += '<th>' + t('tag') + '</th>';
  html += '<th style="' + thStyle + '" onclick="sortTable(\'Assignee\')">' + t('colAssignee') + sortIcon('Assignee') + '</th>';
  html += '<th style="' + thStyle + '" onclick="sortTable(\'Start_Date\')">' + t('colStartDate') + sortIcon('Start_Date') + '</th>';
  html += '<th style="' + thStyle + '" onclick="sortTable(\'Due_Date\')">' + t('colDueDate') + sortIcon('Due_Date') + '</th>';
  html += '<th>' + t('colActions') + '</th>';
  html += '</tr></thead><tbody>';

  for (var i = 0; i < filtered.length; i++) {
    var task = filtered[i];
    var statusClass = 'status-' + task.Status;
    var overdueHtml = isOverdue(task) ? ' ⚠️' : '';
    var dotClass = task.Priority === 'high' ? 'dot-high' : (task.Priority === 'medium' ? 'dot-medium' : 'dot-low');

    var taskSubtasks = getVisibleTaskSubtasks(task.id);
    var completedSt = taskSubtasks.filter(function(st) { return st.Completed; }).length;

    var taskProjColor = getProjectColor(task.Project_Id);
    var taskProjName = getProjectName(task.Project_Id);
    html += '<tr class="task-row clickable-row" onclick="openEditTaskModal(' + task.id + ')">';
    html += '<td><div style="display:flex;align-items:center;gap:8px;border-left:3px solid ' + taskProjColor + ';padding-left:6px;">';
    if (taskSubtasks.length > 0) {
      html += '<button class="toggle-btn" onclick="event.stopPropagation(); toggleSubtasks(' + task.id + ')" id="toggle-' + task.id + '">▶</button>';
    } else {
      html += '<span style="width:18px;"></span>';
    }
    html += '<div><div style="font-weight:700;">' + sanitize(task.Title) + '</div>';
    if (task.Description) html += '<div style="font-size:11px;color:#94a3b8;margin-top:2px;">' + sanitize(task.Description).substring(0, 80) + '</div>';
    html += '</div></div></td>';
    html += '<td>' + (taskProjName ? '<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;border-radius:50%;background:' + taskProjColor + ';display:inline-block;"></span>' + sanitize(taskProjName) + '</span>' : '') + '</td>';
    html += '<td><span class="status-badge ' + statusClass + '">● ' + statusLabel(task.Status) + '</span>';
    if (taskSubtasks.length > 0) html += ' <span class="st-badge">' + completedSt + '/' + taskSubtasks.length + '</span>';
    html += '</td>';
    html += '<td><span class="priority-dot ' + dotClass + '"></span> ' + priorityLabel(task.Priority) + '</td>';
    var taskTagList = task.Tag ? task.Tag.split(',').map(function(tg) { return tg.trim(); }).filter(Boolean) : [];
    html += '<td style="white-space:nowrap;">' + taskTagList.map(function(tg) {
      var tgObj = tags.find(function(x) { return x.Name === tg; });
      var tgColor = tgObj ? tgObj.Color : '#94a3b8';
      return '<span style="font-size:10px;padding:1px 6px;border:1px solid ' + tgColor + '40;border-radius:4px;color:' + tgColor + ';font-weight:600;">' + sanitize(tg) + '</span>';
    }).join(' ') + '</td>';
    var assigneeDisplay = task.Assignee ? task.Assignee.split(',').map(function(a) { return getUserDisplayName(a.trim()); }).join(', ') : '';
    html += '<td>' + (assigneeDisplay ? '<span class="assignee-chip">👤 ' + sanitize(assigneeDisplay) + '</span>' : '') + '</td>';
    html += '<td>' + (task.Start_Date ? formatDate(task.Start_Date) : t('notDefined')) + '</td>';
    html += '<td style="' + (isOverdue(task) ? 'color:#dc2626;font-weight:700;' : '') + '">' + (task.Due_Date ? formatDate(task.Due_Date) + overdueHtml : t('noDate')) + '</td>';
    html += '<td onclick="event.stopPropagation();">';
    if (isOwner) html += '<button class="btn-icon" onclick="deleteTask(' + task.id + ')">🗑️</button>';
    html += '</td>';
    html += '</tr>';

    // Subtasks rows (hidden by default) — B1 : colonnes enrichies, sans pastille près du titre
    var _nowSec = Math.floor(Date.now() / 1000);
    for (var si = 0; si < taskSubtasks.length; si++) {
      var st = taskSubtasks[si];
      html += '<tr class="subtask-row clickable-row" data-parent="' + task.id + '" style="display:none;cursor:pointer;" onclick="openEditTaskModal(' + task.id + ', true); setTimeout(function(){startEditSubtask(' + st.id + ')},100);">';
      var stStatus = st.Status || (st.Completed ? 'done' : 'todo');
      var stDotClass = st.Priority === 'high' ? 'dot-high' : (st.Priority === 'medium' ? 'dot-medium' : 'dot-low');
      var stAssignee = st.Assignee ? st.Assignee.split(',').map(function(a) { return getUserDisplayName(a.trim()); }).join(', ') : '';
      var stOverdue = st.Due_Date && !st.Completed && st.Due_Date < _nowSec;
      // Colonne Tâche (titre)
      var stMilestoneMark = (st.Type === 'milestone') ? '<span title="Jalon" style="color:#7c3aed;margin-right:3px;">◆</span>' : '';
      html += '<td><div class="subtask-indent"><span class="subtask-arrow">└</span><input type="checkbox" class="subtask-checkbox" ' + (st.Completed ? 'checked' : '') + ' onclick="event.stopPropagation();toggleSubtask(' + st.id + ', ' + !st.Completed + ', this)" style="cursor:pointer;width:14px;height:14px;margin-right:6px;flex-shrink:0;" />' + stMilestoneMark + '<span class="subtask-name' + (st.Completed ? ' completed' : '') + '">' + sanitize(st.Title) + '</span></div></td>';
      // Projet (vide : hérité du parent)
      html += '<td></td>';
      // Statut (couleur réelle du statut personnalisé)
      var stStatusDef = getKanbanStatuses().find(function(s) { return s.key === stStatus; });
      var stStatusColor = stStatusDef && stStatusDef.color ? stStatusDef.color : '#94a3b8';
      html += '<td><span class="status-badge" style="background:' + stStatusColor + '20;color:' + stStatusColor + ';">● ' + statusLabel(stStatus) + '</span></td>';
      // Priorité
      html += '<td><span class="priority-dot ' + stDotClass + '"></span> ' + priorityLabel(st.Priority) + '</td>';
      var stTagList = st.Tag ? st.Tag.split(',').map(function(tg) { return tg.trim(); }).filter(Boolean) : [];
      html += '<td style="white-space:nowrap;">' + stTagList.map(function(tg) {
        var tgObj = tags.find(function(x) { return x.Name === tg; });
        var tgColor = tgObj ? tgObj.Color : '#94a3b8';
        return '<span style="font-size:10px;padding:1px 6px;border:1px solid ' + tgColor + '40;border-radius:4px;color:' + tgColor + ';font-weight:600;">' + sanitize(tg) + '</span>';
      }).join(' ') + '</td>';
      // Assigné à
      html += '<td>' + (stAssignee ? '<span class="assignee-chip">👤 ' + sanitize(stAssignee) + '</span>' : '') + '</td>';
      // Date de début
      html += '<td>' + (st.Start_Date ? formatDate(st.Start_Date) : '') + '</td>';
      // Échéance
      html += '<td style="' + (stOverdue ? 'color:#dc2626;font-weight:700;' : '') + '">' + (st.Due_Date ? formatDate(st.Due_Date) + (stOverdue ? ' ⚠️' : '') : '') + '</td>';
      // Actions
      html += '<td></td>';
      html += '</tr>';
    }
  }

  if (filtered.length === 0) {
    html += '<tr><td colspan="9" style="text-align:center;padding:30px;color:#94a3b8;">' + t('noTasks') + '</td></tr>';
  }

  html += '</tbody></table>';
  document.getElementById('table-view').innerHTML = html;

  // B3 : restaurer le dépliage des sous-tâches puis la position de scroll
  _expandedParents.forEach(function(pid) {
    var rows = document.querySelectorAll('.subtask-row[data-parent="' + pid + '"]');
    var btn = document.getElementById('toggle-' + pid);
    for (var i = 0; i < rows.length; i++) rows[i].style.display = 'table-row';
    if (btn) { btn.textContent = '▼'; btn.classList.add('expanded'); }
  });
  if (_scrollEl && _scrollTop) _scrollEl.scrollTop = _scrollTop;
}

function toggleSubtasks(taskId) {
  var rows = document.querySelectorAll('.subtask-row[data-parent="' + taskId + '"]');
  var btn = document.getElementById('toggle-' + taskId);
  var isExpanded = rows.length > 0 && rows[0].style.display !== 'none';
  
  for (var i = 0; i < rows.length; i++) {
    rows[i].style.display = isExpanded ? 'none' : 'table-row';
  }
  if (btn) {
    btn.textContent = isExpanded ? '▶' : '▼';
    btn.classList.toggle('expanded', !isExpanded);
  }
}

function expandAllSubtasks() {
  var rows = document.querySelectorAll('.subtask-row');
  var btns = document.querySelectorAll('.toggle-btn');
  for (var i = 0; i < rows.length; i++) rows[i].style.display = 'table-row';
  for (var i = 0; i < btns.length; i++) { btns[i].textContent = '▼'; btns[i].classList.add('expanded'); }
}

function collapseAllSubtasks() {
  var rows = document.querySelectorAll('.subtask-row');
  var btns = document.querySelectorAll('.toggle-btn');
  for (var i = 0; i < rows.length; i++) rows[i].style.display = 'none';
  for (var i = 0; i < btns.length; i++) { btns[i].textContent = '▶'; btns[i].classList.remove('expanded'); }
}

async function toggleSubtaskFromTable(subtaskId, completed) {
  // Find parent task ID before updating
  var subtask = subtasks.find(function(st) { return st.id === subtaskId; });
  var parentTaskId = subtask ? subtask.Parent_Task_Id : null;
  
  // Remember which toggles are expanded
  var expandedTasks = [];
  document.querySelectorAll('.toggle-btn.expanded').forEach(function(btn) {
    var taskId = btn.id.replace('toggle-', '');
    expandedTasks.push(parseInt(taskId));
  });
  
  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', SUBTASKS_TABLE, subtaskId, { Completed: completed }]
    ]);
    // Update local state
    for (var i = 0; i < subtasks.length; i++) {
      if (subtasks[i].id === subtaskId) {
        subtasks[i].Completed = completed;
        break;
      }
    }
    // Refresh table view
    renderTableView();
    
    // Restore expanded toggles
    expandedTasks.forEach(function(taskId) {
      var rows = document.querySelectorAll('.subtask-row[data-parent="' + taskId + '"]');
      var btn = document.getElementById('toggle-' + taskId);
      for (var i = 0; i < rows.length; i++) {
        rows[i].style.display = 'table-row';
      }
      if (btn) {
        btn.textContent = '▼';
        btn.classList.add('expanded');
      }
    });
    
    // If modal is open, refresh it too
    var modal = document.getElementById('edit-task-modal');
    if (modal && modal.style.display !== 'none' && parentTaskId) {
      openEditTaskModal(parentTaskId);
    }
  } catch (e) {
    console.error('Error toggling subtask:', e);
  }
}

// =============================================================================
// GANTT VIEW
// =============================================================================

function getISOWeek(date) {
  var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function getWeekStart(year, weekNum) {
  var jan4 = new Date(year, 0, 4);
  var dayOfWeek = jan4.getDay() || 7;
  var monday = new Date(jan4);
  monday.setDate(jan4.getDate() - dayOfWeek + 1 + (weekNum - 1) * 7);
  return monday;
}

function toggleGanttSubtasks(taskId) {
  if (expandedGanttTasks[taskId]) delete expandedGanttTasks[taskId];
  else expandedGanttTasks[taskId] = true;
  renderGanttView();
}

// Sous-tâches du Gantt : seulement celles avec une Due_Date (sinon impossible à positionner)
function getGanttSubtasks(taskId) {
  return getVisibleTaskSubtasks(taskId).filter(function(st) { return st.Due_Date; });
}

// Construit la <td> de libellé d'une sous-tâche (indentée, allégée, cliquable).
// La dépendance (et les méta) sont sur une 2e ligne sous le titre : la colonne
// de 220px avec overflow:hidden rognait l'indicateur placé après le titre.
function renderGanttSubtaskLabelCell(st, parentTaskId) {
  var completedClass = st.Completed ? ' style="text-decoration:line-through;opacity:0.5;"' : '';
  var html = '<td class="gantt-task-label gantt-subtask-cell gantt-clickable-label" onclick="openEditTaskModal(' + parentTaskId + ')"' + completedClass + '>';
  html += '<span style="display:block;white-space:normal;overflow-wrap:break-word;" title="' + sanitize(st.Title) + '">';
  html += '<span style="font-size:10px;color:#94a3b8;margin-right:4px;">' + (isMilestone(st) ? '◆' : '↳') + '</span>';
  html += '<span style="font-size:11px;' + (isMilestone(st) ? 'font-weight:700;' : '') + '">' + sanitize(st.Title) + '</span>';
  html += '</span>';
  // A1 : indicateur de dépendance entre sous-tâches (2e ligne, toujours visible)
  var meta = '';
  var stBlocker = getSubtaskBlocker(st);
  if (stBlocker) {
    var depColor = stBlocker.Completed ? '#94a3b8' : '#ef4444';
    meta += '<span style="font-size:9px;color:' + depColor + ';" title="' + (currentLang === 'fr' ? 'Dépend de' : 'Depends on') + ' : ' + sanitize(stBlocker.Title) + '">🔗 ' + sanitize(stBlocker.Title) + '</span>';
  }
  if (st.Due_Date) meta += '<span style="font-size:9px;color:#94a3b8;margin-left:6px;">📅 ' + formatDate(st.Due_Date) + '</span>';
  if (st.Assignee) meta += '<span style="font-size:9px;color:#94a3b8;margin-left:4px;">👤 ' + sanitize(st.Assignee).split(',')[0].trim().substring(0, 10) + '</span>';
  if (meta) html += '<span style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px;">' + meta + '</span>';
  html += '</td>';
  return html;
}

function isMilestone(st) { return st && st.Type === 'milestone'; }

// Couleur de barre pour une sous-tâche (verte si complétée, sinon hérite du statut parent)
// B2 : un jalon reçoit en plus la classe gantt-bar-milestone (rendu losange, tous modes)
function ganttSubtaskBarClass(st, parentTask) {
  var base;
  if (st.Completed) base = 'gantt-bar-done';
  else if (parentTask.Status === 'progress') base = 'gantt-bar-progress';
  else base = 'gantt-bar-todo';
  var cls = base + (isMilestone(st) ? ' gantt-bar-milestone' : '');
  if (isSubtaskBlocked(st)) cls += ' gantt-bar-st-blocked';   // dépendance non satisfaite
  return cls;
}

// Bornes de la sous-tâche. B2 : un jalon est une date unique (Due_Date) → start = end.
function getGanttSubtaskRange(st, parentTask) {
  var stEnd = st.Due_Date ? new Date(st.Due_Date * 1000) : (parentTask.Due_Date ? new Date(parentTask.Due_Date * 1000) : null);
  if (!stEnd) return { start: new Date(), end: new Date() };
  var stStart;
  if (isMilestone(st)) {
    stStart = new Date(stEnd); // jalon : un seul jour
  } else {
    stStart = st.Start_Date ? new Date(st.Start_Date * 1000) : new Date(stEnd);
    if (stStart > stEnd) stStart = new Date(stEnd);
  }
  stStart.setHours(0, 0, 0, 0);
  stEnd.setHours(23, 59, 59, 999);
  return { start: stStart, end: stEnd };
}

// Slot de toggle à insérer dans la cellule de libellé. Toujours rendu (largeur fixe)
// pour que tous les titres soient alignés, même quand la tâche n'a pas de sous-tâche.
function ganttDepBadge(task) {
  var deps = getTaskDependencies(task.id);
  var blocks = getTasksDependingOn(task.id);
  var html = '';
  if (deps.length > 0) html += ' <span title="' + (currentLang === 'fr' ? 'Dépend de: ' : 'Depends on: ') + deps.map(function(d) { return sanitize(d.Title); }).join(', ') + '" style="font-size:10px;color:#8b5cf6;cursor:help;">🔗' + deps.length + '</span>';
  if (blocks.length > 0) html += ' <span title="' + (currentLang === 'fr' ? 'Bloque: ' : 'Blocks: ') + blocks.map(function(d) { return sanitize(d.Title); }).join(', ') + '" style="font-size:10px;color:#f59e0b;cursor:help;">⏳' + blocks.length + '</span>';
  return html;
}

function ganttChevron(task) {
  if (getGanttSubtasks(task.id).length === 0) {
    return '<span class="gantt-toggle gantt-toggle-empty"></span>';
  }
  var expanded = !!expandedGanttTasks[task.id];
  var icon = expanded ? '▼' : '▶';
  return '<button type="button" class="gantt-toggle' + (expanded ? ' gantt-toggle-open' : '') + '" onclick="event.stopPropagation();toggleGanttSubtasks(' + task.id + ')" title="' + (currentLang === 'fr' ? 'Sous-tâches' : 'Subtasks') + '">' + icon + '</button>';
}

function getTaskExtensionEnd(task) {
  if (task.Auto_Extend && task.Status !== 'done' && task.Status !== 'archived') {
    var now = new Date(); now.setHours(23, 59, 59, 999);
    var dueDate = task.Due_Date ? new Date(task.Due_Date * 1000) : null;
    if (dueDate && now > dueDate) return now;
  }
  if (task.Extension_Date) {
    var ext = new Date(task.Extension_Date * 1000);
    ext.setHours(23, 59, 59, 999);
    return ext;
  }
  return null;
}

function getExtensionBarColor(task) {
  var statuses = getKanbanStatuses();
  for (var si = 0; si < statuses.length; si++) {
    if (statuses[si].key === task.Status && statuses[si].color) return statuses[si].color;
  }
  if (task.Status === 'done') return '#22c55e';
  if (task.Status === 'progress') return '#f59e0b';
  return '#3b82f6';
}

function getGanttBarColor(task) {
  var statuses = getKanbanStatuses();
  for (var si = 0; si < statuses.length; si++) {
    if (statuses[si].key === task.Status && statuses[si].color) return statuses[si].color;
  }
  return '';
}

function getGanttBarClass(task) {
  if (isOverdue(task)) return 'gantt-bar-overdue';
  if (task.Status === 'done') return 'gantt-bar-done';
  if (task.Status === 'progress') return 'gantt-bar-progress';
  return 'gantt-bar-todo';
}

function renderGanttTaskLabel(task) {
  var dotClass = task.Priority === 'high' ? 'dot-high' : (task.Priority === 'medium' ? 'dot-medium' : 'dot-low');
  var assigneeNames = task.Assignee ? task.Assignee.split(',').map(function(a) { return getUserDisplayName(a.trim()); }).join(', ') : '';
  var ganttProjColor = getProjectColor(task.Project_Id);
  var ganttProjName = getProjectName(task.Project_Id);

  var html = '<td class="gantt-task-label gantt-clickable-label" onclick="openEditTaskModal(' + task.id + ')">';
  html += '<div class="task-name">' + ganttChevron(task) + '<span class="priority-dot ' + dotClass + '"></span> <strong>' + sanitize(task.Title) + '</strong>';
  if (ganttProjName) html += ' <span style="display:inline-block;background:' + ganttProjColor + ';color:white;padding:1px 6px;border-radius:4px;font-size:9px;font-weight:700;vertical-align:middle;">' + sanitize(ganttProjName) + '</span>';
  html += ganttDepBadge(task) + '</div>';
  html += '<div class="task-info">';
  if (task.Priority) html += '🔥 ' + priorityLabel(task.Priority);
  if (assigneeNames) html += ' 👤 ' + sanitize(assigneeNames);
  if (task.Due_Date) html += ' 📅 ' + formatDate(task.Due_Date);
  html += '</div></td>';
  return html;
}

// C2/C3 : position en pixels d'une date dans une grille de colonnes.
// Au lieu de coller les barres sur des colonnes entieres, on interpole a
// l'interieur de la colonne : une tache qui demarre un vendredi ne part plus du
// lundi de sa semaine, ni du 1er de son mois.
function ganttPxForDate(date, cols, colWidth) {
  var ts = date.getTime();
  for (var i = 0; i < cols.length; i++) {
    var cs = cols[i].start.getTime(), ce = cols[i].end.getTime();
    if (ts < cs) return i * colWidth;
    if (ts <= ce) {
      var span = ce - cs;
      return i * colWidth + (span > 0 ? (ts - cs) / span : 0) * colWidth;
    }
  }
  return cols.length * colWidth;
}

// Retourne { idx, left, width } : colonne d'ancrage de la barre, decalage dans
// cette colonne, largeur totale — ou null si la barre est hors de la fenetre.
function ganttBarGeom(barStart, barEnd, cols, colWidth) {
  if (!barStart || !barEnd || !cols.length) return null;
  if (barEnd < cols[0].start || barStart > cols[cols.length - 1].end) return null;
  var total = cols.length * colWidth;
  var startPx = Math.max(0, Math.min(ganttPxForDate(barStart, cols, colWidth), total));
  var endPx = Math.max(0, Math.min(ganttPxForDate(barEnd, cols, colWidth), total));
  if (endPx < startPx) endPx = startPx;
  var idx = Math.min(cols.length - 1, Math.floor(startPx / colWidth));
  return { idx: idx, left: startPx - idx * colWidth, width: endPx - startPx };
}

// C1 : « Aujourd'hui » doit amener le jour courant au milieu du diagramme,
// pas au debut du premier mois de la fenetre.
var ganttPendingCenter = false;

function ganttCenterOnToday() {
  var container = document.querySelector('#gantt-view .gantt-container');
  var col = document.getElementById('gantt-today-col');
  if (!container || !col) return;
  var labelEl = container.querySelector('.gantt-task-label');
  var labelW = labelEl ? labelEl.offsetWidth : 220;
  var visible = Math.max(0, container.clientWidth - labelW);
  container.scrollLeft = Math.max(0, col.offsetLeft + col.offsetWidth / 2 - labelW - visible / 2);
}

// Flèches de dépendance entre sous-tâches : calque SVG posé sur le Gantt après
// le rendu, à partir des positions réelles des barres (attribut data-stbar).
// Tracé finish-to-start : bord droit de la barre bloqueuse -> bord gauche de
// la barre dépendante, rouge si le bloqueur n'est pas terminé, gris sinon.
function drawSubtaskDependencyArrows() {
  var container = document.querySelector('#gantt-view .gantt-container');
  if (!container) return;
  var old = document.getElementById('gantt-st-deps-svg');
  if (old && old.parentNode === container) container.removeChild(old);
  var cRect = container.getBoundingClientRect();
  var svgNS = 'http://www.w3.org/2000/svg';
  var overlay = document.createElementNS(svgNS, 'svg');
  overlay.setAttribute('id', 'gantt-st-deps-svg');
  overlay.setAttribute('width', container.scrollWidth);
  overlay.setAttribute('height', container.scrollHeight);
  overlay.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;z-index:20;overflow:visible;';
  var count = 0;
  subtasks.forEach(function(st) {
    if (!st.Blocked_By_Subtask_Id) return;
    var depBar = container.querySelector('[data-stbar="' + st.id + '"]');
    var blockerBar = container.querySelector('[data-stbar="' + st.Blocked_By_Subtask_Id + '"]');
    var blocker = subtasks.find(function(s2) { return s2.id === st.Blocked_By_Subtask_Id; });
    if (!depBar || !blockerBar || !blocker) return;
    var r1 = blockerBar.getBoundingClientRect();   // fin de la barre bloqueuse
    var r2 = depBar.getBoundingClientRect();       // début de la barre dépendante
    var x1 = r1.right - cRect.left + container.scrollLeft;
    var y1 = r1.top + r1.height / 2 - cRect.top + container.scrollTop;
    var x2 = r2.left - cRect.left + container.scrollLeft;
    var y2 = r2.top + r2.height / 2 - cRect.top + container.scrollTop;
    if (y1 === y2) return;                          // même ligne : rien à relier
    var color = blocker.Completed ? '#94a3b8' : '#ef4444';
    var dir = x2 >= x1 ? 1 : -1;
    var midX = x1 + 8;
    if (dir === 1 && midX > x2 - 8) midX = (x1 + x2) / 2;
    var stopX = x2 - 7 * dir;
    var path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', 'M ' + x1 + ' ' + y1 + ' L ' + midX + ' ' + y1 + ' L ' + midX + ' ' + y2 + ' L ' + stopX + ' ' + y2);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('opacity', '0.9');
    overlay.appendChild(path);
    var head = document.createElementNS(svgNS, 'polygon');
    head.setAttribute('points', x2 + ',' + y2 + ' ' + (x2 + 7 * dir) + ',' + (y2 - 4) + ' ' + (x2 + 7 * dir) + ',' + (y2 + 4));
    head.setAttribute('fill', color);
    overlay.appendChild(head);
    var dot = document.createElementNS(svgNS, 'circle');
    dot.setAttribute('cx', x1);
    dot.setAttribute('cy', y1);
    dot.setAttribute('r', '2.5');
    dot.setAttribute('fill', color);
    overlay.appendChild(dot);
    count++;
  });
  if (count > 0) container.appendChild(overlay);
}

function ganttAfterRender() {
  drawSubtaskDependencyArrows();
  if (!ganttPendingCenter) return;
  ganttPendingCenter = false;
  requestAnimationFrame(function() { ganttCenterOnToday(); });
}

function renderGanttView() {
  var yearSelect = document.getElementById('gantt-year');
  if (yearSelect.options.length === 0) {
    for (var y = 2020; y <= 2050; y++) {
      var opt = document.createElement('option');
      opt.value = y;
      opt.textContent = y;
      yearSelect.appendChild(opt);
    }
  }
  // Always sync select TO ganttYear (never overwrite ganttYear from select)
  yearSelect.value = ganttYear;

  document.querySelectorAll('[data-gantt-mode]').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-gantt-mode') === ganttMode);
  });

  var tasksWithDates = getFilteredTasks().filter(function(task) { return task.Start_Date || task.Due_Date; });
  // A8 : tri du Gantt
  var ganttSortSel = document.getElementById('gantt-sort');
  if (ganttSortSel && ganttSortSel.value !== ganttSort) ganttSortSel.value = ganttSort;
  if (ganttSort === 'priority') {
    var prioOrder = { high: 0, medium: 1, low: 2 };
    tasksWithDates.sort(function(a, b) {
      var pa = prioOrder[a.Priority] !== undefined ? prioOrder[a.Priority] : 3;
      var pb = prioOrder[b.Priority] !== undefined ? prioOrder[b.Priority] : 3;
      return pa - pb;
    });
  } else if (ganttSort === 'alpha') {
    tasksWithDates.sort(function(a, b) { return (a.Title || '').localeCompare(b.Title || ''); });
  } else if (ganttSort === 'due') {
    tasksWithDates.sort(function(a, b) {
      var da = a.Due_Date || a.Start_Date || 0, db = b.Due_Date || b.Start_Date || 0;
      return da - db;
    });
  }
  document.getElementById('gantt-task-count').textContent = '(' + tasksWithDates.length + ' ' + (currentLang === 'fr' ? 'tâches' : 'tasks') + ')';

  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var dayNames = currentLang === 'fr'
    ? ['DIM.', 'LUN.', 'MAR.', 'MER.', 'JEU.', 'VEN.', 'SAM.']
    : ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var monthNamesShort = currentLang === 'fr'
    ? ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var monthNames = currentLang === 'fr'
    ? ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var html = '<div class="gantt-container"><table class="gantt-table">';

  // ===== WEEKS MODE =====
  if (ganttMode === 'weeks') {
    var weekColW = 80;
    // Semaines ISO engendrees de proche en proche depuis le lundi de reference :
    // l'ancien calcul (numero + annee courante) se trompait d'annee autour de
    // janvier/decembre.
    var weekAnchor = new Date(ganttYear, ganttMonth, 1);
    weekAnchor.setDate(weekAnchor.getDate() - 56);
    var wsFirst = new Date(weekAnchor);
    wsFirst.setDate(wsFirst.getDate() - ((wsFirst.getDay() + 6) % 7)); // lundi
    wsFirst.setHours(0, 0, 0, 0);
    var numWeeks = 34;
    var weeks = [];
    for (var w = 0; w < numWeeks; w++) {
      var ws = new Date(wsFirst);
      ws.setDate(ws.getDate() + w * 7);
      var we = new Date(ws);
      we.setDate(we.getDate() + 6);
      we.setHours(23, 59, 59, 999);
      weeks.push({ num: getISOWeek(ws), year: ws.getFullYear(), start: ws, end: we });
    }
    var weekIsCurrent = function(wk) { return today >= wk.start && today <= wk.end; };

    // En-tete compact : ligne de regroupement par mois + ligne des numeros de semaine
    html += '<thead><tr><th class="gantt-task-label" style="text-align:left;" rowspan="2">' + t('colTaskName') + '</th>';
    var prevWm = -1, prevWy = -1;
    for (var wi = 0; wi < weeks.length; wi++) {
      var wm = weeks[wi].start.getMonth(), wy = weeks[wi].start.getFullYear();
      if (wm !== prevWm || wy !== prevWy) {
        var wSpan = 0;
        for (var wj = wi; wj < weeks.length && weeks[wj].start.getMonth() === wm && weeks[wj].start.getFullYear() === wy; wj++) wSpan++;
        html += '<th colspan="' + wSpan + '" style="font-size:11px;font-weight:700;color:#475569;background:#f8fafc;border-bottom:1px solid #e2e8f0;">' + monthNames[wm].toUpperCase() + ' ' + String(wy).substring(2) + '</th>';
        prevWm = wm; prevWy = wy;
      }
    }
    html += '</tr><tr>';
    for (var wi = 0; wi < weeks.length; wi++) {
      var wk = weeks[wi];
      var isCurrentWeek = weekIsCurrent(wk);
      html += '<th' + (isCurrentWeek ? ' id="gantt-today-col" class="today"' : '') + ' style="min-width:' + weekColW + 'px;">S' + wk.num + '</th>';
    }
    html += '</tr></thead><tbody>';

    // Position du jour courant DANS sa colonne (trait rouge vertical)
    var wTodayIdx = -1, wTodayPct = 0;
    for (var wi = 0; wi < weeks.length; wi++) {
      if (weekIsCurrent(weeks[wi])) {
        wTodayIdx = wi;
        wTodayPct = Math.round((today - weeks[wi].start) / (weeks[wi].end - weeks[wi].start) * 100);
        break;
      }
    }

    // Task rows
    for (var ti = 0; ti < tasksWithDates.length; ti++) {
      var task = tasksWithDates[ti];
      var barClass = getGanttBarClass(task);
      var barCustomColor = getGanttBarColor(task);
      var barCustomStyle = barCustomColor ? 'background:' + barCustomColor + ';color:white;' : '';
      html += '<tr>';
      html += renderGanttTaskLabel(task);

      var tStart = task.Start_Date ? new Date(task.Start_Date * 1000) : null;
      var tEnd = task.Due_Date ? new Date(task.Due_Date * 1000) : null;
      if (!tStart && tEnd) tStart = new Date(tEnd);
      if (!tEnd && tStart) tEnd = new Date(tStart);
      if (tStart) tStart.setHours(0, 0, 0, 0);
      if (tEnd) tEnd.setHours(23, 59, 59, 999);

      // C2 : geometrie au jour pres a l'interieur de la semaine
      var wGeom = ganttBarGeom(tStart, tEnd, weeks, weekColW);
      var extEnd = getTaskExtensionEnd(task);
      var wExtGeom = (extEnd && tEnd && extEnd > tEnd) ? ganttBarGeom(tEnd, extEnd, weeks, weekColW) : null;
      var extColor = getExtensionBarColor(task);

      for (var wi = 0; wi < weeks.length; wi++) {
        html += '<td class="gantt-cell' + (wi === wTodayIdx ? ' today-col' : '') + '" style="position:relative;min-width:' + weekColW + 'px;">';
        if (wi === wTodayIdx) {
          html += '<div style="position:absolute;top:0;bottom:0;left:' + wTodayPct + '%;width:2px;background:#ef4444;z-index:1;pointer-events:none;"></div>';
        }
        if (wGeom && wi === wGeom.idx) {
          html += '<div class="gantt-bar ' + barClass + '" style="left:' + wGeom.left + 'px;width:' + wGeom.width + 'px;cursor:pointer;' + barCustomStyle + '" title="' + sanitize(task.Title) + '" onclick="openEditTaskModal(' + task.id + ')">' + sanitize(task.Title) + '</div>';
        }
        if (wExtGeom && wi === wExtGeom.idx) {
          html += '<div class="gantt-bar-extension" title="' + t('extensionTooltip') + ' — ' + sanitize(task.Title) + '" style="left:' + wExtGeom.left + 'px;width:' + wExtGeom.width + 'px;border-color:' + extColor + ';background:' + extColor + '20;"></div>';
        }
        html += '</td>';
      }

      html += '</tr>';

      // === Lignes sous-taches (mode Semaines) ===
      if (expandedGanttTasks[task.id]) {
        var sts = getGanttSubtasks(task.id);
        for (var sti = 0; sti < sts.length; sti++) {
          var st = sts[sti];
          var stRange = getGanttSubtaskRange(st, task);
          var stBarClass = ganttSubtaskBarClass(st, task);
          var stGeom = ganttBarGeom(stRange.start, stRange.end, weeks, weekColW);
          html += '<tr class="gantt-subtask-row">' + renderGanttSubtaskLabelCell(st, task.id);
          for (var wi2 = 0; wi2 < weeks.length; wi2++) {
            html += '<td class="gantt-cell' + (wi2 === wTodayIdx ? ' today-col' : '') + '" style="position:relative;min-width:' + weekColW + 'px;">';
            if (stGeom && wi2 === stGeom.idx) {
              html += '<div class="gantt-bar gantt-bar-subtask ' + stBarClass + '" data-stbar="' + st.id + '" style="left:' + stGeom.left + 'px;width:' + stGeom.width + 'px;cursor:pointer;" title="' + sanitize(st.Title) + '" onclick="openEditTaskModal(' + task.id + ')"></div>';
            }
            html += '</td>';
          }
          html += '</tr>';
        }
      }
    }

    // Footer
    var viewStartMonth = monthNames[weeks[0].start.getMonth()];
    var viewEndMonth = monthNames[weeks[weeks.length - 1].start.getMonth()];
    html += '</tbody></table>';
    html += '<div class="gantt-footer">';
    html += '<span>🌟 ' + t('ganttFullYear') + ' • ' + t('ganttNavInfo') + ' • ' + tasksWithDates.length + ' ' + (currentLang === 'fr' ? 'tâches' : 'tasks') + '</span>';
    html += '<span>' + t('ganttViewRange') + ' ' + viewStartMonth + ' - ' + viewEndMonth + ' ' + ganttYear + '</span>';
    html += '</div></div>';

    document.getElementById('gantt-view').innerHTML = html;
    initGanttDragScroll();
    return;
  }

  // ===== YEAR / TWOYEARS MODE =====
  if (ganttMode === 'year' || ganttMode === 'twoyears') {
    var numYears = ganttMode === 'twoyears' ? 2 : 1;
    var totalMonths = numYears * 12;
    var startYr = ganttYear;
    var colWidth = ganttMode === 'twoyears' ? 50 : 70;

    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();

    html += '<thead>';
    if (ganttMode === 'twoyears') {
      html += '<tr><th class="gantt-task-label" style="text-align:left;" rowspan="2">' + t('colTaskName') + '</th>';
      html += '<th colspan="12" style="font-size:12px;font-weight:800;background:#f8fafc;">' + startYr + '</th>';
      html += '<th colspan="12" style="font-size:12px;font-weight:800;background:#f8fafc;">' + (startYr + 1) + '</th>';
      html += '</tr><tr>';
    } else {
      html += '<tr><th class="gantt-task-label" style="text-align:left;">' + t('colTaskName') + '</th>';
    }
    for (var ym = 0; ym < totalMonths; ym++) {
      var yr = startYr + Math.floor(ym / 12);
      var mo = ym % 12;
      var isCurrent = (yr === todayYear && mo === todayMonth);
      html += '<th' + (isCurrent ? ' id="gantt-today-col"' : '') + ' style="min-width:' + colWidth + 'px;' + (isCurrent ? 'background:#fef2f2;color:#ef4444;' : '') + '">' + monthNamesShort[mo].substring(0, 3) + '</th>';
    }
    html += '</tr></thead><tbody>';

    for (var ti = 0; ti < tasksWithDates.length; ti++) {
      var task = tasksWithDates[ti];
      var barClass = getGanttBarClass(task);
      var barCustomColor = getGanttBarColor(task);
      var barCustomStyle = barCustomColor ? 'background:' + barCustomColor + ';color:white;' : '';
      html += '<tr>' + renderGanttTaskLabel(task);

      var yTStart = task.Start_Date ? new Date(task.Start_Date * 1000) : null;
      var yTEnd = task.Due_Date ? new Date(task.Due_Date * 1000) : null;
      if (!yTStart && yTEnd) yTStart = new Date(yTEnd);
      if (!yTEnd && yTStart) yTEnd = new Date(yTStart);
      if (yTStart) yTStart.setHours(0, 0, 0, 0);
      if (yTEnd) yTEnd.setHours(23, 59, 59, 999);

      var yBarStart = -1, yBarEnd = -1;
      for (var ym = 0; ym < totalMonths; ym++) {
        var yr = startYr + Math.floor(ym / 12);
        var mo = ym % 12;
        var ms = new Date(yr, mo, 1);
        var me = new Date(yr, mo + 1, 0, 23, 59, 59, 999);
        if (yTStart && yTEnd && yTStart <= me && yTEnd >= ms) {
          if (yBarStart === -1) yBarStart = ym;
          yBarEnd = ym;
        }
      }

      var yExtEnd = getTaskExtensionEnd(task);
      var yExtStart = -1, yExtEndIdx = -1;
      if (yExtEnd && yTEnd && yExtEnd > yTEnd) {
        for (var yme = 0; yme < totalMonths; yme++) {
          var yre = startYr + Math.floor(yme / 12); var moe = yme % 12;
          var mse = new Date(yre, moe, 1); var mee = new Date(yre, moe + 1, 0, 23, 59, 59, 999);
          // Démarrer la prolongation le mois SUIVANT la fin de tâche (évite le chevauchement)
          if (mse > yTEnd && yExtEnd >= mse) { if (yExtStart === -1) yExtStart = yme; yExtEndIdx = yme; }
        }
      }
      var yExtColor = getExtensionBarColor(task);

      for (var ym = 0; ym < totalMonths; ym++) {
        var yr2 = startYr + Math.floor(ym / 12);
        var mo2 = ym % 12;
        var isCurrent2 = (yr2 === todayYear && mo2 === todayMonth);
        html += '<td class="gantt-cell" style="position:relative;min-width:' + colWidth + 'px;' + (isCurrent2 ? 'background:#fef2f2;' : '') + '">';
        if (ym === yBarStart) {
          var yBarW = (yBarEnd - yBarStart + 1) * colWidth;
          html += '<div class="gantt-bar ' + barClass + '" style="left:2px;width:' + yBarW + 'px;cursor:pointer;' + barCustomStyle + '" title="' + sanitize(task.Title) + '" onclick="openEditTaskModal(' + task.id + ')">' + sanitize(task.Title) + '</div>';
        }
        if (ym === yExtStart && yExtStart >= 0) {
          var yExtW = (yExtEndIdx - yExtStart + 1) * colWidth;
          html += '<div class="gantt-bar-extension" title="' + t('extensionTooltip') + ' — ' + sanitize(task.Title) + '" style="left:2px;width:' + yExtW + 'px;border-color:' + yExtColor + ';background:' + yExtColor + '20;"></div>';
        }
        html += '</td>';
      }
      html += '</tr>';

      if (expandedGanttTasks[task.id]) {
        var sts = getGanttSubtasks(task.id);
        for (var sti = 0; sti < sts.length; sti++) {
          var st = sts[sti];
          var stRange = getGanttSubtaskRange(st, task);
          var stBarClass = ganttSubtaskBarClass(st, task);
          html += '<tr class="gantt-subtask-row">' + renderGanttSubtaskLabelCell(st, task.id);
          var stYStart = -1, stYEnd = -1;
          for (var ym3 = 0; ym3 < totalMonths; ym3++) {
            var yr3 = startYr + Math.floor(ym3 / 12);
            var mo3 = ym3 % 12;
            var ms3 = new Date(yr3, mo3, 1);
            var me3 = new Date(yr3, mo3 + 1, 0, 23, 59, 59, 999);
            if (stRange.start <= me3 && stRange.end >= ms3) {
              if (stYStart === -1) stYStart = ym3;
              stYEnd = ym3;
            }
          }
          for (var ym3 = 0; ym3 < totalMonths; ym3++) {
            html += '<td class="gantt-cell" style="position:relative;min-width:' + colWidth + 'px;">';
            if (ym3 === stYStart) {
              var stYW = (stYEnd - stYStart + 1) * colWidth;
              html += '<div class="gantt-bar gantt-bar-subtask ' + stBarClass + '" data-stbar="' + st.id + '" style="left:2px;width:' + stYW + 'px;cursor:pointer;" title="' + sanitize(st.Title) + '" onclick="openEditTaskModal(' + task.id + ')"></div>';
            }
            html += '</td>';
          }
          html += '</tr>';
        }
      }
    }

    html += '</tbody></table>';
    html += '<div class="gantt-footer">';
    var rangeLabel = ganttMode === 'twoyears' ? (startYr + ' - ' + (startYr + 1)) : String(startYr);
    html += '<span>🌟 ' + t('ganttFullYear') + ' • ' + tasksWithDates.length + ' ' + (currentLang === 'fr' ? 'tâches' : 'tasks') + '</span>';
    html += '<span>' + t('ganttViewRange') + ' ' + rangeLabel + '</span>';
    html += '</div></div>';

    document.getElementById('gantt-view').innerHTML = html;
    initGanttDragScroll();
    return;
  }

  // ===== MONTHS MODE =====
  if (ganttMode === 'months') {
    // C3 : les colonnes s'elargissent pour occuper toute la largeur disponible
    // (le diagramme laissait la moitie de l'ecran vide).
    var ganttHost = document.getElementById('gantt-view');
    var availW = ganttHost ? ganttHost.clientWidth : 0;
    var monthColW = Math.max(80, Math.floor(((availW || 1100) - 236) / 12));

    var months = [];
    for (var m = 0; m < 12; m++) {
      months.push({ start: new Date(ganttYear, m, 1, 0, 0, 0, 0), end: new Date(ganttYear, m + 1, 0, 23, 59, 59, 999) });
    }

    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();
    var todayDayPct = (todayYear === ganttYear) ? Math.round((today.getDate() - 1) / new Date(ganttYear, todayMonth + 1, 0).getDate() * 100) : -1;

    html += '<thead><tr><th class="gantt-task-label" style="text-align:left;">' + t('colTaskName') + '</th>';
    for (var m = 0; m < 12; m++) {
      var isCurrentMonth = (ganttYear === todayYear && m === todayMonth);
      html += '<th' + (isCurrentMonth ? ' id="gantt-today-col" class="today"' : '') + ' style="min-width:' + monthColW + 'px;">' + monthNames[m].substring(0, 3).toUpperCase() + '</th>';
    }
    html += '</tr></thead><tbody>';

    for (var ti = 0; ti < tasksWithDates.length; ti++) {
      var task = tasksWithDates[ti];
      var barClass = getGanttBarClass(task);
      var barCustomColor = getGanttBarColor(task);
      var barCustomStyle = barCustomColor ? 'background:' + barCustomColor + ';color:white;' : '';
      html += '<tr>';
      html += renderGanttTaskLabel(task);

      var mTStart = task.Start_Date ? new Date(task.Start_Date * 1000) : null;
      var mTEnd = task.Due_Date ? new Date(task.Due_Date * 1000) : null;
      if (!mTStart && mTEnd) mTStart = new Date(mTEnd);
      if (!mTEnd && mTStart) mTEnd = new Date(mTStart);
      if (mTStart) mTStart.setHours(0, 0, 0, 0);
      if (mTEnd) mTEnd.setHours(23, 59, 59, 999);

      // C3 : geometrie au jour pres a l'interieur du mois
      var mGeom = ganttBarGeom(mTStart, mTEnd, months, monthColW);
      var mExtEnd = getTaskExtensionEnd(task);
      var mExtGeom = (mExtEnd && mTEnd && mExtEnd > mTEnd) ? ganttBarGeom(mTEnd, mExtEnd, months, monthColW) : null;
      var mExtColor = getExtensionBarColor(task);

      for (var m = 0; m < 12; m++) {
        var isTodayMonth = (ganttYear === todayYear && m === todayMonth);
        html += '<td class="gantt-cell' + (isTodayMonth ? ' today-col' : '') + '" style="position:relative;min-width:' + monthColW + 'px;">';
        if (isTodayMonth && todayDayPct >= 0) {
          html += '<div style="position:absolute;top:0;bottom:0;left:' + todayDayPct + '%;width:2px;background:#ef4444;z-index:1;pointer-events:none;"></div>';
        }
        if (mGeom && m === mGeom.idx) {
          html += '<div class="gantt-bar ' + barClass + '" style="left:' + mGeom.left + 'px;width:' + mGeom.width + 'px;cursor:pointer;' + barCustomStyle + '" title="' + sanitize(task.Title) + '" onclick="openEditTaskModal(' + task.id + ')">' + sanitize(task.Title) + '</div>';
        }
        if (mExtGeom && m === mExtGeom.idx) {
          html += '<div class="gantt-bar-extension" title="' + t('extensionTooltip') + ' — ' + sanitize(task.Title) + '" style="left:' + mExtGeom.left + 'px;width:' + mExtGeom.width + 'px;border-color:' + mExtColor + ';background:' + mExtColor + '20;"></div>';
        }
        html += '</td>';
      }
      html += '</tr>';

      // === Lignes sous-taches (mode Mois) ===
      if (expandedGanttTasks[task.id]) {
        var sts = getGanttSubtasks(task.id);
        for (var sti = 0; sti < sts.length; sti++) {
          var st = sts[sti];
          var stRange = getGanttSubtaskRange(st, task);
          var stBarClass = ganttSubtaskBarClass(st, task);
          var stGeom = ganttBarGeom(stRange.start, stRange.end, months, monthColW);
          html += '<tr class="gantt-subtask-row">' + renderGanttSubtaskLabelCell(st, task.id);
          for (var m2 = 0; m2 < 12; m2++) {
            var isTodayMonth2 = (ganttYear === todayYear && m2 === todayMonth);
            html += '<td class="gantt-cell' + (isTodayMonth2 ? ' today-col' : '') + '" style="position:relative;min-width:' + monthColW + 'px;">';
            if (isTodayMonth2 && todayDayPct >= 0) {
              html += '<div style="position:absolute;top:0;bottom:0;left:' + todayDayPct + '%;width:2px;background:#ef4444;z-index:1;pointer-events:none;"></div>';
            }
            if (stGeom && m2 === stGeom.idx) {
              html += '<div class="gantt-bar gantt-bar-subtask ' + stBarClass + '" data-stbar="' + st.id + '" style="left:' + stGeom.left + 'px;width:' + stGeom.width + 'px;cursor:pointer;" title="' + sanitize(st.Title) + '" onclick="openEditTaskModal(' + task.id + ')"></div>';
            }
            html += '</td>';
          }
          html += '</tr>';
        }
      }
    }

    html += '</tbody></table>';
    html += '<div class="gantt-footer">';
    html += '<span>🌟 ' + t('ganttFullYear') + ' • ' + t('ganttNavInfo') + ' • ' + tasksWithDates.length + ' ' + (currentLang === 'fr' ? 'tâches' : 'tasks') + '</span>';
    html += '<span>' + t('ganttViewRange') + ' ' + monthNames[0] + ' - ' + monthNames[11] + ' ' + ganttYear + '</span>';
    html += '</div></div>';

    document.getElementById('gantt-view').innerHTML = html;
    initGanttDragScroll();
    return;
  }

  // ===== DAYS MODE (et mode PERSONNALISÉ : mêmes colonnes-jours sur une plage libre) =====
  var startDate, endDate;
  if (ganttMode === 'custom' && ganttCustomStart && ganttCustomEnd) {
    startDate = new Date(ganttCustomStart + 'T00:00:00');
    endDate = new Date(ganttCustomEnd + 'T00:00:00');
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || endDate < startDate) {
      // Plage invalide → repli sur la fenêtre par défaut
      startDate = new Date(ganttYear, ganttMonth - 1, 1);
      endDate = new Date(ganttYear, ganttMonth + 2, 0);
    } else {
      // Limiter à ~400 jours pour éviter une grille démesurée
      var maxEnd = new Date(startDate); maxEnd.setDate(maxEnd.getDate() + 400);
      if (endDate > maxEnd) endDate = maxEnd;
    }
  } else {
    startDate = new Date(ganttYear, ganttMonth - 1, 1);
    endDate = new Date(ganttYear, ganttMonth + 2, 0);
  }
  var days = [];
  var d = new Date(startDate);
  while (d <= endDate) {
    days.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }

  // Month header row
  html += '<thead><tr><th class="gantt-task-label" style="text-align:left;" rowspan="2">' + t('colTaskName') + '</th>';
  var prevMonth = -1;
  for (var di0 = 0; di0 < days.length; di0++) {
    var dm = days[di0].getMonth();
    if (dm !== prevMonth) {
      var colspan = 0;
      for (var di1 = di0; di1 < days.length && days[di1].getMonth() === dm; di1++) colspan++;
      html += '<th colspan="' + colspan + '" style="font-size:11px;font-weight:700;color:#475569;background:#f8fafc;border-bottom:1px solid #e2e8f0;">' + monthNames[dm].toUpperCase() + '</th>';
      prevMonth = dm;
    }
  }
  html += '</tr><tr>';
  for (var di = 0; di < days.length; di++) {
    var dd = days[di];
    var isToday = dd.getTime() === today.getTime();
    var isWeekend = dd.getDay() === 0 || dd.getDay() === 6;
    html += '<th' + (isToday ? ' id="gantt-today-col"' : '') + ' class="' + (isToday ? 'today' : '') + (isWeekend ? ' weekend' : '') + '">';
    html += '<div>' + dd.getDate() + '</div>';
    html += '<div style="font-size:8px;">' + dayNames[dd.getDay()] + '</div>';
    html += '</th>';
  }
  html += '</tr></thead><tbody>';

  for (var ti = 0; ti < tasksWithDates.length; ti++) {
    var task = tasksWithDates[ti];
    var barClass = getGanttBarClass(task);
    var barCustomColor = getGanttBarColor(task);
    var barCustomStyle = barCustomColor ? 'background:' + barCustomColor + ';color:white;' : '';
    html += '<tr>';
    html += renderGanttTaskLabel(task);

    var tStart = task.Start_Date ? new Date(task.Start_Date * 1000) : null;
    var tEnd = task.Due_Date ? new Date(task.Due_Date * 1000) : null;
    if (!tStart && tEnd) tStart = tEnd;
    if (!tEnd && tStart) tEnd = tStart;
    if (tStart) tStart.setHours(0, 0, 0, 0);
    if (tEnd) tEnd.setHours(0, 0, 0, 0);

    var barStartIdx = -1, barEndIdx = -1;
    if (tStart && tEnd) {
      for (var di = 0; di < days.length; di++) {
        var dday = days[di];
        if (dday >= tStart && dday <= tEnd) {
          if (barStartIdx === -1) barStartIdx = di;
          barEndIdx = di;
        }
      }
      if (barStartIdx === -1 && tStart < days[0] && tEnd >= days[0]) {
        barStartIdx = 0;
        for (var di2 = 0; di2 < days.length; di2++) {
          if (days[di2] <= tEnd) barEndIdx = di2;
        }
      }
    }

    var dExtEnd = getTaskExtensionEnd(task);
    var dExtStartIdx = -1, dExtEndIdx = -1;
    if (dExtEnd && tEnd && dExtEnd > tEnd) {
      var dExtDay = new Date(dExtEnd); dExtDay.setHours(0, 0, 0, 0);
      for (var dei = 0; dei < days.length; dei++) {
        if (days[dei] >= tEnd && days[dei] <= dExtDay) {
          if (dExtStartIdx === -1) dExtStartIdx = dei;
          dExtEndIdx = dei;
        }
      }
    }
    var dExtColor = getExtensionBarColor(task);

    for (var di = 0; di < days.length; di++) {
      var dd = days[di];
      var isToday = dd.getTime() === today.getTime();
      var isWeekend = dd.getDay() === 0 || dd.getDay() === 6;
      var cellClass = (isToday ? 'today-col' : '') + (isWeekend ? ' weekend-col' : '');

      html += '<td class="gantt-cell ' + cellClass + '">';
      if (di === barStartIdx) {
        var spanDays = barEndIdx - barStartIdx + 1;
        var widthPx = spanDays * 36;
        html += '<div class="gantt-bar ' + barClass + '" style="left:2px;width:' + widthPx + 'px;cursor:pointer;' + barCustomStyle + '" title="' + sanitize(task.Title) + '" onclick="openEditTaskModal(' + task.id + ')">' + sanitize(task.Title) + '</div>';
      }
      if (di === dExtStartIdx && dExtStartIdx >= 0) {
        var dExtW = (dExtEndIdx - dExtStartIdx + 1) * 36;
        html += '<div class="gantt-bar-extension" title="' + t('extensionTooltip') + ' — ' + sanitize(task.Title) + '" style="left:2px;width:' + dExtW + 'px;border-color:' + dExtColor + ';background:' + dExtColor + '20;"></div>';
      }
      html += '</td>';
    }

    html += '</tr>';

    // === Lignes sous-tâches (mode Jours) ===
    if (expandedGanttTasks[task.id]) {
      var sts = getGanttSubtasks(task.id);
      for (var sti = 0; sti < sts.length; sti++) {
        var st = sts[sti];
        var stRange = getGanttSubtaskRange(st, task);
        var stStartDay = new Date(stRange.start); stStartDay.setHours(0, 0, 0, 0);
        var stEndDay = new Date(stRange.end); stEndDay.setHours(0, 0, 0, 0);
        var stBarClass = ganttSubtaskBarClass(st, task);
        var stBarStartIdx = -1, stBarEndIdx = -1;
        for (var di2 = 0; di2 < days.length; di2++) {
          var dday2 = days[di2];
          if (dday2 >= stStartDay && dday2 <= stEndDay) {
            if (stBarStartIdx === -1) stBarStartIdx = di2;
            stBarEndIdx = di2;
          }
        }
        html += '<tr class="gantt-subtask-row">' + renderGanttSubtaskLabelCell(st, task.id);
        for (var di2 = 0; di2 < days.length; di2++) {
          var dd2 = days[di2];
          var isToday2 = dd2.getTime() === today.getTime();
          var isWeekend2 = dd2.getDay() === 0 || dd2.getDay() === 6;
          var cellClass2 = (isToday2 ? 'today-col' : '') + (isWeekend2 ? ' weekend-col' : '');
          html += '<td class="gantt-cell ' + cellClass2 + '">';
          if (di2 === stBarStartIdx) {
            var stSpanDays = stBarEndIdx - stBarStartIdx + 1;
            var stWidth = stSpanDays * 36;
            html += '<div class="gantt-bar gantt-bar-subtask ' + stBarClass + '" data-stbar="' + st.id + '" style="left:2px;width:' + stWidth + 'px;cursor:pointer;" title="' + sanitize(st.Title) + '" onclick="openEditTaskModal(' + task.id + ')"></div>';
          }
          html += '</td>';
        }
        html += '</tr>';
      }
    }
  }

  html += '</tbody></table>';
  var viewStart = monthNames[startDate.getMonth()];
  var viewEnd = monthNames[endDate.getMonth()];
  html += '<div class="gantt-footer">';
  html += '<span>🌟 ' + t('ganttFullYear') + ' • ' + t('ganttNavInfo') + ' • ' + tasksWithDates.length + ' ' + (currentLang === 'fr' ? 'tâches' : 'tasks') + '</span>';
  html += '<span>' + t('ganttViewRange') + ' ' + viewStart + ' - ' + viewEnd + ' ' + ganttYear + '</span>';
  html += '</div></div>';

  document.getElementById('gantt-view').innerHTML = html;
  initGanttDragScroll();
}

function initGanttDragScroll() {
  var container = document.querySelector('#gantt-view .gantt-container');
  if (!container) return;
  ganttAfterRender();
  var isDown = false;
  var startX, scrollLeft, hasMoved;

  container.addEventListener('mousedown', function(e) {
    if (e.button !== 0) return;
    if (e.target.closest('button, a, select, input')) return;
    isDown = true;
    hasMoved = false;
    startX = e.clientX;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';
  });

  document.addEventListener('mouseup', function() {
    if (!isDown) return;
    isDown = false;
    container.style.cursor = '';
    container.style.userSelect = '';
  });

  document.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    var dx = e.clientX - startX;
    if (Math.abs(dx) > 3) hasMoved = true;
    if (!hasMoved) return;
    e.preventDefault();
    container.scrollLeft = scrollLeft - dx;
  });

  container.addEventListener('click', function(e) {
    if (hasMoved) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, true);
}

function setGanttYear(value) {
  ganttYear = Math.max(2020, Math.min(2050, parseInt(value)));
  renderGanttView();
}

function ganttNav(dir) {
  if (ganttMode === 'months' || ganttMode === 'year' || ganttMode === 'twoyears') {
    // Modes annuels : on navigue par année
    ganttYear += dir;
    ganttYear = Math.max(2020, Math.min(2050, ganttYear));
  } else if (ganttMode === 'weeks') {
    // Navigation par trimestre (3 mois)
    ganttMonth += dir * 3;
    if (ganttMonth > 11) { ganttMonth -= 12; ganttYear++; }
    if (ganttMonth < 0) { ganttMonth += 12; ganttYear--; }
    ganttYear = Math.max(2020, Math.min(2050, ganttYear));
  } else {
    // Mode jours (fenêtre de 3 mois) : on avance d'1 mois à la fois
    ganttMonth += dir;
    if (ganttMonth > 11) { ganttMonth -= 12; ganttYear++; }
    if (ganttMonth < 0) { ganttMonth += 12; ganttYear--; }
    ganttYear = Math.max(2020, Math.min(2050, ganttYear));
  }
  renderGanttView();
}

function ganttToday() {
  ganttYear = new Date().getFullYear();
  ganttMonth = new Date().getMonth();
  ganttPendingCenter = true;   // C1 : recentrer sur le jour courant
  renderGanttView();
}

function ganttExpandAll() {
  var tasksWithSubs = tasks.filter(function(t) { return getGanttSubtasks(t.id).length > 0; });
  tasksWithSubs.forEach(function(t) { expandedGanttTasks[t.id] = true; });
  renderGanttView();
}

function ganttCollapseAll() {
  expandedGanttTasks = {};
  renderGanttView();
}

function setGanttMode(mode) {
  ganttMode = mode;
  ganttPendingCenter = true;   // C1 : chaque changement d'echelle recentre sur aujourd'hui
  // A3 : afficher la zone de dates uniquement en mode personnalisé
  var rangeBox = document.getElementById('gantt-custom-range');
  if (rangeBox) rangeBox.style.display = (mode === 'custom') ? 'flex' : 'none';
  if (mode === 'custom') {
    // Pré-remplir une plage par défaut (mois précédent → 2 mois) si vide
    if (!ganttCustomStart || !ganttCustomEnd) {
      var ds = new Date(ganttYear, ganttMonth - 1, 1);
      var de = new Date(ganttYear, ganttMonth + 2, 0);
      ganttCustomStart = ds.toISOString().split('T')[0];
      ganttCustomEnd = de.toISOString().split('T')[0];
    }
    var sEl = document.getElementById('gantt-custom-start');
    var eEl = document.getElementById('gantt-custom-end');
    if (sEl) sEl.value = ganttCustomStart;
    if (eEl) eEl.value = ganttCustomEnd;
  }
  renderGanttView();
}

function setGanttCustomRange() {
  var sEl = document.getElementById('gantt-custom-start');
  var eEl = document.getElementById('gantt-custom-end');
  if (sEl) ganttCustomStart = sEl.value;
  if (eEl) ganttCustomEnd = eEl.value;
  renderGanttView();
}

function setGanttSort(value) {
  ganttSort = value;
  renderGanttView();
}

// A2 : export du Gantt complet en PDF (1 page à la taille réelle du diagramme)
async function exportGanttPdf() {
  var container = document.querySelector('#gantt-view .gantt-container');
  var table = container ? container.querySelector('.gantt-table') : null;
  if (!table) { showToast(currentLang === 'fr' ? 'Affichez d\'abord le Gantt' : 'Open the Gantt first', 'error'); return; }
  if (typeof html2canvas === 'undefined' || !window.jspdf) {
    showToast(currentLang === 'fr' ? 'Librairies PDF non chargées' : 'PDF libraries not loaded', 'error');
    return;
  }
  showToast(currentLang === 'fr' ? 'Génération du PDF...' : 'Generating PDF...', 'info');
  container.classList.add('gantt-exporting');
  try {
    var canvas = await html2canvas(table, { scale: 2, backgroundColor: '#ffffff', windowWidth: table.scrollWidth, windowHeight: table.scrollHeight });
    container.classList.remove('gantt-exporting');
    var imgData = canvas.toDataURL('image/png');
    var jsPDF = window.jspdf.jsPDF;
    var w = canvas.width, h = canvas.height;
    var pdf = new jsPDF({ orientation: w >= h ? 'landscape' : 'portrait', unit: 'px', format: [w, h], hotfixes: ['px_scaling'] });
    pdf.addImage(imgData, 'PNG', 0, 0, w, h);
    var dateStr = new Date().toISOString().split('T')[0];
    pdf.save('Gantt_' + dateStr + '.pdf');
    showToast(currentLang === 'fr' ? 'PDF exporté ✓' : 'PDF exported ✓', 'success');
  } catch (e) {
    container.classList.remove('gantt-exporting');
    console.error('exportGanttPdf:', e);
    showToast((currentLang === 'fr' ? 'Erreur export PDF : ' : 'PDF export error: ') + e.message, 'error');
  }
}

// A7 : mode plein écran du Gantt (utile quand la hauteur est insuffisante)
function toggleGanttFullscreen() {
  var el = document.getElementById('tab-gantt');
  var btn = document.getElementById('gantt-fullscreen-btn');
  if (!el) return;
  var on = el.classList.toggle('gantt-fullscreen');
  if (btn) btn.title = on ? (currentLang === 'fr' ? 'Quitter le plein écran' : 'Exit fullscreen') : (currentLang === 'fr' ? 'Plein écran' : 'Fullscreen');
  renderGanttView();   // la largeur disponible change : recalcul des colonnes
}

// =============================================================================
// TEMPLATES VIEW
// =============================================================================

function renderTemplatesView() {
  var search = (document.getElementById('template-search').value || '').toLowerCase();
  var filterPriority = document.getElementById('filter-template-priority').value;

  var filtered = templates.filter(function(tpl) {
    if (filterPriority && tpl.Priority !== filterPriority) return false;
    if (search) {
      var text = (tpl.Title + ' ' + tpl.Description + ' ' + tpl.Category).toLowerCase();
      if (text.indexOf(search) === -1) return false;
    }
    return true;
  });

  var html = '';
  for (var i = 0; i < filtered.length; i++) {
    var tpl = filtered[i];
    var dotClass = tpl.Priority === 'high' ? 'dot-high' : (tpl.Priority === 'medium' ? 'dot-medium' : 'dot-low');

    html += '<div class="template-card">';
    html += '<div class="template-card-info">';
    html += '<h4>' + sanitize(tpl.Title) + '</h4>';
    html += '<div class="template-meta">';
    if (tpl.Category) html += '🏷️ ' + sanitize(tpl.Category);
    html += ' <span class="priority-dot ' + dotClass + '"></span> ' + priorityLabel(tpl.Priority);
    if (tpl.Estimated_Hours) html += ' ⏱️ ' + tpl.Estimated_Hours + 'h';
    html += ' 📊 ' + (tpl.Usage_Count || 0) + ' ' + (currentLang === 'fr' ? 'utilisations' : 'uses');
    if (tpl.Updated_At) html += ' • ' + (currentLang === 'fr' ? 'Mis à jour le ' : 'Updated ') + formatDate(tpl.Updated_At);
    html += '</div></div>';
    html += '<div style="display:flex;gap:4px;">';
    html += '<button class="btn btn-primary btn-sm" onclick="useTemplate(' + tpl.id + ')">' + t('useTemplate') + '</button>';
    if (isOwner) html += '<button class="btn-icon" onclick="openNewTemplateModal(' + tpl.id + ')" title="' + t('editTemplate') + '">✏️</button>';
    if (isOwner) html += '<button class="btn-icon" onclick="deleteTemplate(' + tpl.id + ')">🗑️</button>';
    html += '</div>';
    html += '</div>';
  }

  if (filtered.length === 0) {
    html = '<div style="text-align:center;padding:40px;color:#94a3b8;">' + t('noTasks') + '</div>';
  }

  document.getElementById('templates-list').innerHTML = html;
}

// =============================================================================
// TEAM VIEW (Users & Groups)
// =============================================================================

function renderTeamView() {
  renderUsersList();
  renderGroupsList();
  renderCategoriesList();
}

function renderUsersList() {
  var container = document.getElementById('users-list');
  if (!container) return;

  // Apply role filter so the Équipe tab respects the active role selection
  var displayedUsers = currentFilterRole
    ? users.filter(function(u) { return userMatchesRole(u, currentFilterRole); })
    : users;

  if (displayedUsers.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:30px;color:#94a3b8;">' + t('noUsers') + '</div>';
    return;
  }

  var html = '<table class="data-table"><thead><tr>';
  html += '<th>' + t('fieldName') + '</th>';
  html += '<th>' + t('fieldEmail') + '</th>';
  html += '<th>' + t('fieldRole') + '</th>';
  html += '<th>' + t('fieldGroup') + '</th>';
  html += '<th>' + t('colActions') + '</th>';
  html += '</tr></thead><tbody>';

  for (var i = 0; i < displayedUsers.length; i++) {
    var u = displayedUsers[i];
    var roleText = userRoleDisplay(u) ? userRoleDisplay(u).split(',').map(function(r) { return roleLabel(r.trim()); }).join(', ') : '';
    var firstRole = getUserRoles(u)[0] || 'member';
    var roleBg = firstRole === 'admin' ? '#fef2f2;color:#dc2626' : (firstRole === 'viewer' ? '#f1f5f9;color:#64748b' : '#eff6ff;color:#1e40af');

    html += '<tr>';
    html += '<td style="font-weight:700;">👤 ' + sanitize(u.Name) + '</td>';
    html += '<td>' + sanitize(u.Email) + '</td>';
    html += '<td><span style="padding:2px 10px;border-radius:20px;font-size:11px;font-weight:600;background:' + roleBg + '">' + sanitize(roleText) + '</span></td>';
    html += '<td>' + (u.Group_Name ? '<span class="assignee-chip">👥 ' + sanitize(u.Group_Name) + '</span>' : '--') + '</td>';
    html += '<td><button class="btn-icon" onclick="openEditUserModal(' + u.id + ')" title="' + t('edit') + '">✏️</button>';
    html += '<button class="btn-icon" onclick="deleteUser(' + u.id + ')">🗑️</button></td>';
    html += '</tr>';
  }

  html += '</tbody></table>';
  container.innerHTML = html;
}

function renderGroupsList() {
  var container = document.getElementById('groups-list');
  if (!container) return;

  if (groups.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:30px;color:#94a3b8;">' + t('noGroups') + '</div>';
    return;
  }

  var html = '';
  for (var i = 0; i < groups.length; i++) {
    var g = groups[i];
    var memberCount = users.filter(function(u) { return u.Group_Name === g.Name; }).length;
    var memberNames = users.filter(function(u) { return u.Group_Name === g.Name; }).map(function(u) { return u.Name || u.Email; });

    html += '<div class="template-card">';
    html += '<div class="template-card-info">';
    html += '<h4>👥 ' + sanitize(g.Name) + '</h4>';
    html += '<div class="template-meta">';
    html += memberCount + ' ' + t('members');
    if (g.Description) html += ' • ' + sanitize(g.Description);
    html += '</div>';
    if (memberNames.length > 0) {
      html += '<div style="margin-top:6px;display:flex;gap:4px;flex-wrap:wrap;">';
      for (var j = 0; j < memberNames.length; j++) {
        html += '<span class="assignee-chip">👤 ' + sanitize(memberNames[j]) + '</span>';
      }
      html += '</div>';
    }
    html += '</div>';
    html += '<button class="btn-icon" onclick="openEditGroupModal(' + g.id + ')" title="' + t('edit') + '">✏️</button>';
    html += '<button class="btn-icon" onclick="deleteGroup(' + g.id + ')">🗑️</button>';
    html += '</div>';
  }

  container.innerHTML = html;
}

function renderCategoriesList() {
  var container = document.getElementById('categories-list');
  if (!container) return;

  if (categories.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:20px;color:#94a3b8;">' + t('noCategories') + '</div>';
    return;
  }

  var html = '<div style="display:flex;flex-wrap:wrap;gap:8px;">';
  for (var i = 0; i < categories.length; i++) {
    var cat = categories[i];
    html += '<span class="category-chip" style="background:' + (cat.Color || '#6366f1') + '20;color:' + (cat.Color || '#6366f1') + ';border:1px solid ' + (cat.Color || '#6366f1') + '40;">';
    html += sanitize(cat.Name);
    html += '</span>';
  }
  html += '</div>';
  container.innerHTML = html;
}

function openCategoriesModal() {
  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal modal-cf" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>🏷️ ' + t('manageCategories') + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  
  // Existing categories
  html += '<div class="cf-list">';
  if (categories.length === 0) {
    html += '<div class="cf-empty-modal">' + t('noCategories') + '</div>';
  } else {
    for (var i = 0; i < categories.length; i++) {
      var cat = categories[i];
      html += '<div class="cf-list-item">';
      html += '<span class="category-color-dot" style="background:' + (cat.Color || '#6366f1') + ';"></span>';
      html += '<span class="cf-list-name">' + sanitize(cat.Name) + '</span>';
      html += '<button class="cf-delete-btn" onclick="editCategory(' + cat.id + ',\'' + sanitize(cat.Name).replace(/'/g, "\\'") + '\',\'' + (cat.Color || '#6366f1') + '\')">✏️</button>';
      html += '<button class="cf-delete-btn" onclick="deleteCategory(' + cat.id + ')">🗑️</button>';
      html += '</div>';
    }
  }
  html += '</div>';
  
  // Add / edit category form
  html += '<div class="cf-add-form">';
  html += '<h4 id="cat-form-title">' + t('addCategory') + '</h4>';
  html += '<input type="hidden" id="edit-cat-id" value="" />';
  html += '<div class="cf-form-row">';
  html += '<input type="text" id="new-cat-name" placeholder="' + t('fieldName') + '" class="cf-form-input" />';
  html += '<input type="color" id="new-cat-color" value="#6366f1" style="width:40px;height:36px;border:none;cursor:pointer;" />';
  html += '<button class="btn btn-primary" onclick="saveCategory()">' + t('save') + '</button>';
  html += '</div>';
  html += '</div>';
  
  html += '</div></div></div>';
  
  document.getElementById('modal-container').innerHTML = html;
}

function editCategory(catId, name, color) {
  document.getElementById('edit-cat-id').value = catId;
  document.getElementById('new-cat-name').value = name;
  document.getElementById('new-cat-color').value = color;
  document.getElementById('cat-form-title').textContent = t('edit');
}

async function saveCategory() {
  var name = document.getElementById('new-cat-name').value.trim();
  var color = document.getElementById('new-cat-color').value;
  var editId = document.getElementById('edit-cat-id').value;

  if (!name) return;

  try {
    if (editId) {
      var updateRec = {};
      setField(updateRec, 'categories', 'name', name);
      setField(updateRec, 'categories', 'color', color);
      await grist.docApi.applyUserActions([['UpdateRecord', CATEGORIES_TABLE, parseInt(editId), updateRec]]);
      showToast(t('saved'), 'success');
    } else {
      var maxOrder = categories.length > 0 ? Math.max.apply(null, categories.map(function(c) { return c.Order || 0; })) : 0;
      var record = {};
      setField(record, 'categories', 'name', name);
      setField(record, 'categories', 'color', color);
      setField(record, 'categories', 'order', maxOrder + 1);
      await grist.docApi.applyUserActions([['AddRecord', CATEGORIES_TABLE, null, record]]);
      showToast(t('categoryCreated'), 'success');
    }
    closeModalForce();
    await loadAllData();
    refreshAllViews();
    renderSettingsCategoriesList();
  } catch (e) {
    console.error('Error adding category:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function deleteCategory(categoryId) {
  if (!isOwner) return;
  var confirmed = await showConfirmModal(currentLang === 'fr' ? 'Supprimer ce produit ?' : 'Delete this product?', currentLang === 'fr' ? 'Supprimer' : 'Delete');
  if (!confirmed) return;

  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', CATEGORIES_TABLE, categoryId]
    ]);
    showToast(t('categoryDeleted'), 'info');
    closeModalForce();
    await loadAllData();
    refreshAllViews();
    renderSettingsCategoriesList();
  } catch (e) {
    console.error('Error deleting category:', e);
  }
}

async function getRoleChoicesFromGrist() {
  var roleSet = {};
  var hasGristChoices = false;

  // Try to get choices defined in Grist column metadata (source of truth)
  try {
    var roleColName = getColumnName('users', 'role');
    var tablesData = await grist.docApi.fetchTable('_grist_Tables');
    var columnsData = await grist.docApi.fetchTable('_grist_Tables_column');

    var tableRowId = null;
    if (tablesData && tablesData.id && tablesData.tableId) {
      for (var i = 0; i < tablesData.id.length; i++) {
        if (tablesData.tableId[i] === USERS_TABLE) { tableRowId = tablesData.id[i]; break; }
      }
    }

    if (tableRowId !== null && columnsData && columnsData.id) {
      for (var j = 0; j < columnsData.id.length; j++) {
        if (columnsData.parentId[j] === tableRowId && columnsData.colId[j] === roleColName) {
          var wo = columnsData.widgetOptions[j];
          if (wo) {
            try {
              var opts = JSON.parse(wo);
              if (opts.choices && Array.isArray(opts.choices) && opts.choices.length > 0) {
                opts.choices.forEach(function(c) { roleSet[c] = true; });
                hasGristChoices = true;
              }
            } catch (e) { /* ignore parse errors */ }
          }
          break;
        }
      }
    }
  } catch (e) {
    console.log('Could not fetch role choices from Grist metadata:', e);
  }

  // Add defaults only if no choices are defined yet (first-time setup)
  if (!hasGristChoices) {
    ['admin', 'member', 'viewer'].forEach(function(r) { roleSet[r] = true; });
  }

  // Always include roles currently assigned to users (so no user is orphaned)
  users.forEach(function(u) { getUserRoles(u).forEach(function(r) { if (r) roleSet[r] = true; }); });

  return Object.keys(roleSet).sort();
}

// In-memory state for the manage roles modal
var _manageRolesState = { choices: [] };

async function openManageRolesModal() {
  var choices = await getRoleChoicesFromGrist();
  _manageRolesState.choices = choices.slice();
  renderManageRolesModal();
}

function renderManageRolesModal() {
  var choices = _manageRolesState.choices;
  // Build usage map: role -> count of users (ChoiceList-safe)
  var usage = {};
  users.forEach(function(u) { getUserRoles(u).forEach(function(r) { if (r) usage[r] = (usage[r] || 0) + 1; }); });

  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>' + t('manageRolesTitle') + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<p style="color:#64748b;font-size:13px;margin:0 0 12px 0;">' + t('manageRolesSubtitle') + '</p>';

  // Existing roles list
  html += '<div class="settings-items">';
  if (choices.length === 0) {
    html += '<div style="text-align:center;color:#94a3b8;padding:20px;">--</div>';
  } else {
    for (var i = 0; i < choices.length; i++) {
      var r = choices[i];
      var count = usage[r] || 0;
      html += '<div class="settings-item">';
      html += '<div class="settings-item-info">';
      html += '<strong>' + sanitize(roleLabel(r)) + '</strong>';
      html += '<span class="settings-item-meta">' + count + ' ' + (currentLang === 'fr' ? 'utilisateur(s)' : 'user(s)') + '</span>';
      html += '</div>';
      html += '<div class="settings-item-actions">';
      html += '<button class="btn-icon" onclick="removeRoleChoice(' + i + ')" title="' + t('confirmDeleteRole') + '">🗑️</button>';
      html += '</div>';
      html += '</div>';
    }
  }
  html += '</div>';

  // Add new role
  html += '<div style="display:flex;gap:8px;margin-top:16px;">';
  html += '<input type="text" id="new-role-name" placeholder="' + t('newRolePlaceholder') + '" style="flex:1;" onkeydown="if(event.key===\'Enter\'){addRoleChoice();}" />';
  html += '<button class="btn btn-primary btn-sm" onclick="addRoleChoice()">+ ' + t('addRole') + '</button>';
  html += '</div>';

  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="saveRoleChoices()">' + t('save') + '</button>';
  html += '</div></div></div>';

  document.getElementById('modal-container').innerHTML = html;
}

function addRoleChoice() {
  var input = document.getElementById('new-role-name');
  var name = (input.value || '').trim();
  if (!name) return;
  if (_manageRolesState.choices.indexOf(name) !== -1) {
    showToast(currentLang === 'fr' ? 'Ce rôle existe déjà' : 'Role already exists', 'error');
    return;
  }
  _manageRolesState.choices.push(name);
  renderManageRolesModal();
}

function removeRoleChoice(index) {
  var role = _manageRolesState.choices[index];
  // Check if used
  var inUse = users.some(function(u) { return userMatchesRole(u, role); });
  if (inUse) {
    if (!confirm(t('cannotDeleteUsedRole') + '. ' + (currentLang === 'fr' ? 'Continuer ?' : 'Continue?'))) {
      return;
    }
  } else if (!confirm(t('confirmDeleteRole'))) {
    return;
  }
  _manageRolesState.choices.splice(index, 1);
  renderManageRolesModal();
}

async function saveRoleChoices() {
  try {
    var roleColName = getColumnName('users', 'role');
    var tablesData = await grist.docApi.fetchTable('_grist_Tables');
    var columnsData = await grist.docApi.fetchTable('_grist_Tables_column');

    // Find table row id
    var tableRowId = null;
    for (var i = 0; i < tablesData.id.length; i++) {
      if (tablesData.tableId[i] === USERS_TABLE) { tableRowId = tablesData.id[i]; break; }
    }
    if (tableRowId === null) throw new Error('Table not found');

    // Find Role column and existing widgetOptions
    var existingOpts = {};
    for (var j = 0; j < columnsData.id.length; j++) {
      if (columnsData.parentId[j] === tableRowId && columnsData.colId[j] === roleColName) {
        var wo = columnsData.widgetOptions[j];
        if (wo) {
          try { existingOpts = JSON.parse(wo); } catch (e) {}
        }
        break;
      }
    }

    // Update choices
    existingOpts.choices = _manageRolesState.choices;
    if (!existingOpts.widget) existingOpts.widget = 'TextBox';

    await grist.docApi.applyUserActions([
      ['ModifyColumn', USERS_TABLE, roleColName, { widgetOptions: JSON.stringify(existingOpts) }]
    ]);
    showToast(t('rolesUpdated'), 'success');
    closeModalForce();
  } catch (e) {
    console.error('Error saving roles:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function openEditUserModal(userId) {
  var user = users.find(function(u) { return u.id === userId; });
  if (!user) return;

  var groupOptions = '<option value="">--</option>';
  for (var i = 0; i < groups.length; i++) {
    var sel = groups[i].Name === user.Group_Name ? ' selected' : '';
    groupOptions += '<option value="' + sanitize(groups[i].Name) + '"' + sel + '>' + sanitize(groups[i].Name) + '</option>';
  }

  var roleChoices = await getRoleChoicesFromGrist();

  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>' + t('edit') + ' - ' + sanitize(user.Name) + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<div class="form-group"><label>' + t('fieldName') + '</label><input type="text" id="user-name" value="' + sanitize(user.Name) + '" /></div>';
  html += '<div class="form-group"><label>' + t('fieldEmail') + '</label><input type="email" id="user-email" value="' + sanitize(user.Email) + '" /></div>';
  html += '<div class="form-row">';
  html += '<div class="form-group"><label>' + t('fieldRole') + '</label><select id="user-role">';
  // Add current role first if it's not in the choices list
  if (user.Role && roleChoices.indexOf(user.Role) === -1) {
    html += '<option value="' + sanitize(user.Role) + '" selected>' + sanitize(roleLabel(user.Role)) + '</option>';
  }
  for (var i = 0; i < roleChoices.length; i++) {
    var r = roleChoices[i];
    var sel = (user.Role === r) ? ' selected' : '';
    html += '<option value="' + sanitize(r) + '"' + sel + '>' + sanitize(roleLabel(r)) + '</option>';
  }
  html += '</select></div>';
  html += '<div class="form-group"><label>' + t('fieldGroup') + '</label><select id="user-group">' + groupOptions + '</select></div>';
  html += '</div>';
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="updateUser(' + userId + ')">' + t('save') + '</button>';
  html += '</div></div></div>';

  document.getElementById('modal-container').innerHTML = html;
}

function openEditGroupModal(groupId) {
  var group = groups.find(function(g) { return g.id === groupId; });
  if (!group) return;

  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>' + t('edit') + ' - ' + sanitize(group.Name) + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<div class="form-group"><label>' + t('fieldName') + '</label><input type="text" id="group-name" value="' + sanitize(group.Name) + '" /></div>';
  html += '<div class="form-group"><label>' + t('fieldDescription') + '</label><textarea id="group-desc">' + sanitize(group.Description || '') + '</textarea></div>';
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="updateGroup(' + groupId + ')">' + t('save') + '</button>';
  html += '</div></div></div>';

  document.getElementById('modal-container').innerHTML = html;
}

async function updateUser(userId) {
  var name = document.getElementById('user-name').value.trim();
  if (!name) return;

  var record = {};
  record[getColumnName('users', 'name')] = name;
  record[getColumnName('users', 'email')] = document.getElementById('user-email').value.trim();
  record[getColumnName('users', 'role')] = document.getElementById('user-role').value;
  record[getColumnName('users', 'group')] = document.getElementById('user-group').value;

  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', USERS_TABLE, userId, record]
    ]);
    showToast(t('taskUpdated'), 'success');
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error updating user:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function updateGroup(groupId) {
  var name = document.getElementById('group-name').value.trim();
  if (!name) return;

  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', GROUPS_TABLE, groupId, {
        Name: name,
        Description: document.getElementById('group-desc').value.trim()
      }]
    ]);
    showToast(t('taskUpdated'), 'success');
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error updating group:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function openNewUserModal() {
  var groupOptions = '<option value="">--</option>';
  for (var i = 0; i < groups.length; i++) {
    groupOptions += '<option value="' + sanitize(groups[i].Name) + '">' + sanitize(groups[i].Name) + '</option>';
  }

  var roleChoices = await getRoleChoicesFromGrist();

  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>' + t('modalNewUser') + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<div class="form-group"><label>' + t('fieldName') + '</label><input type="text" id="user-name" /></div>';
  html += '<div class="form-group"><label>' + t('fieldEmail') + '</label><input type="email" id="user-email" /></div>';
  html += '<div class="form-row">';
  html += '<div class="form-group"><label>' + t('fieldRole') + '</label><select id="user-role">';
  for (var i = 0; i < roleChoices.length; i++) {
    var r = roleChoices[i];
    var sel = (r === 'member') ? ' selected' : '';
    html += '<option value="' + sanitize(r) + '"' + sel + '>' + sanitize(roleLabel(r)) + '</option>';
  }
  html += '</select></div>';
  html += '<div class="form-group"><label>' + t('fieldGroup') + '</label><select id="user-group">' + groupOptions + '</select></div>';
  html += '</div>';
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="createUser()">' + t('save') + '</button>';
  html += '</div></div></div>';

  document.getElementById('modal-container').innerHTML = html;
}

function openNewGroupModal() {
  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>' + t('modalNewGroup') + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<div class="form-group"><label>' + t('fieldName') + '</label><input type="text" id="group-name" /></div>';
  html += '<div class="form-group"><label>' + t('fieldDescription') + '</label><textarea id="group-desc"></textarea></div>';
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="createGroup()">' + t('save') + '</button>';
  html += '</div></div></div>';

  document.getElementById('modal-container').innerHTML = html;
}

async function createUser() {
  var name = document.getElementById('user-name').value.trim();
  if (!name) return;

  var record = {};
  record[getColumnName('users', 'name')] = name;
  record[getColumnName('users', 'email')] = document.getElementById('user-email').value.trim();
  record[getColumnName('users', 'role')] = document.getElementById('user-role').value;
  record[getColumnName('users', 'group')] = document.getElementById('user-group').value;

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', USERS_TABLE, null, record]
    ]);
    showToast(t('userCreated'), 'success');
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error creating user:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function createGroup() {
  var name = document.getElementById('group-name').value.trim();
  if (!name) return;

  var record = {
    Name: name,
    Description: document.getElementById('group-desc').value.trim()
  };

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', GROUPS_TABLE, null, record]
    ]);
    showToast(t('groupCreated'), 'success');
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error creating group:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function deleteUser(userId) {
  if (!isOwner) return;
  var confirmed = await showConfirmModal(t('confirmDeleteUser'), currentLang === 'fr' ? 'Supprimer l\'utilisateur' : 'Delete user');
  if (!confirmed) return;
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', USERS_TABLE, userId]
    ]);
    showToast(t('userDeleted'), 'info');
    await loadAllData();
  } catch (e) {
    console.error('Error deleting user:', e);
  }
}

async function deleteGroup(groupId) {
  if (!isOwner) return;
  var confirmed = await showConfirmModal(t('confirmDeleteGroup'), currentLang === 'fr' ? 'Supprimer le groupe' : 'Delete group');
  if (!confirmed) return;
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', GROUPS_TABLE, groupId]
    ]);
    showToast(t('groupDeleted'), 'info');
    await loadAllData();
  } catch (e) {
    console.error('Error deleting group:', e);
  }
}

// =============================================================================
// MODALS
// =============================================================================

function openNewTaskModal(defaultStatus) {
  return startNewTask(defaultStatus); // approche brouillon -> éditeur complet
  // --- ancien formulaire de création (désactivé, conservé pour référence) ---
  editAssignees = [];
  editAccountable = [];
  editConsulted = [];
  editInformed = [];

  var groupOptions = '<option value="">--</option>';
  for (var i = 0; i < groups.length; i++) {
    groupOptions += '<option value="' + sanitize(groups[i].Name) + '">' + sanitize(groups[i].Name) + '</option>';
  }

  var dotColor = '#f59e0b'; // default medium

  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal modal-detail" onclick="event.stopPropagation()">';

  // Top bar
  html += '<div class="modal-detail-top">';
  html += '<span class="group-dot" style="background:' + dotColor + '"></span>';
  html += '<span style="font-size:14px;font-weight:800;">' + t('modalNewTask') + '</span>';
  html += '<div style="flex:1;"></div>';
  html += '<button class="modal-close" onclick="closeModalForce()">✕</button>';
  html += '</div>';

  // Content: left only for creation (no right panel summary yet)
  html += '<div class="modal-detail-content" style="grid-template-columns:1fr;">';

  // === LEFT PANEL ===
  html += '<div class="modal-detail-left">';
  html += '<label class="detail-block-label" for="task-title">' + t('fieldTitle') + '</label>';
  html += '<input class="detail-title-input" type="text" id="task-title" placeholder="' + t('fieldTitle') + '" />';

  // Description
  html += '<div class="detail-field">';
  html += '<div class="detail-field-value"><textarea id="task-desc" placeholder="' + t('fieldDescription') + '"></textarea></div>';
  html += '</div>';

  // Assignees (multi) — or RACI roles
  if (raciEnabled) {
    html += renderRaciField('R', t('raciResponsible'), 'assignee', 'editAssignees');
    html += renderRaciField('A', t('raciAccountable'), 'accountable', 'editAccountable');
    html += renderRaciField('C', t('raciConsulted'), 'consulted', 'editConsulted');
    html += renderRaciField('I', t('raciInformed'), 'informed', 'editInformed');
  } else {
    html += '<div class="detail-field">';
    html += '<span class="detail-field-icon">👤</span>';
    html += '<span class="detail-field-label">' + t('fieldAssignee') + '</span>';
    html += '<div class="detail-field-value">';
    html += '<div class="assignee-chips" id="assignee-chips"></div>';
    html += '<div class="assignee-add-row">';
    html += '<select id="assignee-select">';
    html += '<option value="">-- ' + t('searchAssignee') + ' --</option>';
    for (var i = 0; i < users.length; i++) {
      html += '<option value="' + sanitize(users[i].Email || users[i].Name) + '">' + sanitize(users[i].Name || users[i].Email) + '</option>';
    }
    html += '</select>';
    html += '<button class="assignee-add-btn" onclick="addRaciChip(\'editAssignees\',\'assignee\')">' + t('addAssignee') + '</button>';
    html += '</div>';
    html += '</div></div>';
  }

  // Status + Priority
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">';
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">📊</span>';
  html += '<span class="detail-field-label">' + t('fieldStatus') + '</span>';
  html += '<div class="detail-field-value"><select id="task-status">';
  var _statuses = getKanbanStatuses();
  for (var _si = 0; _si < _statuses.length; _si++) {
    var _s = _statuses[_si];
    var _sl = currentLang === 'fr' ? _s.label_fr : _s.label_en;
    html += '<option value="' + _s.key + '"' + ((defaultStatus === _s.key || (!defaultStatus && _si === 0)) ? ' selected' : '') + '>' + _sl + '</option>';
  }
  html += '</select></div></div>';

  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">🔥</span>';
  html += '<span class="detail-field-label">' + t('fieldPriority') + '</span>';
  html += '<div class="detail-field-value"><select id="task-priority">';
  html += '<option value="medium">' + t('priorityMedium') + '</option>';
  html += '<option value="high">' + t('priorityHigh') + '</option>';
  html += '<option value="low">' + t('priorityLow') + '</option>';
  html += '</select></div></div>';
  html += '</div>';

  // Group
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">👥</span>';
  html += '<span class="detail-field-label">' + t('fieldGroup') + '</span>';
  html += '<div class="detail-field-value"><select id="task-group">' + groupOptions + '</select></div>';
  html += '</div>';

  // Dates
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">';
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">📅</span>';
  html += '<span class="detail-field-label">' + t('fieldStartDate') + '</span>';
  html += '<div class="detail-field-value"><input type="date" id="task-start" /></div>';
  html += '</div>';

  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">⏰</span>';
  html += '<span class="detail-field-label">' + t('fieldDueDate') + '</span>';
  html += '<div class="detail-field-value"><input type="date" id="task-due" /></div>';
  html += '</div>';
  html += '</div>';

  // Project
  var projectOptions = '<option value="">' + t('noProject') + '</option>';
  for (var pi = 0; pi < projects.length; pi++) {
    var projSelected = currentProjectId === projects[pi].id ? ' selected' : '';
    projectOptions += '<option value="' + projects[pi].id + '"' + projSelected + '>' + sanitize(projects[pi].Name) + '</option>';
  }
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">📂</span>';
  html += '<span class="detail-field-label">' + t('project') + '</span>';
  html += '<div class="detail-field-value"><select id="task-project">' + projectOptions + '</select></div>';
  html += '</div>';

  // Category
  var newCategoryOptions = '<option value="">--</option>';
  for (var nci = 0; nci < categories.length; nci++) {
    newCategoryOptions += '<option value="' + sanitize(categories[nci].Name) + '">' + sanitize(categories[nci].Name) + '</option>';
  }
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">📁</span>';
  html += '<span class="detail-field-label">' + t('fieldCategory') + '</span>';
  html += '<div class="detail-field-value"><select id="task-category">' + newCategoryOptions + '</select></div>';
  html += '</div>';

  // Tag
  var newTagOptions = '<option value="">--</option>';
  for (var nti = 0; nti < tags.length; nti++) {
    newTagOptions += '<option value="' + sanitize(tags[nti].Name) + '">' + sanitize(tags[nti].Name) + '</option>';
  }
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">🏷️</span>';
  html += '<span class="detail-field-label">' + t('tag') + '</span>';
  html += '<div class="detail-field-value"><select id="task-tag">' + newTagOptions + '</select></div>';
  html += '</div>';

  html += '</div>'; // end left
  html += '</div>'; // end content

  // Footer
  html += '<div class="modal-detail-footer">';
  html += '<div></div>';
  html += '<div style="display:flex;gap:8px;">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="createTask()">' + t('save') + '</button>';
  html += '</div></div>';

  html += '</div></div>'; // end modal + overlay

  document.getElementById('modal-container').innerHTML = html;
}

var editAssignees = [];
var editAccountable = [];
var editConsulted = [];
var editInformed = [];
var draftTaskId = null; // id de la tâche brouillon en cours de création (approche "créer puis éditer")

// Crée une tâche brouillon immédiatement puis ouvre l'éditeur COMPLET.
// À la fermeture : si un titre a été saisi -> enregistrée ; sinon -> brouillon supprimé.
async function startNewTask(defaultStatus, dateStr, prefill) {
  prefill = prefill || {};
  var statuses = getKanbanStatuses();
  var record = {};
  setField(record, 'tasks', 'title', prefill.title || '');
  setField(record, 'tasks', 'status', defaultStatus || (statuses[0] && statuses[0].key) || 'todo');
  setField(record, 'tasks', 'priority', prefill.priority || 'medium');
  if (prefill.description) setField(record, 'tasks', 'description', prefill.description);
  if (prefill.category) setField(record, 'tasks', 'category', prefill.category);
  if (prefill.group) setField(record, 'tasks', 'group', prefill.group);
  if (prefill.tag) setField(record, 'tasks', 'tag', prefill.tag);
  if (prefill.recurrence && prefill.recurrence !== 'none') setField(record, 'tasks', 'recurrence', prefill.recurrence);
  if (prefill.estimatedHours) setField(record, 'tasks', 'estimatedHours', prefill.estimatedHours);
  if (currentProjectId) setField(record, 'tasks', 'projectId', currentProjectId);
  setField(record, 'tasks', 'createdAt', Math.floor(Date.now() / 1000));
  record.Auto_Extend = true;
  if (dateStr) { setField(record, 'tasks', 'startDate', toEpoch(dateStr)); setField(record, 'tasks', 'dueDate', toEpoch(dateStr)); }
  try {
    var res = await grist.docApi.applyUserActions([['AddRecord', TASKS_TABLE, null, record]]);
    var newId = (res && res.retValues && res.retValues[0]) || null;
    if (!newId) { showToast('Error', 'error'); return; }
    draftTaskId = newId;
    await loadAllData();
    openEditTaskModal(newId);
  } catch (e) { showToast('Error: ' + e.message, 'error'); }
}

function openEditTaskModal(taskId, preserveAssignees) {
  var task = tasks.find(function(t) { return t.id === taskId; });
  if (!task) return;

  if (!preserveAssignees) {
    editAssignees = task.Assignee ? task.Assignee.split(',').map(function(a) { return a.trim(); }).filter(Boolean) : [];
    editAccountable = task.Accountable ? task.Accountable.split(',').map(function(a) { return a.trim(); }).filter(Boolean) : [];
    editConsulted = task.Consulted ? task.Consulted.split(',').map(function(a) { return a.trim(); }).filter(Boolean) : [];
    editInformed = task.Informed ? task.Informed.split(',').map(function(a) { return a.trim(); }).filter(Boolean) : [];
  }

  var groupOptions = '<option value="">--</option>';
  for (var i = 0; i < groups.length; i++) {
    var sel = groups[i].Name === task.Group_Name ? ' selected' : '';
    groupOptions += '<option value="' + sanitize(groups[i].Name) + '"' + sel + '>' + sanitize(groups[i].Name) + '</option>';
  }

  var startVal = task.Start_Date ? new Date(task.Start_Date * 1000).toISOString().split('T')[0] : '';
  var dueVal = task.Due_Date ? new Date(task.Due_Date * 1000).toISOString().split('T')[0] : '';

  // Progress calculation based on subtasks
  var progressPct = getTaskProgress(task);
  var barClass = progressPct === 100 ? 'bar-done' : (progressPct >= 50 ? 'bar-progress' : 'bar-todo');

  // Priority dot color
  var dotColor = task.Priority === 'high' ? '#ef4444' : (task.Priority === 'medium' ? '#f59e0b' : '#22c55e');

  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal modal-detail" onclick="event.stopPropagation()">';

  // Top bar: group + status badge
  html += '<div class="modal-detail-top">';
  html += '<span class="group-dot" style="background:' + dotColor + '"></span>';
  if (task.Group_Name) html += '<span style="font-size:12px;color:#64748b;">' + sanitize(task.Group_Name) + '</span>';
  html += '<span class="status-badge status-' + task.Status + '">● ' + statusLabel(task.Status) + '</span>';
  html += '<div style="flex:1;"></div>';
  html += '<button class="btn btn-primary" onclick="updateTask(' + task.id + ')" style="padding:6px 16px;font-size:12px;border-radius:8px;margin-right:8px;">💾 ' + t('save') + '</button>';
  html += '<button class="modal-close" onclick="closeModalForce()">✕</button>';
  html += '</div>';

  // Content: left + right
  html += '<div class="modal-detail-content">';

  // === LEFT PANEL ===
  html += '<div class="modal-detail-left">';
  html += '<label class="detail-block-label" for="task-title">' + t('fieldTitle') + '</label>';
  html += '<input class="detail-title-input" type="text" id="task-title" value="' + sanitize(task.Title) + '" placeholder="' + t('fieldTitle') + '" />';

  // Description
  html += '<div class="detail-field">';
  html += '<div class="detail-field-value"><textarea id="task-desc" placeholder="' + t('fieldDescription') + '">' + sanitize(task.Description) + '</textarea></div>';
  html += '</div>';

  // Assignees (multi) — or RACI roles
  if (raciEnabled) {
    html += renderRaciField('R', t('raciResponsible'), 'assignee', 'editAssignees');
    html += renderRaciField('A', t('raciAccountable'), 'accountable', 'editAccountable');
    html += renderRaciField('C', t('raciConsulted'), 'consulted', 'editConsulted');
    html += renderRaciField('I', t('raciInformed'), 'informed', 'editInformed');
  } else {
    html += '<div class="detail-field">';
    html += '<span class="detail-field-icon">👤</span>';
    html += '<span class="detail-field-label">' + t('fieldAssignee') + '</span>';
    html += '<div class="detail-field-value">';
    html += '<div class="assignee-chips" id="assignee-chips">';
    html += renderRaciChips('editAssignees');
    html += '</div>';
    html += '<div class="assignee-add-row">';
    html += '<select id="assignee-select" onchange="addRaciChip(\'editAssignees\',\'assignee\')">';
    html += '<option value="">-- ' + t('searchAssignee') + ' --</option>';
    for (var i = 0; i < users.length; i++) {
      html += '<option value="' + sanitize(users[i].Email || users[i].Name) + '">' + sanitize(users[i].Name || users[i].Email) + '</option>';
    }
    html += '</select>';
    html += '<button class="assignee-add-btn" onclick="addRaciChip(\'editAssignees\',\'assignee\')">' + t('addAssignee') + '</button>';
    html += '</div>';
    html += '</div></div>';
  }

  // Status
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">📊</span>';
  html += '<span class="detail-field-label">' + t('fieldStatus') + '</span>';
  html += '<div class="detail-field-value"><select id="task-status">';
  var _statuses2 = getKanbanStatuses();
  for (var _si2 = 0; _si2 < _statuses2.length; _si2++) {
    var _s2 = _statuses2[_si2];
    var _sl2 = currentLang === 'fr' ? _s2.label_fr : _s2.label_en;
    html += '<option value="' + _s2.key + '"' + (task.Status === _s2.key ? ' selected' : '') + '>' + _sl2 + '</option>';
  }
  html += '</select></div></div>';

  // Dates
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">📅</span>';
  html += '<span class="detail-field-label">' + t('fieldStartDate') + '</span>';
  html += '<div class="detail-field-value"><input type="date" id="task-start" value="' + startVal + '" /></div>';
  html += '</div>';

  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">⏰</span>';
  html += '<span class="detail-field-label">' + t('fieldDueDate') + '</span>';
  html += '<div class="detail-field-value"><input type="date" id="task-due" value="' + dueVal + '" /></div>';
  html += '</div>';

  // Priority
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">🔥</span>';
  html += '<span class="detail-field-label">' + t('fieldPriority') + '</span>';
  html += '<div class="detail-field-value"><select id="task-priority">';
  html += '<option value="high"' + (task.Priority === 'high' ? ' selected' : '') + '>' + t('priorityHigh') + '</option>';
  html += '<option value="medium"' + (task.Priority === 'medium' ? ' selected' : '') + '>' + t('priorityMedium') + '</option>';
  html += '<option value="low"' + (task.Priority === 'low' ? ' selected' : '') + '>' + t('priorityLow') + '</option>';
  html += '</select></div></div>';

  // Group
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">👥</span>';
  html += '<span class="detail-field-label">' + t('fieldGroup') + '</span>';
  html += '<div class="detail-field-value"><select id="task-group">' + groupOptions + '</select></div>';
  html += '</div>';

  // Project
  var projectOptions = '<option value="">' + t('noProject') + '</option>';
  for (var pi = 0; pi < projects.length; pi++) {
    var projSel = projects[pi].id === task.Project_Id ? ' selected' : '';
    projectOptions += '<option value="' + projects[pi].id + '"' + projSel + '>' + sanitize(projects[pi].Name) + '</option>';
  }
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">📂</span>';
  html += '<span class="detail-field-label">' + t('project') + '</span>';
  html += '<div class="detail-field-value"><select id="task-project">' + projectOptions + '</select></div>';
  html += '</div>';

  // Category
  var categoryOptions = '<option value="">--</option>';
  for (var ci = 0; ci < categories.length; ci++) {
    var catSel = categories[ci].Name === task.Category ? ' selected' : '';
    categoryOptions += '<option value="' + sanitize(categories[ci].Name) + '"' + catSel + '>' + sanitize(categories[ci].Name) + '</option>';
  }
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">📁</span>';
  html += '<span class="detail-field-label">' + t('fieldCategory') + '</span>';
  html += '<div class="detail-field-value"><select id="task-category">' + categoryOptions + '</select></div>';
  html += '</div>';

  // Tag
  var tagOptions = '<option value="">--</option>';
  for (var ti = 0; ti < tags.length; ti++) {
    var tagSel = tags[ti].Name === task.Tag ? ' selected' : '';
    tagOptions += '<option value="' + sanitize(tags[ti].Name) + '"' + tagSel + '>' + sanitize(tags[ti].Name) + '</option>';
  }
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">🏷️</span>';
  html += '<span class="detail-field-label">' + t('tag') + '</span>';
  html += '<div class="detail-field-value"><select id="task-tag">' + tagOptions + '</select></div>';
  html += '</div>';

  // === SUBTASKS SECTION ===
  var taskSubtasks = getTaskSubtasks(task.id);
  html += '<div class="subtasks-section">';
  html += '<div class="subtasks-header">';
  html += '<span class="detail-field-icon">☑️</span>';
  html += '<span class="detail-field-label">' + t('subtasks') + '</span>';
  html += '<span class="subtask-badge">' + taskSubtasks.filter(function(st) { return st.Completed; }).length + '/' + taskSubtasks.length + '</span>';
  html += '</div>';
  
  html += '<div class="subtasks-list" id="subtasks-list">';
  if (taskSubtasks.length === 0) {
    html += '<div class="subtasks-empty">' + t('noSubtasks') + '</div>';
  } else {
    for (var si = 0; si < taskSubtasks.length; si++) {
      var st = taskSubtasks[si];
      var stBlocked = isSubtaskBlocked(st);
      var stBlocker = getSubtaskBlocker(st);
      var stDueDateStr = st.Due_Date ? new Date(st.Due_Date * 1000).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '';
      var stDueClass = (st.Due_Date && !st.Completed && st.Due_Date < Math.floor(Date.now() / 1000)) ? ' st-overdue' : '';
      var dodList = getDoD(st);
      var dodDone = dodList.filter(function(d) { return d.done; }).length;
      html += '<div class="subtask-item' + (st.Completed ? ' completed' : '') + (stBlocked ? ' blocked' : '') + '" data-id="' + st.id + '" id="st-row-' + st.id + '">';
      // Normal view
      html += '<div class="subtask-view" id="st-view-' + st.id + '">';
      html += '<input type="checkbox" class="subtask-checkbox" ' + (st.Completed ? 'checked' : '') + (stBlocked ? ' disabled' : '') + ' onchange="toggleSubtask(' + st.id + ', this.checked, this)" />';
      html += '<span class="subtask-title">' + sanitize(st.Title) + '</span>';
      if (stBlocked && stBlocker) {
        html += '<span class="subtask-blocked-badge" title="' + t('blockedBy') + ' ' + sanitize(stBlocker.Title) + '">🔒</span>';
      }
      // Meta : tag + priority + assignee + due date
      html += '<span class="subtask-meta">';
      if (st.Tag) {
        var stTagObj = tags.find(function(tg) { return tg.Name === st.Tag; });
        var stTagColor = stTagObj ? stTagObj.Color : '#94a3b8';
        html += '<span class="subtask-assignee-badge" style="border:1px solid ' + stTagColor + '40;color:' + stTagColor + ';">🏷️ ' + sanitize(st.Tag) + '</span>';
      }
      if (st.Priority && st.Priority !== 'medium') {
        var stPrioColor = st.Priority === 'high' ? '#ef4444' : '#94a3b8';
        html += '<span class="subtask-assignee-badge" style="background:' + stPrioColor + '20;color:' + stPrioColor + ';">' + (st.Priority === 'high' ? '🔴' : '⬇️') + '</span>';
      }
      if (st.Assignee) {
        st.Assignee.split(',').map(function(a) { return a.trim(); }).filter(Boolean).forEach(function(an) {
          html += '<span class="subtask-assignee-badge">👤 ' + sanitize(an) + '</span>';
        });
      }
      if (stDueDateStr) html += '<span class="subtask-due-badge' + stDueClass + '">📅 ' + stDueDateStr + '</span>';
      if (st.Estimated_Hours) html += '<span class="subtask-assignee-badge">⏱ ' + st.Estimated_Hours + 'h</span>';
      html += '</span>';
      html += '<button class="subtask-edit-btn" onclick="startEditSubtask(' + st.id + ', ' + task.id + ')" title="' + t('editSubtask') + '">✏️</button>';
      html += '<button class="subtask-delete" onclick="deleteSubtask(' + st.id + ', ' + task.id + ')" title="' + t('delete') + '">✕</button>';
      html += '</div>';
      // Definition of Done en vue affichage : cases à cocher modifiables, sans ajout ni suppression
      if (dodList.length > 0) {
        html += '<div class="subtask-dod subtask-dod-view" id="st-view-dod-' + st.id + '">';
        html += '<div class="subtask-dod-label">' + t('definitionOfDone') + ' <span class="dod-count">' + dodDone + '/' + dodList.length + '</span></div>';
        html += '<div class="subtask-dod-list' + (dodDone === dodList.length ? ' dod-all-done' : '') + '">';
        dodList.forEach(function(d, di) {
          html += '<div class="dod-item">';
          html += '<input type="checkbox" class="dod-checkbox"' + (d.done ? ' checked' : '') + ' onchange="toggleDoD(' + st.id + ', ' + di + ', this.checked)" />';
          html += '<span class="dod-text-view' + (d.done ? ' dod-text-done' : '') + '">' + sanitize(d.text || '') + '</span>';
          if (d.assignee) html += '<span class="subtask-assignee-badge">👤 ' + sanitize(d.assignee) + '</span>';
          html += '</div>';
        });
        html += '</div>';
        html += '</div>';
      }
      // Edit view (hidden by default)
      // Responsable : liste déroulante à choix unique (comme pour les tâches)
      var stAssigneeSel = (st.Assignee || '').split(',').map(function(a) { return a.trim(); }).filter(Boolean)[0] || '';
      var assigneeListHtml = '<select id="st-assignee-' + st.id + '" class="st-dep-select" style="width:100%;">';
      assigneeListHtml += '<option value="">--</option>';
      for (var ui = 0; ui < users.length; ui++) {
        var uName = users[ui].Name;
        assigneeListHtml += '<option value="' + sanitize(uName) + '"' + (uName === stAssigneeSel ? ' selected' : '') + '>' + sanitize(uName) + '</option>';
      }
      assigneeListHtml += '</select>';
      var stDueDateInput = st.Due_Date ? new Date(st.Due_Date * 1000).toISOString().split('T')[0] : '';
      var stPriority = st.Priority || 'medium';
      var prLbl = { high: t('priorityHigh'), medium: t('priorityMedium'), low: t('priorityLow') };
      html += '<div class="subtask-edit-form" id="st-edit-' + st.id + '">';
      // Title
      html += '<input type="text" class="subtask-edit-title" id="st-title-' + st.id + '" value="' + sanitize(st.Title) + '" placeholder="' + (currentLang === 'fr' ? 'Titre de la sous-tâche...' : 'Subtask title...') + '">';
      // Description
      html += '<textarea class="subtask-edit-title" id="st-desc-' + st.id + '" rows="2" placeholder="' + (currentLang === 'fr' ? 'Description (optionnel)...' : 'Description (optional)...') + '" style="resize:vertical;">' + sanitize(st.Description || '') + '</textarea>';
      // B2 : type (sous-tâche / jalon)
      var stType = st.Type || 'subtask';
      html += '<div><div class="st-pill-label">' + (currentLang === 'fr' ? 'Type' : 'Type') + '</div>';
      html += '<div class="st-pill-group" id="st-type-group-' + st.id + '">';
      html += '<button type="button" class="st-pill' + (stType !== 'milestone' ? ' active-progress' : '') + '" data-key="subtask" onclick="setStType(' + st.id + ',\'subtask\',this)">' + (currentLang === 'fr' ? '↳ Sous-tâche' : '↳ Subtask') + '</button>';
      html += '<button type="button" class="st-pill' + (stType === 'milestone' ? ' active-progress' : '') + '" data-key="milestone" onclick="setStType(' + st.id + ',\'milestone\',this)">' + (currentLang === 'fr' ? '◆ Jalon (1 date)' : '◆ Milestone (1 date)') + '</button>';
      html += '</div>';
      html += '<input type="hidden" id="st-type-' + st.id + '" value="' + stType + '">';
      html += '</div>';
      // Tag : liste déroulante à choix unique (comme pour les tâches)
      html += '<div>';
      html += '<div class="st-pill-label">🏷️ ' + t('tag') + '</div>';
      html += '<select id="st-tag-' + st.id + '" class="st-dep-select" style="width:100%;">';
      html += '<option value="">--</option>';
      for (var stTi = 0; stTi < tags.length; stTi++) {
        html += '<option value="' + sanitize(tags[stTi].Name) + '"' + (tags[stTi].Name === st.Tag ? ' selected' : '') + '>' + sanitize(tags[stTi].Name) + '</option>';
      }
      html += '</select>';
      html += '</div>';
      // Priority pills
      html += '<div>';
      html += '<div class="st-pill-label">' + (currentLang === 'fr' ? 'Priorité' : 'Priority') + '</div>';
      html += '<div class="st-pill-group" id="st-priority-group-' + st.id + '">';
      ['high','medium','low'].forEach(function(p) {
        html += '<button type="button" class="st-pill' + (stPriority === p ? ' active-' + p : '') + '" data-key="' + p + '" onclick="setStPill(\'priority\',' + st.id + ',\'' + p + '\',this)">' + prLbl[p] + '</button>';
      });
      html += '</div>';
      html += '<input type="hidden" id="st-priority-' + st.id + '" value="' + stPriority + '">';
      html += '</div>';
      // Responsable (choix unique)
      html += '<div>';
      html += '<div class="st-pill-label">' + t('subtaskAssignee') + '</div>';
      html += assigneeListHtml;
      html += '</div>';
      // Date + hours row
      html += '<div class="st-meta-row">';
      var stStartDateInput = st.Start_Date ? new Date(st.Start_Date * 1000).toISOString().split('T')[0] : '';
      html += '<input type="date" class="subtask-edit-date" id="st-start-' + st.id + '" value="' + stStartDateInput + '" title="' + (currentLang === 'fr' ? 'Date début' : 'Start date') + '">';
      html += '<input type="date" class="subtask-edit-date" id="st-due-' + st.id + '" value="' + stDueDateInput + '" title="' + (currentLang === 'fr' ? 'Échéance' : 'Due date') + '">';
      html += '<input type="number" class="st-hours-input" id="st-hours-' + st.id + '" value="' + (st.Estimated_Hours || '') + '" placeholder="' + (currentLang === 'fr' ? 'Heures' : 'Hours') + '" min="0" step="0.5">';
      html += '</div>';
      // Dépendance entre sous-tâches (bloquée par une autre sous-tâche de la tâche)
      var stOtherSubtasks = taskSubtasks.filter(function(s2) { return s2.id !== st.id; });
      if (stOtherSubtasks.length > 0) {
        html += '<div class="st-span2">';
        html += '<div class="st-pill-label">🔗 ' + t('blockedBy') + '</div>';
        html += '<select id="st-dep-' + st.id + '" class="st-dep-select" onchange="setSubtaskDependency(' + st.id + ', ' + task.id + ', this.value)">';
        html += '<option value="">-- ' + t('noDependencies') + ' --</option>';
        stOtherSubtasks.forEach(function(s2) {
          html += '<option value="' + s2.id + '"' + (st.Blocked_By_Subtask_Id === s2.id ? ' selected' : '') + '>' + sanitize(s2.Title) + '</option>';
        });
        html += '</select>';
        html += '</div>';
      }
      // Definition of Done : critères en bas du formulaire d'édition
      html += '<div class="subtask-dod">';
      html += '<div class="subtask-dod-label">' + t('definitionOfDone') + (dodList.length > 0 ? ' <span class="dod-count">' + dodDone + '/' + dodList.length + '</span>' : '') + '</div>';
      if (dodList.length > 0) {
        html += '<div class="subtask-dod-list' + (dodDone === dodList.length ? ' dod-all-done' : '') + '">';
        dodList.forEach(function(d, di) {
          html += '<div class="dod-item" id="st-dod-item-' + st.id + '-' + di + '" ondragstart="dodDragStart(event, ' + st.id + ', ' + di + ')" ondragover="dodDragOver(event)" ondrop="dodDrop(event, ' + st.id + ', ' + di + ')" ondragend="dodDragEnd(event)">';
          html += '<span class="dod-drag-handle" onmousedown="dodHandleMouseDown(this.parentNode)" onmouseup="dodHandleMouseUp(this.parentNode)" title="' + (currentLang === 'fr' ? 'Réordonner' : 'Reorder') + '">⋮⋮</span>';
          html += '<input type="checkbox" class="dod-checkbox"' + (d.done ? ' checked' : '') + ' onchange="toggleDoD(' + st.id + ', ' + di + ', this.checked)" />';
          html += '<input type="text" class="dod-text" value="' + sanitize(d.text || '') + '" onchange="renameDoD(' + st.id + ', ' + di + ', this)" />';
          // Responsable par critère : liste déroulante compacte à choix unique
          html += '<select class="dod-assignee" onchange="assignDoD(' + st.id + ', ' + di + ', this)" title="' + t('subtaskAssignee') + '">';
          html += '<option value="">👤 --</option>';
          for (var du = 0; du < users.length; du++) {
            html += '<option value="' + sanitize(users[du].Name) + '"' + (users[du].Name === (d.assignee || '') ? ' selected' : '') + '>' + sanitize(users[du].Name) + '</option>';
          }
          html += '</select>';
          html += '<button type="button" class="dod-delete" onclick="deleteDoD(' + st.id + ', ' + di + ')" title="' + t('delete') + '">✕</button>';
          html += '</div>';
        });
        html += '</div>';
      }
      html += '</div>';
      html += '<div class="st-dod-add-row">';
      html += '<input type="text" id="st-dod-new-' + st.id + '" class="st-dod-add-input" placeholder="' + (currentLang === 'fr' ? 'Saisir un critère...' : 'Enter a criterion...') + '" onkeypress="if(event.key===\'Enter\'){event.preventDefault();addDoDFromInput(' + st.id + ')}">';
      html += '<button type="button" class="dod-add-btn" onclick="addDoDFromInput(' + st.id + ')" title="' + t('addCriterion') + '">➕</button>';
      html += '</div>';
      // Pièces jointes de la sous-tâche (Word, PDF, PPT, XLS...)
      html += '<div class="subtask-attach">';
      html += '<div class="subtask-dod-label">' + (currentLang === 'fr' ? 'Pièces jointes' : 'Attachments') + ' <span class="dod-count">' + getSubtaskAttachments(st.id).length + '</span></div>';
      html += '<div class="attachments-list" id="st-attachments-list-' + st.id + '"></div>';
      html += '<div class="attach-add-row">';
      html += '<label class="attach-upload-btn" style="font-size:11px;padding:4px 12px;">📎 ' + (currentLang === 'fr' ? 'Ajouter un fichier' : 'Add file') + '<input type="file" multiple accept=".doc,.docx,.pdf,.ppt,.pptx,.xls,.xlsx" style="display:none;" onchange="uploadSubtaskAttachments(' + st.id + ', ' + task.id + ', Array.from(this.files)); this.value=\'\';"></label>';
      html += '<span class="attach-status" id="st-attach-status-' + st.id + '"></span>';
      html += '</div>';
      html += '</div>';
      // Actions
      html += '<div class="st-form-actions">';
      html += '<button type="button" class="subtask-cancel-btn" onclick="cancelEditSubtask(' + st.id + ')">' + (currentLang === 'fr' ? 'Annuler' : 'Cancel') + '</button>';
      html += '<button type="button" class="subtask-save-btn" onclick="saveEditSubtask(' + st.id + ', ' + task.id + ')">✓ ' + (currentLang === 'fr' ? 'Enregistrer' : 'Save') + '</button>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
    }
  }
  html += '</div>';

  // Add subtask input
  html += '<div class="subtask-add-row">';
  html += '<input type="text" id="new-subtask-input" class="subtask-input" placeholder="' + t('subtaskPlaceholder') + '" onkeypress="if(event.key===\'Enter\')addSubtask(' + task.id + ')" />';
  html += '<button class="subtask-add-btn" onclick="addSubtask(' + task.id + ')">+</button>';
  html += '</div>';
  html += '</div>';

  html += '</div>'; // end left

  // === RIGHT PANEL ===
  html += '<div class="modal-detail-right">';

  // Progression card
  html += '<div class="detail-card">';
  html += '<h4>⏳ ' + t('progression') + '</h4>';
  html += '<div class="detail-info-row"><span class="info-label">' + t('advancement') + '</span><span class="info-value">' + progressPct + '%</span></div>';
  html += '<div class="progress-bar-bg"><div class="progress-bar-fill ' + barClass + '" style="width:' + progressPct + '%"></div></div>';
  html += '<div class="detail-info-row"><span class="info-label">' + t('startLabel') + '</span><span class="info-value">' + (startVal ? formatDate(task.Start_Date) : '--') + '</span></div>';
  html += '<div class="detail-info-row"><span class="info-label">' + t('dueLabel') + '</span><span class="info-value" style="' + (isOverdue(task) ? 'color:#dc2626;' : '') + '">' + (dueVal ? formatDate(task.Due_Date) : '--') + (isOverdue(task) ? ' ⚠️' : '') + '</span></div>';
  html += '</div>';

  // Quick actions card
  html += '<div class="detail-card">';
  html += '<h4>⚡ ' + t('quickActions') + '</h4>';
  if (task.Status === 'done') {
    html += '<button class="quick-action-btn" onclick="quickAction(' + task.id + ',\'todo\')">🔄 ' + t('reopenTask') + '</button>';
  } else if (task.Status === 'todo') {
    html += '<button class="quick-action-btn" onclick="quickAction(' + task.id + ',\'progress\')">▶️ ' + t('startTask') + '</button>';
    html += '<button class="quick-action-btn" onclick="quickAction(' + task.id + ',\'done\')">✅ ' + t('completeTask') + '</button>';
  } else {
    html += '<button class="quick-action-btn" onclick="quickAction(' + task.id + ',\'done\')">✅ ' + t('completeTask') + '</button>';
    html += '<button class="quick-action-btn" onclick="quickAction(' + task.id + ',\'todo\')">⏪ ' + t('reopenTask') + '</button>';
  }
  html += '</div>';

  // Summary card
  html += '<div class="detail-card">';
  html += '<h4>📋 ' + t('taskSummary') + '</h4>';
  html += '<div class="detail-info-row"><span class="info-label">' + t('fieldStatus') + ' :</span><span class="info-value" style="color:' + (task.Status === 'done' ? '#22c55e' : (task.Status === 'progress' ? '#3b82f6' : '#f59e0b')) + '">' + statusLabel(task.Status) + '</span></div>';
  html += '<div class="detail-info-row"><span class="info-label">' + t('fieldPriority') + ' :</span><span class="info-value" style="color:' + dotColor + '">' + priorityLabel(task.Priority) + '</span></div>';
  html += '<div class="detail-info-row"><span class="info-label">' + t('fieldAssignee') + ' :</span><span class="info-value">' + editAssignees.length + '</span></div>';
  html += '</div>';

  // Time Tracking card
  var totalTime = getTaskTotalTime(task.id);
  var isTimerRunning = !!activeTimers[task.id];
  var taskTimeEntries = getTaskTimeEntries(task.id);
  html += '<div class="detail-card time-card">';
  html += '<h4>⏱️ ' + t('timeTracking') + '</h4>';
  
  // Timer button
  html += '<div class="timer-control">';
  if (isTimerRunning) {
    html += '<button class="timer-btn timer-stop" onclick="stopTimer(' + task.id + ')">⏹️ ' + t('stopTimer') + '</button>';
    html += '<span class="timer-status running">● ' + t('timerRunning') + '</span>';
  } else {
    html += '<button class="timer-btn timer-start" onclick="startTimer(' + task.id + ')">▶️ ' + t('startTimer') + '</button>';
  }
  html += '</div>';
  
  // Manual time entry
  html += '<div class="manual-time-entry" style="display:flex;align-items:center;gap:6px;margin-top:8px;flex-wrap:wrap;">';
  html += '<input type="number" id="manual-hours" min="0" max="99" placeholder="0" style="width:52px;" class="form-input" title="' + (currentLang === 'fr' ? 'Heures' : 'Hours') + '"> h';
  html += '<input type="number" id="manual-minutes" min="0" max="59" placeholder="0" style="width:52px;" class="form-input" title="' + (currentLang === 'fr' ? 'Minutes' : 'Minutes') + '"> min';
  html += '<button class="btn btn-secondary btn-sm" onclick="addManualTimeEntry(' + task.id + ')">+ ' + (currentLang === 'fr' ? 'Ajouter' : 'Add') + '</button>';
  html += '</div>';

  // Time summary
  html += '<div class="time-summary">';
  html += '<div class="detail-info-row"><span class="info-label">' + t('totalTime') + ' :</span><span class="info-value time-value">' + formatDuration(totalTime) + '</span></div>';
  if (task.Estimated_Hours) {
    var estimatedSec = task.Estimated_Hours * 3600;
    var pctUsed = Math.round((totalTime / estimatedSec) * 100);
    html += '<div class="detail-info-row"><span class="info-label">' + t('estimatedTime') + ' :</span><span class="info-value">' + task.Estimated_Hours + 'h (' + pctUsed + '%)</span></div>';
  }
  html += '</div>';
  
  // Recent time entries (newest first)
  if (taskTimeEntries.length > 0) {
    html += '<div class="time-entries">';
    html += '<div class="time-entries-label">' + t('timeEntries') + ':</div>';
    html += '<div style="max-height:120px;overflow-y:auto;">';
    for (var tei = 0; tei < taskTimeEntries.length; tei++) {
      var te = taskTimeEntries[tei];
      html += '<div class="time-entry-item">';
      html += '<span class="te-duration">' + formatDurationShort(te.Duration) + '</span>';
      html += '<span class="te-date">' + formatTimeAgo(te.Start_Time) + '</span>';
      html += '</div>';
    }
    html += '</div>';
    html += '</div>';
  }
  html += '</div>';

  // Extension card
  html += '<div class="detail-card">';
  html += '<h4>📏 ' + t('extensionDate') + '</h4>';
  var extDateVal = task.Extension_Date ? fromEpoch(task.Extension_Date) : '';
  html += '<div style="margin-bottom:10px;"><input type="date" id="task-extension-date" value="' + extDateVal + '" style="width:100%;padding:6px 10px;border:1px solid #e2e8f0;border-radius:6px;font-size:12px;" /></div>';
  html += '<label style="display:flex;align-items:flex-start;gap:8px;cursor:pointer;">';
  html += '<input type="checkbox" id="task-auto-extend" ' + (task.Auto_Extend ? 'checked' : '') + ' style="width:16px;height:16px;accent-color:#3b82f6;flex-shrink:0;margin-top:2px;" />';
  html += '<span style="font-size:11px;color:#64748b;line-height:1.3;">' + t('autoExtendHint') + '</span>';
  html += '</label>';
  html += '</div>';

  // Recurrence card
  var hasRecurrence = task.Recurrence && task.Recurrence !== 'none';
  html += '<div class="detail-card">';
  html += '<h4>🔄 ' + t('recurrence') + '</h4>';
  html += '<select id="task-recurrence" class="recurrence-select">';
  html += '<option value="none"' + (!hasRecurrence ? ' selected' : '') + '>' + t('recurrenceNone') + '</option>';
  html += '<option value="daily"' + (task.Recurrence === 'daily' ? ' selected' : '') + '>' + t('recurrenceDaily') + '</option>';
  html += '<option value="weekly"' + (task.Recurrence === 'weekly' ? ' selected' : '') + '>' + t('recurrenceWeekly') + '</option>';
  html += '<option value="biweekly"' + (task.Recurrence === 'biweekly' ? ' selected' : '') + '>' + t('recurrenceBiweekly') + '</option>';
  html += '<option value="monthly"' + (task.Recurrence === 'monthly' ? ' selected' : '') + '>' + t('recurrenceMonthly') + '</option>';
  html += '<option value="quarterly"' + (task.Recurrence === 'quarterly' ? ' selected' : '') + '>' + t('recurrenceQuarterly') + '</option>';
  html += '<option value="yearly"' + (task.Recurrence === 'yearly' ? ' selected' : '') + '>' + t('recurrenceYearly') + '</option>';
  html += '</select>';
  if (hasRecurrence) {
    html += '<div class="recurrence-explain">ℹ️ ' + t('recurrenceExplain') + '</div>';
    html += '<div class="recurrence-batch-btns">';
    html += '<button class="btn btn-secondary btn-sm" onclick="generateOccurrences(' + task.id + ', \'month\')">' + t('generateMonth') + '</button>';
    html += '<button class="btn btn-secondary btn-sm" onclick="generateOccurrences(' + task.id + ', \'year\')">' + t('generateYear') + '</button>';
    html += '</div>';
  }
  html += '</div>';

  // === CUSTOM FIELDS SECTION ===
  if (customFields.length > 0) {
    html += '<div class="custom-fields-section">';
    html += '<div class="custom-fields-header">';
    html += '<span class="detail-field-icon">📋</span>';
    html += '<span class="detail-field-label">' + t('customFields') + '</span>';
    if (isOwner) html += '<button class="cf-manage-btn" onclick="openCustomFieldsModal()">⚙️</button>';
    html += '</div>';
    html += '<div class="custom-fields-list">';
    for (var cfi = 0; cfi < customFields.length; cfi++) {
      var cf = customFields[cfi];
      var cfValue = getTaskCustomFieldValue(task.id, cf.id);
      html += '<div class="custom-field-item">';
      html += '<label class="cf-label">' + sanitize(cf.Name) + '</label>';
      html += renderCustomFieldInput(cf, task.id, cfValue);
      html += '</div>';
    }
    html += '</div>';
    html += '</div>';
  } else if (isOwner) {
    html += '<div class="custom-fields-section">';
    html += '<div class="custom-fields-header">';
    html += '<span class="detail-field-icon">📋</span>';
    html += '<span class="detail-field-label">' + t('customFields') + '</span>';
    html += '<button class="cf-manage-btn" onclick="openCustomFieldsModal()">⚙️</button>';
    html += '</div>';
    html += '<div class="cf-empty">' + t('noCustomFields') + '</div>';
    html += '</div>';
  }

  // === ATTACHMENTS SECTION (D2) ===
  html += '<div class="attachments-section">';
  html += '<div class="comments-header">';
  html += '<span class="detail-field-icon">📎</span>';
  html += '<span class="detail-field-label">' + (currentLang === 'fr' ? 'Pièces jointes' : 'Attachments') + '</span>';
  html += '<span class="comment-badge">' + getTaskAttachments(task.id).length + '</span>';
  html += '</div>';
  html += '<div class="attachments-list" id="attachments-list-' + task.id + '"></div>';
  html += '<div class="attach-add-row">';
  html += '<label class="attach-upload-btn">📎 ' + (currentLang === 'fr' ? 'Ajouter un fichier' : 'Add file') + '<input type="file" multiple style="display:none;" onchange="uploadTaskAttachments(' + task.id + ', Array.from(this.files)); this.value=\'\';"></label>';
  html += '<span class="attach-status" id="attach-status-' + task.id + '"></span>';
  html += '</div>';
  html += '<div class="attach-hint">' + (currentLang === 'fr' ? 'Tous formats · max 5 Mo par fichier (images compressées automatiquement)' : 'All formats · max 5MB per file (images auto-compressed)') + '</div>';
  html += '</div>';

  // === COMMENTS SECTION ===
  var taskComments = getTaskComments(task.id);
  html += '<div class="comments-section">';
  html += '<div class="comments-header">';
  html += '<span class="detail-field-icon">💬</span>';
  html += '<span class="detail-field-label">' + t('comments') + '</span>';
  html += '<span class="comment-badge">' + taskComments.length + '</span>';
  html += '</div>';
  
  html += '<div class="comments-list" id="comments-list">';
  if (taskComments.length === 0) {
    html += '<div class="comments-empty">' + t('noComments') + '</div>';
  } else {
    for (var ci = 0; ci < taskComments.length; ci++) {
      var cmt = taskComments[ci];
      html += '<div class="comment-item">';
      html += '<div class="comment-header">';
      html += '<span class="comment-author">👤 ' + sanitize(cmt.Author || 'Anonyme') + '</span>';
      html += '<span class="comment-time">' + formatTimeAgo(cmt.Created_At) + '</span>';
      if (isOwner) html += '<button class="comment-delete" onclick="deleteComment(' + cmt.id + ', ' + task.id + ')">✕</button>';
      html += '</div>';
      html += '<div class="comment-content">' + sanitize(cmt.Content) + '</div>';
      html += '</div>';
    }
  }
  html += '</div>';
  
  // Add comment input
  html += '<div class="comment-add-row">';
  html += '<textarea id="new-comment-input" class="comment-input" placeholder="' + t('commentPlaceholder') + '" rows="2"></textarea>';
  html += '<button class="comment-add-btn" onclick="addComment(' + task.id + ')">' + t('addComment') + '</button>';
  html += '</div>';
  html += '</div>';

  // === DEPENDENCIES SECTION ===
  var taskDeps = getTaskDependencies(task.id);
  var taskBlocks = getTasksDependingOn(task.id);
  html += '<div class="dependencies-section">';
  html += '<div class="dependencies-header">';
  html += '<span class="detail-field-icon">🔗</span>';
  html += '<span class="detail-field-label">' + t('dependencies') + '</span>';
  html += '</div>';
  
  // Blocked by
  html += '<div class="dep-subsection">';
  html += '<div class="dep-label">' + t('blockedBy') + ':</div>';
  if (taskDeps.length === 0) {
    html += '<div class="dep-empty">' + t('noDependencies') + '</div>';
  } else {
    html += '<div class="dep-list">';
    for (var di = 0; di < taskDeps.length; di++) {
      var dep = taskDeps[di];
      var depDone = dep.Status === 'done';
      html += '<div class="dep-item' + (depDone ? ' dep-done' : '') + '">';
      html += '<span class="dep-status">' + (depDone ? '✅' : '⏳') + '</span>';
      html += '<span class="dep-title">' + sanitize(dep.Title) + '</span>';
      html += '<button class="dep-remove" onclick="removeDependency(' + task.id + ', ' + dep.id + ')">✕</button>';
      html += '</div>';
    }
    html += '</div>';
  }
  html += '</div>';
  
  // Blocks (tasks depending on this one)
  if (taskBlocks.length > 0) {
    html += '<div class="dep-subsection">';
    html += '<div class="dep-label">' + t('blocks') + ':</div>';
    html += '<div class="dep-list">';
    for (var bi = 0; bi < taskBlocks.length; bi++) {
      var blk = taskBlocks[bi];
      html += '<div class="dep-item dep-blocks">';
      html += '<span class="dep-title">' + sanitize(blk.Title) + '</span>';
      html += '</div>';
    }
    html += '</div>';
    html += '</div>';
  }
  
  // Add dependency
  html += '<div class="dep-add-row">';
  html += '<select id="dep-select" onchange="if (this.value) addDependency(' + task.id + ')">';
  html += '<option value="">-- ' + t('selectTask') + ' --</option>';
  var availableTasks = getFilteredTasks().filter(function(t) {
    return t.id !== task.id && !taskDeps.some(function(d) { return d.id === t.id; });
  });
  for (var ti = 0; ti < availableTasks.length; ti++) {
    html += '<option value="' + availableTasks[ti].id + '">' + sanitize(availableTasks[ti].Title) + '</option>';
  }
  html += '</select>';
  html += '<button class="dep-add-btn" onclick="addDependency(' + task.id + ')">+</button>';
  html += '</div>';
  html += '</div>';

  html += '</div>'; // end right
  html += '</div>'; // end content

  // Footer
  html += '<div class="modal-detail-footer">';
  if (isOwner) html += '<button class="btn-danger" onclick="deleteTask(' + task.id + ')">' + t('delete') + '</button>';
  else html += '<div></div>';
  html += '<div style="display:flex;gap:8px;">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="updateTask(' + task.id + ')">' + t('save') + '</button>';
  html += '</div></div>';

  html += '</div></div>'; // end modal + overlay

  document.getElementById('modal-container').innerHTML = html;
  // D2 : remplir la liste des pièces jointes (token asynchrone à part)
  renderAttachmentsSection(task.id);
  taskSubtasks.forEach(function(st) { renderSubtaskAttachmentsSection(st.id); });
}

// Suffixe de conteneur DOM pour un rôle RACI. editAssignees -> 'assignee' (et non
// 'assignees') : c'est ce décalage singulier/pluriel qui empêchait la mise à jour
// de l'affichage lors du retrait d'un responsable (R).
function raciSuffix(varName) {
  return ({ editAssignees: 'assignee', editAccountable: 'accountable', editConsulted: 'consulted', editInformed: 'informed' })[varName]
    || String(varName).replace('edit', '').toLowerCase();
}

function getRaciArray(varName) {
  if (varName === 'editAssignees') return editAssignees;
  if (varName === 'editAccountable') return editAccountable;
  if (varName === 'editConsulted') return editConsulted;
  if (varName === 'editInformed') return editInformed;
  return [];
}

function renderRaciChips(varName) {
  var arr = getRaciArray(varName);
  var html = '';
  for (var i = 0; i < arr.length; i++) {
    var name = arr[i];
    var displayName = name;
    for (var j = 0; j < users.length; j++) {
      if (users[j].Email === name || users[j].Name === name) {
        displayName = users[j].Name || users[j].Email;
        break;
      }
    }
    html += '<span class="assignee-chip-tag">' + sanitize(displayName) + ' <span class="chip-remove" onclick="removeRaciChip(\'' + varName + '\',' + i + ',\'' + raciSuffix(varName) + '\')">✕</span></span>';
  }
  return html;
}

function renderRaciField(letter, label, selectSuffix, varName) {
  var raciColors = { R: '#3b82f6', A: '#f59e0b', C: '#8b5cf6', I: '#64748b' };
  var color = raciColors[letter] || '#94a3b8';
  var html = '<div class="detail-field">';
  html += '<span class="detail-field-icon" style="background:' + color + ';color:#fff;width:24px;height:24px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;">' + letter + '</span>';
  html += '<span class="detail-field-label">' + label + '</span>';
  html += '<div class="detail-field-value">';
  html += '<div class="assignee-chips" id="' + selectSuffix + '-chips">';
  html += renderRaciChips(varName);
  html += '</div>';
  html += '<div class="assignee-add-row">';
  html += '<select id="' + selectSuffix + '-select" onchange="addRaciChip(\'' + varName + '\',\'' + selectSuffix + '\')">';
  html += '<option value="">-- ' + t('searchAssignee') + ' --</option>';
  for (var i = 0; i < users.length; i++) {
    html += '<option value="' + sanitize(users[i].Email || users[i].Name) + '">' + sanitize(users[i].Name || users[i].Email) + '</option>';
  }
  html += '</select>';
  html += '<button class="assignee-add-btn" onclick="addRaciChip(\'' + varName + '\',\'' + selectSuffix + '\')">' + t('addAssignee') + '</button>';
  html += '</div>';
  html += '</div></div>';
  return html;
}

function addRaciChip(varName, selectSuffix) {
  var sel = document.getElementById(selectSuffix + '-select');
  var arr = getRaciArray(varName);
  var val = sel.value;
  if (!val || arr.indexOf(val) !== -1) return;
  arr.push(val);
  var container = document.getElementById(selectSuffix + '-chips');
  if (container) container.innerHTML = renderRaciChips(varName);
  sel.value = '';
}

function removeRaciChip(varName, index, selectSuffix) {
  var arr = getRaciArray(varName);
  arr.splice(index, 1);
  var container = document.getElementById(selectSuffix + '-chips') || document.getElementById(raciSuffix(varName) + '-chips');
  if (container) container.innerHTML = renderRaciChips(varName);
}

function renderAssigneeChips() { return renderRaciChips('editAssignees'); }
function addAssigneeChip() { addRaciChip('editAssignees', 'assignee'); }
function removeAssigneeChip(index) { removeRaciChip('editAssignees', index, 'assignee'); }

function openSubtaskDepModal(subtaskId, taskId) {
  var subtask = subtasks.find(function(st) { return st.id === subtaskId; });
  if (!subtask) return;
  
  var taskSubtasks = getTaskSubtasks(taskId);
  var otherSubtasks = taskSubtasks.filter(function(st) { return st.id !== subtaskId; });
  
  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" style="max-width:400px;" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>🔗 ' + t('dependencies') + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<p style="margin-bottom:12px;font-size:12px;color:#64748b;">' + sanitize(subtask.Title) + '</p>';
  
  html += '<div class="form-group"><label>' + t('blockedBy') + '</label>';
  html += '<select id="subtask-blocker-select">';
  html += '<option value="">-- ' + t('noDependencies') + ' --</option>';
  for (var i = 0; i < otherSubtasks.length; i++) {
    var ost = otherSubtasks[i];
    var sel = subtask.Blocked_By_Subtask_Id === ost.id ? ' selected' : '';
    html += '<option value="' + ost.id + '"' + sel + '>' + sanitize(ost.Title) + '</option>';
  }
  html += '</select></div>';
  
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="updateSubtaskDep(' + subtaskId + ', ' + taskId + ')">' + t('save') + '</button>';
  html += '</div></div></div>';
  
  document.getElementById('modal-container').innerHTML = html;
}

async function updateSubtaskDep(subtaskId, taskId) {
  var select = document.getElementById('subtask-blocker-select');
  var blockerId = select.value ? parseInt(select.value) : null;
  
  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', SUBTASKS_TABLE, subtaskId, { Blocked_By_Subtask_Id: blockerId }]
    ]);
    showToast(t('dependencyAdded'), 'success');
    closeModalForce();
    await loadAllData();
    openEditTaskModal(taskId);
  } catch (e) {
    console.error('Error updating subtask dependency:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

// Dépendance entre sous-tâches : met à jour Blocked_By_Subtask_Id depuis le
// sélecteur du formulaire d'édition, puis rouvre le formulaire (saisie préservée).
async function setSubtaskDependency(subtaskId, parentTaskId, blockerId) {
  var val = blockerId ? parseInt(blockerId) : null;
  var stFormState = snapshotSubtaskForm(subtaskId);
  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', SUBTASKS_TABLE, subtaskId, { Blocked_By_Subtask_Id: val }]
    ]);
    showToast(val ? t('dependencyAdded') : t('noDependencies'), 'info');
    await loadAllData();
    openEditTaskModal(parentTaskId, true);
    if (stFormState) restoreSubtaskForm(subtaskId, stFormState);
    var depSel = document.getElementById('st-dep-' + subtaskId);
    if (depSel) depSel.focus();
  } catch (e) {
    console.error('Error updating subtask dependency:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function quickAction(taskId, newStatus) {
  var task = tasks.find(function(t) { return t.id === taskId; });
  var wasNotDone = task && task.Status !== 'done';

  // A2 : le blocage par dependance s'applique aussi aux actions rapides
  // (c'etait le seul chemin qui permettait de contourner "bloquee par").
  if (newStatus === 'done' && isTaskBlocked(taskId)) {
    var qaBlockers = getTaskDependencies(taskId).filter(function(b) { return b && b.Status !== 'done'; });
    var qaNames = qaBlockers.map(function(b) { return b.Title; }).join(', ');
    showToast((currentLang === 'fr' ? 'Impossible : tache bloquee par ' : 'Cannot complete: blocked by ') + qaNames, 'error');
    return;
  }

  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', TASKS_TABLE, taskId, { Status: newStatus }]
    ]);
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskId) { tasks[i].Status = newStatus; break; }
    }
    showToast(t('taskMoved'), 'success');
    
    // Create next occurrence if task is recurring and just completed
    if (newStatus === 'done' && wasNotDone && task && task.Recurrence && task.Recurrence !== 'none') {
      await createNextOccurrence(task);
    }
    
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error quick action:', e);
  }
}

// =============================================================================
// SUBTASKS CRUD
// =============================================================================

/**
 * Fige dans la base les champs actuellement saisis dans l'éditeur de tâche, sans
 * fermer la modale ni déclencher notifications/automatisations. Appelé avant toute
 * opération sur une sous-tâche : celles-ci rouvrent la modale depuis la base, ce
 * qui écrasait sinon la description, le groupe, les dates… saisis mais non validés.
 */
async function persistTaskFormFields(taskId) {
  if (taskId == null) return;
  var titleEl = document.getElementById('task-title');
  if (!titleEl) return;                       // l'éditeur n'est pas ouvert : rien à figer
  var record = {};
  setField(record, 'tasks', 'title', titleEl.value.trim());
  var el;
  if ((el = document.getElementById('task-desc'))) setField(record, 'tasks', 'description', el.value.trim());
  if ((el = document.getElementById('task-status'))) setField(record, 'tasks', 'status', el.value);
  if ((el = document.getElementById('task-priority'))) setField(record, 'tasks', 'priority', el.value);
  setField(record, 'tasks', 'assignee', editAssignees.join(', '));
  if (raciEnabled) {
    record.Accountable = editAccountable.join(', ');
    record.Consulted = editConsulted.join(', ');
    record.Informed = editInformed.join(', ');
  }
  if ((el = document.getElementById('task-group'))) setField(record, 'tasks', 'group', el.value);
  if ((el = document.getElementById('task-start'))) setField(record, 'tasks', 'startDate', toEpoch(el.value));
  if ((el = document.getElementById('task-due'))) setField(record, 'tasks', 'dueDate', toEpoch(el.value));
  if ((el = document.getElementById('task-category'))) setField(record, 'tasks', 'category', el.value.trim());
  if ((el = document.getElementById('task-project'))) setField(record, 'tasks', 'projectId', el.value ? parseInt(el.value) : 0);
  if ((el = document.getElementById('task-recurrence'))) setField(record, 'tasks', 'recurrence', el.value);
  if ((el = document.getElementById('task-tag'))) setField(record, 'tasks', 'tag', el.value.trim());
  if ((el = document.getElementById('task-extension-date'))) record.Extension_Date = toEpoch(el.value);
  if ((el = document.getElementById('task-auto-extend'))) record.Auto_Extend = el.checked;
  try { await grist.docApi.applyUserActions([['UpdateRecord', TASKS_TABLE, taskId, record]]); }
  catch (e) { console.error('persistTaskFormFields:', e); }
}

async function addSubtask(parentTaskId) {
  var input = document.getElementById('new-subtask-input');
  var title = input.value.trim();
  if (!title) return;
  await persistTaskFormFields(parentTaskId);   // fige la saisie en cours avant de rouvrir la modale

  var savedAssignees = editAssignees.slice();
  var savedAccountable = editAccountable.slice();
  var savedConsulted = editConsulted.slice();
  var savedInformed = editInformed.slice();
  var scrollPos = getModalScrollTop();

  var taskSubtasks = getTaskSubtasks(parentTaskId);
  var maxOrder = taskSubtasks.length > 0 ? Math.max.apply(null, taskSubtasks.map(function(st) { return st.Order || 0; })) : 0;

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', SUBTASKS_TABLE, null, {
        Parent_Task_Id: parentTaskId,
        Title: title,
        Completed: false,
        Order: maxOrder + 1,
        Created_At: Math.floor(Date.now() / 1000)
      }]
    ]);
    input.value = '';
    await loadAllData();
    editAssignees = savedAssignees;
    editAccountable = savedAccountable;
    editConsulted = savedConsulted;
    editInformed = savedInformed;
    openEditTaskModal(parentTaskId, true);
    restoreModalScrollTop(scrollPos);
  } catch (e) {
    console.error('Error adding subtask:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

function getModalScrollTop() {
  var modal = document.querySelector('#modal-container .modal');
  return modal ? modal.scrollTop : 0;
}

function restoreModalScrollTop(pos) {
  setTimeout(function() {
    var modal = document.querySelector('#modal-container .modal');
    if (modal) modal.scrollTop = pos;
  }, 50);
}

async function toggleSubtask(subtaskId, completed, el) {
  var savedAssignees = editAssignees.slice();
  var savedAccountable = editAccountable.slice();
  var savedConsulted = editConsulted.slice();
  var savedInformed = editInformed.slice();
  var scrollPos = getModalScrollTop();
  var _tgSt = subtasks.find(function(st){ return st.id === subtaskId; });
  // Definition of Done : complétion manuelle bloquée tant que des critères restent décochés
  if (_tgSt && getDoD(_tgSt).length > 0 && completed && !isDoDFulfilled(_tgSt)) {
    showToast(t('dodIncomplete'), 'warning');
    if (el) el.checked = false;
    return;
  }
  if (_tgSt) await persistTaskFormFields(_tgSt.Parent_Task_Id);   // préserve la saisie parent
  try {
    var newStatus = completed ? 'done' : 'todo';
    var fields = { Completed: completed, Status: newStatus };
    var clearedDoD = null;
    if (_tgSt && !completed && getDoD(_tgSt).length > 0) {
      clearedDoD = copyDoD(_tgSt).map(function(d) { d.done = false; return d; });
      fields.DefinitionOfDone = JSON.stringify(clearedDoD);
    }
    await grist.docApi.applyUserActions([
      ['UpdateRecord', SUBTASKS_TABLE, subtaskId, fields]
    ]);
    for (var i = 0; i < subtasks.length; i++) {
      if (subtasks[i].id === subtaskId) {
        subtasks[i].Completed = completed;
        subtasks[i].Status = newStatus;
        if (clearedDoD) subtasks[i].DefinitionOfDone = clearedDoD;
        break;
      }
    }
    showToast(t('subtaskCompleted'), 'success');
    var subtask = subtasks.find(function(st) { return st.id === subtaskId; });
    if (subtask) {
      editAssignees = savedAssignees;
      editAccountable = savedAccountable;
      editConsulted = savedConsulted;
      editInformed = savedInformed;
      openEditTaskModal(subtask.Parent_Task_Id, true);
      restoreModalScrollTop(scrollPos);
    }
  } catch (e) {
    console.error('Error toggling subtask:', e);
  }
}

async function deleteSubtask(subtaskId, parentTaskId) {
  var savedAssignees = editAssignees.slice();
  var savedAccountable = editAccountable.slice();
  var savedConsulted = editConsulted.slice();
  var savedInformed = editInformed.slice();
  var scrollPos = getModalScrollTop();
  await persistTaskFormFields(parentTaskId);   // préserve la saisie parent en cours
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', SUBTASKS_TABLE, subtaskId]
    ]);
    showToast(t('subtaskDeleted'), 'info');
    await loadAllData();
    editAssignees = savedAssignees;
    editAccountable = savedAccountable;
    editConsulted = savedConsulted;
    editInformed = savedInformed;
    openEditTaskModal(parentTaskId, true);
    restoreModalScrollTop(scrollPos);
  } catch (e) {
    console.error('Error deleting subtask:', e);
  }
}

// =============================================================================
// DEFINITION OF DONE (DoD) : critères de complétion d'une sous-tâche
// Colonne DefinitionOfDone (JSON [{ text, done }]). La sous-tâche est considérée
// terminée uniquement quand tous les critères sont cochés.
// =============================================================================

function getDoD(subtask) {
  return (subtask && Array.isArray(subtask.DefinitionOfDone)) ? subtask.DefinitionOfDone : [];
}

function isDoDFulfilled(subtask) {
  var list = getDoD(subtask);
  return list.length > 0 && list.every(function(d) { return !!d.done; });
}

function copyDoD(subtask) {
  return getDoD(subtask).map(function(d) {
    return { text: d.text || '', done: !!d.done, assignee: d.assignee || '' };
  });
}

// Applique la nouvelle liste de critères et dérive Completed/Status :
// - tous les critères cochés -> Completed true / Status 'done'
// - au moins un critère décoché (ou liste vidée) sur une sous-tâche terminée
//   -> Completed false / Status 'progress'
async function applyDoDUpdate(subtask, dodList, keepEditOpen) {
  var savedAssignees = editAssignees.slice();
  var savedAccountable = editAccountable.slice();
  var savedConsulted = editConsulted.slice();
  var savedInformed = editInformed.slice();
  var scrollPos = getModalScrollTop();
  var stFormState = keepEditOpen ? snapshotSubtaskForm(subtask.id) : null;
  await persistTaskFormFields(subtask.Parent_Task_Id);   // préserve la saisie parent en cours
  var allDone = dodList.length > 0 && dodList.every(function(d) { return d.done; });
  var fields = { DefinitionOfDone: dodList.length > 0 ? JSON.stringify(dodList) : null };
  var becameCompleted = false;
  if (allDone && !subtask.Completed) {
    fields.Completed = true;
    fields.Status = 'done';
    becameCompleted = true;
  } else if (!allDone && subtask.Completed) {
    fields.Completed = false;
    fields.Status = 'progress';
  }
  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', SUBTASKS_TABLE, subtask.id, fields]
    ]);
    subtask.DefinitionOfDone = dodList;
    if (fields.Completed !== undefined) {
      subtask.Completed = fields.Completed;
      subtask.Status = fields.Status;
    }
    if (becameCompleted) showToast(t('subtaskCompleted'), 'success');
    editAssignees = savedAssignees;
    editAccountable = savedAccountable;
    editConsulted = savedConsulted;
    editInformed = savedInformed;
    openEditTaskModal(subtask.Parent_Task_Id, true);
    if (stFormState) restoreSubtaskForm(subtask.id, stFormState);
    restoreModalScrollTop(scrollPos);
  } catch (e) {
    console.error('Error updating DoD:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function addDoD(subtaskId, criterionText) {
  var subtask = subtasks.find(function(st) { return st.id === subtaskId; });
  if (!subtask) return;
  var dodList = copyDoD(subtask);
  // Nouveau critère créé décoché : si la sous-tâche était terminée, elle
  // repasse en cours (la complétion est dérivée du DoD).
  dodList.push({ text: (criterionText && criterionText.trim()) ? criterionText.trim() : t('newCriterion'), done: false, assignee: '' });
  await applyDoDUpdate(subtask, dodList, true);
  showToast(t('dodCriterionAdded'), 'info');
}

// Ajout d'un critere depuis le champ texte du formulaire d'edition de sous-tache
function addDoDFromInput(subtaskId) {
  var input = document.getElementById('st-dod-new-' + subtaskId);
  if (!input) return;
  var text = input.value;
  if (!text || !text.trim()) { input.focus(); return; }
  addDoD(subtaskId, text);
}

async function toggleDoD(subtaskId, index, done) {
  var subtask = subtasks.find(function(st) { return st.id === subtaskId; });
  if (!subtask) return;
  var dodList = copyDoD(subtask);
  if (!dodList[index]) return;
  dodList[index].done = !!done;
  await applyDoDUpdate(subtask, dodList, true);
}

async function renameDoD(subtaskId, index, input) {
  var subtask = subtasks.find(function(st) { return st.id === subtaskId; });
  if (!subtask) return;
  var dodList = copyDoD(subtask);
  if (!dodList[index]) return;
  var newText = (input.value || '').trim();
  if (!newText) {
    input.value = dodList[index].text;   // texte vide : restaure la valeur en base
    return;
  }
  dodList[index].text = newText;
  await applyDoDUpdate(subtask, dodList, true);
  showToast(t('dodCriterionUpdated'), 'info');
}

async function assignDoD(subtaskId, index, select) {
  var subtask = subtasks.find(function(st) { return st.id === subtaskId; });
  if (!subtask) return;
  var dodList = copyDoD(subtask);
  if (!dodList[index]) return;
  dodList[index].assignee = (select.value || '').trim();
  await applyDoDUpdate(subtask, dodList, true);
  showToast(t('dodCriterionUpdated'), 'info');
}

// Réordonner les critères du DoD : glisser-déposer depuis la poignée ⋮⋮
// (le drag n'est actif que depuis la poignée, pour ne pas gêner la saisie de texte)
var dodDragData = null;
function dodHandleMouseDown(row) {
  if (row) row.setAttribute('draggable', 'true');
}
function dodHandleMouseUp(row) {
  if (row) row.removeAttribute('draggable');
}
function dodDragStart(ev, subtaskId, index) {
  dodDragData = { subtaskId: subtaskId, index: index };
  if (ev.dataTransfer) {
    ev.dataTransfer.effectAllowed = 'move';
    try { ev.dataTransfer.setData('text/plain', String(index)); } catch (e) {}
  }
  var row = ev.target && ev.target.closest ? ev.target.closest('.dod-item') : null;
  if (row) row.classList.add('dod-dragging');
}
function dodDragOver(ev) {
  ev.preventDefault();
  if (ev.dataTransfer) ev.dataTransfer.dropEffect = 'move';
  var row = ev.target && ev.target.closest ? ev.target.closest('.dod-item') : null;
  if (row) {
    document.querySelectorAll('.dod-item.dod-drop-target').forEach(function(r) {
      if (r !== row) r.classList.remove('dod-drop-target');
    });
    row.classList.add('dod-drop-target');
  }
}
function dodDrop(ev, subtaskId, dropIndex) {
  ev.preventDefault();
  var drag = dodDragData;
  dodDragData = null;
  if (!drag || drag.subtaskId !== subtaskId || drag.index === dropIndex) return;
  moveDoD(subtaskId, drag.index, dropIndex);
}
function dodDragEnd(ev) {
  dodDragData = null;
  var row = ev.target && ev.target.closest ? ev.target.closest('.dod-item') : null;
  if (row) {
    row.removeAttribute('draggable');
    row.classList.remove('dod-dragging');
  }
  document.querySelectorAll('.dod-item.dod-drop-target').forEach(function(r) {
    r.classList.remove('dod-drop-target');
  });
}
async function moveDoD(subtaskId, fromIndex, toIndex) {
  var subtask = subtasks.find(function(st) { return st.id === subtaskId; });
  if (!subtask) return;
  var dodList = copyDoD(subtask);
  if (fromIndex < 0 || fromIndex >= dodList.length) return;
  var moved = dodList.splice(fromIndex, 1)[0];
  dodList.splice(toIndex, 0, moved);
  await applyDoDUpdate(subtask, dodList, true);
}

async function deleteDoD(subtaskId, index) {
  var subtask = subtasks.find(function(st) { return st.id === subtaskId; });
  if (!subtask) return;
  var dodList = copyDoD(subtask);
  if (!dodList[index]) return;
  dodList.splice(index, 1);
  await applyDoDUpdate(subtask, dodList, true);
  showToast(t('dodCriterionDeleted'), 'info');
}

// Toggle pill selection for type/priority
// B2 : sélecteur de type de sous-tâche (sous-tâche / jalon)
function setStType(subtaskId, value, btn) {
  var hidden = document.getElementById('st-type-' + subtaskId);
  if (hidden) hidden.value = value;
  var grp = btn.parentNode;
  if (grp) grp.querySelectorAll('.st-pill').forEach(function(p) { p.className = 'st-pill'; });
  btn.className = 'st-pill active-progress';
}

function setStPill(field, subtaskId, value, btn) {
  var group = document.getElementById('st-' + field + '-group-' + subtaskId);
  var hidden = document.getElementById('st-' + field + '-' + subtaskId);
  if (!group || !hidden) return;
  hidden.value = value;
  var pills = group.querySelectorAll('.st-pill');
  pills.forEach(function(p) {
    p.className = 'st-pill'; // reset
  });
  btn.className = 'st-pill active-' + value;
}

// Édition inline d'une sous-tâche
function startEditSubtask(subtaskId) {
  var viewEl = document.getElementById('st-view-' + subtaskId);
  var viewDodEl = document.getElementById('st-view-dod-' + subtaskId);
  var editEl = document.getElementById('st-edit-' + subtaskId);
  if (viewEl) viewEl.style.display = 'none';
  if (viewDodEl) viewDodEl.style.display = 'none';
  if (editEl) { editEl.style.display = 'grid'; var t = document.getElementById('st-title-' + subtaskId); if (t) t.focus(); }
}

function cancelEditSubtask(subtaskId) {
  var viewEl = document.getElementById('st-view-' + subtaskId);
  var viewDodEl = document.getElementById('st-view-dod-' + subtaskId);
  var editEl = document.getElementById('st-edit-' + subtaskId);
  if (viewEl) viewEl.style.display = 'flex';
  if (viewDodEl) viewDodEl.style.display = '';
  if (editEl) editEl.style.display = 'none';
}

// Instantané du formulaire d'édition d'une sous-tâche, pour le rouvrir tel quel
// après un re-render de la modale (ajout/modif/suppression d'un critère DoD).
function snapshotSubtaskForm(subtaskId) {
  var snap = null;
  ['st-title-','st-desc-','st-type-','st-tag-','st-priority-','st-start-','st-due-','st-hours-','st-assignee-'].forEach(function(pfx) {
    var el = document.getElementById(pfx + subtaskId);
    if (el) {
      if (!snap) snap = {};
      snap[pfx] = el.value;
    }
  });
  return snap;
}

// Rouvre le formulaire d'édition de la sous-tâche, restaure l'état figé, puis place
// le focus sur le champ « Saisir un critère... ».
function restoreSubtaskForm(subtaskId, snap) {
  if (snap) startEditSubtask(subtaskId);   // formulaire fermé avant l'opération : ne pas l'ouvrir
  if (!snap) return;
  ['st-title-','st-desc-','st-tag-','st-assignee-','st-start-','st-due-','st-hours-'].forEach(function(pfx) {
    var el = document.getElementById(pfx + subtaskId);
    if (el && snap[pfx] !== undefined) el.value = snap[pfx];
  });
  // Pastilles type/statut/priorité : clique le bouton correspondant pour
  // resynchroniser le visuel et le champ caché sur la valeur figée.
  [['st-type-group-', snap['st-type-']], ['st-priority-group-', snap['st-priority-']]].forEach(function(pair) {
    if (pair[1] === undefined) return;
    var grp = document.getElementById(pair[0] + subtaskId);
    var btn = grp ? grp.querySelector('[data-key="' + pair[1] + '"]') : null;
    if (btn) btn.click();
  });
  var dodInput = document.getElementById('st-dod-new-' + subtaskId);
  if (dodInput) dodInput.focus();
}

async function saveEditSubtask(subtaskId, parentTaskId) {
  var titleInput    = document.getElementById('st-title-'    + subtaskId);
  var descInput     = document.getElementById('st-desc-'     + subtaskId);
  var tagSel       = document.getElementById('st-tag-'     + subtaskId);
  var prioritySel   = document.getElementById('st-priority-' + subtaskId);
  var assigneeSel   = document.getElementById('st-assignee-' + subtaskId);
  var startDateInput= document.getElementById('st-start-'    + subtaskId);
  var dueDateInput  = document.getElementById('st-due-'      + subtaskId);
  var hoursInput    = document.getElementById('st-hours-'    + subtaskId);
  if (!titleInput) return;
  var newTitle = titleInput.value.trim();
  if (!newTitle) return;
  var newAssignee = assigneeSel ? assigneeSel.value : '';
  var newStartDate = startDateInput && startDateInput.value ? Math.floor(new Date(startDateInput.value).getTime() / 1000) : null;
  var newDueDate = dueDateInput && dueDateInput.value ? Math.floor(new Date(dueDateInput.value).getTime() / 1000) : null;
  var typeEl = document.getElementById('st-type-' + subtaskId);
  // Statut : plus édité dans le formulaire ; conservé tel quel, découle du DoD quand il existe
  var _svSt = subtasks.find(function(sv) { return sv.id === subtaskId; });
  var newStatus = (_svSt && _svSt.Status) || 'todo';
  if (_svSt && getDoD(_svSt).length > 0) {
    if (isDoDFulfilled(_svSt)) {
      newStatus = 'done';
    } else if (newStatus === 'done') {
      newStatus = 'progress';
      showToast(t('dodIncomplete'), 'warning');
    }
  }
  var fields = {
    Title: newTitle,
    Description: descInput ? descInput.value : '',
    Status: newStatus,
    Completed: newStatus === 'done',
    Priority: prioritySel ? prioritySel.value : 'medium',
    Assignee: newAssignee,
    Tag: tagSel ? tagSel.value : '',
    Estimated_Hours: hoursInput && hoursInput.value ? parseFloat(hoursInput.value) : null,
    Type: typeEl ? typeEl.value : 'subtask'
  };
  if (newStartDate) fields.Start_Date = newStartDate;
  if (newDueDate) fields.Due_Date = newDueDate;
  var savedAssignees = editAssignees.slice();
  var savedAccountable = editAccountable.slice();
  var savedConsulted = editConsulted.slice();
  var savedInformed = editInformed.slice();
  await persistTaskFormFields(parentTaskId);   // préserve la saisie parent en cours
  try {
    await grist.docApi.applyUserActions([['UpdateRecord', SUBTASKS_TABLE, subtaskId, fields]]);
    showToast(t('subtaskSaved'), 'success');
    await loadAllData();
    editAssignees = savedAssignees;
    editAccountable = savedAccountable;
    editConsulted = savedConsulted;
    editInformed = savedInformed;
    openEditTaskModal(parentTaskId, true);
  } catch (e) {
    console.error('Error saving subtask:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function generateSubtaskOccurrences(subtaskId, parentTaskId) {
  var st = subtasks.find(function(s) { return s.id === subtaskId; });
  if (!st || !st.Recurrence || st.Recurrence === 'none') return;
  var baseDate = st.Due_Date ? new Date(st.Due_Date * 1000) : new Date();
  var actions = [];
  // Nombre d'occurrences générées selon la fréquence (fenêtre raisonnable)
  var countMap = { daily: 7, weekly: 4, biweekly: 4, monthly: 3, quarterly: 4, yearly: 3 };
  var count = countMap[st.Recurrence] || 3;
  for (var i = 1; i <= count; i++) {
    var d = new Date(baseDate);
    if (st.Recurrence === 'daily') d.setDate(d.getDate() + i);
    else if (st.Recurrence === 'weekly') d.setDate(d.getDate() + i * 7);
    else if (st.Recurrence === 'biweekly') d.setDate(d.getDate() + i * 14);
    else if (st.Recurrence === 'monthly') d.setMonth(d.getMonth() + i);
    else if (st.Recurrence === 'quarterly') d.setMonth(d.getMonth() + i * 3);
    else if (st.Recurrence === 'yearly') d.setFullYear(d.getFullYear() + i);
    else d.setMonth(d.getMonth() + i);
    actions.push(['AddRecord', SUBTASKS_TABLE, null, {
      Parent_Task_Id: parentTaskId,
      Title: st.Title,
      Description: st.Description || '',
      Status: 'todo',
      Priority: st.Priority || 'medium',
      Assignee: st.Assignee || '',
      Due_Date: Math.floor(d.getTime() / 1000),
      Recurrence: st.Recurrence,
      Completed: false,
      Order: (st.Order || 0) + i
    }]);
  }
  try {
    await grist.docApi.applyUserActions(actions);
    showToast((currentLang === 'fr' ? count + ' occurrence(s) créée(s)' : count + ' occurrence(s) created'), 'success');
    var savedAssignees = editAssignees.slice();
  var savedAccountable = editAccountable.slice();
  var savedConsulted = editConsulted.slice();
  var savedInformed = editInformed.slice();
    await loadAllData();
    editAssignees = savedAssignees;
    editAccountable = savedAccountable;
    editConsulted = savedConsulted;
    editInformed = savedInformed;
    openEditTaskModal(parentTaskId, true);
  } catch (e) {
    console.error('Error generating subtask occurrences:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

// =============================================================================
// DEPENDENCIES CRUD
// =============================================================================

async function addDependency(taskId) {
  var select = document.getElementById('dep-select');
  var dependsOnId = parseInt(select.value);
  if (!dependsOnId) return;
  var savedAssignees = editAssignees.slice();
  var savedAccountable = editAccountable.slice();
  var savedConsulted = editConsulted.slice();
  var savedInformed = editInformed.slice();
  var scrollPos = getModalScrollTop();
  await persistTaskFormFields(taskId);   // A1 : fige la saisie en cours avant de rouvrir la modale

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', DEPENDENCIES_TABLE, null, {
        Task_Id: taskId,
        Depends_On_Task_Id: dependsOnId,
        Created_At: Math.floor(Date.now() / 1000)
      }]
    ]);
    showToast(t('dependencyAdded'), 'success');
    await loadAllData();
    editAssignees = savedAssignees;
    editAccountable = savedAccountable;
    editConsulted = savedConsulted;
    editInformed = savedInformed;
    openEditTaskModal(taskId, true);
    restoreModalScrollTop(scrollPos);   // A3 : on reste ou on etait dans la modale
  } catch (e) {
    console.error('Error adding dependency:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function removeDependency(taskId, dependsOnTaskId) {
  var dep = dependencies.find(function(d) {
    return d.Task_Id === taskId && d.Depends_On_Task_Id === dependsOnTaskId;
  });
  if (!dep) return;
  var savedAssignees = editAssignees.slice();
  var savedAccountable = editAccountable.slice();
  var savedConsulted = editConsulted.slice();
  var savedInformed = editInformed.slice();
  var scrollPos = getModalScrollTop();
  await persistTaskFormFields(taskId);   // A1

  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', DEPENDENCIES_TABLE, dep.id]
    ]);
    showToast(t('dependencyRemoved'), 'info');
    await loadAllData();
    editAssignees = savedAssignees;
    editAccountable = savedAccountable;
    editConsulted = savedConsulted;
    editInformed = savedInformed;
    openEditTaskModal(taskId, true);
    restoreModalScrollTop(scrollPos);   // A3
  } catch (e) {
    console.error('Error removing dependency:', e);
  }
}

// =============================================================================
// COMMENTS CRUD
// =============================================================================

async function addComment(taskId) {
  var textarea = document.getElementById('new-comment-input');
  var content = textarea.value.trim();
  if (!content) return;
  var savedAssignees = editAssignees.slice();
  var savedAccountable = editAccountable.slice();
  var savedConsulted = editConsulted.slice();
  var savedInformed = editInformed.slice();
  var scrollPos = getModalScrollTop();
  await persistTaskFormFields(taskId);   // A1

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', COMMENTS_TABLE, null, {
        Task_Id: taskId,
        Author: currentUserEmail || 'Utilisateur',
        Content: content,
        Created_At: Math.floor(Date.now() / 1000)
      }]
    ]);
    textarea.value = '';
    showToast(t('commentAdded'), 'success');
    var commentTask = tasks.find(function(t2) { return t2.id === taskId; });
    logActivity('comment_added', taskId, commentTask ? commentTask.Title : '', content.substring(0, 80));
    await loadAllData();
    editAssignees = savedAssignees;
    editAccountable = savedAccountable;
    editConsulted = savedConsulted;
    editInformed = savedInformed;
    openEditTaskModal(taskId, true);
    restoreModalScrollTop(scrollPos);   // A3
  } catch (e) {
    console.error('Error adding comment:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function deleteComment(commentId, taskId) {
  if (!isOwner) return;
  var savedAssignees = editAssignees.slice();
  var savedAccountable = editAccountable.slice();
  var savedConsulted = editConsulted.slice();
  var savedInformed = editInformed.slice();
  var scrollPos = getModalScrollTop();
  await persistTaskFormFields(taskId);   // A1
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', COMMENTS_TABLE, commentId]
    ]);
    showToast(t('commentDeleted'), 'info');
    await loadAllData();
    editAssignees = savedAssignees;
    editAccountable = savedAccountable;
    editConsulted = savedConsulted;
    editInformed = savedInformed;
    openEditTaskModal(taskId, true);
    restoreModalScrollTop(scrollPos);   // A3
  } catch (e) {
    console.error('Error deleting comment:', e);
  }
}

// =============================================================================
// TIME TRACKING
// =============================================================================

async function startTimer(taskId) {
  var scrollPos = getModalScrollTop();
  await persistTaskFormFields(taskId);   // A1 : ne pas perdre la saisie en cours
  activeTimers[taskId] = Math.floor(Date.now() / 1000);
  await loadAllData();
  openEditTaskModal(taskId, true);
  restoreModalScrollTop(scrollPos);      // A3
}

async function stopTimer(taskId) {
  if (!activeTimers[taskId]) return;
  
  var startTime = activeTimers[taskId];
  var endTime = Math.floor(Date.now() / 1000);
  var duration = endTime - startTime;
  var scrollPos = getModalScrollTop();
  await persistTaskFormFields(taskId);   // A1

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', TIME_ENTRIES_TABLE, null, {
        Task_Id: taskId,
        User: currentUserEmail || 'Utilisateur',
        Start_Time: startTime,
        End_Time: endTime,
        Duration: duration,
        Description: ''
      }]
    ]);
    delete activeTimers[taskId];
    showToast(t('timeEntryAdded'), 'success');
    await loadAllData();
    openEditTaskModal(taskId, true);
    restoreModalScrollTop(scrollPos);    // A3
  } catch (e) {
    console.error('Error stopping timer:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function addManualTimeEntry(taskId) {
  var hours = parseInt(document.getElementById('manual-hours').value) || 0;
  var minutes = parseInt(document.getElementById('manual-minutes').value) || 0;
  var duration = hours * 3600 + minutes * 60;
  if (duration <= 0) {
    showToast(currentLang === 'fr' ? 'Entrez une durée valide' : 'Enter a valid duration', 'error');
    return;
  }
  var now = Math.floor(Date.now() / 1000);
  var scrollPos = getModalScrollTop();
  await persistTaskFormFields(taskId);   // A1
  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', TIME_ENTRIES_TABLE, null, {
        Task_Id: taskId,
        User: currentUserEmail || 'Utilisateur',
        Start_Time: now - duration,
        End_Time: now,
        Duration: duration,
        Description: currentLang === 'fr' ? 'Saisie manuelle' : 'Manual entry'
      }]
    ]);
    showToast(t('timeEntryAdded'), 'success');
    await loadAllData();
    openEditTaskModal(taskId, true);
    restoreModalScrollTop(scrollPos);    // A3
  } catch (e) {
    console.error('Error adding manual time entry:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

// =============================================================================
// CUSTOM FIELDS
// =============================================================================

function renderCustomFieldInput(field, taskId, value) {
  var inputId = 'cf-' + field.id;
  var html = '';
  
  switch (field.Type) {
    case 'text':
      html = '<input type="text" id="' + inputId + '" class="cf-input" value="' + sanitize(value) + '" onchange="updateCustomFieldValue(' + taskId + ', ' + field.id + ', this.value)" />';
      break;
    case 'number':
      html = '<input type="number" id="' + inputId + '" class="cf-input cf-number" value="' + sanitize(value) + '" onchange="updateCustomFieldValue(' + taskId + ', ' + field.id + ', this.value)" />';
      break;
    case 'date':
      var dateVal = value ? new Date(parseInt(value) * 1000).toISOString().split('T')[0] : '';
      html = '<input type="date" id="' + inputId + '" class="cf-input cf-date" value="' + dateVal + '" onchange="updateCustomFieldValue(' + taskId + ', ' + field.id + ', this.value ? Math.floor(new Date(this.value).getTime()/1000) : \'\')" />';
      break;
    case 'checkbox':
      var checked = value === 'true' || value === '1';
      html = '<input type="checkbox" id="' + inputId + '" class="cf-checkbox" ' + (checked ? 'checked' : '') + ' onchange="updateCustomFieldValue(' + taskId + ', ' + field.id + ', this.checked ? \'true\' : \'false\')" />';
      break;
    case 'select':
      var options = field.Options ? field.Options.split(',').map(function(o) { return o.trim(); }) : [];
      html = '<select id="' + inputId + '" class="cf-select" onchange="updateCustomFieldValue(' + taskId + ', ' + field.id + ', this.value)">';
      html += '<option value="">--</option>';
      for (var oi = 0; oi < options.length; oi++) {
        html += '<option value="' + sanitize(options[oi]) + '"' + (value === options[oi] ? ' selected' : '') + '>' + sanitize(options[oi]) + '</option>';
      }
      html += '</select>';
      break;
    default:
      html = '<input type="text" id="' + inputId + '" class="cf-input" value="' + sanitize(value) + '" />';
  }
  return html;
}

async function updateCustomFieldValue(taskId, fieldId, value) {
  var existing = customFieldValues.find(function(v) {
    return v.Task_Id === taskId && v.Field_Id === fieldId;
  });
  
  try {
    if (existing) {
      await grist.docApi.applyUserActions([
        ['UpdateRecord', CUSTOM_FIELD_VALUES_TABLE, existing.id, { Value: String(value) }]
      ]);
      existing.Value = String(value);
    } else {
      await grist.docApi.applyUserActions([
        ['AddRecord', CUSTOM_FIELD_VALUES_TABLE, null, {
          Task_Id: taskId,
          Field_Id: fieldId,
          Value: String(value)
        }]
      ]);
      await loadAllData();
    }
  } catch (e) {
    console.error('Error updating custom field value:', e);
  }
}

function openCustomFieldsModal() {
  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal modal-cf" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>🏷️ ' + t('manageCustomFields') + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  
  // Existing fields
  html += '<div class="cf-list">';
  if (customFields.length === 0) {
    html += '<div class="cf-empty-modal">' + t('noCustomFields') + '</div>';
  } else {
    for (var i = 0; i < customFields.length; i++) {
      var cf = customFields[i];
      html += '<div class="cf-list-item">';
      html += '<span class="cf-list-name">' + sanitize(cf.Name) + '</span>';
      html += '<span class="cf-list-type">' + getCustomFieldTypeLabel(cf.Type) + '</span>';
      html += '<button class="cf-delete-btn" onclick="deleteCustomField(' + cf.id + ')">🗑️</button>';
      html += '</div>';
    }
  }
  html += '</div>';
  
  // Add new field form
  html += '<div class="cf-add-form">';
  html += '<h4>' + t('addCustomField') + '</h4>';
  html += '<div class="cf-form-row">';
  html += '<input type="text" id="new-cf-name" placeholder="' + t('customFieldName') + '" class="cf-form-input" />';
  html += '<select id="new-cf-type" class="cf-form-select" onchange="toggleCfOptions()">';
  html += '<option value="text">' + t('typeText') + '</option>';
  html += '<option value="number">' + t('typeNumber') + '</option>';
  html += '<option value="date">' + t('typeDate') + '</option>';
  html += '<option value="checkbox">' + t('typeCheckbox') + '</option>';
  html += '<option value="select">' + t('typeSelect') + '</option>';
  html += '</select>';
  html += '</div>';
  html += '<div id="cf-options-row" class="cf-form-row" style="display:none;">';
  html += '<input type="text" id="new-cf-options" placeholder="' + t('fieldOptions') + '" class="cf-form-input" />';
  html += '</div>';
  html += '<button class="btn btn-primary" onclick="addCustomField()">' + t('addCustomField') + '</button>';
  html += '</div>';
  
  html += '</div></div></div>';
  
  document.getElementById('modal-container').innerHTML = html;
}

function toggleCfOptions() {
  var type = document.getElementById('new-cf-type').value;
  document.getElementById('cf-options-row').style.display = type === 'select' ? 'flex' : 'none';
}

async function addCustomField() {
  var name = document.getElementById('new-cf-name').value.trim();
  var type = document.getElementById('new-cf-type').value;
  var options = document.getElementById('new-cf-options').value.trim();
  
  if (!name) return;
  
  var maxOrder = customFields.length > 0 ? Math.max.apply(null, customFields.map(function(cf) { return cf.Order || 0; })) : 0;
  
  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', CUSTOM_FIELDS_TABLE, null, {
        Name: name,
        Type: type,
        Options: type === 'select' ? options : '',
        Order: maxOrder + 1,
        Created_At: Math.floor(Date.now() / 1000)
      }]
    ]);
    showToast(t('customFieldCreated'), 'success');
    await loadAllData();
    openCustomFieldsModal();
  } catch (e) {
    console.error('Error adding custom field:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function deleteCustomField(fieldId) {
  if (!isOwner) return;
  
  try {
    // Delete field values first
    var valuesToDelete = customFieldValues.filter(function(v) { return v.Field_Id === fieldId; });
    for (var i = 0; i < valuesToDelete.length; i++) {
      await grist.docApi.applyUserActions([
        ['RemoveRecord', CUSTOM_FIELD_VALUES_TABLE, valuesToDelete[i].id]
      ]);
    }
    // Delete field
    await grist.docApi.applyUserActions([
      ['RemoveRecord', CUSTOM_FIELDS_TABLE, fieldId]
    ]);
    showToast(t('customFieldDeleted'), 'info');
    await loadAllData();
    openCustomFieldsModal();
  } catch (e) {
    console.error('Error deleting custom field:', e);
  }
}

// =============================================================================
// RECURRENCE HANDLING
// =============================================================================

// Génère toutes les occurrences d'une tâche récurrente sur le mois ou l'année en cours.
// N'écrase pas les occurrences déjà existantes (vérifie par titre + date).
async function generateOccurrences(taskId, period) {
  var task = tasks.find(function(t) { return t.id === taskId; });
  if (!task || !task.Recurrence || task.Recurrence === 'none') return;

  var now = Math.floor(Date.now() / 1000);
  var periodEnd;
  if (period === 'month') {
    var endOfMonth = new Date(); endOfMonth.setDate(1); endOfMonth.setMonth(endOfMonth.getMonth() + 1); endOfMonth.setDate(0); endOfMonth.setHours(23, 59, 59);
    periodEnd = Math.floor(endOfMonth.getTime() / 1000);
  } else {
    var endOfYear = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59);
    periodEnd = Math.floor(endOfYear.getTime() / 1000);
  }

  var stepSeconds = task.Recurrence === 'daily' ? 86400 : task.Recurrence === 'weekly' ? 604800 : 2592000;

  // Trouver la dernière date d'échéance parmi les occurrences existantes du même titre
  var existingDates = tasks
    .filter(function(t) { return t.Title === task.Title && t.Due_Date; })
    .map(function(t) { return t.Due_Date; });
  var cursor = existingDates.length > 0 ? Math.max.apply(null, existingDates) : (task.Due_Date || now);

  var actions = [];
  var count = 0;
  var safety = 0;
  while (cursor + stepSeconds <= periodEnd && safety < 100) {
    cursor += stepSeconds;
    safety++;
    // Ne pas créer en double
    var alreadyExists = tasks.some(function(t) {
      return t.Title === task.Title && t.Due_Date && Math.abs(t.Due_Date - cursor) < 43200;
    });
    if (alreadyExists) continue;
    var record = {};
    setField(record, 'tasks', 'title', task.Title);
    setField(record, 'tasks', 'description', task.Description);
    setField(record, 'tasks', 'status', 'todo');
    setField(record, 'tasks', 'priority', task.Priority);
    setField(record, 'tasks', 'assignee', task.Assignee);
    setField(record, 'tasks', 'group', task.Group_Name);
    var startOffset = (task.Start_Date && task.Due_Date) ? (task.Due_Date - task.Start_Date) : 0;
    setField(record, 'tasks', 'startDate', cursor - startOffset);
    setField(record, 'tasks', 'dueDate', cursor);
    setField(record, 'tasks', 'category', task.Category);
    setField(record, 'tasks', 'tag', task.Tag);
    setField(record, 'tasks', 'recurrence', task.Recurrence);
    setField(record, 'tasks', 'estimatedHours', task.Estimated_Hours);
    setField(record, 'tasks', 'projectId', task.Project_Id);
    setField(record, 'tasks', 'createdAt', now);
    actions.push(['AddRecord', TASKS_TABLE, null, record]);
    count++;
  }

  if (actions.length === 0) {
    showToast('Aucune occurrence à générer pour cette période', 'info');
    return;
  }
  try {
    await grist.docApi.applyUserActions(actions);
    showToast(count + ' ' + t('occurrencesGenerated'), 'success');
    await loadAllData();
    renderCurrentView();
  } catch (e) {
    console.error('Error generating occurrences:', e);
    showToast('Erreur : ' + e.message, 'error');
  }
}

// Symbole court d'une récurrence (badge cartes/sous-tâches)
function recurrenceSymbol(rec) {
  var map = { daily: '🔄 J', weekly: '🔄 S', biweekly: '🔄 2S', monthly: '🔄 M', quarterly: '🔄 T', yearly: '🔄 A' };
  return map[rec] || '🔄';
}

// B1 : avance une date (epoch s) selon la récurrence (calcul calendaire exact)
function addRecurrenceToEpoch(epoch, rec) {
  if (!epoch) return null;
  var d = new Date(epoch * 1000);
  switch (rec) {
    case 'daily': d.setDate(d.getDate() + 1); break;
    case 'weekly': d.setDate(d.getDate() + 7); break;
    case 'biweekly': d.setDate(d.getDate() + 14); break;
    case 'monthly': d.setMonth(d.getMonth() + 1); break;
    case 'quarterly': d.setMonth(d.getMonth() + 3); break;
    case 'yearly': d.setFullYear(d.getFullYear() + 1); break;
    default: return epoch;
  }
  return Math.floor(d.getTime() / 1000);
}

async function createNextOccurrence(task) {
  if (!task.Recurrence || task.Recurrence === 'none') return;

  var newStartDate = addRecurrenceToEpoch(task.Start_Date, task.Recurrence);
  var newDueDate = addRecurrenceToEpoch(task.Due_Date, task.Recurrence);
  var now = Math.floor(Date.now() / 1000);

  try {
    var record = {};
    setField(record, 'tasks', 'title', task.Title);
    setField(record, 'tasks', 'description', task.Description);
    setField(record, 'tasks', 'status', 'todo');
    setField(record, 'tasks', 'priority', task.Priority);
    setField(record, 'tasks', 'assignee', task.Assignee);
    setField(record, 'tasks', 'group', task.Group_Name);
    setField(record, 'tasks', 'startDate', newStartDate);
    setField(record, 'tasks', 'dueDate', newDueDate);
    setField(record, 'tasks', 'category', task.Category);
    setField(record, 'tasks', 'tag', task.Tag);
    setField(record, 'tasks', 'recurrence', task.Recurrence);
    setField(record, 'tasks', 'estimatedHours', task.Estimated_Hours);
    setField(record, 'tasks', 'createdAt', now);
    
    await grist.docApi.applyUserActions([
      ['AddRecord', TASKS_TABLE, null, record]
    ]);
    showToast(t('nextOccurrence'), 'success');
  } catch (e) {
    console.error('Error creating next occurrence:', e);
  }
}

function openNewTemplateModal(tplId) {
  var editing = tplId != null;
  var tpl = editing ? templates.find(function(x) { return x.id === tplId; }) : null;
  if (editing && !tpl) return;

  var title = editing ? sanitize(tpl.Title || '') : '';
  var desc = editing ? sanitize(tpl.Description || '') : '';
  var priority = editing ? (tpl.Priority || 'medium') : 'medium';
  var category = editing ? (tpl.Category || '') : '';
  var hours = editing ? (tpl.Estimated_Hours || '') : '';
  var tplGroup = editing ? (tpl.Group_Name || '') : '';
  var tplTag = editing ? (tpl.Tag || '') : '';
  var tplRecur = editing ? (tpl.Recurrence || 'none') : 'none';

  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>' + t(editing ? 'modalEditTemplate' : 'modalNewTemplate') + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<div class="form-group"><label>' + t('fieldTitle') + '</label><input type="text" id="tpl-title" value="' + title + '" /></div>';
  html += '<div class="form-group"><label>' + t('fieldDescription') + '</label><textarea id="tpl-desc">' + desc + '</textarea></div>';
  html += '<div class="form-row">';
  html += '<div class="form-group"><label>' + t('fieldPriority') + '</label><select id="tpl-priority">';
  html += '<option value="medium"' + (priority === 'medium' ? ' selected' : '') + '>' + t('priorityMedium') + '</option>';
  html += '<option value="high"' + (priority === 'high' ? ' selected' : '') + '>' + t('priorityHigh') + '</option>';
  html += '<option value="low"' + (priority === 'low' ? ' selected' : '') + '>' + t('priorityLow') + '</option>';
  html += '</select></div>';
  var tplCatOptions = '<option value=""' + (!category ? ' selected' : '') + '>--</option>';
  for (var tci = 0; tci < categories.length; tci++) {
    var catName = categories[tci].Name;
    tplCatOptions += '<option value="' + sanitize(catName) + '"' + (catName === category ? ' selected' : '') + '>' + sanitize(catName) + '</option>';
  }
  html += '<div class="form-group"><label>' + t('fieldCategory') + '</label><select id="tpl-category">' + tplCatOptions + '</select></div>';
  html += '</div>';
  html += '<div class="form-group"><label>' + t('fieldEstimatedTime') + '</label><input type="number" id="tpl-hours" step="0.5" min="0" value="' + hours + '" /></div>';
  // Groupe + Tag
  html += '<div class="form-row">';
  var tplGroupOpts = '<option value="">--</option>';
  for (var tgi = 0; tgi < groups.length; tgi++) tplGroupOpts += '<option value="' + sanitize(groups[tgi].Name) + '"' + (groups[tgi].Name === tplGroup ? ' selected' : '') + '>' + sanitize(groups[tgi].Name) + '</option>';
  html += '<div class="form-group"><label>' + t('fieldGroup') + '</label><select id="tpl-group">' + tplGroupOpts + '</select></div>';
  var tplTagOpts = '<option value="">--</option>';
  for (var tti = 0; tti < tags.length; tti++) tplTagOpts += '<option value="' + sanitize(tags[tti].Name) + '"' + (tags[tti].Name === tplTag ? ' selected' : '') + '>' + sanitize(tags[tti].Name) + '</option>';
  html += '<div class="form-group"><label>' + t('tag') + '</label><select id="tpl-tag">' + tplTagOpts + '</select></div>';
  html += '</div>';
  // Récurrence
  var recurKeys = ['none', 'daily', 'weekly', 'biweekly', 'monthly', 'quarterly', 'yearly'];
  var recurLabels = { none: 'recurrenceNone', daily: 'recurrenceDaily', weekly: 'recurrenceWeekly', biweekly: 'recurrenceBiweekly', monthly: 'recurrenceMonthly', quarterly: 'recurrenceQuarterly', yearly: 'recurrenceYearly' };
  var tplRecurOpts = recurKeys.map(function (k) { return '<option value="' + k + '"' + (tplRecur === k ? ' selected' : '') + '>' + t(recurLabels[k]) + '</option>'; }).join('');
  html += '<div class="form-group"><label>🔁 ' + (currentLang === 'fr' ? 'Récurrence' : 'Recurrence') + '</label><select id="tpl-recurrence">' + tplRecurOpts + '</select></div>';
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  if (editing) {
    html += '<button class="btn btn-primary" onclick="updateTemplate(' + tplId + ')">' + t('save') + '</button>';
  } else {
    html += '<button class="btn btn-primary" onclick="createTemplate()">' + t('save') + '</button>';
  }
  html += '</div></div></div>';

  document.getElementById('modal-container').innerHTML = html;
}

function closeModal(e) {
  // Désactivé volontairement : on NE ferme PAS au clic extérieur (évite les fermetures
  // accidentelles, notamment quand une sélection de texte se relâche hors de la modale).
  // La fermeture se fait via la croix (✕) ou le bouton Annuler (closeModalForce).
}

function closeModalForce() {
  // Gestion du brouillon de nouvelle tâche : titre saisi -> on enregistre ; sinon -> on supprime
  if (draftTaskId != null) {
    var did = draftTaskId; draftTaskId = null;
    var ti = document.getElementById('task-title');
    var titleVal = ti ? ti.value.trim() : '';
    if (titleVal) { updateTask(did); return; } // updateTask enregistre, ferme et recharge
    grist.docApi.applyUserActions([['RemoveRecord', TASKS_TABLE, did]])
      .then(function () { return loadAllData(); })
      .then(function () { refreshAllViews(); })
      .catch(function () {});
  }
  document.getElementById('modal-container').innerHTML = '';
}

// =============================================================================
// CRUD OPERATIONS
// =============================================================================

async function createTask() {
  var title = document.getElementById('task-title').value.trim();
  if (!title) return;

  var projectEl = document.getElementById('task-project');
  var projectId = projectEl && projectEl.value ? parseInt(projectEl.value) : 0;

  var record = {};
  setField(record, 'tasks', 'title', title);
  setField(record, 'tasks', 'description', document.getElementById('task-desc').value.trim());
  setField(record, 'tasks', 'status', document.getElementById('task-status').value);
  setField(record, 'tasks', 'priority', document.getElementById('task-priority').value);
  setField(record, 'tasks', 'assignee', editAssignees.join(', '));
  if (raciEnabled) {
    record.Accountable = editAccountable.join(', ');
    record.Consulted = editConsulted.join(', ');
    record.Informed = editInformed.join(', ');
  }
  setField(record, 'tasks', 'group', document.getElementById('task-group').value);
  setField(record, 'tasks', 'startDate', toEpoch(document.getElementById('task-start').value));
  setField(record, 'tasks', 'dueDate', toEpoch(document.getElementById('task-due').value));
  setField(record, 'tasks', 'category', document.getElementById('task-category').value.trim());
  setField(record, 'tasks', 'projectId', projectId);
  setField(record, 'tasks', 'createdAt', Math.floor(Date.now() / 1000));
  // B4 : prolongation auto activée par défaut sur les nouvelles tâches (modifiable ensuite)
  record.Auto_Extend = true;

  // Add Tag only if the element exists
  var tagEl = document.getElementById('task-tag');
  if (tagEl) {
    setField(record, 'tasks', 'tag', tagEl.value.trim());
  }

  try {
    var createResult = await grist.docApi.applyUserActions([
      ['AddRecord', TASKS_TABLE, null, record]
    ]);
    var newTaskId = (createResult && createResult.retValues && createResult.retValues[0]) || null;
    showToast(t('taskCreated'), 'success');
    logActivity('task_created', newTaskId, title, '');
    if (newTaskId) {
      var concernedNew = editAssignees.slice();
      if (raciEnabled) concernedNew = concernedNew.concat(editAccountable, editConsulted, editInformed);
      await notifyConcernedUsers(newTaskId, concernedNew, 'task_created', title);
    }
    closeModalForce();
    await loadAllData();
    if (newTaskId) {
      openEditTaskModal(newTaskId);
    }
  } catch (e) {
    console.error('Error creating task:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function updateTask(taskId) {
  var title = document.getElementById('task-title').value.trim();
  if (!title) return;
  if (draftTaskId === taskId) draftTaskId = null; // ce brouillon devient une vraie tâche

  var task = tasks.find(function(t) { return t.id === taskId; });
  var wasNotDone = task && task.Status !== 'done';
  var newStatus = document.getElementById('task-status').value;

  if (newStatus === 'done' && isTaskBlocked(taskId)) {
    var blockers = getTaskDependencies(taskId).filter(function(b) { return b && b.Status !== 'done'; });
    var blockerNames = blockers.map(function(b) { return b.Title; }).join(', ');
    showToast((currentLang === 'fr' ? 'Impossible : tâche bloquée par ' : 'Cannot complete: blocked by ') + blockerNames, 'error');
    return;
  }

  var recurrenceEl = document.getElementById('task-recurrence');
  var newRecurrence = recurrenceEl ? recurrenceEl.value : (task ? task.Recurrence : 'none');

  var projectEl = document.getElementById('task-project');
  var projectId = projectEl && projectEl.value ? parseInt(projectEl.value) : 0;

  var record = {};
  setField(record, 'tasks', 'title', title);
  setField(record, 'tasks', 'description', document.getElementById('task-desc').value.trim());
  setField(record, 'tasks', 'status', newStatus);
  setField(record, 'tasks', 'priority', document.getElementById('task-priority').value);
  setField(record, 'tasks', 'assignee', editAssignees.join(', '));
  if (raciEnabled) {
    record.Accountable = editAccountable.join(', ');
    record.Consulted = editConsulted.join(', ');
    record.Informed = editInformed.join(', ');
  }
  setField(record, 'tasks', 'group', document.getElementById('task-group').value);
  setField(record, 'tasks', 'startDate', toEpoch(document.getElementById('task-start').value));
  setField(record, 'tasks', 'dueDate', toEpoch(document.getElementById('task-due').value));
  setField(record, 'tasks', 'category', document.getElementById('task-category').value.trim());
  setField(record, 'tasks', 'projectId', projectId);
  setField(record, 'tasks', 'recurrence', newRecurrence);
  
  // Add Tag only if the element exists
  var tagEl = document.getElementById('task-tag');
  if (tagEl) {
    setField(record, 'tasks', 'tag', tagEl.value.trim());
  }

  // Extension fields
  var extDateEl = document.getElementById('task-extension-date');
  if (extDateEl) record.Extension_Date = toEpoch(extDateEl.value);
  var autoExtEl = document.getElementById('task-auto-extend');
  if (autoExtEl) record.Auto_Extend = autoExtEl.checked;

  // Auto-freeze extension date when completing a task with auto-extend
  if (newStatus === 'done' && task && task.Auto_Extend && task.Status !== 'done') {
    record.Extension_Date = Math.floor(Date.now() / 1000);
    record.Auto_Extend = false;
  }

  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', TASKS_TABLE, taskId, record]
    ]);
    showToast(t('taskUpdated'), 'success');
    var logDetails = [];
    var autoChanges = {};
    if (task) {
      if (task.Status !== newStatus) { autoChanges.status = { from: task.Status, to: newStatus }; logDetails.push(task.Status + ' → ' + newStatus); }
      var newPriority = document.getElementById('task-priority').value;
      if (task.Priority !== newPriority) autoChanges.priority = { from: task.Priority, to: newPriority };
      var newAssignee = editAssignees.join(', ');
      if (task.Assignee !== newAssignee) autoChanges.assignee = { from: task.Assignee, to: newAssignee };
    }
    if (Object.keys(autoChanges).length > 0) {
      await evaluateAutomationRules(Object.assign({}, task, record, { id: taskId }), autoChanges);
    }
    logActivity(autoChanges.status ? 'status_changed' : 'task_updated', taskId, title, logDetails.join(', '));

    // Notification intégrée des utilisateurs concernés (R/A/C/I) à la modification
    var concernedUpd = editAssignees.slice();
    if (raciEnabled) concernedUpd = concernedUpd.concat(editAccountable, editConsulted, editInformed);
    await notifyConcernedUsers(taskId, concernedUpd, 'task_updated', title);

    // Create next occurrence if task is recurring and just completed
    if (newStatus === 'done' && wasNotDone && newRecurrence && newRecurrence !== 'none') {
      var updatedTask = Object.assign({}, task, record);
      await createNextOccurrence(updatedTask);
    }

    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error updating task:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function deleteTask(taskId) {
  if (!isOwner) return;
  var confirmed = await showConfirmModal(t('confirmDelete'), currentLang === 'fr' ? 'Supprimer la tâche' : 'Delete task');
  if (!confirmed) return;
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', TASKS_TABLE, taskId]
    ]);
    var deletedTask = tasks.find(function(t2) { return t2.id === taskId; });
    showToast(t('taskDeleted'), 'info');
    logActivity('task_deleted', taskId, deletedTask ? deletedTask.Title : '', '');
    if (draftTaskId === taskId) draftTaskId = null;
    var mc = document.getElementById('modal-container'); if (mc) mc.innerHTML = '';  // fermer la vue d'édition
    await loadAllData();
  } catch (e) {
    console.error('Error deleting task:', e);
  }
}

async function createTemplate() {
  var title = document.getElementById('tpl-title').value.trim();
  if (!title) return;

  var record = {
    Title: title,
    Description: document.getElementById('tpl-desc').value.trim(),
    Priority: document.getElementById('tpl-priority').value,
    Category: document.getElementById('tpl-category').value.trim(),
    Estimated_Hours: parseFloat(document.getElementById('tpl-hours').value) || 0,
    Group_Name: (document.getElementById('tpl-group') || {}).value || '',
    Tag: (document.getElementById('tpl-tag') || {}).value || '',
    Recurrence: (document.getElementById('tpl-recurrence') || {}).value || 'none',
    Usage_Count: 0,
    Updated_At: Math.floor(Date.now() / 1000)
  };

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', TEMPLATES_TABLE, null, record]
    ]);
    showToast(t('templateCreated'), 'success');
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error creating template:', e);
  }
}

async function updateTemplate(tplId) {
  var title = document.getElementById('tpl-title').value.trim();
  if (!title) return;

  var record = {
    Title: title,
    Description: document.getElementById('tpl-desc').value.trim(),
    Priority: document.getElementById('tpl-priority').value,
    Category: document.getElementById('tpl-category').value.trim(),
    Estimated_Hours: parseFloat(document.getElementById('tpl-hours').value) || 0,
    Group_Name: (document.getElementById('tpl-group') || {}).value || '',
    Tag: (document.getElementById('tpl-tag') || {}).value || '',
    Recurrence: (document.getElementById('tpl-recurrence') || {}).value || 'none',
    Updated_At: Math.floor(Date.now() / 1000)
  };

  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', TEMPLATES_TABLE, tplId, record]
    ]);
    showToast(t('templateUpdated'), 'success');
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error updating template:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function deleteTemplate(tplId) {
  if (!isOwner) return;
  var confirmed = await showConfirmModal(t('confirmDeleteTemplate'), currentLang === 'fr' ? 'Supprimer le modèle' : 'Delete template');
  if (!confirmed) return;
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', TEMPLATES_TABLE, tplId]
    ]);
    showToast(t('templateDeleted'), 'info');
    await loadAllData();
  } catch (e) {
    console.error('Error deleting template:', e);
  }
}

async function useTemplate(tplId) {
  var tpl = templates.find(function(t) { return t.id === tplId; });
  if (!tpl) return;

  // Increment usage count
  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', TEMPLATES_TABLE, tplId, { Usage_Count: (tpl.Usage_Count || 0) + 1 }]
    ]);
  } catch (e) {}

  // Crée un brouillon pré-rempli depuis le modèle, puis ouvre l'éditeur COMPLET
  startNewTask('todo', null, {
    title: tpl.Title || '',
    description: tpl.Description || '',
    priority: tpl.Priority || 'medium',
    category: tpl.Category || '',
    group: tpl.Group_Name || '',
    tag: tpl.Tag || '',
    recurrence: tpl.Recurrence || 'none',
    estimatedHours: tpl.Estimated_Hours || 0
  });
}

// =============================================================================
// WIDGET PERMISSIONS (centralized via Widget_Registry + Widget_Permissions)
// =============================================================================

var WIDGET_ID = 'grist-project-manager';
var WIDGET_NAME = 'Gestion de Projet';
var WIDGET_TABS = [
  { id: 'calendar',  label_fr: 'Calendrier',  label_en: 'Calendar' },
  { id: 'kanban',    label_fr: 'Kanban',       label_en: 'Kanban' },
  { id: 'table',     label_fr: 'Tableau',      label_en: 'Table' },
  { id: 'gantt',     label_fr: 'Gantt',        label_en: 'Gantt' },
  { id: 'templates', label_fr: 'Templates',    label_en: 'Templates',  ownerOnly: true },
  { id: 'stats',     label_fr: 'Stats',        label_en: 'Stats',      ownerOnly: true },
  { id: 'team',      label_fr: 'Équipe',       label_en: 'Team',       ownerOnly: true },
  { id: 'settings',  label_fr: 'Paramètres',   label_en: 'Settings',   ownerOnly: true }
];

var userAllowedTabs = [];

async function registerWidget() {
  try {
    var tables = await grist.docApi.listTables();
    if (tables.indexOf('Widget_Registry') === -1) return;

    var data = await grist.docApi.fetchTable('Widget_Registry');
    var existingRow = -1;
    if (data && data.id) {
      for (var i = 0; i < data.id.length; i++) {
        if (data.WidgetId[i] === WIDGET_ID) { existingRow = data.id[i]; break; }
      }
    }
    var tabsJson = JSON.stringify(WIDGET_TABS);
    if (existingRow !== -1) {
      await grist.docApi.applyUserActions([
        ['UpdateRecord', 'Widget_Registry', existingRow, { WidgetName: WIDGET_NAME, AvailableTabs: tabsJson }]
      ]);
    } else {
      await grist.docApi.applyUserActions([
        ['AddRecord', 'Widget_Registry', null, { WidgetId: WIDGET_ID, WidgetName: WIDGET_NAME, AvailableTabs: tabsJson }]
      ]);
    }
  } catch (e) {
    console.log('Widget registration skipped:', e.message);
  }
}

async function loadWidgetPermissions() {
  userAllowedTabs = [];
  if (!currentUserEmail) return;
  try {
    var tables = await grist.docApi.listTables();
    if (tables.indexOf('Widget_Permissions') === -1) return;

    var data = await grist.docApi.fetchTable('Widget_Permissions');
    if (!data || !data.id) return;
    var email = currentUserEmail.toLowerCase().trim();
    for (var i = 0; i < data.id.length; i++) {
      if (data.WidgetId[i] === WIDGET_ID && (data.Email[i] || '').toLowerCase().trim() === email) {
        userAllowedTabs = (data.AllowedTabs[i] || '').split(',').map(function(x) { return x.trim().toLowerCase(); }).filter(Boolean);
        break;
      }
    }
  } catch (e) {
    console.log('Widget permissions load skipped:', e.message);
  }
}

function isTabAllowed(tabId) {
  if (userAllowedTabs.length > 0) return userAllowedTabs.indexOf(tabId) !== -1;
  if (isOwner) return true;
  var ownerTabs = ['team', 'templates', 'stats', 'settings'];
  return ownerTabs.indexOf(tabId) === -1;
}

function applyOwnerRestrictions() {
  var allTabs = ['calendar', 'kanban', 'table', 'gantt', 'templates', 'stats', 'team', 'settings'];
  allTabs.forEach(function(tab) {
    var el = document.querySelector('[data-tab="' + tab + '"]');
    if (el) el.style.display = isTabAllowed(tab) ? '' : 'none';
  });
  var activeBtn = document.querySelector('.tab-btn.active');
  if (activeBtn && !isTabAllowed(activeBtn.getAttribute('data-tab'))) {
    switchTab('calendar');
  }
}

// =============================================================================
// STATS VIEW
// =============================================================================

function renderStatsView() {
  var filteredTasks = getFilteredTasks();
  // Status chart (dynamic based on custom statuses)
  var kanbanStatuses = getKanbanStatuses();
  var statusCounts = {};
  kanbanStatuses.forEach(function(s) { statusCounts[s.key] = 0; });
  filteredTasks.forEach(function(t) { statusCounts[t.Status] = (statusCounts[t.Status] || 0) + 1; });
  var maxStatus = Math.max.apply(null, kanbanStatuses.map(function(s) { return statusCounts[s.key] || 0; }).concat([1]));

  var statusHtml = '';
  kanbanStatuses.forEach(function(s) {
    var count = statusCounts[s.key] || 0;
    var height = (count / maxStatus) * 160;
    var label = currentLang === 'fr' ? s.label_fr : s.label_en;
    statusHtml += '<div class="chart-bar">';
    statusHtml += '<span class="chart-bar-value">' + count + '</span>';
    statusHtml += '<div class="chart-bar-fill" style="height:' + height + 'px;background:' + (s.color || '#94a3b8') + '"></div>';
    statusHtml += '<span class="chart-bar-label">' + sanitize(label) + '</span>';
    statusHtml += '</div>';
  });
  document.getElementById('chart-status').innerHTML = statusHtml;

  // Priority chart
  var priorityCounts = { high: 0, medium: 0, low: 0 };
  filteredTasks.forEach(function(t) { priorityCounts[t.Priority] = (priorityCounts[t.Priority] || 0) + 1; });
  var maxPriority = Math.max(priorityCounts.high, priorityCounts.medium, priorityCounts.low, 1);
  
  var priorityHtml = '';
  var priorityColors = { high: '#ef4444', medium: '#f59e0b', low: '#22c55e' };
  var priorityLabels = { high: t('priorityHigh'), medium: t('priorityMedium'), low: t('priorityLow') };
  ['high', 'medium', 'low'].forEach(function(p) {
    var height = (priorityCounts[p] / maxPriority) * 160;
    priorityHtml += '<div class="chart-bar">';
    priorityHtml += '<span class="chart-bar-value">' + priorityCounts[p] + '</span>';
    priorityHtml += '<div class="chart-bar-fill" style="height:' + height + 'px;background:' + priorityColors[p] + '"></div>';
    priorityHtml += '<span class="chart-bar-label">' + priorityLabels[p] + '</span>';
    priorityHtml += '</div>';
  });
  document.getElementById('chart-priority').innerHTML = priorityHtml;

  // Assignee chart
  var assigneeCounts = {};
  filteredTasks.forEach(function(t) {
    if (t.Assignee) {
      t.Assignee.split(',').forEach(function(a) {
        var name = getUserDisplayName(a.trim());
        assigneeCounts[name] = (assigneeCounts[name] || 0) + 1;
      });
    }
  });
  var assigneeEntries = Object.entries(assigneeCounts).sort(function(a, b) { return b[1] - a[1]; }).slice(0, 5);
  var maxAssignee = assigneeEntries.length > 0 ? assigneeEntries[0][1] : 1;
  
  var assigneeHtml = '';
  var colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#22c55e'];
  assigneeEntries.forEach(function(entry, i) {
    var height = (entry[1] / maxAssignee) * 160;
    assigneeHtml += '<div class="chart-bar">';
    assigneeHtml += '<span class="chart-bar-value">' + entry[1] + '</span>';
    assigneeHtml += '<div class="chart-bar-fill" style="height:' + height + 'px;background:' + colors[i % colors.length] + '"></div>';
    assigneeHtml += '<span class="chart-bar-label">' + entry[0] + '</span>';
    assigneeHtml += '</div>';
  });
  if (assigneeEntries.length === 0) {
    assigneeHtml = '<div style="text-align:center;color:#94a3b8;width:100%;">Aucune donnée</div>';
  }
  document.getElementById('chart-assignee').innerHTML = assigneeHtml;

  // Week chart (tasks active or due this week by day)
  var weekDays = currentLang === 'fr' ? ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  var now = new Date();
  var dayOfWeek = now.getDay();
  var mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  var weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() + mondayOffset);

  var weekCounts = [0, 0, 0, 0, 0, 0, 0];
  filteredTasks.forEach(function(task) {
    var tStart = task.Start_Date ? task.Start_Date : (task.Due_Date || null);
    var tEnd = task.Due_Date ? task.Due_Date : (task.Start_Date || null);
    if (!tEnd) return;
    for (var d = 0; d < 7; d++) {
      var dayStart = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + d);
      var dayEnd = new Date(dayStart); dayEnd.setHours(23, 59, 59, 999);
      var dsTs = Math.floor(dayStart.getTime() / 1000);
      var deTs = Math.floor(dayEnd.getTime() / 1000);
      if (tStart <= deTs && tEnd >= dsTs) {
        weekCounts[d]++;
      }
    }
  });
  var maxWeek = Math.max.apply(null, weekCounts) || 1;
  
  var weekHtml = '';
  weekCounts.forEach(function(count, i) {
    var height = (count / maxWeek) * 160;
    var isToday = i === ((now.getDay() + 6) % 7);
    weekHtml += '<div class="chart-bar">';
    weekHtml += '<span class="chart-bar-value">' + count + '</span>';
    weekHtml += '<div class="chart-bar-fill" style="height:' + height + 'px;background:' + (isToday ? '#ef4444' : '#3b82f6') + '"></div>';
    weekHtml += '<span class="chart-bar-label">' + weekDays[i] + '</span>';
    weekHtml += '</div>';
  });
  document.getElementById('chart-week').innerHTML = weekHtml;

  // Summary stats
  var completionRate = filteredTasks.length > 0 ? Math.round((statusCounts.done / filteredTasks.length) * 100) : 0;
  document.getElementById('stats-completion-rate').textContent = completionRate + '%';
  
  var overdueCount = getOverdueTasks().length;
  document.getElementById('stats-overdue-count').textContent = overdueCount;
  
  // Calculate total time from time entries
  var totalMinutes = 0;
  timeEntries.forEach(function(te) {
    if (te.Duration) totalMinutes += te.Duration;
  });
  var totalHours = Math.round(totalMinutes / 60);
  document.getElementById('stats-total-time').textContent = totalHours + 'h';
  
  var avgMinutes = filteredTasks.length > 0 ? Math.round(totalMinutes / filteredTasks.length) : 0;
  var avgHours = Math.round(avgMinutes / 60 * 10) / 10;
  document.getElementById('stats-avg-time').textContent = avgHours + 'h';

  // Workload chart - Risk of overload per user
  renderWorkloadChart();
  renderBurndownChart();
  renderActivityLog();
}

function renderWorkloadChart() {
  var workloadData = {};
  var now = Math.floor(Date.now() / 1000);
  var filteredTasks = getFilteredTasks();
  
  // Calculate workload for each assignee
  filteredTasks.forEach(function(task) {
    if (task.Assignee && task.Status !== 'done') {
      task.Assignee.split(',').forEach(function(a) {
        var email = a.trim();
        var name = getUserDisplayName(email);
        if (!workloadData[name]) {
          workloadData[name] = {
            total: 0,
            overdue: 0,
            highPriority: 0,
            estimatedHours: 0
          };
        }
        workloadData[name].total++;
        if (task.Due_Date && task.Due_Date < now) {
          workloadData[name].overdue++;
        }
        if (task.Priority === 'high') {
          workloadData[name].highPriority++;
        }
        if (task.Estimated_Hours) {
          workloadData[name].estimatedHours += task.Estimated_Hours;
        }
      });
    }
  });

  // Calculate risk score for each user
  // Score = (tasks * 10) + (overdue * 30) + (highPriority * 15)
  // Risk levels: 0-50 = low, 51-100 = medium, >100 = high
  var workloadEntries = Object.entries(workloadData).map(function(entry) {
    var name = entry[0];
    var data = entry[1];
    var score = (data.total * 10) + (data.overdue * 30) + (data.highPriority * 15);
    var level = score <= 50 ? 'low' : (score <= 100 ? 'medium' : 'high');
    var levelLabel = currentLang === 'fr' 
      ? (level === 'low' ? 'OK' : (level === 'medium' ? 'Attention' : 'Surcharge'))
      : (level === 'low' ? 'OK' : (level === 'medium' ? 'Warning' : 'Overload'));
    return {
      name: name,
      total: data.total,
      overdue: data.overdue,
      highPriority: data.highPriority,
      score: score,
      level: level,
      levelLabel: levelLabel
    };
  }).sort(function(a, b) { return b.score - a.score; });

  var maxScore = workloadEntries.length > 0 ? Math.max(workloadEntries[0].score, 100) : 100;

  var html = '';
  if (workloadEntries.length === 0) {
    html = '<div style="text-align:center;color:#94a3b8;padding:20px;">' + (currentLang === 'fr' ? 'Aucune tâche assignée' : 'No assigned tasks') + '</div>';
  } else {
    workloadEntries.forEach(function(entry) {
      var barWidth = Math.min((entry.score / maxScore) * 100, 100);
      html += '<div class="workload-row">';
      html += '<div class="workload-name" title="' + entry.name + '">' + entry.name + '</div>';
      html += '<div class="workload-bar-bg">';
      html += '<div class="workload-bar-fill ' + entry.level + '" style="width:' + barWidth + '%"></div>';
      html += '</div>';
      html += '<div class="workload-stats">';
      html += '<span class="workload-badge ' + entry.level + '">' + entry.levelLabel + '</span>';
      html += '<span class="workload-detail">' + entry.total + ' ' + (currentLang === 'fr' ? 'tâches' : 'tasks');
      if (entry.overdue > 0) {
        html += ' • <span style="color:#ef4444;">' + entry.overdue + ' ' + (currentLang === 'fr' ? 'en retard' : 'overdue') + '</span>';
      }
      html += '</span>';
      html += '</div>';
      html += '</div>';
    });
  }

  document.getElementById('chart-workload').innerHTML = html;

  // Populate agent filter and render timeline
  var agentSelect = document.getElementById('timeline-agent');
  if (agentSelect) {
    var agentNames = Object.keys(workloadData).sort();
    var currentAgentVal = agentSelect.value;
    agentSelect.innerHTML = '<option value="">' + (currentLang === 'fr' ? 'Tous les agents' : 'All agents') + '</option>';
    agentNames.forEach(function(name) {
      var sel = name === currentAgentVal ? ' selected' : '';
      agentSelect.innerHTML += '<option value="' + sanitize(name) + '"' + sel + '>' + sanitize(name) + '</option>';
    });
  }
  renderTimelineChart();
}

function renderTimelineChart() {
  var container = document.getElementById('chart-timeline');
  if (!container) return;

  var periodSel = document.getElementById('timeline-period');
  var agentSel = document.getElementById('timeline-agent');
  var period = periodSel ? periodSel.value : 'weeks';
  var agentFilter = agentSel ? agentSel.value : '';

  var now = new Date(); now.setHours(0, 0, 0, 0);
  var slots = [];
  var tlMn = currentLang === 'fr'
    ? ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (period === 'weeks') {
    // Show 4 past weeks + current + 3 future = 8 weeks
    var dayOfW = now.getDay();
    var offToMon = dayOfW === 0 ? -6 : 1 - dayOfW;
    var thisMon = new Date(now); thisMon.setDate(thisMon.getDate() + offToMon);
    for (var w = -4; w < 4; w++) {
      var wStart = new Date(thisMon); wStart.setDate(thisMon.getDate() + w * 7);
      var wEnd = new Date(wStart); wEnd.setDate(wStart.getDate() + 6); wEnd.setHours(23, 59, 59, 999);
      var isCurrentW = w === 0;
      slots.push({ label: wStart.getDate() + '/' + (wStart.getMonth() + 1), start: Math.floor(wStart.getTime() / 1000), end: Math.floor(wEnd.getTime() / 1000), current: isCurrentW });
    }
  } else {
    // Show 3 past months + current + 2 future = 6 months
    for (var m = -3; m < 3; m++) {
      var d = new Date(now.getFullYear(), now.getMonth() + m, 1);
      var dEnd = new Date(now.getFullYear(), now.getMonth() + m + 1, 0, 23, 59, 59, 999);
      slots.push({ label: tlMn[d.getMonth()], start: Math.floor(d.getTime() / 1000), end: Math.floor(dEnd.getTime() / 1000), current: m === 0 });
    }
  }

  // Collect tasks per slot per agent (overlap-based: task active during slot)
  var agentColors = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#84cc16'];
  var allAgents = [];
  var filteredTasks = getFilteredTasks().filter(function(t) { return t.Status !== 'done'; });

  filteredTasks.forEach(function(t) {
    if (!t.Assignee) return;
    t.Assignee.split(',').forEach(function(a) {
      var name = getUserDisplayName(a.trim());
      if (allAgents.indexOf(name) === -1) allAgents.push(name);
    });
  });
  allAgents.sort();

  var visibleAgents = agentFilter ? [agentFilter] : allAgents;

  // Build data[slot][agent] = count (task active = overlaps slot)
  var data = slots.map(function(slot) {
    var row = { label: slot.label, total: 0, current: slot.current };
    visibleAgents.forEach(function(agent) { row[agent] = 0; });
    filteredTasks.forEach(function(t) {
      var tS = t.Start_Date ? t.Start_Date : (t.Due_Date || null);
      var tE = t.Due_Date ? t.Due_Date : (t.Start_Date || null);
      if (!tE) return;
      if (tS > slot.end || tE < slot.start) return; // no overlap
      if (!t.Assignee) return;
      t.Assignee.split(',').forEach(function(a) {
        var name = getUserDisplayName(a.trim());
        if (visibleAgents.indexOf(name) === -1) return;
        row[name] = (row[name] || 0) + 1;
        row.total++;
      });
    });
    return row;
  });

  var maxVal = Math.max.apply(null, data.map(function(d) { return d.total; }));
  if (maxVal === 0) maxVal = 1;
  var BAR_H = 120;

  var html = '<div style="display:flex;gap:4px;align-items:flex-end;min-height:' + (BAR_H + 50) + 'px;">';
  data.forEach(function(slot) {
    var colStyle = slot.current ? 'flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;background:#eff6ff;border-radius:6px;padding:2px;' : 'flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;';
    html += '<div style="' + colStyle + '">';
    html += '<span style="font-size:10px;color:' + (slot.current ? '#2563eb' : '#64748b') + ';font-weight:' + (slot.current ? '700' : '600') + ';">' + (slot.total || '') + '</span>';
    html += '<div style="width:100%;display:flex;flex-direction:column-reverse;gap:1px;">';
    var stackH = 0;
    visibleAgents.forEach(function(agent, idx) {
      var count = slot[agent] || 0;
      if (count === 0) return;
      var h = Math.max(Math.round((count / maxVal) * BAR_H), 4);
      stackH += h;
      var color = agentColors[idx % agentColors.length];
      html += '<div title="' + sanitize(agent) + ' : ' + count + '" style="height:' + h + 'px;background:' + color + ';border-radius:2px;opacity:0.85;"></div>';
    });
    if (stackH === 0) {
      html += '<div style="height:4px;background:#e2e8f0;border-radius:2px;"></div>';
    }
    html += '</div>';
    html += '<span style="font-size:10px;color:' + (slot.current ? '#2563eb' : '#94a3b8') + ';margin-top:4px;font-weight:' + (slot.current ? '700' : 'normal') + ';">' + slot.label + '</span>';
    html += '</div>';
  });
  html += '</div>';

  // Legend
  if (visibleAgents.length > 1) {
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;">';
    visibleAgents.forEach(function(agent, idx) {
      var color = agentColors[idx % agentColors.length];
      html += '<span style="font-size:11px;display:flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;background:' + color + ';border-radius:2px;"></span>' + sanitize(agent) + '</span>';
    });
    html += '</div>';
  }

  container.innerHTML = html;
}

function renderBurndownChart() {
  var container = document.getElementById('chart-burndown');
  if (!container) return;
  var periodSel = document.getElementById('burndown-period');
  var weeks = periodSel ? parseInt(periodSel.value) || 8 : 8;

  var now = new Date();
  var dayOfWeek = now.getDay();
  var mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  var thisMonday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + mondayOffset);
  thisMonday.setHours(0, 0, 0, 0);

  var allTasks = getFilteredTasks();
  var labels = [];
  var remaining = [];
  var completed = [];

  for (var w = weeks - 1; w >= 0; w--) {
    var weekEnd = new Date(thisMonday.getTime() - (w * 7 * 86400000));
    weekEnd.setDate(weekEnd.getDate() + 6);
    weekEnd.setHours(23, 59, 59, 999);
    var weekEndTs = Math.floor(weekEnd.getTime() / 1000);

    var dd = String(weekEnd.getDate()).padStart(2, '0');
    var mm = String(weekEnd.getMonth() + 1).padStart(2, '0');
    labels.push(dd + '/' + mm);

    var createdBefore = allTasks.filter(function(t) {
      return t.Created_At && t.Created_At <= weekEndTs;
    });

    var doneByThen = createdBefore.filter(function(t) {
      return t.Status === 'done';
    }).length;

    var totalByThen = createdBefore.length;
    var remainByThen = totalByThen - doneByThen;

    remaining.push(remainByThen);
    completed.push(doneByThen);
  }

  var maxVal = Math.max.apply(null, remaining.concat(completed).concat([1]));
  var chartH = 180;
  var barW = Math.max(20, Math.floor(300 / weeks));

  var html = '<div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:10px;">';
  html += '<span style="font-size:11px;display:flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;background:#ef4444;border-radius:2px;flex-shrink:0;"></span>' + t('burnRemaining') + '</span>';
  html += '<span style="font-size:11px;display:flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;background:#22c55e;border-radius:2px;flex-shrink:0;"></span>' + t('burnCompleted') + '</span>';
  html += '<span style="font-size:11px;display:flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;border:1.5px dashed #94a3b8;border-radius:2px;flex-shrink:0;"></span>' + t('burnIdeal') + '</span>';
  html += '</div>';

  html += '<div style="position:relative;height:' + (chartH + 30) + 'px;">';

  // Ideal line (from max remaining at start to 0)
  var startRemaining = remaining[0] || 0;
  var svgW = labels.length * (barW + 8);
  html += '<svg style="position:absolute;top:0;left:0;width:' + svgW + 'px;height:' + chartH + 'px;pointer-events:none;">';
  for (var li = 0; li < labels.length - 1; li++) {
    var x1 = li * (barW + 8) + barW / 2;
    var x2 = (li + 1) * (barW + 8) + barW / 2;
    var idealVal1 = startRemaining - (startRemaining / (labels.length - 1)) * li;
    var idealVal2 = startRemaining - (startRemaining / (labels.length - 1)) * (li + 1);
    var y1 = chartH - (idealVal1 / maxVal) * chartH;
    var y2 = chartH - (idealVal2 / maxVal) * chartH;
    html += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#94a3b8" stroke-dasharray="4,3" stroke-width="1.5"/>';
  }
  html += '</svg>';

  // Bars
  html += '<div style="display:flex;align-items:flex-end;gap:8px;height:' + chartH + 'px;">';
  for (var bi = 0; bi < labels.length; bi++) {
    var remH = (remaining[bi] / maxVal) * (chartH - 20);
    var compH = (completed[bi] / maxVal) * (chartH - 20);
    html += '<div style="display:flex;flex-direction:column;align-items:center;width:' + barW + 'px;">';
    html += '<div style="font-size:9px;color:#64748b;margin-bottom:2px;">' + remaining[bi] + '</div>';
    html += '<div style="width:100%;display:flex;flex-direction:column;gap:1px;">';
    html += '<div style="height:' + remH + 'px;background:#ef4444;border-radius:3px 3px 0 0;min-height:2px;"></div>';
    html += '<div style="height:' + compH + 'px;background:#22c55e;border-radius:0 0 3px 3px;min-height:2px;"></div>';
    html += '</div>';
    html += '</div>';
  }
  html += '</div>';

  // Labels
  html += '<div style="display:flex;gap:8px;margin-top:4px;">';
  for (var lbi = 0; lbi < labels.length; lbi++) {
    html += '<div style="width:' + barW + 'px;text-align:center;font-size:9px;color:#94a3b8;">' + labels[lbi] + '</div>';
  }
  html += '</div>';

  html += '</div>';
  container.innerHTML = html;
}

// =============================================================================
// ACTIVITY LOG
// =============================================================================

async function logActivity(action, taskId, taskTitle, details) {
  try {
    var record = {
      Timestamp: Math.floor(Date.now() / 1000),
      User_Email: currentUserEmail || 'unknown',
      Action: action,
      Task_Id: taskId || 0,
      Task_Title: taskTitle || '',
      Details: details || ''
    };
    await grist.docApi.applyUserActions([['AddRecord', ACTIVITY_LOG_TABLE, null, record]]);
    activityLog.push(record);
  } catch (e) {
    console.log('[GristPM] Activity log skipped:', e.message);
  }
}

var _activityLogLimit = 20;

function renderActivityLog() {
  var container = document.getElementById('activity-log-list');
  if (!container) return;

  var sorted = activityLog.slice().sort(function(a, b) { return (b.Timestamp || 0) - (a.Timestamp || 0); });
  var shown = sorted.slice(0, _activityLogLimit);

  if (shown.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:20px;">' + t('actNoActivity') + '</div>';
    return;
  }

  var ACTION_ICONS = {
    task_created: '🆕',
    task_updated: '✏️',
    task_deleted: '🗑️',
    status_changed: '🔄',
    task_archived: '📦',
    task_restored: '♻️',
    comment_added: '💬'
  };

  var ACTION_I18N = {
    task_created: 'actTaskCreated',
    task_updated: 'actTaskUpdated',
    task_deleted: 'actTaskDeleted',
    status_changed: 'actStatusChanged',
    task_archived: 'actTaskArchived',
    task_restored: 'actTaskRestored',
    comment_added: 'actCommentAdded'
  };

  var html = '';
  var lastDateStr = '';
  for (var i = 0; i < shown.length; i++) {
    var entry = shown[i];
    var dateObj = entry.Timestamp ? new Date(entry.Timestamp * 1000) : new Date();
    var dateStr = dateObj.toLocaleDateString(currentLang === 'fr' ? 'fr-FR' : 'en-US', { weekday: 'long', day: 'numeric', month: 'long' });
    if (dateStr !== lastDateStr) {
      html += '<div style="font-size:11px;font-weight:700;color:#94a3b8;padding:8px 0 4px;border-bottom:1px solid #f1f5f9;text-transform:capitalize;">' + dateStr + '</div>';
      lastDateStr = dateStr;
    }
    var icon = ACTION_ICONS[entry.Action] || '📋';
    var actionText = t(ACTION_I18N[entry.Action] || entry.Action);
    var userName = getUserDisplayName(entry.User_Email);
    var timeStr = dateObj.toLocaleTimeString(currentLang === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' });

    html += '<div class="activity-entry" style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid #f8fafc;"';
    if (entry.Task_Id) html += ' onclick="openEditTaskModal(' + entry.Task_Id + ')" style="cursor:pointer;"';
    html += '>';
    html += '<span style="font-size:16px;flex-shrink:0;margin-top:2px;">' + icon + '</span>';
    html += '<div style="flex:1;min-width:0;">';
    html += '<div style="font-size:13px;"><strong>' + sanitize(userName) + '</strong> ' + actionText;
    if (entry.Task_Title) html += ' <span style="color:#3b82f6;font-weight:600;">' + sanitize(entry.Task_Title) + '</span>';
    html += '</div>';
    if (entry.Details) html += '<div style="font-size:11px;color:#64748b;margin-top:2px;">' + sanitize(entry.Details) + '</div>';
    html += '</div>';
    html += '<span style="font-size:10px;color:#94a3b8;white-space:nowrap;margin-top:3px;">' + timeStr + '</span>';
    html += '</div>';
  }

  if (sorted.length > _activityLogLimit) {
    html += '<div style="text-align:center;padding:12px;"><button class="btn btn-secondary btn-sm" onclick="_activityLogLimit+=20;renderActivityLog();">' + t('actLoadMore') + '</button></div>';
  }

  container.innerHTML = html;
}

// =============================================================================
// PROJECT MANAGEMENT
// =============================================================================

// Remplit le sélecteur "Responsable" avec les utilisateurs (et présélectionne)
function populateProjectLead(selectedValue) {
  var sel = document.getElementById('project-lead');
  if (!sel) return;
  var html = '<option value="">--</option>';
  users.forEach(function (u) {
    var val = u.Email || u.Name;
    if (!val) return;
    html += '<option value="' + sanitize(val) + '"' + (val === selectedValue ? ' selected' : '') + '>' + sanitize(u.Name || u.Email) + '</option>';
  });
  sel.innerHTML = html;
}

function openProjectModal() {
  document.getElementById('project-modal').style.display = 'flex';
  document.getElementById('edit-project-id').value = '';
  document.getElementById('project-name').value = '';
  document.getElementById('project-description').value = '';
  document.getElementById('project-color').value = '#6366f1';
  document.getElementById('project-status').value = 'active';
  populateProjectLead('');
  document.getElementById('project-form-title').textContent = t('addProject');
  var psearch = document.getElementById('project-search');
  if (psearch) psearch.value = '';
  renderProjectList();
}

function closeProjectModal() {
  document.getElementById('project-modal').style.display = 'none';
}

var PROJECT_LIST_LIMIT = 5;
function renderProjectList() {
  var searchEl = document.getElementById('project-search');
  var q = (searchEl && searchEl.value ? searchEl.value : '').trim().toLowerCase();

  var html = '';
  if (projects.length === 0) {
    html = '<div style="text-align:center;color:#94a3b8;padding:20px;">' + t('noProject') + '</div>';
    document.getElementById('project-list').innerHTML = html;
    return;
  }

  // Tri du plus récent au plus ancien (id décroissant)
  var sorted = projects.slice().sort(function(a, b) { return (b.id || 0) - (a.id || 0); });

  var matching = q
    ? sorted.filter(function(p) { return (p.Name || '').toLowerCase().indexOf(q) !== -1; })
    : sorted;

  // Sans recherche : limiter aux N plus récents
  var shown = q ? matching : matching.slice(0, PROJECT_LIST_LIMIT);

  if (matching.length === 0) {
    html = '<div style="text-align:center;color:#94a3b8;padding:16px;">' + (currentLang === 'fr' ? 'Aucun projet trouvé' : 'No project found') + '</div>';
    document.getElementById('project-list').innerHTML = html;
    return;
  }

  var filteredTasks = getFilteredTasks();
  html = '<div class="project-items">';
  shown.forEach(function(proj) {
    var taskCount = filteredTasks.filter(function(t) { return t.Project_Id === proj.id; }).length;
    html += '<div class="project-item" style="border-left: 4px solid ' + (proj.Color || '#6366f1') + ';">';
    html += '<div class="project-item-info">';
    html += '<strong>' + sanitize(proj.Name) + '</strong>';
    var metaTxt = taskCount + ' ' + (currentLang === 'fr' ? 'tâches' : 'tasks');
    if (proj.Lead) metaTxt += ' · 👤 ' + (currentLang === 'fr' ? 'resp. ' : 'lead ') + sanitize(getUserDisplayName(proj.Lead));
    if (proj.CreatedBy) metaTxt += ' · ' + (currentLang === 'fr' ? 'créé par ' : 'created by ') + sanitize(getUserDisplayName(proj.CreatedBy));
    html += '<span class="project-item-meta">' + metaTxt + '</span>';
    html += '</div>';
    html += '<div class="project-item-actions">';
    html += '<button class="btn-icon" onclick="editProject(' + proj.id + ')" title="' + t('editProject') + '">✏️</button>';
    html += '<button class="btn-icon" onclick="deleteProject(' + proj.id + ')" title="' + t('deleteProject') + '">🗑️</button>';
    html += '</div>';
    html += '</div>';
  });
  html += '</div>';

  // Indicateur si des projets sont masqués (hors recherche)
  if (!q && matching.length > PROJECT_LIST_LIMIT) {
    html += '<div style="text-align:center;color:#94a3b8;font-size:12px;padding:6px;">'
      + (currentLang === 'fr'
        ? '+ ' + (matching.length - PROJECT_LIST_LIMIT) + ' autre(s) — utilisez la recherche'
        : '+ ' + (matching.length - PROJECT_LIST_LIMIT) + ' more — use search')
      + '</div>';
  }

  document.getElementById('project-list').innerHTML = html;
}

function editProject(projectId) {
  var proj = projects.find(function(p) { return p.id === projectId; });
  if (!proj) return;
  
  document.getElementById('edit-project-id').value = proj.id;
  document.getElementById('project-name').value = proj.Name || '';
  document.getElementById('project-description').value = proj.Description || '';
  document.getElementById('project-color').value = proj.Color || '#6366f1';
  document.getElementById('project-status').value = proj.Status || 'active';
  populateProjectLead(proj.Lead || '');
  document.getElementById('project-form-title').textContent = t('editProject');
}

async function saveProject() {
  var projectId = document.getElementById('edit-project-id').value;
  var name = document.getElementById('project-name').value.trim();
  var description = document.getElementById('project-description').value.trim();
  var color = document.getElementById('project-color').value;
  var status = document.getElementById('project-status').value;
  var leadEl = document.getElementById('project-lead');
  var lead = leadEl ? leadEl.value : '';

  if (!name) {
    showToast(t('projectName') + ' ' + t('required'), 'error');
    return;
  }

  try {
    var record = {};
    setField(record, 'projects', 'name', name);
    setField(record, 'projects', 'description', description);
    setField(record, 'projects', 'color', color);
    setField(record, 'projects', 'status', status);
    setField(record, 'projects', 'lead', lead);
    
    if (projectId) {
      await grist.docApi.applyUserActions([
        ['UpdateRecord', PROJECTS_TABLE, parseInt(projectId), record]
      ]);
      showToast(t('editProject') + ' ✓', 'success');
    } else {
      // Créateur du projet (auteur) — uniquement sur la table par défaut qui possède ces colonnes
      if (PROJECTS_TABLE === DEFAULT_PROJECTS_TABLE) {
        record.CreatedBy = currentUserEmail || '';
        record.CreatedAt = new Date().toISOString();
      }
      await grist.docApi.applyUserActions([
        ['AddRecord', PROJECTS_TABLE, null, record]
      ]);
      showToast(t('addProject') + ' ✓', 'success');
    }
    closeModalForce();
    await loadAllData();
    refreshAllViews();
    renderProjectList();
    document.getElementById('edit-project-id').value = '';
    document.getElementById('project-name').value = '';
    document.getElementById('project-description').value = '';
    document.getElementById('project-color').value = '#6366f1';
    document.getElementById('project-status').value = 'active';
    populateProjectLead('');
    document.getElementById('project-form-title').textContent = t('addProject');
  } catch (e) {
    console.error('Error saving project:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function deleteProject(projectId) {
  var confirmed = await showConfirmModal(t('confirmDelete'), currentLang === 'fr' ? 'Supprimer le projet' : 'Delete project');
  if (!confirmed) return;
  
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', PROJECTS_TABLE, projectId]
    ]);
    showToast(t('deleteProject') + ' ✓', 'success');
    await loadAllData();
    renderProjectList();
  } catch (e) {
    console.error('Error deleting project:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

// =============================================================================
// SETTINGS VIEW
// =============================================================================

function renderSettingsView() {
  renderSettingsProjectsList();
  renderSettingsCategoriesList();
  renderSettingsTagsList();
  renderCardDisplaySettings();
  renderKanbanStatusesList();
  renderRaciToggle();
  renderAutomationsSection();
  renderNotifyConcernedToggle();
  renderSecuritySection();
}

var _statusDragIndex = null;
function renderKanbanStatusesList() {
  var container = document.getElementById('kanban-statuses-list');
  if (!container) return;
  var statuses = getKanbanStatuses();
  var html = '';
  for (var i = 0; i < statuses.length; i++) {
    var s = statuses[i];
    var label = currentLang === 'fr' ? s.label_fr : s.label_en;
    var c = s.color || '#94a3b8';
    html += '<div class="kanban-status-item" draggable="true" data-status-index="' + i + '" data-color="' + c + '" style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:white;border-radius:8px;margin-bottom:6px;border:1px solid #e2e8f0;border-left:3px solid transparent;">';
    html += '<span class="kanban-status-drag-handle" title="' + (currentLang === 'fr' ? 'Glisser pour réordonner' : 'Drag to reorder') + '">⠿</span>';
    html += '<span style="width:14px;height:14px;border-radius:50%;background:' + (s.color || '#94a3b8') + ';flex-shrink:0;"></span>';
    html += '<span style="flex:1;font-size:13px;font-weight:600;">' + sanitize(label) + '</span>';
    html += '<span style="font-size:10px;color:#94a3b8;font-family:monospace;">' + sanitize(s.key) + '</span>';
    html += '<button class="btn-icon" onclick="editKanbanStatus(' + i + ')" title="' + (currentLang === 'fr' ? 'Modifier' : 'Edit') + '">✏️</button>';
    if (statuses.length > 2) html += '<button class="btn-icon" onclick="removeKanbanStatus(' + i + ')" title="' + t('delete') + '">🗑️</button>';
    html += '</div>';
  }
  container.innerHTML = html;
  var items = container.querySelectorAll('.kanban-status-item');
  items.forEach(function(item) {
    var col = item.dataset.color;
    item.addEventListener('mouseenter', function() {
      item.style.background = col + '10';
      item.style.borderColor = col + '30';
      item.style.borderLeftColor = col;
    });
    item.addEventListener('mouseleave', function() {
      item.style.background = 'white';
      item.style.borderColor = '#e2e8f0';
      item.style.borderLeftColor = 'transparent';
    });
    item.addEventListener('dragstart', function(e) {
      _statusDragIndex = parseInt(item.dataset.statusIndex);
      item.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    item.addEventListener('dragend', function() {
      item.classList.remove('dragging');
      items.forEach(function(el) { el.classList.remove('drag-over-above', 'drag-over-below'); });
      _statusDragIndex = null;
    });
    item.addEventListener('dragover', function(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      var targetIndex = parseInt(item.dataset.statusIndex);
      if (targetIndex === _statusDragIndex) return;
      items.forEach(function(el) { el.classList.remove('drag-over-above', 'drag-over-below'); });
      item.classList.add(targetIndex < _statusDragIndex ? 'drag-over-above' : 'drag-over-below');
    });
    item.addEventListener('dragleave', function() {
      item.classList.remove('drag-over-above', 'drag-over-below');
    });
    item.addEventListener('drop', function(e) {
      e.preventDefault();
      items.forEach(function(el) { el.classList.remove('drag-over-above', 'drag-over-below'); });
      var targetIndex = parseInt(item.dataset.statusIndex);
      if (_statusDragIndex === null || targetIndex === _statusDragIndex) return;
      ensureCustomStatuses();
      var moved = customKanbanStatuses.splice(_statusDragIndex, 1)[0];
      customKanbanStatuses.splice(targetIndex, 0, moved);
      saveKanbanStatuses().then(function() {
        renderKanbanStatusesList();
        renderKanbanView();
      });
    });
  });
}

function ensureCustomStatuses() {
  if (!customKanbanStatuses) {
    customKanbanStatuses = JSON.parse(JSON.stringify(defaultKanbanStatuses));
  }
}

async function addKanbanStatus() {
  var result = await showPromptModal(
    currentLang === 'fr' ? 'Nouveau statut' : 'New status',
    [
      { label: currentLang === 'fr' ? 'Nom (FR)' : 'Name (FR)', placeholder: currentLang === 'fr' ? 'Ex: À valider' : 'Ex: In review' },
      { label: currentLang === 'fr' ? 'Nom (EN)' : 'Name (EN)', placeholder: currentLang === 'fr' ? 'Ex: To validate' : 'Ex: In review' },
      { label: 'Emoji', type: 'emoji', placeholder: currentLang === 'fr' ? 'Ex: ✅ 🔍 📋' : 'Ex: ✅ 🔍 📋' },
      { label: currentLang === 'fr' ? 'Couleur' : 'Color', type: 'color' }
    ],
    ['', '', '', '#8b5cf6']
  );
  if (!result || !result[0]) return;
  var labelFr = result[0].trim();
  var labelEn = (result[1] || '').trim() || labelFr;
  var emoji = (result[2] || '').trim();
  var color = result[3] || '#8b5cf6';
  var key = labelFr.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
  if (!key) return;
  var existing = getKanbanStatuses();
  if (existing.some(function(s) { return s.key === key; })) {
    showToast(currentLang === 'fr' ? 'Ce statut existe déjà' : 'This status already exists', 'error');
    return;
  }
  ensureCustomStatuses();
  customKanbanStatuses.push({ key: key, label_fr: labelFr, label_en: labelEn, color: color, emoji: emoji, cssClass: 'col-custom' });
  await saveKanbanStatuses();
  renderKanbanStatusesList();
  renderKanbanView();
  showToast(currentLang === 'fr' ? 'Statut ajouté' : 'Status added', 'success');
}

async function editKanbanStatus(index) {
  ensureCustomStatuses();
  var s = customKanbanStatuses[index];
  if (!s) return;
  var result = await showPromptModal(
    currentLang === 'fr' ? 'Modifier le statut' : 'Edit status',
    [
      { label: currentLang === 'fr' ? 'Nom (FR)' : 'Name (FR)' },
      { label: currentLang === 'fr' ? 'Nom (EN)' : 'Name (EN)' },
      { label: 'Emoji', type: 'emoji', placeholder: currentLang === 'fr' ? 'Ex: ✅ 🔍 📋' : 'Ex: ✅ 🔍 📋' },
      { label: currentLang === 'fr' ? 'Couleur' : 'Color', type: 'color' }
    ],
    [s.label_fr, s.label_en, s.emoji || '', s.color || '#94a3b8']
  );
  if (!result || !result[0]) return;
  customKanbanStatuses[index].label_fr = result[0].trim();
  customKanbanStatuses[index].label_en = (result[1] || '').trim() || result[0].trim();
  customKanbanStatuses[index].emoji = (result[2] || '').trim();
  customKanbanStatuses[index].color = result[3] || s.color;
  await saveKanbanStatuses();
  renderKanbanStatusesList();
  renderKanbanView();
}

async function removeKanbanStatus(index) {
  ensureCustomStatuses();
  if (customKanbanStatuses.length <= 2) return;
  var removed = customKanbanStatuses.splice(index, 1)[0];
  await saveKanbanStatuses();
  renderKanbanStatusesList();
  renderKanbanView();
  showToast((currentLang === 'fr' ? 'Statut supprimé : ' : 'Status removed: ') + (currentLang === 'fr' ? removed.label_fr : removed.label_en), 'success');
}



function renderCardDisplaySettings() {
  var container = document.getElementById('card-display-settings');
  if (!container) return;
  var fields = [
    { key: 'priority',    label: currentLang === 'fr' ? 'Priorité' : 'Priority' },
    { key: 'description', label: currentLang === 'fr' ? 'Description' : 'Description' },
    { key: 'date',        label: currentLang === 'fr' ? 'Date d\'échéance' : 'Due date' },
    { key: 'assignee',    label: currentLang === 'fr' ? 'Assigné à' : 'Assignee' },
    { key: 'tags',        label: 'Tags' },
    { key: 'category',    label: currentLang === 'fr' ? 'Produit' : 'Product' },
    { key: 'time',        label: currentLang === 'fr' ? 'Temps passé' : 'Time spent' },
    { key: 'subtasks',    label: currentLang === 'fr' ? 'Sous-tâches' : 'Subtasks' },
    { key: 'comments',    label: currentLang === 'fr' ? 'Commentaires' : 'Comments' }
  ];
  var html = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">';
  for (var i = 0; i < fields.length; i++) {
    var f = fields[i];
    var checked = cardDisplaySettings[f.key] !== false;
    html += '<label style="display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:8px;cursor:pointer;background:' + (checked ? '#f0fdf4' : '#f8fafc') + ';border:1px solid ' + (checked ? '#bbf7d0' : '#e2e8f0') + ';font-size:12px;font-weight:500;">';
    html += '<input type="checkbox" ' + (checked ? 'checked' : '') + ' onchange="toggleCardDisplay(\'' + f.key + '\', this.checked)" style="accent-color:#22c55e;">';
    html += f.label + '</label>';
  }
  html += '</div>';
  container.innerHTML = html;
}

async function toggleCardDisplay(key, value) {
  cardDisplaySettings[key] = value;
  await saveCardDisplaySettings();
  renderCardDisplaySettings();
  renderKanbanView();
}

// =============================================================================
// SECURITY — ACL RULES FOR PM_* TABLES
// =============================================================================

var PM_ACL_RULES = [
  { tableId: 'PM_Settings',        ownerPerms: '+CRUDS', editorPerms: '+R-CUD' },
  { tableId: 'PM_Categories',      ownerPerms: '+CRUDS', editorPerms: '+R-CUD' },
  { tableId: 'PM_Tags',            ownerPerms: '+CRUDS', editorPerms: '+R-CUD' },
  { tableId: 'PM_Config',          ownerPerms: '+CRUDS', editorPerms: '+R-CUD' },
  { tableId: 'PM_Templates',       ownerPerms: '+CRUDS', editorPerms: '+R-CUD' },
  { tableId: 'PM_Tasks',           ownerPerms: '+CRUDS', editorPerms: '+RCU-D' },
  { tableId: 'PM_Subtasks',        ownerPerms: '+CRUDS', editorPerms: '+RCU-D' },
  { tableId: 'PM_Comments',        ownerPerms: '+CRUDS', editorPerms: '+RCU-D' },
  { tableId: 'PM_TimeEntries',     ownerPerms: '+CRUDS', editorPerms: '+RCU-D' },
  { tableId: 'PM_CustomFieldValues', ownerPerms: '+CRUDS', editorPerms: '+RCU-D' },
  { tableId: 'PM_CustomFields',    ownerPerms: '+CRUDS', editorPerms: '+R-CUD' },
  { tableId: 'PM_Dependencies',    ownerPerms: '+CRUDS', editorPerms: '+RCU-D' },
  { tableId: 'PM_Users',           ownerPerms: '+CRUDS', editorPerms: '+R-CUD' },
  { tableId: 'PM_Groups',          ownerPerms: '+CRUDS', editorPerms: '+R-CUD' },
  { tableId: 'PM_Projects',        ownerPerms: '+CRUDS', editorPerms: '+R-CUD' },
  { tableId: 'PM_UserInfo',        ownerPerms: '+CRUDS', editorPerms: '+RCUD' },
  { tableId: 'PM_Notifications',   ownerPerms: '+CRUDS', editorPerms: '+RCUD' },
  { tableId: 'PM_ActivityLog',     ownerPerms: '+CRUDS', editorPerms: '+RC-UD' }
];

async function checkSecurityStatus() {
  try {
    var rulesData = await grist.docApi.fetchTable('_grist_ACLRules');
    var resourcesData = await grist.docApi.fetchTable('_grist_ACLResources');

    var resourceMap = {};
    if (resourcesData.id) {
      for (var i = 0; i < resourcesData.id.length; i++) {
        resourceMap[resourcesData.id[i]] = {
          tableId: resourcesData.tableId[i],
          colIds: resourcesData.colIds[i]
        };
      }
    }

    var existingTables = await grist.docApi.listTables();

    var results = [];
    for (var r = 0; r < PM_ACL_RULES.length; r++) {
      var rule = PM_ACL_RULES[r];
      var tableExists = existingTables.indexOf(rule.tableId) !== -1;
      if (!tableExists) continue;

      var hasOwnerRule = false;
      var hasEditorRule = false;

      if (rulesData.id) {
        for (var j = 0; j < rulesData.id.length; j++) {
          var res = resourceMap[rulesData.resource[j]];
          if (!res || res.tableId !== rule.tableId || res.colIds !== '*') continue;
          var formula = rulesData.aclFormula ? rulesData.aclFormula[j] || '' : '';
          var perms = rulesData.permissionsText ? rulesData.permissionsText[j] || '' : '';
          if (formula.indexOf('user.Access') !== -1 && formula.indexOf('OWNER') !== -1) hasOwnerRule = true;
          if (formula === '' && perms !== '') hasEditorRule = true;
          if (formula.indexOf('user.Access') !== -1 && (formula.indexOf('EDITOR') !== -1 || formula.indexOf('not') !== -1 || formula.indexOf('!=') !== -1)) hasEditorRule = true;
        }
      }

      results.push({
        tableId: rule.tableId,
        secured: hasOwnerRule || hasEditorRule,
        ownerPerms: rule.ownerPerms,
        editorPerms: rule.editorPerms
      });
    }
    return results;
  } catch (e) {
    console.error('[GristPM] Error checking security:', e);
    return null;
  }
}

async function applySecurityRules() {
  var container = document.getElementById('security-status');
  if (!container) return;

  var confirmed = await showConfirmModal(
    currentLang === 'fr'
      ? 'Cela va créer des règles d\'accès (ACL) pour protéger les tables PM_*. Les owners garderont tous les droits. Les éditeurs pourront créer et modifier les tâches mais pas les supprimer ni modifier les paramètres. Le document sera rechargé automatiquement.'
      : 'This will create access rules (ACL) to protect PM_* tables. Owners keep full rights. Editors can create and edit tasks but cannot delete them or modify settings. The document will reload automatically.',
    currentLang === 'fr' ? 'Sécuriser le document' : 'Secure document',
    currentLang === 'fr' ? 'Confirmer' : 'Confirm'
  );
  if (!confirmed) return;

  container.innerHTML = '<div style="text-align:center;padding:20px;color:#6366f1;"><div class="spinner" style="margin:0 auto 10px;"></div>' +
    (currentLang === 'fr' ? 'Application des règles en cours...' : 'Applying rules...') + '</div>';

  try {
    var existingTables = await grist.docApi.listTables();
    var resourcesData = await grist.docApi.fetchTable('_grist_ACLResources');
    var rulesData = await grist.docApi.fetchTable('_grist_ACLRules');

    var resourceMap = {};
    if (resourcesData.id) {
      for (var i = 0; i < resourcesData.id.length; i++) {
        resourceMap[resourcesData.tableId[i] + ':' + resourcesData.colIds[i]] = resourcesData.id[i];
      }
    }

    var existingRuleResources = {};
    if (rulesData.id) {
      for (var j = 0; j < rulesData.id.length; j++) {
        var resId = rulesData.resource[j];
        if (!existingRuleResources[resId]) existingRuleResources[resId] = [];
        existingRuleResources[resId].push({
          aclFormula: rulesData.aclFormula ? rulesData.aclFormula[j] || '' : '',
          permissionsText: rulesData.permissionsText ? rulesData.permissionsText[j] || '' : ''
        });
      }
    }

    var actions = [];
    var tempResourceId = -1;

    for (var r = 0; r < PM_ACL_RULES.length; r++) {
      var rule = PM_ACL_RULES[r];
      if (existingTables.indexOf(rule.tableId) === -1) continue;

      var resKey = rule.tableId + ':*';
      var resourceId = resourceMap[resKey];

      var alreadyHasRules = false;
      if (resourceId && existingRuleResources[resourceId]) {
        var existing = existingRuleResources[resourceId];
        for (var k = 0; k < existing.length; k++) {
          if (existing[k].aclFormula.indexOf('user.Access') !== -1) {
            alreadyHasRules = true;
            break;
          }
        }
      }
      if (alreadyHasRules) continue;

      if (!resourceId) {
        resourceId = tempResourceId;
        actions.push(['AddRecord', '_grist_ACLResources', tempResourceId, { tableId: rule.tableId, colIds: '*' }]);
        tempResourceId--;
      }

      actions.push(['AddRecord', '_grist_ACLRules', null, {
        resource: resourceId,
        aclFormula: 'user.Access in [OWNER]',
        permissionsText: rule.ownerPerms,
        memo: 'PM Widget - Owner'
      }]);
      actions.push(['AddRecord', '_grist_ACLRules', null, {
        resource: resourceId,
        aclFormula: '',
        permissionsText: rule.editorPerms,
        memo: 'PM Widget - Default'
      }]);
    }

    if (actions.length === 0) {
      showToast(currentLang === 'fr' ? 'Toutes les tables sont déjà sécurisées' : 'All tables are already secured', 'success');
      renderSecuritySection();
      return;
    }

    await grist.docApi.applyUserActions(actions);
    showToast(currentLang === 'fr' ? 'Règles de sécurité appliquées ✓' : 'Security rules applied ✓', 'success');
  } catch (e) {
    console.error('[GristPM] Error applying security rules:', e);
    container.innerHTML = '<div class="security-error">' +
      (currentLang === 'fr' ? 'Erreur : ' : 'Error: ') + sanitize(e.message) +
      '<br><small>' + (currentLang === 'fr' ? 'Seul un Owner du document peut appliquer les règles d\'accès.' : 'Only a document Owner can apply access rules.') + '</small></div>';
  }
}

async function removeSecurityRules() {
  var confirmed = await showConfirmModal(
    currentLang === 'fr'
      ? 'Cela va supprimer toutes les règles d\'accès créées par le widget sur les tables PM_*. Le document sera rechargé automatiquement.'
      : 'This will remove all access rules created by the widget on PM_* tables. The document will reload automatically.',
    currentLang === 'fr' ? 'Retirer la sécurité' : 'Remove security',
    currentLang === 'fr' ? 'Confirmer' : 'Confirm'
  );
  if (!confirmed) return;

  try {
    var rulesData = await grist.docApi.fetchTable('_grist_ACLRules');
    var resourcesData = await grist.docApi.fetchTable('_grist_ACLResources');

    var pmResourceIds = {};
    if (resourcesData.id) {
      for (var i = 0; i < resourcesData.id.length; i++) {
        if (resourcesData.tableId[i] && resourcesData.tableId[i].indexOf('PM_') === 0 && resourcesData.colIds[i] === '*') {
          pmResourceIds[resourcesData.id[i]] = true;
        }
      }
    }

    var actions = [];
    if (rulesData.id) {
      for (var j = 0; j < rulesData.id.length; j++) {
        if (pmResourceIds[rulesData.resource[j]]) {
          var memo = rulesData.memo ? rulesData.memo[j] || '' : '';
          if (memo.indexOf('PM Widget') !== -1) {
            actions.push(['RemoveRecord', '_grist_ACLRules', rulesData.id[j]]);
          }
        }
      }
    }

    if (actions.length === 0) {
      showToast(currentLang === 'fr' ? 'Aucune règle PM Widget à supprimer' : 'No PM Widget rules to remove', 'info');
      return;
    }

    await grist.docApi.applyUserActions(actions);
    showToast(currentLang === 'fr' ? 'Règles supprimées ✓' : 'Rules removed ✓', 'success');
  } catch (e) {
    console.error('[GristPM] Error removing security rules:', e);
    showToast((currentLang === 'fr' ? 'Erreur : ' : 'Error: ') + e.message, 'error');
  }
}

function renderRaciToggle() {
  var container = document.getElementById('raci-toggle-container');
  if (!container) return;
  var html = '<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;">';
  html += '<div>';
  html += '<span style="font-size:13px;font-weight:600;">' + t(raciEnabled ? 'raciEnabled' : 'raciDisabled') + '</span>';
  html += '<p style="font-size:12px;color:#94a3b8;margin:2px 0 0;">' +
    (currentLang === 'fr'
      ? 'Responsable · Approbateur · Consulté · Informé'
      : 'Responsible · Accountable · Consulted · Informed') + '</p>';
  html += '</div>';
  html += '<label class="toggle-switch">';
  html += '<input type="checkbox" ' + (raciEnabled ? 'checked' : '') + ' onchange="toggleRaci(this.checked)">';
  html += '<span class="toggle-slider"></span>';
  html += '</label>';
  html += '</div>';
  container.innerHTML = html;
}

async function toggleRaci(enabled) {
  raciEnabled = enabled;
  await saveSetting('raci_enabled', enabled ? 'true' : 'false');
  renderRaciToggle();
  showToast(t(enabled ? 'raciEnabled' : 'raciDisabled'), 'success');
}

function renderNotifyConcernedToggle() {
  var container = document.getElementById('notify-concerned-toggle');
  if (!container) return;
  var L = currentLang === 'fr';
  var html = '<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;">';
  html += '<div><span style="font-size:13px;font-weight:600;">' + (L ? 'Notifier les utilisateurs concernés' : 'Notify concerned users') + '</span>';
  html += '<p style="font-size:12px;color:#94a3b8;margin:2px 0 0;">' + (L ? 'À la création et à la modification d\'une tâche (R/A/C/I), une notification est créée pour chaque personne concernée.' : 'On task creation and update, a notification is created for each concerned person (R/A/C/I).') + '</p></div>';
  html += '<label class="toggle-switch"><input type="checkbox" ' + (notifyConcernedEnabled ? 'checked' : '') + ' onchange="toggleNotifyConcerned(this.checked)"><span class="toggle-slider"></span></label>';
  html += '</div>';
  container.innerHTML = html;
}
async function toggleNotifyConcerned(enabled) {
  notifyConcernedEnabled = enabled;
  await saveSetting('notify_concerned', enabled ? 'true' : 'false');
  renderNotifyConcernedToggle();
  showToast(currentLang === 'fr' ? (enabled ? 'Notifications activées' : 'Notifications désactivées') : (enabled ? 'Notifications enabled' : 'Notifications disabled'), 'success');
}

// --- Automations Settings UI ---

var TRIGGER_LABELS = {
  status_change: 'triggerStatusChange',
  priority_change: 'triggerPriorityChange',
  assignment_change: 'triggerAssignmentChange',
  overdue: 'triggerOverdue',
  approaching_deadline: 'triggerApproachingDeadline'
};

var ACTION_LABELS = {
  notify_assignee: 'actionNotifyAssignee',
  notify_project_lead: 'actionNotifyProjectLead',
  notify_specific: 'actionNotifySpecific',
  notify_all: 'actionNotifyAll'
};

function renderAutomationsSection() {
  var container = document.getElementById('automation-rules-list');
  if (!container) return;
  if (!isOwner) {
    container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:12px;font-size:13px;">' +
      (currentLang === 'fr' ? 'Seuls les owners peuvent gérer les automatisations' : 'Only owners can manage automations') + '</div>';
    return;
  }

  if (!automationRules || automationRules.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:20px;font-size:13px;">' +
      '<p>' + t('noRules') + '</p>' +
      '<button class="btn btn-secondary btn-sm" onclick="addDefaultAutomationRules()" style="margin-top:8px;">' + t('defaultRules') + '</button></div>';
    return;
  }

  var html = '';
  for (var i = 0; i < automationRules.length; i++) {
    var rule = automationRules[i];
    var trigLabel = t(TRIGGER_LABELS[rule.trigger] || rule.trigger);
    var actLabel = t(ACTION_LABELS[rule.action] || rule.action);
    var condText = '';
    if (rule.condition) {
      if (rule.condition.from) condText += t('conditionFrom') + ': ' + rule.condition.from + ' ';
      if (rule.condition.to) condText += t('conditionTo') + ': ' + rule.condition.to;
    }

    html += '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:white;border-radius:8px;margin-bottom:6px;border:1px solid #e2e8f0;">';
    html += '<div style="flex:1;">';
    html += '<div style="font-size:13px;font-weight:600;">⚡ ' + trigLabel;
    if (condText) html += ' <span style="font-size:11px;color:#64748b;font-weight:400;">(' + condText.trim() + ')</span>';
    html += '</div>';
    html += '<div style="font-size:11px;color:#64748b;">→ ' + actLabel;
    if (rule.action_target) html += ' (' + sanitize(rule.action_target) + ')';
    html += '</div>';
    html += '</div>';
    html += '<label class="toggle-switch">';
    html += '<input type="checkbox" ' + (rule.enabled ? 'checked' : '') + ' onchange="toggleAutomationRule(' + i + ', this.checked)">';
    html += '<span class="toggle-slider"></span></label>';
    html += '<button class="btn-icon" onclick="openEditAutomationRuleModal(' + i + ')">✏️</button>';
    html += '<button class="btn-icon" onclick="deleteAutomationRule(' + i + ')">🗑️</button>';
    html += '</div>';
  }
  container.innerHTML = html;
}

var _editingRuleIndex = null;

function openAddAutomationRuleModal() {
  _editingRuleIndex = null;
  document.getElementById('automation-modal-title').textContent = '⚡ ' + t('addRule');
  document.getElementById('auto-trigger').value = 'status_change';
  document.getElementById('auto-action').value = 'notify_assignee';
  document.getElementById('auto-target').value = '';
  document.getElementById('auto-msg-fr').value = '';
  document.getElementById('auto-msg-en').value = '';
  onAutoTriggerChange();
  onAutoActionChange();
  document.getElementById('automation-modal').style.display = 'flex';
}

function openEditAutomationRuleModal(index) {
  _editingRuleIndex = index;
  var rule = automationRules[index];
  document.getElementById('automation-modal-title').textContent = '⚡ ' + t('addRule');
  document.getElementById('auto-trigger').value = rule.trigger;
  document.getElementById('auto-action').value = rule.action;
  document.getElementById('auto-target').value = rule.action_target || '';
  document.getElementById('auto-msg-fr').value = rule.message_fr || '';
  document.getElementById('auto-msg-en').value = rule.message_en || '';
  onAutoTriggerChange();
  onAutoActionChange();
  if (rule.condition) {
    if (rule.condition.from) document.getElementById('auto-from').value = rule.condition.from;
    if (rule.condition.to) document.getElementById('auto-to').value = rule.condition.to;
  }
  document.getElementById('automation-modal').style.display = 'flex';
}

function closeAutomationModal() {
  document.getElementById('automation-modal').style.display = 'none';
}

function onAutoTriggerChange() {
  var trigger = document.getElementById('auto-trigger').value;
  var condDiv = document.getElementById('auto-conditions');
  if (trigger === 'overdue' || trigger === 'approaching_deadline' || trigger === 'assignment_change') {
    condDiv.style.display = 'none';
  } else {
    condDiv.style.display = 'flex';
    var fromSel = document.getElementById('auto-from');
    var toSel = document.getElementById('auto-to');
    var anyLabel = t('conditionAny');
    var options = [];
    if (trigger === 'status_change') {
      var statuses = getKanbanStatuses();
      options = statuses.map(function(s) { return { value: s.key, label: currentLang === 'fr' ? s.label_fr : s.label_en }; });
    } else if (trigger === 'priority_change') {
      options = [
        { value: 'high', label: currentLang === 'fr' ? 'Haute' : 'High' },
        { value: 'medium', label: currentLang === 'fr' ? 'Moyenne' : 'Medium' },
        { value: 'low', label: currentLang === 'fr' ? 'Basse' : 'Low' }
      ];
    }
    var optHtml = '<option value="">' + anyLabel + '</option>';
    for (var o = 0; o < options.length; o++) {
      optHtml += '<option value="' + options[o].value + '">' + options[o].label + '</option>';
    }
    fromSel.innerHTML = optHtml;
    toSel.innerHTML = optHtml;
  }
}

function onAutoActionChange() {
  var action = document.getElementById('auto-action').value;
  document.getElementById('auto-target-wrap').style.display = action === 'notify_specific' ? 'block' : 'none';
}

async function saveAutomationRuleFromModal() {
  var rule = {
    id: (_editingRuleIndex !== null && automationRules[_editingRuleIndex]) ? automationRules[_editingRuleIndex].id : 'rule_' + Date.now(),
    enabled: (_editingRuleIndex !== null && automationRules[_editingRuleIndex]) ? automationRules[_editingRuleIndex].enabled : true,
    trigger: document.getElementById('auto-trigger').value,
    condition: {},
    action: document.getElementById('auto-action').value,
    action_target: document.getElementById('auto-target').value.trim(),
    message_fr: document.getElementById('auto-msg-fr').value.trim(),
    message_en: document.getElementById('auto-msg-en').value.trim()
  };
  var fromVal = document.getElementById('auto-from').value;
  var toVal = document.getElementById('auto-to').value;
  if (fromVal) rule.condition.from = fromVal;
  if (toVal) rule.condition.to = toVal;

  if (!rule.message_fr && !rule.message_en) {
    rule.message_fr = 'La tâche "{title}" a changé';
    rule.message_en = 'Task "{title}" changed';
  }

  if (_editingRuleIndex !== null) {
    automationRules[_editingRuleIndex] = rule;
  } else {
    automationRules.push(rule);
  }
  await saveSetting('automation_rules', JSON.stringify(automationRules));
  closeAutomationModal();
  renderAutomationsSection();
  showToast(t(_editingRuleIndex !== null ? 'ruleSaved' : 'ruleCreated'), 'success');
}

async function deleteAutomationRule(index) {
  automationRules.splice(index, 1);
  await saveSetting('automation_rules', JSON.stringify(automationRules));
  renderAutomationsSection();
  showToast(t('ruleDeleted'), 'info');
}

async function toggleAutomationRule(index, enabled) {
  automationRules[index].enabled = enabled;
  await saveSetting('automation_rules', JSON.stringify(automationRules));
  renderAutomationsSection();
}

async function addDefaultAutomationRules() {
  automationRules = [
    {
      id: 'rule_default_1', enabled: true, trigger: 'status_change',
      condition: { to: 'done' }, action: 'notify_assignee',
      message_fr: 'La tâche "{title}" est terminée', message_en: 'Task "{title}" is completed'
    },
    {
      id: 'rule_default_2', enabled: true, trigger: 'priority_change',
      condition: { to: 'high' }, action: 'notify_project_lead',
      message_fr: 'La tâche "{title}" est passée en priorité haute', message_en: 'Task "{title}" priority changed to high'
    },
    {
      id: 'rule_default_3', enabled: true, trigger: 'overdue',
      condition: {}, action: 'notify_assignee',
      message_fr: 'La tâche "{title}" est en retard !', message_en: 'Task "{title}" is overdue!'
    }
  ];
  await saveSetting('automation_rules', JSON.stringify(automationRules));
  renderAutomationsSection();
  showToast(t('ruleCreated'), 'success');
}

async function renderSecuritySection() {
  var container = document.getElementById('security-status');
  if (!container) return;
  if (!isOwner) {
    container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:12px;font-size:13px;">' +
      (currentLang === 'fr' ? 'Seuls les owners peuvent gérer la sécurité' : 'Only owners can manage security') + '</div>';
    return;
  }

  container.innerHTML = '<div style="text-align:center;padding:12px;color:#94a3b8;">' +
    (currentLang === 'fr' ? 'Vérification...' : 'Checking...') + '</div>';

  var results = await checkSecurityStatus();
  if (!results) {
    container.innerHTML = '<div class="security-error">' +
      (currentLang === 'fr' ? 'Impossible de lire les règles d\'accès' : 'Cannot read access rules') + '</div>';
    return;
  }

  if (results.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:12px;font-size:13px;">' +
      (currentLang === 'fr' ? 'Aucune table PM_* détectée' : 'No PM_* tables detected') + '</div>';
    return;
  }

  var securedCount = results.filter(function(r) { return r.secured; }).length;
  var totalCount = results.length;
  var allSecured = securedCount === totalCount;

  var html = '<div class="security-summary ' + (allSecured ? 'security-ok' : 'security-warn') + '">';
  html += '<span class="security-icon">' + (allSecured ? '🔒' : '🔓') + '</span>';
  html += '<span>' + (allSecured
    ? (currentLang === 'fr' ? 'Document sécurisé' : 'Document secured')
    : (currentLang === 'fr' ? securedCount + '/' + totalCount + ' tables protégées' : securedCount + '/' + totalCount + ' tables protected')
  ) + '</span>';
  html += '</div>';

  html += '<div class="security-table-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    var readOnly = r.editorPerms.indexOf('-CUD') !== -1 || (r.editorPerms.indexOf('-C') !== -1 && r.editorPerms.indexOf('-D') !== -1);
    var permLabel = readOnly
      ? (currentLang === 'fr' ? 'Lecture seule' : 'Read only')
      : (currentLang === 'fr' ? 'Créer / Modifier' : 'Create / Edit');

    html += '<div class="security-table-row">';
    html += '<span class="security-table-icon">' + (r.secured ? '✅' : '⚠️') + '</span>';
    html += '<span class="security-table-name">' + sanitize(r.tableId) + '</span>';
    html += '<span class="security-table-perm ' + (readOnly ? 'perm-readonly' : 'perm-readwrite') + '">' + permLabel + '</span>';
    html += '<span class="security-table-status ' + (r.secured ? 'status-ok' : 'status-warn') + '">' +
      (r.secured ? (currentLang === 'fr' ? 'Protégée' : 'Protected') : (currentLang === 'fr' ? 'Non protégée' : 'Unprotected')) + '</span>';
    html += '</div>';
  }
  html += '</div>';

  html += '<div class="security-actions">';
  if (!allSecured) {
    html += '<button class="btn btn-primary btn-sm" onclick="applySecurityRules()">' +
      (currentLang === 'fr' ? '🔒 Sécuriser le document' : '🔒 Secure document') + '</button>';
  }
  if (securedCount > 0) {
    html += '<button class="btn btn-secondary btn-sm" onclick="removeSecurityRules()" style="color:#ef4444;">' +
      (currentLang === 'fr' ? 'Retirer la sécurité' : 'Remove security') + '</button>';
  }
  html += '</div>';

  container.innerHTML = html;
}

var _settingsProjectSearch = '';

var SETTINGS_PROJ_LIMIT = 5;

function renderSettingsProjectsList(searchOverride) {
  var container = document.getElementById('projects-list');
  if (!container) return;
  if (searchOverride !== undefined) _settingsProjectSearch = searchOverride;
  var q = (_settingsProjectSearch || '').trim().toLowerCase();
  var filtered = q
    ? projects.filter(function(p) { return (p.Name || '').toLowerCase().indexOf(q) !== -1; })
    : projects;
  var displayed = q ? filtered : filtered.slice(0, SETTINGS_PROJ_LIMIT);
  var extraCount = q ? 0 : Math.max(0, filtered.length - SETTINGS_PROJ_LIMIT);

  var html = '<div style="margin-bottom:10px;">';
  html += '<input type="text" id="settings-proj-search" class="settings-search-input"';
  html += ' placeholder="' + (currentLang === 'fr' ? 'Rechercher un projet...' : 'Search a project...') + '"';
  html += ' value="' + sanitize(_settingsProjectSearch) + '" oninput="renderSettingsProjectsList(this.value)"';
  html += ' autocomplete="off">';
  html += '</div>';

  if (displayed.length === 0) {
    html += '<div style="text-align:center;color:#94a3b8;padding:20px;">' + t('noProject') + '</div>';
  } else {
    html += '<div class="settings-items">';
    var allTasks = tasks;
    displayed.forEach(function(proj) {
      var taskCount = allTasks.filter(function(tk) { return tk.Project_Id === proj.id; }).length;
      var dotColor = proj.Color || '#6366f1';
      html += '<div class="settings-item">';
      html += '<span class="settings-item-dot" style="background:' + dotColor + ';"></span>';
      html += '<div class="settings-item-info">';
      html += '<strong>' + sanitize(proj.Name) + '</strong>';
      html += '<span class="settings-item-meta">' + taskCount + ' ' + (currentLang === 'fr' ? 'tâches' : 'tasks') + '</span>';
      html += '</div>';
      html += '<div class="settings-item-actions">';
      html += '<button class="btn-icon" onclick="openProjectModalForEdit(' + proj.id + ')" title="' + t('editProject') + '">✏️</button>';
      if (isOwner) html += '<button class="btn-icon" onclick="deleteProject(' + proj.id + ')" title="' + t('deleteProject') + '">🗑️</button>';
      html += '</div>';
      html += '</div>';
    });
    if (extraCount > 0) {
      html += '<div class="settings-more-hint">+ ' + extraCount + ' ' + (currentLang === 'fr' ? 'autres — tapez pour chercher' : 'more — type to search') + '</div>';
    }
    html += '</div>';
  }
  container.innerHTML = html;
  // Restore cursor position in search input
  var inp = document.getElementById('settings-proj-search');
  if (inp && searchOverride !== undefined) { var l = inp.value.length; inp.setSelectionRange(l, l); inp.focus(); }
}

function openProjectModalForEdit(projectId) {
  var proj = projects.find(function(p) { return p.id === projectId; });
  if (!proj) return;

  var statusOptions = ['active', 'archived', 'completed'];
  var statusLabels = { active: currentLang === 'fr' ? 'Actif' : 'Active', archived: currentLang === 'fr' ? 'Archivé' : 'Archived', completed: currentLang === 'fr' ? 'Terminé' : 'Completed' };

  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" style="max-width:420px;" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>✏️ ' + (currentLang === 'fr' ? 'Modifier le projet' : 'Edit project') + '</h3>';
  html += '<button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<div class="form-group"><label>' + (currentLang === 'fr' ? 'Nom' : 'Name') + '</label>';
  html += '<input type="text" id="inline-proj-name" class="form-input" value="' + sanitize(proj.Name || '') + '"></div>';
  html += '<div class="form-group"><label>' + (currentLang === 'fr' ? 'Description' : 'Description') + '</label>';
  html += '<textarea id="inline-proj-desc" class="form-input" rows="2">' + sanitize(proj.Description || '') + '</textarea></div>';
  html += '<div style="display:flex;gap:12px;">';
  html += '<div class="form-group" style="flex:1"><label>' + (currentLang === 'fr' ? 'Couleur' : 'Color') + '</label>';
  html += '<input type="color" id="inline-proj-color" value="' + (proj.Color || '#6366f1') + '" style="width:48px;height:36px;border:none;cursor:pointer;"></div>';
  html += '<div class="form-group" style="flex:2"><label>' + (currentLang === 'fr' ? 'Statut' : 'Status') + '</label>';
  html += '<select id="inline-proj-status" class="form-input">';
  statusOptions.forEach(function(s) {
    html += '<option value="' + s + '"' + (proj.Status === s ? ' selected' : '') + '>' + (statusLabels[s] || s) + '</option>';
  });
  html += '</select></div></div>';
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + (currentLang === 'fr' ? 'Annuler' : 'Cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="saveInlineProjectEdit(' + projectId + ')">' + (currentLang === 'fr' ? '💾 Enregistrer' : '💾 Save') + '</button>';
  html += '</div></div></div>';
  document.getElementById('modal-container').innerHTML = html;
  document.getElementById('inline-proj-name').focus();
}

async function saveInlineProjectEdit(projectId) {
  var name = (document.getElementById('inline-proj-name').value || '').trim();
  if (!name) { showToast(currentLang === 'fr' ? 'Le nom est requis' : 'Name is required', 'error'); return; }
  var record = {};
  setField(record, 'projects', 'name', name);
  setField(record, 'projects', 'description', document.getElementById('inline-proj-desc').value || '');
  setField(record, 'projects', 'color', document.getElementById('inline-proj-color').value || '#6366f1');
  setField(record, 'projects', 'status', document.getElementById('inline-proj-status').value || 'active');
  try {
    await grist.docApi.applyUserActions([['UpdateRecord', PROJECTS_TABLE, projectId, record]]);
    showToast((currentLang === 'fr' ? 'Projet modifié' : 'Project updated') + ' ✓', 'success');
    closeModalForce();
    await loadAllData();
    renderSettingsProjectsList();
    renderProjectSelector();
    refreshAllViews();
  } catch (e) {
    showToast('Error: ' + e.message, 'error');
  }
}

function renderSettingsCategoriesList() {
  var container = document.getElementById('categories-list');
  if (!container) return;
  
  var html = '';
  if (categories.length === 0) {
    html = '<div style="text-align:center;color:#94a3b8;padding:20px;">' + (currentLang === 'fr' ? 'Aucun produit' : 'No products') + '</div>';
  } else {
    html = '<div class="settings-chips">';
    categories.forEach(function(cat) {
      html += '<span class="settings-chip" style="background:' + (cat.Color || '#6366f1') + ';color:white;">' + sanitize(cat.Name) + '</span>';
    });
    html += '</div>';
  }
  container.innerHTML = html;
}

function renderSettingsTagsList() {
  var container = document.getElementById('tags-list');
  if (!container) return;
  
  var html = '';
  if (tags.length === 0) {
    html = '<div style="text-align:center;color:#94a3b8;padding:20px;">' + (currentLang === 'fr' ? 'Aucun tag' : 'No tags') + '</div>';
  } else {
    html = '<div class="settings-chips">';
    tags.forEach(function(tag) {
      html += '<span class="settings-chip" style="background:' + (tag.Color || '#6366f1') + ';color:white;">' + sanitize(tag.Name) + '</span>';
    });
    html += '</div>';
  }
  container.innerHTML = html;
}

function openTagsModal() {
  document.getElementById('tags-modal').style.display = 'flex';
  document.getElementById('edit-tag-id').value = '';
  document.getElementById('tag-name').value = '';
  document.getElementById('tag-color').value = '#6366f1';
  document.getElementById('tag-form-title').textContent = t('addTag');
  renderTagsModalList();
}

function closeTagsModal() {
  document.getElementById('tags-modal').style.display = 'none';
}

// =============================================================================
// COLUMN MAPPING CONFIGURATION
// =============================================================================

async function openColumnMappingModal() {
  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" style="max-width:800px;" onclick="event.stopPropagation()">';
  html += '<div class="modal-header">';
  html += '<h3>🔧 Configuration du mapping des colonnes</h3>';
  html += '<button class="modal-close" onclick="closeModalForce()">✕</button>';
  html += '</div>';
  html += '<div class="modal-body" style="max-height:600px;overflow-y:auto;">';
  
  html += '<div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;padding:12px;margin-bottom:20px;">';
  html += '<p style="margin:0;font-size:13px;color:#0c4a6e;">';
  html += '💡 <strong>Info :</strong> Cette configuration permet de mapper vos propres tables et colonnes Grist existantes. ';
  html += 'Utile si vous avez déjà des données et souhaitez les réutiliser avec ce widget.';
  html += '</p></div>';
  
  // Get available tables
  var availableTables = [];
  try {
    availableTables = await grist.docApi.listTables();
  } catch (e) {
    console.error('Error listing tables:', e);
  }
  
  // Tasks mapping section
  html += '<div class="form-section" style="margin-bottom:25px;">';
  html += '<h4 style="margin-bottom:15px;color:#1e293b;">📋 Table des Tâches</h4>';
  html += '<div class="form-group">';
  html += '<label>Nom de la table</label>';
  html += '<select id="mapping-tasks-table" onchange="detectTaskColumns()">';
  for (var i = 0; i < availableTables.length; i++) {
    var selected = availableTables[i] === TASKS_TABLE ? ' selected' : '';
    html += '<option value="' + sanitize(availableTables[i]) + '"' + selected + '>' + sanitize(availableTables[i]) + '</option>';
  }
  html += '</select>';
  html += '</div>';
  html += '<div id="tasks-columns-mapping"></div>';
  html += '</div>';
  
  // Users mapping section
  html += '<div class="form-section" style="margin-bottom:25px;">';
  html += '<h4 style="margin-bottom:15px;color:#1e293b;">👥 Table des Utilisateurs</h4>';
  html += '<div class="form-group">';
  html += '<label>Nom de la table</label>';
  html += '<select id="mapping-users-table" onchange="detectUserColumns()">';
  for (var i = 0; i < availableTables.length; i++) {
    var selected = availableTables[i] === USERS_TABLE ? ' selected' : '';
    html += '<option value="' + sanitize(availableTables[i]) + '"' + selected + '>' + sanitize(availableTables[i]) + '</option>';
  }
  html += '</select>';
  html += '</div>';
  html += '<div id="users-columns-mapping"></div>';
  html += '</div>';
  
  // Projects mapping section
  html += '<div class="form-section" style="margin-bottom:25px;">';
  html += '<h4 style="margin-bottom:15px;color:#1e293b;">📂 Table des Projets</h4>';
  html += '<div class="form-group">';
  html += '<label>Nom de la table</label>';
  html += '<select id="mapping-projects-table" onchange="detectProjectColumns()">';
  for (var i = 0; i < availableTables.length; i++) {
    var selected = availableTables[i] === PROJECTS_TABLE ? ' selected' : '';
    html += '<option value="' + sanitize(availableTables[i]) + '"' + selected + '>' + sanitize(availableTables[i]) + '</option>';
  }
  html += '</select>';
  html += '</div>';
  html += '<div id="projects-columns-mapping"></div>';
  html += '</div>';
  
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">Annuler</button>';
  html += '<button class="btn btn-primary" onclick="saveColumnMapping()">💾 Enregistrer la configuration</button>';
  html += '</div>';
  html += '</div></div>';
  
  document.getElementById('modal-container').innerHTML = html;
  
  // Load current column mappings
  await detectTaskColumns();
  await detectUserColumns();
  await detectProjectColumns();
}

async function detectTaskColumns() {
  var tableName = document.getElementById('mapping-tasks-table').value;
  var html = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;">';
  
  try {
    var tableData = await grist.docApi.fetchTable(tableName);
    var columns = Object.keys(tableData).filter(function(k) { return k !== 'id'; });
    
    var fields = [
      { key: 'title', label: 'Titre', required: true },
      { key: 'description', label: 'Description', required: false },
      { key: 'status', label: 'Statut', required: true },
      { key: 'priority', label: 'Priorité', required: true },
      { key: 'assignee', label: 'Assigné à', required: false },
      { key: 'group', label: 'Groupe', required: false },
      { key: 'startDate', label: 'Date début', required: false },
      { key: 'dueDate', label: 'Échéance', required: false },
      { key: 'category', label: 'Produit', required: false },
      { key: 'tag', label: 'Tag', required: false },
      { key: 'recurrence', label: 'Récurrence', required: false },
      { key: 'estimatedHours', label: 'Heures estimées', required: false },
      { key: 'createdAt', label: 'Créé le', required: false },
      { key: 'projectId', label: 'Projet', required: false }
    ];
    
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      var currentCol = getColumnName('tasks', field.key);
      html += '<div class="form-group">';
      html += '<label>' + field.label + (field.required ? ' <span style="color:#ef4444;">*</span>' : '') + '</label>';
      html += '<select id="map-task-' + field.key + '">';
      html += '<option value="">-- Non mappé --</option>';
      for (var j = 0; j < columns.length; j++) {
        var selected = columns[j] === currentCol ? ' selected' : '';
        html += '<option value="' + sanitize(columns[j]) + '"' + selected + '>' + sanitize(columns[j]) + '</option>';
      }
      html += '</select>';
      html += '</div>';
    }
  } catch (e) {
    html += '<p style="color:#ef4444;">Erreur lors du chargement des colonnes</p>';
  }
  
  html += '</div>';
  document.getElementById('tasks-columns-mapping').innerHTML = html;
}

async function detectUserColumns() {
  var tableName = document.getElementById('mapping-users-table').value;
  var html = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;">';
  
  try {
    var tableData = await grist.docApi.fetchTable(tableName);
    var columns = Object.keys(tableData).filter(function(k) { return k !== 'id'; });
    
    var fields = [
      { key: 'name', label: 'Nom', required: true },
      { key: 'email', label: 'Email', required: true },
      { key: 'role', label: 'Rôle', required: false },
      { key: 'group', label: 'Groupe', required: false }
    ];
    
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      var currentCol = getColumnName('users', field.key);
      html += '<div class="form-group">';
      html += '<label>' + field.label + (field.required ? ' <span style="color:#ef4444;">*</span>' : '') + '</label>';
      html += '<select id="map-user-' + field.key + '">';
      html += '<option value="">-- Non mappé --</option>';
      for (var j = 0; j < columns.length; j++) {
        var selected = columns[j] === currentCol ? ' selected' : '';
        html += '<option value="' + sanitize(columns[j]) + '"' + selected + '>' + sanitize(columns[j]) + '</option>';
      }
      html += '</select>';
      html += '</div>';
    }
  } catch (e) {
    html += '<p style="color:#ef4444;">Erreur lors du chargement des colonnes</p>';
  }
  
  html += '</div>';
  document.getElementById('users-columns-mapping').innerHTML = html;
}

async function detectProjectColumns() {
  var tableName = document.getElementById('mapping-projects-table').value;
  var html = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;">';
  
  try {
    var tableData = await grist.docApi.fetchTable(tableName);
    var columns = Object.keys(tableData).filter(function(k) { return k !== 'id'; });
    
    var fields = [
      { key: 'name', label: 'Nom', required: true },
      { key: 'description', label: 'Description', required: false },
      { key: 'color', label: 'Couleur', required: false },
      { key: 'status', label: 'Statut', required: false }
    ];
    
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      var currentCol = getColumnName('projects', field.key);
      html += '<div class="form-group">';
      html += '<label>' + field.label + (field.required ? ' <span style="color:#ef4444;">*</span>' : '') + '</label>';
      html += '<select id="map-project-' + field.key + '">';
      html += '<option value="">-- Non mappé --</option>';
      for (var j = 0; j < columns.length; j++) {
        var selected = columns[j] === currentCol ? ' selected' : '';
        html += '<option value="' + sanitize(columns[j]) + '"' + selected + '>' + sanitize(columns[j]) + '</option>';
      }
      html += '</select>';
      html += '</div>';
    }
  } catch (e) {
    html += '<p style="color:#ef4444;">Erreur lors du chargement des colonnes</p>';
  }
  
  html += '</div>';
  document.getElementById('projects-columns-mapping').innerHTML = html;
}

async function saveColumnMapping() {
  try {
    // Collect all mappings
    var updates = [];
    
    // Tasks mappings
    var tasksTable = document.getElementById('mapping-tasks-table').value;
    var taskFields = ['title', 'description', 'status', 'priority', 'assignee', 'group', 'startDate', 'dueDate', 'category', 'tag', 'recurrence', 'estimatedHours', 'createdAt', 'projectId'];
    for (var i = 0; i < taskFields.length; i++) {
      var field = taskFields[i];
      var el = document.getElementById('map-task-' + field);
      if (el && el.value) {
        var configKey = 'task_' + field.replace(/([A-Z])/g, '_$1').toLowerCase();
        updates.push({ key: configKey, table: tasksTable, column: el.value });
      }
    }
    
    // Users mappings
    var usersTable = document.getElementById('mapping-users-table').value;
    var userFields = ['name', 'email', 'role', 'group'];
    for (var i = 0; i < userFields.length; i++) {
      var field = userFields[i];
      var el = document.getElementById('map-user-' + field);
      if (el && el.value) {
        var configKey = 'user_' + field;
        updates.push({ key: configKey, table: usersTable, column: el.value });
      }
    }
    
    // Projects mappings
    var projectsTable = document.getElementById('mapping-projects-table').value;
    var projectFields = ['name', 'description', 'color', 'status'];
    for (var i = 0; i < projectFields.length; i++) {
      var field = projectFields[i];
      var el = document.getElementById('map-project-' + field);
      if (el && el.value) {
        var configKey = 'project_' + field;
        updates.push({ key: configKey, table: projectsTable, column: el.value });
      }
    }
    
    // Update PM_Config table (update existing, add missing)
    var configData = await grist.docApi.fetchTable(CONFIG_TABLE);
    var actions = [];
    for (var i = 0; i < updates.length; i++) {
      var update = updates[i];
      var recordId = null;

      for (var j = 0; j < configData.Config_Key.length; j++) {
        if (configData.Config_Key[j] === update.key) {
          recordId = configData.id[j];
          break;
        }
      }

      if (recordId) {
        actions.push(['UpdateRecord', CONFIG_TABLE, recordId, {
          Table_Name: update.table,
          Column_Name: update.column
        }]);
      } else {
        actions.push(['AddRecord', CONFIG_TABLE, null, {
          Config_Key: update.key,
          Table_Name: update.table,
          Column_Name: update.column
        }]);
      }
    }
    if (actions.length > 0) await grist.docApi.applyUserActions(actions);
    
    showToast('✓ Configuration sauvegardée', 'success');
    closeModalForce();
    
    // Reload data with new mapping
    await loadAllData();
    refreshAllViews();
  } catch (e) {
    console.error('Error saving column mapping:', e);
    showToast('Erreur lors de la sauvegarde: ' + e.message, 'error');
  }
}

function renderTagsModalList() {
  var html = '';
  if (tags.length === 0) {
    html = '<div style="text-align:center;color:#94a3b8;padding:20px;">' + (currentLang === 'fr' ? 'Aucun tag' : 'No tags') + '</div>';
  } else {
    html = '<div class="project-items">';
    tags.forEach(function(tag) {
      html += '<div class="project-item" style="border-left: 4px solid ' + (tag.Color || '#6366f1') + ';">';
      html += '<div class="project-item-info">';
      html += '<strong>' + sanitize(tag.Name) + '</strong>';
      html += '</div>';
      html += '<div class="project-item-actions">';
      html += '<button class="btn-icon" onclick="editTag(' + tag.id + ')" title="' + t('edit') + '">✏️</button>';
      html += '<button class="btn-icon" onclick="deleteTag(' + tag.id + ')" title="' + t('delete') + '">🗑️</button>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
  }
  document.getElementById('tags-modal-list').innerHTML = html;
}

function editTag(tagId) {
  var tag = tags.find(function(t) { return t.id === tagId; });
  if (!tag) return;
  
  document.getElementById('edit-tag-id').value = tag.id;
  document.getElementById('tag-name').value = tag.Name || '';
  document.getElementById('tag-color').value = tag.Color || '#6366f1';
  document.getElementById('tag-form-title').textContent = currentLang === 'fr' ? 'Modifier le tag' : 'Edit tag';
}

async function saveTag() {
  var tagId = document.getElementById('edit-tag-id').value;
  var name = document.getElementById('tag-name').value.trim();
  var color = document.getElementById('tag-color').value;

  if (!name) {
    showToast((currentLang === 'fr' ? 'Nom du tag requis' : 'Tag name required'), 'error');
    return;
  }

  try {
    var record = {};
    setField(record, 'tags', 'name', name);
    setField(record, 'tags', 'color', color);
    
    if (tagId) {
      await grist.docApi.applyUserActions([
        ['UpdateRecord', TAGS_TABLE, parseInt(tagId), record]
      ]);
      showToast((currentLang === 'fr' ? 'Tag modifié' : 'Tag updated') + ' ✓', 'success');
    } else {
      await grist.docApi.applyUserActions([
        ['AddRecord', TAGS_TABLE, null, record]
      ]);
      showToast((currentLang === 'fr' ? 'Tag ajouté' : 'Tag added') + ' ✓', 'success');
    }
    closeTagsModal();
    await loadAllData();
    refreshAllViews();
    renderSettingsTagsList();
    document.getElementById('edit-tag-id').value = '';
    document.getElementById('tag-name').value = '';
    document.getElementById('tag-color').value = '#6366f1';
    document.getElementById('tag-form-title').textContent = t('addTag');
  } catch (e) {
    console.error('Error saving tag:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function deleteTag(tagId) {
  var confirmed = await showConfirmModal(currentLang === 'fr' ? 'Supprimer ce tag ?' : 'Delete this tag?', currentLang === 'fr' ? 'Supprimer le tag' : 'Delete tag');
  if (!confirmed) return;
  
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', TAGS_TABLE, tagId]
    ]);
    showToast((currentLang === 'fr' ? 'Tag supprimé' : 'Tag deleted') + ' ✓', 'success');
    await loadAllData();
    refreshAllViews();
    renderTagsModalList();
    renderSettingsTagsList();
  } catch (e) {
    console.error('Error deleting tag:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

// =============================================================================
// NOTIFICATIONS / ALERTS + AUTOMATION ENGINE
// =============================================================================

function getOverdueTasks() {
  var now = Math.floor(Date.now() / 1000);
  return getFilteredTasks().filter(function(t) {
    return t.Due_Date && t.Due_Date < now && t.Status !== 'done' && t.Status !== 'archived';
  });
}

function getUpcomingTasks() {
  var now = Math.floor(Date.now() / 1000);
  var threeDays = now + (3 * 24 * 60 * 60);
  return getFilteredTasks().filter(function(t) {
    return t.Due_Date && t.Due_Date >= now && t.Due_Date <= threeDays && t.Status !== 'done' && t.Status !== 'archived';
  });
}

function getMyNotifications() {
  var email = (currentUserEmail || '').toLowerCase().trim();
  if (!email) return [];
  return pmNotifications
    .filter(function(n) { return (n.User_Email || '').toLowerCase().trim() === email; })
    .sort(function(a, b) { return (b.Created_At || 0) - (a.Created_At || 0); });
}

function getUnreadCount() {
  return getMyNotifications().filter(function(n) { return !n.Is_Read; }).length;
}

function updateNotificationBadge() {
  var unread = getUnreadCount();
  var hasOverdueRule = automationRules.some(function(r) { return r.enabled && r.trigger === 'overdue'; });
  var hasApproachingRule = automationRules.some(function(r) { return r.enabled && r.trigger === 'approaching_deadline'; });
  var computed = 0;
  if (!hasOverdueRule) computed += getOverdueTasks().length;
  if (!hasApproachingRule) computed += getUpcomingTasks().length;
  var total = unread + computed;
  var badge = document.getElementById('notif-badge');
  if (badge) {
    badge.textContent = total;
    badge.classList.toggle('show', total > 0);
  }
}

function showNotifications() {
  var myNotifs = getMyNotifications();
  var unread = myNotifs.filter(function(n) { return !n.Is_Read; });
  var readRecent = myNotifs.filter(function(n) { return n.Is_Read; }).slice(0, 10);
  var hasOverdueRule = automationRules.some(function(r) { return r.enabled && r.trigger === 'overdue'; });
  var hasApproachingRule = automationRules.some(function(r) { return r.enabled && r.trigger === 'approaching_deadline'; });
  var overdue = !hasOverdueRule ? getOverdueTasks() : [];
  var upcoming = !hasApproachingRule ? getUpcomingTasks() : [];

  var html = '<div class="notif-dropdown" id="notif-dropdown">';
  html += '<div class="notif-header" style="display:flex;justify-content:space-between;align-items:center;">';
  html += '<span>🔔 ' + t('notifications') + '</span>';
  if (unread.length > 0) {
    html += '<button onclick="event.stopPropagation();markAllNotificationsRead();" style="background:#3b82f6;color:white;border:none;border-radius:4px;font-size:10px;padding:3px 8px;cursor:pointer;">' + t('markAllRead') + '</button>';
  }
  html += '</div>';

  if (unread.length > 0) {
    html += '<div style="padding:6px 16px;font-size:10px;color:#3b82f6;font-weight:700;">🔵 ' + unread.length + ' ' + t('notifUnread') + '</div>';
    for (var ui = 0; ui < unread.length; ui++) {
      var n = unread[ui];
      html += '<div class="notif-item" style="display:flex;align-items:center;gap:6px;font-weight:600;" onclick="openEditTaskModal(' + n.Task_Id + '); closeNotifications();">';
      html += '<div style="flex:1;">';
      html += '<div class="notif-item-title">' + sanitize(n.Message) + '</div>';
      html += '<div class="notif-item-date">' + formatDate(n.Created_At) + '</div>';
      html += '</div>';
      html += '<button onclick="event.stopPropagation();markNotificationRead(' + n.id + ');" style="background:none;border:none;color:#3b82f6;cursor:pointer;font-size:14px;" title="' + t('markAsRead') + '">✓</button>';
      html += '</div>';
    }
  }

  if (overdue.length > 0) {
    html += '<div style="padding:6px 16px;font-size:10px;color:#ef4444;font-weight:700;">⚠️ ' + overdue.length + ' ' + t('overdueTasksAlert') + '</div>';
    for (var oi = 0; oi < overdue.length; oi++) {
      html += '<div class="notif-item overdue" onclick="openEditTaskModal(' + overdue[oi].id + '); closeNotifications();">';
      html += '<div class="notif-item-title">' + sanitize(overdue[oi].Title) + '</div>';
      html += '<div class="notif-item-date">📅 ' + formatDate(overdue[oi].Due_Date) + '</div>';
      html += '</div>';
    }
  }
  if (upcoming.length > 0) {
    html += '<div style="padding:6px 16px;font-size:10px;color:#f59e0b;font-weight:700;">📅 ' + upcoming.length + ' ' + t('upcomingTasksAlert') + '</div>';
    for (var upi = 0; upi < upcoming.length; upi++) {
      html += '<div class="notif-item upcoming" onclick="openEditTaskModal(' + upcoming[upi].id + '); closeNotifications();">';
      html += '<div class="notif-item-title">' + sanitize(upcoming[upi].Title) + '</div>';
      html += '<div class="notif-item-date">📅 ' + formatDate(upcoming[upi].Due_Date) + '</div>';
      html += '</div>';
    }
  }

  if (readRecent.length > 0) {
    html += '<div style="padding:6px 16px;font-size:10px;color:#94a3b8;font-weight:700;border-top:1px solid #e2e8f0;">📋 ' + (currentLang === 'fr' ? 'Historique' : 'History') + '</div>';
    for (var ri = 0; ri < readRecent.length; ri++) {
      var rn = readRecent[ri];
      html += '<div class="notif-item" style="opacity:0.5;" onclick="openEditTaskModal(' + rn.Task_Id + '); closeNotifications();">';
      html += '<div class="notif-item-title">' + sanitize(rn.Message) + '</div>';
      html += '<div class="notif-item-date">' + formatDate(rn.Created_At) + '</div>';
      html += '</div>';
    }
  }

  if (unread.length === 0 && overdue.length === 0 && upcoming.length === 0 && readRecent.length === 0) {
    html += '<div class="notif-empty">' + t('noAlerts') + '</div>';
  }
  html += '</div>';

  closeNotifications();
  var btn = document.getElementById('notifications-btn');
  btn.style.position = 'relative';
  btn.insertAdjacentHTML('beforeend', html);
  setTimeout(function() { document.addEventListener('click', closeNotificationsOnOutsideClick); }, 10);
}

function closeNotifications() {
  var dropdown = document.getElementById('notif-dropdown');
  if (dropdown) dropdown.remove();
  document.removeEventListener('click', closeNotificationsOnOutsideClick);
}

function closeNotificationsOnOutsideClick(e) {
  if (!e.target.closest('#notifications-btn')) {
    closeNotifications();
  }
}

async function markNotificationRead(notifId) {
  try {
    await grist.docApi.applyUserActions([['UpdateRecord', NOTIFICATIONS_TABLE, notifId, { Is_Read: true }]]);
    var n = pmNotifications.find(function(x) { return x.id === notifId; });
    if (n) n.Is_Read = true;
    updateNotificationBadge();
    showNotifications();
  } catch (e) {
    console.error('[GristPM] Error marking notification read:', e);
  }
}

async function markAllNotificationsRead() {
  var myUnread = getMyNotifications().filter(function(n) { return !n.Is_Read; });
  if (myUnread.length === 0) return;
  try {
    var ids = myUnread.map(function(n) { return n.id; });
    var flags = ids.map(function() { return true; });
    await grist.docApi.applyUserActions([['BulkUpdateRecord', NOTIFICATIONS_TABLE, ids, { Is_Read: flags }]]);
    myUnread.forEach(function(n) { n.Is_Read = true; });
    updateNotificationBadge();
    showNotifications();
  } catch (e) {
    console.error('[GristPM] Error marking all read:', e);
  }
}

// --- Automation Engine ---

async function createNotification(taskId, userEmail, type, message, ruleId) {
  try {
    var record = {
      Task_Id: taskId,
      User_Email: userEmail,
      Type: type,
      Message: message,
      Is_Read: false,
      Created_At: Math.floor(Date.now() / 1000),
      Rule_Id: ruleId || ''
    };
    await grist.docApi.applyUserActions([['AddRecord', NOTIFICATIONS_TABLE, null, record]]);
    record.id = pmNotifications.length > 0 ? Math.max.apply(null, pmNotifications.map(function(n) { return n.id; })) + 1 : 1;
    pmNotifications.push(record);
  } catch (e) {
    console.error('[GristPM] Error creating notification:', e);
  }
}

// Notification intégrée : à la création/modification d'une tâche, prévient chaque
// utilisateur concerné (R/A/C/I). Une ligne PM_Notifications par destinataire → un webhook
// Grist posé sur PM_Notifications peut la transformer en e-mail (voir onglet Paramètres).
async function notifyConcernedUsers(taskId, emails, eventType, title) {
  if (!notifyConcernedEnabled) return;
  var me = (currentUserEmail || '').toLowerCase().trim();
  var seen = {}, recipients = [];
  (emails || []).forEach(function(e) {
    // e peut être un NOM (assignation par nom) : on résout vers l'email PM_Users,
    // sinon User_Email recevrait un nom et les automatisations (n8n) échoueraient.
    var v = resolveUserEmail(e);
    if (!v) {
      if (String(e || '').trim()) console.warn('[GristPM] notification ignorée : pas d\'email pour "' + e + '" dans PM_Users');
      return;
    }
    var k = v.toLowerCase();
    if (k !== me && !seen[k]) { seen[k] = 1; recipients.push(v); }
  });
  if (!recipients.length) return;
  var msg = (eventType === 'task_created')
    ? (currentLang === 'fr' ? 'Nouvelle tâche vous concernant : ' : 'New task involving you: ') + title
    : (currentLang === 'fr' ? 'Tâche modifiée : ' : 'Task updated: ') + title;
  var now = Math.floor(Date.now() / 1000);
  var actions = recipients.map(function(email) {
    return ['AddRecord', NOTIFICATIONS_TABLE, null, { Task_Id: taskId, User_Email: email, Type: eventType, Message: msg, Is_Read: false, Created_At: now, Rule_Id: 'builtin' }];
  });
  try { await grist.docApi.applyUserActions(actions); } catch (e) { console.error('[GristPM] notifyConcernedUsers', e); }
}

function resolveRecipients(action, actionTarget, task) {
  if (action === 'notify_assignee') {
    // Assignee peut contenir des noms : résoudre chacun vers l'email PM_Users
    return (task.Assignee || '').split(',')
      .map(function(s) { return resolveUserEmail(s); })
      .filter(Boolean);
  }
  if (action === 'notify_project_lead') {
    return users.filter(function(u) { return u.Role === 'admin'; }).map(function(u) { return u.Email; }).filter(Boolean);
  }
  if (action === 'notify_specific' && actionTarget) {
    return [actionTarget];
  }
  if (action === 'notify_all') {
    return users.map(function(u) { return u.Email; }).filter(Boolean);
  }
  return [];
}

function renderAutoMessage(template, task) {
  var statusLabel = '';
  var statuses = getKanbanStatuses();
  for (var si = 0; si < statuses.length; si++) {
    if (statuses[si].key === task.Status) {
      statusLabel = currentLang === 'fr' ? statuses[si].label_fr : statuses[si].label_en;
      break;
    }
  }
  return (template || '')
    .replace(/\{title\}/g, task.Title || '')
    .replace(/\{status\}/g, statusLabel || task.Status || '')
    .replace(/\{priority\}/g, task.Priority || '')
    .replace(/\{assignee\}/g, task.Assignee || '');
}

async function evaluateAutomationRules(task, changes) {
  if (!automationRules || automationRules.length === 0) return;
  for (var i = 0; i < automationRules.length; i++) {
    var rule = automationRules[i];
    if (!rule.enabled) continue;
    var triggered = false;

    if (rule.trigger === 'status_change' && changes.status) {
      var mf = !rule.condition || !rule.condition.from || rule.condition.from === changes.status.from;
      var mt = !rule.condition || !rule.condition.to || rule.condition.to === changes.status.to;
      triggered = mf && mt;
    } else if (rule.trigger === 'priority_change' && changes.priority) {
      var mf2 = !rule.condition || !rule.condition.from || rule.condition.from === changes.priority.from;
      var mt2 = !rule.condition || !rule.condition.to || rule.condition.to === changes.priority.to;
      triggered = mf2 && mt2;
    } else if (rule.trigger === 'assignment_change' && changes.assignee) {
      triggered = true;
    }

    if (triggered) {
      var msgTpl = currentLang === 'fr' ? (rule.message_fr || rule.message_en || '') : (rule.message_en || rule.message_fr || '');
      var message = renderAutoMessage(msgTpl, task);
      var recipients = resolveRecipients(rule.action, rule.action_target, task);
      for (var r = 0; r < recipients.length; r++) {
        await createNotification(task.id, recipients[r], rule.trigger, message, rule.id);
      }
    }
  }
  updateNotificationBadge();
}

async function checkTimeBasedAutomations() {
  if (!automationRules || automationRules.length === 0) return;
  var now = Math.floor(Date.now() / 1000);
  var todayStart = now - (now % 86400);
  var threeDays = now + (3 * 24 * 60 * 60);

  for (var i = 0; i < automationRules.length; i++) {
    var rule = automationRules[i];
    if (!rule.enabled) continue;
    if (rule.trigger !== 'overdue' && rule.trigger !== 'approaching_deadline') continue;

    var matching = tasks.filter(function(t) {
      if (t.Status === 'done' || t.Status === 'archived' || !t.Due_Date) return false;
      if (rule.trigger === 'overdue') return t.Due_Date < now;
      return t.Due_Date >= now && t.Due_Date <= threeDays;
    });

    for (var j = 0; j < matching.length; j++) {
      var task = matching[j];
      var recipients = resolveRecipients(rule.action, rule.action_target, task);
      for (var r = 0; r < recipients.length; r++) {
        var already = pmNotifications.some(function(n) {
          return n.Rule_Id === rule.id && n.Task_Id === task.id && n.User_Email === recipients[r] && n.Created_At >= todayStart;
        });
        if (already) continue;
        var msgTpl = currentLang === 'fr' ? (rule.message_fr || rule.message_en || '') : (rule.message_en || rule.message_fr || '');
        var message = renderAutoMessage(msgTpl, task);
        await createNotification(task.id, recipients[r], rule.trigger, message, rule.id);
      }
    }
  }
  updateNotificationBadge();
}

async function cleanupOldNotifications() {
  var now = Math.floor(Date.now() / 1000);
  var thirtyDays = 30 * 86400;
  var ninetyDays = 90 * 86400;
  var toDelete = pmNotifications.filter(function(n) {
    var age = now - (n.Created_At || 0);
    return (n.Is_Read && age > thirtyDays) || age > ninetyDays;
  });
  if (toDelete.length === 0) return;
  try {
    var ids = toDelete.map(function(n) { return n.id; });
    var actions = ids.map(function(id) { return ['RemoveRecord', NOTIFICATIONS_TABLE, id]; });
    await grist.docApi.applyUserActions(actions);
    pmNotifications = pmNotifications.filter(function(n) { return ids.indexOf(n.id) === -1; });
  } catch (e) {
    console.log('[GristPM] Notification cleanup skipped:', e.message);
  }
}

// =============================================================================
// GLOBAL SEARCH
// =============================================================================

function globalSearch(query) {
  var searchInput = document.getElementById('global-search');
  var resultsContainer = document.getElementById('search-results');
  
  if (!resultsContainer) {
    searchInput.parentElement.style.position = 'relative';
    searchInput.insertAdjacentHTML('afterend', '<div class="search-results" id="search-results"></div>');
    resultsContainer = document.getElementById('search-results');
  }
  
  if (!query || query.length < 2) {
    resultsContainer.classList.remove('show');
    return;
  }
  
  var q = query.toLowerCase();
  var results = getFilteredTasks().filter(function(t) {
    return (t.Title && t.Title.toLowerCase().indexOf(q) !== -1) ||
           (t.Description && t.Description.toLowerCase().indexOf(q) !== -1) ||
           (t.Category && t.Category.toLowerCase().indexOf(q) !== -1);
  }).slice(0, 10);
  
  if (results.length === 0) {
    resultsContainer.innerHTML = '<div class="notif-empty">Aucun résultat</div>';
  } else {
    var html = '';
    for (var i = 0; i < results.length; i++) {
      var task = results[i];
      html += '<div class="search-result-item" onclick="openEditTaskModal(' + task.id + '); closeSearch();">';
      html += '<div class="search-result-title">' + sanitize(task.Title) + '</div>';
      html += '<div class="search-result-meta">' + (task.Category || '') + ' • ' + t('status' + task.Status.charAt(0).toUpperCase() + task.Status.slice(1)) + '</div>';
      html += '</div>';
    }
    resultsContainer.innerHTML = html;
  }
  resultsContainer.classList.add('show');
}

function closeSearch() {
  var resultsContainer = document.getElementById('search-results');
  if (resultsContainer) resultsContainer.classList.remove('show');
  document.getElementById('global-search').value = '';
}

// =============================================================================
// DARK MODE
// =============================================================================

var isDarkMode = false;

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('pm-dark-mode', isDarkMode ? '1' : '0');
}

function loadDarkModePreference() {
  var saved = localStorage.getItem('pm-dark-mode');
  if (saved === '1') {
    isDarkMode = true;
    document.body.classList.add('dark-mode');
  }
}

// =============================================================================
// EXPORT CSV
// =============================================================================

function exportTasks(format) {
  if (format === 'csv') {
    var csv = 'Titre,Description,Statut,Priorité,Produit,Assigné,Date début,Échéance\n';
    for (var i = 0; i < tasks.length; i++) {
      var t = tasks[i];
      csv += '"' + (t.Title || '').replace(/"/g, '""') + '",';
      csv += '"' + (t.Description || '').replace(/"/g, '""') + '",';
      csv += '"' + (t.Status || '') + '",';
      csv += '"' + (t.Priority || '') + '",';
      csv += '"' + (t.Category || '') + '",';
      csv += '"' + (t.Assignee || '') + '",';
      csv += '"' + (t.Start_Date ? formatDate(t.Start_Date) : '') + '",';
      csv += '"' + (t.Due_Date ? formatDate(t.Due_Date) : '') + '"\n';
    }
    
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'tasks_export_' + new Date().toISOString().split('T')[0] + '.csv';
    link.click();
    showToast(t('exportCsv') + ' ✓', 'success');
  }
}

// =============================================================================
// INIT
// =============================================================================

if (!isInsideGrist()) {
  document.getElementById('not-in-grist').classList.remove('hidden');
  document.getElementById('main-content').classList.add('hidden');
} else {
  (async function() {
    await grist.ready({ requiredAccess: 'full' });

    // --- Role detection (Owner / Editor / Viewer) ---
    var USER_INFO_TABLE = 'PM_UserInfo';
    var helperWriteSucceeded = false;

    // Step 1: Ensure helper table with trigger formula user.Email
    try {
      var tables = await grist.docApi.listTables();
      if (tables.indexOf(USER_INFO_TABLE) === -1) {
        await grist.docApi.applyUserActions([
          ['AddTable', USER_INFO_TABLE, [
            { id: 'UserEmail', fields: { type: 'Text', label: 'UserEmail' } }
          ]]
        ]);
        await grist.docApi.applyUserActions([
          ['ModifyColumn', USER_INFO_TABLE, 'UserEmail', {
            isFormula: false,
            formula: 'user.Email',
            recalcWhen: 2,
            recalcDeps: null
          }]
        ]);
      }
    } catch (e) {
      console.warn('Could not create helper table:', e.message);
    }

    // Step 2: Read current user email via REST API (respects "View As")
    try {
      try {
        var existingData = await grist.docApi.fetchTable(USER_INFO_TABLE);
        var rowIds = (existingData && existingData.id) ? existingData.id : [];
        var actions = [];
        for (var r = 0; r < rowIds.length; r++) {
          actions.push(['RemoveRecord', USER_INFO_TABLE, rowIds[r]]);
        }
        actions.push(['AddRecord', USER_INFO_TABLE, null, {}]);
        await grist.docApi.applyUserActions(actions);
        helperWriteSucceeded = true;
      } catch (writeErr) {
        console.log('Could not refresh row (read-only?):', writeErr.message);
      }

      var tokenInfo = await grist.docApi.getAccessToken({ readOnly: true });
      var tableResp = await fetch(tokenInfo.baseUrl + '/tables/' + USER_INFO_TABLE + '/records?auth=' + tokenInfo.token);
      if (tableResp.ok) {
        var tableData = await tableResp.json();
        if (tableData.records && tableData.records.length > 0) {
          currentUserEmail = tableData.records[0].fields.UserEmail || '';
        }
      } else {
        var userInfoData = await grist.docApi.fetchTable(USER_INFO_TABLE);
        if (userInfoData && userInfoData.UserEmail && userInfoData.UserEmail.length > 0) {
          currentUserEmail = userInfoData.UserEmail[0] || '';
        }
      }
    } catch (e) {
      console.warn('Could not read helper table:', e.message);
    }

    // Step 3: Determine role — structure modify test
    var roleDetected = false;
    try {
      await grist.docApi.applyUserActions([
        ['ModifyColumn', USER_INFO_TABLE, 'UserEmail', {
          isFormula: false,
          formula: 'user.Email',
          recalcWhen: 2,
          recalcDeps: null
        }]
      ]);
      isOwner = true; isEditor = false; roleDetected = true;
    } catch (structErr) {
      if (helperWriteSucceeded) {
        isOwner = false; isEditor = true; roleDetected = true;
      } else {
        isOwner = false; isEditor = false; roleDetected = true;
      }
    }

    if (!roleDetected) {
      if (helperWriteSucceeded) {
        isOwner = false; isEditor = true;
      } else {
        isOwner = false; isEditor = false;
      }
    }
    console.log('Role detection — isOwner:', isOwner, 'isEditor:', isEditor, 'email:', currentUserEmail);

    loadDarkModePreference();
    if (isOwner) await registerWidget();
    await loadWidgetPermissions();
    applyOwnerRestrictions();
    await ensureTables();
    await loadSettings();
    await loadAllData();
    updateNotificationBadge();
    await checkTimeBasedAutomations();
    await cleanupOldNotifications();
    updateNotificationBadge();
    await resolveDocKey();            // B1 : filtres cloisonnes par document
    restoreFilters(); // conserver les filtres en changeant de page / au rechargement
    renderProjectSelector();
    refreshAllViews();
    restoreActiveTab();
    // Synchronise les choix de la colonne Status des sous-tâches avec les statuts personnalisés
    if (isOwner) syncSubtaskStatusChoices();

    // A6 : synchro live — recharge si la table liée change (édition directe dans Grist,
    // autre utilisateur). Debounce + on ne perturbe pas une saisie (modale ouverte).
    if (typeof grist.onRecords === 'function') {
      var _liveReloadTimer = null;
      grist.onRecords(function() {
        if (_liveReloadTimer) clearTimeout(_liveReloadTimer);
        _liveReloadTimer = setTimeout(function() {
          var modal = document.getElementById('modal-container');
          if (modal && modal.innerHTML.trim() !== '') return;
          loadAllData();
        }, 500);
      });
    }
  })();
}
