# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](Screenshot%202023-11-21%20011937.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

The process was getting data from the API adviceslip figuring out what the data was then displaying the data I need to my page. 

I made a function for fetching Advice with axios

I used react query to know whether my request worked, to get the data before the page mounts and to refetch data when the user clicks on the dice button to give new advice. 

I display whatever data I get within my jsx and style from there. 

I used a useeffect to change my pattern image based on the screen width

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- TanstackQuery
- Axios

### What I learned

I learned the basics of reactquery and see the simplicity it adds to fetching and handling data from an API


### Continued development

I still plan to use React-query for fetching data in the future

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=8K1N3fE-cDs) - This helped me with understanding and learning the basics of react-query
- [Example resource 2](https://www.youtube.com/watch?v=r8Dg0KVnfMA&t=1381s) - This video was easier and more in depth 

## Author

- Website - [Yashwant Venkatesan](https://yashwanthvenkatesan.vercel.app/)
- Frontend Mentor - [@tigeryash](https://www.frontendmentor.io/profile/tigeryash)

## Acknowledgments

Thanks github copilot


