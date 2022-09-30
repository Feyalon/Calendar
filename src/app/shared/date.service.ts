import { Injectable } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject } from "rxjs";
@Injectable({
    providedIn: 'root'

})
export class DateService{
    public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment())

    changerMounth(dir: number){
        const value = this.date.value.add(dir, 'month')
        this.date.next(value)

    }
    changedate(date: moment.Moment){
        const value = this.date.value.set({
            date: date.date(),
            month: date.month() 

        })
        this.date.next(value)
    }
}