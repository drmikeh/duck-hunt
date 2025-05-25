# Duck Hunt

## Description

Duck Hunt is a simple arcade game inspired by the original Nintendo Duck Hunt game.

## Links

- User stories: [Trello](https://trello.com/b/pV1mIbHk/duck-hunt)
- Production deployment: [BitBalloon](http://juggler-horse-43246.bitballoon.com/)
- GitHub: [Duck Hunt](https://github.com/drmikeh/duck-hunt)

## Technologies

- HTML5
- JavaScript
- jQuery
- Vite

## Screen Mockups

![Mockup](https://raw.githubusercontent.com/drmikeh/duck-hunt/master/app/images/mockup.jpg)

## Steps to Reproduce This Project

The steps below will demonstrate how to create this project from scratch:

- [Step 1 - Setup The Project](#step-1---setup-the-project)
- [Step 2 - Download the Images and Set Background](#step-2---download-the-images-and-set-background)
- [Step 3 - Add Some Ducks](#step-3---add-some-ducks)
- [Step 4 - Make the Ducks Fly](#step-4---make-the-ducks-fly)
- [Step 5 - Shoot the Ducks](#step-5---shoot-the-ducks)
- [Step 6 - Recycle Ducks](#step-6---recycle-ducks)
- [Step 7 - Deploying to BitBalloon via Drag-and-Drop](#step-7---deploying-to-bitballoon-via-drag-and-drop)

### Step 1 - Setup The Project

In this step we will use `vite` to scaffold the project, install node modules, and initialize it as a git repository.

1a. Run `vite` to create the project.

```bash
npx create-vite@latest -t vanilla duck-hunt
```

1b. CD into the new directory and install the node modules.

```bash
cd duck-hunt
npm install
```

1c. Initialize Git repo and commit all changes:

```bash
git init
git add -A
git commit -m "Created the duck-hunt project."
git tag step1
```

Now we are ready to start editing the HTML, CSS, and JavaScript files under
the _src_ folder. As you edit and save, you will see the changes in the
browser.

### Step 2 - Download the Images and Set Background

We need some images to make Duck Hunt come to life.

2a. Create an `images` directory and download the images into it.

```bash
wget https://raw.githubusercontent.com/drmikeh/duck-hunt/master/app/images/background.jpg -O public/background.jpg
wget https://raw.githubusercontent.com/drmikeh/duck-hunt/master/app/images/crosshair.png -O public/crosshair.png
wget https://raw.githubusercontent.com/drmikeh/duck-hunt/master/app/images/duckhunt.png -O public/duckhunt.png
wget https://raw.githubusercontent.com/drmikeh/duck-hunt/master/app/images/grass.png -O public/grass.png
wget https://raw.githubusercontent.com/drmikeh/duck-hunt/master/app/images/mockup.jpg -O public/mockup.jpg
wget https://raw.githubusercontent.com/drmikeh/duck-hunt/master/app/images/shot.png -O public/shot.png
```
