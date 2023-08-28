//
//

const searchInput = document.getElementById("default-search"); //search input
const searchBtn = document.getElementById("searchBtn"); // search button
const cardContainerWrapper = document.querySelector(".cardContainerWrapper");
const seemoreButton = document.querySelector(".seemoreButton");
let inputValue;

// getting data from api

const getData = async (searchText = "iphone", isTrue) => {
  const response = await fetch(
    `  https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );

  const dataResponse = await response.json();
  let datas = dataResponse.data;

  //   console.log(datas);
  console.log(datas.length);

  if (datas.length >= 10 && !isTrue) {
    datas = datas.slice(0, 9);
    seemoreButton.classList.remove("hidden");
  } else {
    seemoreButton.classList.add("hidden");
  }

  console.log(datas.length);

  cardContainerWrapper.textContent = "";

  datas.forEach((data) => {
    // console.log(data);
    showingData(data);
  });

  //   showingData();
};

// search button clicked function
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  inputValue = searchInput.value;

  getData(inputValue);
  searchInput.value = "";
});

// function for showing data

function showingData(data) {
  const phoneCard = document.createElement("div");

  phoneCard.classList =
    " max-w-sm bg-white m-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ";

  phoneCard.innerHTML = `
  
  <a href="#" class="  ">
  <img
    class="rounded-t-lg text-center"
    src="${data.image}"
    alt=""
  />
</a>
<div class="p-5">
  <a href="#">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      ${data.phone_name}
    </h5>
  </a>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so
    far, in reverse chronological order.
  </p>
  <a
    
    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer " onclick=" shoeDetails() "
  >
    Read more
    <svg
      class="w-3.5 h-3.5 ml-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </a>
</div>
  
  `;

  cardContainerWrapper.appendChild(phoneCard);
}

// show details function
function shoeDetails() {
  console.log("show details button clicked ");
}

// show details click

function showDetails() {
  console.log(inputValue);
  console.log("show details clicked ");
  getData(inputValue, true);
}

// initial data called
getData();
