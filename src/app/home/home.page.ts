import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ChatsService, chat } from '../servicios/chats.service';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from '../componentes/chat/chat.component';
import { AngularFirestore } from "@angular/fire/firestore";



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public chatRooms: any = [];

  constructor(
    public dataBase : AngularFirestore,
    public authservice: AuthService,
    public chatservice: ChatsService,
    private modal: ModalController
     ) {}

  onLogOut() {
    this.authservice.logout();

  }
  ngOnInit() {
    this.chatservice.getChatRooms().subscribe( chats => {
      console.log(chats)
      this.chatRooms = chats;

      

      // chats.map( lot => {
      //   // console.log(lot.id)
      //   this.dataBase.collection('LOTERIAS').doc(lot.id).update({
      //     lotery_id : 'GkcOUuYerNMdhq3MgpUv'
      //   })
      // })

    });
    
  }

  openChat(chat) {

    this.modal.create({
      component: ChatComponent,
      componentProps : {
        lotery: chat
      }
    }).then( (modal) => modal.present());
  }
}
