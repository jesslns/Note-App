(function(exports) {
  var id = 0
  function Note(text) {
    this.text = text;
    id ++
    this.id = id ;
  };

  Note.prototype.showText = function(){
    return this.text;
  };

  exports.Note = Note;

})(this);
