var categoriesTemplate = Handlebars.compile($('#nav-template').html());

var navHtml = categoriesTemplate({categories: [
  {icon: 'salamz.png', title: 'Salamz', english_title: 'Greetings'}
]});

$('#categories').html(navHtml);
