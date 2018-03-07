# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Project.destroy_all

users = User.create([
  {
    username: 'dongjin',
    password: 'dongjin'
  },
  {
    username: 'yianmo',
    password: 'yianmo'
  },
  {
    username: 'hulamadx',
    password: 'hulamadx'
  },
  {
    username: 'demoLogin',
    password: 'demologin'
  }])




projects = Project.create([
  {
    title: "Lorem Ipsum",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author_id: users.sample.id
  },
  {
    title: "Neque porro quisquam",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum porta est, quis feugiat quam lobortis non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author_id: users.sample.id
  },
  {
    title: "Curabitur commodo",
    body: "Nunc sit amet finibus purus. Duis semper elit in risus finibus vehicula. Quisque accumsan finibus vehicula. Aenean tortor mauris, pharetra non dui lobortis, rhoncus pulvinar sem.",
    author_id: users.sample.id
  }])
