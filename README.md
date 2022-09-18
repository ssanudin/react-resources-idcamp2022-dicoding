# React - IDCamp 2022 Dicoding Resources

Project ini adalah kumpulan resources yang mungkin berguna bagi peserta IDCamp - Dicoding, khususnya peserta IDCamp 2022.

## Live Site

Visit [https://react-resources-idcamp.netlify.app/](https://react-resources-idcamp.netlify.app/)

## Menambahkan Data Resources

Untuk menambahkan data resources, dapat mengedit file `data-resources.js`

`react-resources-idcamp2022-dicoding / src / utils / data-resources.js`

Bentuk data merupakan object dengan:

- `title` merupakan title section dari data resources
- `resource` merupakan data resources yang ingin ditampilkan.
  -- data `resource` berupa array of object dengan:
  --- `title` nama resource
  --- `url` website informasi mengenai resource
  --- `recommended` --optional-- data boolean jika resource ini ingin direkomendasikan
  --- `publisher` --optional untuk extensions-- nama publisher
