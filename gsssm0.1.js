;(function () { 
    "use strict";
    
    var canvases = [];
    
    var high = Number(window.innerHeight) - 57;                     // 36 for status bar, 21 for title
    var wide = Number(window.innerWidth) - 20                       // 20 for good measure
    var cvsdim = Math.min(high,(wide-200)/2.0);
    
    var cvs2overwrap = $("<div/>").addClass("SSM_gswrap");
    var cvs2 = canvas({ resizable:false, width:cvsdim, height: cvsdim });
    canvas.container.prepend(cvs2overwrap);
    cvs2overwrap.append(cvs2.title_anchor).append(cvs2.wrapper).append(cvs2.caption_anchor);
    cvs2.overwrap = cvs2overwrap;
    
    var cvs1overwrap = $("<div/>").addClass("SSM_gswrap");
    var cvs1 = canvas({ resizable:false, width:cvsdim, height: cvsdim });
    canvas.container.prepend(cvs1overwrap);
    cvs1overwrap.append(cvs1.title_anchor).append(cvs1.wrapper).append(cvs1.caption_anchor);
    cvs1.overwrap = cvs1overwrap;

    canvases.push(cvs1);
    canvases.push(cvs2);
    
    //this.canvas.wrapper.css({float:"left"});
    
    sphere({ canvas: cvs1, visible: false });                       // Activate cvs1.
    sphere({ canvas: cvs2, visible: false });                       // Activate cvs2.
    
    //this.canvas.wrapper.css({margin: '4px'});
    //$(this.canvas.__canvas_element).css({border: '1px solid #AAA'});
    //$(this.canvas.__overlay_element).css({border: '1px solid #AAA'});
    
    print('', {end:''});
    print_options({width:200, height:cvsdim});

    var myStylesLocation = "https://raw.githack.com/thehappyt/SSModels/gh-pages/gsssm0.1.css";
    $('<link rel="stylesheet" type="text/css" href="'+myStylesLocation+'" >') .appendTo("head");

    var global = window;
    function Export( exports ) {
        if (!global.gsssm) global.gsssm = {}
        for(var id in exports) {
            if (!global[id]) global[id] = exports[id]
            gsssm[id] = exports[id]
        }
    }

    var exports = { canvases: canvases }
    Export(exports)
}) ();
