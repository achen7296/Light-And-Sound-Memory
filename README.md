# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Andrew Chen**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/silver-dusty-streetcar

## Required Functionality

The following **required** functionality is complete:

* [✓] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [✓] "Start" button toggles between "Start" and "Stop" when clicked. 
* [✓] Game buttons each light up and play a sound when clicked. 
* [✓] Computer plays back sequence of clues including sound and visual cue for each button
* [✓] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [✓] User wins the game after guessing a complete pattern
* [✓] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [✓] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [✓] Buttons use a pitch (frequency) other than the ones in the tutorial
* [✓] More than 4 functional game buttons
* [✓] Playback speeds up on each turn
* [✓] Computer picks a different pattern each time the game is played
* [✓] Player only loses after 3 mistakes (instead of on the first mistake)
* [✓] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [✓] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [✓] List anything else that you can get done to improve the app!

Implemented visual timer to see how much time is remaining with changing colors depending on how much time is left. Reformatted the contents of website to the center. Added winning and losing pictures. Implemented visual counter for amount of strikes

## Video Walkthrough
Here's a walkthrough of implemented user stories:
![https://recordit.co/8mPxMp0htI]


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

The resources I used to complete the submission was:
W3schools.com
Youtube.com
Stackoverflow.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  A big challenge that I had to overcome was the implementation of the timer with the loading bar. The visual timer was extremely difficult because not only does it act as the timer, the visual bar needed to be 
corresponding to the time left. The link between the visuals and backend was for sure the most difficult part in this project. The biggest issue I had was uniting the actual timer with the visual bar. 
As users continued guessing the patterns correctly, the bar for the last pattern would not disappear but be overlapped with a bar for the current pattern until the timer for the old pattern ran out. I figured 
out that the reason for all the bars showing up was due to the unaccounted setInterval instances, this was when I had the idea to create the resetTimer function. The resetTimer function solved many issues as it would be 
called whenever the pattern is finished, hence ceasing the old pattern and starting a new timer for the new pattern simultaniously stopping the multiple bars overlapping. Having solved the front end issue with the resetTimer 
function I then needed to figure out where I should place the resetTimer in the backend. I first tried to add the function to the lightButton function, but It quickly led to problems as after each iteration another tile including 
the ones previous would be lit, restarting the timer a couple times before actually starting. I solved this issue by figuring out that the timer is only started if the sequence of guesses for the current pattern is correct so 
I added the function right after the program checks if the user has matching guesses and patterns. With this in mind the only thing that the program needs is starting the first iteration of the timer to finish the implementation, 
so I just added resetTimer to the start button.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I am certainly not an expert in the field of web development and I would love to expand my knowledge in this field as I find it very enjoyable. One question I have is what type of security should web developers deploy and how 
should web developers secure their applications, I know for my application most of my code is in plain text, so any malicious actor could take advantage of my program and find unprotected data such as my generated pattern. Another 
question that I have is as the web development field constantly develops, how should one keep up with the constant updates and new technologies being developed on a daily basis? Is web development exclusive to front end development
or does it include working with backend functions such as databases and servers? My last question is while creating web applications, how can we ensure that the web app with be dynamically fitting for different devices.
Ex: Phone, Tablet, Desktop, Laptop


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

My project is certainly not perfect, but I am happy for what I was able to accomplish. The main concern I have with this version of the product is that the timer starts prematurely, before the user is even able to see the next 
tile that would be lit up. If I had more time I would implement a type of flag to indicate the end of each pattern iteration and have the timer start from there. I also disliked the overall UX design of my project, it was very bare
and I feel that if I had more time I would be able to focus on the colors and especially the format of the web app for a more friendly UX. The solution to that would simply be trying out different colors and formats until I 
arrive to a template where I am happy, but not matter how good the UX is, the backend in my opinion is holds highor priority as it is the core functionality of the application. Another feature I would like to implement would be an
"endless" mode for the game and have a leaderboard for the top scores. Each instance of the program would track the score of the user and store that information in a database where it could compare other scores.


## License

    Copyright Andrew Chen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
