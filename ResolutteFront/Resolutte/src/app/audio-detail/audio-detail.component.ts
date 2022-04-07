import { Component, OnInit } from '@angular/core';
import { RestService, Audio } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-audio-detail',
  templateUrl: './audio-detail.component.html',
  styleUrls: ['./audio-detail.component.scss']
})
export class AudioDetailComponent implements OnInit {

  audio: Audio | undefined;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getAudio(this.route.snapshot.params.id).subscribe(
      (data: Audio) => this.audio = { ...data }
    );
  }

}
