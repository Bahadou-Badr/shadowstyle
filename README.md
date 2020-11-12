# what is this ?

Get perfect shadows every time for the non-designer.

# Installation

`npm i shadowstyle --save`

Then...

...
import { shadowstyle } from 'shadowstyle';

shadowstyle({
    style_type: 'soft',
    padding: false
});
...

## Options

shadowstyle supports 2 options both of which are optional:

* *style_type* - _hard / soft_ (Defaults to sort)
* *padding* - _boolean_ (Defaults to false)