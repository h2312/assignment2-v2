import { IDictionary } from './model';
import dictionaries from './schema';

export default class DictionaryService {
    public createDictionary(dictionary_params: IDictionary, callback: any) {
        const _session = new dictionaries(dictionary_params);
        _session.save(callback);
    }

    public findDictionary(callback: any) {
        dictionaries.find({}, callback)
    }

    public findDictionaryById(query: any, callback: any) {
        dictionaries.findOne(query, callback);
    }

    public updateDictionary(dictionary_params: IDictionary, callback: any) {
        const query = {  _id: dictionary_params._id  };
        dictionaries.findOneAndUpdate(query, dictionary_params,callback); 
    }

    public deleteDictionary(_id: String, callback: any) {
        const query = { _id: _id};
        dictionaries.deleteOne(query, callback);
    }
}