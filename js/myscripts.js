
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
	+"<p class='footer-name'>Bo Zhao</p>"
	+"<ul class='contact-list'>"
	+"<li><a href='https://www.me.uh.edu/' target='_blank'>Department of Mechanical and Aerospace Engineering</a></li>"
	+"<li>Cullen College of Engineering</li>"
	+"<li>University of Houston</li>"
	+"<li>Office: W222, Engineering Building 2</li>"
	+"<li>Email: bzhao8-at-uh-dot-edu</li>"
	+"</ul>"
	+"</div>"
	+"<div class='footer-col'>"
	+"<p class='footer-name'>Links</p>"
	+"<ul class='contact-list'>"
	+"<li><a href='https://scholar.google.com/citations?user=KuwaRycAAAAJ&hl=en' target='_blank'>Google Scholar</a></li>"
	+"<li><a href='https://orcid.org/0000-0002-3648-6183' target='_blank'>ORCID</a></li>"
	+"<li><a href='https://www.youtube.com/@Everything-Thermal' target='_blank'>Everything Thermal on YouTube</a></li>"
	+"<li><a href='https://uh.edu/' target='_blank'>University of Houston</a></li>"
	+"</ul>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='footer-text'>&copy; Thermal PhotoniX Lab &middot; Website support: Chris Cai & academic.bio</div>"
	+"</footer>";
