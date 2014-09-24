// Note imagemagick requires ghostscript to be installed.
var im = require('imagemagick');

console.log('about to convert file');

im.convert(['test.pdf', 'test.jpg'], 
function(err, stdout){
  if (err) throw err;
    // all good, time to change size.
    im.resize({
    srcPath: 'test.jpg',
    dstPath: 'test-small.jpg',
    width:   175,
    height:  134
  }, function(err, stdout, stderr){
		if (err) throw err;
		console.log('resized ');
	});
});
