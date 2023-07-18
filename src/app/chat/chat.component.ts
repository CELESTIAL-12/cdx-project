import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

interface Message {
  content: string;
  sender: string;
  author: string;
  des: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent {
  messages: Message[] = [];
  newMessageText: string = '';
  value: string | undefined;

  constructor(private chatService: ChatService) {
    this.getMovies();
  }

  getMovies(): void {
    this.chatService.getAllMovies().subscribe(
      data => {
        this.messages = data.map((movie: any) => ({
          content: movie.content,
          sender: movie.sender,
          author: 'bot',
          des: movie.des
        }));
      },
      error => {
        console.log(error);
      }
    );
  }

  clearChat(): void {
    this.messages = [];
  }

  sendMessage(): void {
    if (this.newMessageText.trim() === '') {
      return; // Ignore empty messages
    }

    const userMessage: Message = {
      content: this.newMessageText,
      sender: 'user',
      author: 'user',
      des: ''
    };

    this.messages.push(userMessage); // Add the user message to the messages array

    // Send the user message to the backend
    this.chatService.getMovies(this.newMessageText).subscribe(
      (response: any) => {
        const botMessage: Message = {
          content: response.content,
          sender: response.sender,
          author: 'bot',
          des: response.des
        };

        this.messages.push(botMessage); // Add the bot message to the messages array
      },
      error => {
        console.log(error);
      }
    );

    this.newMessageText = ''; // Clear the input field after sending the message
  }

}

/* <div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-sm-3 col-md-6 col-lg-2 ml-auto mt-3">
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-center mt-4">
                        <button class="btn btn-primary" (click)="clearChat()">Create New</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-9 col-md-6 col-lg-6 mt-3">
            <!-- Second container with increased height and width -->
            <div class="card h-100">
                <div class="card-body">
                    <div class="chat-container" style="height: 550px; overflow-y: auto;">
                        <!-- User Chat -->
                        <ng-container *ngFor="let message of messages">
                            <div class="media flex items-end justify-end" *ngIf="message.author === 'user'">
                                <div
                                    class="media-body flex flex-col space-y-2 text-sm max-w-m mx-2 order-1 items-end font-medium mb-6">
                                    <img src="assets/images/users/user.png" class="mr-3" alt="User Avatar" width="50"
                                        height="50">
                                    <p class="user-message px-4 py-2 rounded-lg inline-block rounded-bl-none border border-gray-100 bg-gray-50 text-gray-600 dark:border-slate-800 dark:bg-slate-700 dark:text-slate-400"
                                        style="max-width: 50%;">
                                        {{ message.content }}
                                    </p>
                                </div>
                            </div>

                            <!-- Bot Chat -->
                            <div class="media" *ngIf="message.author === 'bot'">
                                <img src="assets/images/users/bot.png" class="mr-3" alt="Bot Avatar" width="50"
                                    height="50">
                                <div
                                    class="media-body flex flex-col space-y-2 text-sm max-w-m mx-2 order-2 items-start font-medium">
                                    <p class="bot-message px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-500 text-white"
                                        style="max-width: 50%;">
                                        {{ message.des }}
                                    </p>
                                    <div class="text-right" *ngIf="message.author === 'bot'">
                                        <button class="btn btn-sm btn-link text-success"><i
                                                class="fas fa-thumbs-up"></i></button>
                                        <button class="btn btn-sm btn-link text-danger"><i
                                                class="fas fa-thumbs-down"></i></button>
                                    </div>
                                </div>
                            </div>
                        </ng-container>
                    </div>




                    <div class="input-group position-absolute  bottom-0 start-0 end-0">
                        <input [(ngModel)]="newMessageText" type="text" (keyup.enter)="sendMessage()"
                            class="form-control" placeholder="Type your message...">
                        <button class="btn btn-primary" type="button" (click)="sendMessage()">
                            <i class="fas fa-paper-plane"></i>
                        </button>

                    </div>

                </div>
            </div>
        </div>
        
    </div>
</div> */