

const socket = io('http://localhost:5000')

// ====================== # CUSTOMER USER SCRIPT START# ======================
// HOME PAGE CONTENT
let client_home_page = document.getElementById('home-page')
let customer_search_bar = document.getElementById('customer-search-bar')
let nav_search_btn_client = document.getElementById('main-search-btn')
let remove_search_section_btn_client = document.getElementById('remove-search-section-btn')
let mobile_search_btn_client = document.getElementById('search-btn')
let all_category = document.getElementById('all-category')
let chi_category = document.getElementById('chi-category')
let veg_category = document.getElementById('veg-category')
let nonveg_category = document.getElementById('nonveg-category')
let paneer_category = document.getElementById('paneer-category')
let noodles_category = document.getElementById('noodles-category')
let friedrice_category = document.getElementById('friedrice-category')
// SIGN-UP CONTENT
let signup_name_input = document.getElementById('signup-name')
let signup_password_input = document.getElementById('password-signup')
let signup_email_input = document.getElementById('signupp-email')
let signup_page_inputs = [signup_password_input, signup_name_input, signup_email_input]
let signup_button = document.getElementById('main-signup-btn')
let login_signup_fill_column_warning = document.getElementById('fill-columns-warning')
let try_another_password = document.getElementById('sing-up-warning')


// LOGIN CONTENT
let login_password_input = document.getElementById('login-password')
let customer_login_button = document.getElementById('main-login-btn')
let worgpassword_warning = document.getElementById('login-warning')
let client_login_or_signup_page = document.getElementById('login-page')

// AVATAR PAGE CONTENT
let selecting_avatars_page_container = document.getElementById('avatars-container')
let client_selected_profile = document.getElementById('selected_profile_img')
let avatar_page_warning = document.getElementById('warning-avatar-page')
let client_avatar_submit = document.getElementById('avatar-submit-btn')
let client_avatar_page = document.getElementById('selecting_avatar')

const avatars_list = [
  { avatar_name: './images/avatar1.png' },
  { avatar_name: './images/avatar2.png' },
  { avatar_name: './images/avatar3.png' },
  { avatar_name: './images/avatar15.png' },
  { avatar_name: './images/avatar14.png' },
  { avatar_name: './images/avatar7.png' },
  { avatar_name: './images/avatar6.png' },
  { avatar_name: './images/avatar8.png' },
  { avatar_name: './images/avatar9.png' },
  { avatar_name: './images/avatar10.png' },
  { avatar_name: './images/avatar11.png' },
  { avatar_name: './images/avatar12.png' },
  { avatar_name: './images/avatar13.png' },
  { avatar_name: './images/avatar5.png' },
  { avatar_name: './images/avatar4.png' },
]

// ADDRESS PAGE CONTENT
let address_submit_btn = document.getElementById('address-submit-btn')
let address_city_input = document.getElementById('city-input')
let address_building_input = document.getElementById('building-input')
let address_plot = document.getElementById('plot')
let address_sector = document.getElementById('sector')
let address_phase = document.getElementById('address-phase')
let address_wing_input = document.getElementById('wing-input')
let address_roomnumber_input = document.getElementById('room-number-input')
let address_landmark_input = document.getElementById('landmark-input')
let addres_page_warning = document.getElementById('address-warning')
let client_address_page = document.getElementById('entering-addres-page')
let address_update_btn = document.getElementById('address-update-btn')
// PROFILE PAGE CONTENT
let profile_name = document.getElementById('profilepage-name')
let profile_mobilenum = document.getElementById('profilepage-mobile-number ')
let profile_email = document.getElementById('profilepage-email')
let profile_password = document.getElementById('profilepage-password')
let profile_place = document.getElementById('PG-place')
let profile_state = document.getElementById('PG-state')
let profile_pincode = document.getElementById('PG-pincode')
let profile_phase = document.getElementById('PG-phase')
let profile_landmark = document.getElementById('PG-landmark')
let profile_building = document.getElementById('PG-building')
let profile_wing = document.getElementById('PG-wing')
let profile_roomnumber = document.getElementById('PG-roomnumber')
let profile_sector = document.getElementById('PG-sector')
let profile_plot = document.getElementById('PG-plot')
let profile_image = document.getElementById('profilepage-profileimage')
let profile_update_btn = document.getElementById('profile-page-update-btn')
let socket_id_cont = document.getElementById('socket-id-cont')
// NAVBAR CONTENT
let nav_profile = document.getElementById('nav-profile-image')
let number_of_cart_items = document.getElementById('number-of-cart-items')
// CART AND BILL PAGE CONTENT
let cart_items_container = document.getElementById("carts-items-containers")
let bill_total_items = document.getElementById("total-item")
let bill_total_price = document.getElementById("total-price")
let bill_to_pay = document.getElementById("delivery-charge")
let bill_order_btn = document.getElementById("cart-order-btn")
// RESTAURANT LIST CONTENT
let customer_restaurants_list = document.getElementById('ordering-restaurant-list')
// RESTAURANT LIST PAGE 
let restaurant_list_page = document.getElementById('restaurants-list-page')
// ORDERS PAGE CONTENT
let client_cumtomer_orders_page = document.getElementById('orders-page')
let client_cumtomer_orders_page_container = document.getElementById('cutomer-orders-page-container')


// CHECKING OF SING-UP PASSWORD IF IT IS EQUAL TO ANY USER OR NOT
signup_button.addEventListener('click', function (e) {
  e.preventDefault()
  let entered_password = signup_password_input.value
  socket.emit("signup-btn-click", entered_password)

  let errormessage = ''

  if (signup_name_input.value == '') {
    errormessage = 'enter name'
  }


  if (signup_email_input.value == '') {
    errormessage = 'enter email'
  }


  if (signup_password_input.value == '') {
    errormessage = 'enter password'
  }

  // from here the checking password will  be done


  if (errormessage == '') {
    login_signup_fill_column_warning.style.display = 'none'


    socket.on('password-match', customer_users => {
      try_another_password.style.display = 'block'

      selecting_avatars_page_container.innerHTML = ''
      client_avatar_page.style.display = 'none'
      client_login_or_signup_page.style.display = "flex"



    })

    socket.on('password-not-match', customer_users => {
      try_another_password.style.display = 'none'
      selecting_avatars_page_container.innerHTML = ''
      for (i = 0; i < avatars_list.length; i++) {
        let avatar_outer_cont = document.createElement('div')
        let avatar_img = document.createElement('img')

        avatar_outer_cont.setAttribute('class', 'avatars-secondary-container')
        avatar_outer_cont.append(avatar_img)
        avatar_img.src = avatars_list[i].avatar_name

        selecting_avatars_page_container.append(avatar_outer_cont)

        avatar_outer_cont.addEventListener('click', function () {
          client_avatar_submit.innerHTML = "NEXT"
          client_avatar_submit.style.color = "#205c6e"
          client_avatar_submit.style.backgroundColor = "white"
          client_avatar_submit.style.borderBlockColor = "#205c6e"
          client_selected_profile.innerHTML = avatar_img.src
        })

      }
      client_login_or_signup_page.style.display = "none"
      client_avatar_page.style.display = 'block'
    })

  }
  else {
    login_signup_fill_column_warning.style.display = 'block'
  }

})

// ADD OF SIGN-UP CUSTOMER USER IN THE SERVER ARRAY CUSTOMER_USERS ARRAY

function putting_data_in_pages(profile, name, email, city, state, pincode, phase, landmark, building, wing, roomnumber, sector, plot, password) {
  profile_image.src = profile
  profile_name.innerHTML = name
  profile_email.innerHTML = email
  profile_place.innerHTML = city
  profile_state.innerHTML = state
  profile_pincode.innerHTML = pincode
  profile_phase.innerHTML = phase
  profile_landmark.innerHTML = landmark
  profile_building.innerHTML = building
  profile_wing.innerHTML = wing
  profile_roomnumber.innerHTML = roomnumber
  profile_sector.innerHTML = sector
  profile_plot.innerHTML = plot
  nav_profile.src = profile
  profile_password.innerHTML = password
  // socket_id_cont.innerHTML = socket_id

}





function appeneding_fooditem(image_item, name_food, f_price, price_cutted, f_category, q_for, container, items_array, ccustomerarray, restaurant_name) {
  let item = document.createElement('div')
  let item_image_cont = document.createElement('div')
  let item_image = document.createElement('img')
  let discripton = document.createElement('div')
  let food_name = document.createElement('h4')
  let price_section = document.createElement('div')
  let price = document.createElement('h3')
  let rstrnt_name = document.createElement('h4')
  let food_category_section = document.createElement('div')
  let a_span = document.createElement('span')
  let category = document.createElement('h4')
  let qty_for = document.createElement('div')
  let adding_to_cart_btn = document.createElement("button")
  let add_image = document.createElement('img')

  item.setAttribute('class', 'item')
  item_image_cont.setAttribute('id', 'item-img-container')
  discripton.setAttribute('id', 'discription')
  food_name.setAttribute('id', 'food-name')
  price_section.setAttribute('id', 'price-section')
  price.setAttribute('id', 'price')
  rstrnt_name.setAttribute('id', 'item-rstrnt-name')

  food_category_section.setAttribute('id', 'food-category-section')
  qty_for.setAttribute('id', 'qty-for')
  adding_to_cart_btn.setAttribute('id', 'adding-to-cart-btn')
  item.append(item_image_cont, discripton,)
  item_image_cont.append(item_image)
  discripton.append(food_name, price_section, food_category_section, qty_for, adding_to_cart_btn)
  price_section.append(price, rstrnt_name)
  food_category_section.append(a_span, category)
  adding_to_cart_btn.append(add_image)

  item_image.src = image_item
  food_name.innerHTML = name_food
  price.innerHTML = `&#x20B9; ${f_price}`
  rstrnt_name.innerHTML = '| ' + restaurant_name



  // STYLING RSTRNT_NAME
  rstrnt_name.style.marginLeft = '9px'
  rstrnt_name.style.color = '#898989'
  rstrnt_name.style.fontSize = '13px'

  if(f_category == 'non-veg'){
    a_span.style.background = 'rgb(251, 91, 91)'
  }

  else if(f_category == 'veg'){
    a_span.style.background = 'rgb(42 135 31)'

  }
  else{
    a_span.style.background = 'rgb(0 184 255)'

  }

  
  category.innerHTML = f_category
  qty_for.innerHTML = `for - ${q_for}`
  add_image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAMklEQVRIiWNgGGngPxQTDZho5JBRC0YtGEoWMCKxScpAxJpNcx+QCkaLilELRi0YkQAArMYFIENGFBoAAAAASUVORK5CYII='

  container.append(item)

  // ADD TO CART BTN SCRIPT ----------
  // let items = array

  adding_to_cart_btn.dataset.items = i
  adding_to_cart_btn.addEventListener("click", function adding_item_in_cart(event) {
    const item_index = event.currentTarget.dataset.items;
    socket.emit('appending-item-in-cart-function', item_index, items_array, food_name.innerHTML, profile_password.innerHTML)

  })



}

socket.on('appeding-item-in-cart-starting-func', (customer_users, items_array, item_index, food_name) => {
  let ccustomer_aarray = customer_users


  for (i = 0; i < ccustomer_aarray.length; i++) {

    if (profile_password.innerHTML == ccustomer_aarray[i].password) {



      if (ccustomer_aarray[i].cart.length > 0) {
        let checking_result = ''


        for (n = 0; n < ccustomer_aarray[i].cart.length; n++) {
          if (food_name == ccustomer_aarray[i].cart[n].name) {


            checking_result = 'there is the item in the cart'


          }
        }

        if (checking_result == '') {




          socket.emit('append-item-in-cart-array', profile_password.innerHTML, items_array[item_index])

          socket.emit('appending-item-on-screen', profile_password.innerHTML, items_array[item_index])



        }

      }

      else {



        socket.emit('append-item-in-cart-array', profile_password.innerHTML, items_array[item_index])

        socket.emit('appending-item-on-screen', profile_password.innerHTML, items_array[item_index])



      }







    }
  }

  console.log(customer_users)
})


