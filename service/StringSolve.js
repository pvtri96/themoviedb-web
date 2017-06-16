class StringSolve{
    static subString(maxLength, text){
        let words = text.split(' ');
        let parts = [];
        for(let i=0; i<words.length; i++) {
            if(i < maxLength) {
                if(i == maxLength - 1)
                    parts.push(words[i] + ' ...');
                else
                    parts.push(words[i]);
            }
        }
        return parts.join(" ");
    }

    static subTitle(maxLength, text){
        let result = [];
        for(let i=0;i<text.length;i++){
            if(i<maxLength){
                if(i==maxLength -1)
                    result.push(text[i]+ ' ...');
                else
                    result.push(text[i]);
            }
        }
        return result;
    }
}



export default StringSolve;
