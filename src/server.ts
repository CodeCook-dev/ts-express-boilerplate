import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import compression from 'compression';

import { route } from './route';

export class Server {
	private app: express.Application;
	private port?:number;

	constructor(port?:number) {
		this.app = express();
		this.port = port || 3000;
	}

	public start():void {
		this.config();
		this.app.listen(this.app.get("port"), () => {
			console.log(`[Server]: server running.`);
		});
	}

	private config():void {
		dotenv.config();
		this.app.set("port", process.env.PORT || this.port);

		// Configuring static directories
		this.app.use(express.static('public'));
		this.app.use(express.static('views'));

		// Setting template
		this.app.set('view engine', 'ejs');

		this.app.use(express.json());
		this.app.use(express.urlencoded({extended: false}));
		this.app.use(compression());
		this.app.use(cors());

		// Configuring router
		this.app.use("/", route);
	}
}