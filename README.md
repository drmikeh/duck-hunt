# Duck Hunt

## Description

Duck Hunt is a simple arcade game inspired by the original Nintendo Duck Hunt game.

## Links

* User stories: [Trello](https://trello.com/b/pV1mIbHk/duck-hunt)
* Production deployment: [BitBalloon](http://juggler-horse-43246.bitballoon.com/)
* GitHub: [Duck Hunt](https://github.com/drmikeh/duck_hunt)

## Technologies

* HTML5
* SASS
* JavaScript
* jQuery
* Yeoman, Grunt, Bower

## Screen Mockups

![Mockup](https://raw.githubusercontent.com/drmikeh/duck_hunt/master/app/images/mockup.jpg)

## Steps to Reproduce This Project

The steps below will demonstrate how to create this project from scratch:

* [Step 1 - Setup The Project](#step-1---setup-the-project)


### Step 1 - Setup The Project

In this step we will create a directory for our project, use _Yeoman_ to scaffold out our project, test our initial project via a `grunt` build, and finally initialize it as a git repository.

1a. If you haven't already done so, install the [webapp](https://github.com/yeoman/generator-webapp) Yeoman generator.

```bash
npm install -g generator-webapp
```

1b. Create a new directory for this project and run the Yeoman Generator.

```bash
cd ~/ga/wdi/mini-projects
mkdir duck-hunt
cd duck-hunt
yo webapp
```

When prompted, you can choose all of the default values.

1c. Verify that all dependencies were installed:

```bash
npm install && bower install
```

This command should return clean.


1d. Run `grunt` to test the scaffold.

```bash
grunt
```

This command should run clean.

1e. Initialize Git repo and commit all changes:

```bash
git init
git add -A
git commit -m "Created the duck-hunt project."
git tag step1
```

Now we are ready to start editing the HTML, SASS, and JavaScript files under
the *app* folder. As you edit and save, you will see the changes in the
browser.

