import express, {Request, Response} from "express";

class PostController {
	public index(req: Request, res: Response):void {
		res.render("index");
	}
}

export const postController = new PostController();