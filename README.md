# meteor-autoform-input-addon-icon
Input with bootstrap addon and custom icon for autoform.
``` console
meteor add smaltcreation:autoform-input-addon-icon
```

## Usage
In your `SimpleSchema` object, `autoform` has to be type of `'smalt-addon-icon'`:
``` javascript
  email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        autoform: {
            type: 'smalt-addon-icon',
            icon: 'fa fa-fw fa-envelope',
            left: true
        }
    }
```
* **type**: `'smalt-addon-icon'`
* **icon**: *use class like glyphicon or fontawesome*
* **left**: *if true, icon will be displayed left ; else right*

*@See [Bootstrap documentation](http://getbootstrap.com/components/#input-groups) for more infos about `input-group-addon` class.*
