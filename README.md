# Grafana overview <!-- omit in toc -->

## Contents <!-- omit in toc -->

- [1. Introduction](#1-introduction)
  - [1.1. Architecture](#11-architecture)
- [2. REPL vs Using Files](#2-repl-vs-using-files)
  - [2.1. Running Node.js Code](#21-running-nodejs-code)
- [3. JavaScript](#3-javascript)
  - [3.1. Classes](#31-classes)
    - [3.1.1. Properties \& Methods](#311-properties--methods)
  - [3.2. Spread \& Rest Operators](#32-spread--rest-operators)
  - [3.3. Destructuring](#33-destructuring)
- [4. NodeJS](#4-nodejs)
  - [4.1. Core Modules](#41-core-modules)

# 1. Introduction

- NodeJS is a different version of javascript.
- It allows you to run javascript code on the server, in theory not just on the server but on any machine though.
- NodeJS to run javascript outside of the browser.
  - NodeJS uses V8 and V8 simply is the name of the javascript engine built by Google that runs javascript in the browser.

![alt](Images/NodeJSOverviewDiagram.png)

## 1.1. Architecture

![alt](Images/NodeJSOverviewArchitecture.png)

# 2. REPL vs Using Files

- The REPL (Console)
  - `Read` - Read User Input.
  - `Eval` - Evaluate User Input.
  - `Print` - Print Output (Result).
  - `Loop` - Wait for new Input.

## 2.1. Running Node.js Code

- **Execute Files**
  - Used for real apps.
  - Predictable sequence of steps.
- **Use the REPL**
  - Great playground!
  - Execute code as you write it.

# 3. JavaScript

## 3.1. Classes

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

### 3.1.1. Properties & Methods

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

## 3.2. Spread & Rest Operators

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

## 3.3. Destructuring

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

# 4. NodeJS

## 4.1. Core Modules

- `http` - Launch a server, send requests.
- `https` - Launch a SSL server.
- `fs` - Work with the file system.
- `path` - Handle paths elegantly.
- `os` - Get OS information.
