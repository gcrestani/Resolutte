import { Component, OnInit } from '@angular/core';
import { RestService, Audio } from '../rest.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlertArrayOptions } from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  audios: Audio[] = [];

  constructor(
    public rest: RestService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAudios();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese.json"
      },

    };
  }

  getAudios(): void {
    this.rest.getAudios().subscribe((resp: any) => {
      this.audios = resp;
      console.log(this.audios);
    });
  }

  add(): void {
    this.router.navigate(['/audio-add']);
  }


  Detalhes(id: string): void {
    this.router.navigate(['/audio-details/' + id]);

  }
  Editar(id: string): void {
    this.router.navigate(['/audio-edit/' + id]);
  }



  ConfirmarDelete(id: string) {
    Swal.fire({
      title: 'Tem certeza que deseja excluir esse arquivo?',
      text: 'Essa ação não poderá ser desfeita!',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Deletar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {

      if (result.value) {
        this.rest.deleteAudio(id)
          .subscribe(() => {
            this.getAudios();
          }, (err) => {
            console.log(err);
          }
          );

        Swal.fire(
          'Excluído!',
          'O arquivo foi excluído com sucesso.',
          'success'
        ).then(function () { window.location.reload(); });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado', '',
          'error'
        )
      }


    })
  }

}
