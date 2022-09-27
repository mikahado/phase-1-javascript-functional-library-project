function myEach(collection, alert) {
    let arr = Object.values(collection) //Using Object.values here takes in either an object or an array, and only looks at the VALUES. 
    
    // option 1. most popular 
    // arr.forEach(ele => alert(ele))

    // option 2. rarely used, for specific uses (like skipping over elements in an array)
    // for(let i = 0; i < arr.length; i++){
    //      alert(arr[i])
    //  }

    //option 3. rarely used
    for(let ele of arr) {
        alert(ele)
    }
    
    return collection
    
}


function myMap(collection, callback) {
    
    let arr = Object.values(collection)
    let newArr = []

    for(let ele of arr) {
         newArr.push(callback(ele))

    }

    return newArr

}

function myReduce(collection, callback, ...acc) {
    console.log("acc", acc)
    let arr = Object.values(collection)
    let newAcc;
    let i;
    let total = 0;
       

    if(acc.length > 0) {
            newAcc = acc[0]
            i = 0
        } else {
            newAcc = arr[0]
            i = 1
        }
    

    for(i; i< arr.length; i++) {
        newAcc = callback(newAcc, arr[i], collection)
    }
    return newAcc
}


function myFind(collection, predicate) {

         let arr = Object.values(collection)

        const length = arr == null ? 0 : arr.length;
        if (!length) {
          return -1;

      }

    }
