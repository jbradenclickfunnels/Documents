# Testcafe Training

## Table of Contents
* [Introduction](#introduction)
* [Technologies](#technologies)
* [Project Status](#project-status)
* [Sources](#sources)
* [Setup](#setup)
* [Launch](#launch) made a change



## Introduction
Hello and welcome to the Testcafe Training project! 

I wanted to create this project as a way to help myself in my career by building skillsets with recording videos, speaking to an empty room, and to keep my knowledge with Testcafe up to date, while finding additional features I haven't needed to implement into my existing projects yet.

While doing so, I thought it would be a good idea to make my training public, so anyone could have a source to help them during their educational journey.

This project has discussions and issues enabled, so if you have any questions about a feature or find a bug in the repository that needs to be squashed, please feel free to interact and I'll respond as soon as possible!

## Technologies
- Visual Studio Code
- Node JS
- NPM
- TestCafe using js
- JSON
- Markdown

## Sources
* [Official Testcafe Site](https://www.testcafe.io)
* [Stack Overflow With Testcafe Tag](https://stackoverflow.com/questions/tagged/testcafe)
* [Markdown Syntax](https://www.markdownguide.org/basic-syntax/)
* [Bulldog Job (For README guidance)](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## Setup
1. Install [Node.js](https://nodejs.org/en/download/)
    1. This will also install [NPM](https://docs.npmjs.com/about-npm)
2. In order to install all project dependencies:

```
npm install
```
3. To verify all dependencies have been installed and which versions:
```
node --version
npm --version
testcafe --version
```
## Launch
1. To kick off the test folder:
```
testcafe ./tests/<FOLDER>
```
2. To kick off a test file:
```
testcafe ./tests/<FOLDER>/<FILE>
```
3. To kick off a specific test:
```
testcafe -t '<TEST NAME>'
```