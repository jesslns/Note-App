function testSingleNoteView() {
  var note = new Note('Favourite drink: seltzer');
  var singleNoteView = new SingleNoteView(note);

  assert.isTrue(singleNoteView.returnHtmlString() === '<div>Favourite drink: sel</div>');
  console.log('singleNoteView can return HTML string')
};

testSingleNoteView();
