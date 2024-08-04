import {Injectable, Injector} from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {Observable} from "rxjs";
import {IAddress, IStore} from "../../../core/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService extends ApiService {
  protected override baseURL: string = 'http://vmi2049167.contaboserver.net/main/api/v1';

  constructor(
    protected override injector: Injector,
  ) {
    super(injector);
  }

  getStores(body: any): Observable<IStore[]> {
    return this.get<IStore[]>(['stores'])
  }

  getAddressesByStoreId(id: string): Observable<IAddress[]> {
    return this.get<IAddress[]>(['stores'])
  }

}
