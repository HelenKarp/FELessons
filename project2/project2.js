var position = [48.48679432791985, 35.0393165449218];
	 
	function showGoogleMaps() {
	 
	var latLng = new google.maps.LatLng(position[0], position[1]);
	 
	var mapOptions = {
		zoom: 16, // initialize zoom level - the max value is 21
		streetViewControl: false, // hide the yellow Street View pegman
		scaleControl: true, // allow users to zoom the Google Map
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: latLng
	};
	 
	map = new google.maps.Map(document.getElementById('googlemaps'),
	mapOptions);
	 
	// Show the default red marker at the location
	marker = new google.maps.Marker({
	position: latLng,
	map: map,
	draggable: false,
	animation: google.maps.Animation.DROP
	});
	}
 
	google.maps.event.addDomListener(window, 'load', showGoogleMaps);
    



    $(document).ready(function(){
        let sliderPosition = 0; // начальная позиция дорожки
        const sliderContainer = $('.slider-container');
        const sliderTrack = $('.slider-track');
        const sliderItem = $('.slider-item');
        const sliderItemWidth = sliderItem.width();
        const sliderContainerWidth = sliderContainer.width();
        // ширина дорожки определяется как разница между шириной всех картинок и шириной контейнера
        // разница нужна для того, чтобы прокрутка не проводилась дальше последнего фото
        const sliderTrackWidth = sliderItem.length * sliderItemWidth - sliderContainerWidth; 
        const sliderButtonPrev = $('.arrow-left');
        const sliderButtonNext = $('.arrow-right');
      
        sliderButtonPrev.on('click', function(){
            sliderPosition += sliderItemWidth; // увеличиваем отступ при нажатии назад
      
            // поскольку отступ будет всегда отрицательный, нужно сравнивать с нулем, 
            // чтобы исключить пустые прокрутки
            if (sliderPosition > 0) {
                sliderPosition = 0;
            }
            sliderTrack.css('transform', `translateX(${sliderPosition}px`);
            sliderButtons();
        });
      
        sliderButtonNext.on('click', function(){
            sliderPosition -= sliderItemWidth;
      
            // так как отступы отрицательные, нужно сравнить с отрицательной длинной дорожки, 
            // чтобы исключить пустые прокрутки
            if (sliderPosition < -sliderTrackWidth) {
                sliderPosition = -sliderTrackWidth;
            }
            sliderTrack.css('transform', `translateX(${sliderPosition}px`);
            sliderButtons();
        });
      
      
        // скрываем кнопки prev/next, когда нельзя больше крутить
        const sliderButtons = () => {
            if (sliderPosition == 0) {
                sliderButtonPrev.hide();
            } else {
                sliderButtonPrev.show();
            }
            if (sliderPosition == -sliderTrackWidth) {
                sliderButtonNext.hide();
            } else {
                sliderButtonNext.show();
            }
        };
        sliderButtons();
      });

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      $(function() {
        // Все вкладки c классом `.slider__btn`.
        var $tabs = $('.slider__btn');
      
        // Вешаем функцию обработчик на событие `click`.
        $tabs.on('click', function(event) {
          changeTab($(this).index('.slider__btn'));
        });
      
        $('.slider__prev').on('click', function(event) {
          let index = $tabs.filter('.-active').index('.slider__btn');
      
          changeTab(--index);
        });
      
        $('.slider__next').on('click', function(event) {
          let index = $tabs.filter('.-active').index('.slider__btn');
      
          changeTab(++index);
        });
      
        // Индекс вкладки на которую будем переключаться.
        // Отсчет индексов в `javascript` ведется от нуля.
        // Если индекс равен 0, значит это первая вкладка.
        // Если индекс равен 1, значит это вторая вкладка.
        // Переключим вкладку на вторую ч/з три секунды.
        var timerId = setTimeout(changeTab, 3000, 1);
      
        // Функция смены текущей вкладки.
        function changeTab(index) {
          // $tabs.length - количество вкладок.
          // a % b – это остаток от деления a на b.
          index = index % $tabs.length;
      
          // Меняем класс у текущей вкладки.
          $tabs.removeClass('-active').eq(index).addClass('-active');
      
          // Очищаем предыдущий таймер, чтобы
          // не было зацикливаний при постоянных кликах.
          clearTimeout(timerId);
      
          // Переключим вкладку на следующую ч/з три секунды.
          // ++ - увеличиваем активную вкладку на единицу.
          timerId = setTimeout(changeTab, 3000, ++index);
        }
      });
    