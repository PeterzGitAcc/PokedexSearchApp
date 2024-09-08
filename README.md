# Pokemon Pokedex search app

https://github.com/user-attachments/assets/9a0c995e-ff24-4e36-81d0-31cf044acc0f

This is a simple pokedex search app made using Vue3 , Vue Router and Axios to GET relevant data from https://pokeapi.co/api/v2/*

Axios automatically transforms the data returned from the server, parsng the data to a JavaScript object. The data response provided by the server can be accessed within the data object

Using Bootstrap library also simplifies styling for different viewport sizes using container and col presets


Unit tests have also been implemented using JestJS

## Design Considerations
Consistency and standards (Cards and pokedex gallery)

Error prevention (no results found = warn user)

Minimalist design (After user clicks on pokemon , details appear)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## How to use

- On the starting page , click on `pokedex`

- In the `pokedex` page: 
    - Click on the card to find out more
    - Search for a pokemon and click on the card to find out more 
