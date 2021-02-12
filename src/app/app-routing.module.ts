import { ErrorComponent } from './error/error.component';
import { HealthQuestionnaireComponent } from './health-questionnaire/health-questionnaire.component';
import { ThanksComponent } from './thanks/thanks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'thanks', component: ThanksComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', component: HealthQuestionnaireComponent },
   // { path: '',   redirectTo: '/', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
