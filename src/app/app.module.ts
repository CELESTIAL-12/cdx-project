import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ChatbotConfigurationComponent } from './chatbot-configuration/chatbot-configuration.component';
import { ControlComponent } from './control/control.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { UploadComponent } from './upload/upload.component';
import { TelemetryComponent } from './telemetry/telemetry.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatbotConfigurationComponent,
    ControlComponent,
    LoginComponent,
    QuestionComponent,
    UploadComponent,
    TelemetryComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
