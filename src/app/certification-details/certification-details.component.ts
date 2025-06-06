import { Component, AfterViewInit, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import AOS from 'aos'
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-certification-details',
  imports: [RouterLink,CommonModule],
  templateUrl: './certification-details.component.html',
  styleUrl: './certification-details.component.css'
})
export class CertificationDetailsComponent implements AfterViewInit,OnInit {
  certificationid!: number;
  certification: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
  certifications = [
    {
      id: 1,
      title: 'Building Web APIs with ASP.NET Core 8',
      description: 'Building Web APIs with ASP.NET Core 8',
      imageUrl: '/img/portfolio/CertificateOfCompletion_Building Web APIs with ASP.NET Core 8_page-0001.jpg',
      Date: 'April, 2025',
      Categorys: 'Backend Development',
      link: 'https://www.linkedin.com/learning/certificates/d62856e7c8c0f1053d0da5791fc665fbbf53311b60cfabe4357ba07646b7b83e?trk=share_certificate',
      paragraphs: [
        `This course provided a comprehensive understanding of building Web APIs using ASP.NET Core 8.
         It covered essential topics such as RESTful API design, routing, and middleware configuration.`,
        `I learned how to implement authentication and authorization mechanisms, ensuring secure access to the APIs.
         The course also emphasized best practices for error handling and response formatting.`,
        `By the end of the course, I was able to create robust and scalable Web APIs that can be integrated with various client applications.`
      ]
    },
    {
      id: 2,
      title: 'javascript basic certificate',
      description: 'This course provided a comprehensive understanding of JavaScript fundamentals, including variables, data types, functions, and control structures.',
      imageUrl: '/img/portfolio/javascript_basic certificate_page-0001.jpg',
      link: 'https://www.hackerrank.com/certificates/iframe/814e4ab11af1',
      Date: 'May, 2025',
      Categorys: 'Programming Languages',
      paragraphs: [
        `The course covered essential topics such as object-oriented programming, asynchronous programming, and error handling.
         I learned how to manipulate the DOM, handle events, and work with APIs to fetch and display data dynamically.`,
        `By the end of the course, I was able to write clean and efficient JavaScript code, build interactive web applications, and understand the core principles of modern JavaScript development.`
      ]
    
    },
      
    {
      id: 3,
      title: 'Learning Angular',
      description: 'Demonstrates the ability to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions on Google Cloud.',
      imageUrl: '/img/portfolio/CertificateOfCompletion_Learning Angular_page-0001.jpg',
      link: 'https://www.linkedin.com/learning/certificates/55af8ae8ed6eadb4fa108fd1025a96d56a1f39bb708fac564ffb6a15622f799a?trk=share_certificate',
      Date: 'April, 2025',
      Categorys: 'Frontend Development',
      paragraphs: [`Angular is a powerful framework for building web applications. In this course, learned the fundamentals of Angular, including components, templates, and services.`,
                 `Explore how to create a single-page application (SPA) with Angular and how to use Angular CLI to streamline your development process.
                 Learn how to work with forms, handle user input, and manage state in your application. Finally, discover how to deploy your Angular application and make it available to users.`,
                 `This course is perfect for anyone looking to get started with Angular or enhance their existing skills.
                 With hands-on challenges and real-world examples, you'll gain the knowledge and confidence to build your own Angular applications.`]
    },
    {
      id: 4,
      title: 'javaScript intermidiate certificate',
      description: 'This course provided a advanced understanding of JavaScript concepts, including asynchronous programming, closures, and the event loop.',
      imageUrl: '/img/portfolio/javascript_intermediate certificate_page-0001.jpg',
      link: 'https://www.hackerrank.com/certificates/iframe/3ef4947fe5ed',
      Date: 'May, 2025',
      Categorys: 'Backend Development',
      paragraphs: [`The course covered advanced topics such as functional programming, error handling, and performance optimization.
                 I learned how to work with JavaScript frameworks and libraries, such as Angular and Node.js, to build dynamic web applications.`,
                 `By the end of the course, I was able to write complex JavaScript code, build scalable applications, and understand the core principles of modern JavaScript development.`]
    },
  ]
  ngOnInit() {
    // Additional initialization logic can go here if needed
    this.certificationid = +this.route.snapshot.paramMap.get('id')!;
    this.certification = this.certifications.find(c => c.id === this.certificationid);}
}
