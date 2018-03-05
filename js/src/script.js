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
    // save to localstorage from App class
    app.notesArray.push(this);
    localStorage.setItem('notes', JSON.stringify(app.notesArray));
  }

  remove(){
    // this' will refer to the current note element
    app.removeNote(this);
  }
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    // save properties
    this.btnAdd = document.getElementById("btnAddNote");
    this.txtAdd = document.getElementById("txtAddNote");
    this.wrapperNotes = document.querySelector(".notes");

    // set listeners - button and enter key
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.txtAdd.addEventListener('keypress', this.keyPress.bind(this));

    this.loadNotesFromStorage();
  }

  keyPress(e) {
    if(e.keyCode == 13){
      this.createNote();
      e.preventDefault();
    }
  }

  loadNotesFromStorage() {
    // need to us temp array because we need to replace the saved notes with the new notes.
    let temp = [];
    this.notesArray = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];

    // we remake the notes because when we save the notes to localstorage we lose object ref + html dom obj
    this.notesArray.forEach(item => {
      let note = new Note(item.title);
      note.add();
      temp.push(note);
    });
    this.notesArray = temp;
    localStorage.setItem('notes', JSON.stringify(this.notesArray));
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
