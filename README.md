# 🌟 Tu Primera Aplicación de Angular 🌟

## 1. String interpolation 🎒

Tu aplicación está corriendo y funcionando. Bien 👌, ahora es momento de empezar a hacer algunos cambios:

Una las funcionalidad más geniales de Angular se llama **string interpolation**. Ésta te permite enlazar tus variables a tu vista. Así que empecemos:

1. Abre el archivo `app.component.ts`.
2. Encuentra la variable `title` y reemplaza sus contenidos con algo como: `"my application"`
3. Guarda el archivo y verifica que el resultado se ve reflejado en el navegador 👌👌👌

Ahora hagamos algo más riesgoso:

4. Agreguemos otra variable a tu archivo `app.component.ts` llamada `author`. 
5. Asígnale tu nombre así: `author = 'Laura Ciro';`
6. Guarda el archivo y ve al navegador para asegurarte que sigue funcionando.

Al parecer todo sigue funcionando pero nuestra variable no se está mostrando 😢
Bueno, es porque necesitamos agregarla a la vista 😅

7. Ve a al archivo `app.component.html` y agrega lo siguiente a la etiqueta `h1`: `Welcome to {{title}} by {{author}}`

5. Ve al navegador y asegúrate que está allí! 💕

## Has terminado! 🎉🎉🎉 Ahora ve a el [Branch #2](https://github.com/angular-medellin/learn/tree/2)
