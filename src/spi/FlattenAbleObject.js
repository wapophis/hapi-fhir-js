export default class FlattenAbleObject extends Object{
    constructor(rootObject){
        super();
    }

    valueOf(){
        return this._flatten();
    }

    /**
     * @private
     */
    _flatten(){
        throw new Error("Abstract class, please implement this.");
    }
}