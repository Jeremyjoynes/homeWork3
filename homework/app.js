//used info from here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
var str1 = "The quick brown fox jumps over the lazy dog";
var div = document.getElementById('guid');
div.innerHTML = str1;
//var holder = "";
(function ($) {

    function generate()
          {
          ///	"The quick brown fox jumps over the lazy dog"
            // New Code Here
            //var ele = document.getElementById('generate');
            var wpl = str1.split(' ');
            var holder = "";
            for(var i = 0; i < wpl.length; i++)
            {
               holder += wpl[i] + '<br>';

            }
              div.innerHTML = holder;
          };

    $('#generate').on("click", function (event)
    {
        $('#guid').html(generate());
        //linePerWord()

    });
function SortbyWords()
{
///	"The quick brown fox jumps over the lazy dog"
  // New Code Here
  //var ele = document.getElementById('generate');
  var ws = str1.toLowerCase().split(' ').sort();
  var holder1 = "";
  for(var i = 0; i < ws.length; i++)
  {
     holder1 += ws[i] + '<br>';

  }
    div.innerHTML = holder1;
};

$('#SortbyWords').on("click", function (event)
{
    $('#guid').html(SortbyWords());
      //div.innerHTML = str1;
      //sortWords()
});

function SortbyLengthofWord() {
  ///"The quick brown fox jumps over the lazy dog"
  // New Code Here
  var sl = str1.split(' ').sort(function(a, b)

  {
  return a.length - b.length;
  });
  var holder="";
  for(var i =0; i < sl.length; i++)
  {
    holder += sl[i] + '<br>';
  }
  div.innerHTML = holder;
};

$('#SortbyLengthofWord').on("click", function (event) {
    $('#guid').html(SortbyLengthofWord());
      //div.innerHTML = str1;
      //sortLength()
});

function reverse() {
  //"The quick brown fox jumps over the lazy dog"
  // New Code Here
var backwards = str1.split(' ').reverse().join(' ');
div.innerHTML = backwards;
};

$('#reverse').on("click", function (event) {
    $('#guid').html(reverse());
      //div.innerHTML = str1; testRev()
});

})(jQuery);

/* 1) Change the function Generate to do the following:
Return each word from "The quick brown fox jumps over the lazy dog" on a new line
Use a string manipulation function to do so
2) Add a new button that is called 'Sort by Words'
This button will take the string "The quick brown fox jumps over the lazy dog" and sort all the words alphabetically
This will display each word on a new line
3) Add a new button that is called 'Sort by Length of Word'
This button will take the string "The quick brown fox jumps over the lazy dog" and sort the words by their length
This will display each word on a new line
4) Add a new button that is called reverse
Takes the string "The quick brown fox jumps over the lazy dog"
This will print each word in reverse but not change their position in the original sentence.*/
//Turn this in by sending me a link to your github repository that contains the solution. With a Readme and License file.
function linePerWord()
{
  var strSplit = str1.split(' ');
  console.log("-------------");
  for(var i=0; i< strSplit.length;i++)
  {
    console.log(strSplit[i]);
  }

}
function sortWords()
{
  var str2 = str1.toLowerCase();
  var sw = str2.split(' ')
  sw.sort();
  for(var i=0; i<sw.length;i++)
  {
    console.log(sw[i]);

  }
  //div.innerHTML = sw;
}

function sortLength()
{
  var sl = str1.split(' ');
  sl.sort(function(a, b) {
  return a.length - b.length;
});

  for(var i =0; i < sl.length; i++)
  {
    console.log(sl[i]);

  }
  //div.innerHTML = sl;

}

function testRev()
{
  var rev = str1.split(' ');
  //var num = rev.length;
  //debugger;
  for(var i = rev.length; i >= 0; i--)
  {
      console.log(rev[i]);
      //div.innerHTML = rev;
    //  debugger;
  }
  console.log('reversed the info.');
}
