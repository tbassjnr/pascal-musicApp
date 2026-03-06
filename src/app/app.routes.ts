import { Routes } from '@angular/router'; 
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: 'home', title: 'Home - Pascal Koomson Ministries', component: Home },
  { path: 'music' , title: 'Music - Pascal Koomson Ministries', loadComponent : () => import('./pages/music/music').then(m => m.Music) },
  { path: 'video', title: 'Video - Pascal Koomson Ministries', loadComponent: () => import('./pages/video/video').then(m => m.Video) },
  { path: 'band', title: 'Band - Pascal Koomson Ministries', loadComponent: () => import('./pages/band/band').then(m => m.Band) },
  { path: 'ministry', title: 'Ministry - Pascal Koomson Ministries', loadComponent: () => import('./pages/ministry/ministry').then(m => m.Ministry) },
  { path: 'give', title: 'Give - Pascal Koomson Ministries', loadComponent: () => import('./pages/give/give').then(m => m.Give) },
  { path: 'volunteer', title: 'Volunteer - Pascal Koomson Ministries', loadComponent: () => import('./pages/volunteer/volunteer').then(m => m.Volunteer) },
  { path: 'celebrate-jesus', title: 'Celebrate Jesus - Pascal Koomson Ministries', loadComponent: () => import('./pages/celebrate-jesus/celebrate-jesus').then(m => m.CelebrateJesus) },
  { path: 'sing-out-experience', title: 'Sing Out Experience - Pascal Koomson Ministries', loadComponent: () => import('./pages/singout-experience/singout-experience').then(m => m.SingoutExperience) },
  { path: 'choose-jesus-campaign', title: 'Choose Jesus Campaign - Pascal Koomson Ministries', loadComponent: () => import('./pages/choose-jesus-campaign/choose-jesus-campaign').then(m => m.ChooseJesusCampaign) },
  { path: 'management', title: 'Management - Pascal Koomson Ministries', loadComponent: () => import('./pages/management/management').then(m => m.Management) },
  { path: 'tour', title: 'Tour - Pascal Koomson Ministries', loadComponent: () => import('./pages/tour/tour').then(m => m.Tour) },
  { path: 'about', title: 'About - Pascal Koomson Ministries', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'contact', title: 'Contact - Pascal Koomson Ministries', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
  { path: 'protocol', title: 'Protocol - Pascal Koomson Ministries', loadComponent: () => import('./pages/protocol/protocol').then(m => m.Protocol) },
  { path: 'checkout/:id', title: 'Checkout - Pascal Koomson Ministries', loadComponent: () => import('./pages/checkout/checkout').then(m => m.Checkout) },
  { path: 'register/:id', title: 'Register - Pascal Koomson Ministries', loadComponent: () => import('./pages/register/register').then(m => m.Register) },
  { path: 'details/:id', title: 'Details - Pascal Koomson Ministries', loadComponent: () => import('./pages/details/details').then(m => m.Details) },
  { path: 'high-res-photos', title: 'High Res Photos - Pascal Koomson Ministries', loadComponent: () => import('./pages/high-res-photos/high-res-photos').then(m => m.HighResPhotos) },
  { path: 'biography', title: 'Biography - Pascal Koomson Ministries', loadComponent: () => import('./pages/biography/biography').then(m => m.Biography) },
  { path: 'tech-rider', title: 'Tech Rider - Pascal Koomson Ministries', loadComponent: () => import('./pages/tech-rider/tech-rider').then(m => m.TechRider) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