socket.on('append-item-on-screen', (customer_users, customer_userss, selected_items, total_bill, total_num_of_items) => {
  let customer_array = customer_userss

  cart_items_container.innerHTML = ''
  for (s = 0; s < customer_users.length; s++) {
    if (profile_password.innerHTML == customer_users[s].password) {
      let ccustomer_array = customer_users[s]


      for (c = 0; c < ccustomer_array.cart.length; c++) {

        let cart_item = document.createElement('div')
        let cart_item_left = document.createElement('div')
        let food_category_sign = document.createElement('img')
        let cart_item_name = document.createElement('h3')
        let cart_item_name_sec = document.createElement('h3')
        let cart_item_right = document.createElement('div')
        let cart_item_price = document.createElement('h3')
        let quantity_container = document.createElement('div')
        let increase_btn = document.createElement('button')
        let increase_img = document.createElement('img')
        let quantity_section = document.createElement('p')
        let decrease_btn = document.createElement('button')
        let decrease_img = document.createElement('img')
        let remove_cart_item = document.createElement('img')

        cart_item.setAttribute('class', 'cart-item')
        cart_item_left.setAttribute('id', 'cart-item-left-side')
        food_category_sign.setAttribute('id', 'food-category-sign-img')
        cart_item_name.setAttribute('id', 'cart-food-name')
        cart_item_right.setAttribute('id', 'cart-item-right-side')
        quantity_container.setAttribute('id', 'item-quantity-container')
        increase_btn.setAttribute('id', 'increase-cart-item')
        quantity_section.setAttribute('id', 'item-quantity')
        decrease_btn.setAttribute('id', 'decrease-cart-item"')
        cart_item_price.setAttribute('id', 'cart-item-price')
        remove_cart_item.setAttribute('id', 'remove-cart-item-btn')

        if (ccustomer_array.cart[c].category == 'non-veg') {
          food_category_sign.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABoElEQVRIie2WsU/CQBSHf69pCNFFuoGTii5lMMoGGF1RCA4Nifxv6oQhLAo6C8qKslRj0LihU8NCaJDwHCgJUbBXS3XhSzrcXd/7cq/N3QPm/BE0PnjN7C75+/1NL0SmLDdWzivt0VgeX7Sk116I/f3+HoDKRPGI4GWNJs3/lreDOH+dk2YpcMK/iSeWehq6pvqUbiBHQJqBMAAQ0GSikuE38mpR74nmEt5xKxmLKt3AI4BjBjIAIgAiDByC+UQxAw+t/fj2TMWtZCxKElUBrE59ibFGhGorldiaiVjXVB9JVACwIJBvkRgFXVN9rsVKN5DDTzv9BocVUzlyLSYgLS61YphtY2zFDKw7FTMN/3hX4qHbqdk+RqTUz47FZB9jX2qiC8fiAZdciw2/kQfhRdTJQNNYaJ+5FqtFvccDZAF0BLwdlqSsyNEpdHKFrmp1JtoBaOq3Y6A5kKTEcunmXiSn8CURKt/e6ZqqDg8HToGxYSmfwCgH38081esfovkc3U5WCU+txxXzRgDA5B7JU7Epyw2rG5w5piw3vMg7x5ZPVSmCOcBpkSAAAAAASUVORK5CYII='
        }
        else if (ccustomer_array.cart[c].category == 'veg') {
          food_category_sign.src = './images/veg-sign.png'
        }
        else {
          food_category_sign.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABo0lEQVRIie2Wu07jQBRAz7UcK4QGxBfsklSmiCCiA2l/YLXbgAQNVDw+CIUGqEBEAgl+AOh5pMBQmIgvIIICCMHypQkSj4DH2IEmR3IxM773aGas6wtdvgl5OSiuXvbZjaDYCVGQtavV2V/Xz2P75aLdCIoIe50Q243gD7DfVvzM4XxB2s1/lVLZ17dzVpqCOPyYuO1Rf4Rb8ZxcPTOtyF8gD6Cobym7dwOP696E2zTNZbzj0XKt1FN3zhVZAf4BQ8CQIP9VZLWn7pwNL12MpCoeLddKIeEB8PuT1wYtSw9Glv3hVMRuxXNCwk0gZ5CvV2DTrXhOYnGunpnm852+RsnnrjJTicWtDykWoRAZY3LHhbhiQfJpiN9VnWizRsaYiC9ii9WKjIkUi+pObK+wm1h8N/C4DtSMpeA3+h82Eou9CbcZhjIJ3Bp4b0WZNCmdRpXreDF/pMI48vF9K/goY4cLhROTnMa1+miucHzf33RFdRZkGzgFThG2VGQGuXFNpRDz79Q6wrXWk4huIwC075E6Kg6ydrXVDaZOkLWrncjbJZInU8GCKJ9kzDMAAAAASUVORK5CYII='
        }


        cart_item_name.innerHTML = ccustomer_array.cart[c].name
        if(        ccustomer_array.cart[c].name.length > 9){

          cart_item_name_sec.innerHTML = ccustomer_array.cart[c].name[0]+ccustomer_array.cart[c].name[1]+ccustomer_array.cart[c].name[2]+ccustomer_array.cart[c].name[3]+ccustomer_array.cart[c].name[4]+ccustomer_array.cart[c].name[5]+ccustomer_array.cart[c].name[6]+ccustomer_array.cart[c].name[7]+ccustomer_array.cart[c].name[8]+ccustomer_array.cart[c].name[9] + '...'
        }
        else{
        cart_item_name_sec.innerHTML = ccustomer_array.cart[c].name

        }
        increase_img.src = './images/add-img.png'
        increase_img.style.width = '16px'
        decrease_img.src = './images/substract.png'
        decrease_btn.style.padding = '0 2px'
        decrease_btn.style.borderLeft = '1px solid black'

        quantity_section.innerHTML = ccustomer_array.cart[c].qty


        // cart_item_price.innerHTML = ccustomer_array.cart[c].price
        cart_item_price.innerHTML = `&#x20B9; ${ccustomer_array.cart[c].price}`
        cart_item_name.style.display ='none'


        remove_cart_item.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABXElEQVRIie2VvUoDQRSFz9lS0vgevomIEI2S2YidCbviD4KVtZVWJoORFJrszAqKjfgqNj6BlUXAKuRamIUgJLMTk1T7lcvu+bh3du4FCgoKlkW7/bqyiG8CV8Cg1H/X1tbySpvGbA5K/Q9tzOrM4np941uIcxF0dGL3XVKdpusEHym8jMLwa9q7dIUBQNPaHQq6FNSjmnqYJJWhPIM4i5XSrsxcYgDQxlQE7AHSiMPw/j9SwNHqcaIwfCJkD+CdTtJG9rxlTHk4lBcfKeBRccaociOQYwKfAqYkTn2kM4kBoJWku0LpjhLiQ6U6vhm5Wz1vvMXamAooPUBOgoBlCm5a1ka+OV6tzs6XwqOoVr0FZvujvcTZXV7qdRofIH+lABBVq28MuA3BtU7SeC7isUoPJk2tTC6QLaFc5ZFPbXW2JEhcREolrjDgd0kQ1ISsueb1VBa1FgsKCubGD2CZtBal/3eyAAAAAElFTkSuQmCC'

        cart_item.append(cart_item_left, cart_item_right)
        cart_item_left.append(food_category_sign, cart_item_name,cart_item_name_sec)
        increase_btn.append(increase_img)
        decrease_btn.append(decrease_img)
        quantity_container.append(increase_btn, quantity_section, decrease_btn)
        cart_item_right.append(cart_item_price, quantity_container, remove_cart_item)

        // remove_cart_item
        remove_cart_item.addEventListener('click', function remove_cart() {




          socket.emit('removing-item', profile_password.innerHTML, cart_item_name.innerHTML)
          socket.on('updating-removed-data', (cart_index, customer_users, total_prices, numbers_of_cart_items) => {
            bill_to_pay.innerHTML = `&#x20B9; ${total_prices}`
            bill_total_price.innerHTML = `&#x20B9; ${total_prices}`
            number_of_cart_items.innerHTML = numbers_of_cart_items
            bill_total_items.innerHTML = numbers_of_cart_items
            cart_item.style.display = 'none'


          })

        })


        decrease_btn.addEventListener('click', function () {


          socket.emit('decrease-qty', profile_password.innerHTML, cart_item_name.innerHTML)

          socket.on('updating-decreased-data', (cart_index, customer_users, total_prices, numbers_of_cart_items) => {
            for (i = 0; i < customer_users.length; i++) {
              if (profile_password.innerHTML == customer_users[i].password) {
                for (c_i = 0; c_i < customer_users[i].cart.length; c_i++) {
                  if (cart_item_name.innerHTML == customer_users[i].cart[c_i].name) {
                    quantity_section.innerHTML = customer_users[i].cart[c_i].qty
                    cart_item_price.innerHTML = `&#x20B9; ${customer_users[i].cart[c_i].price}`

                  }
                }
              }
            }

            bill_to_pay.innerHTML = `&#x20B9; ${total_prices}`
            bill_total_price.innerHTML = `&#x20B9; ${total_prices}`
            number_of_cart_items.innerHTML = numbers_of_cart_items
            bill_total_items.innerHTML = numbers_of_cart_items

          })


        })
        increase_btn.addEventListener('click', function () {

          socket.emit('increasing-qty', profile_password.innerHTML, cart_item_name.innerHTML)

          socket.on('updating-increased-data', (cart_index, customer_users, total_prices, numbers_of_cart_items) => {
            for (i = 0; i < customer_users.length; i++) {
              if (profile_password.innerHTML == customer_users[i].password) {
                for (c_i = 0; c_i < customer_users[i].cart.length; c_i++) {
                  if (cart_item_name.innerHTML == customer_users[i].cart[c_i].name) {
                    quantity_section.innerHTML = customer_users[i].cart[c_i].qty
                    cart_item_price.innerHTML = `&#x20B9; ${customer_users[i].cart[c_i].price}`


                  }
                }
              }
            }
            bill_to_pay.innerHTML = `&#x20B9; ${total_prices}`
            bill_total_price.innerHTML = `&#x20B9; ${total_prices}`
            number_of_cart_items.innerHTML = numbers_of_cart_items
            bill_total_items.innerHTML = numbers_of_cart_items
          })


        })


        cart_items_container.append(cart_item)

      }

    }
  }
  number_of_cart_items.innerHTML = total_num_of_items
  bill_total_items.innerHTML = total_num_of_items
  bill_to_pay.innerHTML = `&#x20B9; ${total_bill}`
  bill_total_price.innerHTML = `&#x20B9; ${total_bill}`



})



















let home_items_container = document.getElementById('items-container')

// CUSTOMER SING UP FUNCTION

