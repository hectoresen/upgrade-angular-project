import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class IsLoadingService {

  private isLoadingSubject : BehaviorSubject<any> = new BehaviorSubject(null)

  constructor() { }

  getShowLoading() : Observable <boolean> {
    return this.isLoadingSubject.asObservable();
  }

  setShowLoading(newIsLoading : boolean) : void {
    this.isLoadingSubject.next(newIsLoading);
  }

}

