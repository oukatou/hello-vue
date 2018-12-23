export default class{
    constructor(options){
		this.options=options;
		this.element=this.options.element;
		this.config=Object.assign(this.defaults,this.options);
        this.render()
	}
    static initClass(){
        this.prototype.defaults={
            link: document.URL,
            title: document.title,
            description: '',
            media: null,
            facebook: true,
            twitter: true,
            pinterest: true,
            googleplus: true,
            linkedin: true,
            size: 'medium'
        }
        this.prototype.templates={
            facebook: '<li><i class="sns-icon si-facebook"></i></li>',
            twitter: '<li><i class="sns-icon si-twitter"></i></li>',
            linkedin: '<li><i class="sns-icon si-linkedin"></i></li>',
            pinterest: '<li><i class="sns-icon si-pinterest"></i></li>',
            googleplus: '<li><i class="sns-icon si-gplus"></i></li>'
        };
    }
  render(){
    const shareTitle = this.config.title;
    const shareLink = this.config.link;
    const shareMedia = this.config.media;
    const shareDescription = this.config.description;
    const twitterText = this.config.twitterText ? this.config.twitterText : shareDescription;
    let output = '';
    if (this.config.facebook) { output += this.templates.facebook; }
    if (this.config.twitter) { output += this.templates.twitter; }
    if (this.config.linkedin) { output += this.templates.linkedin; }
    if (this.config.pinterest) { output += this.templates.pinterest; }
    if (this.config.googleplus) { output += this.templates.googleplus; }
    output=`<ul>${output}</ul>`
    this.element.innerHTML=output
    if (this.config.size=='large'){
        this.element.querySelectorAll('.sns-icon').forEach(function(ele){ele.classList.add('si-large')})
    }
    else if(this.config.size=='small'){
        this.element.querySelectorAll('.sns-icon').forEach(function(ele){ele.classList.add('si-small')})
    }
    else{
        this.element.querySelectorAll('.sns-icon').forEach(function(ele){ele.classList.add('si-medium')})
    }

    this.element.querySelector('.si-facebook').addEventListener('click',()=> window.open(`//www.facebook.com/share.php?m2w&s=100&p[url]=${encodeURIComponent(shareLink)}&p[images][0]=${encodeURIComponent(shareMedia)}&p[title]=${encodeURIComponent(shareTitle)}&p[summary]=${encodeURIComponent(shareDescription)}`,'Facebook','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'));
    this.element.querySelector('.si-twitter').addEventListener('click',()=> window.open(`https://twitter.com/intent/tweet?original_referer=${encodeURIComponent(shareLink)}&text=${encodeURIComponent(twitterText)} ${encodeURIComponent(shareLink)}`,'Twitter','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'));
    this.element.querySelector('.si-pinterest').addEventListener('click',()=> window.open(`//pinterest.com/pin/create/button/?url=${encodeURIComponent(shareLink)}&media=${encodeURIComponent(shareMedia)}&description=${encodeURIComponent(shareTitle)}`,'Pinterest','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'));
    this.element.querySelector('.si-linkedin').addEventListener('click',()=> window.open(`//www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareLink)}&title=${encodeURIComponent(shareTitle)}&source=${encodeURIComponent(shareLink)}`,'LinkedIn','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'));
    this.element.querySelector('.si-gplus').addEventListener('click',()=> window.open(`//plus.google.com/share?url=${encodeURIComponent(shareLink)}`,'GooglePlus','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'));

  }
}