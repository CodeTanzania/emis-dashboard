# Contributing to EMIS

:+1::tada: First of all, We would like to thank you for taking your time to contribute here :tada::+1:

The following is a set of guidelines for contributing to EMIS and its modules(packages),
which are hosted in the [codetanzania organization](https://github.com/CodeTanzania/) on GitHub. These are mostly guidelines and not rules.
Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

[What Should I know before I get started?](#what-should-i-know-before-get-started)

[How Can I Contribute?](#how-can-i-contribute)

[Styleguides](#styleguides)

- [Redux Actions](#redux-actions)
- [Project Structure](#project-structure)
- [CSS Class Names]()
- [Commit Messages]()
- [Layout Guide]()
- [Typography]()

### 1. Redux Actions <a name="redux-actions"></a>

I this project we have agreed to establish a standard to which we will use to write our redux actions. Inspired by [flux-standard-action](https://github.com/redux-utilities/flux-standard-action) the following convention was established;

Actions types names will be `ACTION(verb)_RESOURCE(noun)_STATE(status)`

e.g

- GET_PLANS_START
- GET_PLAN_START
- GET_USERS_SUCCESS
- GET_USERS_ERROR

> For the verbs we suggest to use http verbs if the action will trigger API client action, i.e GET,PUT,POST,DELETE, etc

```js
// action to start fetching users
{
  type: 'GET_USERS_START',
  meta: {
    page: 1,
    query: '',
    ... any other parameters needed for this action
  }
}
```

```js
// action to handle successful users fetching
{
  type: 'GET_USERS_SUCCESS',
  payload: {
    data: users
  },
  meta: {
      page: 1,
      total: 200,
      query: null,
      ... any other meta info needed
  }
}
```

```js
// action to handle error while fetching users
{
  type: 'GET_USERS_ERROR',
  payload: {
    data: error
  },
  error: true
}
```

For those actions which are not asynchronous, we recommend to use this convention `ACTION_VERB`

```js
{
 type: 'SELECT_USER',
 payload: {
   data: 3 // userid
 }
}
```

### 2. Project Structure <a name="project-structure"></a>

### 3. CSS Class Names

### 4. Commit Messages

### 4. UI Layout Guide

### 5. Project Typography
