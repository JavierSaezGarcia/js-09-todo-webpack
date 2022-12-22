# TODO webpack

Aplicación de tareas con Webpack

Nota: 
Recuerden reconstruir los módulos de Node:
```
npm install
```
Para construir el build, recuerden:
```
npm run build
```
Para arrancar el server de Webpack:
```
npm start 
```

## localStorage
Para guardar en localStorage hay que pasar la instancia de la clase (todos) a un arreglo que tiene objetos dentro (arreglo de objetos) con 
```
localStorage.setItem('todo', JSON.stringify(this.todos));
```
Y para rescatarlo , recuperar la instancia por la key que hemos guardado en este caso 'todo'
```
JSON.parse(localStorage.getItem('todo'))
```


## Github pages
#
1. Si no has hecho la build, crearla:
```
npm run build
```

2. Renombrar la carpeta dist a docs,
3. Commit and push
```
git commit -m "subir docs"
git push 

```
4. En la pestaña Settings seleccionar el link Pages.
5. Click "Deploy from a branch"
6. Seleccionar la rama en mi caso "main"
7. Seleccionar folder/docs
8. Click save... y esperar
Nota: el nombre del repo sería el que corresponda la cuenta
9. Click en visit site
10. Enjoy




