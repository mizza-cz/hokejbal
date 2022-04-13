
 
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
                title: 'Pardubice',
                icon : "images/teams/2.png",
                url: '/akce-pardubice',
                categorie: 'a-tym'
             },
             {
                
               id: '2',
               start: '2022-04-08',
               title: '18:00',
               icon:"images/content/logo.png",
               url: '/akce', 
               categorie: 'mladez'
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
