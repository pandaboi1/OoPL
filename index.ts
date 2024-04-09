import * as http from 'http';
const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello!\n');
});

class Car {
  make: string;
  model: string;
  year: number;
  speed: number;

  constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.speed = 0;
  }

  accelerate(amount: number): void {
      this.speed += amount;
      console.log("The ${this.year} ${this.make} ${this.model} is accelerating. Current speed: ${this.speed} km/h");
  }

  brake(amount: number): void {
      this.speed -= amount;
      if (this.speed < 0) {
          this.speed = 0;
      }
      console.log("The ${this.year} ${this.make} ${this.model} is braking. Current speed: ${this.speed} km/h");
  }
}

// Create a new instance of Car
let myCar = new Car("Toyota", "Camry", 2022);

// Accelerate the car
myCar.accelerate(50);

// Brake the car
myCar.brake(20);


const port = 3000;
const hostname = "0.0.0.0"

server.listen(port, hostname, () => {
  console.log("Server running at http://${hostname}:${port}/`");
});