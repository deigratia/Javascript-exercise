// reverse
array = () => {
  var arr = 'i am passionate about programming'
  var coba = arr.split(' ')
  var arr1 = coba.reverse()

  return arr1
}
console.log(array())

// search second largest
var secondMax = (arr = () => {
  var max = Math.max.apply(null, arr)
  arr.splice(arr.indexOf(max), 1)
  return Math.max.apply(null, arr)
})

var arr = [12, 5, 7, 17, 8, 0, -1, 16, 7]
var max2 = secondMax(arr)
console.log(max2)


//iparse integer to binary
addBinary = (a) => {
  var angka = a 

  var binary = ''
  while (angka > 0) {
    binary = (angka % 2) + binary
    angka= Math.floor(angka / 2)
  }
  return binary
}
console.log(addBinary(7)) 



function findPrimeFactors () {
    var num = []    
    var primeFactors = [];
    while (num % 2 === 0) {
        primeFactors.push(2);
        num = num / 2;
    }
    
    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
        }
    }

    if (num > 2) {
        primeFactors.push(num);
    }
    return primeFactors;
}
console.log(findPrimeFactors(10, 3))
