Manga Performer Demo
====================
This is a demo repo for the [Manga Performer][mangaperformer] library.

This repo contains:
* Bower config that can install Manga Performer and it's dependencies.
* A copy of [Chapter 01][] of the CC-BY-NC licensed [Ubunchu][] manga converted to JPEG. And an index.html that presents it using Manga Performer.
* A Gruntfile that will run a local webserver with the demo when you run the `grunt server` command.

Running the demo
----------------
The demo requires [Node][], [npm][], and [Bower][] to be installed. You should also install [Grunt][] using `npm install -g grunt-cli` to use the server.

If you wish to use a development copy of Manga Performer follow these steps before setting up the demo.
* After cloning the [mangaperformer] repo `cd` into it and run `bower link`.
* `cd` into the demo repo and run `bower link mangaperformer`.

To setup the environment and run the server run the following.
```bash
$ bower install # Install Manga Performer and it's dependencies
$ npm install # Install the libraries needed by the server
$ grunt server # Run the webserver and open in the browser
```

[mangaperformer]: https://github.com/redwerks/mangaperformer
[Ubunchu]: http://divajutta.com/doctormo/ubunchu/
[Chapter 01]: http://divajutta.com/doctormo/ubunchu/c1.html
[Node]: http://nodejs.org/
[npm]: http://npmjs.org/
[Bower]: https://github.com/bower/bower
[Grunt]: http://gruntjs.com/
