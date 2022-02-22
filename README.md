# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Diseño](#3-diseño)
* [4. Instrucciones de Uso](#4-instrucciones-de-uso)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)
* [7. Checklist](#7-checklist)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Resumen del proyecto


### Nombre del Proyecto:

"Misión César"


### Descripción:

Misión César es una web interactiva de acción y misterio, orientada al entretenimiento. Está basada
en una de las técnicas de cifrado más simples y conocidas, “El Cifrado César”.

MC nos presenta a Carrie Mathison, agente secreto de la CIA, quien tiene una misión que
no puede poner en riesgo y debe pedir ayuda a un extraño (usuario) para cumplir su cometido siguiendo
sus instrucciones, que consisten en cifrar y descifrar un mensaje, utilizando un número de desplazamiento (clave).


### Principal usuario del producto:

El principal usuario de MC, son todas las personas interesadas en buscar una actividad de ocio y/o entretenimiento, es decir ocio digital.
Está comprobado que el ocio es necesario para obtener un mejor rendimiento, tanto físico como mental, en nuestra actividad laboral. Sea cual sea nuestra ocupación, es siempre aconsejable respetar los ratos libres, buscarlos y atesorarlos, para recobrar las energías que hemos depositado en nuestras obligaciones y poder retomarlas de manera eficiente y con la mente despejada.  


## 3. Diseño


### Primer prototipo:

Inicialmente, el nombre de la web se presentó en inglés (Caesar Mission), se plantearon tres páginas donde la
primera de ellas explique brevemente la historia de la web interactiva e invitara al usuario a ayudar a Carrie,
la Agente Secreto de la CIA, a cumplir su misión. Se agregó un campo para colocar nombre de usuario y un botón
para enviar la información y pasar a la siguiente página.

![maqueta-1](img_readMe\Maqueta proyecto_1.jpg)

En la segunda pantalla se colocó un mensaje personalizado, tomando el nombre del usuario e indicando las
instrucciones de la misión. Además, un botón para pasar a la siguiente página.

![maqueta-2](img_readMe\Maqueta proyecto_2.jpg)

En la tercer y última pantalla se colocaron dos campos de texto para los mensajes, un campo de desplazamiento
numérico para la clave y dos botones con las acciones de cifrar/descifrar.

![maqueta-3](img_readMe\Maqueta proyecto_3.jpg)


### Segundo prototipo:

![mision-cesar-pantalla-1](img_readMe\Pantalla 1_MC.png)
![mision-cesar-pantalla-2](img_readMe\Pantalla 2_MC.png)
![mision-cesar-pantalla-3](img_readMe\Pantalla 3_MC.png)
![mision-cesar-favicon](img_readMe\Favicon_MC.png)


## 4. Instrucciones de uso


## 5. Criterios de aceptación mínimos del proyecto

### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.


## 6. Pistas, tips y lecturas complementarias

Diseño de experiencia de usuario (User Experience Design):

* Ideación
* Prototipado (sketching)
* Testeo e Iteración

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.


## 7. Checklist

### Parte Obligatoria

* [`✓`] `README.md` incluye info sobre proceso y decisiones de diseño.
* [`✓`] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [`✓`] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [`✓`] Usa VanillaJS.
* [`✓`] Implementa `cipher.encode`.
* [`✓`] Implementa `cipher.decode`.
* [`✓`] Pasa linter con configuración provista.
* [`✓`] Pasa pruebas unitarias.
* [`✓`] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [`✓`] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [`✓`] Interfaz permite escribir un texto para ser cifrado.
* [`✓`] Interfaz muestra el resultado del cifrado correctamente.
* [`✓`] Interfaz permite escribir un texto para ser descifrado.
* [`✓`] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [`✓`] Cifra/descifra minúsculas
* [] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [] Permite usar un `offset` negativo.
