import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { UploadComponent } from './upload/upload.component';
import { ChatbotConfigurationComponent } from './chatbot-configuration/chatbot-configuration.component';
import { QuestionComponent } from './question/question.component';
import { TelemetryComponent } from './telemetry/telemetry.component';
import { ControlComponent } from './control/control.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'chat',component:ChatComponent},
  {path:'',redirectTo:'/upload',pathMatch:'full'}, 
  {path:'upload',component:UploadComponent},
  {path:'chatbot-configuration',component:ChatbotConfigurationComponent},
  {path:'question',component:QuestionComponent},
  {path:'telemetry',component:TelemetryComponent},
  {path:'control',component:ControlComponent},
  {path:'sign-in',component:SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
