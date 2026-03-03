import { Routes } from '@angular/router'; 
import { Home } from './pages/home/home';
import { Music } from './pages/music/music';
import { Video} from './pages/video/video';
import { Band } from './pages/band/band';
import { Tour } from './pages/tour/tour';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Protocol } from './pages/protocol/protocol';
import { Checkout } from './pages/checkout/checkout';
import { Register } from './pages/register/register';
import { Details } from './pages/details/details';
import { CelebrateJesus } from './pages/celebrate-jesus/celebrate-jesus';
import { Management } from './pages/management/management';
import { min } from 'rxjs';
import { Ministry } from './pages/ministry/ministry';
import { SingoutExperience } from './pages/singout-experience/singout-experience';
import { ChooseJesusCampaign } from './pages/choose-jesus-campaign/choose-jesus-campaign';
import { Give } from './pages/give/give';
import { Volunteer } from './pages/volunteer/volunteer';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'music', component: Music },
  { path: 'video', component: Video},
  { path: 'band', component: Band },
  { path: 'ministry', component: Ministry },
  { path: 'give', component: Give },
  { path: 'volunteer', component: Volunteer }, 
  { path: 'celebrate-jesus', component: CelebrateJesus },
  { path: 'sing-out-experience', component: SingoutExperience },
  { path: 'choose-jesus-campaign', component: ChooseJesusCampaign},
  { path: 'management', component: Management },
  { path: 'tour', component: Tour },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'protocol', component: Protocol},
  { path: 'checkout/:id', component: Checkout},
  { path: 'register/:id', component: Register },
  { path: 'details/:id', component: Details },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
