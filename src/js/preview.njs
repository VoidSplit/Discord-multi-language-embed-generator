<div class="colored_line" id="preview_color"></div>
<div class="inner">
    {% if thumbnail.url %}
        <div class="thumbnail">
            <div class="wrapper">
                <img src="{{ thumbnail.url }}" alt="" id="preview_thumbnail">
            </div>
        </div>
    {% endif %}
    <div class="main_content">
        {% if author.name or author.icon_url %}
        <div class="name_wrapper">
            {% if author.icon_url %}
            <div class="img">
                <img src="{{ author.icon_url }}" alt="" srcset="" id="preview_author_icon">
            </div>
            {% endif %}
            {% if author.name %}
            <p class="name"><span id="preview_author_name">{{ author.name }}</span></p>
            {% endif %}
        </div>
        {% endif %}
        {% if title %}
        <div class="title">
            <a {% if url %}href="{{ url }}"{% endif %} id="preview_url"><span id="preview_title">{{ title }}</span></a>
        </div>
        {% endif %}
        {% if description %}
        <div class="description">
            <span id="preview_description">{{ description }}</span>
        </div>
        {% endif %}
        {% if fields | length %}
        <div id="fields">
            {% for field in fields %}
            <div class="field_zone">
                <div class="field">
                    <div class="field_name">{{ field.name }}</div>
                    <div class="field_value">{{ field.value }}</div>
                </div>
            </div>
            {% endfor %}
        </div>
        {% endif %}
        {% if image.url %}
        <div class="img_element">
            <div class="wrapper">
                <img src="{{ image.url }}" alt="" id="preview_image">
            </div>
        </div>
        {% endif %}
        {% if footer.text or footer.icon_url %}
        <div class="footer">
            {% if footer.icon_url %}
            <div class="img">
                <img src="{{ footer.icon_url }}" alt="" id="preview_footer_icon">
            </div>
            {% endif %}
            {% if footer.text %}
            <p class="text"><span id="preview_footer_text">{{ footer.text }}</span></p>
            {% endif %}
            <span class="decoration"></span>
            {% if timestamp %}
            <div class="timestamp"><span id="preview_timestamp">{{ timestamp }}</span></div>
            {% endif %}
        </div>
        {% endif %}
    </div>
</div>
