import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get<ICategory[]>('http://localhost:8081/api/categories');
  }

  getCategoryById(id: string): Observable<any> {
    return this.http.get<ICategory>(
      `http://localhost:8081/api/categories/${id}`
    );
  }

  createCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(
      'http://localhost:8081/api/categories',
      category
    );
  }

  updateCategory(category: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(
      `http://localhost:8081/api/categories/${category._id}`,
      category
    );
  }

  deleteCategory(id: string): Observable<ICategory> {
    return this.http.delete<ICategory>(
      `http://localhost:8081/api/categories/${id}`
    );
  }
  getProductsByCategory(categoryId: string): Observable<any> {
    return this.http.get<ICategory>(
      `http://localhost:8081/api/categories/${categoryId}?_embed=products`
    );
  }
}
