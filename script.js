const quoteText=document.querySelector('.quote'),
      quoteBtn=document.querySelector('button'),
      authorName=document.querySelector('.author'),
      
      soundBtn=document.querySelector('.sound'),
      copyBtn=document.querySelector('.copy'),
       twitterBtn=document.querySelector('.twitter');
function randomQuote(){
    quoteBtn.classList.add('loading');
    quoteBtn.innerText="Loading quote...";
    fetch('https://api.quotable.io/random').then(res=>res.json()).then(result=>{
        console.log(result);
        quoteText.innerText=result.content;
        authorName.innerText=result.author;
        quoteBtn.innerText="New Quote";
        
        quoteBtn.classList.remove('loading');
       
        
    });
    
}
soundBtn.addEventListener('click',()=>{
                          
    let utterrance=new SpeechSynthesisUtterance(` ${quoteText.innerText} by ${authorName.innerText}`);
speechSynthesis.speak(utterrance);

});
copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener('click',()=>{
    let twitter=`https://twitter.com/intent/tweet? url=${quoteText.innerText}`;
    window.open(twitter,"_blank");
});
quoteBtn.addEventListener('click',randomQuote);

 quoteBtn.onclick=function(){
    this.innerHTML= "<div class='loader'></div>";
    setTimeout(()=>{
        this.innerHTML="New Quote+";
    },2000);
}
      

