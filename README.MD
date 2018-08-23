# Simple Vuex mutations

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/lolitaframework/vuex-mutations/master/LICENSE)

This plug-in saves the state of your app in the local storage and simplifies the development of mutations.

## Installation

Install through npm:
```
npm install --save vuex-mutations
```

## Usage

Use it in your app like so:

```javascript

import VuexMutations from 'vuex-mutations';
Vue.use(Vuex)

export default new Vuex.Store(
  VuexMutations({
    state: {
      user: { asd: 1 },
      some_data: 123
    },
  })
);

```

```javascript

this.$store.commit('someData', 'new some data value');
this.$store.commit('user', { new: 'user' });

```