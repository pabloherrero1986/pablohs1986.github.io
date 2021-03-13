import { Injectable } from '@angular/core';
import { Work } from '../model/work';

let works: Work[] = [
  new Work(
    'My portfolio',
    'My portfolio, handmade with love.',
    'My portfolio, handmade with love, is a SPA made with Angular and inspired on Dracula theme colors.',
    [
      'Angular',
      'Bootstrap 4'
    ],
    'https://github.com/pablohs1986/pablohs1986.github.io',
    'https://pabloherrero.me/',
    true
    ),
  new Work(
    'Addicted Bot',
    'Node.js addicted to code Twitter bot.',
    'Node.js Twitter bot. It tweet phrases about development every hour, tweet mi progress in the #100DaysOfCode challenge at 10 am and retweet development hashtags every 2 hours.',
    [
      'JavaScript',
      'Node.js',
    ],
    'https://github.com/pablohs1986/addictedDEV_TwitterBot',
    'https://twitter.com/AddictedDEVBot',
    true
    ),
  new Work(
    'Dividers',
    'A basic snipper with diagonal dividers.',
    'A basic snipper with diagonal dividers to separate sections, made with clip-path.',
    [
      'HTML5',
      'CSS3'
    ],
    'https://gist.github.com/pablohs1986/3b868e7a580bdfbf8c6d237e71f8d316',
    'https://codepen.io/pablohs1986/pen/rNxZQJN',
    true
    )
    ,
  new Work(
    'Blog',
    'Basic blog with Node.js backend.',
    'Basic Bootstrap blog running a backend with Express over Node.js, connecting to a MongoDB database.',
    [
      'HTML5',
      'CSS3',
      'Bootstrap 4',
      'Node.js',
      'Database'
    ],
    '',
    '',
    false
    )
    ,
  new Work(
    'miTiempo',
    'Productivity app made with MERN stack.',
    'Productivity app that integrates a task manager, a Pomodoro timer and a time tracker. Developed with MERN stack and available for Android and web-app.',
    [
      'React',
      'Bootstrap 4',
      'Node.js',
      'Database'
    ],
    '',
    '',
    false
    )

];

@Injectable({
  providedIn: 'root'
})
export class WorkServiceService {

  ////// CRUD //////
  /** Method that returns the array of works */
  getWorks(): Work[] {
    return works;
  }

  /** Method that returns the work of the id that is passed as a parameter. */
  getWorkById(workId: number): Work {
    return works.find(work => work.id == workId);
  }
}
