# 🌟 Tu Primera Aplicación de Angular 🌟

## 2. Creación de Componentes

Así que ya aplicaste **String Interpolation** a nuestra aplicación 😏 Ahora es momento de ahondar un poco más. Empecemos creando nuestro propio componente 📦

1. Abre la terminal y navega a la carpeta donde está nuestra aplicación
2. Allí, corre el comando: `$ ng generate component myComponent`
3. Notarás como la terminal nos dice que se han creado 4 archivos y actualizó. Echales un ojo.

![Output](output.png)

**Un componente(component.ts) está generalmente constituido de estilos(css), una vista(html) y pruebas unitarias(specs.ts).**

La **vista** tiene algo así por defecto: `<p>my-component works!</p>`

4. Ahora, abramos nuestro componente: `my-component.component.ts`
5. Presta atención a la etiqueta que aparece en la propiedad `selector`, debe tener algo así: `app-my-component`

> El `selector` es la etiqueta que puedes utilizar para renderizar tu componente dentro de una vista.

Así que ahora que conocemos nuestro `selector` podemos utilizarlo en nuestro componente `app`(**el primer componente en el que trabajamos**).

6. Ve a `app.component.html` agrega lo siguiente: `<app-my-component></app-my-component>`
7. Verifica en el navegador! 💕

## Has terminado 🎉🎉🎉, ahora ve al [Branch #3](https://github.com/angular-medellin/learn/tree/3)
