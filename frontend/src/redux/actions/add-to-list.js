const addItem=(itext)=>{
    //console.log(itext)
    return{
        type : "add",
        text1:itext.text1,
        text2:itext.text2
    }
}

export default addItem
