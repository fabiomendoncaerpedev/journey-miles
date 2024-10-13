import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/types/types';
import { FormService } from './../../core/services/form.service';
import { UserService } from 'src/app/authentication/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  name = '';
  user!: User;
  form!: FormGroup<any> | null;

  constructor(
    private userService: UserService,
    private formService: FormService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.findRegister().subscribe({
      next: (response) => {
        this.user = response;
        this.name = response.nome;

        this.loadForm();
      }
    })
  }

  updateInfoUser() {
    const updatedData: User = {
      nome: this.form?.value.name,
      nascimento: this.form?.value.bornDate,
      cpf: this.form?.value.cpf,
      cidade: this.form?.value.city,
      genero: this.form?.value.gender,
      telefone: this.form?.value.phone,
      estado: this.form?.value.state,
      email: this.form?.value.email,
      senha: this.form?.value.password
    }

    this.userService.editRegister(updatedData).subscribe({
      next: (response) => {
        alert('updated successfuly')
        this.router.navigate(['/'])
      }
    })
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['auth/login']);
  }

  loadForm() {
    this.form = this.formService.getForm();
    this.form?.patchValue({
      name: this.user.nome,
      bornDate: this.user.nascimento,
      cpf: this.user.cpf,
      city: this.user.cidade,
      gender: this.user.genero,
      phone: this.user.telefone,
      state: this.user.estado,
      email: this.user.email,
      password: this.user.senha
    });
  }
}
