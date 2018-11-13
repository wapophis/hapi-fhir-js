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