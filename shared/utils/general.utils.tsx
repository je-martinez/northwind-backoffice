
export const GeneralUtils = () => {

    const CastClassToJSON = (obj:any) => {
        return Object.keys(obj).reduce((prev, current) => {
            let value;
            // if(obj?.[current] instanceof Array){
            //     console.log("Array", obj?.[current]);
            // }else if (obj?.[current] instanceof Object){
            //     value = CastClassToJSON(obj?.[current])
            //     console.log("Object", obj?.[current]);
            // }else{
                // console.log("Normal Value", obj?.[current]);
                value = {[current?.toLowerCase()]: obj?.[current]};
            // }
            return { ...prev, ...value}   
        }, {})
    }

    return {
        CastClassToJSON
    }
}