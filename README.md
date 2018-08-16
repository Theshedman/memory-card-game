# Memory Card | Concentration Game
## Table of Contents

* [Instructions](#instructions)
* [Implementation](#implementation)
* [Responsiveness](#responsiveness)
* [Documentation](#documentation)
* [Directory](#directory)
* [Experience](#experience)
* [Appreciation](#appreciation)
* [Contributing](#contributing)
* [Reference](#reference)
* [License](#license)

## Instructions
Memory card game  (or as many would call it, Concentration) is a one-player game. [Please follow this **[link](https://theshedman.github.io/memory-card-game/)** to visit the github page for the **Memory Card Game**]. The player tries to concentrate much as s/he flips some cards to match them against each other. The detailed instruction is as below:

* The player clicks on a card to open it.
* A *timer* will start immediately after the first card is flipped to keep track of the total time it takes the player to complete the game.
* While the first card is still flipped, the user clicks on the second card to flip it.
* A counter will start to keep the *moves* it takes the player to finish the game
* If the symbol on the first card is the same as the symbol on the second card, both cards will remain flipped.
* If the symbols do not match with each other, both cards will close back again.
* The player will continue this process until s/he opens all the cards to match.
* The *rating star* will always reduce at every *5 moves* the player makes
* The process wil continue until the player is able to flip all the cards.
* once all the cards are successfully flipped, a congratulatory modal/overlay window will open to congratulate the player for a successful completion of the game.
* The modal will contain the info/summary of the game like the total time it take the player to complete the game, the number of moves the player made  to complete the game, and finally, the player's remaining stars after completing the game.

## Implementation
The starter file for the game project was provided to us. The given starter files contains both *HTML*, *CSS*, and *JavaScript* which already have the shuffle function for the card game out of the box. That is amazing. Isn't it?

Notwithstanding, I chose to work on the project from scratch without the starter files. I chose this because I believe so much that I will learn a lot after overcoming the challenges I will face while starting from the scratch.

Therefore, my implementation of the project may slightly differ in structure will still remain the same in function. While they used different Css layout like flexbox and in-block, I use the CSS modern layout (Grid and Flexbox)for my own layout.

It is important to note here that I added a keyboard shortcut like **ESC** for resetting the game. Guess you love that!

## Responsiveness
Here is the interesting part of the project. As frontend developers, we work hard so much to deliver a project that scale well across multiple devices and screens.

I tried so well to avoid any framework of any sort. Yeah, you heard me well, All my codes are in vanilla CSS and JavaScript. I walked this path because I really want to understand how things actually work under the hood which will even help me more to write clean and elegant codes coupled with the deep knowledge I will gain from it in the end.

That being said, I am happy that my work is responsive in mobile devices and as well as in tablets and computers of different screen sizes.

## Documentation
I forces myself to ensure that I adhere to the [Memory Card Game rubric](https://review.udacity.com/#!/rubrics/591/view), [Udacity Nanodegree Frontend Style rule](http://udacity.github.io/frontend-nanodegree-styleguide/index.html), and [Javascript guide and documentation](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html) for the project.

I also use [jsdoc](http://usejsdoc.org/about-getting-started.html) for my code documentation. This is my first time of using *jsDoc* and I'm very happy for the understanding got in the end concerning code documentation.The [generated documentation](jsdoc/index.html) for my code is save under the directory **jsdoc** of my project folder.

## Directory
I try to maintain a simple directory structure and names for the memory game project. Below is the tree-like structure of the project directory:
```
memoryCardGame
  |-css
  |--|-style.css
  |-img
  |--|-logo.jpg
  |-js
  |--|-script.js
  |-jsdoc
  |--|-symbols
  |-----|-src
  |--------|-js_script.js.html
  |-----|-_global_.html
  |--|-files.html
  |--|-index.html
  |-index.html
  |-README.md
  ```

## Dependencies
In as much as I really tried to avoid using frameworks, I couldn't escape [FontAwesome](https://fontawesome.com/). All the I mages I used for the Memory card game are totally from them and so my game wholly depend on the [FontAwesome](https://fontawesome.com/)

## Experience
I gained a lot of experience during the memory card game project. Not only do I learnt how to manipulate the DOM with Javascript but I also have the feeling that I can now build an interactive web page, and a game at that. There is this feeling of achievement and gladness that overwhelms my heart, The feeling that I have been look for long time. I can now gladly pick up a static sweb age and make it dynamic using lessons I learned during the project.

## Appreciation
All thanks to [Google](www.google.com), [ALC](https://andela.com), and [Udacity](www.udacity.com) for giving me such a wonderful opportunity to learn _**Frontend Web Development**_. This little that I know now has really given my career a new shape of great hope. Thank you so much. You guys are the best.

Much love :)

## Contributing
This repository contains one of the *Front-End Web Developer's* projects for the [Udacity Nanodegree Programeme](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). Therefore, I most likely will not accept pull requests.

## Reference
* [Conditional (ternary) Operator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
* [Destructuring assignment - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Arrow functions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Array.from() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
* [CSS Grid - Wes Bos](https://cssgrid.io/)
* [Markdown - Web](https://masteringmarkdown.com/)
* [Getting started with JsDoc](http://usejsdoc.org/about-getting-started.html)
* [CSS 2D Transforms - W3school](https://www.w3schools.com/css/css3_2dtransforms.asp)
* [Location reload() Method - W3school](https://www.w3schools.com/jsref/met_loc_reload.asp)
* [Autoprefixer CSS](http://autoprefixer.github.io)
* [FontAwesome](https://fontawesome.com/)

## License
**_Theshedman/memory-card-game_**  is licensed under the

**_MIT License_**. [Learn More](LICENSE)
