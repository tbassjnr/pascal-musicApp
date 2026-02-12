import { Routes } from '@angular/router'; 
import { Home } from './pages/home/home';
import { Music } from './pages/music/music';
import { Video} from './pages/video/video';
import { Band } from './pages/band/band';
import { Tour } from './pages/tour/tour';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'music', component: Music },
  { path: 'video', component: Video},
  { path: 'band', component: Band },
  { path: 'tour', component: Tour },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
