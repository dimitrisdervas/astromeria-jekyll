---
layout: default
---



<div class="main">
    <h2 class="page-title">Offers</h2>
 <div class="offers-menu">
            <ul>
                {% assign rooms = site.rooms | sort: 'order' %}        
                {% for room in rooms  %}
                    <li>
                        <a href="#{{ room.section }}" >{{ room.title }}</a>
                    </li>
                {% endfor %}
            </ul>
        </div>
       <section class="offer">
            {% for room in site.rooms %}
             <div class="offer-item">
                        
                        <img src="{{ room.image }} " alt="">          
                        <h1 id="{{ room.section }}" class="entry-title" ><a href="{{ room.url}}">{{ room.title }}</a></h1> 
                        <p> {{ room.content }} </p>
                        <div class="offers">
                            <ul>
                                    <li class="item">
                                        <h4>2 nights - {{ room.2nights-sale }}</h4>
                                        <h2><span>only</span>{{ room.2nights-offer }}</h2>
                                    </li >
                                    <li class="item">
                                    <a href="/booking">
                                         <h4>3 nights - {{ room.3nights-sale }}</h4>
                                        <h2><span>only</span>{{ room.3nights-offer }}</h2>
                                     </a>
                                    </li>
                                    <li class="item" >
                                         <h4>5 nights - {{ room.5nights-sale }}</h4>
                                        <h2><span>only</span>{{ room.5nights-offer }}</h2>
                                    </li>

                                </ul>
                            <p>*Prices Valid till 27 Sept '14, Breakfast not included</p>
                        </div>
                    </div>
            {% endfor %}
            </section>



</div>
<div class="reservation-bottom">
{% include reservation.html %}
    </div>