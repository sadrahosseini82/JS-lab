function attendance(list) {
    let count = 0;

    for(let i=0; i<list.length; i++) {
        if(list[i] === true) {
            count++;
        }
     }

     return count;
}