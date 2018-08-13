export default {
  id: 1,
  created_at: '2018-08-03T00:00:00+0200',
  updated_at: '2018-08-11T01:22:22+0200',
  is_active: true,
  username: 'Favouille',
  first_name: 'Georges',
  last_name: 'Sempéré',
  email: 'favouille@gmail.com',
  password: 'trololo',
  pseudo_github: 'Milbrin',
  zip: 13003,
  birthday: '1979-11-17T00:00:00+0100',
  bookmarks: [
    {
      id: 1,
      created_at: '2018-08-11T12:14:44+0200',
      updated_at: '2018-08-11T13:43:29+0200',
      is_active: true,
      title: 'Les RegEx',
      resume: 'Super vidéo pour débuter dans les regex!',
      url: 'https://www.youtube.com/watch?v=Jr0BYDT-EV4',
      image: 'https://www.youtube.com/watch?v=Jr0BYDT-EV4.jpg',
      banned: false,
      published_at: '2008-03-12T00:00:00+0100',
      author: 'Jean-Noël PIERRE',
      warnings: [],
      support: {
        id: 3,
        created_at: '2018-08-11T12:00:46+0200',
        updated_at: '2018-08-11T12:00:46+0200',
        is_active: true,
        name: 'Vidéo',
        bookmarks: [],
      },
      difficulty: {
        id: 1,
        created_at: '2018-08-11T11:47:36+0200',
        updated_at: '2018-08-11T11:47:36+0200',
        is_active: true,
        name: 'Apprentissage',
        level: 1,
        bookmarks: [],
      },
      votes: [],
      faved_by: [],
      certified_by: [],
      tags: [],
      locale: {
        id: 1,
        created_at: '2018-08-11T11:51:18+0200',
        updated_at: '2018-08-11T11:51:18+0200',
        is_active: true,
        name: 'Français',
        bookmarks: [],
      },
    },
  ],
  favorites: [],
  certified_bookmarks: [],
  comments: [],
  speciality: {
    id: 1,
    created_at: '2018-08-11T01:19:04+0200',
    updated_at: '2018-08-11T01:19:04+0200',
    is_active: true,
    name: 'Symfony',
    students: [],
  },
  votes: [
    {
      id: 1,
      created_at: '2018-08-11T14:07:31+0200',
      updated_at: '2018-08-11T14:07:31+0200',
      is_active: true,
      value: 1,
      bookmark: {
        id: 1,
        created_at: '2018-08-11T12:14:44+0200',
        updated_at: '2018-08-11T13:43:29+0200',
        is_active: true,
        title: 'Les RegEx',
        resume: 'Super vidéo pour débuter dans les regex!',
        url: 'https://www.youtube.com/watch?v=Jr0BYDT-EV4',
        image: 'https://www.youtube.com/watch?v=Jr0BYDT-EV4.jpg',
        banned: false,
        published_at: '2008-03-12T00:00:00+0100',
        author: 'Jean-Noël PIERRE Ajoutée le 20 déc. 2011',
        warnings: [],
        votes: [],
        faved_by: [],
        certified_by: [],
        tags: [],
      },
    },
  ],
  bookmarks_warned: [],
  announces: [
    {
      id: 1,
      created_at: '2018-08-11T11:46:20+0200',
      updated_at: '2018-08-11T11:46:20+0200',
      is_active: true,
      title: "Qu'avez vous pensé de mon super cours?",
      body: "Aujourd'hui nous avons vu Jquery et c'était génial. Qu'en pensez vous? \r\nJ'attends vos réponses en commentaires!",
      frozen: false,
      closing_at: '2018-09-02T00:00:00+0200',
      comments: [],
      promotions: [],
    },
  ],
  affectations: [
    {
      id: 1,
      created_at: '2018-08-10T00:00:00+0200',
      updated_at: '2018-08-10T00:00:00+0200',
      is_active: true,
      promotion: {
        id: 1,
        created_at: '2018-08-10T14:20:13+0200',
        updated_at: '2018-08-10T14:20:13+0200',
        is_active: true,
        name: 'Invaders',
        affectations: [],
        announces: [],
        links: [],
      },
      role: {
        id: 1,
        created_at: '2013-01-01T00:00:00+0100',
        updated_at: '2018-08-10T13:41:01+0200',
        is_active: true,
        name: 'Etudiant',
        code: 'ROLE_STUDENT',
        affectations: [],
      },
    },
  ],
  avatar: 'https://avatars.githubusercontent.com/Milbrin',
};