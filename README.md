# MaryQuery
MaryQuery is a vanilla JavaScript DOM interaction library modeled after the main features of jQuery.

Implemented with a simple to-do app.

MaryQuery allows users to:
-  Make HTTP requests
-  Manipulate HTML elements and selectors
-  Access the children and parent nodes of DOM elements
-  Make AJAX requests that return promises

### Getting Started
The easiest way to implement MaryQuery is to download the MaryQuery library, add it into your project directory, and include the webpack output in your source code.

```
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="./css/reset.css">
  <script type="text/javascript" src="./maryQuery.js"></script>
  ...
</head>

```

### The $maryQuery wrapper
``` $maryQuery ``` is commonly used throughout MaryQuery in conjunction with CSS selectors, returning DOMNodeCollection objects, or NodeLists. It can also be used to create DOMNodeCollection objects and to build HTML Elements with strings.

### Included DomNodeCollection Prototype Methods
-  html
-  empty
-  append(arg)
-  attr(key, val)
-  addClass(name)
-  removeClass(name)
-  toggleClass(class)
-  children
-  parent
-  find(selector)
-  remove

### Event Handlers
-  on(type, func)
-  off(type)

### AJAX Requests
-  $maryQuery.extend - simple function that merges JavaScript objects
-  $maryQuery.ajax - receives an options object as an argument and makes an AJAX request that returns a promise
