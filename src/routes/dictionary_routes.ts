import { Application, Request, Response } from 'express';
import { DictionaryController } from '../controllers/dictionaryController';

export class DictionaryRoutes {
    private dictionary_controller: DictionaryController = new DictionaryController();
    public route(app: Application) {
        app.post('/dictionaries', (req: Request, res: Response) => {
            this.dictionary_controller.create_dictionary(req, res);
        });
    }
}