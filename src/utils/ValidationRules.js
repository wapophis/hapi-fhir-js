export function isUndefined(object){
   
    return (typeof object==='undefined');
}

export function isNull(object){
    return object===null;
}

export function isEmpty(object){
    return object.length<=0;
}

export function isValid(object){
    return !isUndefined(object) && !isNull(object);
}

export function isEmptyArray(object){
    if(Array.isArray(object) && object.length>0){
        return false;
    }
    return true;
}

export function isEmptyDate(object){

    if(!isValid(object)){
        return true;
    }
    
    if(object instanceof Date){
        return new Date(0,0,0).getTime()===object.getTime();
    }

    throw new TypeError("Object to check empty is not a date");

}