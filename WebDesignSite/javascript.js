var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.userAgent);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() 
  }