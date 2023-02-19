import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  constructor(private appService: AppService) {}

  title = 'angular-nodejs-example';

  personForm = new FormGroup({
    search: new FormControl('', Validators.nullValidator && Validators.required),
  });

  people: any[] = [];
  personCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    this.appService.addPerson(this.personForm.value, this.personCount + 1).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.personCount = this.personCount + 1;
      console.log(this.personCount);
      this.personForm.reset();
    });
  }

  getAllPeople() {
    this.appService.getPeople().pipe(takeUntil(this.destroy$)).subscribe((swapiResult: any) => {
      this.personCount = swapiResult.results.length;
      this.people = swapiResult.results;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
	  this.getAllPeople();
  }
}
