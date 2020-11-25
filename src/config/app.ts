import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as cors from "cors";
import environment from "../environment";

import { CommonRoutes } from "../routes/common_routes";
import { DictionaryRoutes } from '../routes/dictionary_routes'; 

class App {
    public app: express.Application;
    public mongoUrl: string = `mongodb+srv://hiep:hiep2312@cluster0.dlqag.mongodb.net/${environment.getDBName()}?retryWrites=true&w=majority` 

    private common_routes: CommonRoutes = new CommonRoutes();
    private dictionary_routes: DictionaryRoutes = new DictionaryRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.dictionary_routes.route(this.app);
        this.common_routes.route(this.app);
    }
    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }
    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
    }
}
export default new App().app;