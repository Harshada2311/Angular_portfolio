import { Component, AfterViewInit, Inject, PLATFORM_ID ,OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import AOS from 'aos'
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { parseArgs } from 'util';

@Component({
  selector: 'app-project-details',
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements AfterViewInit , OnInit {
  projectid!: number;
  project: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object ,private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.projectid = +this.route.snapshot.paramMap.get('id')!;
    this.project= this.projects.find(p => p.id === this.projectid);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
  projects = [
    {
      id: 1,
      title: 'Viewbox-World',
      description: `Developed a feature-rich dashboard using Angular
      to improve data visualization.
      Integrated REST APIs for smooth frontendbackend communication.
      Optimized MySQL queries, reducing response time
      and improving performance by 30%.
      Implemented advanced data visualization tools for
      better insights.`,
      image: '../img/portfolio/Login.jpg',
      github: `https://github.com/Harshada2311?tab=repositories`,
      live: 'https://viewbox-world.com/',
      highlights: [
        'Developed a feature-rich dashboard using Angular to improve data visualization.',
        'Integrated REST APIs for smooth frontend-backend communication.',
        'Optimized MySQL queries, reducing response time and improving performance by 30%.'
      ],
      paragraphs: [
        `My main contribution included optimizing UI performance, and implementing state management.
         Additionally, I integrated REST APIs and enhanced security using JWT authentication.`,
        `One major challenge I faced was handling slow API response times due to heavy database queries.
         I solved this by optimizing SQL queries with proper indexing, which reduced response times significantly.`,
        `We also optimized asynchronous data handling using RxJS operators, which improved API performance.
         My role mainly focused on improving frontend performance, API integration, and database optimization.`
      ]
    },
    {
      id: 2,
      title: 'Automated Data Processing',
      description: 'Extract, transform, and process data from PDF, Excel...',
      image: '../img/services.jpg',
      github: `https://github.com/Harshada2311?tab=repositories`,
      live:'',
      Highlights: [],
      paragraphs: [`Designed and implemented C# scripts to extract,
        transform, and process data from PDF, Excel, and
        text files.`,
        `Automated data parsing and validation, reducing
        manual effort and improving accuracy.
        Utilized Regular Expressions and File I/O
        operations to efficiently handle structured and
        unstructured data.`,
        `Integrated with external systems to streamline data
        processing workflows in various business
        applications.`],
    },
    {
      id: 3,
      title: 'Property Booking System',
      description: 'Full booking solution with admin panel...',
      image: '../img/services.jpg',
      github: `https://github.com/Harshada2311/Real_Estate_property_Booking`,
      live: '',
      Highlights: [],
      paragraphs: [`Developed a comprehensive property booking system
        with an admin panel for managing listings and
        bookings.`,
        `Implemented user authentication and role-based
        access control for secure management of properties
        and bookings.`,
        `enhancing user experience and trust.
        Utilized Angular for frontend development and
        Asp.Net for backend services.`],
    },
    {
      id: 4,
      title: 'Car Rental Booking Platform',
      description: 'Real-time car booking using Angular 19...',
      image: '../img/services.jpg',
      github: `https://github.com/Harshada2311/Car_Rental_App`,
      live: '',
      Highlights: [],
      paragraphs: [`Developed a real-time car rental booking platform
        using Angular 19`,
        `Implemented features like car availability checking,
        booking management, and user authentication.`,
        `Utilized WebSocket for real-time updates on car
        availability and booking status.`],
    },
  ]

}
