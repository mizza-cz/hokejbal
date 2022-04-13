
 
 (function () {    
     'use strict';
     // ------------------------------------------------------- //
     // Calendar
     // ------------------------------------------------------ //
    jQuery(function() {
       // page is ready
       jQuery('#calendar').fullCalendar({
          locale: 'cz',
          defaultView: 'month',
          // event dragging & resizing
          editable: true,
          // header
          header: {
             left: 'prev',
             center: 'title',
             right: 'next'
          },
          monthNames: ['LEDEN', 'ÚNOR', 'BŘEZEN', 'DUBEN', 'KVĚTEN', 'ČERVEN', 'ČERVENEC', 'SRPEN', 'ZÁŘÍ', 'ŘÍJEN', 'LISTOPAD', 'PROSINEC'],
        // 月略称
        monthNamesShort: ['LEDEN', 'ÚNOR', 'BŘEZEN', 'DUBEN', 'KVĚTEN', 'ČERVEN', 'ČERVENEC', 'SRPEN', 'ZÁŘÍ', 'ŘÍJEN', 'LISTOPAD', 'PROSINEC'],
        dayNames: ['NEDĚLE','PONDĚLÍ', 'ÚTERÝ', 'STŘEDA', 'ČTVRTEK', 'PÁTEK', 'SOBOTA'],
        dayNamesShort: ['NE', 'PO', 'ÚT', 'ST', 'ČT', 'PÁ', 'SO'],
       
          events: [
             {
                id: '1',
                start: '2022-04-05',
                icon : "images/teams/2.png",
                url: '#',
                categorie: 'a-tym',
                title: 'Pardubice'
             },
             {
                
               id: '2',
               start: '2022-04-08',
               icon:"images/content/logo.png",
               url: '#', 
               categorie: 'mladez',
               title: '18:00'
             },
            
          ],
          
          eventRender: function(event, element) {
             if(event.icon){
               //  element.find(".fc-title").prepend('<img src="images/content/'+event.icon+'.png" />');
               element.find(".fc-title").prepend('<img src="'+event.icon+'" />');
             }
             if(event.icon){
               //  element.find(".fc-title").prepend('<img src="images/content/'+event.icon+'.png" />');
               element.find(".fc-title").addClass(''+event.categorie+'');
             }
             
            },
           
            
       })
      //  $('.fc-day-number').on('click', function () {
      //       console.log(this)
      //  });
    });
   
 })(jQuery);
