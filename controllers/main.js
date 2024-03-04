import getData from "../utils/callData.js";

let arrNavPill = [];
let arrChoseItems = [];
const choseItem = new ChoseItem();
getData()
  .then((result) => {
    arrNavPill = result.data.navPills;
    arrChoseItems = result.data.tabPanes;
    renderNavPills(arrNavPill);
    console.log(arrNavPill);
    return arrChoseItems;
  })
  .catch((error) => {
    console.error("Lỗi:", error);
  });

const renderNavPills = (navPills) => {
  let contentPills = "";
  let contentTab = "";
  navPills.map((item, id) => {
    // let tabId = `navLink-${id}`;
    contentPills += `
      <li class="nav-item">
        <a href="#${item.type}"class="nav-link" data-toggle="tab" onclick="getChoseItemList('${item.type}',${this})" name="${item.tabName}" id="${id}">
          ${item.showName}
        </a>
      </li>`;

    contentTab += `<div id="${item.type}">
      <div class="list-item row"></div>
      </div>`;
  });

  document.querySelector("ul.nav-pills").innerHTML = contentPills;
  document.getElementById("nav-content").innerHTML = contentTab;
};

// console.log(arrNavPill);

const renderChoseItemCard = (ClothesList) => {
  var content = "";
  for (let i = 0; i < ClothesList.length; i++) {
    let tabPane = ClothesList[i];
    content += `
      <div class=" card card-item" data-tab-content ><img src="${tabPane.imgSrc_jpg}">
      <h4>${tabPane.name}</h4>
      <button onclick ="selectItem('${tabPane.id}')" class="tryOnBtn" id="${tabPane.type}">Thử đồ</button></div>`;
  }
  document.querySelector(".tab-content").innerHTML = content;
};
const getChoseItemList = (type, id) => {
  let itemList = [];
  arrChoseItems.forEach((item) => {
    if (item.type == type) itemList.push(item);
  });
  // console.log("ChoseTabListItem", itemList);
  document.getElementById(id).innerHTML = renderChoseItemCard(itemList);
};
const selectItem = (item) => {
  const clothSelected = arrChoseItems.filter((cloth) => cloth.id == item);
  const selected = clothSelected[0];

  choseItem.pickItem(selected);
};

window.onload = () => {
  window.getChoseItemList = (type, id) => {
    getChoseItemList(type, id);
  };
  window.selectItem = (item) => {
    selectItem(item);
  };
};
