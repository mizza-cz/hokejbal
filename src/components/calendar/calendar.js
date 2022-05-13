
 
 jQuery(function() {
   jQuery('.js-calendar').fullCalendar({
      locale: 'cz',
      defaultView: 'month',
      editable: true,
      header: {
         left: 'prev',
         center: 'title',
         right: 'next'
      },
      monthNames: ['LEDEN', 'ÚNOR', 'BŘEZEN', 'DUBEN', 'KVĚTEN', 'ČERVEN', 'ČERVENEC', 'SRPEN', 'ZÁŘÍ', 'ŘÍJEN', 'LISTOPAD', 'PROSINEC'],
      monthNamesShort: ['LEDEN', 'ÚNOR', 'BŘEZEN', 'DUBEN', 'KVĚTEN', 'ČERVEN', 'ČERVENEC', 'SRPEN', 'ZÁŘÍ', 'ŘÍJEN', 'LISTOPAD', 'PROSINEC'],
      dayNames: ['NEDĚLE','PONDĚLÍ', 'ÚTERÝ', 'STŘEDA', 'ČTVRTEK', 'PÁTEK', 'SOBOTA'],
      dayNamesShort: ['NE', 'PO', 'ÚT', 'ST', 'ČT', 'PÁ', 'SO'],
      events: 'eventCalendar.php',
      eventRender: function(event, element) {
         if(event.icon){
           element.find(".fc-title").prepend('<img src="'+event.icon+'" />');
         }
         if(event.icon){
           element.find(".fc-title").addClass(''+event.categorie+'');
         }
        },
   })
});
