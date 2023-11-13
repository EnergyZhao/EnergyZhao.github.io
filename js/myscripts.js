
function getLastModifiedDate(){
	var d = new Date(document.lastModified),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	var date = [month, day, year].join('-');
	document.write("<i>last update: " + date +"</i>");
}


document.getElementById("myFooter").innerHTML =
	"<footer class='site-footer'>"
	+"<div class='wrapper'>"
	+"<div class='footer-col-wrapper'>"
	+"<div class='footer-col'>"
	+"<ul class='contact-list'>"
	+"<li>"
	+"Bo Zhao"
	+"</li>"
	+"<li><a href='http://www.me.uh.edu/'"
	+"target='_blank'>Department of Mechanical Engineering</a></li>"
	+"<li>Cullen College of Engineering</li>"
	+"<li>University of Houston</li>"
	+"<li>Office: N234, Engineering Building 1</li>"
	+"<li>Email: bzhao8-at-uh-dot-edu</li>"
	+"</ul>"
	+"</div>"
	+"<div class='footer-col'>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='footer-text'>Website support: Chris Cai & academic.bio</div>"
	+"</footer>";