address_submit_btn.addEventListener('click', function (e) {
  e.preventDefault()


  let errormessage = ''

  if (address_city_input.value == '') {
    errormessage = 'enter city'
  }
  if (address_building_input.value == '') {
    errormessage = 'enter building'
  }

  if (address_wing_input.value == '') {
    errormessage = 'enter wing'
  }
  if (address_roomnumber_input.value == '') {
    errormessage = 'enter room number'
  }
  if (address_landmark_input.value == '') {
    errormessage = 'enter land mark'
  }
  if (address_plot.value == '') {
    errormessage = 'enter plot'
  }
  if (address_sector.value == '') {
    errormessage = 'enter sector'
  }
  if (address_phase.value == '') {
    errormessage = 'enter phase'
  }

  if (errormessage == '') {
    let signup_username = signup_name_input.value
    let signup_email = signup_email_input.value
    let signup_password = signup_password_input.value
    let signup_avatar = client_selected_profile.innerHTML
    let signup_city = address_city_input.value
    let signup_building = address_building_input.value
    let signup_plot = address_plot.value
    let signup_sector = address_sector.value
    let signup_phase = address_phase.value
    let signup_wing = address_wing_input.value
    let signup_roomnumber = address_roomnumber_input.value
    let signup_landmark = address_landmark_input.value
    addres_page_warning.style.display = 'none'
    socket.emit('customer-user-signup', signup_username, signup_email, signup_password, signup_avatar, signup_city, signup_building, signup_wing, signup_roomnumber, signup_landmark, signup_phase, signup_sector, signup_plot)


    putting_data_in_pages(client_selected_profile.innerHTML, signup_username, signup_email, signup_city, 'Maharashtra', '410208', signup_phase, signup_landmark, signup_building, signup_wing, signup_roomnumber, signup_sector, signup_plot, signup_password)




    home_items_container.innerHTML = ''

    socket.on('appeding-items-in-items-container', (items, customer_users, online_restaurants) => {

      // SHUFFLING THE ITEMS 
      items.sort((a, b) => 0.5 - Math.random());

      for (i = 0; i < items.length; i++) {
        appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)

      }

      customer_restaurants_list.innerHTML = ''
      restaurant_list_page.innerHTML = ''

      // console.log(online_restaurants)
      for (a = 0; a < online_restaurants.length; a++) {
        // OR = online restaurant
        let ordering_rstrnt = document.createElement('div')
        let OR_profile = document.createElement('div')
        let OR_img_cont = document.createElement('div')
        let OR_img = document.createElement('img')
        let OR_partition = document.createElement('span')
        let OR_info = document.createElement('div')
        let OR_name = document.createElement('h2')
        let OR_address = document.createElement('p')

        ordering_rstrnt.append(OR_profile, OR_info)
        OR_profile.append(OR_img_cont, OR_partition)
        OR_img_cont.append(OR_img)
        OR_info.append(OR_name, OR_address)

        ordering_rstrnt.setAttribute('class', 'ordering-restaurant')
        OR_profile.setAttribute('id', 'profile')
        OR_img_cont.setAttribute('id', 'img-cont')
        OR_info.setAttribute('id', 'info')

        OR_name.innerHTML = online_restaurants[a].name
        OR_address.innerHTML = `${online_restaurants[a].address.building},sector ${online_restaurants[a].address.sector}, plot ${online_restaurants[a].address.plot},phase ${online_restaurants[a].address.phase},near ${online_restaurants[a].address.landmark}`

        OR_img.src = online_restaurants[a].img
        OR_partition.innerHTML = '|'

        ordering_rstrnt.addEventListener('click', function () {
          for (n = 0; n < online_restaurants.length; n++) {
            if (OR_name.innerHTML == online_restaurants[n].name) {
              console.log(online_restaurants[n])

              socket.emit('final-ordering', online_restaurants[n], OR_name.innerHTML, online_restaurants[n].socket_id, profile_password.innerHTML)



            }
          }

          client_restaurant_list_cont.style.display = 'none'
        })

        customer_restaurants_list.append(ordering_rstrnt)
        // 'RL' stands for 'Restaurant list'


        let RL_restuarnt = document.createElement('div')
        let RL_rstrnt_upper = document.createElement('div')
        let RL_img = document.createElement('img')
        let RL_rstrnt_lower = document.createElement('div')
        let RL_name = document.createElement('h1')
        let RL_address = document.createElement('div')

        RL_restuarnt.append(RL_rstrnt_upper, RL_rstrnt_lower)
        RL_rstrnt_upper.append(RL_img)
        RL_rstrnt_lower.append(RL_name, RL_address)

        RL_restuarnt.setAttribute('class', 'restaurants')
        RL_rstrnt_upper.setAttribute('id', 'RL-restaurant-upper')
        RL_rstrnt_lower.setAttribute('id', 'RL-restaurant-lower')
        RL_address.setAttribute('id', 'RL-restaurant-address')

        RL_img.src = online_restaurants[a].img
        RL_name.innerHTML = online_restaurants[a].name
        RL_address.innerHTML = `${online_restaurants[a].address.building},sector ${online_restaurants[a].address.sector}, plot ${online_restaurants[a].address.plot},phase ${online_restaurants[a].address.phase},near ${online_restaurants[a].address.landmark}`
        restaurant_list_page.append(RL_restuarnt)

      }

      for (n = 0; n < customer_users.length; n++) {
        if (profile_password.innerHTML == customer_users[n].password) {
          socket_id_cont.innerHTML = customer_users[n].socket_id
        }
      }

    })
    cart_items_container.innerHTML = ''
    total_price = 0
    numbers_of_item = 0

    bill_to_pay.innerHTML = 0
    bill_total_price.innerHTML = 0
    bill_total_items.innerHTML = 0
    number_of_cart_items.innerHTML = 0

    client_address_page.style.display = "none"
    client_home_page.style.display = 'flex'





  }
  else {
    addres_page_warning.style.display = 'block'
  }


})

// SEARCHING FOOD ITEM FUNCTION
function customer_searching_items() {
  let searched_item = customer_search_bar.value.toUpperCase()



  socket.emit('searching-item-CTMR', searched_item)


  socket.on('search-fooditem-customer-id', (items, customer_users) => {
    if (searched_item == '') {
      home_items_container.innerHTML = ''

      items.sort((a, b) => 0.5 - Math.random());

      for (i = 0; i < items.length; i++) {
        appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)
      }
    }

    else {
      home_items_container.innerHTML = ''
      for (i = 0; i < items.length; i++) {

        let name = items[i].name.toUpperCase()
        let rstrnt_name = items[i].restasurant_name.toUpperCase()

        let result = name.includes(searched_item);
        let rstrnt_result = rstrnt_name.includes(searched_item);
        if (result == true) {

          // console.log(items[i])

          appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)

        }

        else if(rstrnt_result == true){
          appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)


        }

      }

    }

  })
}

// HERE I AM USING THE SAME FUNCION OF SEARCHING ITEMS TO GET ALL ITEMS IN THE CONTAINER AFTER REMOVING SEARCH SECTION

remove_search_section_btn_client.addEventListener('click', function () {
  socket.emit('searching-item-CTMR', 'something')

  socket.on('search-fooditem-customer-id', (items, customer_users) => {
    home_items_container.innerHTML = ''

    items.sort((a, b) => 0.5 - Math.random());

    for (i = 0; i < items.length; i++) {
      appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)
    }
  })

})
nav_search_btn_client.addEventListener('click', function () {
  socket.emit('searching-item-CTMR', 'something')

  socket.on('search-fooditem-customer-id', (items, customer_users) => {
    home_items_container.innerHTML = ''

    items.sort((a, b) => 0.5 - Math.random());

    for (i = 0; i < items.length; i++) {
      appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)
    }
  })

})
mobile_search_btn_client.addEventListener('click', function () {
  socket.emit('searching-item-CTMR', 'something')

  socket.on('search-fooditem-customer-id', (items, customer_users) => {
    home_items_container.innerHTML = ''

    items.sort((a, b) => 0.5 - Math.random());

    for (i = 0; i < items.length; i++) {
      appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)
    }
  })

})


// CATEGORY SECTOIN BTNS SEARCH FUNCTION

all_category.addEventListener('click',function(e){
  e.preventDefault()
  socket.emit('searching-item-CTMR', 'something')

  socket.on('search-fooditem-customer-id', (items, customer_users) => {
    home_items_container.innerHTML = ''

    items.sort((a, b) => 0.5 - Math.random());

    for (i = 0; i < items.length; i++) {
      appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)
    }
  })
})

chi_category.addEventListener('click',function(e){
  e.preventDefault()
  let searched_item = 'CHICKEN'
  socket.emit('searching-item-CTMR', 'something')

  socket.on('search-fooditem-customer-id', (items, customer_users) => {
    home_items_container.innerHTML = ''
    for (i = 0; i < items.length; i++) {

    let category = items[i].name.toUpperCase()

    let result = category.includes(searched_item);
    if (result == true) {

      // console.log(items[i])

      appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)

    }
    }

  })
})
veg_category.addEventListener('click',function(e){
  e.preventDefault()
  let searched_item = 'VEG'
  socket.emit('searching-item-CTMR', 'something')

  socket.on('search-fooditem-customer-id', (items, customer_users) => {
    home_items_container.innerHTML = ''
    for (i = 0; i < items.length; i++) {

    let category = items[i].category.toUpperCase()

    if (searched_item == category) {


      appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)

    }
    }

  })
})

nonveg_category.addEventListener('click',function(e){
  e.preventDefault()
  let searched_item = 'NON-VEG'
  socket.emit('searching-item-CTMR', 'something')

  socket.on('search-fooditem-customer-id', (items, customer_users) => {
    home_items_container.innerHTML = ''
    for (i = 0; i < items.length; i++) {

    let category = items[i].category.toUpperCase()

    if (searched_item == category) {


      appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)

    }
    }

  })
})

noodles_category.addEventListener('click',function(e){
  e.preventDefault()
  let searched_item = 'NOODLES'
  socket.emit('searching-item-CTMR', 'something')

  socket.on('search-fooditem-customer-id', (items, customer_users) => {
    home_items_container.innerHTML = ''
    for (i = 0; i < items.length; i++) {

    let category = items[i].name.toUpperCase()

    let result = category.includes(searched_item);
    if (result == true) {

      // console.log(items[i])

      appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)

    }
    }

  })
  })

  paneer_category.addEventListener('click',function(e){
    e.preventDefault()
    let searched_item = 'PANEER'
    socket.emit('searching-item-CTMR', 'something')
  
    socket.on('search-fooditem-customer-id', (items, customer_users) => {
      home_items_container.innerHTML = ''
      for (i = 0; i < items.length; i++) {
  
      let category = items[i].name.toUpperCase()
  
      let result = category.includes(searched_item);
      if (result == true) {
  
        // console.log(items[i])
  
        appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)
  
      }
      }
  
    })
})

friedrice_category.addEventListener('click',function(e){
  e.preventDefault()
  let searched_item = 'RICE'
  socket.emit('searching-item-CTMR', 'something')

  socket.on('search-fooditem-customer-id', (items, customer_users) => {
    home_items_container.innerHTML = ''
    for (i = 0; i < items.length; i++) {

    let category = items[i].name.toUpperCase()

    let result = category.includes(searched_item);
    if (result == true) {

      // console.log(items[i])

      appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)

    }
    }

  })
  })

// ADRESS UPDATING PROCESS OF CUSTOMER ID 

profile_update_btn.addEventListener('click', function () {
  client_home_page.style.display = 'none'
  client_address_page.style.display = 'block'
  address_submit_btn.style.display = 'none'
  address_update_btn.style.display = 'block'
})


address_update_btn.addEventListener('click', function (e) {
  e.preventDefault()


  let errormessage = ''

  if (address_city_input.value == '') {
    errormessage = 'enter city'
  }
  if (address_building_input.value == '') {
    errormessage = 'enter building'
  }

  if (address_wing_input.value == '') {
    errormessage = 'enter wing'
  }
  if (address_roomnumber_input.value == '') {
    errormessage = 'enter room number'
  }
  if (address_landmark_input.value == '') {
    errormessage = 'enter land mark'
  }
  if (address_plot.value == '') {
    errormessage = 'enter plot'
  }
  if (address_sector.value == '') {
    errormessage = 'enter sector'
  }
  if (address_phase.value == '') {
    errormessage = 'enter phase'
  }

  if (errormessage == '') {
    let signup_username = signup_name_input.value
    let signup_email = signup_email_input.value
    let signup_password = signup_password_input.value
    let signup_avatar = client_selected_profile.innerHTML
    let signup_city = address_city_input.value
    let signup_building = address_building_input.value
    let signup_plot = address_plot.value
    let signup_sector = address_sector.value
    let signup_phase = address_phase.value
    let signup_wing = address_wing_input.value
    let signup_roomnumber = address_roomnumber_input.value
    let signup_landmark = address_landmark_input.value

    addres_page_warning.style.display = 'none'

    // HERE AGAIN I AM USING THE SAME FUNCION OF SEARCHING ITEMS TO PUT ALL THE UPDATED DATA IN THE SERVER ARRAY
    // socket.emit('searching-item-CTMR', 'something')
    socket.emit('customer-updating-address', profile_password.innerHTML, signup_city, signup_building, signup_wing, signup_roomnumber, signup_landmark, signup_phase, signup_sector, signup_plot)


    putting_data_in_pages(client_selected_profile.innerHTML, signup_username, signup_email, signup_city, 'Maharashtra', '410208', signup_phase, signup_landmark, signup_building, signup_wing, signup_roomnumber, signup_sector, signup_plot, signup_password)



    client_address_page.style.display = 'none'
    client_home_page.style.display = 'block'
  }

  else {
    addres_page_warning.style.display = 'block'
  }
})






