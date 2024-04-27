# Task List Documentation

## Purpose/Overview
To use the task list, import the relevant json file to be read into `jsonUpdater.js` file which will dynamically update the page to display the contents of the json file. It is important that the json file that is used follows the set format, as any invalid format will not display and will instead prompt the user to adjust the respective json file. Assuming a valid json file is provided, the task list will display the main titles/categories of each task, followed by subtask titles and their corresponding due date and description.


**Introduction:**
This is a simple task list widget that allows you to create separate lists with tasks under each list.
Each task has its own description and due date that can be initialized through user input.
This task lists’ main functionality is to jot down, categorize, and remind us of our important tasks with their due dates and details.
This enables us to worry less about trying to remember every task that is needed to be done in our lives.
It also helps organize our thoughts visually to most effectively map out which tasks need to be prioritized.

## Guide

[Index.html](index.html):

- This file contains the structure of the main page that displays the widget.

[Index.css](index.css):

- Responsible for styling the main page

[json_testing.json](json_testing.json):

- Tests the dynamic updating of html with javascript

[simple_tasks.json](simple_tasks.json):

- test json file for testing_script

[multiple_tasks.json](multiple_tasks.json):

- json file for jsonUpdater.js

[jsonUpdater.js](jsonUpdater.js):

- Updates main page with tasks from json file (user input)

[testing_script.js](testing_script.js)

- Tests function that reads in data from json file

## How to Setup/Demo

**Installation:**
Fork repo or download code separately and host locally.

**Configuration:**
Change details in json file or upload your own and change source of json file in javascript file. Which must be in the format of

**Example:** Pictures showing what a json file should look like, where to update the source of the script, etc.

## Testing
The of our product that was subject to change from the user was the input of the json file which in turn was the focus of our testing.

**Correctly formatted file:**  It was important to check the expected case of a correctly formatted file which would result in each task being properly displayed on the web page.

**File with missing elements:** An error will be thrown prompting the user to provide a valid json file with the correct strucutre.
