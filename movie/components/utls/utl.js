const utls ={
    updateString:(str, genere)=>{
        if(str &&  genere){
            let text = str.replace(new RegExp('{title}', 'gi'), genere);
            return text
        }else{
            return str
        }
            
    }
}

export default utls;