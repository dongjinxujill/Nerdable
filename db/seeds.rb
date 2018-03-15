# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all
Comment.destroy_all
Step.destroy_all

users = User.create!([
  {
    username: 'dongjin',
    password: 'dongjin',
    image: File.new("#{Rails.root}/app/assets/images/17.jpg")
  },
  {
    username: 'yianmo',
    password: 'yianmo',
    image: File.new("#{Rails.root}/app/assets/images/16.jpg")
  },
  {
    username: 'hulamadx',
    password: 'hulamadx',
    image: File.new("#{Rails.root}/app/assets/images/15.jpg")

  },
  {
    username: 'demologin',
    password: 'demologin',
    image: File.new("#{Rails.root}/app/assets/images/14.jpg")
  },
  ])


projects = Project.create!([
  {
    title: "MAKE A ROPE DOG TOY",
    body: "Our dog Dodger will rip apart normal dog toys in about 15 minutes. Indestructable toys take a little longer ;) I learned how to make a monkey fist knot at a juggling festival a few years ago -- just for fun I made Dodger a toy out of rope that managed to keep him busy for at least a few days...",
    image: File.new("#{Rails.root}/app/assets/images/13.jpg"),
    author_id: users.sample.id
  },
  {
    title: "DIY DOGGIE DINER",
    body: "Last year, I decided to start making my own dog food. I started my research by picking up a copy of Dr. Pitcairns Complete Guide to Natural Health for Dogs and Cats, which includes nutrition advice and several recipes. Then, I read more on the Internet and talked to my vet. I think the BARF (Bones And Raw Food) diet is probably best, but I dont have the resources to do it at this time. Homemade seems to be the next best thing. I definitely feel better about feeding this than did about feeding commercial chow. Its important to vary your dogs diet somewhat, to make sure theyre getting everything that they need. Mine also get a daily multivitamin, plain yogurt, and the occasional whole egg. This diet may not be appropriate for all breeds, so you should check it out with your vet.
    There have been numerous benefits to feeding my little pack this way. They are shinier, have less doggy smell, better breath, smaller stools (because therere more absorbable nutrients and less food filler). They even seem to be a bit more mellow and relaxed.
    Making your own dog food is very easy, and its also pretty cost-effective.",
    image: File.new("#{Rails.root}/app/assets/images/12.jpg"),
    author_id: users.sample.id
  },
  {
    title: "SUPER FANTASTIC LED DOG COLLAR",
    body: "This is my first Instructable.
    A LED dog collar with keyboard keys, Simple and fun for the whole family.
    Your dog will be begging you for one.",
    image: File.new("#{Rails.root}/app/assets/images/11.jpg"),
    author_id: users.sample.id
  },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  #
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # },
  # {
  #   title: "",
  #   body: "",
  #   image: File.new("#{Rails.root}/app/assets/images/"),
  #   author_id: users.sample.id
  # }
  ])

