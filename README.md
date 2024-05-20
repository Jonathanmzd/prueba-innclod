# Prueba de InnClond 

## Iniciar Backend Laravel 10

1) Descargar el clone del proyecto

```sh
git clone https://github.com/Jonathanmzd/prueba-innclod.git
```
### dentro del lugar donde se descargo el repositorio se realiza lo siguiente:
   
2) Abrir en el editor de preferencia, ingresar a la carpeta backend

3) Copiar el contenido de env.example 
   
4) Crear archivo .env en la raiz de la carpeta de backend, copiar lo de env.example dentro

5) tener presente esta conexion
   
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=innclod
DB_USERNAME=root
DB_PASSWORD=
```
# **Nota** se debe crear la base de datos **innclod** de mysql en phpadmin o cliente de preferencia

6) instalar las dependencias, ingresando a terminal y ejecutar lo siguiente:
```sh
cd backend
composer install 
```

7) Realizar la creacion de la clave, clave jwt
```sh
php artisan key:generate
php artisan jwt:secret
```

8) realizar la ejecucion de las migraciones
```sh
php artisan migrate:refresh --seed
```

9) Ejecutar el Backend
```sh
php artisan serve
```

## Iniciar Frontend

1) dentro del lugar donde se descargo el repositorio se realiza lo siguiente:

Abrir una nueva terminal y ejecutar lo siguiente:

```sh
cd frontend
npm install 
```

2) iniciar el proyecto
```sh
npm start
```

## Imagenes del proyecto:

**Login**

![alt text](image.png)

```sh
email: jonathan.ardila@gmail.com
Password: password
```

**Tabla Documentos**

![alt text](image-1.png)

**Nuevo Documento**

![alt text](image-2.png)

**Buscador**

![alt text](image-3.png)

**Actualizar**

![alt text](image-4.png)

**Eliminar**

![alt text](image-5.png)

![alt text](image-6.png)

**Condiciones de la prueba**

![alt text](image-7.png)

![alt text](image-8.png)

**Diagrama de entidad relacion db innclod**

![alt text](image-9.png)
