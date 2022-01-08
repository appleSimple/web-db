import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error-message',
  template: '<div >{{ errorMessages.required }}</div>',
})

export class ErrorMessageComponent {
  readonly errorMessages: any = {
    required: '필수값 입니다.',
    korean: '한글만 입력해주세요.',
    number: '숫자만 입력해주세요.',
    email: '이메일 형식에 맞지 않습니다.',
  };
}

// TODO 에러메시지 구현하기
