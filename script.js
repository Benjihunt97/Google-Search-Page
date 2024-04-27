$(document).ready(() => {
  
  //nav bar menu item click event
  $('#nav-bar li').click((e) => {
    let item = $(e.currentTarget);
    item.addClass('active-list-item');
    item.siblings().removeClass('active-list-item');
  }); 
  
  // accordian items to show text
  $('.text').slideUp();
  
  $('.accordian-item').each((index, item) => {
    $(item).click((e) => {
      const $currentItem = $(e.currentTarget);
      const $currentText = $currentItem.find('.text');
      const $currentIcon = $currentItem.find('.item-btn');
      
      $currentText.slideToggle(200);
      $currentIcon.toggleClass('toggle-item-icon');
    });
  });
  
});
