## chun-lightbox
AngularJS lightbox only for street fighter players

### Installation
1. [Download latest release](https://github.com/jiin/chunlightbox) or use bower:
```
bower install chun-lightbox
```

2. Add to app dependencies:
```js
var app = angular.module('app', ['chun-lightbox']);
```

### Usage
```html
<chunlightbox chun-box-id="my-cool-lightbox" chun-text="My cool chun-link">
  <h1>OMG IT'S AWESOME!</h1>
</chunlightbox>
```

You can also:

+	Set a timeout for lightbox fading out (time must be in ms), like:

```html
<chunlightbox chun-box-id="my-fading-lightbox" chun-text="My fading chun-link" chun-timeout="2000">
  <h1>OMG IT'S AWESOME!</h1>
</chunlightbox>
```

+	Load remote data via angular $http api:

```html
<chunlightbox chun-box-id="chun2" chun-text="My second chun-link" chun-load-data="./partials/remote.html">
  <p style="color:red;">An error are occurred in load remote data</p>
</chunlightbox>
```

+	When you click outside the lightbox chun-lightbox can fire a close event:

```html
<chunlightbox chun-box-id="chun3" chun-text="My third chun-link" chun-close-on-click="true">
  <p>Click outside the box to close me</p>
</chunlightbox>
```