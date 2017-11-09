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

Como puedes ver, podemos ejecutar código de typescript en el evento `(click)` ... Pero se ve un poco mal, no crees? :no_mouth:
Vamos a mejorarlo un poco...

7. En el archivo `my-component.component.ts` vamos a crear una función llamada `add()` y en ella vamos a colocar el contenido que teníamos en el evento `(click)` del botón. 
Pista: Recuerda que en los controladores, las variables las debemos llamar como `this.nombreDeLaVariable`

8. Ahora vamos a cambiar el contenido del evento `(click)` en el botón por `(click)="add()"`

9. Ahora prueba en tu navegador, nada debería cambiar :heartpulse:

Funcionó? Fue fácil? Cooool! 🎉🎉🎉

## Has terminado, ahora ve al [Branch #4](https://github.com/angular-medellin/learn/tree/4)
