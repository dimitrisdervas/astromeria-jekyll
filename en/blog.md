---
layout: default
lang: gr
---



<div class="main">
        <div class="content">
        {% for blogpost in site.posts %}
          <h1 class="entry-title">{{ blogpost.title }}   </h1> 
        <img src="{{ blogpost.image | prepend: '/assets/'  | prepend: site.baseurl | prepend: site.url }} " alt=""> 
        <p> {{ blogpost.content }} </p>
        {% endfor %}
    </div>
    {% include sidebar.html %}
</div>
