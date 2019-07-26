(function ($) {
    
    var GetAttrOptions = function ($el, attrMap) {
        var attrOptions = {};
        $.each(attrMap, function (name, value) {
            var attr = 'data-' + name;
            var hasAttr = $el[0].hasAttribute(attr);
            if (hasAttr) {
                attrOptions[name] = $el.attr(attr);
            }
        });
        return attrOptions;
    };
    var GetOptions = function ($el, baseOptions, options) {
        baseOptions = baseOptions || {};
        return $.extend($.extend(baseOptions, GetAttrOptions($el, baseOptions)), options || {});
    };

    var copyToClipboard = function ($textarea) {
        var textarea = document.createElement('textarea');
        textarea.textContent = $textarea.val();
        document.body.appendChild(textarea);

        var selection = document.getSelection();
        var range = document.createRange();
        
        range.selectNode(textarea);
        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand('copy');
        selection.removeAllRanges();

        document.body.removeChild(textarea);       
    };
    var CopyButton = function ($el, options) {
        var baseOptions = { target: null };
        options = GetOptions($el, baseOptions, options);
        if (options.target !== null) {
            $el.on('click', function () {
                var $target = $(options.target);
                if ($target.length > 0) {                    
                    copyToClipboard($target);
                }
            });
        }
    };
    var SideMenuScroll = function ($sidebar) {
            var $window = $(window),
                offset = $sidebar.offset(),
            topPadding = 15;
        $window.scroll(function () {
            
            if ($(window).width() >= 768 && $window.scrollTop() > offset.top) {
                $sidebar.stop().animate({
                    marginTop: $window.scrollTop() - offset.top + $('header > nav').outerHeight(true) + topPadding
                });
            } else {
                $sidebar.stop();
                $sidebar.css('margin-top', 0);
            }
        });

    };
    
    $.WebUtils = {
        CopyButton: CopyButton,
        SideMenuScroll: SideMenuScroll
    };
    $.CopyButton = CopyButton;
    
}(jQuery));