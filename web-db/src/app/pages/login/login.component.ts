import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	isSignUp: Boolean = false;

  constructor(private router: Router, private modal: NgbModal) { }

  ngOnInit(): void {
  }

	onSubmit(): void {
		this.router.navigate(['./']);
	}

	open(content: any) {
    this.modal.open(content, {ariaLabelledBy: 'modal-basic-title', backdrop: false}).result.then((result) => {
			this.isSignUp = true;
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
