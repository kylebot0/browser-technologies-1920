# Poll maker

A simple poll maker where you can make your own statements and make others disagree or agree with your statements.

<img alt="Afb 1" src="https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/11a2c81757954f4f7583ba2bed4bd8dd%20(1).gif">

## Introduction
I want a poll with a statement that i can think of myself and be able to see the results of it during a lecture.

## Table of Contents 🗃
- [SpaceX Display ⚙️](#spacex-display---)
  * [Table of Contents 🗃](#table-of-contents---)
  * [Live demo](#live-demo)
  * [To Do and features 📌](#to-do-and-features---)
  * [Description 📝](#description---)
  * [Actor diagram](#actor-diagram)
  * [Interaction diagram](#interaction-diagram)
  * [Installing 🔍](#installing---)
    + [Packages and Technologies](#packages-and-technologies)
  * [API 🐒](#api---)
  * [Keep up to date](#keep-up-to-date)
  * [Contributing](#contributing)
  * [Sources 📚](#sources---)
    + [Credits](#credits)
  * [Licence 🔓](#licence---)
  
## Live demo
[Direct link](https://bt-1920-kyle-bot.herokuapp.com/)
```
https://bt-1920-kyle-bot.herokuapp.com/
```

## To Do and features 📌
Things to do in this project:

- [ ] Add own answers


Features:

- [x] Feature detection
- [x] Make own statements
- [x] Result page
- [x] Progressive Enhancement
- [x] Fit for all browser( including oepra mini)
- [x] CSS Fallbacks

## Description 📝
A simple poll maker where you can make your own statements and make others disagree or agree with your statements. You are able to see the answers students give with a result page. Next to that it's fit for mobile, desktop and almost every browser.

## Installation

1. Open your terminal

2. Change the directory to a folder in which you want to place the files

``` 
cd /~path
```

3. Clone the repository 
```
git clone https://github.com/kylebot0/browser-technologies-1920.git
```
4. Change directory to repository
```
cd browser-technologies-1920
```
5. Install dependencies from package.json
```
npm install
```
6. Run application with Node
```
node src/index.js
OR
npm run start
```


## Workflow
  ### Sketch
> Ik wil tijdens een college aan studenten een poll kunnen voorleggen met over-de-streep stellingen en de resultaten meteen laten zien.
I started by making a design that i wanted to recreate and that i liked. This was the result of that.
---
I started by making the core functionality, which is creating a poll and then being able to vote on it and see the results. This layer includes no JS.

<img width="500" alt="Afb 1" src="https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/Wireflow-BT-Laag-3.png">
---
Then i wanted to make a design with some simple progressive enhancement and JS.
<img width="500" alt="Afb 1" src="https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/Wireflow-BT-Laag-2.png">
---
At last i made the most pleasurable layer, which contains everything.
<img  width="500" alt="Afb 1" src="https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/Wireflow-BT-Laag-1.png">
---

## Layers 
  ### Layer 1 (HTML)
  > This is the layer that only contains HTML
  It might not look pretty but this is what some users are gonna be able to see. The users are still gonna be able to do the core functionalities, like send the form info and get the results. 
  ![](https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/functional.png)
  
 ### Layer 2 (HTML and CSS)
  > This is the layer that contains HTML and CSS
  It's already starting to look like something, the user has access to the most basic of styling and can use it across all browsers. The user can't do anything different than the most basic layer.  
  ![](https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/laag_2.png)
  
 ### Layer 3 (HTML, CSS and JS)
  > This is the layer that contains everything
  The user has a way better user experience and has access to graphs on the result page. Next to that there are also fluid page transitions. This way the user has a feeling that the page doesn't just load but switches from content.
  ![](https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/pleasurable.png)
  
<img alt="Afb 1" src="https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/11a2c81757954f4f7583ba2bed4bd8dd%20(1).gif">
  
## Conclusion

## Keep up to date
Make sure you pull the repository once in a while since we are still working on this project, you can do this by using ```git pull```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Sources 📚
Sources i used throughout the project.

* https://docs.spacexdata.com/?version=latest
* https://dev.to/kodnificent/how-to-build-a-router-with-vanilla-javascript-2a18

### Credits

  * None

## Licence 🔓
MIT © [Kyle Bot](https://github.com/kylebot0)
