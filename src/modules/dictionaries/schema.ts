import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
    word: {
        type: String,
        required: true
    },
    pronunciation: {
        type: String,
        required: true
    },
    meaning: {
        type: String,
        required: true
    },
    soundFilePath: {
        type: String,
    }
});

export default mongoose.model("Dictionaries", schema);