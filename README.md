# Angular5
Angular 5 App

Angular5 Tutorial for Beginners

Video 1: Creating Angular 5 Application with CLI

    Installation of Node JS
    Download Node Js: https://nodejs.org/en/
    Check Node Js version of your system with command: node -v
    Check NPM version of your system with command: npm -v

    Installation of angular CLI
    Command : npm install @angular/cli -g
    Check CLI version your system with command: ng -v

    Create Angular Application with CLI
    Command : ng new your-app-name --style=scss --routing

    To RUN the Project use command: ng serve [ don't forget to switch to project directory ]

    Other Reference Links : 
    https://angular.io/guide/quickstart

    My Git  Repository : 
    https://github.com/fareed543/Angular5


Video 2: Creating Angular 5 Application with out CLI

    Download the Sample Application from Angular Quick Start Page
    https://angular.io/guide/quickstart
    When you install for the first time you will get an error in Command Prompt
        Your global Angular CLI version (1.6.3) is greater than your local
        version (1.5.0). The local Angular CLI version is used.
    RUN the command : npm install --save-dev @angular/cli@latest


Video 3 : Create Angular 5 Application with Material Design
    Download / configure/use Material Module in Angular Application,
    How to download Material Js 
    How to Generate Components using angular CLI
    How to use routing in angular CLI
    Download sample Material Template and do the changes in component ect.

Video 4 : Routing in Angular Application
    Generate components using angular CLI
    Command : ng generate component about
    Command : ng g c home
    Command : ng g c services

Video 5 : Interpolation in Angular 5 Application
    interpolation is used communicate defined in component call show them in the template
    we are going to see two way data binding incoming video Angular Form

Video 7 & 8 : Create Build and Deploy Angular 5 Application
    Create Build
    ng build 
    ng build --prod
    Deploy the Application in Subfolder http://techdefeat.com/ng5/
    ng build --prod --base-href="http://techdefeat.com/ng5/ for subdomain

Video 3: How to stop ng serve
    You may get a Question to RUN Project we are using command ng serve but i will run until you stop
    to stop this click ctrl + c
    i will ask "Terminate batch job (Y/N)?" then enter : Y
    if you close that console by default then you have to kill the process
    When you then application you can see the port onwhich the project is running mine working on 4200
    Search for the process working on prot number
    netstat -ano | findstr :4200
    then kill the port process by using the process id
    taskkill /PID 15940 /F

Video 9 :
    Create a Contact page with form
    When submit send the details to an API
    Show the reponse
    Uncaught Error: Unexpected value 'FormGroup' imported by the module 'AppModule'. Please add a @NgModule 
    FormsModule, ReactiveFormsModule
    if you wont includes then you wont get directive and components provided by that


    Error:  MatFormField.html:1 ERROR Error: Found the synthetic property @transitionMessages. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.
    Solution : In your app.module.ts file, import BrowserAnimationsModule
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    Also add BrowserAnimationsModule to the imports array
    @NgModule({
    imports: [
        BrowserAnimationsModule,

        

    Error:  I am using angular-4 cli and (ngSubmit) doesn't work. 
    Solution : Use (submit) instead of (ngSubmit).

    Error: Template parse errors:
        Can't bind to 'ngmodel' since it isn't a known property of 'input'. ("at-form-field class="example-full-width">
                            <input matInput placeholder="Name"  [ERROR ->][(ngmodel)]="name" >
                            </mat-form-field>
                    </div>
        "): ng:///AppModule/ContactComponent.html@8:58
        Ealier [(ngmodel)]="name" changed to (ng-model)="message"


    Error: Your global Angular CLI version (1.6.3) is greater than your local version (1.6.0). The local Angular CLI version is used.
    Solution :   To disable this warning use "ng set --global warnings.versionMismatch=false".