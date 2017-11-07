# 🌟 Tu Primera Aplicación de Angular 🌟

## 3. Event binding 😎

Event binding nos permite añadir eventos a elementos o componentes. Por ejemplo: `click`, `keyup`, entre otros ✌️

Empecemos añadiendo nuestro primer evento:

1. Ve a `app.component.html` y borra todo el contenido excepto nuestro propio componente: `app-my-component`.

2. Ahora creemos un botón en `my-component.component.html` : `<button>Click me</button>` y verifica en el navegador 👌

3. Ve a tu archivo `my-compomponent.component.ts` y crea una nueva variable llamada **count** inicializándola en **0**: `count = 0;`

4. Bien, ésta es tu primera misión: Usa **String Interpolation** para mostrar la nueva variable. 🤡 Qué empiece el juego.. 🤡

Acabaste? Muy bien! Sabía que podías! 💪

5. Es momento de añadir nuestro evento. Ve a nuestro botón y actualízalo así: `<button (click)="count = count + 1" >Click me</button>`

6. Ve al navegador y prúebalo!

Funcionó? Fue fácil? Cooool! 🎉🎉🎉

## Has terminado, ahora ve al [Branch #4](https://github.com/angular-medellin/learn/tree/4)
