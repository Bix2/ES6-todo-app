class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement();
  }

  createElement(){
    // create main element and add classList
    let newNote = document.createElement('div');
    newNote.classList.add('card');

    // add text input
    let textWrapper = document.createElement('p');
    let textContent = document.createTextNode(this.title);
    textWrapper.appendChild(textContent);
    newNote.appendChild(textWrapper);

    // add removelink
    let linkWrapper = document.createElement('a');
    let linkContent = document.createTextNode('remove');
    linkWrapper.appendChild(linkContent);
    newNote.appendChild(linkWrapper);

    // bind event to removelink
    linkWrapper.addEventListener('click', this.remove.bind(this));

    return newNote;
  }

  add(){
    // append the note to the screen
    document.querySelector(".notes").appendChild(this.element);
  }

  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }

  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  }
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    // this.btnAdd = ???
    // this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();
  }

  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }

  createNote(e){
    // this function should create a new note by using the Note() class

    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();
  }

  reset(){
    // this function should reset the form
  }

}

let app = new App();
