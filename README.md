# eeh-slideout
An AngularJS [Slideout.js](https://mango.github.io/slideout) module.

This module works great with the [eeh-navigation](https://ethanhann.github.io/eeh-navigation) module.

## Usage

```html
<eeh-slideout is-open="slideOutMenuIsOpen" panel-selector="'#panel'" menu-selector="'#menu'">
    <nav id="menu">
        <ul>
            <li><a href="/foo">Foo</a></li>
            <li><a href="/bar">Bar</a></li>
        </ul>
    </nav>

    <main id="panel">
        <button ng-click="slideOutMenuIsOpen = !slideOutMenuIsOpen">
            toggle slideout menu
        </button>

        <section>
            <p>Main Content</p>
        </section>
    </main>
</eeh-slideout>
```
=======
An AngularJS Slideout.js module.
>>>>>>> 95c78c2a0df86da4065dbb1dbc0b2798333f409e
