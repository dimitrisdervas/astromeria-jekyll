---
layout: default
---
<div class="main">
        <h2 class="page-title">Booking</h2>
<form class="booking" action="/">


    <input type="text" name="ci_name" id="ci_name" placeholder="your name">



    <input type="email" name="ci_email" id="ci_email" class="datepicker" placeholder="your email">




    <input type="text" name="arrive" id="arrive" class="datepicker hasDatepicker" placeholder="arrival"><button type="button" class="ui-datepicker-trigger"><i class="fa fa-calendar"></i></button>

    <input type="text" name="depart" id="depart" class="datepicker hasDatepicker" placeholder="departure"><button type="button" class="ui-datepicker-trigger"><i class="fa fa-calendar"></i></button>



   <div class="dk_container dk_theme_ci dk" id="dk_container_adults" tabindex="0" aria-hidden="true" style="display: block;">
       <select name="adults" id="adults" class="dk">
        <option selected="" disabled="">adults</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        </select>
    </div>

    <div class="dk_container dk_theme_ci dk" id="dk_container_children" tabindex="0" aria-hidden="true" style="display: block;">
        <select name="children" id="children" class="dk">
        <option selected="" disabled="">children</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        </select>
    </div>




    <div class="dk_container dk_theme_ci dk" id="dk_container_room" tabindex="0" aria-hidden="true" style="display: block;">
        <a class="dk_toggle dk_label" style="width: 125px;">room</a>
        <div class="dk_options">
            <ul class="dk_options_inner" role="main" aria-hidden="true">
                <li><a data-dk-dropdown-value="1">Single</a></li>
                <li><a data-dk-dropdown-value="2">Deluxe Double</a></li>
                <li><a data-dk-dropdown-value="3">Suite I</a></li>
                <li><a data-dk-dropdown-value="4">Suite II</a></li>
                <li><a data-dk-dropdown-value="5">King's Suite</a></li>
            </ul>
        </div>
       
    </div>

    <textarea name="comments" id="ci_comments" cols="30" rows="10" placeholder="comments"></textarea>

    <button type="submit">submit</button>


    </form>
    </div>