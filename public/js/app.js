;$(function(){
  function PagiMk (pagiMkDom) {
    this.index = 1;
    this.total = 100;
    this.$pagiMk = $(pagiMkDom)
  }

  PagiMk.prototype.init = function(config) {
    var index = this.index = config.index;
    var total = this.total = config.total;
    var $pagiMk = this.$pagiMk;

    var $allA = $pagiMk.find('a');
    var $doms = this.$doms = {
      "$left": $allA.eq(0),
      "$leftMore": $allA.eq(1),
      "$1": $allA.eq(2),
      "$2": $allA.eq(3),
      "$3": $allA.eq(4),
      "$4": $allA.eq(5),
      "$5": $allA.eq(6),
      "$rightMore": $allA.eq(7),
      "$right": $allA.eq(8),
    }

    this.show($allA)
    
    if (index == 1) {
      this.hide($doms.$left);
      this.hide($doms.$leftMore);
      this.hide($doms.$1);
      this.hide($doms.$2);
    }
    if (index == total) {
      this.hide($doms.$right);
      this.hide($doms.$rightMore);
      this.hide($doms.$4);
      this.hide($doms.$5);
    }

    if (index == 2) {
      this.hide($doms.$leftMore);
      this.hide($doms.$1);
    }
    if (index == total - 1) {
      this.hide($doms.$rightMore);
      this.hide($doms.$5);
    }
    if (index == 3) {
      this.hide($doms.$leftMore);
    }
    if (index == total - 2) {
      this.hide($doms.$rightMore);
    }

    
    this.setIndex()
  }

  PagiMk.prototype.setIndex = function() {
    var index = this.index;
    var $doms = this.$doms
    this.set($doms.$1, index-2)
    this.set($doms.$2, index-1)
    this.set($doms.$3, index)
    this.set($doms.$4, index+1)
    this.set($doms.$5, index+2)
  }

  PagiMk.prototype.show = function($dom) {
    $dom.css({
      display: 'inline-block'
    })
  }
  PagiMk.prototype.hide = function($dom) {
    $dom.css({
      display: 'none'
    })
  }
  PagiMk.prototype.set = function($dom, val) {
    $dom.html(val)
  }

  window.PagiMk = PagiMk;
});