---
layout: default
lang: en
---



<div class="main">
        <div class="content">
         {% assign rooms = site.rooms | where:'lang', page.lang %}
        {% for room in rooms %}
          <h1 class="entry-title">{{ room.title }}   </h1> 
          {% for image in room.images | limit: 1 %}
        <img src="{{ image.image | prepend: '/assets/wide/'  | prepend: site.baseurl | prepend: site.url }} " alt="">
        {% endfor %}
        <p> {{ room.content }} </p>
        <div class="normal-prices">        
                    <ul>
                        <li>
                            <h3>{{ site.data.season.seasons.[page.lang].low.name }}</h3>
                            <h4>{{ site.data.season.seasons.[page.lang].low.date }}</h4>
                            <h2>{{ site.data.prices.price.[room.section].low }}/night</h2>
                        </li>
                        <li>
                            <h3>{{ site.data.season.seasons.[page.lang].medium.name }}</h3>
                            <h4>{{ site.data.season.seasons.[page.lang].medium.date }}</h4>
                            <h2>{{ site.data.prices.price.[room.section].medium }}/night</h2>
                        </li>
                        <li>
                            <h3>{{ site.data.season.seasons.[page.lang].high.name }}</h3>
                            <h4>{{ site.data.season.seasons.[page.lang].high.date }}</h4>
                            <h2>{{ site.data.prices.price.[room.section].high }}/night</h2>
                        </li>
                    </ul>
                    <p>*Prices Valid till 27 Sept '14, Breakfast not included</p>

            </div>
        {% endfor %}
    </div>
</div>

