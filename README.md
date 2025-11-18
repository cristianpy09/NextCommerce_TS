# README.md

## Proyecto: eCommerce Lite

Este proyecto es una aplicación de e-commerce desarrollada con Next.js y TypeScript. Su objetivo principal es proporcionar una estructura modular para la gestión de productos y usuarios, implementando una interfaz de usuario reutilizable.

---

## Contenido

1. [Características](#características)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Instrucciones de Uso](#instrucciones-de-uso)
   - [Configuración Inicial](#configuración-inicial)
   - [Uso del Store con Decoradores](#uso-del-store-con-decoradores)
4. [Requisitos](#requisitos)
5. [Contribución](#contribución)

---

## Características

- Interfaces definidas para productos y usuarios que refuerzan un tipado estricto.
- Módulo de autenticación y gestión de usuarios con funcionalidades completas (CRUD).
- Componentes reutilizables: Button, Badge, y Card, con propiedades tipadas en TypeScript.

---

## Estructura del Proyecto

La estructura del proyecto se organiza de la siguiente forma:



---

## Instrucciones de Uso

### Configuración Inicial

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/cristianpy09/NextCommerce_TS.git

2. **Instala dependecias:**
    ```bash
    npm install

3. **Corre el proyecto:**
    ```bash
    npm run dev



## Uso del UserStore
### El UserStore se encarga de gestionar usuarios y realizar operaciones CRUD. Aquí te explicamos cómo usarlo paso a paso:

1. **Importar el UserStore:**

    Primero, asegúrate de importar el UserStore en el archivo donde lo necesites.
    typescript

    ```bash
        import { UserStore } from './utils/UserStore';
    ```
2. **Crear una instancia del UserStore:**
    
        Crea una instancia para poder interactuar con el almacenamiento de usuarios.
    ```bash
        const userStore = new UserStore();
    ```

3. **Añadir un nuevo usuario:**
    
    Usa el método create para agregar un nuevo usuario. El decorador se encargará de enriquecer el objeto automáticamente.
    ```bash

        userStore.create({
            id: '1',
            fullName: 'Juan Pérez',
            email: 'juan@example.com',
            isActive: true,
            role: '',
            createdAt: new Date(),
            // propiedades opcionales
        });

3. **Listar usuarios:**

    Llama al método list para obtener todos los usuarios.
    ```bash
    const allUsers = userStore.list();
    console.log(allUsers);
    ```

4. **Buscar un usuario por nombre:**

    Utiliza findByName para encontrar un usuario específico.

    ```bash
    const user = userStore.findByName('Juan Pérez');
    console.log(user);

5. **Actualizar un usuario:**

    Cambia la información de un usuario existente con el método update.

    ```bash
    userStore.update('1', { email: 'nuevo_email@example.com' });

5. **Eliminar un usuario:**

    Usa el método remove para borrar un usuario.
    ```bash
    userStore.remove('1');

