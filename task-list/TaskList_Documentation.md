# Task List Documentation

## Purpose/Overview

**Intro:** This is a simple task list widget that allows you to create separate lists with tasks under each list.
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
