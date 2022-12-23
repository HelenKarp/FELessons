window.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('search-form');
    if (form) {
        form.addEventListener('submit', (e) => {
             e.preventDefault();

             findFilms(undefined, e.target)
             
        })
    }

})

function findFilms(page = 1, form) {
    
    let titleField = form.querySelector('input[type=search]');
        typeField = form.querySelector('select[name=type]');
             
    if (titleField.value.length === 0 ) {
      return;
    }  
                 
    axios({
        url: form.action,   //form.getAttribute('action')
        method: form.method, //form.getAttribute('method')
        params: {
            s: titleField.value,
            type: typeField.value,
            page: page
        },
        responseType: 'json'
     })
      .then((res) => {
       let resultsBlock = document.getElementById('search-results');
       if (!resultsBlock) {
           return;
       }
       resultsBlock.innerHTML = '';

        if (res.data.Error) {
            resultsBlock.innerHTML = res.data.Error
        } else if(res.data.Search && res.data.totalResults) {
            for (let i = 0; i < res.data.Search.length; i++) {
                resultsBlock.append(createFilmItem(res.data.Search[i]))
                
            }
            addListenerToDetailsBtn(resultsBlock)
            createPagination(res.data.totalResults)
            addListenerToPaginationItems()
            
        }
          } )
          .catch(()=> {
            let resultsBlock = document.getElementById('search-results');
            if (!resultsBlock) {
                return;
            }
            resultsBlock.innerHTML = 'Sorry, something went wrong'
        })
}

function createFilmItem(item) {
    let el = document.createElement('div'),
        elTitle = document.createElement('h4'),
        elYear = document.createElement('div'),
        elButton = document.createElement('span'),
        elHr = document.createElement('hr');

    el.classList.add('film-item')
    elTitle.classList.add('film-item__title')
    elYear.classList.add('film-item__year')
    elButton.classList.add('film-item__btn')
    elHr.classList.add('film-item__hr')

    elTitle.innerHTML = "Name: " + item.Title
    elYear.innerHTML = "Year: " + item.Year ?? "-"
    elButton.innerHTML = "Details " + item.imdbID;

    el.append(elTitle)
    el.append(elYear)
    el.append(elButton)
    el.append(elHr)

    return el
}

function createPagination(amount) {
    let ul = document.getElementById('search-pagination');

    if (!ul){
        return;
    }
    ul.innerHTML = ""; 

    for (let i = 0; i < amount / 10; i++) {
        let el = document.createElement('li');
       // el.className.add('search-pagination')
        el.innerHTML = i + 1
        ul.append(el)
    }
   

}

function addListenerToPaginationItems() {
    let ulItems = document.querySelectorAll('#search-pagination li'),
        form = document.getElementById('search-form'),
        current = document.getElementsByClassName("active"),
        ulItem = document.getElementById('search-pagination');
        
        //
       // arr = ['active', 'item'];
        

      // ulItemFalseActive.classList.add('active')
       
      console.log(typeof("current"))
     
       //ulItem.classList.add('Array')

    if (ulItems.length === 0 ) {
        return;
    }

    function replaceClass() { 
        this.style.color = " "
        this.style.color += "blue"
       // this.classList.toggle("active")
        console.log(this.className) 
        ; 
      
     }

    function changeClassName (params) {
        this.style.color = " "
        current.style.color = " "
        current.style.color += "red"
        this.style.color += "blue"
       // this.classList.toggle("active")
       console.log(this.className);
    }
   /*  function changeClassName() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " check";
      } */
    

    ulItems.forEach(ulItem => {
        ulItem.addEventListener('click', /* replaceClass, */  (e)=> {
           // e.classList.toggle("active")
          
           if (ulItem.classList.contains("active")) {
             findFilms(e.target.innerText, form)
           // changeClassName(e.target);
           e.style.color = ""
            e.style.color = "red";
          } else {
           findFilms(e.target.innerText, form)
          e.style.color = ""
           e.style.color += "blue"
           //eplaceClass(e.target);
          }
           // console.log(e.classList),
         //ulItemFalseActive.classList.toggle("active")
         // replaceClass()
           // e.className.replace.arr[0]("check")
           
            console.log(this.classList)
           
           return e
            /* console.log(ulItem.classList)
            ulItemFalseActive.classList.remove("active")
           ulItem.className += " active"
           console.log(ulItem.className);
           return ulItem; */
         
        })
        
    })

    
 
}

function addListenerToDetailsBtn(block) {
    let detailsBtns = block.querySelectorAll('.film-item__btn');

    if (detailsBtns.length === 0 ) {
        return;
    }
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', showFilmDetails)
    })
  
}

function showFilmDetails(e) {
   let mainDiv = e.target.closest('.film-item'),
       elDetails = document.createElement('div'),
       deleniator = document.createElement('span');
       console.log(mainDiv)
       //elDetails.innerHTML = "dog"

       elDetails.classList.add('.film-item__details-text')
       deleniator.classList.add('film-item__deleniator')

       mainDiv.append(elDetails)
       mainDiv.append(deleniator)
      
    //let elDetails = e.target.closest('.film-item').createElement('div');
    axios({
        url: form.action,   //form.getAttribute('action')
        method: form.method, //form.getAttribute('method')
        params: {
            plot: titleField.value,
        },
        responseType: 'json'
     })
     .then((response) => {
        let  elDetails = document.createElement('div');
        if (! elDetails) {
            return;
        }
    })
    .catch(()=> {
        let  elDetails = document.createElement('div');
        if (!elDetails) {
            return;
        }
        elDetails.innerHTML = 'Sorrye, something went wrong'
    })
    return mainDiv
}

document.addEventListener('click', function(e) {
  const targetItem = e.target;
  if (targetItem.closest('[data-ripple]')) {
    const button = targetItem.closest('[data-ripple]');
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + scrollX) - radius}px`;
    ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + scrollY) - radius}px`;
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    const timeOut = getAnimationDur(ripple);

    setTimeout(() => {
        ripple? ripple.remove() : null;
    }, timeOut);

    function getAnimationDur() {
        let aDuration = window.getComputedStyle(ripple).animationDuration;
        return aDuration.includes('ms') ?
        aDuration.replace("ms", "") : aDuration.replace("s", "") * 1000;
    }
  }

})