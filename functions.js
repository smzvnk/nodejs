// Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный
// список. В качестве аргументов функция должна принимать: массив строк с исходными
// email адресами, массив строк с email адресами в чёрном списке.


const allEmails = ["qwe@gmail.com", "asd@gmail.com", "zxc@gmail.com"]
const blackList = ["asd@gmail.com"]
const whiteList = []

function filter(emails, black,){
    for (let mail of emails) {
        if(black.indexOf(mail) == -1){
            whiteList.push(mail)
        }
    }
}

filter(allEmails, blackList)
console.log(`Отфильтрованный список: ${whiteList}`)


// Напишите функцию calculate(), которая вычисляет и возвращает стоимость корзины
// товаров после применения всех скидок. В качестве аргументов функция принимает 3
// параметра:
//  Общая сумма корзины
//  Количество товаров в корзине
//  Промокод (по умолчанию null)
// Правила и порядок (порядок важен!) начисления скидок:
// 1. Если промокод равен "ДАРИМ300";, то из суммы вычитается 300 рублей. При этом
// если сумма меньше 300 рублей, то итоговая стоимость будет 0.
// 2. При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
// 3. При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения
// (то есть к разнице суммы корзины и 50 000)
// 4. Если промокод равен "СКИДКА15", то ко всей сумме применяется скидка 15%, но
// только если сумма ≥20 000


const sumBeforePromo = 60000
const amountOfProducts = 1
let promo = null

function calculate(sum, amount, promo = null){
    let finalSum = sum
    if (promo == "ДАРИМ300"){
        if (sum>300){
            finalSum = finalSum - 300
        } else {
            finalSum = 0
        }
    }
    if (amount >= 10){
        finalSum = finalSum - finalSum/100*5
    }
    if (sum > 50000){
        finalSum = finalSum - (finalSum - 50000)/100*20
    }
    if (promo == "СКИДКА15" && finalSum >= 20000){
        finalSum = finalSum - finalSum/100*15
    }
    return finalSum
}

const finalSum = calculate(sumBeforePromo, amountOfProducts, promo)
console.log(`Итоговая стоимость корзины: ${finalSum}`)
