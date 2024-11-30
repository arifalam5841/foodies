

let secondary_login_btn = document.getElementById('loginbtn')
let secondary_signup_btn = document.getElementById('signupbtn')
let main_login_btn = document.getElementById('main-login-btn')
let main_signup_btn = document.getElementById('main-signup-btn')

let login_email = document.getElementById('signupp-email')
let signup_name = document.getElementById('signup-name')
let signup_name_text = document.getElementById('name-text')
// let signup_email = document.getElementById('signu-email')

let signup_welcome = document.getElementById('signup-welcome')
let login_welcome = document.getElementById('login-welcome')



let secondary_login_btn_cont = document.getElementById('secondary-login-btn-cont')
let secondary_signup_btn_cont = document.getElementById('secondary-signup-btn-cont')

let login_signup_heading = document.getElementById('login-signup-heading')

let login_text = document.getElementById('logintext')
let signup_text = document.getElementById('signuptext')

let login_textside_btn = document.getElementById('textside-loginbtn')
let signup_textside_btn = document.getElementById('textside-signupbtn')

let password_signup = document.getElementById('password-signup-container')
let login_email_container = document.getElementById('login-email-container')

// let 
function signup_logint_btn_click(none, block, password_texts, heading_text, flex, none_flex) {

  // login_email.style.display = none
  email_container.style.display = flex
  main_login_btn.style.display = none
  main_signup_btn.style.display = block
  password_signup.style.display = flex

  login_email_container.style.display = none_flex
  login_welcome.style.display = none
  signup_welcome.style.display = block

  signup_name.style.display = block
  signup_name_text.style.display = block

  secondary_signup_btn_cont.style.display = none
  secondary_login_btn_cont.style.display = block

  login_signup_heading.innerHTML = heading_text //'Sign up'

  signup_textside_btn.style.display = none
  login_textside_btn.style.display = block

  signup_text.style.display = none
  login_text.style.display = block
}
secondary_signup_btn.addEventListener('click', function (e) {
  e.preventDefault()
  signup_logint_btn_click('none', 'block', 'Create Password', 'Sign up', 'flex', 'none')
})
signup_textside_btn.addEventListener('click', function (e) {
  e.preventDefault()
  signup_logint_btn_click('none', 'block', 'Create Password', 'Sign up', 'flex', 'none')

})

secondary_login_btn.addEventListener('click', function (e) {
  e.preventDefault()
  signup_logint_btn_click('block', 'none', 'Password', 'Login', 'none', 'flex')
})
login_textside_btn.addEventListener('click', function (e) {
  e.preventDefault()
  signup_logint_btn_click('block', 'none', 'Password', 'Login', 'none', 'flex')


})

let customer_btn = document.getElementById('customer-btn')
let customer_or_restaurantowner_page = document.getElementById('customer-or-shopowner-page')
let login_or_signup_page = document.getElementById('login-page')

customer_btn.addEventListener('click', function () {
  customer_or_restaurantowner_page.style.display = "none"
  login_or_signup_page.style.display = "flex"
  signup_logint_btn_click('block', 'none', 'Password', 'Login', 'none', 'flex')

})

let rstrnt_fill_column_warning = document.getElementById('restaurant-login-warning')
let back_to_customer_owner_page = document.getElementById('back-to-customer-owner-page')
back_to_customer_owner_page.addEventListener('click', function () {
  customer_or_restaurantowner_page.style.display = "flex"
  login_or_signup_page.style.display = "none"
  // restaurant_btn_click_func('none','block','none')
  names_container.style.display = 'block'
  email_container.style.display = 'none'
  signup_text.style.display = 'block'
  signup_textside_btn.style.display = 'block'
  secondary_signup_login_btn_cont.style.display = 'flex'
  restaurant_password_cont.style.display = 'none'
  main_login_btn.style.display = 'block'
  restaurant_login_btn.style.display = 'none'
  restaurant_text.style.display = 'none'
  restaurant_password_text.style.display = 'none'
  password_signup.style.display = 'none'
  login_email_container.style.display = 'flex'
  rstrnt_fill_column_warning.style.display = 'none'
  signup_logint_btn_click('block', 'none', 'Password', 'Login')
})



