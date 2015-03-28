---
layout: default
lang: en
---
<div class="main">
        <div class="content">
             <section id="reviews" class="reviews">   
                            <h2 class="page-title" >Reviews </h2>
                            <div class="reviews-wrapper"> 
                                {% for review in site.data.reviews.reviews %}
                                                                   
                                      <div class="review">     
                                          <div class="review-inside">
                                               <h4 id="everything-was-great">{{ review.title.[page.lang] }}</h4>
                                              <div class="review-details">{{ review.visitor }} / {{ review.date }}</div>
                                              <p>{{ review.review.[page.lang] }}</p>
                                           </div>  
                                       </div>
                                    
                                {% endfor %}
                         </div>
                    </section>
       </div>
   </div>