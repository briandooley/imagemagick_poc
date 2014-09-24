var fs = require('fs'),
im = require('imagemagick');

var testfile = 'test.pdf';

checkThumbExists(testfile, function(err, newFile){
console.log('newfile - ' + newFile);
});

function checkThumbExists(filename, callback){
    // TODO: check for existance of thumbnail.  If it doesn't exist, create it.
    var tempThumb = filename.trim().replace('.pdf', '.jpg');
    console.log('tempthumb - ' + tempThumb);
    fs.exists(tempThumb, function (exists) {
      if(!exists){
        // Jpg doesn't exist.
        console.log('jpg does not exist');
        console.log('creating ' + tempThumb + ' from ' + filename);
        im.convert([filename, tempThumb],
        function(err, stdout){
          //if (err) throw err;
          // all good, time to change size.
          console.log('resizing');
          im.resize({
            srcPath: tempThumb,
            dstPath: tempThumb,
            width:   175,
            height:  134
          }, function(err, stdout, stderr){
            if (err)  return callback(err, null);
            console.log('resized');
            return callback(null, tempThumb);
          });
        }
      );
    }
  });
}