// ------------------ RESTAURANT USER SCRIPT STARTS  -------------------//
// ====================== _______________==============================//



// rstrnt
// LOGIN PAGE CONTENT
let rstrnt_login_btn = document.getElementById('main-restaurant-login-btn')
let rstrnt_password_input = document.getElementById('Restaurant-password')
let no_restaurant_matched = document.getElementById('restaurant-login-warning')
// HOME PAGE CONTENT
let client_restaurant_home_page = document.getElementById('resautrant-home-page')
let rstrnt_avtar_profile = document.getElementById('rstrnt_avtar_profile')
let rstrnt_home_orders_container = document.getElementById('non-cancled-orders-container')
let number_of_orders_status = document.getElementById('numbers-of-orders')
let rstrnt_home_orders_section = document.getElementById('non-cancled-orders-section')
let rstrnt_notification = document.getElementById('restaurent-not-matched-notification')
let rstrnt_nav_name = document.getElementById('rstrnt-nav-heading')
let rstrnt_logout_btn = document.getElementById('restaurant-logout-btn-container')
let phase_1 = document.getElementById('phase1')
let phase_2 = document.getElementById('phase2')
let panchanad = document.getElementById('panchanand')
let sec21 = document.getElementById('sec21')
let sec9 = document.getElementById('sec9')
let sec12 = document.getElementById('sec12')
let gami = document.getElementById('gami')
let sec4 = document.getElementById('sec4')
let client_RT_home_page = document.getElementById('orders-section')
let client_RT_search_page = document.getElementById('restaurant-search-page')


// PROFILE PAGE CONTENT
let rstrnt_profile_img = document.getElementById('rstrnt-profilepg-img')
let rstrnt_profile_name = document.getElementById('rstrnt_profile_name')
let rstrnt_profile_password = document.getElementById('restaurant-profilepage-password')
let rstrnt_profile_email = document.getElementById('resaurant-profilepage-email')
let rstrnt_profile_orders = document.getElementById('restaurant-profile-total-orders')
let rstrnt_profile_pending_orders = document.getElementById('pending-orders')
let rstrnt_profile_taken_orders = document.getElementById('taken-orders')
let rstrnt_profile_cancellend_orders = document.getElementById('cancelled-orders')
// RESTAURANT LIST CONTENT
let client_restaurant_list_cont = document.getElementById('ordering-restaurant-list-container')
// PROFILE PAGE CONTENT
let pending_orders = document.getElementById('pending-orders')
let taken_orders = document.getElementById('taken-orders')
let cancelled_orders = document.getElementById('cancelled-orders')
let rstrnt_address_update_btn = document.getElementById('restaurant-profile-page-update-btn')
// SEARCH PAGE CONTENT
let rstrnt_search_bar = document.getElementById('rstrnt_search_bar')
let rstrnt_search_result_page = document.getElementById('search-result-container')

let client_customer_btn = document.getElementById('customer-btn')
let client_customer_or_restaurantowner_page = document.getElementById('customer-or-shopowner-page')


client_customer_btn.addEventListener('click', function () {

  socket.emit('customer-btn', 'ddf')



})




// APPENDING ODERS FUNC

function rstrnt_appendding_orders(user_img, user_name, order_year, order_month, order_date, order_address, user_array, order_total_amount, container, status, pass, order_n, rstrnt_order_n) {
  let main_order = document.createElement('div')
  main_order.setAttribute('class', 'main-order')
  let upper_cont = document.createElement('div')
  upper_cont.setAttribute('id', 'upper-container')
  let user_profile_cont = document.createElement('div')
  user_profile_cont.setAttribute('id', 'user-profile-cont')
  let user_profile = document.createElement('div')
  user_profile.setAttribute('id', 'user-profile')
  let img_cont = document.createElement('span')
  img_cont.setAttribute('id', 'img-cont')
  let u_img = document.createElement('img')
  let name = document.createElement('h3')
  let date_partition_line_cont = document.createElement('div')
  date_partition_line_cont.setAttribute('id', 'date-partition-line-cont')
  let partition_line = document.createElement('p')
  partition_line.setAttribute('id', 'partition-line')
  let date_cont = document.createElement('div')
  date_cont.setAttribute('id', 'date')
  let year_cont = document.createElement('span')
  let month_date_cont = document.createElement('span')
  let address_cont = document.createElement('div')
  address_cont.setAttribute('id', 'address-cont')
  let ordered_items_cont = document.createElement('div')
  ordered_items_cont.setAttribute('id', 'ordered-items-container')



  // MAKING CANCLE BTN---
  let cancle_btn = document.createElement('span')
  cancle_btn.innerHTML = 'cancle'

  cancle_btn.style.color = 'rgb(231 76 60)'
  cancle_btn.style.fontWeight = '900'
  cancle_btn.style.cursor = 'pointer'
  cancle_btn.style.fontSize = '13px'
  cancle_btn.style.border = '1px solid rgb(231 76 60)'
  cancle_btn.style.padding = '0 3px'
  cancle_btn.style.marginRight = '57px'
  cancle_btn.style.fontFamily = 'sans-serif'

  // MAKING ORDER NUMBER CONTAINER




  // putting all items in ordered_items-cont
  for (a = 0; a < user_array.length; a++) {
    let item_cont = document.createElement('div')
    item_cont.setAttribute('class', 'item')
    let item_detail_cont = document.createElement('div')
    item_detail_cont.setAttribute('id', 'item-detail')
    let category_img = document.createElement('img')
    let item_name = document.createElement('h3')
    let item_rate_qty_cont = document.createElement('div')
    item_rate_qty_cont.setAttribute('id', 'item-rate-qty')
    let qty_cont = document.createElement('span')
    let item_price = document.createElement('span')

    item_cont.append(item_detail_cont, item_rate_qty_cont)
    item_detail_cont.append(category_img, item_name)
    item_rate_qty_cont.append(qty_cont, item_price)

    if (user_array[a].category == 'non-veg') {
      category_img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABoElEQVRIie2WsU/CQBSHf69pCNFFuoGTii5lMMoGGF1RCA4Nifxv6oQhLAo6C8qKslRj0LihU8NCaJDwHCgJUbBXS3XhSzrcXd/7cq/N3QPm/BE0PnjN7C75+/1NL0SmLDdWzivt0VgeX7Sk116I/f3+HoDKRPGI4GWNJs3/lreDOH+dk2YpcMK/iSeWehq6pvqUbiBHQJqBMAAQ0GSikuE38mpR74nmEt5xKxmLKt3AI4BjBjIAIgAiDByC+UQxAw+t/fj2TMWtZCxKElUBrE59ibFGhGorldiaiVjXVB9JVACwIJBvkRgFXVN9rsVKN5DDTzv9BocVUzlyLSYgLS61YphtY2zFDKw7FTMN/3hX4qHbqdk+RqTUz47FZB9jX2qiC8fiAZdciw2/kQfhRdTJQNNYaJ+5FqtFvccDZAF0BLwdlqSsyNEpdHKFrmp1JtoBaOq3Y6A5kKTEcunmXiSn8CURKt/e6ZqqDg8HToGxYSmfwCgH38081esfovkc3U5WCU+txxXzRgDA5B7JU7Epyw2rG5w5piw3vMg7x5ZPVSmCOcBpkSAAAAAASUVORK5CYII='
    }
    else if (user_array[a].category == 'veg') {
      category_img.src = './images/veg-sign.png'
    }
    else {
      category_img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABo0lEQVRIie2Wu07jQBRAz7UcK4QGxBfsklSmiCCiA2l/YLXbgAQNVDw+CIUGqEBEAgl+AOh5pMBQmIgvIIICCMHypQkSj4DH2IEmR3IxM773aGas6wtdvgl5OSiuXvbZjaDYCVGQtavV2V/Xz2P75aLdCIoIe50Q243gD7DfVvzM4XxB2s1/lVLZ17dzVpqCOPyYuO1Rf4Rb8ZxcPTOtyF8gD6Cobym7dwOP696E2zTNZbzj0XKt1FN3zhVZAf4BQ8CQIP9VZLWn7pwNL12MpCoeLddKIeEB8PuT1wYtSw9Glv3hVMRuxXNCwk0gZ5CvV2DTrXhOYnGunpnm852+RsnnrjJTicWtDykWoRAZY3LHhbhiQfJpiN9VnWizRsaYiC9ii9WKjIkUi+pObK+wm1h8N/C4DtSMpeA3+h82Eou9CbcZhjIJ3Bp4b0WZNCmdRpXreDF/pMI48vF9K/goY4cLhROTnMa1+miucHzf33RFdRZkGzgFThG2VGQGuXFNpRDz79Q6wrXWk4huIwC075E6Kg6ydrXVDaZOkLWrncjbJZInU8GCKJ9kzDMAAAAASUVORK5CYII='
    }

    item_name.innerHTML = user_array[a].name
    qty_cont.innerHTML = `Qty - ${user_array[a].qty}`
    item_price.innerHTML = `&#x20B9; ${user_array[a].price}`

    ordered_items_cont.append(item_cont)

  }

  let order_total_section = document.createElement('div')
  order_total_section.setAttribute('id', 'order-total-section')
  let done_order = document.createElement('h3')
  done_order.setAttribute('id', 'done-order')
  let confirm_btn = document.createElement('button')
  let canclled_heading = document.createElement('h3')
  canclled_heading.setAttribute('id', 'cancelled-heading')
  let total_amount_cont = document.createElement('p')

  let password_cont = document.createElement('div')
  password_cont.style.display = 'none'
  let order_number = document.createElement('div')
  order_number.style.display = 'none'
  let rstrnt_order_number = document.createElement('span')
  rstrnt_order_number.style.display = 'none'

  main_order.append(upper_cont, ordered_items_cont, order_total_section, password_cont, order_number, rstrnt_order_number)
  upper_cont.append(user_profile_cont, address_cont)
  user_profile_cont.append(user_profile, date_partition_line_cont)
  user_profile.append(img_cont, name)
  img_cont.append(u_img)
  date_partition_line_cont.append(partition_line, date_cont)
  date_cont.append(year_cont, month_date_cont)



  order_total_section.append(done_order, confirm_btn, cancle_btn, canclled_heading, total_amount_cont)


  if (status == 'cancelled') {
    confirm_btn.style.display = 'none'
    cancle_btn.style.display = 'none'
    canclled_heading.style.display = 'block'
  }

  else if (status == 'confirmed') {
    done_order.style.display = 'block'
    confirm_btn.style.display = 'none'
    cancle_btn.style.display = 'none'
  }

  else {
    confirm_btn.style.display = 'block'
    cancle_btn.style.display = 'block'
  }



  // CLICK FUNC OF 'CONFIRM AND CANCLE BUTTON'
  confirm_btn.addEventListener('click', function () {

    socket.emit('confirm-btn-func', order_number.innerHTML, password_cont.innerHTML, rstrnt_profile_name.innerHTML, rstrnt_order_number.innerHTML)
    confirm_btn.style.display = 'none'
    cancle_btn.style.display = 'none'
    done_order.style.display = 'block'
    console.log(order_index)

  })

  cancle_btn.addEventListener('click', function () {
    socket.emit('cancle-btn-func', order_number.innerHTML, password_cont.innerHTML, rstrnt_profile_name.innerHTML, rstrnt_order_number.innerHTML)
    confirm_btn.style.display = 'none'
    cancle_btn.style.display = 'none'
    canclled_heading.style.display = 'block'

  })
  // // PUTTING DATA


  u_img.src = user_img
  name.innerHTML = user_name
  partition_line.innerHTML = '|'
  confirm_btn.innerHTML = 'Confirm'
  canclled_heading.innerHTML = 'CANCELLED'
  done_order.innerHTML = 'DONE'
  year_cont.innerHTML = order_year
  month_date_cont.innerHTML = `${order_month}  - ${order_date}`
  address_cont.innerHTML = `<span>Address :</span> ${order_address}`
  total_amount_cont.innerHTML = `Total - &#x20B9; ${order_total_amount}`
  password_cont.innerHTML = pass
  order_number.innerHTML = order_n
  rstrnt_order_number.innerHTML = rstrnt_order_n
  container.append(main_order)
}



