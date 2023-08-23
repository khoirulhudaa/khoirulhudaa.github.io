function changeTab(index) {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabItems = document.querySelectorAll('.tab-item');
  
    tabButtons.forEach((button, i) => {
      if (i === index) {
        button.classList.add('active');
        tabItems[i].classList.add('active');
      } else {
        button.classList.remove('active');
        tabItems[i].classList.remove('active');
      }
    });
  }
  