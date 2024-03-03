# Grafana overview <!-- omit in toc -->

## Contents <!-- omit in toc -->

- [1. Node.js](#1-nodejs)
  - [1.1. Introduction](#11-introduction)
  - [1.2. Architecture](#12-architecture)
  - [1.3. Core Modules](#13-core-modules)
  - [1.4. Lifecycle](#14-lifecycle)
  - [1.5. Streams \& Buffers](#15-streams--buffers)
  - [1.6. Single Thread, Event Loop \& Blocking Code](#16-single-thread-event-loop--blocking-code)
  - [1.7. The Event Loop](#17-the-event-loop)
  - [1.8. Asynchronous Code](#18-asynchronous-code)
  - [1.9. REPL vs Using Files](#19-repl-vs-using-files)
    - [1.9.1. Running Node.js Code](#191-running-nodejs-code)
  - [1.10. Global Features vs Core Modules vs Third-Party Modules](#110-global-features-vs-core-modules-vs-third-party-modules)
- [2. JavaScript](#2-javascript)
  - [2.1. Classes](#21-classes)
    - [2.1.1. Properties \& Methods](#211-properties--methods)
  - [2.2. Spread \& Rest Operators](#22-spread--rest-operators)
  - [2.3. Destructuring](#23-destructuring)
- [3. NPM](#3-npm)
  - [3.1. 3rd Party Packages](#31-3rd-party-packages)
- [4. Debugging](#4-debugging)
  - [4.1. Types of Errors](#41-types-of-errors)
  - [4.2. Debugging](#42-debugging)
- [5. Express.js](#5-expressjs)
  - [5.1. What and Why?](#51-what-and-why)
  - [5.2. What Does Express.js Help You With?](#52-what-does-expressjs-help-you-with)
  - [5.3. Middleware](#53-middleware)
- [6. Sequelize](#6-sequelize)
- [7. Mongoose](#7-mongoose)
- [8. Deno](#8-deno)
  - [8.1. Introduction](#81-introduction)
  - [8.2. Deno vs Node.js](#82-deno-vs-nodejs)
- [9. Packages](#9-packages)
- [10. Commands](#10-commands)

# 1. Node.js

## 1.1. Introduction

- What is Node.js?
  - **A JavaScript Runtime.**
  - **"JavaScript on the Server"**
- Node.js is a different version of javascript.
- It allows to run javascript code on the server, in theory not just on the server but on any machine though.
- Node.js to run javascript outside of the browser.
  - Node.js uses V8 and V8 simply is the name of the javascript engine built by Google that runs javascript in the browser.

![General diagram](Images/NodeJSDiagram.png)

## 1.2. Architecture

![Architecture](Images/NodeJSArchitecture.png)

## 1.3. Core Modules

- Node.js ships with multiple core modules (`http`, `fs`, `path`, ...).
- Core modules can be imported into any file to be used there.
- Import via `require("<module_name>")`.
  - `http` - Launch a server, send requests.
  - `https` - Launch a SSL server.
  - `fs` - Work with the file system.
  - `path` - Handle paths elegantly.
  - `os` - Get OS information.

## 1.4. Lifecycle

![Lifecycle](Images/NodeJSLifecycle.png)

## 1.5. Streams & Buffers

- Parse request data in chunks (Streams & Buffers).
- Avoid "double responses".

![Streams & Buffers](Images/StreamsAndBuffersIncomingRequest.png)

## 1.6. Single Thread, Event Loop & Blocking Code

- Node.js runs non-blocking JS code and uses an event driven code ("Event Loop") for running your logic.
- A Node program exits as soon as there is no more work to do.
- Note: The createServer() event never finishes by default.

![Single Thread](Images/NodeJSSingleThread.png)

## 1.7. The Event Loop

![The Event Loop](Images/NodeJsTheEventLoop.png)

## 1.8. Asynchronous Code

- JS code is non-blocking.
- Use callbacks and events => Order changes!

## 1.9. REPL vs Using Files

- The REPL (Console)
  - `Read` - Read User Input.
  - `Eval` - Evaluate User Input.
  - `Print` - Print Output (Result).
  - `Loop` - Wait for new Input.

### 1.9.1. Running Node.js Code

- **Execute Files**
  - Used for real apps.
  - Predictable sequence of steps.
- **Use the REPL**
  - Great playground!
  - Execute code as you write it.

## 1.10. Global Features vs Core Modules vs Third-Party Modules

- **Global features**
  - Keywords like const or function but also some global objects like process.
  - **Global features** are **always available**, don't need to import them into the files where you want to use them.
- **Core Node.js Modules**
  - Examples would be the file-system module `("fs")`, the path module `("path")` or the Http module `("http")`.
  - **Core Node.js Modules** don't need to be installed (**NO** `npm install` is required) but you **need to import them** when you want to use features exposed by them.
  - Example:
    `const fs = require('fs');`
    - You can now use the fs object exported by the "fs" module.
- **Third-party Modules**
  - **Third-party Modules need to be installed** (via `npm install` in the project folder) AND imported.
  - Example (which you don't need to understand yet - we'll cover this later in the course):
  ```
    // In terminal/ command prompt
    npm install --save express-session
    // In code file (e.g. app.js)
    const sessions = require('express-session');
  ```

# 2. JavaScript

## 2.1. Classes

- Basic structure
  ```
    class Person {
      name = "Jefté"
      call = () => {...}
    }
  ```
- Usage
  ```
    const person = new Person()
    person.call()
    console.log(person.name)
  ```
- Inheritance
  ```
    class Person extends Master
  ```

### 2.1.1. Properties & Methods

- Properties are like "variables attached to classes/ objects".
  - **ES6**
    ```
      constructor () {
        this.myProperty = "value"
      }
    ```
  - **ES7**
    ```
      myProperty = "value"
    ```
- Methods are like "functions attached to classes/ objects".
  - **ES6**
    ```
      myMethod () { ... }
    ```
  - **ES7**
    ```
      myMethod = () => { ... }
    ```

## 2.2. Spread & Rest Operators

- **Spread**
  - Used to split up array elements OR object properties
  ```
    const newArray = [...oldArray, 1, 2]
    const newObject = { ...oldObject, newProp: 5 }
  ```
- **Rest**
  - Used to merge a list of function arguments into an array
  ```
    function sortArgs(...args) {
      return args.sort()
    }
  ```

## 2.3. Destructuring

- Easily extract array elements or object properties and store them in variables.
- **Array Destructuring**
  ```
    [a, b] = ["Hello", "Jefté"]
    console.log(a) // Hello
    console.log(b) // Jefté
  ```
- **Object Destructuring**
  ```
    {name} = {name: "Jefté", age: 28}
    console.log(name) // Jefté
    console.log(age) // undefined
  ```

# 3. NPM

- npmstands for "Node Package Manager" and it allows you to manage your Node project and its dependencies.
- You can initialize a project with `npm init`.
- npmscripts can be defined in the `package.json` to give you "shortcuts" to common tasks/ commands.

## 3.1. 3rd Party Packages

- Node projects typically don’t just use core modules and custom code but also third-party packages.
- You install them via npm.
- You can differentiate between production dependencies `(--save)`, development dependencies `(--save-dev)` and global dependencies `(-g)`.

# 4. Debugging

## 4.1. Types of Errors

- **Syntax**, **runtime** and **logical errors** can break your app.
- Syntax and runtime errors throw (helpful) error messages (with line numbers!).
- Logical errors can be fixed with testing and the help of the debugger.

## 4.2. Debugging

- Use the VS Code Node debugger to step into your code and go through it step by step.
- Analyze variable values at runtime.
- Look into (and manipulate) variables at runtime.
- Set breakpoints cleverly (i.e. respect the async/ event-driven nature).

# 5. Express.js

## 5.1. What and Why?

- Server Logic is Complex!
- We want to focus on your Business Logic, not on the nitty-gritty Details!
- Use a Framework for the Heavy Lifting!
- **Framework:** Helper functions, tools & rules that help you build your application!

## 5.2. What Does Express.js Help You With?

- Parsing Requests & Sending Responses
  - Extract Data
  - Render HTML Pages
  - Return Data / HTML Responses
- Routing
  - Execute different Code for different Requests
  - Filter / Validate incoming Requests
- Managing Data
  - Manage Data across Requests (Sessions)
  - Work with Files
  - Work with Databases

## 5.3. Middleware

![ExpressJS](Images/ExpressJSMiddleware.png)

# 6. Sequelize

# 7. Mongoose

# 8. Deno

## 8.1. Introduction

- Node = Deno
- An alternative to Node.
- Deno is a JavaScript Runtime based on Chrome's V8 JavaScript Engine.
  - Allows run JavaScript outside of the browser.
- Deno supports **JavaScript** & **TypeScript**.
- Deno support **URL imports** and **modern JavaScript features** (e.g. Promises).
- Deno is "secure by default" and requires explicit execution permissions.

## 8.2. Deno vs Node.js

| Deno                                                                                                                                        | Node.js                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| TypeScript support, modern JS features, URL imports, script permissions.                                                                    | Only JavaScript, modern JS features are missing, custom module system no script permissions.                             |
| Pretty new, small ecosystem, not used in production by major companies yet, smaller base of maintainers, not really used in production yet. | Established, highly active ecosystem, used by thousands of (big) companies, huge base of maintainers, production-proven. |

# 9. Packages

- Nodemon
  - `npm install nodemon -g`
  - `npm install nodemon --save-dev`

# 10. Commands

- `npx gitignore node`
