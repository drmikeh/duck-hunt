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

### Step 2 - Download the Images and Set Background

We need some images to make Duck Hunt come to life.

2a. Create an `images` directory and download the images into it.

```bash
mkdir app/images
wget https://raw.githubusercontent.com/drmikeh/duck_hunt/master/app/images/background.jpg -O app/images/background.jpg
wget https://raw.githubusercontent.com/drmikeh/duck_hunt/master/app/images/crosshair.png -O app/images/crosshair.png
wget https://raw.githubusercontent.com/drmikeh/duck_hunt/master/app/images/duckhunt.png -O app/images/duckhunt.png
wget https://raw.githubusercontent.com/drmikeh/duck_hunt/master/app/images/grass.png -O app/images/grass.png
wget https://raw.githubusercontent.com/drmikeh/duck_hunt/master/app/images/mockup.jpg -O app/images/mockup.jpg
wget https://raw.githubusercontent.com/drmikeh/duck_hunt/master/app/images/shot.png -O app/images/shot.png
```

2b. Edit `app/index.html` and replace all of the HTMl in the <body> section with the following:

```html
<div class="title">Duck Hunt!</div>
<div class="score">Score: </div>
```

2c. Edit `app/styles/main.scss` and replace all of the content with:

```sass
$icon-font-path: "../bower_components/bootstrap-sass/assets/fonts/bootstrap/";

// bower:scss
@import "bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss";
// endbower

body, html {
  height: 100%;
  overflow: hidden;
}

body {
  background-color: green;
  background-position: center;
  background-image: url('/images/background.jpg');         // a nice meadow
  background-size: cover;
  cursor: url('/images/crosshair.png') 32 32, crosshair;   // our rifle crosshairs

  // add some grass at the bottom that the ducks can hide in
  &:after {
    display: block;
    content: '';
    background-image: url('/images/grass.png');
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 197px;
  }
}

.title {
  position: absolute;
  top: 10px;
  left: 30px;
  font-size: 2em;
  font-family: Tahoma, Geneva, sans-serif;
}

// Display the score in the upper right hand corner
.score {
  position: absolute;
  top: 10px;
  right: 30px;
  font-size: 2em;
  font-family: Tahoma, Geneva, sans-serif;
}
```

2d. Save your changes and test it all via `grunt serve`.

2e. Save your work:

```bash
git add -A
git commit -m "Added images and set background."
git tag step2
```
