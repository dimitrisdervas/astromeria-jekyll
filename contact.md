---
layout: default
---

<div class="main">

    <h2 class="page-title">Contact</h2>
<iframe width='100%' height='500px' frameBorder='0' src='https://a.tiles.mapbox.com/v4/dimdev.l8h1acp0/attribution,zoompan,geocoder,share.html?access_token=pk.eyJ1IjoiZGltZGV2IiwiYSI6IlM2RWhINUEifQ.f8o-OSDJ_OwozYsL89QvoQ'></iframe>
<div class="content">
    <form id="cform" class="contact" action="contact.php">
            <p>
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="name">
            </p>
            <p>
                <label for="email">Your Email:</label>
                <input type="email" id="email" name="email">
                </p>
            <p>
                <label for="subject">Subject:</label>
                <input type="text" id="subject" name="subject">
            </p>
            <p>
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </p>
            <p><input id="contact-submit" type="submit" value="Send" class="button"></p>
        </form>
    </div>
    {% include sidebar.html %}
    </div>