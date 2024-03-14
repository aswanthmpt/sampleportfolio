window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navtwo");
    if (window.scrollY > 0) { // Change 0 to the scroll position where you want the navbar to shrink
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });
  
  
  window.addEventListener('scroll', function() {
    var img = document.querySelector('.main img');
    var nameElement = document.querySelector('.name');
    var scrollPosition = window.scrollY;
    var scaleFactor = 1 + scrollPosition * 0.001;
    var opacity = 1 - (scrollPosition / 200);
  
    // Check the scroll position
    if (scrollPosition > 1) { // Change 100 to the desired scroll position where you want to switch to fixed
        img.style.position = 'fixed';
        img.style.transform = 'scale(' + scaleFactor + ')'; // Adjust this value as needed
        img.style.width='100%';
        nameElement.style.opacity = opacity;
        // nameElement.style.position = 'fixed';
      } else {
        
        img.style.width='100%';
        img.style.top = '0px';
    }
  });
  
  
  
  
  (() => { 
  
    const cursor = document.querySelector('.cursor');
  
    document.addEventListener('mousemove', e => {
       cursor.setAttribute('style', `top:  ${e.pageY - 25}px; left: ${e.pageX - 25}px;`);
    });
  
    document.addEventListener('click', () => { 
       console.log("%c Click...!!!", "font-size: 20px; color:mediumspringgreen;");
  
       cursor.classList.add('cursor--expand');
       console.log(cursor.classList);
    
       setTimeout(() => {
          cursor.classList.remove('cursor--expand');
       }, 500);
    });
  })();
  
  
  
  