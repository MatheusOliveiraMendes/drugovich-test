import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';

@Injectable()
export class ClientService {
  private baseUrl = "https://63b73e224d97e82aa3b82e4e.mockapi.io";

  constructor(private http: HttpClient) {}

  fetchClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl + "/clients");
  }

  fetchClient(id: number) {
    return this.http.get<Client>(`${this.baseUrl}/clients/${id}`);
  }

  createClient(client: Client) {
    return this.http.post<Client>(this.baseUrl + "/clients", client);
  }

  updateClient(id: number, client: Client) {
    return this.http.put<Client>(`${this.baseUrl}/clients/${id}`, client);
  }
}
