# Efront Boilerplate

## HTML tags

* Where possible use HTML5 `<header> <nav> <main> <section> <article> <footer>` tags.


## jQuery plugins (Vendor)

* Store all plugins files in `js/vendor`

*  Use individual `<script>` tags for each plugin.

```html
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>
    <script src="js/vendor/plugin1.js"></script>
    <script src="js/vendor/plugin2.js"></script>
    <script src="js/main.js"></script>
```
