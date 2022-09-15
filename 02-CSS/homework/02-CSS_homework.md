## Framework

Es un esquema o marco de trabajo que ofrece una `estructura` base para elaborar un proyecto con objetivos específicos, `una especie de plantilla` que sirve como punto de partida para la organización y desarrollo de software.

En el caso de un 'Framework CSS', se refiere a un conjunto de estilos predefinidos que pueden utilizarse para elaborar una interfaz de usuario atractiva sin necesidad de tener que definir a mano todas y cada una de las propiedades CSS de nuestros elementos HTML.

El `Framework` acelerar el trabajo y favorecer que este sea colaborativo, reducir errores y obtener un resultado de más calidad

Existen una gran variedad de Frameworks CSS pero entre los más utilizados en la actualidad se encuentran:

\*. Bootstrap
\*. Foundation
\*. Bulma
\*. Ulkit
\*. Semantic UI

## CSS Preprocessors

Un preprocesador CSS es un programa que te permite generar CSS a partir de la syntax única del preprocesador.

CSS te permite diseñar una página web, pero es posible que hayas notado que para diseñar un solo elemento necesitas escribir mucho código. Este código se dosordena rápidamente, puede ser difícil de leer y, por lo tanto, difícil de mantener. Esto se debe a que CSS carece de variables y funciones que poseen otros lenguajes de programación, lo que te obliga a repetirte. ¡Puede resultar muy redundante! (DRY: Don’t Repeat Yourself)

En pocas palabras, un preprocesador te permite escribir CSS en un idioma alternativo (no te preocupes, es muy parecido al CSS nativo) y ofrece funciones avanzadas como variables, funciones y la posibilidad de incluir archivos. En resumen, te ayudan a escribir de manera más simple para organizar mejor tu código, evitando al mismo tiempo las repeticiones.

## Responsive Design

Cuando queremos que nuestra página se vea 'linda' en cualquier dispositivo o cambie algunas características ya sea en una computadora, en un teléfono celular, en una tablet o incluso en un televisor smart, necesitamos hacer algunos ajustes a las propiedades de los elementos en función del dispositivo.

Se le denomina Responsive Web Design (o RWD) a los diseños web que tienen la capacidad de adaptarse al tamaño y formato de la pantalla en la que se visualiza el contenido, respecto a los diseños tradicionales en los que las páginas web estaban diseñadas sólo para un tamaño o formato específico, y no tenían esa capacidad de adaptación.

El primero de ellos es la diferencia entre `diseño responsivo` y `diseño adaptativo`.

_. `responsive design` responde (valga la rebuznancia) en todo momento a las dimensiones del dispositivo, responsive es utilizar propiedades como `min-width` o `max-width`.
_. `adaptative design` mientras que un diseño adaptable es aquel que se adapta, pero no necesariamente responde en todo momento.

# CSS Media Queries

son útiles cuando deseas modificar tu página web o aplicación en función del tipo de dispositivo (como una impresora o una pantalla) o de características y parámetros específicos (como la resolución de la pantalla o el ancho del viewport del navegador).

Cuando se idearon las consultas de medios, muchos sitios optaron por un conjunto de diseños rígidos y fijos. Esto es conceptualmente más fácil de diseñar y codificar porque replica efectivamente un conjunto limitado de plantillas de página. Por ejemplo:

1. Los anchos de pantalla inferiores a 600px utilizan un diseño similar al de los móviles de 400px.
2. Los anchos de pantalla entre 600px y 999px utilizan un diseño tipo tableta de 600px de ancho.
3. Los anchos de pantalla superiores a 1.000px utilizan un diseño similar al de un ordenador de sobremesa de 1.000px.
   La técnica es defectuosa. Los resultados en pantallas muy pequeñas y muy grandes pueden parecer pobres, y el mantenimiento de CSS puede ser necesario a medida que los dispositivos y los tamaños de pantalla cambian con el tiempo.

Una mejor opción es utilizar un diseño fluido «mobile-first» con puntos de ruptura que adapten el diseño a determinados tamaños. En esencia, el diseño por defecto utiliza los estilos más sencillos para pantallas pequeñas que posicionan los elementos en bloques verticales lineales.

# Bootrstap

Supongamos ahora que queremos cambiar la cantidad de columnas que se muestren en función de la pantalla para que nos queden cuatro columnas en pantallas grandes, dos en medianas y una en pequeñas:

![Screenshot](/02-CSS/homework/02-CSS_homework.img/bootstrap-col-grid.png)

# Grid System

Bootstrap ya tiene integrado un sistema de grillas implementado a partir de flexbox que nos va a facilitar la tarea. Para ello utiliza cinco clases ya definidas:

_. .col- (extra small devices - menos de 576px)
_. .col-sm- (small devices - mayor o igual a 576px)
_. .col-md- (medium devices - mayor o igual a 768px)
_. .col-lg- (large devices - mayor o igual a 992px)
\*. .col-xl- (xlarge devices - mayor o igual a 1200px)

El sistema de grilla de Bootstrap permite colocar hasta una suma de 12 'espacios' por fila distribuyéndolos de la forma que se quiera, ya sea colocando 12 columnas de 1 'espacio', 2 columnas de 6 'espacios' o cualquier variante de combinaciones:

![Screenshot](/02-CSS/homework/02-CSS_homework.img/esquema-col.png)

Utilizando simplemente esas clases podemos crear múltiples tipos de grillas que se adapten a nuestras pantallas.

```html
<div class="row">
  <div
    class="col-12 col-sm-6 col-md-3"
    style="background-color:black; color:black;"
  >
    .
  </div>
  <div
    class="col-12 col-sm-6 col-md-3"
    style="background-color:orange; color:orange;"
  >
    .
  </div>
  <div
    class="col-12 col-sm-6 col-md-3"
    style="background-color:yellow; color:yellow;"
  >
    .
  </div>
  <div
    class="col-12 col-sm-6 col-md-3"
    style="background-color:green; color:green;"
  >
    .
  </div>
</div>
```

![Screenshot](/02-CSS/homework/02-CSS_homework.img/bootstrap-grid.gif)

En el gif de arriba podemos ver como en función del ancho de la pantalla va cambiando la cantidad de columnas
