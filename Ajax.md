# Ajax API Calls

Hi everyone, I've been thinking about writing on how to make AJAX call immediately after I wrote the blog, "What is AJAX" 
[https://dev.to/gyi2521/what-is-ajax-34c2], about a month ago; however, I've been busy with my first group project, "InstagramClone", from my Boot-camp class, 
so here I am.. writing the second part of AJAX a month later..;)
Good thing is that I can use the AJAX call examples from my project.

In our "InstagramClone" project, we used jQuery's AJAX "GET" method on the client side to retrieve photos from the back-end.

<b>	
	 $.ajax({ url: 'api/photos', method: 'GET' })</br>
					.then(function (data) {</br>
						let content = '';</br>
						if (data != '') {</br>
						   data.forEach(e => {</br>
						   content += `some code`;</br>
		 code continues...</br>
</b>
 Our GET method starts with '$.ajax' followed by an object with two properties which are url and method. The Url field is populated with the API address that 
will provide the desired data from the back-end and the method field is populated with 'GET'. The next line, '.then(function(data))' is the process that 
executes once the data has been retrieved from the ajax call. In our case, we iterated through the data and displayed the photos on the screen.

Now, lets look at AJAX POST(=create new) method. The following is the code we used to add a comment to a photo.

<b>	
$.ajax({ url: '/api/comments', method: 'POST', data:allComment})</br>
.then(function () {</br>
$(`#${photoid}_divForComments`).append($(`</br>            
Instagram_Clone ${theComment}`));</br>
});</br>
</b>

The code is similar to GET method but we populated "POST" for the method field and also added the data that contains newly created user comment.

The PUT(=update) method, is really identical to POST method as you can see below:
<b>	
$.ajax({ url: '/api/comments', method: 'PUT', data:likes})</br>
.then(function() {</br>
some code...</br>
});</br>
For the DELETE method, we are passing in photoId to delete.
</b>
<b>	
$.ajax({ url: `/api/photo/${$(this).attr('photoId')}`, method: "DELETE" })</br>
.then(function (data) {</br>
some code...</br>
})</br>
.catch(function (err) {</br>
some code...</br>
});</br>
</b>
In above example, we just added '.catch(function (err)' to get the error message if there is any, and you can add this to all other calls as well.

With AJAX, we can simply update the parts of a web page without reloading the whole page, and this makes the process much faster and responsive for users.

Thanks for reading!