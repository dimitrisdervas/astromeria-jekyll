---
layout: default
---

{% for blogpost in site.posts %}

<div class="main">
        <div class="content">
          <h1 class="entry-title">{{ blogpost.title }}   </h1> 
        <img src="{{ blogpost.image | prepend: '/assets/'  | prepend: site.baseurl | prepend: site.url }} " alt=""> 
         
        <p> {{ blogpost.content }} </p>
    </div>
</div>

{% endfor %}