socket.on('confirm-btn-running-func', (order_n, restaurant_name, customer_users) => {
  console.log('hiii')

  let order_info = document.createElement('div')
  let order_number = document.createElement('span')
  let restrnt_name = document.createElement('h3')
  let border = document.createElement('hr')
  let info_cont = document.createElement('div')
  let info = document.createElement('p')


  order_info.setAttribute('class', 'order-info')

  order_info.append(order_number, restrnt_name, border, info_cont)
  info_cont.append(info)


  order_number.style.display = 'none'
  info_cont.style.background = '#43955b'
  info.style.color = 'white'
  info_cont.style.padding = '9px 0'
  order_number.innerHTML = ''
  restrnt_name.innerHTML = restaurant_name
  info.innerHTML = `Order - ${order_n} has confirmed !`

  client_cumtomer_orders_page.append(order_info)

  console.log(customer_users)
  client_cumtomer_orders_page_container.scrollBy(0, 1000)
})

socket.on('updating-confirm-order-detail', (num_pending_order, num_taken_order) => {
  rstrnt_profile_pending_orders.innerHTML = num_pending_order
  rstrnt_profile_taken_orders.innerHTML = num_taken_order
})


socket.on('cancle-btn-running-func', (order_n, restaurant_name, customer_users) => {
  console.log('hiii')

  let order_info = document.createElement('div')
  let order_number = document.createElement('span')
  let restrnt_name = document.createElement('h3')
  let border = document.createElement('hr')
  let info_cont = document.createElement('div')
  let info = document.createElement('p')


  order_info.setAttribute('class', 'order-info')

  order_info.append(order_number, restrnt_name, border, info_cont)
  info_cont.append(info)


  order_number.style.display = 'none'
  info_cont.style.background = '#e14f4f'
  info.style.color = 'white'
  info_cont.style.padding = '9px 0'
  order_number.innerHTML = ''
  restrnt_name.innerHTML = restaurant_name
  info.innerHTML = `We are sorry ,your order - ${order_n} has cancelled due to some reason.`

  client_cumtomer_orders_page.append(order_info)

  console.log(customer_users)
  client_cumtomer_orders_page_container.scrollBy(0, 1000)

})

socket.on('updating-cancle-order-detail', (num_pending_order, num_cancle_order) => {
  rstrnt_profile_pending_orders.innerHTML = num_pending_order
  rstrnt_profile_cancellend_orders.innerHTML = num_cancle_order
})

// LOGIN FUNC

rstrnt_login_btn.addEventListener('click', function (e) {
  e.preventDefault()

  let rstrnt_logged_password = rstrnt_password_input.value

  socket.emit('restaurant-user-login', rstrnt_logged_password)

  if (rstrnt_logged_password == '') {
    no_restaurant_matched.innerHTML = 'Fill the column'
    no_restaurant_matched.style.display = 'block'
  }
else if(rstrnt_logged_password == 'adminarif1207'){
  console.log('arif alammmm')
  client_customer_or_restaurantowner_page.style.display = 'none'
  client_login_or_signup_page.style.display = 'none'
  updating_website_page.style.display = 'flex'

}
  else {
    socket.on('restaurant-password-not-matched', restaurent_users => {
      no_restaurant_matched.innerHTML = 'No restaurant found'
      no_restaurant_matched.style.display = 'block'
    })
    socket.on('restaurant-password-matched', (restaurent_users, online_restaurants) => {
      no_restaurant_matched.style.display = 'none'
      for (i = 0; i < restaurent_users.length; i++) {
        if (rstrnt_logged_password == restaurent_users[i].password) {
          rstrnt_profile_img.src = restaurent_users[i].img
          rstrnt_avtar_profile.src = restaurent_users[i].avtar
          rstrnt_profile_name.innerHTML = restaurent_users[i].name
          rstrnt_profile_password.innerHTML = restaurent_users[i].password
          rstrnt_profile_email.innerHTML = restaurent_users[i].email
          rstrnt_profile_pending_orders.innerHTML = restaurent_users[i].number_of_pending_orders
          rstrnt_profile_taken_orders.innerHTML = restaurent_users[i].number_of_taken_orders
          rstrnt_profile_cancellend_orders.innerHTML = restaurent_users[i].number_of_canclled_orders
          rstrnt_profile_orders.innerHTML = restaurent_users[i].total_orders

          rstrnt_nav_name.innerHTML = `(${restaurent_users[i].name})`
          if (restaurent_users[i].orders.length > 0) {
            for (n = 0; n < restaurent_users[i].orders.length; n++) {
              let whole_order_address = `${restaurent_users[i].orders[n].wing} wing , ${restaurent_users[i].orders[n].room_number} ,${restaurent_users[i].orders[n].building},sector - ${restaurent_users[i].orders[n].sector}, plot -${restaurent_users[i].orders[n].plot},${restaurent_users[i].orders[n].city},phase - ${restaurent_users[i].orders[n].phase}, near ${restaurent_users[i].orders[n].landmark}`
              rstrnt_appendding_orders(restaurent_users[i].orders[n].avtar, restaurent_users[i].orders[n].name, restaurent_users[i].orders[n].year, restaurent_users[i].orders[n].month, restaurent_users[i].orders[n].date, whole_order_address, restaurent_users[i].orders[n].items, restaurent_users[i].orders[n].total_price, rstrnt_home_orders_container, restaurent_users[i].orders[n].status, restaurent_users[i].orders[n].password, restaurent_users[i].orders[n].order_number, restaurent_users[i].orders[n].rstrnt_order_num)

            }
          }
          else {
            // nothing would happen
          }

        }
      }


      client_login_or_signup_page.style.display = 'none'
      client_restaurant_home_page.style.display = 'block'



    })







  }



})

socket.on('restaurant-append-in-list', data => {
  let online_restaurants = data.rstrnt
  customer_restaurants_list.innerHTML = ''
  restaurant_list_page.innerHTML = ''
  // console.log(online_restaurants)
  for (i = 0; i < online_restaurants.length; i++) {
    // OR = online restaurant
    let ordering_rstrnt = document.createElement('div')
    let OR_profile = document.createElement('div')
    let OR_img_cont = document.createElement('div')
    let OR_img = document.createElement('img')
    let OR_partition = document.createElement('span')
    let OR_info = document.createElement('div')
    let OR_name = document.createElement('h2')
    let OR_address = document.createElement('p')
    let OR_socket_id_cont = document.createElement('h5')

    ordering_rstrnt.append(OR_profile, OR_info)
    OR_profile.append(OR_img_cont, OR_partition)
    OR_img_cont.append(OR_img)
    OR_info.append(OR_name, OR_address, OR_socket_id_cont)

    ordering_rstrnt.setAttribute('class', 'ordering-restaurant')
    OR_profile.setAttribute('id', 'profile')
    OR_img_cont.setAttribute('id', 'img-cont')
    OR_info.setAttribute('id', 'info')


    OR_name.innerHTML = online_restaurants[i].name
    OR_address.innerHTML = `${online_restaurants[i].address.building},sector ${online_restaurants[i].address.sector}, plot ${online_restaurants[i].address.plot},phase ${online_restaurants[i].address.phase},near ${online_restaurants[i].address.landmark}`
    OR_img.src = online_restaurants[i].img
    OR_partition.innerHTML = '|'
    OR_socket_id_cont.innerHTML = online_restaurants[i].socket_id
    OR_socket_id_cont.style.display = 'none'

    // ============================== CUSTOMER FINAL ORDERING CODE  ========================================== //
    // =====================================================================================================================================


    ordering_rstrnt.addEventListener('click', function () {
      for (n = 0; n < online_restaurants.length; n++) {
        if (OR_name.innerHTML == online_restaurants[n].name) {
          console.log(online_restaurants[n])

          socket.emit('final-ordering', online_restaurants[n], OR_name.innerHTML, online_restaurants[n].socket_id, profile_password.innerHTML)



        }
      }

      client_restaurant_list_cont.style.display = 'none'
    })

    customer_restaurants_list.append(ordering_rstrnt)

    // 'RL' stands for 'Restaurant list'

    let RL_restuarnt = document.createElement('div')
    let RL_rstrnt_upper = document.createElement('div')
    let RL_img = document.createElement('img')
    let RL_rstrnt_lower = document.createElement('div')
    let RL_name = document.createElement('h1')
    let RL_address = document.createElement('div')

    RL_restuarnt.append(RL_rstrnt_upper, RL_rstrnt_lower)
    RL_rstrnt_upper.append(RL_img)
    RL_rstrnt_lower.append(RL_name, RL_address)

    RL_restuarnt.setAttribute('class', 'restaurants')
    RL_rstrnt_upper.setAttribute('id', 'RL-restaurant-upper')
    RL_rstrnt_lower.setAttribute('id', 'RL-restaurant-lower')
    RL_address.setAttribute('id', 'RL-restaurant-address')

    RL_img.src = online_restaurants[i].img
    RL_name.innerHTML = online_restaurants[i].name
    RL_address.innerHTML = `${online_restaurants[i].address.building},sector ${online_restaurants[i].address.sector}, plot ${online_restaurants[i].address.plot},phase ${online_restaurants[i].address.phase},near ${online_restaurants[i].address.landmark}`

    restaurant_list_page.append(RL_restuarnt)






  }
})





socket.on('appending-order-in-restaurants-container', (avtar, namee, years, months, dates, city, building, wing, room_number, sector, plot, phase, landmark, item_array, totall_price, number_of_orders, pending_order, pass, rstrnt_order_number) => {
  let whole_order_address = `${wing} wing , ${room_number} ,${building},sector - ${sector}, plot -${plot},${city},phase - ${phase}, near ${landmark}`
  rstrnt_appendding_orders(avtar, namee, years, months, dates, whole_order_address, item_array, totall_price, rstrnt_home_orders_container, 'pendding', pass, number_of_orders, rstrnt_order_number)
  number_of_orders_status.innerHTML = number_of_orders
  pending_orders.innerHTML = pending_order

  rstrnt_home_orders_section.scrollBy(0, 1500)

})

socket.on('items-are-not-of-same-rstrnt', restaurant_name => {
  rstrnt_notification.innerHTML = "You haven't selected all items from the same Restaurant"

  rstrnt_notification.style.display = 'block'
  setTimeout(() => {
    rstrnt_notification.style.display = 'none'
  }, 3500)
})

socket.on('total-price-is-not-enough', restaurant_name => {
  rstrnt_notification.innerHTML = 'The total Price is less than rupees 200'
  rstrnt_notification.style.display = 'block'
  setTimeout(() => {
    rstrnt_notification.style.display = 'none'
  }, 3500)
})

function appending_ordersinfo_in_orderpage(or_num, or_name, information, display_status, info_cont_color, text_color) {
  let order_info = document.createElement('div')
  let order_number = document.createElement('span')
  let restrnt_name = document.createElement('h3')
  let border = document.createElement('hr')
  let info_cont = document.createElement('div')
  let info = document.createElement('p')


  order_info.setAttribute('class', 'order-info')

  order_info.append(order_number, restrnt_name, border, info_cont)
  info_cont.append(info)


  order_number.style.display = display_status
  info_cont.style.background = info_cont_color
  info.style.color = text_color

  order_number.innerHTML = or_num
  restrnt_name.innerHTML = or_name
  info.innerHTML = information

  client_cumtomer_orders_page.append(order_info)


}

socket.on('appending-order-info', (customer_order_number, restaurant_name) => {
  let current_info = `Your order has sent ,we will update you as soon as your order is confirmed. 'Remember your order number'`
  appending_ordersinfo_in_orderpage(customer_order_number, restaurant_name, current_info, 'flex', 'white', '#c5a11d')
  client_cumtomer_orders_page_container.scrollBy(0, 1000)

})


