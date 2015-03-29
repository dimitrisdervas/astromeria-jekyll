---
layout: default
lang: en
---


<div class="main">
 <div class="content">
    <h2 class="page-title">{{ site.data.strings.strings.[page.lang].offers }}</h2>
        <section class="rooms">
         {% assign rooms = site.rooms | where:'lang', page.lang | sort: 'order' %}
         {% for room in rooms %}
                <div class="room">
                           <h1 id="{{ room.section }}" class="entry-title" ><a href="{{ room.url}}">{{ room.title }}</a></h1> 
                           <img src="{{ site.data.rooms.rooms.[room.section].image | prepend: '/assets/wide/'  | prepend: site.baseurl }} " alt="">           
                           <p> {{ room.content }} </p>
                           <div class="offers-prices">
                          <ul>
                               {% for offer in  site.data.rooms.rooms.[room.section].offers %}
                                      <li class="offer-price">              
                                          <h4>{{ site.data.season.[offer.season].[page.lang] }}</h4>
                                          <h5>{{ offer.nights }} {{ site.data.strings.strings.[page.lang].nights }}</h5>
                                          <h2>{{ offer.price }} </h2>
                                          
                                          <!-- Price with Fireplace -->
                                      {% if offer.fireplace != nill %}
                                      <h3>{{ site.data.strings.strings.[page.lang].fireplace }}</h3>
                                       <h2> {{ offer.fireplace }} </h2>
                                      {% endif %}
                                      
                                      </li>                                           
                                  {% endfor %} 
                              </ul>
                           <p>{{ site.data.offer.offer.valid.[page.lang] }}</p>
                      </div>
                       </div>
               {% endfor %}
            </section>
      </div>
</div>