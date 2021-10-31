

export const requiredField = (value:string)=>{
    if (value) return undefined
    return 'field is required'
}

export const maxLengthCreator =(maxlength:number)=> (value:string) => {
    if(value && value.length>maxlength) return `Max length is ${maxlength} symbols`
    return undefined
}