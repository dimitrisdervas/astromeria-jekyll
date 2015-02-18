---
layout: default
---

{% for room in site.rooms %}

<div class="main">
        <div class="content">
          <h1 class="entry-title">{{ room.title }}   </h1> 
        <img src="{{ room.image | prepend: '/assets/'  | prepend: site.baseurl | prepend: site.url }} " alt="">          
        <p> {{ room.content }} </p>
        <table>
            {% tablerow season in site.data.season %}
              {{ season.title }}
            {% endtablerow %}
            {% tablerow season in site.data.season %}
              {{ season.row-1 }}
            {% endtablerow %}
        </table>
    </div>
</div>

{% endfor %}