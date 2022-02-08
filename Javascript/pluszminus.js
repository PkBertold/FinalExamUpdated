jQuery(function(){
    var j = jQuery; // jQuery variable
    var addInput = '#qty'; // Ez az Input mező ID-ja amit meg fogunk változtatni
    var n = 1;
    
    // Az N értékét beállítjuk 1-re
    j(addInput).val(n);
  
    // Hozzáadunk az N-hez 1-et
    j('.plusbutton').on('click', function(){
      j(addInput).val(++n);
    })
  
    j('.minbutton').on('click', function(){
      // Ha az N több mint 1 akkor kivon 1-et
      if (n >= 1) {
        j(addInput).val(--n);
      } else {
      // Ellenkező esetben ne csináljon semmit
      }
    });
  });