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
{% mp4gif [div_class] your_URI %}
or 
{% webmgif [div_class] your_URI %}
```
| Arg | Description |
| ----- | --------- |
|div_class| Optional. If this class name is specified, a `div` wrapper is created and its class is `div_class`.
|your_URI| Just put your GIF link here and the URI extension replacement will be handled internally.

## Configuration

Add the following lines into your hexo `_config.yml` file:
```yaml
hexo_tag_optimized_gif:
  enable_poster: false
  video_css_class: [your class name]
```
+ enable_poster: whether to use `poster` attribute for `<video>` tag. With it enabled, the picture coverted from your URI by CDN is shown while video is downloading.
+ video_css_class: the class name you specify for `<video>` tag.

Other default settings of `<video>` attributes are listed below:
| Attribute | Default setting |
| ----- | --------- |
| width | untouched |
| height | untouched |
| muted | true |
| poster | empty string, if `enable_poster` is true, it's the URI with extension replaced by **jpg**. |

This tag plugin is compatible with the orginal `hexo-tag-html5` plugin.

## License
MIT




