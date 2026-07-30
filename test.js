// 검색 버튼
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {

    const keyword = searchInput.value.trim();

    if(keyword === ""){
        alert("검색어를 입력하세요.");
        return;
    }

    alert(keyword + " 검색을 시작합니다.");

});

// 엔터로 검색
searchInput.addEventListener("keydown", (e)=>{

    if(e.key === "Enter"){
        searchBtn.click();
    }

});

// 로그인 버튼
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", ()=>{

    alert("로그인 페이지로 이동합니다.");

});

// 메뉴 클릭
const menus = document.querySelectorAll("nav a");

menus.forEach(menu=>{

    menu.addEventListener("click",(e)=>{

        e.preventDefault();

        alert(menu.innerText + " 메뉴를 클릭했습니다.");

    });

});

// 날씨 클릭
const weather = document.getElementById("weather");

weather.addEventListener("click",()=>{

    weather.innerText="🌧️ 25℃";

});

// 카드 마우스 효과
const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="scale(1.03)";
        card.style.transition=".2s";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="scale(1)";

    });

});