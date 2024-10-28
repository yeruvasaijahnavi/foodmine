import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FoodService {
    constructor() {}

    getAll(): String[] {
        return [
            '/assets/images/foods/food1.png',
            '/assets/images/foods/food2.png',
            '/assets/images/foods/food3.png',
            '/assets/images/foods/food4.png',
            '/assets/images/foods/food5.png',
            '/assets/images/foods/food6.png',
        ];
    }
}