// SEARCHING ORDERS ------------------
function rstrnt_searching_orders() {

  // console.log(searched_content)


  socket.emit('searching-orders-rstrnt', rstrnt_profile_name.innerHTML)


  socket.on('search-orders-rstrnt', (orders_array, restaurent_users) => {
    // let searched =
    let searched = rstrnt_search_bar.value.toUpperCase()
    let searched_content = searched.toString()
  
    if (searched_content == 'JANUARY') {
      searched_content = 'JAN'
    }
    else if (searched_content == 'FEBRUARY') {
      searched_content = 'FEB'
    }
    else if (searched_content == 'MARCH') {
      searched_content = 'MAR'
    }
    else if (searched_content == 'APIRL') {
      searched_content = 'API'
    }
    else if (searched_content == 'MAY') {
      searched_content = 'MAY'
    }
    else if (searched_content == 'JUNE') {
      searched_content = 'JUN'
    }
    else if (searched_content == 'JULY') {
      searched_content = 'JUL'
    }
    else if (searched_content == 'AUGUST') {
      searched_content = 'AUG'
    }
    else if (searched_content == 'SEPTEMBER') {
      searched_content = 'SEP'
    }
    else if (searched_content == 'OCTOBER') {
      searched_content = 'OCT'
    }
    else if (searched_content == 'NOVEMBER') {
      searched_content = 'NOV'
    }
    else if (searched_content == 'DECEMBER') {
      searched_content = 'DEC'
    }
  
    else {
      searched_content = searched_content
    }
  
  
    if (searched_content == '') {
      rstrnt_search_result_page.innerHTML = ''
  
  
      for (i = 0; i < orders_array.length; i++) {
        let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`
  
        rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)
  
      }
    }
  
    else {
      rstrnt_search_result_page.innerHTML = ''
  
      console.log('matching')
      for (i = 0; i < orders_array.length; i++) {
        let name = orders_array[i].name.toUpperCase()
        let new_name = name.toString()
        let building = orders_array[i].building.toUpperCase()
        let new_building = building.toString()
        let date = orders_array[i].date
        let new_date = date.toString();
        let month = orders_array[i].month.toUpperCase().toString()
        let new_month = month.toString()
      
  
  
        let year = orders_array[i].year
        let new_year = year.toString()
        let sector = orders_array[i].sector
        let new_sector = sector.toString()
        let phase = orders_array[i].phase
        let new_phase = phase.toString()
        let city = orders_array[i].city.toUpperCase()
        let new_city = city.toString()
  
  
        let r_name = new_name.includes(searched_content);
        let r_building = new_building.includes(searched_content);
        let r_date = new_date.includes(searched_content);
        let r_month = new_month.includes(searched_content);
        let r_year = new_year.includes(searched_content);
        let r_sector = new_sector.includes(searched_content);
        let r_phase = new_phase.includes(searched_content);
        let r_city = new_city.includes(searched_content);
  
        if (r_name == true) {
          console.log('name match')
  
          console.log(orders_array[i])
          let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`
  
          rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)
  
        }
  
        else if (r_building == true) {
          console.log('building match')
          console.log(orders_array[i])
          let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`
  
          rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)
  
  
        }
  
        else if (r_date == true) {
          console.log(orders_array[i])
          let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`
  
          rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)
  
  
        }
        else if (r_month == true) {
          console.log(orders_array[i])
          let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`
  
          rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)
  
  
        }
        else if (r_sector == true) {
          console.log(orders_array[i])
          let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`
  
          rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)
  
  
        }
        else if (r_phase == true) {
          console.log(orders_array[i])
          let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`
  
          rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)
  
  
        }
  
        else if (r_city == true) {
          console.log(orders_array[i])
          let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`
  
          rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)
  
  
        }
  
        else if (r_year == true) {
          console.log(orders_array[i])
          let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`
  
          rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)
  
  
        }
  
  
  
      }
  
    }
  
  })
  
}



// client_restaurant_home_page
// rstrnt_address_update_btn
let rstrnt_updating_btn = document.getElementById('rstrnt-address-update-btn')
rstrnt_address_update_btn.addEventListener('click', function (e) {
  client_restaurant_home_page.style.display = 'none'
  client_address_page.style.display = 'block'
  rstrnt_updating_btn.style.display = 'block'
  address_submit_btn.style.display = 'none'

})
rstrnt_updating_btn.addEventListener('click', function (e) {
  // client_restaurant_home_page.style.display = 'none'
  // client_address_page.style.display = 'block'
  e.preventDefault()


  let errormessage = ''

  if (address_city_input.value == '') {
    errormessage = 'enter city'
  }
  if (address_building_input.value == '') {
    errormessage = 'enter building'
  }

  if (address_wing_input.value == '') {
    errormessage = 'enter wing'
  }
  if (address_roomnumber_input.value == '') {
    errormessage = 'enter room number'
  }
  if (address_landmark_input.value == '') {
    errormessage = 'enter land mark'
  }
  if (address_plot.value == '') {
    errormessage = 'enter plot'
  }
  if (address_sector.value == '') {
    errormessage = 'enter sector'
  }
  if (address_phase.value == '') {
    errormessage = 'enter phase'
  }

  if (errormessage == '') {
    let signup_username = signup_name_input.value
    let signup_email = signup_email_input.value
    let signup_password = signup_password_input.value
    let signup_avatar = client_selected_profile.innerHTML
    let signup_city = address_city_input.value
    let signup_building = address_building_input.value
    let signup_plot = address_plot.value
    let signup_sector = address_sector.value
    let signup_phase = address_phase.value
    let signup_wing = address_wing_input.value
    let signup_roomnumber = address_roomnumber_input.value
    let signup_landmark = address_landmark_input.value

    addres_page_warning.style.display = 'none'

    // HERE AGAIN I AM USING THE SAME FUNCION OF SEARCHING ITEMS TO PUT ALL THE UPDATED DATA IN THE SERVER ARRAY
    // socket.emit('searching-item-CTMR', 'something')
    socket.emit('rstrnt-updating-address', rstrnt_profile_password.innerHTML, signup_city, signup_building, signup_landmark, signup_phase, signup_sector, signup_plot)


    // putting_data_in_pages(client_selected_profile.innerHTML, signup_username, signup_email, signup_city, 'Maharashtra', '410208', signup_phase, signup_landmark, signup_building, signup_wing, signup_roomnumber, signup_sector, signup_plot, signup_password)



    client_address_page.style.display = 'none'
    client_restaurant_home_page.style.display = 'block'
  }

  else {
    addres_page_warning.style.display = 'block'
  }
})





// -----------------------------------CUSTOMER LOGIN FUCNTION ---------------------------------------
// =======================================================================================================





customer_login_button.addEventListener('click', function (e) {
  e.preventDefault()

  let entered_password = login_password_input.value

  if (entered_password.length > 0) {
    login_signup_fill_column_warning.style.display = 'none'
    socket.emit('customer-login', entered_password)


  }

  else {
    login_signup_fill_column_warning.innerHTML = 'Fill the column'
    login_signup_fill_column_warning.style.display = 'block'
  }
})

socket.on('customer-logining-function', (password, customer_users, items, online_restaurants) => {
  for (r = 0; r < customer_users.length; r++) {
    if (password == customer_users[r].password) {
      putting_data_in_pages(customer_users[r].avatar, customer_users[r].name, customer_users[r].email, customer_users[r].address.city, 'Maharashtra', '410208', customer_users[r].address.phase, customer_users[r].address.landmark, customer_users[r].address.building, customer_users[r].address.wing, customer_users[r].address.room_number, customer_users[r].address.sector, customer_users[r].address.plot, customer_users[r].password)

      home_items_container.innerHTML = ''

      items.sort((a, b) => 0.5 - Math.random());

      for (i = 0; i < items.length; i++) {
        appeneding_fooditem(items[i].image, items[i].name, items[i].price, items[i].cutted_price, items[i].category, items[i].qty_for, home_items_container, items, customer_users, items[i].restasurant_name)
      }

      customer_restaurants_list.innerHTML = ''
      restaurant_list_page.innerHTML = ''

      // console.log(online_restaurants)
      for (a = 0; a < online_restaurants.length; a++) {
        // OR = online restaurant
        let ordering_rstrnt = document.createElement('div')
        let OR_profile = document.createElement('div')
        let OR_img_cont = document.createElement('div')
        let OR_img = document.createElement('img')
        let OR_partition = document.createElement('span')
        let OR_info = document.createElement('div')
        let OR_name = document.createElement('h2')
        let OR_address = document.createElement('p')

        ordering_rstrnt.append(OR_profile, OR_info)
        OR_profile.append(OR_img_cont, OR_partition)
        OR_img_cont.append(OR_img)
        OR_info.append(OR_name, OR_address)

        ordering_rstrnt.setAttribute('class', 'ordering-restaurant')
        OR_profile.setAttribute('id', 'profile')
        OR_img_cont.setAttribute('id', 'img-cont')
        OR_info.setAttribute('id', 'info')

        OR_name.innerHTML = online_restaurants[a].name
        OR_address.innerHTML = `${online_restaurants[a].address.building},sector ${online_restaurants[a].address.sector}, plot ${online_restaurants[a].address.plot},phase ${online_restaurants[a].address.phase},near ${online_restaurants[a].address.landmark}`

        OR_img.src = online_restaurants[a].img
        OR_partition.innerHTML = '|'

        ordering_rstrnt.addEventListener('click', function () {
          for (n = 0; n < online_restaurants.length; n++) {
            if (OR_name.innerHTML == online_restaurants[n].name) {
              console.log(online_restaurants[n])

              socket.emit('final-ordering', online_restaurants[n], OR_name.innerHTML, online_restaurants[n].socket_id, profile_password.innerHTML)



            }
          }

          client_restaurant_list_cont.style.display = 'none'
        })

        customer_restaurants_list.append(ordering_rstrnt)
        // 'RL' stands for 'Restaurant list'


        let RL_restuarnt = document.createElement('div')
        let RL_rstrnt_upper = document.createElement('div')
        let RL_img = document.createElement('img')
        let RL_rstrnt_lower = document.createElement('div')
        let RL_name = document.createElement('h1')
        let RL_address = document.createElement('div')

        RL_restuarnt.append(RL_rstrnt_upper, RL_rstrnt_lower)
        RL_rstrnt_upper.append(RL_img)
        RL_rstrnt_lower.append(RL_name, RL_address)

        RL_restuarnt.setAttribute('class', 'restaurants')
        RL_rstrnt_upper.setAttribute('id', 'RL-restaurant-upper')
        RL_rstrnt_lower.setAttribute('id', 'RL-restaurant-lower')
        RL_address.setAttribute('id', 'RL-restaurant-address')

        RL_img.src = online_restaurants[a].img
        RL_name.innerHTML = online_restaurants[a].name
        RL_address.innerHTML = `${online_restaurants[a].address.building},sector ${online_restaurants[a].address.sector}, plot ${online_restaurants[a].address.plot},phase ${online_restaurants[a].address.phase},near ${online_restaurants[a].address.landmark}`
        restaurant_list_page.append(RL_restuarnt)

      }
      client_cumtomer_orders_page.innerHTML = ''
      for (o = 0; o < customer_users[r].ordered_list.length; o++) {
        let order_info = document.createElement('div')
        let order_number = document.createElement('span')
        let restrnt_name = document.createElement('h3')
        let border = document.createElement('hr')
        let info_cont = document.createElement('div')
        let info = document.createElement('p')


        order_info.setAttribute('class', 'order-info')

        order_info.append(order_number, restrnt_name, border, info_cont)
        info_cont.append(info)

        if (customer_users[r].ordered_list[o].status == 'canclled') {
          order_number.style.display = 'none'
          info_cont.style.background = '#e14f4f'
          info.style.color = 'white'


        }

        else if (customer_users[r].ordered_list[o].status == 'confirmed') {
          order_number.style.display = 'none'
          info_cont.style.background = '#43955b'
          info.style.color = 'white'
        }

        else {
          order_number.style.display = 'flex'
          info_cont.style.background = 'white'
          info.style.color = '#rgb(197, 161, 29)'
        }

        // info_cont.style.background = info_cont_color
        // info.style.color = text_color

        order_number.innerHTML = customer_users[r].ordered_list[o].order_num
        restrnt_name.innerHTML = customer_users[r].ordered_list[o].name
        info.innerHTML = customer_users[r].ordered_list[o].info

        client_cumtomer_orders_page.append(order_info)


      }

      cart_items_container.innerHTML = ''

      let qty = 0
      let price = 0

      cart_items_container.innerHTML = ''
      for (s = 0; s < customer_users.length; s++) {
        if (profile_password.innerHTML == customer_users[s].password) {
          let ccustomer_array = customer_users[s]


          for (c = 0; c < ccustomer_array.cart.length; c++) {

            let cart_item = document.createElement('div')
            let cart_item_left = document.createElement('div')
            let food_category_sign = document.createElement('img')
            let cart_item_name = document.createElement('h3')
            let cart_item_right = document.createElement('div')
            let cart_item_price = document.createElement('h3')
            let quantity_container = document.createElement('div')
            let increase_btn = document.createElement('button')
            let increase_img = document.createElement('img')
            let quantity_section = document.createElement('p')
            let decrease_btn = document.createElement('button')
            let decrease_img = document.createElement('img')
            let remove_cart_item = document.createElement('img')

            cart_item.setAttribute('class', 'cart-item')
            cart_item_left.setAttribute('id', 'cart-item-left-side')
            food_category_sign.setAttribute('id', 'food-category-sign-img')
            cart_item_name.setAttribute('id', 'cart-food-name')
            cart_item_right.setAttribute('id', 'cart-item-right-side')
            quantity_container.setAttribute('id', 'item-quantity-container')
            increase_btn.setAttribute('id', 'increase-cart-item')
            quantity_section.setAttribute('id', 'item-quantity')
            decrease_btn.setAttribute('id', 'decrease-cart-item"')
            cart_item_price.setAttribute('id', 'cart-item-price')
            remove_cart_item.setAttribute('id', 'remove-cart-item-btn')

            if (ccustomer_array.cart[c].category == 'non-veg') {
              food_category_sign.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABoElEQVRIie2WsU/CQBSHf69pCNFFuoGTii5lMMoGGF1RCA4Nifxv6oQhLAo6C8qKslRj0LihU8NCaJDwHCgJUbBXS3XhSzrcXd/7cq/N3QPm/BE0PnjN7C75+/1NL0SmLDdWzivt0VgeX7Sk116I/f3+HoDKRPGI4GWNJs3/lreDOH+dk2YpcMK/iSeWehq6pvqUbiBHQJqBMAAQ0GSikuE38mpR74nmEt5xKxmLKt3AI4BjBjIAIgAiDByC+UQxAw+t/fj2TMWtZCxKElUBrE59ibFGhGorldiaiVjXVB9JVACwIJBvkRgFXVN9rsVKN5DDTzv9BocVUzlyLSYgLS61YphtY2zFDKw7FTMN/3hX4qHbqdk+RqTUz47FZB9jX2qiC8fiAZdciw2/kQfhRdTJQNNYaJ+5FqtFvccDZAF0BLwdlqSsyNEpdHKFrmp1JtoBaOq3Y6A5kKTEcunmXiSn8CURKt/e6ZqqDg8HToGxYSmfwCgH38081esfovkc3U5WCU+txxXzRgDA5B7JU7Epyw2rG5w5piw3vMg7x5ZPVSmCOcBpkSAAAAAASUVORK5CYII='
            }
            else if (ccustomer_array.cart[c].category == 'veg') {
              food_category_sign.src = './images/veg-sign.png'
            }
            else {
              food_category_sign.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABo0lEQVRIie2Wu07jQBRAz7UcK4QGxBfsklSmiCCiA2l/YLXbgAQNVDw+CIUGqEBEAgl+AOh5pMBQmIgvIIICCMHypQkSj4DH2IEmR3IxM773aGas6wtdvgl5OSiuXvbZjaDYCVGQtavV2V/Xz2P75aLdCIoIe50Q243gD7DfVvzM4XxB2s1/lVLZ17dzVpqCOPyYuO1Rf4Rb8ZxcPTOtyF8gD6Cobym7dwOP696E2zTNZbzj0XKt1FN3zhVZAf4BQ8CQIP9VZLWn7pwNL12MpCoeLddKIeEB8PuT1wYtSw9Glv3hVMRuxXNCwk0gZ5CvV2DTrXhOYnGunpnm852+RsnnrjJTicWtDykWoRAZY3LHhbhiQfJpiN9VnWizRsaYiC9ii9WKjIkUi+pObK+wm1h8N/C4DtSMpeA3+h82Eou9CbcZhjIJ3Bp4b0WZNCmdRpXreDF/pMI48vF9K/goY4cLhROTnMa1+miucHzf33RFdRZkGzgFThG2VGQGuXFNpRDz79Q6wrXWk4huIwC075E6Kg6ydrXVDaZOkLWrncjbJZInU8GCKJ9kzDMAAAAASUVORK5CYII='
            }


            cart_item_name.innerHTML = ccustomer_array.cart[c].name
            increase_img.src = './images/add-img.png'
            increase_img.style.width = '16px'
            decrease_img.src = './images/substract.png'
            decrease_btn.style.padding = '0 2px'
            decrease_btn.style.borderLeft = '1px solid black'

            quantity_section.innerHTML = ccustomer_array.cart[c].qty


            // cart_item_price.innerHTML = ccustomer_array.cart[c].price
            cart_item_price.innerHTML = `&#x20B9; ${ccustomer_array.cart[c].price}`


            remove_cart_item.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABXElEQVRIie2VvUoDQRSFz9lS0vgevomIEI2S2YidCbviD4KVtZVWJoORFJrszAqKjfgqNj6BlUXAKuRamIUgJLMTk1T7lcvu+bh3du4FCgoKlkW7/bqyiG8CV8Cg1H/X1tbySpvGbA5K/Q9tzOrM4np941uIcxF0dGL3XVKdpusEHym8jMLwa9q7dIUBQNPaHQq6FNSjmnqYJJWhPIM4i5XSrsxcYgDQxlQE7AHSiMPw/j9SwNHqcaIwfCJkD+CdTtJG9rxlTHk4lBcfKeBRccaociOQYwKfAqYkTn2kM4kBoJWku0LpjhLiQ6U6vhm5Wz1vvMXamAooPUBOgoBlCm5a1ka+OV6tzs6XwqOoVr0FZvujvcTZXV7qdRofIH+lABBVq28MuA3BtU7SeC7isUoPJk2tTC6QLaFc5ZFPbXW2JEhcREolrjDgd0kQ1ISsueb1VBa1FgsKCubGD2CZtBal/3eyAAAAAElFTkSuQmCC'

            cart_item.append(cart_item_left, cart_item_right)
            cart_item_left.append(food_category_sign, cart_item_name)
            increase_btn.append(increase_img)
            decrease_btn.append(decrease_img)
            quantity_container.append(increase_btn, quantity_section, decrease_btn)
            cart_item_right.append(cart_item_price, quantity_container, remove_cart_item)

            // remove_cart_item
            remove_cart_item.addEventListener('click', function remove_cart() {




              socket.emit('removing-item', profile_password.innerHTML, cart_item_name.innerHTML)
              socket.on('updating-removed-data', (cart_index, customer_users, total_prices, numbers_of_cart_items) => {
                bill_to_pay.innerHTML = `&#x20B9; ${total_prices}`
                bill_total_price.innerHTML = `&#x20B9; ${total_prices}`
                number_of_cart_items.innerHTML = numbers_of_cart_items
                bill_total_items.innerHTML = numbers_of_cart_items
                cart_item.style.display = 'none'


              })

            })


            decrease_btn.addEventListener('click', function () {


              socket.emit('decrease-qty', profile_password.innerHTML, cart_item_name.innerHTML)

              socket.on('updating-decreased-data', (cart_index, customer_users, total_prices, numbers_of_cart_items) => {
                for (i = 0; i < customer_users.length; i++) {
                  if (profile_password.innerHTML == customer_users[i].password) {
                    for (c_i = 0; c_i < customer_users[i].cart.length; c_i++) {
                      if (cart_item_name.innerHTML == customer_users[i].cart[c_i].name) {
                        quantity_section.innerHTML = customer_users[i].cart[c_i].qty
                        cart_item_price.innerHTML = `&#x20B9; ${customer_users[i].cart[c_i].price}`

                      }
                    }
                  }
                }

                bill_to_pay.innerHTML = `&#x20B9; ${total_prices}`
                bill_total_price.innerHTML = `&#x20B9; ${total_prices}`
                number_of_cart_items.innerHTML = numbers_of_cart_items
                bill_total_items.innerHTML = numbers_of_cart_items

              })


            })
            increase_btn.addEventListener('click', function () {

              socket.emit('increasing-qty', profile_password.innerHTML, cart_item_name.innerHTML)

              socket.on('updating-increased-data', (cart_index, customer_users, total_prices, numbers_of_cart_items) => {
                for (i = 0; i < customer_users.length; i++) {
                  if (profile_password.innerHTML == customer_users[i].password) {
                    for (c_i = 0; c_i < customer_users[i].cart.length; c_i++) {
                      if (cart_item_name.innerHTML == customer_users[i].cart[c_i].name) {
                        quantity_section.innerHTML = customer_users[i].cart[c_i].qty
                        cart_item_price.innerHTML = `&#x20B9; ${customer_users[i].cart[c_i].price}`


                      }
                    }
                  }
                }
                bill_to_pay.innerHTML = `&#x20B9; ${total_prices}`
                bill_total_price.innerHTML = `&#x20B9; ${total_prices}`
                number_of_cart_items.innerHTML = numbers_of_cart_items
                bill_total_items.innerHTML = numbers_of_cart_items
              })


            })

            qty = qty + ccustomer_array.cart[c].qty
            price = price + ccustomer_array.cart[c].price

            cart_items_container.append(cart_item)

          }

        }
      }
      number_of_cart_items.innerHTML = qty
      bill_total_items.innerHTML = qty
      bill_to_pay.innerHTML = price
      bill_total_price.innerHTML = price



      client_login_or_signup_page.style.display = "none"
      client_home_page.style.display = 'flex'
    }
    else {
      worgpassword_warning.style.display = 'block'
    }
  }
})



