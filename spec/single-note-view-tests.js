function testSingleNoteView() {
  var note = new Note('Favourite drink: seltzer');
  var singleNoteView = new SingleNoteView();

  assert.isTrue(singleNoteView.returnHtmlString(note) === '<div>Favourite drink: seltzer</div>');
  console.log('singleNoteView can return HTML string')
};

testSingleNoteView();
