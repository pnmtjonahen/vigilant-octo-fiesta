/* global fetch */

'use strict';

var expect = require('chai').expect;

describe('Index', () => {
    beforeEach(() => {
        fetch.resetMocks();
        document.body.innerHTML = `<div id="blog"></div>
<ul class="w3-ul w3-hoverable w3-white">
  <template id="popular-post">
    <li class="w3-padding-16" >
        <a href="#{id}" onclick="view.setCurrentBlog('{id}'); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;" class="blog">
          <img src="{imageurl}" alt="{imagealt}" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">{title}</span><br>
          <span>{description}</span>
        </a>
    </li>
  </template>
</ul>`;
    });

    it('should load index.js', () => {
        fetch.mockResponseOnce(JSON.stringify([{
                id: "id1",
                title: "TEST BLOG",
                description: "Test Blog",
                date: "1-4-2018",
                imageurl: "https://www.w3schools.com/w3images/woods.jpg",
                imagealt: "nature"
            }
          ]));
        fetch.mockResponseOnce('# Simple Text\n\nParagraph\n\n[![img](img.png)](link)\n\n```code\n\n<xml></xml>\n\n```\n\n- one\n- two\n- three\n\n', { status: 300, headers: { 'content-type': 'text/plain; charset=UTF-8'} });
        var index = require('./index.js');
        expect(index !== undefined);
    });
});
