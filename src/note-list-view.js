(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList.notes;
  };

  NoteListView.prototype.returnHtmlString = function(){
    
    var html = this.noteList.map(note => {
      return "<li><div>" + note.text + "</div></li>"
    });
       return "<ul>" + html.join('') + "</ul>"
  };

  exports.NoteListView = NoteListView;

})(this);
