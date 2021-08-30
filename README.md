# Introduccion-a-ReactJs

Link del Proyecto: https://moonmakers-tareas.netlify.app/

## Componentes vs Elementos

En React hay varias formas de crear un elemento:

- **Con clases**: Actualmente no se usa

```js
  class Componenete extends React.Components {
	render() {
		return (
			//Codigo
		)
	}
}
```

- **Con React.createElement**: Se sigue usando. Es opcional

Sintaxis: _React.createElement(elemento, atributos, texto/contenido)_
En el elemento se colocaran el nombre de las etiquetas HTML. Ejemplo, h1, h2, p, form,…

En los atributos se colocaran los atributos de las etiquetas, es decir, id, class, placeholder,…

En texto o contenido se coloca contenido que va dentro de la etiqueta. Es decir, <h1>este contenido</h1>

Veamos con un ejemplo:

```Js
const ejemplo1 = React.createElement('h1', {'id': 'title'}, 'Oli React')

const ejemplo2 = React.createElement(
	'p',
	{
		'id': 'paragraph-elemental',
		'class': 'paragraph'
	},
	'Oli React'
)
```

En el ejemplo 1, lo que hice fue colocar el ejemplo de Juan que mostró en el video.

En el ejemplo 2, lo que hice fue colocar un ejemplo parecido, solo que le di una lectura más legible para los casos que tengamos que colocar más atributos y no se nos complique la lectura al tener esto:

```js
const ejemplo2 = React.createElement(
  "p",
  { id: "paragraph-elemental", class: "paragraph" },
  "Oli React"
);
```

Ambas versiones del ejemplo 2 son validas, solo es cuestión de que la persona lea mejor el código.

- **Con Funciones**: Se usa actualmente y es más cómodo que usar React.createElement()

```js
function Componente = () => {
	return(
		//Codigo
	)
}
```

`ReactDOM.render(qué_elemento, dónde)` se encarga de renderizar el elemento y colocarlo en el dom. Se pasa por por parametro el elemento a colocar en el DOM y en dónde se quiere colocar

Esto es un componente:

```js
//Componente
const Componente = () => {
	return (
		//Codigo
	)
}
<Componente />
```

Este es un elemento:

```js
//Elemento
<h1>Dorime</h1>
```

Nota: Los componentes son una version traducida de los elementos en HTML a Javascript (JSX).

## Props vs Atributos

Cuando estamos trabajando con React, para definir el atributo **class**, no usamos class sino **className**. React te puede aceptar **class** como atributo, pero luego te saldrá advertencias y, de paso, es una mala práctica

Las propiedades las podemos recibir de los parametros de los componentes. Ejemplo:

```js
<App nombre="Dorime">
```

```js
const App = (props) = {
	return (
		<p>{props.nombre}</p>
	)
}
```

Tambien podemos recibir children que vienen entre el contenido del Componente.

```js
<App>
  <p>Dorime, Ameno</p>
</App>
```

```js
const App = (props) = {
	return (
{props.children}
	)
}
```

## Local storage VS Session Storage🥳

La principal diferencia entre estas dos, es que el Local Storage no tiene una fecha de expiración y está disponible en la web que estamos desarrollando de forma global. 💯 Lo interesante del Session Storage es que solo esta disponible ventana actual en la que estamos navegando y solo son accesibles para el dominio actual. 🔐

## API de almacenamiento web

- **localStorage**: guarda la información en memoria incluso cuando el navegador se cierre y se reabra.

- **sesionStorage**: uarda la informacion en memoria mientras dure la sesión de la página.

- **Storage.setItem()**
  cuando recibe un nombre y valor, lo almacena o actualiza si ya existe.

Ejemplo:

```js
storage.setItem(nombre, valor);
```

- **Storage.getItem()**
  Devuelve el valor cuando le pasamos el nombre.

Ejemplo

```js
let userBackground = storage.getItem(userBackground);

// #000000
```

- **Storage.removeItem()**
  Elimina el valor almacenado cuando le pasamos el nombre:

Ejemplo

```js
let userBackground = storage.removeItem(userBackground);

// Queda el valor por defecto en caso que exista, por lo ejemplo un background blanco.
```

- **Storage.length**
  Devuelve un entero que indica el número de elementos guardados en el objeto ** Storage.**

Ejemplo

```js

function userSettings() {
  localStorage.setItem('userBackground', '#000000');
  localStorage.setItem('font', comic sans');
  localStorage.setItem('fontSize', '18');

  localStorage.length;

 // 3
}
```

- **storage.clear();**
  borra tareas los registros guardados en local.

## Manejo de efectos

🔂 Podemos enviar un array vacío para decirle a nuestro efecto solo se ejecute una vez, cuando recién hacemos el primer render de nuestro componente.

👂 O también podemos enviar un array con distintos elementos para decirle a nuestro efecto que no solo ejecute el efecto en el primer render, sino también cuando haya cambios en esos elementos del array.

🔁 Si no enviamos ningún array como segundo argumento de nuestro efecto, esta función se ejecutará cada vez que nuestro componente haga render (es decir, cada vez que haya cambios en cualquiera de nuestros estados).

❓ ¿Cuál de estas opciones crees que debimos usar en nuestro efecto dentro de useLocalStorage?

Al menos por ahora, lo mejor habría sido enviar un array vacío para que nuestro efecto solo se ejecute una vez, en el primer amado a nuestro custom hook / render de nuestro componente. 😌

Afortunadamente, como todo el código del useEffect está envuelto en un setTimeout, cada ejecución del código de efecto tarda 1 segundo en volver a ejecutarse, por lo que la app no va a crashear. 😓
