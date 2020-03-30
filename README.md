# Poll maker

A simple poll maker where you can make your own statements and make others disagree or agree with your statements.

<img alt="Afb 1" src="https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/11a2c81757954f4f7583ba2bed4bd8dd%20(1).gif">

## Description 📝
A simple poll maker where you can make your own statements and make others disagree or agree with your statements. You are able to see the answers students give with a result page. Next to that it's fit for mobile, desktop and almost every browser.

## Table of Contents 🗃
- [Poll maker](#poll-maker)
  * [Description 📝](#description---)
  * [Table of Contents 🗃](#table-of-contents---)
  * [Live demo](#live-demo)
  * [To Do and features 📌](#to-do-and-features---)
  * [Installation](#installation)
  * [Wireflow](#wireflow)
    + [Sketch](#sketch)
  * [Feature Detection](#feature-detection)
    + [A couple examples](#a-couple-examples)
      - [Opera mini](#opera-mini)
      - [Ipad](#ipad)
  * [Layers](#layers)
    + [Layer 1 (HTML)](#layer-1--html-)
  * [Semantic HTML](#semantic-html)
    + [Layer 2 (HTML and CSS)](#layer-2--html-and-css-)
  * [CSS Fallbacks](#css-fallbacks)
    + [Layer 3 (HTML, CSS and JS)](#layer-3--html--css-and-js-)
  * [Progressive enhancement](#progressive-enhancement)
  * [Conclusion](#conclusion)
      - [Student kan de core functionaliteit van een use case doorgronden](#student-kan-de-core-functionaliteit-van-een-use-case-doorgronden)
      - [Toegankelijkheid: De user experience is goed](#toegankelijkheid--de-user-experience-is-goed)
      - [Readme: In de beschrijving van het project staat een probleemdefinitie, hoe het probleem is opgelost en een uitleg van de code.](#readme--in-de-beschrijving-van-het-project-staat-een-probleemdefinitie--hoe-het-probleem-is-opgelost-en-een-uitleg-van-de-code)
      - [Student kan uitleggen wat Progressive enhancement is.](#student-kan-uitleggen-wat-progressive-enhancement-is)
      - [Student laat zien hoe Progressive Enhancement toe te passen in Web Development](#student-laat-zien-hoe-progressive-enhancement-toe-te-passen-in-web-development)
      - [Student kan uitleggen wat Feature detection is.](#student-kan-uitleggen-wat-feature-detection-is)
      - [Student laat zien hoe Feature Detection kan worden toegepast in Web Development](#student-laat-zien-hoe-feature-detection-kan-worden-toegepast-in-web-development)
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


## Wireflow
<details markdown="1">
   <summary>Show wireflow</summary>
   
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

</details>

## Feature Detection
> My idea behind feature detection is that you can use the css or js to determine whether a feature is supported in the current browser. Then if it isn't supported, a fallback kicks in. This way browsers that don't support certain features in the css, then it will just use the code previously mentioned. However if it does, the cascading of CSS kicks in and overwrites the values mentioned in earlier code.  

If you want the user to be able to see everything correctly on the browsers, you should be using fallbacks. First you declare the most basic styling that everything supports. After that make sure to use the `@supports` property and the value you want to check if it supports the value. This way the cascading part of CSS kicks in and cascades the previously mentioned code. This is also part of feature detection
 ```css
.poll-form > div {
    margin-top: 30vh;
}
@supports(display: flex) {
    main {
        margin-top: 10%;
    }
    .poll-form > div {
        margin-top: 0;
        height: 50vh;
        display: flex;
        -ms-display: flex;
        justify-content: center;
        align-items: center;
    }
    section {
        margin: 0;
        height: 50vh;
        display: flex;
        -ms-display: flex;
        justify-content: center;
        align-items: center;
    }
}
 ```
 
### A couple examples
#### Opera mini
This is captured with a opera mini browser, on a mobile device. As you can see almost everything works great. The JS is of course by default disabled. The only thing i'm not that happy about is the input bar, as you can't see the statement you're writing.
![](https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/opera_mini.gif)

#### Ipad
This is captured with the ipad, with a very old Chrome browser (V29 i believe). Thss one works especially well, even with the JS enabled. 
![](https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/ipad.gif)

## Layers 
  ### Layer 1 (HTML)
  > This is the layer that only contains HTML
<details markdown="1">
   <summary>Code</summary>
   
## Semantic HTML
I made sure i use semantic HTML, this way the user can still see what's what eventhough there is no styling. you can do this by actually using forms / fieldsets
 ```html
<form class="begin-form" method="POST" action="/joingame">
    <fieldset>
        <label for="gameId">Wat is de poll code?</label>
        <input id="gameId" type="text" name="gameId"></input>
        <p class="error"> <%-error%></p>
        <div class="button ms">
            <div class="translate"></div>
            <button type="submit" class="begin-btn">ZOEK</button>
          </div>
    </fieldset>
</form>
 ```

</details>

  It might not look pretty but this is what some users are gonna be able to see. The users are still gonna be able to do the core functionalities, like send the form info and get the results. 
  ![](https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/functional.png)
  
 ### Layer 2 (HTML and CSS)
  > This is the layer that contains HTML and CSS
  
  <details markdown="1">
   <summary>Code</summary>
   
## CSS Fallbacks
If you want the user to be able to see everything correctly on the browsers, you should be using fallbacks. First you declare the most basic styling that everything supports. After that make sure to use the `@supports` property and the value you want to check if it supports the value. This way the cascading part of CSS kicks in and cascades the previously mentioned code. This is also part of feature detection
 ```css
.poll-form > div {
    margin-top: 30vh;
}
@supports(display: flex) {
    main {
        margin-top: 10%;
    }
    .poll-form > div {
        margin-top: 0;
        height: 50vh;
        display: flex;
        -ms-display: flex;
        justify-content: center;
        align-items: center;
    }
    section {
        margin: 0;
        height: 50vh;
        display: flex;
        -ms-display: flex;
        justify-content: center;
        align-items: center;
    }
}
 ```

</details>

  It's already starting to look like something, the user has access to the most basic of styling and can use it across all browsers. The user can't do anything different than the most basic layer.  
  ![](https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/laag_2.png)
  
 ### Layer 3 (HTML, CSS and JS)
  > This is the layer that contains everything
  
   <details markdown="1">
   <summary>Code & Progressive Enchancement</summary>
   
## Progressive enhancement
Besides being able to not see the CSS, sometimes users have their JS turned off or it can't load correctly. This way you'll have to use progressive enhancement. I used it in this page to animate page transitions and show a graph on the result page. To make sure users are still able to see everything normally if there isn't any JS, i give every HTML tag, the `class="no-js"` class. This way i declare normal variables in css and i can easily scan the page for attributes containing that tag. If there is a tag present i either remove it, or i give it a new class. This way people who have it turned off, can still use the page.
 ```js
const bars = document.querySelectorAll('.result-bar')
const js = document.querySelectorAll('.no-js')
const totalValue = (parseInt(bars[0].getAttribute('data-value')) + parseInt(bars[1].getAttribute('data-value')))

function calcWidth(val, totalVal) {
    return (val / totalVal) * 100
}
const bar1w = calcWidth(bars[0].getAttribute('data-value'), totalValue)
const bar2w = calcWidth(bars[1].getAttribute('data-value'), totalValue)
const titles = document.querySelectorAll('.result-title')
titles.forEach(item =>{
    item.remove()
})

js.forEach(item =>{
    item.classList.remove('no-js')
})
 ```

</details>

  The user has a way better user experience and has access to graphs on the result page. Next to that there are also fluid page transitions. This way the user has a feeling that the page doesn't just load but switches from content.
  ![](https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/pleasurable.png)
  
![](https://github.com/kylebot0/browser-technologies-1920/blob/master/gh-images/11a2c81757954f4f7583ba2bed4bd8dd%20(1).gif)
  
## Conclusion
#### Student kan de core functionaliteit van een use case doorgronden
- I think i perfectly executed the core functionality of the use case, because all that was required is making your own statements and then being able to view those statements. Which worked out pretty good.

#### Toegankelijkheid: De user experience is goed
- The user experience is pretty good, the only thing i wanted to add was an answers button where you can just enter the code and get your answers. But besides that, i tried to use progressive disclosure by doing everything step by step so nothing goes wrong. I also added some error validation in case someone enters the wrong code or doesnt enter anything at all.

#### Readme: In de beschrijving van het project staat een probleemdefinitie, hoe het probleem is opgelost en een uitleg van de code.
- I described everything in my readme, including some snippets of code. I didn't want to add too much code, because that's not what a readme is for and everyone is capable to look at the code themselves. Only thing that could've been described better is the definition of the problem.

#### Student kan uitleggen wat Progressive enhancement is. 
- For me progressive enchancement is making everything accessible for everyone, from screenreaders, to people that don't have JS enabled. 

#### Student laat zien hoe Progressive Enhancement toe te passen in Web Development
- Most of the progressive enchancement is described in [Layers](#layers)

#### Student kan uitleggen wat Feature detection is.
- My idea behind feature detection is that you can use the css or js to determine whether a feature is supported in the current browser. Then if it isn't supported, a fallback kicks in. This way browsers that don't support certain features in the css, then it will just use the code previously mentioned. However if it does, the cascading of CSS kicks in and overwrites the values mentioned in earlier code.  

#### Student laat zien hoe Feature Detection kan worden toegepast in Web Development
- For more feature detection check [Feature detection](#feature-detection)

## Keep up to date
Make sure you pull the repository once in a while since we are still working on this project, you can do this by using ```git pull```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Sources 📚
Sources i used throughout the project.

* None

### Credits

  * Koop, for coming up with great ideas!

## Licence 🔓
MIT © [Kyle Bot](https://github.com/kylebot0)
