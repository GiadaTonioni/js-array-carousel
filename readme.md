PROBLEMA: Dato un array contenente una lista di cinque immagini, creare un carosello in cui scorrerle attraverso dei bottoni.

1 - creare la struttura HTML
2 - aggiungere gli stili CSS per centrare l'immagine che per ora sarà statica
3 - aggiungere gli stili ai bottoni che permetteranno lo scorrimento delle immagini
4 - dare di default display:none alle immagini
5 - su JS creare un array contenente le immagini
6 - dichiarare una variabile dell'elemento singolo recuperando la classe assegnata al padre delle immagini
    6.1 - attraverso un ciclo for fare selezione una alla volta delle immagini 
7 - dichiarare l'elemento immagine come 0
8 - selezionando lo 0 dall' indice dell'array aggiungere classe di stile che renda l'elemento in display:none visibile
    8.1 - fare in modo che la regola si applichi a tutto il ciclo uno alla volta
9 - dichiarare bottoni recuperando le classi e aggiungere eventi
10 - al bottone che scorre avanti dare condizione per cui non possa andare oltre la lunghezza dell'array
    10.1 - far scorrere all'elemento successivo attraverso il bottone
    10.2 - assegnare contemporaneamente la visibilità all'elemento attivo e l'invisibilità a quello non attivo
11 - al bottone che scorre indietro dare condizione per cui non possa andare sotto lo 0
    11.1 - far scorrere all'elemento precedente attraverso il bottone
    11.2 - assegnare contemporaneamente la visibilità all'elemento attivo e l'invisibilità a quello non attivo