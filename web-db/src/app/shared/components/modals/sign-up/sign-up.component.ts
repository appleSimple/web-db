import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @Output() openSignUp: EventEmitter<any> = new EventEmitter();

  form!: FormGroup;
  isSignUp: Boolean = false;

  constructor(private formBuilder: FormBuilder, private modal: NgbModal) {}

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
    });
  }

  doSignUp(): void {
    this.isSignUp = true;
    if (!this.form.invalid) {
      this.openSignUp.emit(false);
    }
  }

  close(): void {
    this.openSignUp.emit(false);
  }

  // TODO 로그인 컴포넌트 클릭시 프롭스 넘겨서 모달에서 서브밋할 수있게 하기!
}
