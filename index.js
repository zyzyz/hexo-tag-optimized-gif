'use strict';


function insertVideoTag(args, type) {
  var uri = args[0];
  var usePoster = args[1] || false;
  var html = '';
  
  uri = uri.substring(0, uri.lastIndexOf('.')+1); // trim the extension but leave the dot
  var posterAttr = (usePoster == true) ? ('poster="' + uri + 'jpg"') : '';

  html += '<video autoplay loop muted="true" ' + posterAttr + '>';
  html += '<source type="video/' + type + '" src="' + uri + type + '">';
  html += 'Your browser does not support the video tag.';
  html += '</video>'

  return html;
}

hexo.extend.tag.register('mp4gif', function(args, content) { 
  return insertVideoTag(args, 'mp4');
});

hexo.extend.tag.register('webmgif', function(args, content) { 
  return insertVideoTag(args, 'webm');
});
