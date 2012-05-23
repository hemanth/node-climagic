nom = require('nom');
nom("http://climagic.org", function(err, $) {
  console.log($('tt').text());
});

