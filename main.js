class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Square {
    constructor(side) {
        this.side = side;
    }

    getArea() {
        return this.side ** 2;
    }
}

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }

    getArea() {
        return (this.base * this.height) / 2;
    }
}

// Функция для сохранения данных в localStorage
function saveShape(type, data) {
    let shapes = JSON.parse(localStorage.getItem('shapes')) || [];
    shapes.push({ type, data });
    localStorage.setItem('shapes', JSON.stringify(shapes));
}

// Функция для загрузки данных из localStorage
function loadShapes() {
    return JSON.parse(localStorage.getItem('shapes')) || [];
}

// Функции для добавления фигур
function addCircle() {
    let radius = parseFloat(document.getElementById('circleRadius').value);
    if (!radius || radius <= 0) return alert("input correct radius");

    let circle = new Circle(radius);
    let area = circle.getArea();
    saveShape('Circle', { radius, area });
    showResult(`Circle area: ${area.toFixed(2)}`);
}

function addSquare() {
    let side = parseFloat(document.getElementById('squareSide').value);
    if (!side || side <= 0) return alert("input correct side");

    let square = new Square(side);
    let area = square.getArea();
    saveShape('Square', { side, area });
    showResult(`Square area: ${area.toFixed(2)}`);
}

function addTriangle() {
    let base = parseFloat(document.getElementById('triangleBase').value);
    let height = parseFloat(document.getElementById('triangleHeight').value);

    if (!base || base <= 0 || !height || height <= 0) return alert("input correct values");

    let triangle = new Triangle(base, height);
    let area = triangle.getArea();
    saveShape('Triangle', { base, height, area });
    showResult(`Triangle area: ${area.toFixed(2)}`);
}

// Функция для отображения результата
function showResult(message) {
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
}

// Функция для отображения сохраненных фигур
function displayShapes() {
    let shapes = loadShapes();
    let list = document.getElementById('shapesList');
    list.innerHTML = "";

    shapes.forEach(shape => {
        let li = document.createElement('li');
        li.textContent = `${shape.type} - ${JSON.stringify(shape.data)}`;
        list.appendChild(li);
    });
}

// Функция для очистки localStorage
function clearStorage() {
    localStorage.clear();
    document.getElementById('shapesList').innerHTML = "";
    showResult("LocalStorage cleared.");
}