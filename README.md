# What is this ?

Get perfect shadows every time for the non-designer.

# Installation

`npm i shadowstyley --save`

Html file

```html
<div class="stylesite">
    <h1>Card Title</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,</p>
</div>
```
Befor ```</body>```
```html
<script src="js-file.js"></script>
```
js-file.js
```javascript
import { shadowstyley } from 'shadowstyley';

shadowstyley({
    style_type: 'soft',
    padding: false
});
```

## Options

shadowstyley supports 2 options both of which are optional :

* *style_type* - _hard / soft_ (Defaults to sort)
* *padding* - _boolean_ (Defaults to false)
