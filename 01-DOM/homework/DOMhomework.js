const toDoItems = [];

let desmotivaciones = {
  'cortala': 'CORTALA',
  'enterTheSpam': 'Cortala con spamear el enter.',
  'masDe7': 'Tenes una banda de cosas.',
  0: 'Realmente no lograste nada.',
  1: 'Una sola cosa? Un colador te pasa en retencion.',
  2: 'Necesitas conexion a internet para memorizar dos cosas?',
  3: 'Tres cosas nada mas. No te esfuerces mucho eh.',
  4: 'Faaaa amigo tantas cosas tenes para hacer.',
  5: 'Quien te pensas que sos, el hacedor-de-cosas-inador?',
  6: 'Si logras algo de esto, seguramente no lograste nada.',
  7: 'Tus ambiciones son como vos. Dan lastima.' 
}
let neverModifiedtoDoItems = true;
function desmotivar(){
  if (toDoItems.length != 0) {neverModifiedtoDoItems = false;}
  if (neverModifiedtoDoItems) {document.querySelector("#toDoInput").placeholder = 'Aca escribis las cosas que sabemos que no vas a hacer.'} else
  {document.querySelector("#toDoInput").placeholder = desmotivaciones[toDoItems.length<=7?toDoItems.length:toDoItems.length<=17?'masDe7':toDoItems.length<=38?'enterTheSpam':'cortala'];}
}
let createdBy = document.querySelector("#createdBy");
createdBy.innerHTML = createdBy.innerHTML + " Juan Rolon";

function ToDo(str) {
  this.description = str;
  this.complete = false;
}

ToDo.prototype.completeToDo = function(){
  this.complete = true;
}

function buildToDo(toDo, index) {
  // Tu código acá:
  let toDoShell = document.createElement('div');
  toDoShell.className = 'toDoShell';
  let toDoText = document.createElement('span');
  toDoText.innerHTML = toDo.description;
  toDoText.id = index;
  if (toDo.complete) {toDoText.className = 'completeText'};
  toDoText.addEventListener("click", (e) => completeToDo(e));
  toDoShell.appendChild(toDoText);
  return toDoShell;
}

function buildToDos(toDos) {
  // Tu código acá:
  return [...toDos].map((v, i)=>buildToDo(v,i))
}

function displayToDos() {
  // Tu código acá:
  let toDoContainer = document.querySelector('#toDoContainer');
  toDoContainer.innerHTML = '';
  arrayDeBuildToDos = buildToDos(toDoItems);
  for (let toDos of arrayDeBuildToDos){
    toDoContainer.append(toDos)
  }
  desmotivar();
}

function addToDo() {
  // Tu código acá:
  let nuevoToDo = new ToDo(document.querySelector('#toDoInput').value);
  toDoItems.unshift(nuevoToDo);
  document.querySelector('#toDoInput').value = '';
  displayToDos();
}

document.querySelector('#toDoInput').addEventListener('keypress', (e)=>{
  return e.key==="Enter" && document.querySelector('#toDoInput').value!==''?
  addToDo(e):false});


function completeToDo(event) {
  // DESCOMENTAR LA SIGUIENTE LINEA
  const index = event.target.id;
  // Tu código acá:
  toDoItems[index].completeToDo();
  toDoItems.splice(index, 1);
  displayToDos();
}

// Una vez que llegaste a este punto verificá que todos los tests pasen

// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //

// Acá debes insertar la llamada a 'displayToDos'
displayToDos();
// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== "undefined") {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo,
  };
}
