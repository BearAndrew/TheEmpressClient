import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;

  constructor(private http: HttpClient,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  newUser() {
    this.firestore.collection('users').add({name: this.name}).then(() => {
      console.log('add user');
    });
  }
}