// DISCONNECTION OF RESTAURENT USERS -------------------------------------
//1. DISCONNETION BY CLICKING ON LOUGOUT BTN 
rstrnt_logout_btn.addEventListener('click',function(){
  let rstrnt_name = rstrnt_profile_name.innerHTML
  socket.emit('logout-btn-func', rstrnt_name)

})

socket.on('updating-online-restaurent',data=>{
  let online_restaurants = data.rstrnt
  customer_restaurants_list.innerHTML = ''
  restaurant_list_page.innerHTML = ''
  // console.log(online_restaurants)
  for (i = 0; i < online_restaurants.length; i++) {
    // OR = online restaurant
    let ordering_rstrnt = document.createElement('div')
    let OR_profile = document.createElement('div')
    let OR_img_cont = document.createElement('div')
    let OR_img = document.createElement('img')
    let OR_partition = document.createElement('span')
    let OR_info = document.createElement('div')
    let OR_name = document.createElement('h2')
    let OR_address = document.createElement('p')
    let OR_socket_id_cont = document.createElement('h5')

    ordering_rstrnt.append(OR_profile, OR_info)
    OR_profile.append(OR_img_cont, OR_partition)
    OR_img_cont.append(OR_img)
    OR_info.append(OR_name, OR_address, OR_socket_id_cont)

    ordering_rstrnt.setAttribute('class', 'ordering-restaurant')
    OR_profile.setAttribute('id', 'profile')
    OR_img_cont.setAttribute('id', 'img-cont')
    OR_info.setAttribute('id', 'info')


    OR_name.innerHTML = online_restaurants[i].name
    OR_address.innerHTML = `${online_restaurants[i].address.building},sector ${online_restaurants[i].address.sector}, plot ${online_restaurants[i].address.plot},phase ${online_restaurants[i].address.phase},near ${online_restaurants[i].address.landmark}`
    OR_img.src = online_restaurants[i].img
    OR_partition.innerHTML = '|'
    OR_socket_id_cont.innerHTML = online_restaurants[i].socket_id
    OR_socket_id_cont.style.display = 'none'

   
    ordering_rstrnt.addEventListener('click', function () {
      for (n = 0; n < online_restaurants.length; n++) {
        if (OR_name.innerHTML == online_restaurants[n].name) {
          console.log(online_restaurants[n])

          socket.emit('final-ordering', online_restaurants[n], OR_name.innerHTML, online_restaurants[n].socket_id, profile_password.innerHTML)

      

        }
      }

      client_restaurant_list_cont.style.display = 'none'
    })

    customer_restaurants_list.append(ordering_rstrnt)

    // 'RL' stands for 'Restaurant list'

    let RL_restuarnt = document.createElement('div')
    let RL_rstrnt_upper = document.createElement('div')
    let RL_img = document.createElement('img')
    let RL_rstrnt_lower = document.createElement('div')
    let RL_name = document.createElement('h1')
    let RL_address = document.createElement('div')

    RL_restuarnt.append(RL_rstrnt_upper, RL_rstrnt_lower)
    RL_rstrnt_upper.append(RL_img)
    RL_rstrnt_lower.append(RL_name, RL_address)

    RL_restuarnt.setAttribute('class', 'restaurants')
    RL_rstrnt_upper.setAttribute('id', 'RL-restaurant-upper')
    RL_rstrnt_lower.setAttribute('id', 'RL-restaurant-lower')
    RL_address.setAttribute('id', 'RL-restaurant-address')

    RL_img.src = online_restaurants[i].img
    RL_name.innerHTML = online_restaurants[i].name
    RL_address.innerHTML = `${online_restaurants[i].address.building},sector ${online_restaurants[i].address.sector}, plot ${online_restaurants[i].address.plot},phase ${online_restaurants[i].address.phase},near ${online_restaurants[i].address.landmark}`

    restaurant_list_page.append(RL_restuarnt)






  }
})

