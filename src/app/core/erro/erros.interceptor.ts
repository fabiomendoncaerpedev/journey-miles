import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';

import { MessageService } from './../services/message.service';

@Injectable()
export class ErrosInterceptor implements HttpInterceptor {

  constructor(
    private messageService: MessageService
  ) {}

  intercept(
    request: HttpRequest<HttpErrorResponse>,
    next: HttpHandler
  ): Observable<HttpEvent<HttpErrorResponse>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'an unknow error occurred';

        if (error.error instanceof ErrorEvent)
          errorMessage = `client error: ${error.error.message}`;
        else if (error.status === 404)
          errorMessage = 'resource not found';
        else if (error.status === 500)
          errorMessage = 'internal server error';
        else if (error.status === 401)
          errorMessage = 'you are not authorized to this resource';

        this.messageService.openSnackBar(errorMessage);

        return throwError(() => new Error('Ops, an error occurred!'));
      })
    );
  }
}
