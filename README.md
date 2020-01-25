# D3 basic charts

In this assignment you will create two custom chars: a bar chart and a line chart. Please look through all these materials so you understand how to run and organize your code.

Link to your github pages website: `insert link here`

## Aim of the assignment

In this assignment you will create a bar chart and a line chart in D3.

## Plot requirements:

**Type**: ​One plot has to be a bar chart, and the other plot has to be a line chart.

**Data**: ​In this assignment we give you the chance to find and select your own data. It can be related to your research, a subject of interest, a hobby, etc. Per the write-up instructions, please describe the data, why you chose it, and where it came from.
*Please submit a copy of the raw data in your repository.*

**Color**: ​Both plots must include color as a channel to encode some data.

**Interaction**: ​The expectation is that these plots are static except for the following requirement: at minimum one of your two plots should have a “details on demand” interaction, i.e., mouseover or click on bar/line to retrieve and display value.

**Overall excellence**: Make sure your plots follow the design guidelines and rules of thumb discussed in the reading as well as lecture. Comment your code: Please make sure to add copious comments to your code to demonstrate your understanding of how your code works. Points will be deducted for little or no comments. Please submit your webpage with answers to the following questions for ​each plot (a few sentences for each is sufficient):

1. Please explain the dataset you choose to use and why you chose it.
*Make sure to include a link to the original data source and include a copy of the data with your submission.*
2. Please justify your encoding (i.e., bar, line) type for the data you plot and why it is appropriate.
3. Please state for each plot what colormap you used (categorical, diverging, sequential) and why. The colormaps used should make sense and follow the guidelines discussed in the reading as well as lecture.
4. Please discuss the perceptual principles at play in your plot (e.g., pop-out effects, color theory, etc.) and how they positively support or enhance your plot.

*NOTE: You are welcome to use D3 tutorials or resources as a starting point for your code. However you must cite and reference the resources or sample code you use. Failure to properly cite and attribute code is a breach of academic honesty . Also, per our syllabus, homework is an individual assessment and should be completed alone. You are welcome to ask fellow classmates and students for help and discuss the assignment, but the submission should be your own work.*

## Resources:

*NOTE: there are different versions of d3, so make sure that the tutorials that you are using are up to date.*   
https://d3js.org (Links to an external site.)   
https://github.com/d3/d3/wiki/Gallery (Links to an external site.)   
https://github.com/d3/d3/wiki/Tutorials (Links to an external site.)   
https://leanpub.com/D3-Tips-and-Tricks/read (Links to an external site.)     

## Setup

**Under no circumstances should you be editing files via the GitHub user interface.** Do all your edits locally after cloning the repository.

1. Clone this repository to your local machine. E.g., in your terminal / command prompt `CD` to where you want this the folder for this activity to be. Then run `git clone <YOUR_REPO_URL>`

1. `CD` or open a terminal / command prompt window into the cloned folder.

1. Start a simple python webserver. E.g., one of these commands:
    * `python -m http.server 8000`
    * `python3 -m http.server 8000`
    * `py -m http.server 8000`

    If you are using Python 2 you will need to use `python -m SimpleHTTPServer 8000` instead, but please switch to Python 3 as [Python 2 will be sunset on 2020.01.01](https://www.python.org/doc/sunset-python-2/).

1. Wait for the output: `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)`

1. Now open your web browser (Firefox or Chrome) and navigate to the URL: http://127.0.0.1:8000

## Organization

### Root Files
* `README.md` is this explanatory file for the repo.

* `index.html` contains the main website content.

* `style.css` contains the CSS.

* `LICENCE` is your source code license.

### Folders
Each folder has an explanatory `README.md` file.

* `data` holds the data file for the visualization, `texas.json`.

* `favicons` contains the favicons for the web page. You shouldn't change anything here.

* `js` will contain all JavaScript files you write. E.g.,

  * `main.js` is the js code that you will have to fill in.

* `lib` will contain any JavaScript library you use. It currently includes D3.

## Instructions

You will be creating a new table that is connected to the existing scatterplot and line chart using brushing and linking.
Make your edits and commit major versions to your git repository.
**Under no circumstances should you be editing files via the GitHub user interface.**

1. In `README.md` (this file) update the URL above with your actual GitHub pages URL.

2. In `index.html` update the GitHub repo URL with the URL of your repository. It is in the span with `id="forkongithub"`.

3. Add any necessary CSS to `style.css` for displaying your table.

4. Add code to `js/main.js` to create your table in the appropriate `<div>`. You are free to add more js files as you see fit.

5. Ensure your code passes the [W3 validator](https://validator.w3.org/).

## Submission Instructions

1. Submit a URL to your GitHub Page (same as the link you edited at the top) to [the associated assignment on Canvas](https://canvas.instructure.com/courses/1781732/assignments/13383358).

### Function/method chaining

D3, and this exercise, use [function chaining](https://en.wikipedia.org/wiki/Method_chaining) to apply several changes to the same visualization.

You don't have to use chaining.
E.g., instead of this:
```js
d3.select("body")
  .append("p")
    .text("Hello, world!");
```
you can write:
```js
var body = d3.select("body");
var p = body.append("p");
p.text("Hello, world!");
```

### JS statements: let vs. var vs. const

To make our code more modular, reusable, and error-free we are limiting variable scope to the relevant parts of the code.
In part, we do this by using [`let` statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) instead of [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) by default so as to not set global variables.
We are also using [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) to create read-only references.

### ES6 Arrow functions `=>`

Note that this exercise uses the [ES6 Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
E.g., instead of writing `function(d){ return d.name; }` we write `d => d.name` or `d => { return d.name; }`. We would use the latter version with surrounding `{...}` when we need multiple lines of code vs. just a simple expression.

# Submission instructions:

  - Ensure all visualization and prose required above is present in your webpage.
  - Submit the page on Canvas.
  - Make sure to include the data in your repository.

