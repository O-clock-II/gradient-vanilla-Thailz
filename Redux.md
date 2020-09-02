# Redux

### Qu'est-ce que c'est

> A Predictable State Container for JS Apps
> Un conteneur de state pour les apps en JS


![](redux.jpg)

**conteneur (store):**

Quelque-chose qui contient, une boite par exemple

**state:**

De la donnée dont le but est de décrire un état

**app js:**

dans programme écrit en javascript

### Comment ça marche 

Redux nous fourni une méthode (createStore) dont le job est de fabriquer un store. 

#### Le store

Le store est un objet qui contient des méthodes (fonctions) pour interagir avec le state.

#### Reducer

Un reducer est une fonction dont le job est de me return le state. Il n'y a AUCUNE exception, mon reducer lorsqu'il est exécuté DOIT TOUJOURS return le state.  

### Action

Un objet (toujours) avec une propriété "type" (toujours) qui décrit un événement qui a eu lieu et qui doit modifier le state. 

```javascript
const sampleAction = {
  type: 'INCREMENT_COUNTER'
};
```

Les actions sont reçues par le reducer, qui, en fonction du type de l'action saura comment modifier le state.


Pour envoyer une action jusqu'à mon reducer, il faut que je la "dispatch". Le store contient une méthode qui s'appelle "dispatch" et qui attend que je lui donne une action.

> Par convention, chaque type d'action est TOUJOURS une string en majuscule

```javascript
store.dispatch(sampleAction);
// Celle ligne va réexécuter le reducer, qui va recevoir le state actuel, ainsi que l'action que je viens de lui donner, et va me retourner un nouveau state.

```