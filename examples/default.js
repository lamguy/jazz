var options = {
  theme: 'western',
  // debug_layers: ['code'],
  // scroll_speed: 0.30,
  // hide_rows: false,
  // center: false,
  // margin_left: 15,
  // gutter_margin: 20,
};

var jazz = new Jazz(options);

// jazz.use(document.body).open('ember.js', './').focus();
jazz.use(document.body).open('babel.js', './').focus();
// jazz.use(document.body).open('broken.js', '../test/').focus();
