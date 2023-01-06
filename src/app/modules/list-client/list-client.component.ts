import { Component } from '@angular/core';
import { Client } from 'src/app/core/model/client.model';
import { ClientService } from 'src/app/core/service/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent {

  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.fetchClients()
      .subscribe((res) => this.clients = res);
  }
}
