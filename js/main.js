  // faq js  
  document.querySelectorAll('.pf-top').forEach( function(top){
    top.addEventListener('click', function(){
        const content = this.nextElementSibling;
        console.log(content)
        const isOpen = content.style.maxHeight &&  content.style.maxHeight !== '0px';
        if(isOpen){
            content.style.maxHeight = '0';
            content.style.padding = '0 10px';
            this.querySelector('svg').style.transform = 'rotate(0deg)'; 
        }
        else{
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.padding = '10px';
            this.querySelector('svg').style.transform = 'rotate(180deg)';
        }
       // remove all accordian when click btn one bye one open
       document.querySelectorAll('.pf-bottom').forEach(function(content){
        if(content !== top.nextElementSibling){
            content.style.maxHeight = '0';
            content.style.padding = '0 10px';
            content.previousElementSibling.querySelector('svg').style.transform = 'rotate(0deg)';
        }
    })

    })
})