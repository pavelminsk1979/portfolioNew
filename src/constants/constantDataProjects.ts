import imgSamuraiWai from '../assets/image/fotoSamuraiWay.jpg'
import imgLearnDecks1 from '../assets/image/learnDecks1.jpg'
import imgLearnDecks2 from '../assets/image/learnDecks2.jpg'
import imgLearnDecks3 from '../assets/image/learnDecks3.jpg'
import imgLearnDecks4 from '../assets/image/learnDecks4.jpg'
import imgLearnDecks5 from '../assets/image/learnDecks5.jpg'
import imgLearnDeckMains from '../assets/image/learnDecksMain.jpg'
import imgMySocial from '../assets/image/mySamuraiWai.jpg'
import imgSamuraiWaiLogin from '../assets/image/mySamuraiWaiLogin.jpg'
import imgSocial from '../assets/image/social.png'
import imgTask1 from '../assets/image/task1jpg.jpg'
import imgTask2 from '../assets/image/task2.jpg'
import imgTask3 from '../assets/image/task3.jpg'
import imgTask4 from '../assets/image/task4jpg.jpg'
import imgTaskMain from '../assets/image/taskMain.jpg'

export const DATA_PROJECTS = [
  {
    email: 'pavelminsk1979@mail.ru',
    id: 0,
    imgsAloneProject: [imgSocial, imgSamuraiWai, imgMySocial, imgSamuraiWaiLogin],
    link: 'https://pavelminsk1979.github.io/samurai/#/',
    password: '1979@pav',
    technologies:
      '  React (классовые компоненты), Redux, CSS,  JavaScript, TypeScript. Для запросов на сервер\n' +
      '            использовалfcm библиотекf Axios. Также в проекте реализована функциональность\n' +
      '            логинизации с помощью библиотеки redux-form.',
  },
  {
    email: 'pavelminsk1979@mail.ru',
    id: 1,
    imgsAloneProject: [imgTaskMain, imgTask1, imgTask2, imgTask3, imgTask4],
    link: 'https://pavelminsk1979.github.io/mainTodolist/',
    password: '1979@pav',
    technologies:
      'React, ReduxToolkit, JavaScript,\n' +
      'TypeScript, Axios, TDD, Material-UI, логинизация с\n' +
      'использованием библиотеки Formik',
  },
  {
    email: ' pavelminsk1979@mail.ru',
    id: 2,
    imgsAloneProject: [
      imgLearnDeckMains,
      imgLearnDecks1,
      imgLearnDecks2,
      imgLearnDecks3,
      imgLearnDecks4,
      imgLearnDecks5,
    ],
    link: 'https://decks-two.vercel.app/decks',
    password: '12345',
    technologies:
      ' React, RTK Query, JavaScript, TypeScript, Axios, Radix, React\n' +
      'Hook Form+Zod, Storybook,Figma, UI Kit, Git+ GITHUB,SCSS',
  },
]

export type DataProject = {
  email: string
  id: number
  imgsAloneProject: string[]
  link: string
  password: string
  technologies: string
}
