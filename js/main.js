const img = document.getElementById("person-img");
const name = document.getElementById("name");
const info = document.getElementById("info");
const job = document.getElementById("job");
const buttons = document.querySelectorAll(".prev-next i");
const random = document.getElementById("random");

let counter = 0;

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
  }
];

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.getAttribute("id") === "next") {
      counter++;
      if (counter > reviews.length - 1) {
        counter = 0;
      }
      mainInfo(counter);
    } else if (event.target.getAttribute("id") === "prev") {
      counter--;
      if (counter < 0) {
        counter = reviews.length - 1;
      }
      mainInfo(counter);
    }
  });
});

random.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * reviews.length);
  counter = randomNum;
  mainInfo(counter);
});

function mainInfo(counter) {
  console.log(counter);
  img.setAttribute("src", reviews[counter].img);
  name.textContent = reviews[counter].name;
  job.textContent = reviews[counter].job;
  info.textContent = reviews[counter].text;
}
mainInfo(0);
