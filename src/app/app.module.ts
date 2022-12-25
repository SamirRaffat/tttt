import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CenterComponent } from './components/center/center.component';
import { RouterModule, Routes } from '@angular/router';
import { Footer2Component } from './components/footer2/footer2.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { PayingoffComponent } from './components/payingoff/payingoff.component';
import { AhouseComponent } from './components/ahouse/ahouse.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { BedroomComponent } from './sections/bedroom/bedroom.component';
import { ChildrensComponent } from './sections/childrens/childrens.component';
import { CupboardComponent } from './sections/cupboard/cupboard.component';
import { SinglepageComponent } from './sections/singlepage/singlepage.component';
import { BedsComponent } from './sections/beds/beds.component';
import { CornerComponent } from './livingrooms/corner/corner.component';
import { KanabComponent } from './livingrooms/kanab/kanab.component';
import { KarasiComponent } from './livingrooms/karasi/karasi.component';
import { ShazlunjComponent } from './livingrooms/shazlunj/shazlunj.component';
import { SinglelivingroomsComponent } from './livingrooms/singlelivingrooms/singlelivingrooms.component';
import { ScreenComponent } from './tarabiza/screen/screen.component';
import { MDFComponent } from './tarabiza/mdf/mdf.component';
import { SteeleComponent } from './tarabiza/steele/steele.component';
import { TarabizasingleComponent } from './tarabiza/tarabizasingle/tarabizasingle.component';
import { AccounComponent } from './Account/accoun/accoun.component';
import { RegisterComponent } from './Account/register/register.component';
import { PasswordComponent } from './Account/password/password.component';
import { AntarihComponent } from './sofa/antarih/antarih.component';
import { SafaruhComponent } from './sofa/safaruh/safaruh.component';
import { SinglesofaComponent } from './sofa/singlesofa/singlesofa.component';








const appRoutes: Routes = [
  { path: '' , redirectTo:'Center' ,pathMatch:'full'},
  { path: 'Center',component: CenterComponent  },
  //
  { path: 'bedroom',component: BedroomComponent  },
  { path: 'Childrens',component: ChildrensComponent  },
  { path: 'Cupboard',component: CupboardComponent  },
  { path: 'Beds',component: BedsComponent  },
  { path: 'Singlepage',component: SinglepageComponent  },
//livingrooms
{ path: 'Corner',component: CornerComponent  },
{ path: 'Kanab',component: KanabComponent  },
{ path: 'Karasi',component: KarasiComponent  },
{ path: 'Shazlunj',component: ShazlunjComponent  },
{ path: 'Singlelivingrooms',component: SinglelivingroomsComponent  },
//tarabizaScreen
{ path: 'Screen',component: ScreenComponent  },
{ path: 'MDF',component: MDFComponent  },
{ path: 'Steele',component: SteeleComponent  },
{ path: 'Tarabizasingle',component: TarabizasingleComponent  },

//safaruh
{ path: 'Antarih',component: AntarihComponent  },
{ path: 'Safaruh',component: SafaruhComponent  },
{ path: 'Singlesofa',component: SinglesofaComponent  },




//REGISTER ACCOUNT
{ path: 'Accoun',component: AccounComponent  },
{ path: 'Register',component: RegisterComponent  },
{ path: 'Password',component: PasswordComponent  },




//footer
  { path: 'Footer2',component: Footer2Component  },
  { path: 'Privacy',component: PrivacyComponent  },
  { path: 'Recovery',component: RecoveryComponent},
  { path: 'payingoff',component: PayingoffComponent},
  { path: 'Ahouse',component: AhouseComponent},
  { path: 'questions',component: QuestionsComponent},


];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    Footer2Component,
    PrivacyComponent,
    RecoveryComponent,
    PayingoffComponent,
    AhouseComponent,
    QuestionsComponent,
    BedroomComponent,
    ChildrensComponent,
    CupboardComponent,
    SinglepageComponent,
    BedsComponent,
    CornerComponent,
    KanabComponent,
    KarasiComponent,
    ShazlunjComponent,
    SinglelivingroomsComponent,
    ScreenComponent,
    MDFComponent,
    SteeleComponent,
    TarabizasingleComponent,
    AccounComponent,
    RegisterComponent,
    PasswordComponent,
    AntarihComponent,
    SafaruhComponent,
    SinglesofaComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
