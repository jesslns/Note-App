(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList.notes;
  };

  NoteListView.prototype.returnHtmlString = function(){
    if (this.noteList.length > 0){
      var html = this.noteList.map(note => {
        return "<li><div>" + '<a href="#notes/' + note.id  + '">' + note.showText() + "</a></div></li>"
      })
      return "<ul>" + html.join('') + "</ul>"
    } return
  };

  exports.NoteListView = NoteListView;

})(this);
