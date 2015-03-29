---
layout: default
lang: en
---

<div class="main">
 <div class="content">
    <h2 class="page-title">{{ site.data.strings.strings.[page.lang].facilities }}</h2>
        <section class="facilities">

                <div class="facility-wrapper">      
                     <ul>
                                   {% for facility in  site.data.facilities.facilities.[page.lang] %}
                                   
                                      <li class="facility">
                                           <div class="facility {% cycle 'left', 'right' %} ">
                                            
            <img src="{{  facility.image  | prepend: '/assets/'  | prepend: site.baseurl | prepend: site.url }}" width="525" height="200" alt="">
                                        
                                            </div>
                                           <div class="facility {% cycle 'right', 'left' %}" >
                                              <h1> {{ facility.facility }} </h1>
                                           </div>
                                      </li>                                           
                                  {% endfor %} 
                              </ul>
                           <p>{{ site.data.offer.offer.valid.[page.lang] }}</p>
                      </div>                      
            </section>
            </div>
      </div>