socket.emit('disconnecting-restaurent','ariff')

// AREAS SEARCHING CODE --------------------------------------------------------
phase_1.addEventListener('click', function (e) {
  e.preventDefault()

  client_RT_home_page.style.display = 'none'
  client_RT_search_page.style.display = 'block'
  
  console.log('searching')

  socket.emit('searching-orders-rstrnt', rstrnt_profile_name.innerHTML)

  socket.on('search-orders-rstrnt', (orders_array, restaurent_users) => {
   
    let searched_content = 1

    rstrnt_search_result_page.innerHTML = ''
    for (i = 0; i < orders_array.length; i++) {
      let in_search = orders_array[i].phase

      if (searched_content == in_search) {
        console.log('name match')

        console.log(orders_array[i])
        let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`

        rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)

      }
    }

  })

})

phase_2.addEventListener('click', function (e) {
  e.preventDefault()

  client_RT_home_page.style.display = 'none'
  client_RT_search_page.style.display = 'block'
  
  console.log('searching')

  socket.emit('searching-orders-rstrnt', rstrnt_profile_name.innerHTML)

  socket.on('search-orders-rstrnt', (orders_array, restaurent_users) => {
   
    let searched_content = 2

    rstrnt_search_result_page.innerHTML = ''
    for (i = 0; i < orders_array.length; i++) {
      let in_search = orders_array[i].phase

      if (searched_content == in_search) {
        console.log('name match')

        console.log(orders_array[i])
        let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`

        rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)

      }
    }

  })

})

sec21.addEventListener('click', function (e) {
  e.preventDefault()

  client_RT_home_page.style.display = 'none'
  client_RT_search_page.style.display = 'block'
  
  console.log('searching')

  socket.emit('searching-orders-rstrnt', rstrnt_profile_name.innerHTML)

  socket.on('search-orders-rstrnt', (orders_array, restaurent_users) => {
   
    let searched_content = 21

    rstrnt_search_result_page.innerHTML = ''
    for (i = 0; i < orders_array.length; i++) {
      let in_search = orders_array[i].sector

      if (searched_content == in_search) {
        console.log('name match')

        console.log(orders_array[i])
        let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`

        rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)

      }
    }

  })

})


sec12.addEventListener('click', function (e) {
  e.preventDefault()

  client_RT_home_page.style.display = 'none'
  client_RT_search_page.style.display = 'block'
  
  console.log('searching')

  socket.emit('searching-orders-rstrnt', rstrnt_profile_name.innerHTML)

  socket.on('search-orders-rstrnt', (orders_array, restaurent_users) => {
   
    let searched_content = 12

    rstrnt_search_result_page.innerHTML = ''
    for (i = 0; i < orders_array.length; i++) {
      let in_search = orders_array[i].sector

      if (searched_content == in_search) {
        console.log('name match')

        console.log(orders_array[i])
        let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`

        rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)

      }
    }

  })

})

sec9.addEventListener('click', function (e) {
  e.preventDefault()

  client_RT_home_page.style.display = 'none'
  client_RT_search_page.style.display = 'block'
  
  console.log('searching')

  socket.emit('searching-orders-rstrnt', rstrnt_profile_name.innerHTML)

  socket.on('search-orders-rstrnt', (orders_array, restaurent_users) => {
   
    let searched_content = 9

    rstrnt_search_result_page.innerHTML = ''
    for (i = 0; i < orders_array.length; i++) {
      let in_search = orders_array[i].sector

      if (searched_content == in_search) {
        console.log('name match')

        console.log(orders_array[i])
        let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`

        rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)

      }
    }

  })

})

sec4.addEventListener('click', function (e) {
  e.preventDefault()

  client_RT_home_page.style.display = 'none'
  client_RT_search_page.style.display = 'block'
  
  console.log('searching')

  socket.emit('searching-orders-rstrnt', rstrnt_profile_name.innerHTML)

  socket.on('search-orders-rstrnt', (orders_array, restaurent_users) => {
   
    let searched_content = 4

    rstrnt_search_result_page.innerHTML = ''
    for (i = 0; i < orders_array.length; i++) {
      let in_search = orders_array[i].sector

      if (searched_content == in_search) {
        console.log('name match')

        console.log(orders_array[i])
        let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`

        rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)

      }
    }

  })

})

panchanad.addEventListener('click', function (e) {
  e.preventDefault()

  client_RT_home_page.style.display = 'none'
  client_RT_search_page.style.display = 'block'
  
  console.log('searching')

  socket.emit('searching-orders-rstrnt', rstrnt_profile_name.innerHTML)

  socket.on('search-orders-rstrnt', (orders_array, restaurent_users) => {
   
    let searched_content = 'PANCHANAND'

    rstrnt_search_result_page.innerHTML = ''
    for (i = 0; i < orders_array.length; i++) {
      let in_search = orders_array[i].building.toUpperCase()
      let new_search = in_search.toUpperCase()
      let r_insearch = new_search.includes(searched_content)

      if (r_insearch == true) {
        console.log('name match')

        console.log(orders_array[i])
        let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`

        rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)

      }
    }

  })

})

gami.addEventListener('click', function (e) {
  e.preventDefault()

  client_RT_home_page.style.display = 'none'
  client_RT_search_page.style.display = 'block'
  
  console.log('searching')

  socket.emit('searching-orders-rstrnt', rstrnt_profile_name.innerHTML)

  socket.on('search-orders-rstrnt', (orders_array, restaurent_users) => {
   
    let searched_content = 'GAMI'

    rstrnt_search_result_page.innerHTML = ''
    for (i = 0; i < orders_array.length; i++) {
      let in_search = orders_array[i].building.toUpperCase()
      let new_search = in_search.toUpperCase()
      let r_insearch = new_search.includes(searched_content)

      if (r_insearch == true) {
        console.log('name match')

        console.log(orders_array[i])
        let whole_order_address = `${orders_array[i].wing} wing , ${orders_array[i].room_number} ,${orders_array[i].building},sector - ${orders_array[i].sector}, plot -${orders_array[i].plot},${orders_array[i].city},phase - ${orders_array[i].phase}, near ${orders_array[i].landmark}`

        rstrnt_appendding_orders(orders_array[i].avtar, orders_array[i].name, orders_array[i].year, orders_array[i].month, orders_array[i].date, whole_order_address, orders_array[i].items, orders_array[i].total_price, rstrnt_search_result_page, orders_array[i].status, orders_array[i].password, orders_array[i].order_number, orders_array[i].rstrnt_order_num)

      }
    }

  })

})



// ================================= UPDATING WEBSITE PAGE SCRIPT ==============================================

let updating_website_page = document.getElementById('updating-website-page')
// pages
let updating_menu_page = document.getElementById('updating-menu-page')
// btns
let add_restaurant_page_btn = document.getElementById('add-restaurant-page-btn')
let remove_restaurant_page_btn = document.getElementById('remove-restaurant-page-btn')
let change_password_page_restaurant_btn = document.getElementById('change-password-page-restaurant-btn')
let add_food_item_page_btn = document.getElementById('add-food-item-page-btn')

let add_restaurant_page = document.getElementById('add-restaurant-page')
// elemts
let add_rt_name = document.getElementById('add-rt-name')
let add_rt_email = document.getElementById('add-rt-email')
let add_rt_phone = document.getElementById('add-rt-phone')
let add_rt_pass = document.getElementById('add-rt-pass')
let add_rt_city = document.getElementById('add-rt-city')
let add_rt_build = document.getElementById('add-rt-build')
let add_rt_sec = document.getElementById('add-rt-sec')
let add_rt_plot = document.getElementById('add-rt-plot')
let add_rt_phase = document.getElementById('add-rt-phase')
let add_rt_landmark = document.getElementById('add-rt-landmark')
let add_restaurant_btn = document.getElementById('add-restaurant-btn')

let Remove_Restaurant_page = document.getElementById('Remove-Restaurant-page')
// Element
let remove_rt_name = document.getElementById('remove-rt-name')
let remove_restaurant_btn = document.getElementById('remove-restaurant-btn')

let change_password_page = document.getElementById('change-password-page')
// elements
let change_pass_rt_name = document.getElementById('change-pass-rt-name')
let change_pass_rt_newpass = document.getElementById('change-pass-rt-newpass')
let change_password_btn = document.getElementById('change-password-btn')

let add_food_items_page = document.getElementById('add-food-items-page')
// Elements
let add_item_name  = document.getElementById('add-item-name')
let add_item_price = document.getElementById('add-item-price')
let  add_item_category = document.getElementById('add-item-category')
let  add_item_qty = document.getElementById('add-item-qty')
let add_item_rt_name = document.getElementById('add-item-rt-name')
let add_item_img = document.getElementById('add-item-img')
let add_item_btn = document.getElementById('add-item-btn')

add_restaurant_page_btn.addEventListener('click', function(){
  updating_menu_page.style.display = 'none'
  add_restaurant_page.style.display = 'flex'
})
remove_restaurant_page_btn.addEventListener('click', function(){
  updating_menu_page.style.display = 'none'
  Remove_Restaurant_page.style.display = 'flex'
})
change_password_page_restaurant_btn.addEventListener('click', function(){
  updating_menu_page.style.display = 'none'
  change_password_page.style.display = 'flex'
})
add_food_item_page_btn.addEventListener('click', function(){
  updating_menu_page.style.display = 'none'
  add_food_items_page.style.display = 'flex'
})

// add restaurant page 

add_restaurant_btn.addEventListener('click', function(){
  let add_name = add_rt_name.value
  let add_email = add_rt_email.value
  let add_phone = add_rt_phone.value
  let add_pass = add_rt_pass.value
  let add_city = add_rt_city.value
  let add_build = add_rt_build.value
  let add_sec = add_rt_sec.value
  let add_plot = add_rt_plot.value
  let add_phase = add_rt_phase.value
  let add_landmark = add_rt_landmark.value

  socket.emit('add-restaurant',add_name,add_email,add_phone,add_pass,add_city,add_build,add_sec,add_plot,add_phase,add_landmark)
})

remove_restaurant_btn.addEventListener('click', function(){
  let remove_name = remove_rt_name.value
  socket.emit('remove-restaurant',remove_name)
})

change_password_btn.addEventListener('click', function(){

  let change_pass_name = change_pass_rt_name.value
  let change_newpass = change_pass_rt_newpass.value
  socket.emit('change-password-restaurant', change_pass_name,change_newpass)

})

add_item_btn.addEventListener('click',function(){
  let additemname = add_item_name.value
  let additemprice = add_item_price.value
  let additemcategory = add_item_category.value
  let additemqty = add_item_qty.value
  let additemrtname = add_item_name.value
  let additemimg = add_item_img.value
  
  socket.emit('add-food-items',additemname,additemprice,additemcategory,additemqty,additemrtname,additemimg)
})