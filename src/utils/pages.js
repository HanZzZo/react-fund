export const getPageCount = (totlaCount, limit) => { //принимает общее количество элементтов и возвращать необходимое количество страниц
    return Math.ceil(totlaCount / limit)
}

// хук usePagenation 
export const getPagesArray = (totalPages)  => Array.from({length: 10}, (_, i) => i + 1)//принимает общее количество страниц и на основании этого количества заполняет массив 
    // let result = []
    // for(let i = 0; i < totalPages; i++) {
    //     result.push(i + 1)
    // }
    // return result
