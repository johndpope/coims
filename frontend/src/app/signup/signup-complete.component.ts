/**
 * Created by Joinsu on 2017-05-12.
 */
import {Component}        from "@angular/core";
import {SignupService}    from "../_service/signup.service";
import {Router} from "@angular/router";
@Component({
  selector: 'coims-signup-complete',
  styleUrls: ['./signup-complete.component.css'],
  templateUrl: './signup-complete.component.html'
})
export class SignupCompleteComponent{

  constructor(private signupService: SignupService,
              private router: Router){
    this.initProgressBar();
    this.deleteConsultantObj();
  }

  private initProgressBar() {
    this.signupService.progressBarObj.currentStep = 4;
  }

  private deleteConsultantObj() {
    console.log( this.signupService.consultantObj);
    if( this.signupService.isNullConsultantObj){
      this.signupService.deleteConsultantObj();
    }
  }
}
