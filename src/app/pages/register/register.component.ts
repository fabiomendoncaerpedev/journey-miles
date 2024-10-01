import { Component } from '@angular/core';
import { User } from 'src/app/core/types/types';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(

    private userService: UserService
  ) {}

  register(dataForm: any) {
    const newUserData: User = {
      cidade: dataForm.city,
      cpf: dataForm.cpf,
      email: dataForm.email,
      estado: dataForm.state,
      genero: dataForm.gender,
      nascimento: dataForm.bornDate,
      nome: dataForm.name,
      senha: dataForm.password,
      telefone: dataForm.phone
    };

    this.userService.register(newUserData).subscribe({
      next: (response) => console.log(response)
    })
  }
}