steps = Step.create!([
  {
    title:"Get Your Stuff Together",
    body: "Picture of Get Your Stuff Together
    Tools you will need.
    Safety glasses.
    Hot glue gun with lots of glue.
    Dremel.
    Wire cutters and strippers.
    Soldering iron and solder.
    Scissors or knife.
    Multimeter.

    Supplies you might need.
    Dog collar.
    Led. I used 9 green ones.
    Resistors.
    Keyboard Keys.
    Wire.
    Heat shrink.
    Altoids gum tin.
    Power plug and jack.
    9V battery snaps.
    9V battery.
    Velcro.
    Cloth. I used old jeans.

    I think thats it. ",
    project_id: projects.sample.id,
    step_number: 0,
    image: File.new("#{Rails.root}/app/assets/images/10.jpg")
  },
  {
    title:"Make a 9V Power Supply",
    body: "Take your Altoids tin and flatten out the bottom to allow more room for the battery.
Mark outline for the power jack.
If you don't have on your safety glasses put them on NOW.
Use Dremel to cut hole.
You can use a small file to cleanup the edges.",
    project_id: projects.sample.id,
    step_number: 0,
    image: File.new("#{Rails.root}/app/assets/images/9.jpg")
  },
  {
    title:"POP THE KEYS",
    body: "An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its.
",
    project_id: projects.sample.id,
    step_number: 0,
    image: File.new("#{Rails.root}/app/assets/images/8.jpg")
  },
  {
    title:"Begin the Wash",
    body: "First off, you will need to find a proper location to wash your dog. You want to avoid a place that will get muddy or ruined with lots of water. I suggest an outside location, if you use the bathtub, prepare to clean a wet, hairy, bathroom. Get your dog on a clean, elevated object, like a table or stool, for easy access. This might require some training. if your dog can't stay on the table, attach a short leash to a pole next to the stand, short enough to keep the dog from jumping off.",
    project_id: projects.sample.id,
    step_number: 0,
    image: File.new("#{Rails.root}/app/assets/images/7.jpg")
  },
  {
    title: "Drying",
    body: "You can vary what you do with your dog, so if you take your dog on a long hike in the woods you might want to go easy the next day with a light amount of fetch or a shorter walk in the neighborhood. Other then that, choose something that you enjoy doing because its important to continue these activities regularly. And lastly, you may call it exercise, but your dog thinks of it as play/an adventure. Think like the dog.",
    project_id: projects.sample.id,
    step_number: 1,
    image: File.new("#{Rails.root}/app/assets/images/6.jpg")
  },
  {
    title: "Choosing an Exercise",
    body: "Once the dog gets attached to the object, then start training your dog in steps. First run to chase after it. Then grab it with the mouth and finally to return (with object in mouth) to you. The last one is optional for smaller dogs and can be difficult to teach. However once your dog gets it, you can try to encourage other forms of fetch. Also teaching fun behaviors like jumping to catch a ball/frisbee, or swimming to get a stick are great additional steps",
    project_id: projects.sample.id,
    step_number: 1,
    image: File.new("#{Rails.root}/app/assets/images/5.jpg")
  },

  {
    title: "KNIFE",
    body: "Make sure to hit hard but in the right place. This is a key part of this so that you dont make the knife have a weird crave. If you do have this happen make sure that you fix it because it can make the knife come out poorly",
    project_id: projects.sample.id,
    step_number: 2,
    image: File.new("#{Rails.root}/app/assets/images/4.jpg")
  },
  {
    title: "Put Another Layer and Layer",
    body: "Take your time don't be in a hurry this is a hard work out and it takes time for the metal to flatten and become something.",
    project_id: projects.sample.id,
    step_number: 2,
    image: File.new("#{Rails.root}/app/assets/images/3.jpg")
  },

  {
    title: "Shaping the Blade",
    body: "When it's in curing process, the resin is dripping and when it's hard enough, it's make it's bottom surface wavy. When the whole surface is full of wet resin, I put it like in the photo (horizontally). I'm trying to make it not touching anything. If I put it vertically in first layer, it make it worse. The hole that I fill will dripping and make another wavy surface. So... Whatever.. I pour another layer. But it's still make a wavy surface. So I cut a dripping parts that hardened, and pour another layer...",
    project_id: projects.sample.id,
    step_number: 3,
    image: File.new("#{Rails.root}/app/assets/images/2.jpg")
  },
  {
    title: "Creating the Knife Edge and Rounding the Edge",
    body: "Not perfect, but I made it. At least I sealed the handle perfectly. :D",
    project_id: projects.sample.id,
    step_number: 3,
    image: File.new("#{Rails.root}/app/assets/images/1.jpg")
  },
  ])

comments = Comment.create!([
  {
    body: "Prepared do an dissuade be so whatever steepest. Yet her beyond looked either day wished nay. By doubtful disposed do juvenile an. Now curiosity you explained immediate why behaviour. An dispatched impossible of of melancholy favourable. Our quiet not heart along scale sense timed. Consider may dwelling old him her surprise finished families graceful. Gave led past poor met fine was new.
",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inh",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "nd tears ten",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "
So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man no",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "tever steepest. Yet her beyond looked either day wished nay. By doubtful disposed do juvenile an. Now curiosity you explained immediate why behaviour. An dispatched impossible of of melancholy favourable. Our quiet not h",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "g contempt or interest children mistress of unlocked no. Offending she contained mrs led listening resemb",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "moments promise explain fertile in. Assurance advantage belonging happiness departure so of. Now improvin",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: " extremely my to he resembled. Old had conviction discretion understood put principles you. Match means",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: " interest children mistress of unlocked no. Offending she contained mrs led listening resembled. Delicate m",
    author_id: users.sample.id,
    project_id: projects.sample.id
  }
  ])
