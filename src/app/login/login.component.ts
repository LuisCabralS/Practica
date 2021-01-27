import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;

  constructor(private authService: AuthServiceService, private router: Router) { }

  user:string ;
  ngOnInit() {
    this.formGroup = new FormGroup({
      //Validaciones de usuarios
      username: new FormControl ('', [Validators.required, Validators.maxLength(10)] ),
      password: new FormControl ('', [Validators.required])
    });
  }

  get data() { return this.formGroup.controls; }

  onSubmit() {    
    if (this.formGroup.invalid) {
      return;
    } else if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
           //Conversion y Almacenamiento del usuario en la variable ya de enviroment
          this.user = ((document.getElementById("user") as HTMLInputElement).value);
          console.log(this.user)
         
          environment.ya = this.user;
          this.router.navigate(['/home']);

        }
        else {
          this.submitted = true;      
        }
        
        });
    
    } 
  }
}

