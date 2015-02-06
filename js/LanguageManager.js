var root = "/stageopdrachten/find-og-indsaet-ordet";

var configJSON = $.getJSON(root+"/config.json", function(data){ configJSON = data; });
var languageJSON =  $.getJSON(root+"/json/language.json", function(data){ languageJSON = data; });

Apply();

//Apply the language defined in the config file.
function Apply()
{
    if( configJSON.config != undefined && languageJSON.nl != undefined )
    {
        for( languages in languageJSON )
        {
            if( languages == configJSON.config[0].language )
            {
                for( parents in languageJSON[languages] )
                {
                    for( elements in languageJSON[languages][parents] )
                    {
                        $.each(languageJSON[languages][parents],function(key,value)
                        {
                            document.getElementById(key).innerHTML = value;
                        });
                    }
                }
            }
        }
    }
    else
    {
        //Wait for jQuery to set the variables.
        setTimeout(Apply, 20);
    }
}