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
    image: File.new("#{Rails.root}/app/assets/images/jill.jpg")
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
  {
    title: "KNIFE MAKING-TANTO KNIFE",
    body: "for a best video suport go watch my video on youtube!",
    image: File.new("#{Rails.root}/app/assets/images/17.jpg"),
    author_id: users.sample.id
  },
  {
    title: "Throwing knife",
    body: "Overall Length: 25 cm Blade Thickness: 4.2 mm Blade Material: Uddeholm arne steel",
    image: File.new("#{Rails.root}/app/assets/images/18.jpg"),
    author_id: users.sample.id
  },
  {
    title: "Tanto Fighting Knife Tutorial",
    body: "This instructable show how to make a fighting tanto knife. For a better visual support go watch my video on youtube, subscribe like and leave a comment! :)",
    image: File.new("#{Rails.root}/app/assets/images/19.jpg"),
    author_id: users.sample.id
  },
  {
    title: "KNIFE BLOCK",
    body: "This quite unusual but practical knife block is a relatively fast and simple project for your CNC machine...There is some manual work involved (edge rounding, glueing and sanding) but with the right tools it won't take too much time...",
    image: File.new("#{Rails.root}/app/assets/images/20.jpg"),
    author_id: users.sample.id
  },
  {
    title: "SKINNING KNIFE",
    body: "This knife was made out of a previous knife that i made, which melted partially during the heat treatment process. In this instructable I will show you how to turn around a ruined knife and turn it into something completely different, that works well and looks great .",
    image: File.new("#{Rails.root}/app/assets/images/21.jpg"),
    author_id: users.sample.id
  },
  {
    title: "RIVING KNIFE",
    body: "The importance of a riving knife can not be underestimated! If you have ever worked with circular saws then you know what I am talking about. Without it one of the most terrifying thing called kickback can easily occur.

My Makita MLT 100 contractor table saw came with a riving knife but this one had had one big flaw that really annoyed me. To fix this issue I made a completely new one and I would like to share how I did it with you!

I also made a short video of the build. Check it out!

This project is nothing really special or complicated but I hope that someone will find it useful.

Let´s get started!",
    image: File.new("#{Rails.root}/app/assets/images/22.jpg"),
    author_id: users.sample.id
  },
  {
    title: "HUNTER'S KNIFE",
    body: "So, recently, I went to a Renaissance Festival in my area for a wedding with my fiancee and a few of her friends. And I was utterly put to shame by their elaborate costumes. In my defense, however, they were veterans of this festival, and they were the bridesmaids in the wedding.

However, not wanting to be outdone, I wanted to make a prop that I would be able to carry at a festival such as this, and immediately thought of a knife. I usually go with a hunter/ranger type costume, and one thing that probably every woodsman has on his belt is a knife.

A real knife was out of the question (for cost and safety reasons), so I thought that I would make this prop knife out of some scrap wood that I had laying around.",
    image: File.new("#{Rails.root}/app/assets/images/23.jpg"),
    author_id: users.sample.id
  },
  {
    title: "PENNY KNIFE",
    body: "Welcome back! I have just made a small knife out of a penny! It isn't good for much more than letter opening but it's still pretty cool! This may be illegal where you are though it isn't here cause Canada doesn't have penny's anymore. Let's get into it. I also made a video! I will make one for all my coming instructibles! So make sure to subscribe! ",
    image: File.new("#{Rails.root}/app/assets/images/24.jpg"),
    author_id: users.sample.id
  },
  {
    title: "KNIFE COVER",
    body: "If you have any knifes at all , along with some thin scrap wood, this will probably help you out.

Your knifes should always be sharp , but that also means you need to be careful storing them.

I decided to make a cover for my knife because i use it for everything in the kitchen , and its my only kitchen knife so i thought a knife block would be a bit pointless!

This is just something quick and easy , but really useful to have for not just kitchen knifes but any knives.

As always I hope you enjoy.",
    image: File.new("#{Rails.root}/app/assets/images/25.jpg"),
    author_id: users.sample.id
  },
  {
    title: "KNIFE RESTORATION",
    body: "Welcome, and thanks for checking out this knife restoration by Red Handed Blades. This Mar-Din knife belongs to a family friend. The knife was originally owned by his grandfather and has great sentimental value to his family. As you can tell by the pics, this knife was in desperate need of repair, so I took on the task. Follow along as this knife gets another cut at life. Oh, knife humor.",
    image: File.new("#{Rails.root}/app/assets/images/26.jpg"),
    author_id: users.sample.id
  },
  {
    title: "SWISS ARMY KNIFE SHEATH",
    body: "  I created this sheath for the Swiss Army Knives (can be altered for any and all pocket knives) that we were giving out for Christmas and they worked out so well I decided to share with all of you!  Before we begin I want to say that I didn't add a way to attach the sheath to your belt or keychain as I included a keyring to put on the knives themselves, but you could most definitely add one of the other ways yourself.  Now, let's get started!",
    image: File.new("#{Rails.root}/app/assets/images/27.jpg"),
    author_id: users.sample.id
  },
  {
    title: "MAKING A WOODEN KNIFE SHEATH",
    body: "This is a step by step instructions of how I make wooden sheaths for the knives I make.",
    image: File.new("#{Rails.root}/app/assets/images/28.jpg"),
    author_id: users.sample.id
  },
  {
    title: "REFURBISH A POCKET KNIFE",
    body: "I bought this pocket knife a while ago and in that time the plastic scales started to get sticky and gummy. I was about to throw it out but after thinking about it, aside from the gummy handles the knife was fairly decent. So I decided to try and make new handles for the knife. I had some left over pieces of stainless steel that would do the trick. This project was more about seeing if I could make new scales than to fully restore the knife. It would be my first time trying this but since the knife wasn't particularly expensive I figured I had little to lose. So I got to work.",
    image: File.new("#{Rails.root}/app/assets/images/29.jpg"),
    author_id: users.sample.id
  },

  {
    title: "HOW TO MAKE A BUSHCRAFT KNIFE",
    body: "This is how I make my knives. Yes, it is exactly the same as any other knife Instructable on here. Do I care? Nope. And, neither do you, apparently. After all, you're reading it.",
    image: File.new("#{Rails.root}/app/assets/images/30.jpg"),
    author_id: users.sample.id
  },
  {
    title: "SAW BLADE KNIFE",
    body: "A buddy of mine and fellow YouTuber wanted to do a collaboration video. We bounced around some ideas and eventually decided to film ourselves making knives. The catch was that I would do it by hand (except for a drill and oven) and he would do it using power tools. We both started off with the same blade design, same steel, but the rest of the design aesthetic was left to us. I also wanted to do this because I have read on many occasions all you need to make a knife are some files and a drill or something to that effect. I was curious as to how long it would take me to make a knife by hand and to see if I could do it without cheating and using my power tools. So I figured this was the perfect opportunity to try it out. This was a fun build that took a lot longer than I expected and gave my a whole new appreciation for people that make knives entirely by hand. Overall I am very happy with how the knife turned out and I hope this helps anyone out there that wants to give it a try.",
    image: File.new("#{Rails.root}/app/assets/images/31.jpg"),
    author_id: users.sample.id
  },
  {
    title: "PARACORD KNIFE OR MULTI TOOL SHEATH",
    body: "In the video I show you how to make a Utility Pouch for a Multi Tool or Knife Sheath for a Folding Knife.",
    image: File.new("#{Rails.root}/app/assets/images/32.jpg"),
    author_id: users.sample.id
  },
  {
    title: "PARACORD NECK KNIFE HANDLE WRAP",
    body: "in the video I show you how to wrap a knife handle in paracord this also works for mini pry bars.",
    image: File.new("#{Rails.root}/app/assets/images/33.jpg"),
    author_id: users.sample.id
  },
  {
    title: "CLIP POINT FULL TANG KNIFE",
    body: "Welcome to my tutorial on how to make a real knife! I'll try to be as precise and synthetic as I can so that this won't be boring to read :)",
    image: File.new("#{Rails.root}/app/assets/images/34.jpg"),
    author_id: users.sample.id
  },
  {
    title: "MARKING KNIFE FROM FILE",
    body: "When making marks on wood, nothing beats a marking knife when precision is important. This simple knife was made from an old worn out file with rudimentary tools. If you have ever wanted to make a knife but don't have conventional metal working tools, this project is for you.",
    image: File.new("#{Rails.root}/app/assets/images/35.jpg"),
    author_id: users.sample.id
  }
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
    title:"Tools and Materials",
    body: "In order to make the file workable, it needs to be annealed. This will make it less tough and easily shaped. To anneal the file, turn on the map gas torch and heat it until it loses its magnetism. I set up my torch in my Hot Pipe Wood Bending Jig. I screwed a magnet to a long stick to keep my hands far away from the hot temperatures. Let the file cool down on it's own. If you have some, placing the file in a pile of sand will help it cool down slowly.",
    project_id: projects.sample.id,
    step_number: 0,
    image: File.new("#{Rails.root}/app/assets/images/36.jpg")
  },
  {
    title:"Trace Pattern",
    body: "Clamp the file in a vice and shape it using a hacksaw or angle grinder. Once the rough shape is achieved, refine it using a strip sander.",
    project_id: projects.sample.id,
    step_number: 0,
    image: File.new("#{Rails.root}/app/assets/images/35.jpg")
  },
  {
    title:"Grind Bevel",
    body: "Cut a 30 degree angle on a piece of scrap wood and clamp it to the strip sander. This will act as a guide for the bevel of the knife. Slowly drag the blade of the knife over the guide until the blade is almost sharp. Do not sharpen it at this point. The bevel needs to be on the more aggressive side of the file. The other side will need to be ground flat to ensure a sharp blade.",
    project_id: projects.sample.id,
    step_number: 0,
    image: File.new("#{Rails.root}/app/assets/images/34.jpg")
  },
  {
    title:"Flatten Knife",
    body: "Using a flat piece of sandpaper, hand grind the blade flat.",
    project_id: projects.sample.id,
    step_number: 0,
    image: File.new("#{Rails.root}/app/assets/images/33.jpg")
  },
  {
    title:"Drill Pin Holes",
    body: "Mark pin hole locations in the knife blank with a center punch. Drill 1/4 in. holes in the tang of the knife. Be sure to clamp the blade in place. Do not hold it by hand.",
    project_id: projects.sample.id,
    step_number: 0,
    image: File.new("#{Rails.root}/app/assets/images/32.jpg")
  },
  {
    title:"Default types for buildpack",
    body: "remote: deployed to Heroku
",
    project_id: projects.sample.id,
    step_number: 0,
    image: File.new("#{Rails.root}/app/assets/images/31.jpg")
  },
  {
    title:"Drill Pin Holes in Scales",
    body: "Using a brad point drill, mark the locations of the pins in the scales. Drill corresponding holes in the scales. With the pins in place, trace the tang on the inside of the scales. Remove the excess wood of the scales.",
    project_id: projects.sample.id,
    step_number: 0,
    image: File.new("#{Rails.root}/app/assets/images/30.jpg")
  },
  {
    title:"Harden Blade",
    body: "To harden the blade, it needs to be heated just past the point when it loses its ability to be attracted to a magnet. Once heated to this point, quench it in oil. I used canola oil as it doesn't smell bad compared to other oils used for hardening steel.",
    project_id: projects.sample.id,
    step_number: 1,
    image: File.new("#{Rails.root}/app/assets/images/29.jpg")
  },
  {
    title:"Temper Blade",
    body: "If the entire blade and tang were heat treated, remove the scale before tempering. Since only the blade portion of this knife was hardened, I skipped removing the scale at this time. Removing the scale will allow you to see the color of the blade after tempering. Heat the blade in an oven to 400 degrees F for an hour and a half to two hours. I used a toaster oven I have the the garage, but any oven will do. Once heated, turn the oven off and allow it to cool until you can handle it by hand. It should be a pale yellow color.",
    project_id: projects.sample.id,
    step_number: 1,
    image: File.new("#{Rails.root}/app/assets/images/28.jpg")
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
    title:"Grind, Shine, and Sharpen",
    body: "Once tempered, remove the scale from the blade. I used a set of whetstones to hone and sharpen the blade.",
    project_id: projects.sample.id,
    step_number: 1,
    image: File.new("#{Rails.root}/app/assets/images/4.jpg")
  },
  {
    title:"Paint and Assembly",
    body: "1. Cut 2 pieces of L profile plank as long as you want (need) and paint them in color you like. I used water based paints for kids toys so they are maximum safe.

2. Cut and paint - basically I used a small piece of this same L profile plank - this will give you some space between two planks so knife blade can pass trough

3. Glue everything together

4. Mount and screw the rack on to the wall

5. Ad your logo if you are a vain designer like myself :D and that's it!

Hope you like this small DIY project  of mine - this is also my first instructable but there will be many more very soon. Geek on!",
    project_id: projects.sample.id,
    step_number: 1,
    image: File.new("#{Rails.root}/app/assets/images/3.jpg")
  },
  {
    title:"Sharpening",
    body: "Before I started I sharpened my n.6 hand plane. It is better to lose a few minutes sharpening the tools so that you can use them to the fullest extent possible and make the job more enjoyable and fast.",
    project_id: projects.sample.id,
    step_number: 1,
    image: File.new("#{Rails.root}/app/assets/images/2.jpg")
  },
  {
    title:"squared",
    body: "I then squared and smooth the piece by planing all the six faces. To square the shoulders, I used a wooden block plane, built by me, on which I mounted a 90 ° shore that guarantees that the piece is planed square. With a wooden carpenter square, I then checked that the piece was perfectly squared.

",
    project_id: projects.sample.id,
    step_number: 1,
    image: File.new("#{Rails.root}/app/assets/images/2.jpg")
  },
  {
    title:"Shoulders Tapering",
    body: "Using a marking gouge, a sliding t-bevel square, and a marking knife, I marked the inclination of the sides I wanted to taper. I then planed the edges to taper the piece. The final shape was similar to that of an ingot.

",
    project_id: projects.sample.id,
    step_number: 1,
    image: File.new("#{Rails.root}/app/assets/images/1.jpg")
  },
  {
    title:"Refining Edges",
    body: "I slightly beveled the edges with a block plane and some sandpaper and with some light scraper passes I made the piece perfectly smooth without the need to sand it. This type of finishing is even better than that of sandpaper because it leaves the wood perfectly shiny. Even thinner sandpaper leaves micro scratches on the surface of the wood, while razor-sharp steel gives you a perfect finish.

",
    project_id: projects.sample.id,
    step_number: 1,
    image: File.new("#{Rails.root}/app/assets/images/36.jpg")
  },
  {
    title:"Modelling the Knife Supports",
    body: "To make the knife supports I took two wood pieces of the same thickness and cut and work them together so that they were identical. To make the grooves to house the knife, I used a rasp and a file. Later on, I passed them on sandpaper to smooth them. Finally, with a thin file, I made small fillets on the edges.

",
    project_id: projects.sample.id,
    step_number: 1,
    image: File.new("#{Rails.root}/app/assets/images/35.jpg")
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
    title:"Mortises on the Base",
    body: "To fix the two supports on the base, I made two blind mortises. I first marked the position and size of the mortises using the two knife supports as a reference. I then removed most of the material by drilling some holes with a hand brace drill. Then I squared them using a sharp chisel.

",
    project_id: projects.sample.id,
    step_number: 3,
    image: File.new("#{Rails.root}/app/assets/images/4.jpg")
  },
  {
    title:"Bonding",
    body: "The joint was so perfect that the glue would not have been necessary, but I thought that with seasonal variations in humidity they could loosen, so I glued them. I used some good wood glue.

",
    project_id: projects.sample.id,
    step_number: 3,
    image: File.new("#{Rails.root}/app/assets/images/5.jpg")
  },
  {
    title:"Final Shots",
    body: "Here are some shots of the finished product and the knife. The knife, like every Japanese Tanto knife, is take-down. All the pieces are held together by a single peg called Mekugi. The handle and sheath are made of Ovangkol and briar. The guard and the peg are made of brushed brass.

",
    project_id: projects.sample.id,
    step_number: 3,
    image: File.new("#{Rails.root}/app/assets/images/6.jpg")
  },
  {
    title:"Rough Shaping",
    body: "Now is when it starts to take shape.

Secure the steel in a vice or on a surface with a clamp.

With an angle grinder and a cut off disc I cut the knife section off from the larger piece. i then cut both sides of the blade, followed by a few cuts on the handle to round it off.

Following this is grinding on the belt grinder. this can also be done with a file but if so you will want to get the cuts closer to the final shape with the angle grinder. a grinding disc can be used as well. Use whichever way you do to get the final profile of the blade. after this comes the blade bevel.",
    project_id: projects.sample.id,
    step_number: 3,
    image: File.new("#{Rails.root}/app/assets/images/7.jpg")
  },
  {
    title:"Grinding the Bevels",
    body: "When it comes to a throwing knife you most definitely do not want sharp edges. The only priority of a throwing knife is to be pointy. Because of this i dont even make a bevel down the whole portion of my throwing knives. I only grind the bevel for about the top inch of the knife.
",
    project_id: projects.sample.id,
    step_number: 3,
    image: File.new("#{Rails.root}/app/assets/images/8.jpg")
  },
  {
    title:"Now As for Throwing",
    body: "well...theres a little issue here. i havent quite figured this part out.i have only a basic understanding and the biggest thing is pratice. at this point i will urge you the best direction i know. check out this instructable
",
    project_id: projects.sample.id,
    step_number: 3,
    image: File.new("#{Rails.root}/app/assets/images/9.jpg")
  },
  {
    title:"Covering the Knife",
    body: "For added safety I put electric tape on the edges of the knife so I don't accidentally cut myself while working on it",
    project_id: projects.sample.id,
    step_number: 3,
    image: File.new("#{Rails.root}/app/assets/images/10.jpg")
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
  },
  {
    body: "Surprise steepest recurred landlord mr wandered amounted of. Continuing devonshire but considered its. Rose past oh shew roof is song neat. Do depend better praise do friend garden an wonder to. Intention age nay otherwise but breakfast. Around garden beyond to extent by.
",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "Greatly hearted has who believe. Drift allow green son walls years for blush. Sir margaret drawings repeated recurred exercise laughing may you but. Do repeated whatever to welcomed absolute no. Fat surprise although outlived and informed shy dissuade property. Musical by me through he drawing savings an. No we stand avoid decay heard mr. Common so wicket appear to sudden worthy on. Shade of offer ye whole stood hoped.
",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "Consider now provided laughter boy landlord dashwood. Often voice and the spoke. No shewing fertile village equally prepare up females as an. That do an case an what plan hour of paid. Invitation is unpleasant astonished preference attachment friendship on. Did sentiments increasing particular nay. Mr he recurred received prospect in. Wishing cheered parlors adapted am at amongst matters.
",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "Style too own civil out along. Perfectly offending attempted add arranging age gentleman concluded. Get who uncommonly our expression ten increasing considered occasional travelling. Ever read tell year give may men call its. Piqued son turned fat income played end wicket. To do noisy downs round an happy books.
",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "Now residence dashwoods she excellent you. Shade being under his bed her. Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.
",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "Is allowance instantly strangers applauded discourse so. Separate entrance welcomed sensible laughing why one moderate shy. We seeing piqued garden he. As in merry at forth least ye stood. And cold sons yet with. Delivered middleton therefore me at. Attachment companions man way excellence how her pianoforte.
",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded.
",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "Feet evil to hold long he open knew an no. Apartments occasional boisterous as solicitude to introduced. Or fifteen covered we enjoyed demesne is in prepare. In stimulated my everything it literature. Greatly explain attempt perhaps in feeling he. House men taste bed not drawn joy. Through enquire however do equally herself at. Greatly way old may you present improve. Wishing the feeling village him musical.
",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "Imagine was you removal raising gravity. Unsatiable understood or expression dissimilar so sufficient. Its party every heard and event gay. Advice he indeed things adieus in number so uneasy. To many four fact in he fail. My hung it quit next do of. It fifteen charmed by private savings it mr. Favourable cultivated alteration entreaties yet met sympathize. Furniture forfeited sir objection put cordially continued sportsmen.
",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "Surprise steepest recurred landlord mr wandered amounted of. Continuing devonshire but considered its. Rose past oh shew roof is song neat. Do depend better praise do friend garden an wonder to. Intention age nay otherwise but breakfast. Around garden beyond to extent by.
",
    author_id: users.sample.id,
    project_id: projects.sample.id
  },
  {
    body: "Surprise steepest recurred landlord mr wandered amounted of. Continuing devonshire but considered its. Rose past oh shew roof is song neat. Do depend better praise do friend garden an wonder to. Intention age nay otherwise but breakfast. Around garden beyond to extent by.
",
    author_id: users.sample.id,
    project_id: projects.sample.id
  }
  ])
