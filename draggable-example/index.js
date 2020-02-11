$(function() {
  $('body').append(
    $('<div />', {
      'id': 'container',
    }).css({
      'width': '50em',
      'height': '25em',
      'padding': '0.5em',
      'border': '1px dashed gray',
      'display': 'inline-block'
    })
  );
  
  for (i = 0; i < 10; i++) { 
    $('div#container').append(
      draggable({
        text: i, 
        snap: true, snapMode: 'outer', 
        containment: 'div#container'
      })
    );
  }
});

function draggable(data) {
  return $('<div />', {
    'id': 'draggable',
    'class': 'ui-widget-content',
    'text': data.text
  }).css({
    'width': '5em',
    'height': '3em',
    'padding': '0.5em',
    'display': 'inline-block',
    'border': '1px solid black',
    'margin': '1px'
  }).draggable({
    snap: data.snap,
    snapMode: data.snapMode,
    containment: data.containment
  });
}