// CUSTOMER USER SING UP FUNC  // ---------------------------

let avatar_page = document.getElementById('selecting_avatar')
let address_page = document.getElementById('entering-addres-page')
let home_page = document.getElementById('home-page')
let avatar_submit = document.getElementById('avatar-submit-btn')
let address_submit = document.getElementById('address-submit-btn')

let selected_profile = document.getElementById('selected_profile_img')

avatar_submit.addEventListener('click', function (e) {
  e.preventDefault()
  if (selected_profile.innerHTML.length > 0) {
    avatar_page.style.display = "none"
    address_page.style.display = 'block'
    console.log(selected_profile.innerHTML.length)
  }
  else {
    avatar_page_warning.style.display = 'block'
  }

})







// SAMPLE SCRIPT END // remove the upper sample code while making coding in the server---------------------------



let shopowner_btn = document.getElementById('shopowner-btn')
let names_container = document.getElementById('name-container')
let email_container = document.getElementById('emails-container')
let secondary_signup_login_btn_cont = document.getElementById('orsection')
let restaurant_password_cont = document.getElementById('restaurant-password-container')
let restaurant_login_btn = document.getElementById('main-restaurant-login-btn')
let restaurant_text = document.getElementById('restrnttext')
let restaurant_password_text = document.getElementById('restaurant-psswrd-text')

function restaurant_btn_click_func(block, none, flex, none_flex, none_none) {

  login_email_container.style.display = none_flex
  main_login_btn.style.display = none
  signup_text.style.display = none
  signup_textside_btn.style.display = none
  secondary_signup_login_btn_cont.style.display = none_flex

  restaurant_password_text.style.display = block
  restaurant_text.style.display = block
  restaurant_login_btn.style.display = block
  restaurant_password_cont.style.display = flex

  main_signup_btn.style.display = none
  names_container.style.display = none
  email_container.style.display = none
  password_signup.style.display = none
  login_text.style.display = none
  login_textside_btn.style.display = none
}

shopowner_btn.addEventListener('click', function () {
  customer_or_restaurantowner_page.style.display = "none"
  login_or_signup_page.style.display = "flex"
  restaurant_btn_click_func('block', 'none', 'flex', 'none', 'none')
})



let logout_btn = document.getElementById('logout-btn')

logout_btn.addEventListener('click', function () {
  home_page.style.display = 'none'
  customer_or_restaurantowner_page.style.display = 'block'


})

// remove 
//=== REMOVE THE UPPER SAMPLE CODE SO THEN HOME PAGE CODE  WILL RUN ====//
// =======================================================================
// HOME PAGE SCRIPT ------------------------




let menu_btn = document.getElementById('menu-btn')
let menu_container = document.getElementById('menu-contianer')

menu_btn.addEventListener('click', function () {
  if (menu_container.style.display == 'none') {
    menu_container.style.display = 'flex'
  }
  else {
    menu_container.style.display = 'none'
  }
})




var counter = 0;
let banner_container = document.getElementById("banner-container")
let slide_dot1 = document.getElementById('slide-dot1')
let slide_dot2 = document.getElementById('slide-dot2')
let slide_dot3 = document.getElementById('slide-dot3')

let slide_dots_list = [slide_dot1, slide_dot2, slide_dot3]
slide_dot1.addEventListener('click', function (e) {
  counter = 0
  for (i = 0; i < slide_dots_list.length; i++) {
    slide_dots_list[i].style.background = 'white'
  }
  slide_dot1.style.background = '#205c6e'
})
slide_dot2.addEventListener('click', function () {
  counter = 2
  for (i = 0; i < slide_dots_list.length; i++) {
    slide_dots_list[i].style.background = 'white'
  }
  slide_dot2.style.background = '#205c6e'
})
slide_dot3.addEventListener('click', function () {
  counter = 3
  for (i = 0; i < slide_dots_list.length; i++) {
    slide_dots_list[i].style.background = 'white'
  }
  slide_dot3.style.background = '#205c6e'
})

function scroll_forward() {
  banner_container.scrollBy(50, 0)
  counter++
  // console.log(counter)

  if (counter > 3) {
    banner_container.scrollBy(-20000, 0)
    counter = 0
  }
  for (i = 0; i < slide_dots_list.length; i++) {
    slide_dots_list[i].style.background = 'white'
  }
  slide_dots_list[counter].style.background = '#205c6e'
}


