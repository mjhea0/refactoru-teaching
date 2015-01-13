# CSS3.5: HTML/CSS Deep Dive

## CSS Perfromance

### Minification

**How does CSS minification reduce page load time?**

Minification removes unnecessary characters - such as spacing, comments, tabs, and white space - from code to reduce its size, with the goal of improving load times. 
Code can also be out on a single line. For example:

Before:

```css
h1 {
  font-size: 3em; 
  clear: both; 
  margin: 0 0 5px;
}
```
	
After:
	
```css
h1 { font-size: 3em; clear: both; margin: 0 0 5px; }
```

**What tools are available for minifying CSS?**

I've used [slimmer.py](https://pypi.python.org/pypi/slimmer/) for compressing/minimizing CSS, but it can also be used on JavaScript and HTML. There are also a number of online utilities, like [this](http://www.csscompressor.com/) and [this](http://refresh-sf.com/yui/) and [this](http://refresh-sf.com/yui/).

**How can a developer incorporate minification into a build process?**

If the CSS files significantly impact load times, you can create two different files:

1. Production - `main.min.css`
2. Development - `main.css`

You want to use the non-minified version in development as it's much easier to read.

### Serving Style

**Highly optimized sites take a strategy of serving some CSS in an external stylesheet and some CSS in a style element within the HTML page itself. For best performance, which CSS should be served internally and which externally? Hint: consider browser caching behavior**

Since each external stylesheets requires an HTTP request, it's best to minimize the number of external stylesheets you have. 

Use external stylesheets for your "base" styles that span multiple pages. These styles usually go with your "base" html template, which provides a common theme across your entire website, eliminating unncessary boilerplate.

Styles found in the page header should be used if that individual page has some customized styles that do not appear on other pages.

You can also control/turn-on caching for external stylesheets using the meta tag - `<meta http-equiv="Cache-control" content="public">` - as well as the .htaccess file on an Apache server.

## Web Fonts

**What is the state of web fonts today?**

Specifically with Google fonts, you can just link to the external stylesheet within the page header - `<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Tangerine">`. Then you can put it directly to use:

```css
body {
  font-family: 'Tangerine', serif;
  font-size: 48px;
}
```
It's also possible to use the `@font-face` feature in CSS3 to declare a new remote font:

```css
@font-face {
  font-family: 'MyFont';
  src: url('MyFont.ttf');
}
```

You then use it the same way as above.

**What are good cross-browser solutions to including custom, scalable fonts in your website?**

Not all font formats are compatible with every browser. Tools such as [Font Squirrel](http://www.fontsquirrel.com/tools/webfont-generator) can be used to prepare your font for use in multiple browsers and creates the required file formats.

**What limitations exist?**

Aside for certain browsers accepting only certain font formats, both Firefox and Opera tend to load the site with the alternative font before loading the custom font, which causes a brief "flash". Fortunately, there are ways around this as well. See this [page](http://www.html5rocks.com/en/tutorials/webfonts/quick/#toc-fout) for details.

## HTML5 Video

**How is the HTML5 video element used?**

HTML5 has provided a standard for diplaying videos on web pages:

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

This is actually a plug-in very similar to a Flash plug-in. 

**What browser support exists for it today?**

Different browser support different file formats. Find out more [here](http://www.w3schools.com/html/html5_video.asp).

**How can embedded video be made responsive?**

Use he following CSS to ensure that an embedded video scales with the size of the page:

```css
video {
    max-width: 100%;
    height: auto;
}
```

## Power Sprites

