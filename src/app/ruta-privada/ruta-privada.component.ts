import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-privada',
  templateUrl: './ruta-privada.component.html',
  styleUrls: ['./ruta-privada.component.css']
})
export class RutaPrivadaComponent implements OnInit {
  id: any;

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

}
