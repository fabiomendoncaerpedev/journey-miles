import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UF } from '../types/types';
import { environment } from 'src/environments/environment';

@Injectable()
export class UfService {

  private API: string = environment.urlUF;
  private apiCache$?: Observable<Array<UF>>;

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Array<UF>> {
    if (!this.apiCache$)
      this.apiCache$ = this.getUF();

    return this.apiCache$;
  }

  private getUF(): Observable<Array<UF>> {
    return this.http.get<Array<UF>>(this.API).pipe(
      map(
        (previousValue) => previousValue.map((uf) => {
          return {
            id: uf.id,
            nome: uf.nome,
            sigla: uf.sigla
          }
        })
      ),
      shareReplay(1),
    );
  }

}
