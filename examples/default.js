var options = {
  theme: 'ergonom',
  // debug_layers: ['code'],
  // scroll_speed: 75,
  // hide_rows: true,
  // center: true,
  // margin_left: 15,
  // gutter_margin: 20,
};

var jazz = new Jazz(options);

// jazz.use(document.body).open('ember.js', './').focus();
jazz.use(document.body).open('babel.js', './').focus();
// jazz.use(document.body).open('jquery.js', './').focus();
// jazz.use(document.body).open('codemirror.js', './').focus();
// jazz.use(document.body).open('broken.js', '../test/').focus();
