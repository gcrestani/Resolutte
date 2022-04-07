import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-audio-edit',
  templateUrl: './audio-edit.component.html',
  styleUrls: ['./audio-edit.component.scss']
})
export class AudioEditComponent implements OnInit {

  @Input() audioData: any = { prod_name: '', prod_desc: '', prod_price: 0 };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getAudio(this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      this.audioData = data;
    });
  }

  updateAudio(): void {
    this.audioData.tipoLigacao = Number(this.audioData.tipoLigacao); //forca ser int
    console.log(this.audioData);
    this.rest.updateAudio(this.route.snapshot.params.id, this.audioData).subscribe((result) => {
      console.log(result.id);
      this.router.navigate(['/audio-details/' + this.route.snapshot.params.id]);
    }, (err) => {
      console.log(err);
    });
  }

}
