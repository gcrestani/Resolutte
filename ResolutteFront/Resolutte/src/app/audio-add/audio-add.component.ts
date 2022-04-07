import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-audio-add',
  templateUrl: './audio-add.component.html',
  styleUrls: ['./audio-add.component.scss']
})
export class AudioAddComponent implements OnInit {

  @Input() audioData = { ArquivoNome: '', TipoLigacao: 0, OperadorNome: '', DataCriacao: new Date };



  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addAudio(): void {
    console.log(this.audioData);
    this.rest.addAudio(this.audioData).subscribe((result) => {
      this.router.navigate(['/audio-details/' + result._id]);
    }, (err) => {
      console.log(err);
      console.log(err.message);
    });
  }

}
