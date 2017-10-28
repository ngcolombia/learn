# 🌟 Tu Primera Aplicación de Angular 🌟

## 4. Property binding 🎮

Property binding nos permite definir una propiedad a nuestros elementos o componentes ✌️

Empecemos a usarlo 🤡:

1. Ve a `app.component.html` y crea un elemento **img** como éste: `<img>`

2. Ninguna imagen debería mostrarse porque no hemos agregado el atributo `src`. En vez de agregarlo directamente, utilizaremos **property binding!**

3. Ve a tu `app.component.ts` y crea una variable llamada **imageSource**. Asígnale el siguiente contenido: `imgSource = './../favicon.ico';`

4. El útlimo paso es actualizar la etiqueta `img` así: `<img [src]="imgSource">`

Funcionó!? Coool 💪 Eso es todo! Es simple! 😁

## Tu misión 

Crea una etiqueta `input` y habilítala o desabilítala cuando se oprima un botón.

### Tips:

1. No olvides usar una variable para lograrlo. Yo la llamaría: `enabled`
2. Usa la propiedad `[disabled]`
3. Usa el event binding `click` para cambiar la variable!

Buena suerte! 🤡🤡🤡 y gracias por tu tiempo!

![Once there was a repository and you gave it a star](https://i.imgflip.com/1q7vwr.jpg)