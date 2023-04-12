 const body = document.querySelector('.page-body'),
 nav = document.querySelector('nav'),
 menuTrigger = document.querySelector('.btn-toggle');

//  Show menu

const toggleMenu = () => {
  menuTrigger.classList.toggle('btn-toggle_active');
  nav.classList.toggle('nav_active');
  body.classList.toggle('body_hidden');
};


menuTrigger.addEventListener('click', toggleMenu);

// Custom select

const customSelectShow = () => {
    const customSelects = document.querySelectorAll('.select'),
    customSelectlistItems =document.querySelectorAll('.list-item');
    const windowInnerWidth = document.documentElement.clientWidth;

    customSelects.forEach(cs=> {
        cs.addEventListener('click',function() {
            if(windowInnerWidth >= 992) {
                return;
            }
            this.classList.toggle('active');
        });
    });
    customSelectlistItems.forEach(li => {
        li.addEventListener('click', function() {
            const globalParent = li.closest('.select');
            const customSelectValue = globalParent.querySelector('.select__value span');
            let text = this.textContent.trim();
            customSelectValue.textContent = text;
        })
    });
};

customSelectShow();

// Range value

const rangeValue = () => {
  const range = document.querySelector('.range__input'),
  rangeValue = document.querySelector('.range__value');

  range.addEventListener('input', ()=> {
    rangeValue.textContent = `${range.value}%`;
  });

};

rangeValue();

// Input file text

const InputFileText = () => {
  const inputFile = document.querySelector('.file__input');
  const fileNameValue = document.querySelector('.label__span');
  
  inputFile.addEventListener('change',()=> {
    let file = inputFile.files[0];
    
    if(!file.name) {
      fileNameValue.textContent = "Прикрепить файл"
    }

    fileNameValue.textContent = file.name;
  });
  
};

InputFileText();

const animationInit = () => {
  AOS.init({
    offset: 200,
    duration: 500,
    easing: 'ease-in-quad',
    delay: 100,}
  );
};
animationInit();