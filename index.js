
document.querySelector('.cross').style.display="none";
document.querySelector('.hamburger').addEventListener("click", ()=>{

	document.querySelector('.sidebar').classList.toggle('sidebar-go');





if (document.querySelector('.sidebar').classList.contains('sidebar-go')) {
  document.querySelector('.menu').style.display="inline";
  document.querySelector('.cross').style.display="none";


}
else{
	setTimeout(()=>{
  document.querySelector('.cross').style.display="inline ";

},300);

  document.querySelector('.menu').style.display="none";
}
});




// Animation




const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));   

const observer1 = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('showleft');
        }
    });
});
const hiddenElements1 = document.querySelectorAll('.hiddenleft');
hiddenElements1.forEach((el) => observer1.observe(el)); 

const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('showbottom');
        }
    });
});
const hiddenElements2 = document.querySelectorAll('.hiddenbottom');
hiddenElements2.forEach((el) => observer2.observe(el)); 

const observer3 = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('showprogress');
        }
    });
});
const hiddenElements3 = document.querySelectorAll('.hiddenprogress');
hiddenElements3.forEach((el) => observer3.observe(el));