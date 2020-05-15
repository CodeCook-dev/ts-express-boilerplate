# Boilerplate Express Typescript

Thanks for bumping by my Express TypeScript boilerplate. You can clone my repository, and run the following commands in order to get started:

`npm i` installed the required node modules in the project.
`npm run dev` to run development mode, will watch typescript changes and nodemon in the background.

If you don't have nodemon installed, make sure you have `sudo` permission:
`sudo npm i -g nodemon`


# Directory Structure (wip)

@TODO: 
* Implementation of database ( SQLite, Postgresql and Mongo)
* Creating interface models example
* Usage of `.env` file

The directory structure followings similar to MVC pattern. You may find couple similarities. You mainly will be working the `src` directory, where the `*.ts` files will be transpiled to `*.js`

<pre>
root/
├── build/
├── public/
│   ├── css/
│   ├── js/
│   └── img/
├── src/
│   ├── controllers/
│   ├── main.ts
│   ├── route.ts
│   ├── server.ts
│   └── models/
├── views/
└──  .env
</pre>
## Creating a Controller and registering to router

This is an example controller, where you put in your business logic, `res.render('index')` is fetching from `root/views` directory.

**Creating a controller**
Create a new file at `root/src/controllers/ExampleController.ts`
```ts
import express, {Request, Response} from 'express';

class ExampleController {
  public index(req:Request, res:Response):void {
      res.render('index');
}

export const exampleController = new ExampleController();
```

**Registering your controller with the router**
At `root/src/route.ts` you can call your ExampleController at `Route@routes():void`
```ts
import express, {Request, Reponse, Router} from 'express';
import {exampleController} from './controllers/ExampleController'

class Route {
  public router:Router = Router();

  constructor() {
    this.routes();
  }

  // Register to http://localhost/example
  private routes():void {
    this.router('/example', (req:Request, res:Reponse) => {
      exampleController.index(req, res);
}

export const route = new Route().router;
```