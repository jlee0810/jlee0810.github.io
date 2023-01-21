---
date: '2022-01-03'
title: 'Javascript  Sync/Async'
categories: ['JavaScript', 'Web']
summary: 'Explanation for various asynchronous methods in JS.'
thumbnail: './test.png'
---
### JS as a language

Javascript is a synchronous, blocking, single-threaded language. Basically means that there can only be one process at a single time. Therefore, it's slow when it comes to handling multiple requests. The solution to this is manipulating JS to _**behave**_ in an **_asynchronous_** way.

<p align = "center"><img src= "https://velog.velcdn.com/images/jlee0810/post/be79f921-7567-4e3f-a9ae-fad8b94b8556/image.png" width="70%" height="70%"> </p>

Running asynchronously allows for simultaneous processing of various tasks without stopping the workflow. It also allows other functions to be called in the process of waiting.

<p align = "center"><img src= "https://velog.velcdn.com/images/jlee0810/post/38ece6e9-2f5c-46c4-b9fd-e2565550b797/image.png" width="70%" height="70%"> </p>

### Methods
### Asynchronous Callbacks

> The earliest and most straightforward solution to being stuck in the synchronous world is using asynchronous callbacks (think setTimeout()).<br/>
> Let’s use a database request as an example: asynchronous callbacks allow you to invoke a callback function which sends a database request (and any other nested callbacks) off to your app, where it waits for a response from the database, freeing up the rest of your code to continue running.

<p align = "center"><img src= "https://velog.velcdn.com/images/jlee0810/post/e840961f-61ab-413c-8f3b-f7a37febb1d7/image.png" width="70%" height="70%"> </p>

Asynchronous callbacks are valid solutions but since we do not know when `func c` will return all dependent fucntions/code must be nested inside `func c`.

This act of nesting often results in a phenomenon called "callback hell"

<p align = "center"><img src= "https://velog.velcdn.com/images/jlee0810/post/380156bd-1a86-48e8-8d75-e97269616a60/image.png" width="90%" height="90%"> </p>

However, this is a pain to read and others to interpret what is going on.

### Promise

The solution to callback hells is a `promise`. Unlike async callbacks, `promises` instead bundles all dependencies into one code block and is able to be separated.

<p align = "center"><img src= "https://velog.velcdn.com/images/jlee0810/post/28b9d5b9-76dd-434f-aa82-585b92747911/image.png" width="70%" height="70%"> </p>

Now we can send the async callback `func c` and use `.then()` to hold all other dependencies and run them only when `func c` returns.

<p align = "center"><img src= "https://velog.velcdn.com/images/jlee0810/post/929e85ed-afe3-42c5-9fbb-f65083c78d81/image.png" width="90%" height="90%"> </p>

<p align = "center"><img src= "https://velog.velcdn.com/images/jlee0810/post/3d4ba3b6-9092-492e-b413-83be56502cfd/image.png" width="90%" height="90%"> </p>

`resolve` is automatically executed when a new `Promise` is created. The executor argument `resolve`, `reject`, is a callback provided by JavaScript itself.

If you want to do more use `.then()` to run your desired method. `.then()` will run when the code succeeds and `.catch()` runs when there is an error.

### async/await

Every async function returns a promise, and await functions act/functions as a promise.

<p align = "center"><img src= "https://velog.velcdn.com/images/jlee0810/post/1ead83a4-4de7-4223-a8c4-ff7f24230e93/image.png" width="90%" height="90%"> </p>

**async**
`async` has the function return a promise

**await**
When the function meets an `await` it waits for the promise to be processed.

**Example**

<p align = "center"><img src= "https://velog.velcdn.com/images/jlee0810/post/648a23b5-200c-46bc-86d2-1d56dbf79218/image.png" width="90%" height="90%"> </p>

To handle errors async & await uses try-catch

<p align = "center"><img src= "https://velog.velcdn.com/images/jlee0810/post/eb5b6e63-691b-417a-979d-569b297a1a80/image.png" width="90%" height="90%"> </p>
