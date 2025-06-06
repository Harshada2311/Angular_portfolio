import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CertificationDetailsComponent } from './certification-details/certification-details.component';

export const routes: Routes = [
    
    {path: '',redirectTo: '/hero', pathMatch: 'full'},
    {path: 'hero', component: HeroComponent},
    {path: 'about', component: AboutComponent},
    {path:'resume', component: ResumeComponent},
    {path: 'skills',component: SkillsComponent},
    {path: 'certifications',component: CertificationsComponent},
    {path: 'projects',component: ProjectsComponent },
    {path: 'contact', component: ContactComponent},
    {path: 'project-details', component: ProjectDetailsComponent},
    {path: 'project-details/:id', component: ProjectDetailsComponent},
    {path: 'certification-details', component: CertificationDetailsComponent},
    {path: 'certification-details/:id', component: CertificationDetailsComponent},
    { path: '**', component: HeroComponent } // Wildcard route for a 404 page,

];
