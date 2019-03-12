import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { ResultsService, lotery } from '../../servicios/results.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  public LOTERIAS: any = [];

  constructor(
    public authservice: AuthService,
    public resultservice: ResultsService,
    private modal: ModalController
    ) {}

    ngOnInit() {
      this.resultservice.getLotery().subscribe(loteries => {
        
        this.LOTERIAS = loteries;
      });

      /*this.resultservice.getLotery().subscribe( lote => {
        this.LOTERIAS = lote;
      });*/
    }

}
