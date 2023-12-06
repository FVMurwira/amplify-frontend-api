import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public currentDate: Date = new Date();
  public bsConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-default',
    dateInputFormat: 'YYYY-MM-DD', // Modify the format as needed
    };

  isCurrentDate(date: Date): boolean {
    return moment(date).isSame(this.currentDate, 'day');
    };

  daysInMonth: number[] = [];
  daysBeforeCurDate: number[] = [];
  daysAfterCurDate: number[] = [];
  daysCurDate: number[] = [];
  daysPrevMonthT: number[] = [];
  daysNextMonthT: number[] = [];
  daysCarlMonth: number[] = [];
  CarlMonthHeader: String[] = [];
  
  date: Date =  new Date();
  year: number = this.date.getFullYear();
  month: number = this.date.getMonth();
  currday: number = this.date.getDate();

  constructor() { }

  ngOnInit() {
    this.generateCalendar();
    //this.onNextClick();
    //this.onPrevClick();
  }

  generateCalendar() {

    this.date =  new Date();
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.currday = this.date.getDate();

    // Get the first day of the month
    let dayone = new Date(this.year, this.month, 1).getDay();  //3

    // Get the last date of the month
    let lastdate = new Date(this.year, this.month + 1, 0).getDate();
          
    // Get the day of the last date of the month
    let dayend = new Date(this.year, this.month, lastdate).getDay();
          
    // Get the last date of the previous month
    let monthlastdate = new Date(this.year, this.month, 0).getDate(); //31

    const daysPrevMonthT = new Date(this.year, this.month , 1).getDay(); // 3
    this.daysPrevMonthT = Array.from({ length: daysPrevMonthT }, (_, index) => monthlastdate - (daysPrevMonthT - (index+1)));
    
    //const daysInMonth = new Date(this.year, this.month + 1, 0).getDate(); // November 2023 has 30 days
    //this.daysInMonth = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate(); // November 2023 has 30 days
    const daysCurDate_var = this.currday;
    this.daysBeforeCurDate = Array.from({ length: daysCurDate_var - 1 }, (_, index) => index + 1);
    this.daysCurDate = Array.from({ length: 1 }, (_, index) => daysCurDate_var);
    this.daysAfterCurDate = Array.from({ length: daysInMonth - daysCurDate_var}, (_, index) => daysCurDate_var + index + 1);
    
    const daysNextMonthT = new Date(this.year, this.month, lastdate).getDay(); // November 2023 has 30 days
    this.daysNextMonthT = Array.from({ length: 6 - daysNextMonthT }, (_, index) => index + 1);
    
    //const currdate = document.querySelector(".month");
    // Array of month names
    const calmonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
      ];

      this.CarlMonthHeader = Array.from({ length: 1 }, (_, index) => `${calmonths[this.month]} ${this.year}`);
    }

    
  onPrevClick() {
    // Logic to handle the click event for the previous icon
      //let date = new Date();
      //let year = date.getFullYear();
      //let month = date.getMonth();

      // Check if the icon is "calendar-prev" or "calendar-next"
      this.month = this.month - 1;
      
      // Check if the month is out of range
      if (this.month < 0 || this.month > 11) {
          // Set the date to the first day of the month with the new year
          this.date=new Date(this.year, this.month, new Date().getDate());
          // Set the year to the new year
          this.year=this.date.getFullYear();
          // Set the month to the new month
          this.month=this.date.getMonth();
      }
      
      else {
          // Set the date to the current date
          this.date=new Date();
      }
      // Get the first day of the month
      let dayone = new Date(this.year, this.month, 1).getDay();  //3

      // Get the last date of the month
      let lastdate = new Date(this.year, this.month + 1, 0).getDate();
      
      // Get the day of the last date of the month
      let dayend = new Date(this.year, this.month, lastdate).getDay();
      
      // Get the last date of the previous month
      let monthlastdate = new Date(this.year, this.month, 0).getDate(); //31

      const daysPrevMonthT = new Date(this.year, this.month , 1).getDay(); // 3
      this.daysPrevMonthT = Array.from({ length: daysPrevMonthT }, (_, index) => monthlastdate - (daysPrevMonthT - (index+1)));
      const daysInMonth = new Date(this.year, this.month + 1, 0).getDate(); // November 2023 has 30 days
      this.daysInMonth = Array.from({ length: daysInMonth }, (_, index) => index + 1);
      const daysNextMonthT = new Date(this.year, this.month, lastdate).getDay(); // November 2023 has 30 days
      this.daysNextMonthT = Array.from({ length: 6 - daysNextMonthT }, (_, index) => index + 1);

    //const currdate = document.querySelector(".month");
    // Array of month names
    const calmonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
      ];

      this.CarlMonthHeader = Array.from({ length: 1 }, (_, index) => `${calmonths[this.month]} ${this.year}`);

      console.log('Previous icon clicked');
  }

  onNextClick() {
    // Logic to handle the click event for the next icon
    //let date = new Date();
    //let year = date.getFullYear();
    //let month = date.getMonth();

    // Check if the icon is "calendar-prev" or "calendar-next"
    this.month = this.month + 1;
    
    // Check if the month is out of range
    if (this.month > 11) {
        // Set the date to the first day of the month with the new year
        this.date=new Date(this.year, this.month, new Date().getDate());
        // Set the year to the new year
        this.year=this.date.getFullYear();
        // Set the month to the new month
        this.month=this.date.getMonth();
    }
    
    else {
        // Set the date to the current date
        this.date=new Date();
    }
    // Get the first day of the month
    let dayone = new Date(this.year, this.month, 1).getDay();  //3

    // Get the last date of the month
    let lastdate = new Date(this.year, this.month + 1, 0).getDate();
    
    // Get the day of the last date of the month
    let dayend = new Date(this.year, this.month, lastdate).getDay();
    
    // Get the last date of the previous month
    let monthlastdate = new Date(this.year, this.month, 0).getDate(); //31

    const daysPrevMonthT = new Date(this.year, this.month , 1).getDay(); // 3
    this.daysPrevMonthT = Array.from({ length: daysPrevMonthT }, (_, index) => monthlastdate - (daysPrevMonthT - (index+1)));
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate(); // November 2023 has 30 days
    this.daysInMonth = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    const daysNextMonthT = new Date(this.year, this.month, lastdate).getDay(); // November 2023 has 30 days
    this.daysNextMonthT = Array.from({ length: 6 - daysNextMonthT }, (_, index) => index + 1);

    //const currdate = document.querySelector(".month");
    // Array of month names
    const calmonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
      ];

      this.CarlMonthHeader = Array.from({ length: 1 }, (_, index) => `${calmonths[this.month]} ${this.year}`);
  
    console.log('Next icon clicked');
  }

  }