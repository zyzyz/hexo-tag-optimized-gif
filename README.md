# hexo-tag-optimized-gif

Add embedded html5 video to hexo, but treat it like a GIF.

Maybe you are recording GIFs for your blog but the GIF files are too big and many of them are eating up band width from your free plan CDN? An optimization is to use some kind of CDN like Cloudinay which is able to covert your uploaded GIF into smaller `MP4` or `WebM` video file by just changing extension at the end of your file URL.

This tag will add a `<video>` tag with `autoplay` and `loop` attributes when generation, helping you achieve the optimization.

## Installation

``` bash
$ npm install hexo-tag-optimized-gif --save
```

## Usage

```
{% mp4gif  your_GIF_URI <use poster?> %}
or 
{% webmgif your_GIF_URI <use poster?> %}
```
Just put your GIF link here and the URI extension replacement will be handled internally.  
The `use poster` boolean arg is optional. With a poster enabled, a picture is shown while video is downloading.

Other `<video>` attributes' default settings are listed below:
| Attribute | Default setting |
| ----- | --------- |
| width | untouched |
| height | untouched |
| muted | true |
| poster | false, if arg `use poster` is specified as true, it's the GIF URI with extension replaced by **jpg**. |

This tag plugin is compatible with the orginal `hexo-tag-html5` plugin.

## License
MIT




