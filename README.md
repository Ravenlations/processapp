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


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
