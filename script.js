function sumAll(a, b){
    if(a > b){
        return 0; //Si el primer parámetro es mayor al segundo, retorna 0 automáticamente.
    }
    else if(a == b){
        return a;
    }
    else{
        let result = a;
        let cont = ++a;
        while(cont <= b){
            result += cont;
            cont++;
        }
        return result;
    }

}
console.log(sumAll(5, 8));
console.log(sumAll(4, 4));
console.log(sumAll(7, 3));