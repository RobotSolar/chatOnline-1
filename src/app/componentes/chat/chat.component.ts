import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ResultsService } from "../../servicios/results.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public lotery;
  public results;


  constructor(private navparams: NavParams, private modal: ModalController,
    private resultsService : ResultsService) { }

  ngOnInit() {
    this.lotery = this.navparams.get('lotery');

    this.resultsService.getResultsLotery(this.lotery.id).subscribe( results => {
      this.results = results
    })
  }

  closeChat() {
    this.modal.dismiss();
  }
}
