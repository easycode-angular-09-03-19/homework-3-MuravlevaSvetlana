import { Component, OnInit } from '@angular/core';
import { CarInter } from '../../interfaces/CarInter';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent  {
  
  public car: CarInter = {
    name: 'AUDI Q8',
    mileage: 0,
    volumePetrol: 75,
    amountOfPetrol: 0,
    specifications: ['engine: Mild Hybrid Electric Vehicle', 'max speed: 245km/h', 'Type of fuel: diesel'],
    imgSrc: 'https://www.kolesa.ru/uploads/2018/01/Audi-Q8-new-front2.jpg'
  }
  
  public information = {
    name: this.car.name,
    mileage: this.car.mileage,
    amountOfPetrol: this.car.amountOfPetrol,
    specification: this.car.specifications,
    volumePetrol: this.car.volumePetrol,
    imgSrc: this.car.imgSrc
  };

  public drive(): 0 | {amountOfPtrol: number, mileage: number} {
    if (this.information.amountOfPetrol < 1) { 
      return 0;
    }
    this.information.mileage += 10;
    this.information.amountOfPetrol -= 1;
    return {
       amountOfPtrol: this.information.amountOfPetrol, 
       mileage: this.information.mileage
    }
  }

  public refuel(): number {
    this.information.amountOfPetrol += 10;
    return this.information.amountOfPetrol;
  } 
}
