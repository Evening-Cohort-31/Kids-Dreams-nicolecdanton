# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The Kids.js module contains the code that handles the click event listener. The Event listener looks for a click on objects with type = "child" in its dataset. If the dataset has type= "child", then the window alert displays showing the clicked object's "name" and "wish" (also from its dataset).

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > We are actually invoking the findCelebrityMatch function inside of a for..of loop that iterates the kids array. 
   The reason is because the findCelebrity match acts on each kid object individually in order to find the celebrity.id that matches its particular celebrityId. 
   
   The findCelebrityMatch() basically acts as a lookup function here and we want an answer for each kid individually.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > We have an event listener in CelebrityList.js
   The first thing the event lister is doing is it is looking out for any clicks on objects with type="celebrity" in its dataset. 
   
   When we create the Celebrity html in Celebrities(), we added state to the list items: type, name, id, and sport. 

   Once the event listener gets a applicable click, it surfaces a window alert showing a message of the clicked item's name and sport (from the dataset we added) in a message we crafted.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Here we start by targeting the DOM element with the id 'container'
   We then craft some HTML and assignn that to the variable applicationHTML. In crafting the HTML, we basically are creating the structure/scaffolding to hold the HTML we've created in the other modules. So those are getting invoked in here (meaning we also had to import them into main.js too). 
   Now that we have our HTML created and assigned to a variable, we inject it into our index document with mainContainer.innerHTML = applicationHTML
