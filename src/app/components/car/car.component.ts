import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent  {
  private _name: string = 'AUDI Q8';
  private _mileage: number = 0;
  private _volumePetrol: number = 75;
  private _amountOfPetrol: number = 0;
  private _specifications: string[] = ['engine: Mild Hybrid Electric Vehicle', 'max speed: 245km/h', 'Type of fuel: diesel'];
  private _imgSrc: string = 'https://www.kolesa.ru/uploads/2018/01/Audi-Q8-new-front2.jpg';

  public information = {
      name: this._name,
      mileage: this._mileage,
      amountOfPetrol: this._amountOfPetrol,
      specification: this._specifications,
      volumePetrol: this._volumePetrol,
      imgSrc: this._imgSrc
  }

  public drive(): number {
    if (this.information.amountOfPetrol < 1) return 0;
    this.information.mileage += 10;
    this.information.amountOfPetrol -= 1;
    return this.information.amountOfPetrol, this.information.mileage;
  }

  public refuel(): number {
    this.information.amountOfPetrol += 10;
    return this.information.amountOfPetrol;
  } 
}
