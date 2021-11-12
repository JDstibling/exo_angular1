import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video/video-list/video-list.component';
import { SingleVideoComponent } from './video/single-video/single-video.component';
import { VideoService } from './services/video.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './video/pagination/pagination.component';

const appRoutes : Routes = [
  
  {path: 'video',component: VideoListComponent},
  {path: 'video/view/:id',component: SingleVideoComponent},
  
  {path: '', redirectTo:'video', pathMatch:'full'},
  {path: '**', redirectTo:'video'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    SingleVideoComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