setInterval(scroll_forward, 3000);


let cart_btn = document.getElementById('cart-btn')
let menu = document.getElementById("menu-contianer")
let cart_page = document.getElementById("cart-items-page")

window.addEventListener("scroll", function () {
  var category_nav = document.getElementById("category-section");
  if (window.scrollY > 50) {
    category_nav.style.position = "fixed"
    category_nav.style.top = "0px"
    banner_container.style.marginTop = '50px'
    function myFunction(x) {
      if (x.matches) { // If media query matches
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
      }
    }

    var x = window.matchMedia("(max-width: 850px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

    cart_btn.style.position = 'fixed'
    cart_btn.style.right = '-20px'
    cart_btn.style.bottom = '50px'
    cart_btn.style.padding = '10px'
    cart_btn.style.borderTopLeftRadius = '20px'
    cart_btn.style.borderBottomLeftRadius = '20px'
    cart_btn.style.backgroundColor = '#205c6e'
    cart_page.style.marginTop = '50px'
    cart_page.style.marginTop = '50px'

  }


  else {
    category_nav.style.position = 'inherit'
    banner_container.style.marginTop = '5px'
    cart_btn.style.position = 'inherit'
    function myFunction(x) {
      if (x.matches) { // If media query matches
        cart_btn.style.bottom = '10px'
      } else {
        cart_btn.style.bottom = '5px'
      }
    }

    var x = window.matchMedia("(max-width: 540px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

    cart_btn.style.right = '27px'
    cart_btn.style.padding = '0px'
    cart_btn.style.borderTopLeftRadius = '0px'
    cart_btn.style.borderBottomLeftRadius = '0px'
    cart_btn.style.backgroundColor = 'transparent'
    cart_page.style.marginTop = '0px'
  }

})




// VERY IMPORTANT ----------------------
let home_btn = document.getElementById('web-home-btn')
let restaurant_btn = document.getElementById('web-restaurant-btn')
let profile_page = document.getElementById('profile-page')
let orders_page = document.getElementById('orders-page')
let home_page_items_sec = document.getElementById('home-page-contants')
let restaurant_page = document.getElementById('restaurants-list-page')
let mobile_home_btn = document.getElementById('mobile-home-btn')
let mobile_restaurant_btn = document.getElementById('mobile-restaurant-btn')
let customer_search_section = document.getElementById('customer-search-section')
let mobile_search_btn = document.getElementById('search-btn')
let category_section = document.getElementById('category-section')
let remove_search_section_btn = document.getElementById('remove-search-section-btn')
let orders_page_containerss = document.getElementById('cutomer-orders-page-container')
// add all the pages in the list 
// let pages_list = [restaurant_page, home_page_items_sec, profile_page, orders_page, cart_page, profile_page, customer_search_section]
let pages_list = [restaurant_page, home_page_items_sec, profile_page, orders_page_containerss, cart_page, profile_page, customer_search_section]


function undisplaying_pages() {
  for (i = 0; i < pages_list.length; i++) {
    pages_list[i].style.display = 'none'
  }
}

home_btn.addEventListener('click', function () {
  // for(i=0; i<pages_list.length ;  i++){
  //   pages_list[i].style.display = 'none'
  // }

  undisplaying_pages()

  home_page_items_sec.style.display = 'block'

  home_btn.style.background = 'rgb(211, 62, 42)'
  home_btn.style.color = 'white'

  restaurant_btn.style.background = '#153944'
  restaurant_btn.style.color = 'gray'

  for (i = 0; i < navigation_btns.length; i++) {
    //  pages_list[i].style.display = 'none' 
    navigation_btns[i].style.background = 'transparent'
    navigation_btns[i].style.color = 'white'
  }
})


restaurant_btn.addEventListener('click', function () {
  // for(i=0; i<pages_list.length ;  i++){
  //   pages_list[i].style.display = 'none'
  // }

  undisplaying_pages()
  restaurant_page.style.display = 'grid'

  home_btn.style.background = '#153944'
  home_btn.style.color = 'gray'

  restaurant_btn.style.background = 'rgb(211, 62, 42)'
  restaurant_btn.style.color = 'white'

  for (i = 0; i < navigation_btns.length; i++) {
    //  pages_list[i].style.display = 'none' 
    navigation_btns[i].style.background = 'transparent'
    navigation_btns[i].style.color = 'white'
  }
})


mobile_restaurant_btn.addEventListener('click', function () {
  undisplaying_pages()
  restaurant_page.style.display = 'grid'

  mobile_home_btn.style.background = 'white'
  mobile_home_btn.style.color = 'black'
  mobile_home_btn.style.border = 'none'
  mobile_home_btn.style.fontWeight = '100'


  mobile_restaurant_btn.style.background = 'rgb(253, 85, 85)'
  mobile_restaurant_btn.style.color = 'white'
  mobile_restaurant_btn.style.border = '1px solid black'
  mobile_restaurant_btn.style.fontWeight = 'bolder'



  for (i = 0; i < navigation_btns.length; i++) {
    //  pages_list[i].style.display = 'none' 
    navigation_btns[i].style.background = 'transparent'
    navigation_btns[i].style.color = 'white'
  }
})


mobile_home_btn.addEventListener('click', function () {
  undisplaying_pages()

  home_page_items_sec.style.display = 'block'

  mobile_restaurant_btn.style.background = 'white'
  mobile_restaurant_btn.style.color = 'black'
  mobile_restaurant_btn.style.border = 'none'
  mobile_restaurant_btn.style.fontWeight = '100'


  mobile_home_btn.style.background = 'rgb(253, 85, 85)'
  mobile_home_btn.style.color = 'white'
  mobile_home_btn.style.border = '1px solid black'
  mobile_home_btn.style.fontWeight = 'bolder'



  for (i = 0; i < navigation_btns.length; i++) {
    //  pages_list[i].style.display = 'none' 
    navigation_btns[i].style.background = 'transparent'
    navigation_btns[i].style.color = 'white'
  }
})


// # nav bar 'cart' , 'orders' , 'profile' btns click events # //

let nav_orders_btn = document.getElementById('orders-page-btn')
let nav_profile_btn = document.getElementById('profile-page-btn')
let nav_search_btn = document.getElementById('main-search-btn')
let nav_main_cart_btn_text = document.getElementById('main-cart-btn-text')
let bill_date_time_cont = document.getElementById('bill-date-time')
let navigation_btns = [nav_main_cart_btn_text, nav_orders_btn, nav_profile_btn, nav_search_btn]
let months_array = ['Jan', 'Feb', 'Mar', 'Api', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

cart_btn.addEventListener('click', function (e) {
  // every time we have to use 'e.preventDefault()' at the first 
  e.preventDefault()
  let now = new Date()
  let date = now.getDate()
  let month = now.getMonth()
  let year = now.getFullYear()
  let hours = now.getHours()
  let min = now.getMinutes()
  let sec = now.getSeconds()

  for (i = 0; i < navigation_btns.length; i++) {
    //  pages_list[i].style.display = 'none' 
    navigation_btns[i].style.background = 'transparent'
    navigation_btns[i].style.color = 'white'
  }

  undisplaying_pages()
  nav_main_cart_btn_text.style.background = '#1a353d'
  nav_main_cart_btn_text.style.color = '#feeaa5'
  let status = 'pm'
  if (hours > 12) {
    status = 'pm'
  }
  else {
    status = 'am'
  }

  if (hours < 12) {
    hours = '0' + hours
  }

  if (min < 10) {
    min = '0' + min
  }
  if (sec < 10) {
    sec = '0' + sec
  }
  bill_date_time_cont.innerHTML = `${date} ${months_array[month]} ${year} | ${hours}:${min}:${sec} ${status} `
  cart_page.style.display = 'flex'

})

nav_orders_btn.addEventListener('click', function (e) {
  // every time we have to use 'e.preventDefault()' at the first 
  e.preventDefault()


  for (i = 0; i < navigation_btns.length; i++) {
    //  pages_list[i].style.display = 'none' 
    navigation_btns[i].style.background = 'transparent'
    navigation_btns[i].style.color = 'white'
  }

  undisplaying_pages()
  // current button 
  nav_orders_btn.style.background = '#1a353d'
  nav_orders_btn.style.color = '#feeaa5'

  orders_page_containerss.style.display = 'block'
  orders_page.style.display = 'grid'

})



nav_profile_btn.addEventListener('click', function (e) {
  // every time we have to use 'e.preventDefault()' at the first 
  e.preventDefault()


  for (i = 0; i < navigation_btns.length; i++) {
    //  pages_list[i].style.display = 'none' 
    navigation_btns[i].style.background = 'transparent'
    navigation_btns[i].style.color = 'white'
  }

  undisplaying_pages()
  // current button 
  nav_profile_btn.style.background = '#1a353d'
  nav_profile_btn.style.color = '#feeaa5'

  profile_page.style.display = 'block'

})


nav_search_btn.addEventListener('click', function (e) {
  e.preventDefault()

  if (customer_search_section.style.display == 'none') {
    undisplaying_pages()
    for (i = 0; i < navigation_btns.length; i++) {
      //  pages_list[i].style.display = 'none' 
      navigation_btns[i].style.background = 'transparent'
      navigation_btns[i].style.color = 'white'
    }
    customer_search_section.style.display = 'flex'
    nav_search_btn.style.background = '#1a353d'
    nav_search_btn.style.color = '#feeaa5'
    home_page_items_sec.style.display = 'block'
    nav_search_btn.style.display = 'block'

  }

  else {
    undisplaying_pages()
    for (i = 0; i < navigation_btns.length; i++) {
      //  pages_list[i].style.display = 'none' 
      navigation_btns[i].style.background = 'transparent'
      navigation_btns[i].style.color = 'white'
    }
    home_page_items_sec.style.display = 'block'
    customer_search_section.style.display = 'none'
    nav_search_btn.style.background = 'transparent'
    nav_search_btn.style.color = 'white'
    undisplaying_pages()
    home_page_items_sec.style.display = 'block'
    nav_search_btn.style.display = 'block'
  }
})

mobile_search_btn.addEventListener('click', function () {
  if (customer_search_section.style.display == 'none') {
    category_section.style.display = 'none'
    customer_search_section.style.display = 'flex'
  }

  else {
    category_section.style.display = 'flex'
    customer_search_section.style.display = 'none'
  }
})

remove_search_section_btn.addEventListener('click', function () {
  category_section.style.display = 'flex'
  customer_search_section.style.display = 'none'
  nav_search_btn.style.background = 'transparent'
  nav_search_btn.style.color = 'white'
})
// ========================== # RESTAURANT PAGE SCRIPT # =============================

// * 'RT' = restaurant //

// navigation btns
let RT_home_btn = document.getElementById('restaurant-home-btn')
let RT_home_btn_a = document.getElementById('restaurant_home-btn-a')
let RT_searchpage_btn = document.getElementById('restaurant-main-search-btn')
let RT_profilepage_btn = document.getElementById('restaurant-profile-page-btn')

// Restaurant pages

let RT_home_page = document.getElementById('orders-section')
let RT_search_page = document.getElementById('restaurant-search-page')
let RT_porfile_page = document.getElementById('restaurant-profile-page')

let RT_navigation_btns = [RT_home_btn_a, RT_searchpage_btn, RT_profilepage_btn]
let RT_pages = [RT_home_page, RT_search_page, RT_porfile_page]

function restaurant_displaying_non_pages() {
  for (i = 0; i < RT_pages.length; i++) {
    RT_pages[i].style.display = 'none'
  }
}




RT_home_btn.addEventListener('click', function (e) {
  // every time we have to use 'e.preventDefault()' at the first 
  e.preventDefault()


  for (i = 0; i < RT_navigation_btns.length; i++) {
    //  pages_list[i].style.display = 'none' 
    RT_navigation_btns[i].style.background = 'transparent'
    RT_navigation_btns[i].style.color = 'white'
  }

  restaurant_displaying_non_pages()

  RT_home_btn_a.style.background = '#1a353d'
  RT_home_btn_a.style.color = '#feeaa5'

  RT_home_page.style.display = 'grid'

})



RT_searchpage_btn.addEventListener('click', function (e) {
  // every time we have to use 'e.preventDefault()' at the first 
  e.preventDefault()



  for (i = 0; i < RT_navigation_btns.length; i++) {
    //  pages_list[i].style.display = 'none' 
    RT_navigation_btns[i].style.background = 'transparent'
    RT_navigation_btns[i].style.color = 'white'
  }

  restaurant_displaying_non_pages()

  RT_searchpage_btn.style.background = '#1a353d'
  RT_searchpage_btn.style.color = '#feeaa5'

  RT_search_page.style.display = 'grid'

})


// RT_datepage_btn.addEventListener('click', function (e) {
//   // every time we have to use 'e.preventDefault()' at the first 
//   e.preventDefault()



//   for (i = 0; i < RT_navigation_btns.length; i++) {
//     //  pages_list[i].style.display = 'none' 
//     RT_navigation_btns[i].style.background = 'transparent'
//     RT_navigation_btns[i].style.color = 'white'
//   }

//   restaurant_displaying_non_pages()

//   RT_datepage_btn.style.background = '#1a353d'
//   RT_datepage_btn.style.color = '#feeaa5'

//   RT_datesearch_page.style.display = 'grid'

// })



RT_profilepage_btn.addEventListener('click', function (e) {
  // every time we have to use 'e.preventDefault()' at the first 
  e.preventDefault()



  for (i = 0; i < RT_navigation_btns.length; i++) {
    //  pages_list[i].style.display = 'none' 
    RT_navigation_btns[i].style.background = 'transparent'
    RT_navigation_btns[i].style.color = 'white'
  }

  restaurant_displaying_non_pages()

  RT_profilepage_btn.style.background = '#1a353d'
  RT_profilepage_btn.style.color = '#feeaa5'

  RT_porfile_page.style.display = 'grid'

})


let RT_menu_btn = document.getElementById('restaurant-menu-btn')
let RT_menu_container = document.getElementById('restaurant-menu-contianer')


RT_menu_btn.addEventListener('click', function () {
  if (RT_menu_container.style.display == 'none') {
    RT_menu_container.style.display = 'flex'
  }

  else {
    RT_menu_container.style.display = 'none'
  }
})


function myFunction(x) {
  if (x.matches) { // If media query matches
    RT_menu_container.style.display = "none";
  } else {
    RT_menu_container.style.display = "flex";
  }
}

var x = window.matchMedia("(max-width: 1200px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


window.addEventListener("scroll", function () {
  var category_nav = document.getElementById("area-filter-section");
  if (window.scrollY > 50) {
    category_nav.style.position = "fixed"
    category_nav.style.top = "0px"
    banner_container.style.marginTop = '50px'
    function myFunction(x) {
      if (x.matches) { // If media query matches
        RT_menu_container.style.display = "none";
      } else {
        RT_menu_container.style.display = "flex";
      }
    }

    var x = window.matchMedia("(max-width: 1200px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

  }


  else {
    category_nav.style.position = 'inherit'
  }

})

// Log out btn script --------------------

let RT_logout_btn = document.getElementById('restaurant-logout-btn-container')
let restaurant_user_page = document.getElementById('resautrant-home-page')
// login_or_signup_page.style.display = "flex"

RT_logout_btn.addEventListener('click', function () {
  restaurant_user_page.style.display = 'none'
  customer_or_restaurantowner_page.style.display = 'block'
  restaurant_btn_click_func('none', 'flex', 'none', 'flex')
  // signup_logint_btn_click('block', 'none', 'Password', 'Login','none','flex')

})


// restaurant list container code ----------------

let restaurant_list_cont = document.getElementById('ordering-restaurant-list-container')
let restaurant_list_remove_btn = document.getElementById('remove-resturant-list')
let cart_order_btn = document.getElementById('cart-order-btn')
let number_of_items = document.getElementById('number-of-cart-items')

cart_order_btn.addEventListener('click', function () {
  if (number_of_items.innerHTML > 0) {
    restaurant_list_cont.style.display = 'block'
    restaurant_list_cont.style.top = '150px'
  }

  else {
    // nothing
  }

})
restaurant_list_remove_btn.addEventListener('click', function () {
  restaurant_list_cont.style.display = 'none'
})
