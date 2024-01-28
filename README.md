TP1 - Compte rendu - Ajout de blocs de données au format Json
Alexia Bence 304

Etape 1 : 
Rajout de console.log, un dans le GET ainsi qu’un dans le POST permettant de bien vérifier le fonctionnement de notre serveur HTTP, en l'occurrence cela fonctionne. Je retrouve bien mes messages dans le terminal après exécution de chacuns.

Etape 2 : 
Développement de la fonction findBlocks() permettant de récupérer la blockchain, de rechercher un bloc spécifique en fonction de son ID et nous renvoie le bloc si il existe, si non renvoie null. Cela retourne les valeurs lues au format Json avec une requête GET. 

Etape 3 : 
Développement de la fonction createBlock() permettant d’ajouter des blocs dans le fichier blockchain.json. Je génère un id avec la fonction uuidv4(), nom et don sont récupérés via la requête POST,  je développe la fonction getDate().

Etape 4 : 
Développement de la fonction findLastBlock() permettant de récupérer le dernier bloc et modification de la fonction createBlock() permettant de stocker le bloc précédent de manière cryptée.

Pour aller plus loin : 
Modification de la fonction findBlock() pour rechercher un bloc en particulier dans la liste de tous les blocs à partir de leur ID mais elle ne vérifie pas la fiabilité de ce bloc.

Difficultés : 
Familiarisation avec PhpStorm que je ne connaissais pas du tout, première fois que je code avec cet outils. Toutefois, je pense qu’il peut être plus simple d’utilisation avec une bonne maîtrise de celui-ci. Il est relativement instinctif.
Egalement, j’étais malade au début de la semaine. J’ai donc loupé le premier cours et me suis sentie un peu perdue lors du TP. Surtout pour comprendre ce qu’était une promesse. A présent, je pense avoir un peu mieux compris.

Ce qui a marché plus facilement : 
Durant notre SAE, nous avons décidé de coder avec node.js ce qui m’a permis d’être un peu plus à l’aise en réalisant ce projet. Toutefois, je ne connaissais pas node crypto donc cela  m’a permis d’en apprendre un peu plus.
