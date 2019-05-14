export default SuperClass=> class extends SuperClass{

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
