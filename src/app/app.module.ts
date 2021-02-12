import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule} from '@angular/material/input';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectModule} from '@angular/material/select';
import { MatCardModule} from '@angular/material/card';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatStepperModule} from '@angular/material/stepper';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { SymptomComponent } from './symptom/symptom.component';
import { HealthQuestionnaireComponent } from './health-questionnaire/health-questionnaire.component';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ThanksComponent } from './thanks/thanks.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddressComponent,
    SymptomComponent,
    HealthQuestionnaireComponent,
    ThanksComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
