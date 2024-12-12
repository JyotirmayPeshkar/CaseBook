import { Routes } from '@angular/router';
import { ServicesComponent } from './views/services/services.component';
import { HomeComponent } from './views/home/home.component';
import { ResumeComponent } from './views/resume/resume.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ContactComponent } from './views/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' }, // Default route
  { path: 'Home', component: HomeComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Resume', component: ResumeComponent },
  { path: 'Portfolio', component: PortfolioComponent },
  { path: 'Contact', component: ContactComponent },
];

