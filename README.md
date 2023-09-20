Esta es una página web para [Process Control](processcontrolformacion.com) creada en nextJS

## El principio

La pagina tiene el nucleo principal en la carpeta app.

Usando la jerarquia de React y nextJS se tiene lo siguiente:

  - Las carpetas con  ¨()¨ Son carpetas para ordenarse y no afectan al enrutamiento de la página.
  
  - Las carpetas con ¨[]¨ Son carpetas con elementos dinámicos creados para no tener que hacer mil copias de lo mismo.
  
  - El resto de carpetas generará la ruta dinamica de la web, usando como ¨indices¨ las page.js.
  


Para hacerla funcionar hay que tener instalado nodeJS  mediante el npm. 

Cuando se tenga se podrá iniciar el servidor con:

```bash
npm run dev

```
Cuando el servidor esté iniciado se podra visualizar en el puerto 3000 del localhost [http://localhost:3000](http://localhost:3000) 


## Aprender sobre NextJS

Para aprender sobre NextJS, se pueden usar los siguientes recursos

- [Doocumentacion](https://nextjs.org/docs) - Documentación de elementos y de la API.
- [Aprende Next.js](https://nextjs.org/learn) - Tutorial Interactivo.


## Lanzar en AWS

Se usara un servidor de Amazon para poder manejar todo con el NextJS, una vez teniendo la instancia creada se usaran estos comandos para poder ponerla a punto.

Para instalar Node version Manager
```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

Para instalar nodeJS
```bash
  nvm install node
```
Para instalar NextJS con todas sus dependencias y cosas chulas
```bash
  npm install next@latest react@latest react-dom@latest
``` 
Como la web se recoge desde este proyecto de git habra que hacer un clon de este proyecto 
```bash
  git clone https://github.com/Ravenlations/processapp
```

Se ira hasta el directorio en el que se clona el protyecto y se hará funcionar.





