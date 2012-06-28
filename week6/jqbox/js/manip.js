
// DECLARE VARIABLES

var faded = Boolean(false);
var colorSet = ['#00ffff', '#33ff66', '#ff6633', '#cc33ff'];
var currentColor = Number(0);

// INITIALIZE VALUES ON PAGE LOAD

$ (document).ready(function() // init
{
    $ ('#box').css('background', colorSet[currentColor]);
});

// PROGRAM WRAPPER

$ (function()
{
    // FADE BUTTON ********************
    
    $ ('#fade').click(function()
    {
        // check fade state
        if (faded == false)
        {
            $ ('#box').fadeOut('slow');
            faded = true;
        }
        else
        {
            $ ('#box').fadeIn('slow');
            faded = false;
        }
    });
    
    // COLOR BUTTON ********************
    
    $ ('#color').click(function()
    {
        // check color state and update
        if (currentColor != 3)
        {
            currentColor += 1;
        }
        else
        {
            currentColor = 0;
        }
        
        // apply new color
        $ ('#box').css('background', colorSet[currentColor]);
    });
    
    // MOVE BUTTON ********************
    
    $ ('#move').click(function()
    {
        // check current left margin string
        if ($('#box').css('margin-left') == '100px')
        {
            $('#box').css('margin-left', '420px'); // move to right side
        }
        else
        {
            $('#box').css('margin-left', '100px'); // move to left side
        }
    });
    
    // REFRESH BUTTON ********************
    
    $ ('#refresh').click(function()
    {
        location.reload(); // refresh page
    });
    
});