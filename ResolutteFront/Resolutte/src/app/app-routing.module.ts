import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioComponent } from './audio/audio.component';
import { AudioDetailComponent } from './audio-detail/audio-detail.component';
import { AudioAddComponent } from './audio-add/audio-add.component';
import { AudioEditComponent } from './audio-edit/audio-edit.component';

const routes: Routes = [
  {
    path: 'audios',
    component: AudioComponent,
    data: { title: 'Audio List' }
  },
  {
    path: 'audio-details/:id',
    component: AudioDetailComponent,
    data: { title: 'Audio Details' }
  },
  {
    path: 'audio-add',
    component: AudioAddComponent,
    data: { title: 'Audio Add' }
  },
  {
    path: 'audio-edit/:id',
    component: AudioEditComponent,
    data: { title: 'Audio Edit' }
  },
  { path: '',
    redirectTo: '/audios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
