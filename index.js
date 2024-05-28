class Polygon {
    constructor(Array){
        this.Array = Array
    }
    get countSides(){
        return this.Array.length
    }
    get perimeter(){
        return this.Array.reduce((acc, element) => {
            return acc + element 
        }, 0)
    }

}

class Triangle extends Polygon {
    get isValid(){
        let valid = true
        const arr = this.Array
        if(arr[0] + arr[1] < arr[2]){valid = false}
        if(arr[1] + arr[2] < arr[0]){valid = false}
        if(arr[2] + arr[0] < arr[1]){valid = false}
        return valid
    }
}

class Square extends Polygon {
    get isValid(){
        let valid = false
        const arr = this.Array
        if(arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[3]){valid = true}
        return valid
    }
    get area(){
        return this.Array[0]**2
    }
}