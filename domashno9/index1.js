class Rectangle {
    constructor(color, width, height) {
        this.color = color;
        this._width = width;
        this._height = height;
    }

    static getShapeType() {
        return "Rectangle";
    }

    get width() {
        return this._width;
    }

    set width(width) {
        this._width = width;
    }

    get height() {
        return this._height;
    }

    set height(height) {
        this._height = height;
    }

    getArea() {
        return this._width * this._height;
    }

    describe() {
        console.log(`Color: ${this.color}, Width: ${this._width}, Height: ${this._height}`);
    }
}

let rectangle1 = new Rectangle("blue", 5, 10);
let rectangle2 = new Rectangle("red", 8, 12);

console.log(Rectangle.getShapeType())
rectangle1.describe();
console.log("Area of rectangle1:", rectangle1.getArea());
rectangle2.describe();
console.log("Area of rectangle2:", rectangle2.getArea());
