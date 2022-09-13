// 1 -misol
function lessThan10(num_1, num_2) {
    var result = false
    if(num_1 + num_2 == 100) {
        result = true
    }

    return result
}

console.log(lessThan10(50, 50));

// 2 - misol
function addition(num_1 , num_2) {
    return num_1 + num_2
}

console.log(addition(-3, -5));

// 3 - misol
function convert(number) {
    return number * 60
}

console.log(convert(3));

// 4- misol
function reverse(array) {
    return array.reverse()
}

console.log(reverse([1, 2, 3, 4]));

// 5 - misol
function shouldServerDrinks(age, boolean) {
    var result = false
    if(age >= 18 && age <= 30) {
        result = true
    }

    return result
}

console.log(shouldServerDrinks(3, false));

// 6 -misol
function getLastItem(array) {
    array.reverse()
    return array.shift()
}

console.log(getLastItem(['other' ,'duck', 'ok']));

// savollar
//1. Array metodlarni yozib chiqish
//2. Data Type turlarini yozish
//3. Funksiya ishlash yo'li
//4. javaScript syntaxs lar

// javoblar
//1. reverse() - array ma'lumotlarini teskari ko'rinishga keltiradi
//   concat() - array oxiriga ma'lumot qo'shadi
//   pop() - arraydagi ma'lum ma'lumotni olib tahlaydi
//   shift() - arrayni boshidan ma'lumot oladi
//   unshift() - arrayni boshiga ma'lumot qo'shadi
//   push() - arrayni oxiriga ma'lumot qo'shadi
//   join() - array ma'lumot turini variable ma'lumot turiga o'tkazadi
//   split() - ma'lumotni arrayga sochib yuboradi

//2. Number
//   String
//   Boolean
//   Object
//   Array
//   Function
//   Undefined
//   Symbol

//3. funksiya u huddi bir kontayner. Biz uni nomi bilan har joyda chaqira olamiz. Bir code ni ikkita yoki undan ortiq joyda oson chaqira olamiz
// function funksiyaNomi(ungaKetadiganrgument) {
//     uning ichida yoziladigan code lar
//     return bu oxirgi qaytuvchi ma'lumot bundan keyingi code lar o'qilmaydi
//}

//4. + qo'shish
//   - ayirish
//   / bo'lish
//   * ko'paytirish
//   ** darajaga ko'tarish
//   % qoldig'ini chiqarish
//   || yoki
//   && va
//   == teng bo'lsa
//   > katta bo'lsa
//   < kichik bo'lsa
//   >= katta yoki teng bo'lsa
//   <= kichik yoki teng bo'lsa
//   === data typeni aniqlashtiradi
//   !== teng bo'lasa
//   = o'zlashtiradi

// 1- misol
function fill(number, arg) {
    var result = arg.repeat(number)
    return result.split('')
}

console.log(fill(3, 'a'));

// 2 -misol
function reverse(array) {
    return array.reverse()
}

console.log(reverse([1, 2, 3]));

// 3 - misol
function compact(array) {
    var result = []
    for(var item of array) {
        if(item == true || item > 0) {
            result.push(item)
        }
    } 

    return result
}

console.log(compact([0, 1, false, 2, undefined, '', 3, null, true]));

// 4 - misol
function fromPairs(arg) {
    var obj = {}        
    for(var item of arg) {
        obj[item.shift()] = item.pop()
    }
    return obj
}

console.log(fromPairs([['a', 1], ['b' , 3], ['c', 7]]));

//5 - misol
function Without(arg, a, b) {
    var result = []
    for(var item of arg) {
        if(item !== a && item !== b){
            result.push(item)
        }
    }
    return result
}

console.log(Without([1, 4, 3, 5, 1, 8, 4], 4, 1));

//6 - misol
function unique(array) {
    var result = []
    for(var item of array) {
        if(result.indexOf(item) == -1) {
            result.push(item)
        }
    }
    return result
}

console.log(unique([3, 1, 2, 4, 2, 1, 3,  4]));

//7 - misol
function isEqual(array1, array2) {
    var res1 = 0
    var res2 = 0
    var result = false
    for(var item1 of array1) {
        res1 = item1 + res1
    }
    for(let item of array2){
        res2 = item + res2
    }
    if(res1 == res2) {
        result = true
    }

    return result
}
console.log(isEqual([2,1,2,3,4], [2,1,2,3,4]));

//8 - misol
function flatten(array) {
    return array.flat(5)
}

console.log(flatten([1, 2, [3, 4, [5]]]));

//9 - misol
function chunk(array, num) {
    let result = []
    for(var i = 0; i < array.length; i = i + num) {
        result.push([array[i], array[i + 1]])
    }

    return result 
}

console.log(chunk([1,2,3,4,5,6,7,8], 2));

//10 - misol
function interSection(a, b, c){
    var arr = []
    for(var item of a){
        for(var item1 of b){
            if(item == item1){
                arr.push(item)
            }
            if(c == true){
                for(var item2 of c){
                    if(item == item1 && item == item2){
                        arr.push(item)
                    }
                }
            }
        }
    }
    return arr
}

console.log(interSection(['a', 'b'], ['b', 'c'], ['a', 'b', 'c']));