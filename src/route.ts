import express, {Request, Response, Router} from 'express';
import { postController } from './controllers/PostController';

class Route {
	public router:Router = Router();

	constructor() {
		this.routes();
	}

	private routes():void {
		this.router.get('/', (req:Request, res:Response) => {
			postController.index(req, res);
		});
	}
}

export const route = new Route().router;