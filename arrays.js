// 1 Вывести в консоль наибольший элемент массива.

const array = [1, 9, 2, 8, 3, 7, 4, 6, 5]

let number = array[0]

for (let i = 1; i < array.length; i++){

    if (number < array[i]){
        number = array[i]
    }
}
console.log(`Самое большое число массива: ${number}`)

// 2 Очистить массив от нежелательных значений, таких
// как false, undefined, пустые строки, ноль, null.

const array2 = [1,"", 2, null, 3, 0]
const newArray = []

for (let i = 0; i < array.length; i++){
    if (array2[i]){
        newArray.push(array2[i])
    }
}
console.log(`Изменённый массив: ${newArray}`)


// 3 Дана строка, внутри которой есть несколько записей
// вида "$120", нужно вывести ВСЕ числа после доллара.

const str = "Есть несколько товаров по $120 и $20 и $70 все они крутые"
const dollars = []
const spaces = []
const result = []

for (let i = 0; i < str.length; i++){
    if (str[i] == "$"){
        dollars.push(i)
        spaces.push(str.indexOf(" ", i))
    }
}

for (let i = 0; i < dollars.length; i++){
    if(spaces[i] !== -1){
        result.push(str.slice(dollars[i] + 1, spaces[i]))
    } else {
        result.push(str.slice(dollars[i] + 1))
    }
}
console.log(`Цифры из строки: ${result}`)


// 4 Убрать повторяющиеся значения из массива.

const array3 = ["f", 1, 1, 1, 2, 2, 3, "f"]
const newArray2 = []


for (let i = 0; i < array3.length; i++){
    let notFound = true
    for (let u = 0; u < newArray2.length; u++){
        if (array3[i] == newArray2[u]){
            notFound = false
        }
    }
    if (notFound){
        newArray2.push(array3[i])
    }
}

console.log(`Массив без повторений: ${newArray2}`)
