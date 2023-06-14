
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) { }

    getUserProfile(): Observable<any> {
        return this.http.get<any>(
            `http://localhost:8081/api/user/profile`
        );
    }

    updateUser(data: { name: string, email: string }): Observable<any> {
        return this.http.put<any>(
            `http://localhost:8081/api/user/update`, data
        );
    }
    updateCart(data: any) {
        return this.http.put<any>(
            `http://localhost:8081/api/cart`, data
        );
    }
    deleteCart(id: any) {
        return this.http.delete<any>(
            `http://localhost:8081/api/cart/` + id
        );
    }
    comment(data: any): Observable<any> {
        return this.http.post<any>(
            `http://localhost:8081/api/user/comment`, data
        );
    }
}
