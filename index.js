'use strict';

var rDivClass = /^(-?[_a-zA-Z]+[_a-zA-Z0-9-]*\s*)*$/;
//var defaultStyle = 'display:block; margin:auto auto;'

function insertVideoTag(args, type) {
  var tagConfig = hexo.config.hexo_tag_optimized_gif;
  var divClass = '';
  var videoClass = tagConfig.video_css_class || '';
  var uri = '';
  var usePoster = tagConfig.enable_poster;
  var html = '';

  if (rDivClass.test(args[0])) {
    divClass = args.shift();
  }

  uri = args[0];
  uri = uri.substring(0, uri.lastIndexOf('.')+1); // trim the extension but leave the dot
  
  var posterAttr = (usePoster == true) ? ('poster="' + uri + 'jpg"') : '';

  // construct HTML
  if (divClass) {
    html += '<div class="' + divClass + '">';
  }
  html += '<video class="' + videoClass + '" autoplay loop muted="true" ' + posterAttr + '>';
  html += '<source type="video/' + type + '" src="' + uri + type + '">';
  html += 'Your browser does not support the video tag.</video>';
  if (divClass) {
    html += '</div>';
  }

  return html;
}

hexo.extend.tag.register('mp4gif', function(args, content) { 
  return insertVideoTag(args, 'mp4');
});

hexo.extend.tag.register('webmgif', function(args, content) { 
  return insertVideoTag(args, 'webm');
});
