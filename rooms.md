---
layout: default
---



<div class="main">
        <div class="content">
        {% for room in site.rooms %}
          <h1 class="entry-title">{{ room.title }}   </h1> 
          {% for image in room.images | limit: 1 %}
        <img src="{{ image.image | prepend: '/assets/wide/'  | prepend: site.baseurl | prepend: site.url }} " alt="">
        {% endfor %}
        <p> {{ room.content }} </p>
        <div class="normal-prices">
                <ul>
                    <li>
                        <h3>Low Season</h3>
                        <h4>12/2-13/6</h4>
                        <h2>{{ room.low }}/night</h2>
                    </li>
                    <li>
                        <h3>Medium Season</h3>
                        <h4>12/2-13/6</h4>
                        <h2>{{ room.medium }}/night</h2>
                    </li>
                    <li>
                        <h3>High Season</h3>
                        <h4>12/2-13/6</h4>
                        <h2>{{ room.high }}/night</h2>
                    </li>
                </ul>
                <p>*Prices Valid till 27 Sept '14, Breakfast not included</p>

        </div>
        {% endfor %}
    </div>
</div>

