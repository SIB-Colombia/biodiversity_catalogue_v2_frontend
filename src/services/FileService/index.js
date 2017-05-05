import fetch from 'isomorphic-fetch';
//import {Config} from 'components';

export function getFiles() {

  return [
    {
      id: '5349b4ddd2781d08c09890f1',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/71728_orig.jpg',
      comment: 'Aguila tirana Black...'
    }, {
      id: '5349b4ddd2781d08c09890f2',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/05869_orig.jpg',
      comment: 'Aguila tirana Black...'
    }, {
      id: '5349b4ddd2781d08c09890f3',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/99013_orig.jpg',
      comment: 'Aguila tirana Black...'
    }, {
      id: '5349b4ddd2781d08c09890f4',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/34567_orig.jpg',
      comment: 'Aguila tirana Black...'
    }, {
      id: '5349b4ddd2781d08c09890f5',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/09127_orig.jpg',
      comment: 'Aguila tirana Black...'
    }, {
      id: '5349b4ddd2781d08c09890f6',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/84940_orig.jpg',
      comment: 'Aguila tirana Black...'
    }, {
      id: '5349b4ddd2781d08c09890f7',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/07303_orig.jpg',
      comment: 'Aguila tirana Black...'
    }, {
      id: '5349b4ddd2781d08c09890f8',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/62488_orig.jpg',
      comment: 'Aguila tirana Black...'
    }
  ];
  
  //Example with Ajax
  /*return fetch(`${Config.server}/api/hello/home`, Config.http).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })*/

}

export function getImages() {

  return [
    {
      src: '/tucanes.jpg',
      thumbnail: '/tucanes.jpg',
      caption: 'Photo by Jessica Weiller'
    }, {
      src: '/tucanes2.jpg',
      thumbnail: '/tucanes2.jpg',
      caption: 'Photo by Piotr Łaskawski'
    }
  ]

}
