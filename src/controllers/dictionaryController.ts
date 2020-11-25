import { Request, Response } from "express";
import {
    insufficientParameters,
    mongoError,
    successResponse,
    failureResponse,
} from "../modules/common/service";
import { IDictionary } from '../modules/dictionaries/model';
import DictionaryService from '../modules/dictionaries/service';

export class DictionaryController {
    private dictionary_service: DictionaryService = new DictionaryService();

    public create_dictionary(req: Request, res: Response) {
        // this check whether all the filds were send through the request or not
        const { word, pronunciation, meaning } = req.body;
        if (word && pronunciation && meaning) {
            const dictionary_params: IDictionary = {
                word: word,
                pronunciation: pronunciation,
                meaning: meaning,
                soundFilePath: ''
            };
            this.dictionary_service.createDictionary(dictionary_params, (err: any, dic_data: IDictionary) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('create dictionary successfull', dic_data, res)
                }
            });
        } else {
            // error response if some fields are missing in request body
            insufficientParameters(res);
        }
    }


}