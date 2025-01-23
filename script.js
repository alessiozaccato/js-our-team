const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let card = document.getElementById("dinamicCard")
let intestationMessage = document.getElementById("intestation");
intestationMessage.innerHTML = "BoolTECH è una società specializzata in Coding. Offriamo soluzioni informatiche innovative e personalizzate per Html e Css. Grazie alla nostra esperienza e alla nostra passione per la tecnologia, aiutiamo i nostri clienti a raggiungere i loro obiettivi. Contattaci per scoprire come possiamo aiutarti. "
intestationMessage.classList.add("text-light")

function addCard() {
  for (i = 0; i < teamMembers.length; i++) {
    let element = teamMembers[i];
    card.innerHTML += `
  <section id="dinamicCard" class="col-s-1 col-md-6 col-lg-4">

    <div class="row align-items-center">
      <div class="col-6">
        <figure>
          <img width="100%" src="${element.img}" alt="${element.name}">
        </figure>
      </div>
      <div class="col-6">
        <p class="fs-3 text-white">${element.name}</p>
        <p class="fs-5">${element.role}</p>
        <a class="text-white" href="#">${element.email}</a>
      </div>
    </div>

  </section>
  `
  }
}

addCard();

const btn = document.querySelector("button");

btn.addEventListener("click", function (event) {

  event.preventDefault();
  let name = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  let img = document.getElementById("img").value;
  let email = document.getElementById("email").value;

  teamMembers.push(
    {
      name,
      role,
      img,
      email
    }
  )

  console.log(teamMembers);

  card.innerHTML = "";

  addCard();

})






