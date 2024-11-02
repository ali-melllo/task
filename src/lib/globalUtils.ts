export const  addCommas = (number : number | string) => {
    return number.toString().replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ',');
}

export const truncateString = (str : string  , range:number) => {
    if (str.length > range) {
        return str.slice(0, range - 3) + '...'; 
    }
    return str;
}