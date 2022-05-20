import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "./data.service";
import {MatMenuTrigger} from "@angular/material/menu";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  campaignOne: FormGroup;
  constructor(public data: DataService) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(2010, 1, 1)),
      end: new FormControl(new Date(2021, 12, 31)),
    })
    console.log(this.campaignOne.value)

  }

  ASSAULT = ['COLD WEAPON', 'FIREARM', 'OUTBURST', 'SUFFOCATION/STRANGULATION',
    'HITTING', 'IMMOBILIZATION', 'VERBAL INTIMIDATION',
    'OTHER OR UNDETERMINED', 'USE OF GAS', 'UNKNOWN']

  HOMICIDE = ['REVENGE', 'ARGUMENT/FIGHT', 'NOT DETERMINED',
    'OTHER OR UNDETERMINED', 'PROFESSIONAL NEGLECT',
    'FOR THE COMMISSION OF ANOTHER CRIME',
    'AVOIDING CRIMINAL ACTIVITY', 'FEMICIDE', 'DOMESTIC VIOLENCE',
    'IDEOLOGICAL', 'UNKNOWN']

  THEFT = ['DECEIT/DISTRACTION', 'PICKPOCKETING', 'WITH A WRENCH', 'PICKLOCK',
    'OTHER OR UNDETERMINED', 'DUE TO TRUST', 'UNKNOWN',
    'DUE TO NEGLECT', 'PROGRESSIVE THEFTS DURING THE DAY',
    'ATM WITHDRAWAL', 'USE OF SLEEPING PILLS']

  ROBBERY = ['BREAKING AND ENTRY', 'CUT PADLOCKS', 'ESCALATION', 'FORCE',
    'UNKNOWN', 'OTHER OR UNDETERMINED', 'BLINDS REMOVAL',
    'BREAKING WINDOWS']

  VEHICLE_THEFT = ['ASSAULT', 'CARJACKING', 'NEGLECT', 'OTHER OR UNDETERMINED',
    'DUE TO TRUST', 'VEHICLE THEFT', 'UNKNOWN']

  VEHICLE_VANDALISM = ['VEHICLE VANDALISM']



  ngOnInit(): void {
  }

}
