import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
	@Input() isSignUp!: Boolean;

	form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
		this.initForm();
  }

	initForm(): void {
		this.form = this.formBuilder.group({
			userName: ['', [Validators.required]],
			loginId: ['', [Validators.required]],
			password: ['', [Validators.required]],
			checkPassword: ['', [Validators.required]],
			address: ['', [Validators.required]],
			detailAddress: ['', [Validators.required]],
		})
	}

	// TODO 로그인 컴포넌트 클릭시 프롭스 넘겨서 모달에서 서브밋할 수있게 하기!
}
